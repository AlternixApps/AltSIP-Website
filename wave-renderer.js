/* Stylized RMS strands. Decorative continuation never extends the audio file. */
(() => {
  'use strict';
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const smooth=v=>{const x=clamp(v,0,1);return x*x*(3-2*x);};
  const frames=new WeakMap();
  const sample=(bins,t)=>{
    if(!bins?.length)return 0;
    const x=clamp(t,0,bins.length-1),i=Math.floor(x),f=x-i;
    return bins[i]*(1-f)+(bins[Math.min(i+1,bins.length-1)]||0)*f;
  };
  // A stable span avoids the old jump from a full preview into a cropped window.
  const view=(position,duration)=>({span:duration,start:clamp(position,0,duration)*.65});
  function seekFraction({fraction=0,position=0,duration=21.824}={}){
    const total=Math.max(.001,duration),v=view(position,total);
    return clamp((v.start+clamp(fraction,0,1)*v.span)/total,0,1);
  }
  function render(canvas,{waves=[],weights=[1],position=0,playing=false,clean=0,record=false,reduced=false,muted=false,dark=false,accent='#168d75',tone=null,motionTime,cleanVariant='plush'}={}){
    const w=canvas.clientWidth,h=canvas.clientHeight;
    if(!w||!h)return;
    const ratio=Math.min(devicePixelRatio||1,w<=600?1.25:1.5);
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
    const count=Math.max(72,Math.min(w<=600?128:220,Math.floor(w/5))),step=viewport.span/count,spacing=w/count;
    const mid=h*.47,green=tone||(dark?'#6ed2b2':accent),gray=dark?'#a8b7c1':'#6b7c8d';
    const raw=t=>Math.max(0,waves.reduce((sum,wave,i)=>sum+sample(wave?.bins,(t/duration)*((wave?.bins?.length||1)-1))*(weights[i]||0),0));
    const padded=t=>{
      if(t>=0&&t<=duration)return raw(t);
      // The visual tail is a softened continuation of this same envelope. No
      // generated sound, altered file duration, or abrupt rectangular edge.
      const distance=t<0?-t:t-duration,wrapped=((t%duration)+duration)%duration;
      const a=raw(t<0?0:duration),b=raw(wrapped);
      return a+(b-a)*smooth(distance/1.25);
    };
    const levels=new Map();const level=t=>{if(levels.has(t))return levels.get(t);const value=(padded(t-step*.25)+2*padded(t)+padded(t+step*.25))*.25;levels.set(t,value);return value;};
    const height=a=>Math.max(.7,h*.38*Math.tanh(Math.sqrt(a)*3.3));
    const halo=ctx.createRadialGradient(w*.5,mid,0,w*.5,mid,w*.5);
    halo.addColorStop(0,dark?'#61c6a814':'#7fd5be0d');halo.addColorStop(1,'#ffffff00');
    ctx.fillStyle=halo;ctx.fillRect(0,0,w,h);
    const first=Math.floor(viewport.start/step)-1,last=Math.ceil((viewport.start+viewport.span)/step)+1,outline=[];
    for(let k=first;k<=last;k++){
      const t=k*step,x=(t-viewport.start)/viewport.span*w;if(x<0||x>w)continue;
      const edge=smooth(Math.min(x,w-x)/(w*.09));if(edge<=0)continue;
      const amp=level(t),voice=Math.tanh((level(current+(k%7-3)*step*.3)-level(current))*4);
      const pulse=intensity*(.065*Math.sin(clock*2.6+k*.69)+.035*Math.sin(clock*4.1+k*1.37)+voice*.025);
      const strandMid=mid+intensity*Math.sin(clock*2+k*.83)*Math.min(2.3,h*.008);
      const extent=height(amp)*edge*(1+pulse);outline.push([x,strandMid,extent]);
      if(clean<1&&!record){
        const slope=level(t+step*.7)-level(t-step*.7);
        for(let layer=-2;layer<=2;layer++){
          const nearby=height(level(t+layer*step*.3))*edge*(1+pulse)*(1-Math.abs(layer)*.035);
          const shimmer=intensity*Math.sin(clock*3.3+k*.71+layer*.75)*nearby*.035;
          const curve=clamp(slope*h*.055,-nearby*.075,nearby*.075)+shimmer,offset=layer*spacing*.21;
          ctx.strokeStyle=gray;ctx.globalAlpha=(.69-Math.abs(layer)*.12)*edge*(1-clean)*(muted?.25:1);
          ctx.lineWidth=layer===0?1.5:1;ctx.setLineDash([1,2.2+Math.abs(layer)*.45]);
          ctx.beginPath();ctx.moveTo(x+offset,strandMid-nearby+curve);
          ctx.bezierCurveTo(x+spacing*.3,strandMid-nearby*.15,x-spacing*.25,strandMid+nearby*.3,x+offset,strandMid+nearby+curve);ctx.stroke();
        }
        ctx.setLineDash([]);
      }
      if(clean>0||record){
        // Keep the original AltSIP palette. Fine side fibres add depth without
        // widening every sample into a solid bar or changing the audio envelope.
        const plush=cleanVariant==='plush';
        const breadth=Math.min(plush?2.1:2.7,spacing*(plush?.27:.29)),top=strandMid-extent,bottom=strandMid+extent;
        const gradient=ctx.createLinearGradient(x,top,x,bottom);
        gradient.addColorStop(0,tone?tone+'00':'#32ba9100');gradient.addColorStop(.2,tone?tone+'99':dark?'#89d9be99':'#59bc9da0');
        gradient.addColorStop(.45,green);gradient.addColorStop(.6,green);gradient.addColorStop(.85,tone?tone+'80':dark?'#89d9be80':'#5cc7a294');gradient.addColorStop(1,tone?tone+'00':'#32ba9100');
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
            ctx.strokeStyle=green;ctx.globalAlpha=opacity;ctx.lineWidth=.65;
            ctx.setLineDash([.7,1.6]);ctx.beginPath();ctx.moveTo(x+offset,strandMid-tip);
            ctx.bezierCurveTo(x+offset+sway+side*spacing*.13,strandMid-tip*.24,x+offset-sway-side*spacing*.1,strandMid+tip*.35,x+offset,strandMid+tip);ctx.stroke();
          }
          // A quiet central thread keeps low-level speech legible as well.
          ctx.setLineDash([.6,2]);ctx.globalAlpha=opacity*.72;ctx.lineWidth=.6;
          ctx.beginPath();ctx.moveTo(x,top+extent*.08);
          ctx.bezierCurveTo(x+sway,strandMid-extent*.25,x-sway,strandMid+extent*.25,x,bottom-extent*.08);ctx.stroke();ctx.setLineDash([]);
        }
      }
    }
    ctx.globalAlpha=muted?.1:.2;ctx.strokeStyle=record||clean>.5?green:gray;ctx.lineWidth=.6;
    for(const sign of [-1,1]){ctx.beginPath();outline.forEach(([x,y,a],i)=>{const py=y+sign*a*.13;i?ctx.lineTo(x,py):ctx.moveTo(x,py);});ctx.stroke();}
    ctx.globalAlpha=1;
  }
  window.AltSIPWave={render,seekFraction};
})();
