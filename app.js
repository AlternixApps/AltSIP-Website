(()=>{
'use strict';
const root=document.documentElement,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const reduced=matchMedia('(prefers-reduced-motion: reduce)');let locale='ru',guide,home,tour,page='home',homeObserved=[],tourActivated=false;
try{const saved=localStorage.getItem('altsip-language');if(window.ALTSIP_COPY[saved])locale=saved;}catch(_){}
const t=k=>window.ALTSIP_COPY[locale]?.[k]||window.ALTSIP_COPY.ru[k]||k;
const icon=name=>'<svg aria-hidden="true"><use href="#i-'+name+'"></use></svg>';
const sharedAudioSections=['sound','echo','record'].map(id=>$('#'+id));
function placeAudio(){for(const node of sharedAudioSections){const slot=$('[data-home-audio="'+node.id+'"]');if(slot&&node.parentElement!==slot)slot.append(node);}if(!$('#audio-sections')?.children.length)$('#audio-sections')?.remove();}
let audio,frame=0,lastFrame=0,weights=[1,0,0],echoWeights=[1,0],visible={noise:false,echo:false,record:false},packPromises={},lastRecordingState='',controlInput=false;
const audioButtonKeys={},audioControls={};
 function translate(){root.lang=locale;document.title=t('title');$('meta[name=description]').content=t('description');$('meta[property="og:title"]').content=t('title');$('meta[property="og:description"]').content=t('description');$$('[data-copy]').forEach(e=>e.textContent=t(e.dataset.copy));$$('[data-label]').forEach(e=>e.setAttribute('aria-label',t(e.dataset.label)));$$('[data-language]').forEach(e=>{e.setAttribute('aria-pressed',String(e.dataset.language===locale));if(e.dataset.language===locale)$('#language-current').textContent=e.textContent;});home?.setLocale(locale);placeAudio(page);tour?.setLocale(locale);observeHome();guide?.setLocale(locale);demo?.setLocale?.(locale);renderAudio();}
// Paint the popup outside the header's backdrop root, from the first open frame.
const languageMenu=$('.language-menu'),languageOptions=$('.language-options'),languageTrigger=$('#language-trigger');
let languageOpen=false,languageAnimation;
document.body.append(languageOptions);languageOptions.classList.add('is-portaled');
languageTrigger.setAttribute('aria-controls','site-language-options');languageOptions.id='site-language-options';
function positionLanguageMenu(){const b=languageTrigger.getBoundingClientRect();languageOptions.style.left=Math.max(12,Math.min(innerWidth-197,b.right-185))+'px';languageOptions.style.right='auto';languageOptions.style.top=(b.bottom+10)+'px';languageOptions.style.maxHeight=Math.max(100,innerHeight-b.bottom-24)+'px';}
function setLanguageOpen(open,{focus=false}={}){if(open===languageOpen)return;languageOpen=open;languageAnimation?.cancel();languageTrigger.setAttribute('aria-expanded',String(open));if(open){positionLanguageMenu();languageOptions.hidden=false;if(!reduced.matches)languageAnimation=languageOptions.animate([{opacity:0},{opacity:1}],{duration:120,easing:'ease-out'});if(focus)languageOptions.querySelector('[aria-pressed="true"]')?.focus({preventScroll:true});}else languageOptions.hidden=true;}
languageTrigger.addEventListener('click',()=>setLanguageOpen(!languageOpen,{focus:true}));
languageTrigger.addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();setLanguageOpen(true,{focus:true});}});
languageOptions.addEventListener('keydown',e=>{const buttons=[...languageOptions.querySelectorAll('button')],i=buttons.indexOf(document.activeElement);let next;if(e.key==='ArrowDown')next=(i+1)%buttons.length;else if(e.key==='ArrowUp')next=(i+buttons.length-1)%buttons.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=buttons.length-1;if(next!==undefined){e.preventDefault();buttons[next].focus();}else if(e.key==='Tab'&&((e.shiftKey&&i===0)||(!e.shiftKey&&i===buttons.length-1))){e.preventDefault();setLanguageOpen(false);languageTrigger.focus({preventScroll:true});}});
document.addEventListener('pointerdown',e=>{if(languageOpen&&!languageMenu.contains(e.target)&&!languageOptions.contains(e.target))setLanguageOpen(false);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&languageOpen){setLanguageOpen(false);languageTrigger.focus({preventScroll:true});}});
window.addEventListener('resize',()=>{if(languageOpen)positionLanguageMenu();},{passive:true});
$$('[data-language]').forEach(e=>e.addEventListener('click',()=>{locale=e.dataset.language;translate();setLanguageOpen(false);languageTrigger.focus({preventScroll:true});try{localStorage.setItem('altsip-language',locale);}catch(_){}}));
function loadPack(kind){
 if(window.ALTSIP_AUDIO_GROUPS?.[kind])return Promise.resolve(window.ALTSIP_AUDIO_GROUPS[kind]);
 if(!packPromises[kind])packPromises[kind]=new Promise((resolve,reject)=>{
  const script=document.createElement('script');
  script.src='owner-audio-'+kind+'.js?v='+encodeURIComponent($('meta[name=altsip-audio-revision]')?.content||'78');
  script.onload=()=>{const pack=window.ALTSIP_AUDIO_GROUPS?.[kind];if(pack)resolve(pack);else{delete packPromises[kind];script.remove();reject(Error('Missing audio group'));}};
  script.onerror=()=>{script.remove();delete packPromises[kind];reject(Error('Audio load failed'));};document.head.append(script);
 });return packPromises[kind];
}
// Network preparation is bounded to nearby players and never starts playback or a context.
const prefetchAudio=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){
 const kind=entry.target.id==='sound-player'?'noise':entry.target.id==='echo-player'?'echo':'record';
 if(!navigator.connection?.saveData&&!/^(slow-)?2g$/.test(navigator.connection?.effectiveType||''))loadPack(kind).catch(()=>{});
 prefetchAudio.unobserve(entry.target);
}},{rootMargin:'600px',threshold:0});
for(const id of ['sound-player','echo-player','record-player'])prefetchAudio.observe($('#'+id));
audio=new window.AltSIPAudio({loadPack,onChange:renderAudio,durations:{noise:window.ALTSIP_OWNER_WAVES?.['conversation-original']?.duration,echo:window.ALTSIP_OWNER_WAVES?.['echo-original']?.duration,record:window.ALTSIP_OWNER_WAVES?.['recording-a']?.duration}});
const modeNames=['original','light','high'];
const waveNodes={noise:$('#noise-wave'),echo:$('#echo-wave'),recordA:$('#wave-a'),recordB:$('#wave-b')};
const waveGroups={noise:['conversation-original','conversation-light','conversation-processed'].map(n=>window.ALTSIP_OWNER_WAVES?.[n]),echo:['echo-original','echo-processed'].map(n=>window.ALTSIP_OWNER_WAVES?.[n]),recordA:[window.ALTSIP_OWNER_WAVES?.['recording-a']],recordB:[window.ALTSIP_OWNER_WAVES?.['recording-b']]};
function draw(animated=false){animated=animated===true;if(!audio)return;
 if(visible.noise&&(!animated||audio.playing&&audio.kind==='noise'||morphing()))window.AltSIPWave.render(waveNodes.noise,{waves:waveGroups.noise,weights,position:audio.position('noise'),playing:audio.playing&&audio.kind==='noise',clean:1-weights[0],warmth:weights[1],reduced:reduced.matches,dark:false});
 if(visible.echo&&(!animated||audio.playing&&audio.kind==='echo'||morphing('echo')))window.AltSIPWave.render(waveNodes.echo,{waves:waveGroups.echo,weights:echoWeights,position:audio.position('echo'),playing:audio.playing&&audio.kind==='echo',clean:echoWeights[1],reduced:reduced.matches,dark:false,accent:'#397f8c'});
 if(visible.record&&(!animated||audio.playing&&audio.kind==='record'))for(const[i,k]of ['a','b'].entries())window.AltSIPWave.render(waveNodes[i?'recordB':'recordA'],{waves:waveGroups[i?'recordB':'recordA'],weights:[1],position:audio.position('record'),playing:audio.playing&&audio.kind==='record',clean:1,record:true,reduced:reduced.matches,muted:audio.muted[i],dark:false,accent:k==='a'?'#188c72':'#4c8e9a'});
}
let waveDrawPending=false;
function queueWaveDraw(){if(waveDrawPending)return;waveDrawPending=true;requestAnimationFrame(()=>setTimeout(()=>{waveDrawPending=false;if(!needsFrames())draw();},0));}
function morphing(kind='noise'){const target=kind==='echo'?Number(audio.echoProcessed):modeNames.indexOf(audio.noiseMode);return(kind==='echo'?echoWeights:weights).some((v,i)=>v!==(i===target?1:0));}
function needsFrames(){if(document.hidden)return false;return page!=='guide'&&((audio.playing&&visible[audio.kind])||(visible.noise&&morphing())||(visible.echo&&morphing('echo')));}
function tick(now){frame=0;if(now-lastFrame>=(innerWidth<=800?40:32)){const dt=Math.max(0,now-lastFrame);lastFrame=now;const blend=1-Math.exp(-dt/212),target=modeNames.indexOf(audio.noiseMode);for(let i=0;i<weights.length;i++){const to=i===target?1:0,v=weights[i];weights[i]=reduced.matches||Math.abs(v-to)<.004?to:v+(to-v)*blend;}for(let i=0;i<echoWeights.length;i++){const to=i===Number(audio.echoProcessed)?1:0,v=echoWeights[i];echoWeights[i]=reduced.matches||Math.abs(v-to)<.004?to:v+(to-v)*blend;}draw(true);}if(needsFrames())frame=requestAnimationFrame(tick);else lastFrame=0;}
function renderAudio(){if(!audio||controlInput)return;
 const listState=JSON.stringify({side:audio.solo,playing:audio.playing&&audio.kind==='record'});
 if(listState!==lastRecordingState){lastRecordingState=listState;document.dispatchEvent(new CustomEvent('sip-demo-recording-state',{detail:JSON.parse(listState)}));}
for(const kind of ['noise','echo','record']){const playing=audio.playing&&audio.kind===kind,key=audio.busy&&audio.kind===kind?'loading':playing?'pause':audio.positions[kind]>=audio.duration(kind)-.02?'replay':'play',signature=locale+':'+key+':'+audio.busy;if(audioButtonKeys[kind]===signature)continue;audioButtonKeys[kind]=signature;const b=$('#'+kind+'-play');b.disabled=audio.busy;b.setAttribute('aria-label',t(key));b.classList.toggle('is-loading',key==='loading');b.setAttribute('aria-busy',String(key==='loading'));b.innerHTML=key==='loading'?'<span class=audio-spinner aria-hidden=true></span>':icon(playing?'pause':'play');const error=$('#'+kind+'-error');if(key==='loading'){error.textContent=t('loading');error.dataset.loading='true';}else if(error.dataset.loading==='true'){error.textContent='';delete error.dataset.loading;}$('#'+(kind==='noise'?'sound':kind)+'-player').classList.toggle('is-playing',playing);}
 if(audioControls.noiseMode!==audio.noiseMode){audioControls.noiseMode=audio.noiseMode;$$('[data-noise-mode]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.noiseMode===audio.noiseMode)));$('.noise-mode').dataset.mode=audio.noiseMode;}
 if(audioControls.echoProcessed!==audio.echoProcessed){audioControls.echoProcessed=audio.echoProcessed;$('.echo-mode').dataset.mode=audio.echoProcessed?'processed':'original';$$('[data-echo-mode]').forEach(e=>e.setAttribute('aria-pressed',String((e.dataset.echoMode==='processed')===audio.echoProcessed)));}
 if(audioControls.solo!==audio.solo){audioControls.solo=audio.solo;$('.track-selection').dataset.solo=audio.solo;$$('button[data-solo]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.solo===audio.solo)));$$('[data-track-solo]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.trackSolo===audio.solo)));}
 for(const[i,k]of ['a','b'].entries()){if(audioControls['mute'+k]!==audio.muted[i]){audioControls['mute'+k]=audio.muted[i];$('[data-track='+k+']').classList.toggle('muted',audio.muted[i]);}const gain=Math.round(audio.gains[i]*100);if(audioControls['gain'+k]!==gain){audioControls['gain'+k]=gain;const input=$('#gain-'+k);input.value=gain;input.style.setProperty('--range',gain+'%');}}
 const volume=Math.round(audio.volume*100);if(audioControls.volume!==volume){audioControls.volume=volume;for(const input of [$('#master-volume'),$('#echo-volume')]){input.value=volume;input.style.setProperty('--range',volume+'%');}}
 if(!needsFrames())queueWaveDraw();if(needsFrames()&&!frame){lastFrame=performance.now();frame=requestAnimationFrame(tick);}else if(!needsFrames()&&frame){cancelAnimationFrame(frame);frame=0;lastFrame=0;}}
