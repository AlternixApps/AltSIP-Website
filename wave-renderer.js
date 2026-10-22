/* Stylized RMS strands. Decorative continuation never extends the audio file. */
(() => {
  'use strict';
  const scope=typeof window==='undefined'?self:window;
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const smooth=v=>{const x=clamp(v,0,1);return x*x*(3-2*x);};
  const warmTone=(color,amount)=>{const target=[180,156,75];return '#'+target.map((to,i)=>Math.round(parseInt(color.slice(1+i*2,3+i*2),16)*(1-amount)+to*amount).toString(16).padStart(2,'0')).join('')+color.slice(7);};
  const frames=new WeakMap();
  const sizes=new WeakMap();
  const resizeObserver=typeof ResizeObserver==='function'?new ResizeObserver(entries=>{
    for(const entry of entries){
      const size=sizes.get(entry.target);
      if(size){size.width=entry.contentRect.width;size.height=entry.contentRect.height;}
    }
  }):null;
  function canvasSize(canvas){
    if(canvas.__altSipSize)return canvas.__altSipSize;
    let size=sizes.get(canvas);
    if(!size){
      size={width:canvas.clientWidth,height:canvas.clientHeight};
      sizes.set(canvas,size);
      resizeObserver?.observe(canvas);
    }
    // Non-DOM canvas fixtures have no ResizeObserver; callers can still resize them.
    if(!resizeObserver){size.width=canvas.clientWidth;size.height=canvas.clientHeight;}
    return size;
  }
  function release(canvas){resizeObserver?.unobserve(canvas);sizes.delete(canvas);frames.delete(canvas);}
  // A stable span avoids the old jump from a full preview into a cropped window.
  const view=(position,duration)=>({span:duration,start:clamp(position,0,duration)*.65});
  function seekFraction({fraction=0,position=0,duration=21.824}={}){
    const total=Math.max(.001,duration),v=view(position,total);
    return clamp((v.start+clamp(fraction,0,1)*v.span)/total,0,1);
  }
  function render(canvas,{waves=[],weights=[1],position=0,playing=false,clean=0,record=false,reduced=false,muted=false,dark=false,accent='#168d75',tone=null,motionTime,cleanVariant='plush',density='full',contour='natural',warmth=0,pixelRatio=typeof devicePixelRatio==='number'?devicePixelRatio:1}={}){
    const size=canvasSize(canvas),w=size.width,h=size.height,mini=density==='mini';
    if(!w||!h)return;
    const ratio=mini?1:Math.min(pixelRatio||1,w<=600?1.25:1.5);
    if(canvas.width!==Math.round(w*ratio)||canvas.height!==Math.round(h*ratio)){
      canvas.width=Math.round(w*ratio);canvas.height=Math.round(h*ratio);
    }
    const ctx=canvas.getContext('2d');ctx.setTransform(ratio,0,0,ratio,0,0);ctx.clearRect(0,0,w,h);
    const duration=waves.find(x=>x?.duration)?.duration||21.824,current=clamp(position,0,duration);
    const now=performance.now()/1000;
    let state=frames.get(canvas);
    if(!state){state={last:now,clock:0,intensity:0};frames.set(canvas,state);}
    const dt=Math.min(.06,Math.max(0,now-state.last));state.last=now;
    if(!reduced&&playing){state.clock+=dt;state.intensity=Math.min(1,state.intensity+dt*3);}
    const external=Number.isFinite(motionTime),clock=reduced?0:external?motionTime:state.clock;
    const intensity=reduced?0:external?1:state.intensity;
    const viewport=view(current,duration);
    if(external&&!reduced)viewport.start=clock*.65;
    const count=mini?Math.max(40,Math.min(64,Math.floor(w/5))):Math.max(72,Math.min(w<=600?128:220,Math.floor(w/5))),step=viewport.span/count,spacing=w/count;
    const warm=clamp(warmth,0,1),tint=color=>warm?warmTone(color,warm):color;
    const mid=h*.47,green=tint(tone||(dark?'#6ed2b2':accent)),gray=dark?'#a8b7c1':'#6b7c8d';
    const colors=[tint(tone?tone+'00':'#32ba9100'),tint(tone?tone+'99':dark?'#89d9be99':'#59bc9da0'),green,green,tint(tone?tone+'80':dark?'#89d9be80':'#5cc7a294'),tint(tone?tone+'00':'#32ba9100')];
    // Build the active channels once per paint. Sampling used to allocate a
    // reduce callback and repeatedly inspect every wave for every fibre.
    const channels=[];
    for(let i=0;i<waves.length;i++){
      const bins=waves[i]?.bins,weight=weights[i]||0;
      if(bins?.length&&weight)channels.push({bins,weight,last:bins.length-1,index:i});
    }
    const raw=t=>{
      const unit=clamp(t/duration,0,1);let sum=0;
      for(let i=0;i<channels.length;i++){
        const {bins,weight,last}=channels[i],x=unit*last,index=x|0,f=x-index;
        sum+=(bins[index]*(1-f)+(bins[Math.min(index+1,last)]||0)*f)*weight;
      }
      return Math.max(0,sum);
    };
    const padded=t=>{
      if(t>=0&&t<=duration)return raw(t);
      // The visual tail is a softened continuation of this same envelope. No
      // generated sound, altered file duration, or abrupt rectangular edge.
      const distance=t<0?-t:t-duration,wrapped=((t%duration)+duration)%duration;
      const a=raw(t<0?0:duration),b=raw(wrapped);
      return a+(b-a)*smooth(distance/1.25);
    };
    const level=t=>mini?padded(t):(padded(t-step*.25)+2*padded(t)+padded(t+step*.25))*.25;
    const voiceCenter=mini?0:level(current),voiceLevels=mini?null:Array.from({length:7},(_,i)=>level(current+(i-3)*step*.3));
    // The visible envelope is sampled at fixed time-grid positions even while
    // it scrolls. Cache each source's samples at those positions; mode fades
    // then blend the same samples without resampling every channel every frame.
    const offsets=mini?[0]:[-.7,-.6,-.3,0,.3,.6,.7],zero=mini?0:3;
    const minK=-2,maxK=Math.ceil(count*1.65)+3;
    let cache=state.samples;
    if(!cache||cache.count!==count||cache.duration!==duration||cache.mini!==mini||cache.waves.length!==waves.length||cache.waves.some((wave,i)=>wave!==waves[i])){
      cache={count,duration,mini,waves:waves.slice(),data:Array(waves.length).fill(null)};state.samples=cache;
    }
    function prepare(channel){
      if(cache.data[channel.index])return;
      const {bins,last}=channel,values=new Float64Array((maxK-minK+1)*offsets.length);
      const one=t=>{const x=clamp(t/duration,0,1)*last,index=x|0,f=x-index;return bins[index]*(1-f)+(bins[Math.min(index+1,last)]||0)*f;};
      const paddedOne=t=>{if(t>=0&&t<=duration)return one(t);const distance=t<0?-t:t-duration,wrapped=((t%duration)+duration)%duration,a=one(t<0?0:duration),b=one(wrapped);return a+(b-a)*smooth(distance/1.25);};
      const levelOne=t=>mini?paddedOne(t):(paddedOne(t-step*.25)+2*paddedOne(t)+paddedOne(t+step*.25))*.25;
      for(let k=minK;k<=maxK;k++)for(let j=0;j<offsets.length;j++)values[(k-minK)*offsets.length+j]=levelOne((k+offsets[j])*step);
      cache.data[channel.index]=values;
    }
    for(const channel of channels)prepare(channel);
    const fixed=(k,j)=>{
      if(k<minK||k>maxK)return level((k+offsets[j])*step);
      let value=0;const index=(k-minK)*offsets.length+j;
      for(const channel of channels)value+=cache.data[channel.index][index]*channel.weight;
      return Math.max(0,value);
    };
    const height=a=>Math.max(.7,h*.38*Math.tanh(Math.sqrt(a)*3.3));
    const first=Math.floor(viewport.start/step)-1,last=Math.ceil((viewport.start+viewport.span)/step)+1,outline=[],strands=[];
    for(let k=first;k<=last;k++){
      const t=k*step,x=(t-viewport.start)/viewport.span*w;if(x<0||x>w)continue;
      const edge=smooth(Math.min(x,w-x)/(w*.09));if(edge<=0)continue;
      const amp=fixed(k,zero),voice=mini?0:Math.tanh((voiceLevels[((k%7)+7)%7]-voiceCenter)*4);
      const pulse=intensity*(.065*Math.sin(clock*2.6+k*.69)+.035*Math.sin(clock*4.1+k*1.37)+voice*.025);
      const strandMid=mid+intensity*Math.sin(clock*2+k*.83)*Math.min(2.3,h*.008);
      const silhouette=mini&&contour==='oval'?Math.pow(Math.sin(Math.PI*x/w),.7):1;
      const extent=height(amp)*edge*(1+pulse)*silhouette;outline.push([x,strandMid,extent]);strands.push({k,x,edge,pulse,strandMid,extent});
    }
    if(clean<1&&!record){
      // Interior fibres share exactly the same alpha, width and dash pattern.
      // Painting them as five compound paths avoids hundreds of canvas strokes.
      const batches=!mini&&typeof Path2D==='function'?Array.from({length:5},()=>new Path2D()):null;
      const used=batches&&Array(5).fill(false);
      for(const {k,x,edge,pulse,strandMid} of strands){
        const slope=mini?0:fixed(k,6)-fixed(k,0);
        for(let layer=mini?0:-2;layer<=(mini?0:2);layer++){
          const nearby=height(fixed(k,mini?0:layer+3))*edge*(1+pulse)*(1-Math.abs(layer)*.035);
          const shimmer=intensity*Math.sin(clock*3.3+k*.71+layer*.75)*nearby*.035;
          const curve=clamp(slope*h*.055,-nearby*.075,nearby*.075)+shimmer,offset=layer*spacing*.21;
          if(batches&&edge===1){const path=batches[layer+2];path.moveTo(x+offset,strandMid-nearby+curve);path.bezierCurveTo(x+spacing*.3,strandMid-nearby*.15,x-spacing*.25,strandMid+nearby*.3,x+offset,strandMid+nearby+curve);used[layer+2]=true;continue;}
          ctx.strokeStyle=gray;ctx.globalAlpha=(.69-Math.abs(layer)*.12)*edge*(1-clean)*(muted?.25:1);
          ctx.lineWidth=layer===0?1.5:1;ctx.setLineDash([1,2.2+Math.abs(layer)*.45]);
          ctx.beginPath();ctx.moveTo(x+offset,strandMid-nearby+curve);
          ctx.bezierCurveTo(x+spacing*.3,strandMid-nearby*.15,x-spacing*.25,strandMid+nearby*.3,x+offset,strandMid+nearby+curve);ctx.stroke();
        }
      }
      if(batches)for(let layer=-2;layer<=2;layer++)if(used[layer+2]){ctx.strokeStyle=gray;ctx.globalAlpha=(.69-Math.abs(layer)*.12)*(1-clean)*(muted?.25:1);ctx.lineWidth=layer===0?1.5:1;ctx.setLineDash([1,2.2+Math.abs(layer)*.45]);ctx.stroke(batches[layer+2]);}
      ctx.setLineDash([]);
    }
    const plush=!mini&&cleanVariant==='plush';
    // The fine threads have constant styles across interior strands. A pair of
    // compound paths keeps their geometry and cadence while avoiding hundreds
    // of individual stroke submissions on the UI thread.
    const threadPaths=plush&&typeof Path2D==='function'?[new Path2D(),new Path2D()]:null;
    let sideThreads=false,centerThreads=false;
    if(clean>0||record)for(const {k,x,edge,strandMid,extent} of strands){
        // Keep the original AltSIP palette. Fine side fibres add depth without
        // widening every sample into a solid bar or changing the audio envelope.
        const breadth=Math.min(plush?2.1:2.7,spacing*(plush?.27:.29)),top=strandMid-extent,bottom=strandMid+extent;
        const gradient=ctx.createLinearGradient(x,top,x,bottom);
        gradient.addColorStop(0,colors[0]);gradient.addColorStop(.2,colors[1]);gradient.addColorStop(.45,colors[2]);gradient.addColorStop(.6,colors[3]);gradient.addColorStop(.85,colors[4]);gradient.addColorStop(1,colors[5]);
        ctx.globalAlpha=(muted?.22:1)*(record?1:clean)*edge;ctx.fillStyle=gradient;
        ctx.beginPath();ctx.moveTo(x,top);
        ctx.bezierCurveTo(x+breadth*.3,strandMid-extent*.4,x+breadth,strandMid-extent*.2,x+breadth,strandMid);
        ctx.bezierCurveTo(x+breadth,strandMid+extent*.25,x+breadth*.1,strandMid+extent*.6,x,bottom);
        ctx.bezierCurveTo(x-breadth*.3,strandMid+extent*.4,x-breadth,strandMid+extent*.2,x-breadth,strandMid);
        ctx.bezierCurveTo(x-breadth,strandMid-extent*.2,x-breadth*.1,strandMid-extent*.6,x,top);ctx.fill();
        if(plush){
          const opacity=(muted?.07:.3)*(record?1:clean)*edge;
          const sway=intensity*Math.sin(clock*2.1+k*.61)*spacing*.1;
          for(const side of [-1,1]){
            const offset=side*spacing*.29,tip=extent*(.92+.045*Math.sin(k*.73));
            if(threadPaths&&edge===1){const path=threadPaths[0];path.moveTo(x+offset,strandMid-tip);path.bezierCurveTo(x+offset+sway+side*spacing*.13,strandMid-tip*.24,x+offset-sway-side*spacing*.1,strandMid+tip*.35,x+offset,strandMid+tip);sideThreads=true;continue;}
            ctx.strokeStyle=green;ctx.globalAlpha=opacity;ctx.lineWidth=.65;
            ctx.setLineDash([.7,1.6]);ctx.beginPath();ctx.moveTo(x+offset,strandMid-tip);
            ctx.bezierCurveTo(x+offset+sway+side*spacing*.13,strandMid-tip*.24,x+offset-sway-side*spacing*.1,strandMid+tip*.35,x+offset,strandMid+tip);ctx.stroke();
          }
          // A quiet central thread keeps low-level speech legible as well.
          if(threadPaths&&edge===1){const path=threadPaths[1];path.moveTo(x,top+extent*.08);path.bezierCurveTo(x+sway,strandMid-extent*.25,x-sway,strandMid+extent*.25,x,bottom-extent*.08);centerThreads=true;continue;}
          ctx.setLineDash([.6,2]);ctx.globalAlpha=opacity*.72;ctx.lineWidth=.6;
          ctx.beginPath();ctx.moveTo(x,top+extent*.08);
          ctx.bezierCurveTo(x+sway,strandMid-extent*.25,x-sway,strandMid+extent*.25,x,bottom-extent*.08);ctx.stroke();ctx.setLineDash([]);
        }
    }
    if(sideThreads){ctx.strokeStyle=green;ctx.globalAlpha=(muted?.07:.3)*(record?1:clean);ctx.lineWidth=.65;ctx.setLineDash([.7,1.6]);ctx.stroke(threadPaths[0]);}
    if(centerThreads){ctx.strokeStyle=green;ctx.globalAlpha=(muted?.07:.3)*(record?1:clean)*.72;ctx.lineWidth=.6;ctx.setLineDash([.6,2]);ctx.stroke(threadPaths[1]);}
    if(sideThreads||centerThreads)ctx.setLineDash([]);
    ctx.globalAlpha=muted?.1:.2;ctx.strokeStyle=record||clean>.5?green:gray;ctx.lineWidth=.6;
    for(const sign of [-1,1]){ctx.beginPath();outline.forEach(([x,y,a],i)=>{const py=y+sign*a*.13;i?ctx.lineTo(x,py):ctx.moveTo(x,py);});ctx.stroke();}
    ctx.globalAlpha=1;
  }
  scope.AltSIPWave={render,seekFraction,release};
  if(typeof window==='undefined'){
    const surfaces=new Map();
    self.onmessage=event=>{
      const {type,id}=event.data;
      if(type==='init'){
        const {canvas,waves}=event.data;
        canvas.__altSipSize={width:0,height:0};
        surfaces.set(id,{canvas,waves});
      }else if(type==='render'){
        const state=surfaces.get(id);if(!state)return;
        state.canvas.__altSipSize.width=event.data.width;
        state.canvas.__altSipSize.height=event.data.height;
        render(state.canvas,{...event.data.options,waves:state.waves,pixelRatio:event.data.pixelRatio});
        self.postMessage({type:'painted',id});
      }
    };
    // Probe worker-side 2D support before the UI transfers a visible canvas.
    try{const test=new OffscreenCanvas(1,1);if(!test.getContext('2d'))throw Error('No worker 2D canvas');self.postMessage({type:'ready'});}
    catch(_){self.postMessage({type:'unsupported'});}
  }
})();
