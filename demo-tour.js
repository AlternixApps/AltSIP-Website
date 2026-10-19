/* A silent, visibility-gated product film. The native component remains reusable. */
(() => {
 'use strict';
 class SceneTimeline {
  constructor(steps,{now=()=>performance.now(),schedule=(f,d)=>setTimeout(f,d),cancel=id=>clearTimeout(id),onComplete=()=>{}}={}){this.steps=steps;this.now=now;this.schedule=schedule;this.cancel=cancel;this.onComplete=onComplete;this.index=0;this.elapsed=0;this.running=false;this.job=null;}
  start(){this.reset();this.running=true;this.origin=this.now();this.arm();}
  reset(){this.pause();this.index=0;this.elapsed=0;}
  arm(){if(!this.running)return;while(this.index<this.steps.length&&this.steps[this.index].at<=this.elapsed){this.steps[this.index++].run();if(!this.running)return;this.elapsed=this.now()-this.origin;}if(this.index===this.steps.length){this.running=false;this.onComplete();return;}this.job=this.schedule(()=>{this.job=null;this.elapsed=this.now()-this.origin;this.arm();},Math.max(0,this.steps[this.index].at-this.elapsed));}
  pause(){if(this.running)this.elapsed=this.now()-this.origin;this.running=false;if(this.job!==null)this.cancel(this.job);this.job=null;}
  resume(){if(this.running||this.index===this.steps.length)return;this.running=true;this.origin=this.now()-this.elapsed;this.arm();}
 }
 // Keep filters off the preserve-3d ancestor: they flatten its extrusion.
 const turnFrames=[
  {transform:'rotateY(0deg)',offset:0,easing:'cubic-bezier(.55,0,.8,.5)'},
  {transform:'rotateY(80deg)',offset:.16,easing:'linear'},
  {transform:'rotateY(430deg)',offset:.43,easing:'cubic-bezier(.1,.35,.2,1)'},
  {transform:'rotateY(736deg)',offset:.79,easing:'ease-in-out'},
  {transform:'rotateY(715deg)',offset:.91,easing:'ease-out'},
  {transform:'rotateY(720deg)',offset:1}
 ];
 class TransitionController {
  constructor(element,allowed){this.element=element;this.allowed=allowed;this.animations=[];}
  turn(){this.cancel();if(!this.allowed()||!this.element?.animate)return;
   const motion=this.element.animate(turnFrames,{duration:2100,fill:'none'});this.animations.push(motion);
   for(const face of this.element.querySelectorAll?.('.demo-front,.demo-back')||[])this.animations.push(face.animate([{filter:'blur(0px)',offset:0},{filter:'blur(1.5px)',offset:.22},{filter:'blur(.7px)',offset:.6},{filter:'blur(0px)',offset:.82},{filter:'blur(0px)',offset:1}],{duration:2100}));
   this.element.classList.add('is-turning');motion.onfinish=()=>{this.animations=[];this.element.classList.remove('is-turning');};
  }
  pause(){this.animations.forEach(a=>a.pause());}resume(){this.animations.forEach(a=>a.play());}
  cancel(){this.animations.forEach(a=>a.cancel());this.animations=[];this.element?.classList?.remove('is-turning');}
 }
 function mount(host,{demo,turnElement}={}){
  if(!host||!demo)throw new TypeError('AltSIPTour needs a host and demo');
  if(host.__altSipTour)return host.__altSipTour;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let active=false,inView=false,destroyed=false,started=false,timeline;
  const turn=new TransitionController(turnElement,()=>!reduced.matches);
  host.inert=true;host.setAttribute('aria-hidden','true');
  function step(at,action,value){return{at,run(){host.dataset.scene=action;if(action==='turn')turn.turn();else if(action!=='cycle')demo.present(action,value);}};}
  const dial=(at,number)=>[step(at,'number',''),...[...number].map((n,i)=>step(at+90*(i+1),'digit',n))];
  const steps=[
   step(0,'reset','light'),step(0,'number','12025550142'),step(120,'call'),step(900,'record',true),step(5900,'end'),
   step(6700,'turn'),step(8680,'accounts',true),step(10100,'account',1),step(10800,'accounts',false),
   ...dial(11300,'442079460128'),step(12700,'ringing'),step(15100,'unanswered'),
   step(15900,'turn'),step(17880,'settings','Noise suppression'),step(19100,'noise',true),step(20100,'noise-mode','high'),
   step(21400,'settings','Call recording'),step(22600,'automatic-recording',true),
   step(24200,'turn'),step(24700,'settings',null),step(26180,'compact',true),
   ...dial(27400,'12025550143'),step(28800,'call'),step(34300,'end'),
   step(35300,'turn'),step(36500,'compact',false),step(37800,'finish','light'),step(39000,'cycle')
  ];
  const canRun=()=>active&&inView&&!document.hidden&&!destroyed&&!reduced.matches;
  function sync(){
   if(destroyed)return;
   if(reduced.matches){timeline.pause();turn.cancel();started=false;demo.present('reset','light');demo.present('number','12025550142');demo.setPresentationPaused(true);host.dataset.presentation='static';return;}
   if(canRun()){
    demo.setPresentationPaused(false);host.dataset.presentation='playing';
    if(!started){started=true;timeline.start();}else{turn.resume();timeline.resume();}
   }else{timeline.pause();turn.pause();demo.setPresentationPaused(true);host.dataset.presentation='suspended';}
  }
  timeline=new SceneTimeline(steps,{onComplete(){if(canRun())timeline.start();else{started=false;sync();}}});
  const observer=new IntersectionObserver(entries=>{inView=!!entries[0]?.isIntersecting;sync();},{threshold:.12});observer.observe(host.closest?.('.demo-stage')||host);
  const pageHide=()=>{inView=false;sync();};
  document.addEventListener('visibilitychange',sync);window.addEventListener('pagehide',pageHide);reduced.addEventListener('change',sync);
  const api={setActive(value){active=!!value;sync();},setLocale(){},destroy(){if(destroyed)return;destroyed=true;timeline.pause();turn.cancel();demo.setPresentationPaused(true);observer.disconnect();document.removeEventListener('visibilitychange',sync);window.removeEventListener('pagehide',pageHide);reduced.removeEventListener('change',sync);delete host.__altSipTour;}};
  host.__altSipTour=api;return api;
 }
 window.AltSIPTour={mount,SceneTimeline,TransitionController,turnFrames};
})();