for(const kind of ['noise','echo','record'])$('#'+kind+'-play').addEventListener('click',async()=>{$('#'+kind+'-error').textContent='';try{await audio.play(kind);if(document.hidden)audio.pause();}catch(_){$('#'+kind+'-error').textContent=t('audioError');}});
function setAudioLevel(setter,inputs,value){
 for(const input of inputs){input.value=value;input.style.setProperty('--range',value+'%');}
 // GainNode updates run in the input task; repainting every player and canvas
 // here delays the thumb on a busy main thread without changing the waveform.
 controlInput=true;try{setter(Number(value)/100);}finally{controlInput=false;}
}
$$('[data-noise-mode]').forEach(e=>e.addEventListener('click',()=>audio.setNoiseMode(e.dataset.noiseMode)));
const masterVolume=$('#master-volume'),echoVolume=$('#echo-volume');
for(const input of [masterVolume,echoVolume])input.addEventListener('input',e=>setAudioLevel(v=>audio.setVolume(v),[masterVolume,echoVolume],e.target.value));
$$('[data-echo-mode]').forEach(e=>e.addEventListener('click',()=>audio.setEchoProcessed(e.dataset.echoMode==='processed')));
for(const[i,k]of ['a','b'].entries()){const input=$('#gain-'+k);input.addEventListener('input',e=>setAudioLevel(v=>audio.setGain(i,v),[input],e.target.value));}
$$('button[data-solo]').forEach(e=>e.addEventListener('click',()=>audio.setSolo(e.dataset.solo)));$$('[data-track-solo]').forEach(e=>e.addEventListener('click',()=>audio.setSolo(audio.solo===e.dataset.trackSolo?'both':e.dataset.trackSolo)));
document.addEventListener('sip-demo-recording',async e=>{
 const side=e.detail?.side;if(!['a','b'].includes(side))return;
 if(!e.detail.playing){if(audio.kind==='record')audio.pause();return;}
 audio.setSolo(side);
 if(audio.playing&&audio.kind==='record')return;
 try{await audio.play('record');if(document.hidden)audio.pause();}catch(_){$('#record-error').textContent=t('audioError');}
});
document.addEventListener('visibilitychange',()=>{if(document.hidden)audio.pause();else renderAudio();});window.addEventListener('pagehide',()=>audio.pause());window.addEventListener('resize',draw,{passive:true});reduced.addEventListener('change',renderAudio);
const observer=new IntersectionObserver(entries=>{let audioVisibilityChanged=false;for(const e of entries){if(e.isIntersecting)e.target.classList.add('seen');const kind=e.target.id==='sound-player'?'noise':e.target.id==='record-player'?'record':e.target.id==='echo-player'?'echo':null;if(kind){audioVisibilityChanged ||= visible[kind]!==e.isIntersecting;visible[kind]=e.isIntersecting;}if(!e.isIntersecting&&audio.playing&&e.target.id===(audio.kind==='noise'?'sound':audio.kind)+'-player')audio.pause();}if(audioVisibilityChanged)draw();if(needsFrames()&&!frame)frame=requestAnimationFrame(tick);},{rootMargin:'20px',threshold:.02});$$('.reveal').forEach(e=>observer.observe(e));
function observeHome(){for(const section of homeObserved)observer.unobserve(section);homeObserved=$$('#home-overview .hp-tech,#home-overview .hp-history');for(const section of homeObserved){section.classList.add('reveal');observer.observe(section);}}
const menus=$$('details.mac-choice');document.addEventListener('click',e=>{for(const m of menus)if(m.open&&!m.contains(e.target))m.open=false;},true);document.addEventListener('keydown',e=>{if(e.key==='Escape')for(const m of menus)if(m.open){m.open=false;m.querySelector('summary').focus({preventScroll:true});}});
$$('[data-release]').forEach(a=>{const r=window.ALTSIP_RELEASES?.[a.dataset.release];if(!r)return;try{const u=new URL(r.url);if(u.protocol==='https:'&&u.origin==='https://github.com'&&u.pathname.startsWith('/AlternixApps/AltSIP-Releases/releases/download/')&&!u.search&&!u.hash&&!u.username&&!u.password)a.href=u.href;}catch(_){}});
const stage=$('#demo-stage'),host=$('#sip-demo'),position=$('.demo-position');
const demo=window.AltSIPDemo.mount(host,{compactLayout:innerWidth<=800,tourStartNumber:'12025550142',accountNames:['Office','Support','Personal'],accountNumbers:['12025550142','442079460128','16135550148']});
demo.setNumberPreview('12025550142');
host.style.zoom='1.35';
function applySize(){
 const size=demo.getSize(),stageBox=stage.getBoundingClientRect(),width=stageBox.width,height=stageBox.height;if(width<1||height<1)return;
 const density=1.35,copyRight=$('.hero-copy').getBoundingClientRect().right;
 // Reserve the expanded pane and the rotated body's projected edge from the start.
 const maxPaneWidth=684,edgeAllowance=1.08;
 const paneBudget=innerWidth>800?(innerWidth-Math.max(36,innerWidth*.04)-copyRight-24)/(maxPaneWidth*density*edgeAllowance):1;
 const scale=Math.max(.1,Math.min(paneBudget,Math.min(1,(width-18)/(380*density),(height-24)/(560*density))*(innerWidth>800?.9:1)));
 const anchorWidth=(innerWidth<=800?380:maxPaneWidth)*density,anchorHeight=560*density;
 position.style.setProperty('--demo-width',size.width*density+'px');position.style.setProperty('--demo-height',size.height*density+'px');position.style.setProperty('--demo-shell-width',(innerWidth<=800?380:maxPaneWidth)*density+'px');position.style.setProperty('--demo-shell-height',anchorHeight+'px');position.style.setProperty('--demo-scale',scale.toFixed(5));
 position.style.setProperty('--demo-anchor-x',(anchorWidth*scale/2).toFixed(2)+'px');position.style.setProperty('--demo-anchor-y',(anchorHeight*scale/2).toFixed(2)+'px');
 const reservedRight=stageBox.left+width/2-anchorWidth*scale/2+(maxPaneWidth*density+48)*scale;
 const shift=innerWidth>800?Math.min(0,innerWidth-Math.max(36,innerWidth*.04)-reservedRight):0;
 position.style.setProperty('--pane-shift',shift.toFixed(2)+'px');
}
let resizeUnlock;
let lastCompactLayout=innerWidth<=800,stageWidth=0,stageHeight=0,sizeFrame=0;
function scheduleSize(){if(!sizeFrame)sizeFrame=requestAnimationFrame(()=>{sizeFrame=0;applySize();});}
function sizeDemo(){
 const compact=innerWidth<=800;
 if(compact!==lastCompactLayout){lastCompactLayout=compact;demo.setCompactLayout(compact);}
 stage.classList.add('is-resizing');clearTimeout(resizeUnlock);scheduleSize();
 resizeUnlock=setTimeout(()=>stage.classList.remove('is-resizing'),180);
}
host.addEventListener('sip-demo-resize',scheduleSize);
new ResizeObserver(entries=>{const box=entries[0]?.contentRect;if(!box||box.width<1||box.height<1)return;if(Math.abs(box.width-stageWidth)<.5&&Math.abs(box.height-stageHeight)<.5)return;stageWidth=box.width;stageHeight=box.height;sizeDemo();}).observe(stage);
sizeDemo();
root.dataset.theme='light';
demo.setTheme('light');
const pages=['home','guide'],pageScroll={home:0,guide:0};
function setPage(next,{history=true,restore=true}={}){
 if(!pages.includes(next)||next===page)return;
 pageScroll[page]=scrollY;audio.pause();page=next;
 root.dataset.view=page;placeAudio(page);home?.setActive?.(page==='home');tour?.setActive?.(page==='home'&&tourActivated);demo.setActive(page==='home');
 for(const id of pages)$('#'+id+'-view').hidden=id!==page;
 for(const b of $$('.page-tabs [data-page]')){b.setAttribute('aria-selected',String(b.dataset.page===page));b.tabIndex=b.dataset.page===page?0:-1;}
 $('.page-tabs').style.setProperty('--page-index',pages.indexOf(page));
 if(page==='guide'&&!guide)guide=window.AltSIPGuide?.mount($('#guide'),{lang:locale});
 guide?.setTheme?.('light');
 const target=$('#'+page+'-view');target.classList.remove('page-enter');requestAnimationFrame(()=>target.classList.add('page-enter'));
 window.scrollTo({top:restore?pageScroll[page]:0,behavior:'instant'});
 if(history)window.history.pushState({view:page},'', '#'+page);
 sizeDemo();scrollMotion();
}
$$('.page-tabs [data-page]').forEach(b=>b.addEventListener('click',()=>setPage(b.dataset.page)));
document.addEventListener('click',e=>{const link=e.target.closest('[data-route]');if(link){e.preventDefault();setPage(link.dataset.route,{restore:false});if(link.dataset.topic)guide?.select?.(link.dataset.topic);if(link.dataset.anchor){const target=document.getElementById(link.dataset.anchor);if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}));}}});
$('.page-tabs').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const i=pages.indexOf(page);setPage(e.key==='Home'?'home':e.key==='End'?'guide':pages[(i+(e.key==='ArrowRight'?1:pages.length-1))%pages.length]);$('.page-tabs [data-page='+page+']').focus({preventScroll:true});});
function routeHash(){const name=location.hash.slice(1);if(pages.includes(name)){setPage(name,{history:false});return;}setPage('home',{history:false,restore:false});const target=['sound','echo','record','download'].includes(name)?$('#'+name):null;if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}));}
window.addEventListener('popstate',routeHash);
$('.brand').addEventListener('click',e=>{e.preventDefault();if(page!=='home')setPage('home',{restore:false});window.scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'});});
$('.back-top').addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'});});
$('.skip').addEventListener('click',e=>{e.preventDefault();const main=$('#main');main.tabIndex=-1;main.focus({preventScroll:true});main.scrollIntoView({block:'start',behavior:'instant'});});
document.addEventListener('sip-demo-language',e=>{const next=e.detail?.locale;if(!window.ALTSIP_COPY[next])return;locale=next;translate();try{localStorage.setItem('altsip-language',locale);}catch(_){}});

// The back-to-top affordance is the only scroll-dependent UI. Keep the hero
// heading and device in their settled position instead of painting transforms
// throughout a wheel gesture.
host.inert=true;host.setAttribute('aria-hidden','true');
let backTopHidden;
function scrollMotion(){const hidden=scrollY<300;if(hidden===backTopHidden)return;backTopHidden=hidden;const backTop=$('.back-top');backTop.dataset.hidden=String(hidden);backTop.tabIndex=hidden?-1:0;}
window.addEventListener('scroll',scrollMotion,{passive:true});scrollMotion();
home=window.AltSIPHome?.mount($('#home-overview'),{lang:locale,onMount:placeAudio,onViewport:renderAudio});home?.setTheme?.('light');tour=window.AltSIPTour?.mount(host,{demo,turnElement:$('.demo-turn')});tour?.setLocale(locale);root.dataset.view=page;root.classList.add('js');translate();routeHash();home?.setActive?.(page==='home');demo.setActive(page==='home');
// Start the scripted tour after the populated dialer reaches the screen.
let tourPaintObserver,tourQueued=false;
const activateTour=()=>{if(tourActivated)return;tourActivated=true;tourPaintObserver?.disconnect();tour?.setActive?.(page==='home');};
const queueTour=()=>{if(tourQueued)return;tourQueued=true;tourPaintObserver?.disconnect();requestAnimationFrame(()=>requestAnimationFrame(activateTour));};
if(performance.getEntriesByName('first-contentful-paint').length)queueTour();
else if(typeof PerformanceObserver==='function'&&PerformanceObserver.supportedEntryTypes?.includes('paint')){
 try{tourPaintObserver=new PerformanceObserver(list=>{if(list.getEntries().some(entry=>entry.name==='first-contentful-paint'))queueTour();});tourPaintObserver.observe({type:'paint',buffered:true});}
 catch(_){queueTour();}
}else queueTour();
window.addEventListener('load',draw,{once:true});
})();
