/* A bounded scene timeline. No synthetic clicks, SIP, sound or background loop. */
(() => {
 'use strict';
 const labels={
  ru:{play:'Смотреть показ',pause:'Пауза',resume:'Продолжить',replay:'Повторить',manual:'Вы управляете интерфейсом',ready:'AltSIP в работе',call:'Звонок и управление звуком',history:'История звонков',accounts:'SIP-аккаунты',appearance:'Тема и компактный режим',incoming:'Входящий вызов',conference:'Конференция',transfer:'Перевод с консультацией',done:'Попробуйте интерфейс'},
  en:{play:'Watch demo',pause:'Pause',resume:'Resume',replay:'Replay',manual:'You control the interface',ready:'AltSIP in use',call:'Calls and audio controls',history:'Call history',accounts:'SIP accounts',appearance:'Theme and compact mode',incoming:'Incoming call',conference:'Conference',transfer:'Attended transfer',done:'Try the interface'},
  uk:{play:'Дивитися показ',pause:'Пауза',resume:'Продовжити',replay:'Повторити',manual:'Ви керуєте інтерфейсом',ready:'AltSIP у роботі',call:'Виклик і керування звуком',history:'Історія дзвінків',accounts:'SIP-акаунти',appearance:'Тема й компактний режим',incoming:'Вхідний виклик',conference:'Конференція',transfer:'Переведення з консультацією',done:'Спробуйте інтерфейс'},
  de:{play:'Demo ansehen',pause:'Pause',resume:'Fortsetzen',replay:'Wiederholen',manual:'Sie steuern die Oberfläche',ready:'AltSIP im Einsatz',call:'Anruf und Audiosteuerung',history:'Anrufliste',accounts:'SIP-Konten',appearance:'Design und Kompaktmodus',incoming:'Eingehender Anruf',conference:'Konferenz',transfer:'Weiterleitung mit Rückfrage',done:'Oberfläche ausprobieren'},
  fr:{play:'Voir la démo',pause:'Pause',resume:'Reprendre',replay:'Revoir',manual:'Vous contrôlez l’interface',ready:'AltSIP en action',call:'Appel et commandes audio',history:'Historique des appels',accounts:'Comptes SIP',appearance:'Thème et mode compact',incoming:'Appel entrant',conference:'Conférence',transfer:'Transfert avec consultation',done:'Essayez l’interface'},
  es:{play:'Ver demostración',pause:'Pausa',resume:'Continuar',replay:'Repetir',manual:'Tú controlas la interfaz',ready:'AltSIP en acción',call:'Llamadas y controles de audio',history:'Historial de llamadas',accounts:'Cuentas SIP',appearance:'Tema y modo compacto',incoming:'Llamada entrante',conference:'Conferencia',transfer:'Transferencia con consulta',done:'Prueba la interfaz'},
  it:{play:'Guarda la demo',pause:'Pausa',resume:'Riprendi',replay:'Ripeti',manual:'L’interfaccia è sotto il tuo controllo',ready:'AltSIP in azione',call:'Chiamata e comandi audio',history:'Cronologia chiamate',accounts:'Account SIP',appearance:'Tema e modalità compatta',incoming:'Chiamata in arrivo',conference:'Conferenza',transfer:'Trasferimento con consultazione',done:'Prova l’interfaccia'},
  pl:{play:'Zobacz pokaz',pause:'Pauza',resume:'Kontynuuj',replay:'Powtórz',manual:'Sterujesz interfejsem',ready:'AltSIP w działaniu',call:'Rozmowa i sterowanie dźwiękiem',history:'Historia połączeń',accounts:'Konta SIP',appearance:'Motyw i tryb kompaktowy',incoming:'Połączenie przychodzące',conference:'Konferencja',transfer:'Przekazanie z konsultacją',done:'Wypróbuj interfejs'},
  pt:{play:'Ver demonstração',pause:'Pausa',resume:'Continuar',replay:'Repetir',manual:'A interface está sob o seu controlo',ready:'AltSIP em ação',call:'Chamada e controlos de áudio',history:'Histórico de chamadas',accounts:'Contas SIP',appearance:'Tema e modo compacto',incoming:'Chamada recebida',conference:'Conferência',transfer:'Transferência com consulta',done:'Experimente a interface'}
 };
 class SceneTimeline{
  constructor(steps,{now=()=>performance.now(),schedule=(f,d)=>setTimeout(f,d),cancel=id=>clearTimeout(id),onComplete=()=>{}}={}){this.steps=steps;this.now=now;this.schedule=schedule;this.cancel=cancel;this.onComplete=onComplete;this.index=0;this.elapsed=0;this.running=false;this.job=null;}
  start(){this.reset();this.running=true;this.origin=this.now();this.arm();}
  reset(){this.pause();this.index=0;this.elapsed=0;}
  arm(){if(!this.running)return;while(this.index<this.steps.length&&this.steps[this.index].at<=this.elapsed){const step=this.steps[this.index++];step.run();if(!this.running)return;this.elapsed=this.now()-this.origin;}if(this.index===this.steps.length){this.running=false;this.onComplete();return;}this.job=this.schedule(()=>{this.job=null;this.elapsed=this.now()-this.origin;this.arm();},Math.max(0,this.steps[this.index].at-this.elapsed));}
  pause(){if(this.running)this.elapsed=this.now()-this.origin;this.running=false;if(this.job!==null)this.cancel(this.job);this.job=null;}
  resume(){if(this.running||this.index===this.steps.length)return;this.running=true;this.origin=this.now()-this.elapsed;this.arm();}
 }
 class TransitionController{
  constructor(element,allowed){this.element=element;this.allowed=allowed;this.animation=null;}
  turn(){this.cancel();if(!this.allowed()||!this.element?.animate)return;this.animation=this.element.animate([{transform:'rotateY(0deg) scale(1)',filter:'blur(0px)',offset:0},{transform:'rotateY(85deg) scale(.94)',filter:'blur(1px)',offset:.45},{transform:'rotateY(275deg) scale(.94)',filter:'blur(1px)',offset:.55},{transform:'rotateY(360deg) scale(1)',filter:'blur(0px)',offset:1}],{duration:1050,easing:'cubic-bezier(.45,0,.2,1)',fill:'none'});this.animation.onfinish=()=>{this.animation=null;};}
  pause(){this.animation?.pause();}resume(){this.animation?.play();}cancel(){this.animation?.cancel();this.animation=null;}
 }
 function mount(host,{demo,control,replayControl,sceneLabel,turnElement,onState}={}){
  if(!host||!demo||!control)throw new TypeError('AltSIPTour needs a host, demo and control');
  if(host.__altSipTour)return host.__altSipTour;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),coarse=matchMedia('(max-width:800px), (pointer:coarse)');
  let locale='ru',active=false,inView=false,used=false,destroyed=false,status='ready',scene='ready',autoSuspended=false,timeline;
  const turn=new TransitionController(turnElement,()=>!reduced.matches&&!coarse.matches);
  const siteTheme=()=>document.documentElement.dataset.theme||'light';
  function paint(){const d=labels[locale];control.textContent=status==='playing'?d.pause:status==='paused'?d.resume:status==='complete'?d.replay:d.play;control.setAttribute('aria-label',control.textContent);if(replayControl){replayControl.textContent=d.replay;replayControl.setAttribute('aria-label',d.replay);replayControl.disabled=status==='ready';}if(sceneLabel)sceneLabel.textContent=d[status==='manual'?'manual':status==='complete'?'done':scene]||d.ready;host.dataset.presentation=status;onState?.({status,scene,elapsed:timeline?.elapsed||0});}
  function step(at,action,value,chapter){return{at,run(){if(chapter)scene=chapter;if(action==='turn')turn.turn();else demo.present(action,value==='site-theme'?siteTheme():value==='alternate-theme'?(siteTheme()==='light'?'dark':'light'):value);paint();}};}
  function steps(short){const digits=[...'12025550142'].map((n,i)=>step(2000+i*180,'digit',n));if(short)return[step(0,'reset','site-theme'),...digits,step(5000,'call',null,'call'),step(9000,'end'),step(10000,'history',null,'history'),step(15000,'finish','site-theme')];return[
   step(0,'reset','site-theme'),...digits,step(5500,'call',null,'call'),step(9000,'microphone',true),step(10500,'microphone',false),step(12000,'record',true),step(14500,'record',false),step(16000,'end'),step(16800,'history',null,'history'),
   step(19000,'turn'),step(19520,'accounts',true,'accounts'),step(22500,'account',1),step(25000,'account',2),step(27500,'accounts',false),
   step(29000,'theme','alternate-theme','appearance'),step(31500,'compact',true),step(35500,'compact',false),step(38000,'turn'),step(38520,'incoming',null,'incoming'),step(41500,'answer'),step(44500,'second'),step(46500,'conference',null,'conference'),step(51500,'transfer',null,'transfer'),step(55000,'transferred'),step(58500,'finish','site-theme')];}
  const canRun=()=>active&&inView&&!document.hidden&&!destroyed;
  function pause(reason='control'){if(status!=='playing')return false;timeline?.pause();turn.pause();demo.setPresentationPaused(true);status='paused';autoSuspended=reason!=='control';paint();return true;}
  function resume(){if(!canRun()||status!=='paused')return false;autoSuspended=false;status='playing';demo.setPresentationPaused(false);turn.resume();timeline.resume();paint();return true;}
  function replay(){if(!canRun())return false;timeline?.reset();turn.cancel();used=true;autoSuspended=false;if(reduced.matches){demo.present('reset',siteTheme());demo.setPresentationPaused(false);status='manual';scene='ready';paint();return true;}timeline=new SceneTimeline(steps(coarse.matches),{onComplete(){demo.setPresentationPaused(false);status='complete';scene='done';paint();}});status='playing';scene='ready';demo.setPresentationPaused(false);timeline.start();paint();return true;}
  function stop(reason='manual'){used=true;timeline?.pause();turn.cancel();autoSuspended=false;demo.setPresentationPaused(false);status='manual';paint();return reason;}
  function visibility(){if(!canRun())pause('visibility');else if(status==='paused'&&autoSuspended)resume();else if(!used&&!reduced.matches&&!coarse.matches)replay();}
  const onControl=()=>status==='playing'?pause():status==='paused'?resume():replay();
  const onReplay=()=>replay();
  const takeover=e=>{if(e.isTrusted)stop('interaction');};
  const focus=e=>{if(e.target?.matches?.('input,textarea,select,[contenteditable]'))takeover(e);};
  const preferences=()=>{pause('control');turn.cancel();};const pageHide=()=>pause('visibility');
  control.addEventListener('click',onControl);replayControl?.addEventListener('click',onReplay);host.addEventListener('pointerdown',takeover,true);host.addEventListener('keydown',takeover,true);host.addEventListener('focusin',focus,true);document.addEventListener('visibilitychange',visibility);window.addEventListener('pagehide',pageHide);reduced.addEventListener('change',preferences);coarse.addEventListener('change',preferences);
  const observer=new IntersectionObserver(entries=>{inView=!!entries[0]?.isIntersecting;visibility();},{threshold:.15});observer.observe(host.closest?.('.demo-stage')||host);paint();
  const api={setActive(value){active=!!value;visibility();},setLocale(code){locale=labels[code]?code:'en';paint();},pause,resume,replay,stop,destroy(){if(destroyed)return;timeline?.pause();turn.cancel();demo.setPresentationPaused(false);destroyed=true;observer.disconnect();control.removeEventListener('click',onControl);replayControl?.removeEventListener('click',onReplay);host.removeEventListener('pointerdown',takeover,true);host.removeEventListener('keydown',takeover,true);host.removeEventListener('focusin',focus,true);document.removeEventListener('visibilitychange',visibility);window.removeEventListener('pagehide',pageHide);reduced.removeEventListener('change',preferences);coarse.removeEventListener('change',preferences);delete host.__altSipTour;}};host.__altSipTour=api;return api;
 }
 window.AltSIPTour={mount,SceneTimeline,TransitionController};
})();
