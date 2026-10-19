(()=>{
'use strict';
const root=document.documentElement,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const reduced=matchMedia('(prefers-reduced-motion: reduce)');let locale='ru',guide,home,tour,page='home',homeObserved=[];
try{const saved=localStorage.getItem('altsip-language');if(window.ALTSIP_COPY[saved])locale=saved;}catch(_){}
const t=k=>window.ALTSIP_COPY[locale]?.[k]||window.ALTSIP_COPY.ru[k]||k;
const icon=name=>'<svg aria-hidden="true"><use href="#i-'+name+'"></use></svg>';
const sharedAudioSections=['sound','echo','record'].map(id=>$('#'+id));
function placeAudio(){for(const node of sharedAudioSections){const slot=$('[data-home-audio="'+node.id+'"]');if(slot&&node.parentElement!==slot)slot.append(node);}if(!$('#audio-sections')?.children.length)$('#audio-sections')?.remove();}
let audio,frame=0,lastFrame=0,weights=[1,0,0],echoWeights=[1,0],visible={noise:false,echo:false,record:false},packPromises={},lastRecordingState='';
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
function draw(animated=false){animated=animated===true;if(!audio)return;
 const waves=window.ALTSIP_OWNER_WAVES||{};if(visible.noise&&(!animated||audio.playing&&audio.kind==='noise'||morphing()))window.AltSIPWave.render($('#noise-wave'),{waves:['conversation-original','conversation-light','conversation-processed'].map(n=>waves[n]),weights,position:audio.position('noise'),playing:audio.playing&&audio.kind==='noise',clean:1-weights[0],reduced:reduced.matches,dark:false});
 if(visible.echo&&(!animated||audio.playing&&audio.kind==='echo'||morphing('echo')))window.AltSIPWave.render($('#echo-wave'),{waves:['echo-original','echo-processed'].map(n=>waves[n]),weights:echoWeights,position:audio.position('echo'),playing:audio.playing&&audio.kind==='echo',clean:echoWeights[1],reduced:reduced.matches,dark:false,accent:'#397f8c'});
 if(visible.record&&(!animated||audio.playing&&audio.kind==='record'))for(const[i,k]of ['a','b'].entries())window.AltSIPWave.render($('#wave-'+k),{waves:[waves['recording-'+k]],weights:[1],position:audio.position('record'),playing:audio.playing&&audio.kind==='record',clean:1,record:true,reduced:reduced.matches,muted:audio.muted[i],dark:false,accent:k==='a'?'#188c72':'#4c8e9a'});
}
function morphing(kind='noise'){const target=kind==='echo'?Number(audio.echoProcessed):modeNames.indexOf(audio.noiseMode);return(kind==='echo'?echoWeights:weights).some((v,i)=>v!==(i===target?1:0));}
function needsFrames(){if(document.hidden)return false;return page!=='guide'&&((audio.playing&&visible[audio.kind])||(visible.noise&&morphing())||(visible.echo&&morphing('echo')));}
function tick(now){frame=0;if(now-lastFrame>(innerWidth<=800?40:32)){lastFrame=now;const target=modeNames.indexOf(audio.noiseMode);weights=weights.map((v,i)=>{const to=i===target?1:0;return reduced.matches||Math.abs(v-to)<.004?to:v+(to-v)*.14});echoWeights=echoWeights.map((v,i)=>{const to=i===Number(audio.echoProcessed)?1:0;return reduced.matches||Math.abs(v-to)<.004?to:v+(to-v)*.14});draw(true);}if(needsFrames())frame=requestAnimationFrame(tick);}
function renderAudio(){if(!audio)return;
 const listState=JSON.stringify({side:audio.solo,playing:audio.playing&&audio.kind==='record'});
 if(listState!==lastRecordingState){lastRecordingState=listState;document.dispatchEvent(new CustomEvent('sip-demo-recording-state',{detail:JSON.parse(listState)}));}
for(const kind of ['noise','echo','record']){const playing=audio.playing&&audio.kind===kind,key=audio.busy&&audio.kind===kind?'loading':playing?'pause':audio.positions[kind]>=audio.duration(kind)-.02?'replay':'play';const b=$('#'+kind+'-play');b.disabled=audio.busy;b.setAttribute('aria-label',t(key));b.classList.toggle('is-loading',key==='loading');b.setAttribute('aria-busy',String(key==='loading'));b.innerHTML=key==='loading'?'<span class=audio-spinner aria-hidden=true></span>':icon(playing?'pause':'play');const error=$('#'+kind+'-error');if(key==='loading'){error.textContent=t('loading');error.dataset.loading='true';}else if(error.dataset.loading==='true'){error.textContent='';delete error.dataset.loading;}$('#'+(kind==='noise'?'sound':kind)+'-player').classList.toggle('is-playing',playing);}
 $$('[data-noise-mode]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.noiseMode===audio.noiseMode)));$('.noise-mode').dataset.mode=audio.noiseMode;$('.echo-mode').dataset.mode=audio.echoProcessed?'processed':'original';$$('[data-echo-mode]').forEach(e=>e.setAttribute('aria-pressed',String((e.dataset.echoMode==='processed')===audio.echoProcessed)));$('.track-selection').dataset.solo=audio.solo;$$('button[data-solo]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.solo===audio.solo)));$$('[data-track-solo]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.trackSolo===audio.solo)));for(const[i,k]of ['a','b'].entries()){$('[data-track='+k+']').classList.toggle('muted',audio.muted[i]);$('#gain-'+k).value=Math.round(audio.gains[i]*100);}$('#master-volume').value=$('#echo-volume').value=Math.round(audio.volume*100);for(const e of [$('#master-volume'),$('#echo-volume'),$('#gain-a'),$('#gain-b')])e.style.setProperty('--range',e.value+'%');draw();if(needsFrames()&&!frame)frame=requestAnimationFrame(tick);else if(!needsFrames()&&frame){cancelAnimationFrame(frame);frame=0;}}
for(const kind of ['noise','echo','record'])$('#'+kind+'-play').addEventListener('click',async()=>{$('#'+kind+'-error').textContent='';try{await audio.play(kind);if(document.hidden)audio.pause();}catch(_){$('#'+kind+'-error').textContent=t('audioError');}});
$$('[data-noise-mode]').forEach(e=>e.addEventListener('click',()=>audio.setNoiseMode(e.dataset.noiseMode)));for(const id of ['master-volume','echo-volume'])$('#'+id).addEventListener('input',e=>audio.setVolume(Number(e.target.value)/100));$$('[data-echo-mode]').forEach(e=>e.addEventListener('click',()=>audio.setEchoProcessed(e.dataset.echoMode==='processed')));for(const[i,k]of ['a','b'].entries())$('#gain-'+k).addEventListener('input',e=>audio.setGain(i,Number(e.target.value)/100));$$('button[data-solo]').forEach(e=>e.addEventListener('click',()=>audio.setSolo(e.dataset.solo)));$$('[data-track-solo]').forEach(e=>e.addEventListener('click',()=>audio.setSolo(audio.solo===e.dataset.trackSolo?'both':e.dataset.trackSolo)));
document.addEventListener('sip-demo-recording',async e=>{
 const side=e.detail?.side;if(!['a','b'].includes(side))return;
 if(!e.detail.playing){if(audio.kind==='record')audio.pause();return;}
 audio.setSolo(side);
 if(audio.playing&&audio.kind==='record')return;
 try{await audio.play('record');if(document.hidden)audio.pause();}catch(_){$('#record-error').textContent=t('audioError');}
});
document.addEventListener('visibilitychange',()=>{if(document.hidden)audio.pause();});window.addEventListener('pagehide',()=>audio.pause());window.addEventListener('resize',draw,{passive:true});reduced.addEventListener('change',draw);
const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting)e.target.classList.add('seen');if(e.target.id==='sound-player')visible.noise=e.isIntersecting;if(e.target.id==='record-player')visible.record=e.isIntersecting;if(e.target.id==='echo-player')visible.echo=e.isIntersecting;if(!e.isIntersecting&&audio.playing&&e.target.id===(audio.kind==='noise'?'sound':audio.kind)+'-player')audio.pause();}draw();if(needsFrames()&&!frame)frame=requestAnimationFrame(tick);},{rootMargin:'20px',threshold:.02});$$('.reveal').forEach(e=>observer.observe(e));
function observeHome(){for(const section of homeObserved)observer.unobserve(section);homeObserved=$$('#home-overview .hp-tech,#home-overview .hp-history');for(const section of homeObserved){section.classList.add('reveal');observer.observe(section);}}
const menus=$$('details.mac-choice');document.addEventListener('click',e=>{for(const m of menus)if(m.open&&!m.contains(e.target))m.open=false;},true);document.addEventListener('keydown',e=>{if(e.key==='Escape')for(const m of menus)if(m.open){m.open=false;m.querySelector('summary').focus({preventScroll:true});}});
$$('[data-release]').forEach(a=>{const r=window.ALTSIP_RELEASES?.[a.dataset.release];if(!r)return;try{const u=new URL(r.url);if(u.protocol==='https:'&&u.origin==='https://github.com'&&u.pathname.startsWith('/AlternixApps/AltSIP-Releases/releases/download/')&&!u.search&&!u.hash&&!u.username&&!u.password)a.href=u.href;}catch(_){}});
const stage=$('#demo-stage'),host=$('#sip-demo'),position=$('.demo-position');
const demo=window.AltSIPDemo.mount(host,{compactLayout:innerWidth<=800,accountNames:['Office','Support','Personal'],accountNumbers:['12025550142','442079460128','16135550148']});
host.style.zoom='1.35';
function applySize(){
 const size=demo.getSize(),width=stage.clientWidth,height=stage.clientHeight;if(width<1||height<1)return;
 const density=1.35,copyRight=$('.hero-copy').getBoundingClientRect().right;
 // Reserve the expanded pane and the rotated body's projected edge from the start.
 const maxPaneWidth=684,edgeAllowance=1.08;
 const paneBudget=innerWidth>800?(innerWidth-Math.max(36,innerWidth*.04)-copyRight-24)/(maxPaneWidth*density*edgeAllowance):1;
 const scale=Math.max(.1,Math.min(paneBudget,Math.min(1,(width-18)/(380*density),(height-24)/(560*density))*(innerWidth>800?.9:1)));
 const anchorWidth=(innerWidth<=800?380:maxPaneWidth)*density,anchorHeight=560*density;
 position.style.setProperty('--demo-width',size.width*density+'px');position.style.setProperty('--demo-height',size.height*density+'px');position.style.setProperty('--demo-shell-width',(innerWidth<=800?380:maxPaneWidth)*density+'px');position.style.setProperty('--demo-shell-height',anchorHeight+'px');position.style.setProperty('--demo-scale',scale.toFixed(5));
 position.style.setProperty('--demo-anchor-x',(anchorWidth*scale/2).toFixed(2)+'px');position.style.setProperty('--demo-anchor-y',(anchorHeight*scale/2).toFixed(2)+'px');
 const r=stage.getBoundingClientRect(),reservedRight=r.left+width/2-anchorWidth*scale/2+(maxPaneWidth*density+48)*scale;
 const shift=innerWidth>800?Math.min(0,innerWidth-Math.max(36,innerWidth*.04)-reservedRight):0;
 position.style.setProperty('--pane-shift',shift.toFixed(2)+'px');
}
let resizeUnlock;
function sizeDemo(){if(stage.clientWidth<1)return;stage.classList.add('is-resizing');clearTimeout(resizeUnlock);demo.setCompactLayout(innerWidth<=800);applySize();resizeUnlock=setTimeout(()=>stage.classList.remove('is-resizing'),180);}host.addEventListener('sip-demo-resize',applySize);new ResizeObserver(sizeDemo).observe(stage);sizeDemo();
root.dataset.theme='light';
demo.setTheme('light');
const pages=['home','guide'],pageScroll={home:0,guide:0};
function setPage(next,{history=true,restore=true}={}){
 if(!pages.includes(next)||next===page)return;
 pageScroll[page]=scrollY;audio.pause();page=next;
 scrollShown=scrollTarget=0;cancelAnimationFrame(scrollFrame);scrollFrame=0;writeScroll(0);
 root.dataset.view=page;placeAudio(page);home?.setActive?.(page==='home');tour?.setActive?.(page==='home');demo.setActive(page==='home');
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

let scrollFrame=0,scrollShown=0,scrollTarget=0,lastScrollTime=0;
const easeRange=(a,b,x)=>{const v=Math.max(0,Math.min(1,(x-a)/(b-a)));return v*v*(3-2*v);};
function writeScroll(p){
 const depart=easeRange(.04,.9,p);
 const values={'--hero-progress':p,'--copy-opacity':1-easeRange(.12,.8,p),'--copy-rise':(-depart*24)+'px','--device-opacity':1-easeRange(.25,.94,p),'--device-shrink':1-depart*.055,'--device-rise':(-depart*48)+'px'};
 const story=$('#hero-story');for(const[k,v]of Object.entries(values))story.style.setProperty(k,String(v));
 host.inert=true;host.setAttribute('aria-hidden','true');$('.hero-copy').inert=p>.85;
}
function paintScroll(now){
 scrollFrame=0;const dt=lastScrollTime?Math.min(40,now-lastScrollTime):16;lastScrollTime=now;
 scrollShown=reduced.matches?scrollTarget:scrollShown+(scrollTarget-scrollShown)*(1-Math.exp(-dt/82));
 if(Math.abs(scrollShown-scrollTarget)<.0003)scrollShown=scrollTarget;
 writeScroll(scrollShown);if(scrollShown!==scrollTarget)scrollFrame=requestAnimationFrame(paintScroll);
}
function scrollMotion(){const max=Math.max(1,innerHeight*.85);scrollTarget=reduced.matches||innerWidth<=800||page!=='home'?0:Math.max(0,Math.min(1,scrollY/max));if(!scrollFrame)scrollFrame=requestAnimationFrame(paintScroll);const hidden=scrollY<300;$('.back-top').dataset.hidden=String(hidden);$('.back-top').tabIndex=hidden?-1:0;}
window.addEventListener('scroll',scrollMotion,{passive:true});window.addEventListener('resize',scrollMotion,{passive:true});reduced.addEventListener('change',scrollMotion);scrollMotion();
home=window.AltSIPHome?.mount($('#home-overview'),{lang:locale,onViewport:renderAudio});home?.setTheme?.('light');tour=window.AltSIPTour?.mount(host,{demo,turnElement:$('.demo-turn')});tour?.setLocale(locale);root.dataset.view=page;root.classList.add('js');translate();routeHash();home?.setActive?.(page==='home');tour?.setActive?.(page==='home');demo.setActive(page==='home');window.addEventListener('load',draw,{once:true});
})();
