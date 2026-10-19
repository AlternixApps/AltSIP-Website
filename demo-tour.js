/* One bounded, synthetic tour of the fully interactive AltSIP preview. */
(() => {
  'use strict';
  const number='12025550142';
  const labels={
    en:['Stop tour','Replay tour','Start tour'],ru:['Остановить показ','Повторить демонстрацию','Запустить показ'],uk:['Зупинити показ','Повторити демонстрацію','Запустити показ'],
    de:['Vorführung stoppen','Demo wiederholen','Demo starten'],es:['Detener demostración','Repetir demostración','Iniciar demostración'],
    fr:['Arrêter la démonstration','Revoir la démonstration','Lancer la démonstration'],it:['Interrompi la dimostrazione','Ripeti la dimostrazione','Avvia la dimostrazione'],
    pl:['Zatrzymaj pokaz','Powtórz pokaz','Uruchom pokaz'],pt:['Parar demonstração','Repetir demonstração','Iniciar demonstração']
  };

  function mount(host,{demo,control,onState}={}){
    if(!host||!demo||!control)throw new TypeError('AltSIPTour.mount needs a host, demo and control');
    if(host.__altSipTour)return host.__altSipTour;
    const timers=new Set();
    const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const coarse=window.matchMedia?.('(max-width: 800px), (pointer: coarse)');
    let locale='ru',active=false,inView=typeof IntersectionObserver!=='function',running=false,autoUsed=false,destroyed=false,phase='ready';
    const emit=(next,reason)=>{phase=next;control.textContent=labels[locale][running?0:autoUsed?1:2];control.setAttribute('aria-label',control.textContent);onState?.({phase:next,running,reason,mos:next==='call'?'4.4':null});};
    const clear=()=>{for(const id of timers)clearTimeout(id);timers.clear();};
    function stop(reason='manual'){
      if(destroyed)return false;
      const wasRunning=running;
      clear();running=false;
      if(wasRunning){autoUsed=true;emit('stopped',reason);}
      return wasRunning;
    }
    const canRun=()=>active&&inView&&document.visibilityState!=='hidden'&&!destroyed;
    function schedule(ms,step){
      const id=setTimeout(()=>{timers.delete(id);if(running&&canRun())step();},ms);
      timers.add(id);
    }
    function run(explicit){
      if(!canRun())return false;
      if(running)stop('replay');
      autoUsed=true;
      if(demo.resetTour()===false)return false;
      if(reduced?.matches){
        if(!explicit)return false;
        for(const digit of number)demo.appendTourDigit(digit);
        running=false;emit('ready','reduced-motion');
        return true;
      }
      running=true;emit('dial','start');
      for(let i=0;i<number.length;i++)schedule(3000+i*200,()=>demo.appendTourDigit(number[i]));
      schedule(6000,()=>{if(demo.startTourCall()!==false)emit('call','connected');});
      schedule(7400,()=>{demo.setQualityPreview?.('good');emit('call','quality');});
      schedule(9800,()=>{demo.endTourCall();emit('ended','hangup');});
      schedule(10900,()=>{demo.showTourHistory();emit('history','result');});
      schedule(15800,()=>{demo.finishTour();clear();running=false;emit('complete','finished');});
      return true;
    }
    function maybeAuto(){if(!autoUsed&&canRun()&&!reduced?.matches&&!coarse?.matches)run(false);}
    function setActive(value){if(destroyed)return;active=!!value;if(!active)stop('inactive');else maybeAuto();}
    function setLocale(code){if(destroyed)return;locale=Object.hasOwn(labels,code)?code:'en';emit(phase,'locale');}
    function replay(){return run(true);}
    const onControl=()=>{if(running)stop('control');else replay();};
    const takeover=e=>{if(e.isTrusted){autoUsed=true;if(!stop('interaction'))emit('stopped','interaction');}};
    const onPointer=e=>takeover(e);
    const onKey=e=>takeover(e);
    const onFocus=e=>{if(e.target?.matches?.('input, textarea, select, [contenteditable]'))takeover(e);};
    const onVisibility=()=>{if(document.visibilityState==='hidden')stop('hidden');else maybeAuto();};
    const onPageHide=()=>stop('pagehide');
    const onMotionChange=()=>{if(reduced?.matches||coarse?.matches)stop('preference');};
    reduced?.addEventListener?.('change',onMotionChange);coarse?.addEventListener?.('change',onMotionChange);
    control.addEventListener('click',onControl);
    host.addEventListener('pointerdown',onPointer,true);
    host.addEventListener('keydown',onKey,true);
    host.addEventListener('focusin',onFocus,true);
    document.addEventListener('visibilitychange',onVisibility);
    window.addEventListener('pagehide',onPageHide);
    const observer=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{inView=!!entries[0]?.isIntersecting;if(!inView)stop('offscreen');else maybeAuto();}):null;
    observer?.observe(host);
    emit('ready','mount');
    const api={setActive,setLocale,replay,stop,destroy(){if(destroyed)return;stop('destroy');destroyed=true;observer?.disconnect();control.removeEventListener('click',onControl);host.removeEventListener('pointerdown',onPointer,true);host.removeEventListener('keydown',onKey,true);host.removeEventListener('focusin',onFocus,true);document.removeEventListener('visibilitychange',onVisibility);window.removeEventListener('pagehide',onPageHide);reduced?.removeEventListener?.('change',onMotionChange);coarse?.removeEventListener?.('change',onMotionChange);delete host.__altSipTour;}};
    host.__altSipTour=api;
    return api;
  }
  window.AltSIPTour={mount};
})();
