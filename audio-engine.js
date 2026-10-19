/* Prepared audio only. No microphone, network inference, or sound before a click. */
(function(scope){
'use strict';
class AltSIPAudio {
 constructor({contextFactory,loadPack,onChange,durations}={}){this.contextFactory=contextFactory||(()=>new (scope.AudioContext||scope.webkitAudioContext)());this.loadPack=loadPack||(()=>Promise.resolve(scope.ALTSIP_OWNER_AUDIO));this.onChange=onChange||(()=>{});this.ctx=null;this.ready={};this.buffers={};this.nodes=[];this.kind=null;this.positions={noise:0,echo:0,record:0};this.playing=false;this.busy=false;this.fallbackDurations={noise:21.824,echo:21.824,record:21.824,...durations};this.solo='both';this.noiseMode='original';this.echoProcessed=false;this.processed=false;this.volume=.55;this.gains=[.8,.8];this.muted=[false,false];this.operation=0;this.startedAt=0;this.startOffset=0;}
 notify(){this.onChange(this);}
 async ensure(kind){
  if(!this.ctx)this.ctx=this.contextFactory();
  const resume=this.ctx.resume();
  if(!this.ready[kind])this.ready[kind]=this.loadPack(kind).then(async pack=>{
   if(!pack)throw Error('Missing audio pack');
   await Promise.all(this.names(kind).map(async name=>{
    if(!pack[name])throw Error('Missing audio: '+name);
    const raw=atob(pack[name]),bytes=new Uint8Array(raw.length);
    for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
    this.buffers[name]=await this.ctx.decodeAudioData(bytes.buffer);
   }));return this.buffers;
  }).catch(e=>{delete this.ready[kind];throw e;});
  await Promise.all([resume,this.ready[kind]]);return this.buffers;
 }
 names(kind=this.kind){return kind==='record'?['recording-a','recording-b']:kind==='echo'?['echo-original','echo-processed']:['conversation-original','conversation-light','conversation-processed'];}
 duration(kind=this.kind){return this.buffers[this.names(kind)[0]]?.duration||this.fallbackDurations[kind];}
 position(kind=this.kind){if(!kind)return 0;return this.playing&&kind===this.kind?Math.min(this.duration(kind),this.startOffset+Math.max(0,this.ctx.currentTime-this.startedAt)):this.positions[kind];}
 targets(kind=this.kind){return kind==='echo'?[this.echoProcessed?0:this.volume,this.echoProcessed?this.volume:0]:kind==='record'?this.gains.map((v,i)=>this.muted[i]?0:v*this.volume):['original','light','high'].map(mode=>mode===this.noiseMode?this.volume:0);}
 async play(kind){if(!['noise','echo','record'].includes(kind))throw Error('Invalid player');if(this.playing&&this.kind===kind){this.pause();return;}this.pause();this.kind=kind;const op=++this.operation;this.busy=true;this.notify();try{await this.ensure(kind);if(op!==this.operation)return;this.busy=false;this.start(kind);}catch(e){if(op!==this.operation)return;this.busy=false;this.notify();throw e;}}
 start(kind){this.kind=kind;const duration=this.duration(kind);const saved=this.positions[kind];this.startOffset=saved>=duration-.02?0:Math.max(0,saved);this.startedAt=this.ctx.currentTime+.025;const token=this.operation;this.playing=true;const targets=this.targets(kind);this.nodes=this.names(kind).map((name,i)=>{const source=this.ctx.createBufferSource(),gain=this.ctx.createGain();source.buffer=this.buffers[name];gain.gain.setValueAtTime(0,this.startedAt);gain.gain.linearRampToValueAtTime(targets[i],this.startedAt+.025);source.connect(gain);gain.connect(this.ctx.destination);source.onended=()=>{if(this.playing&&this.operation===token){this.positions[kind]=duration;this.playing=false;this.clear();this.notify();}};source.start(this.startedAt,this.startOffset);return {source,gain};});this.notify();}
 clear(){for(const n of this.nodes){n.source.onended=null;try{n.source.stop();}catch(_){}n.source.disconnect();n.gain.disconnect();}this.nodes=[];}
 pause(){if(this.playing)this.positions[this.kind]=this.position();++this.operation;this.playing=false;this.busy=false;this.clear();this.notify();}
 seek(kind,ratio){const running=this.playing&&this.kind===kind;const offset=Math.max(0,Math.min(1,ratio))*this.duration(kind);const atEnd=offset>=this.duration(kind)-.02;if(running||(this.busy&&this.kind===kind&&atEnd))this.pause();this.positions[kind]=offset;if(running&&!atEnd)this.start(kind);else this.notify();}
 setSolo(mode){if(!['both','a','b'].includes(mode))return;this.solo=mode;this.muted=[mode==='b',mode==='a'];this.updateGains();}
 setNoiseMode(mode){if(!['original','light','high'].includes(mode))return;this.noiseMode=mode;this.processed=mode!=='original';this.updateGains();}
 setEchoProcessed(on){this.echoProcessed=!!on;this.updateGains();}
 setProcessed(on){this.setNoiseMode(on?'high':'original');}
 setVolume(v){this.volume=Math.max(0,Math.min(1,v));this.updateGains();}
 setGain(i,v){this.gains[i]=Math.max(0,Math.min(1,v));this.updateGains();}
 toggleMute(i){this.muted[i]=!this.muted[i];this.updateGains();}
 updateGains(){if(this.ctx){const now=this.ctx.currentTime;this.targets().forEach((v,i)=>{const g=this.nodes[i]?.gain.gain;if(g){g.cancelScheduledValues(now);g.setValueAtTime(g.value,now);g.linearRampToValueAtTime(v,now+.025);}});}this.notify();}
 resetRecord(){const running=this.playing&&this.kind==='record';if(running)this.pause();this.positions.record=0;this.gains=[.8,.8];this.muted=[false,false];if(running)this.start('record');else this.notify();}
}
scope.AltSIPAudio=AltSIPAudio;
})(typeof window!=='undefined'?window:globalThis);
