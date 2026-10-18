(()=>{
'use strict';
const root=document.documentElement,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const reduced=matchMedia('(prefers-reduced-motion: reduce)');let locale='ru',features,guide,page='home';
try{const saved=localStorage.getItem('altsip-language');if(window.ALTSIP_COPY[saved])locale=saved;}catch(_){}
const t=k=>window.ALTSIP_COPY[locale]?.[k]||window.ALTSIP_COPY.ru[k]||k;
const icon=name=>'<svg aria-hidden="true"><use href="#i-'+name+'"></use></svg>';
let audio,frame=0,lastFrame=0,weights=[1,0,0],visible={noise:true,record:true},packPromise,lastRecordingState='';
const format=x=>Math.floor(x/60).toString().padStart(2,'0')+':'+Math.floor(x%60).toString().padStart(2,'0');
function translate(){root.lang=locale;document.title=t('title');$('meta[name=description]').content=t('description');$('meta[property="og:title"]').content=t('title');$('meta[property="og:description"]').content=t('description');$$('[data-copy]').forEach(e=>e.textContent=t(e.dataset.copy));$$('[data-label]').forEach(e=>e.setAttribute('aria-label',t(e.dataset.label)));$$('[data-language]').forEach(e=>{e.setAttribute('aria-pressed',String(e.dataset.language===locale));if(e.dataset.language===locale)$('#language-current').textContent=e.textContent;});features?.setLocale(locale);guide?.setLocale(locale);demo?.setLocale?.(locale);renderAudio();}
$$('[data-language]').forEach(e=>e.addEventListener('click',()=>{locale=e.dataset.language;translate();$('.language-menu').open=false;$('#language-trigger').focus({preventScroll:true});try{localStorage.setItem('altsip-language',locale);}catch(_){}}));
function loadPack(){if(window.ALTSIP_OWNER_AUDIO)return Promise.resolve(window.ALTSIP_OWNER_AUDIO);if(!packPromise)packPromise=new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='owner-audio-pack.js';s.onload=()=>resolve(window.ALTSIP_OWNER_AUDIO);s.onerror=()=>{s.remove();packPromise=null;reject(Error('Audio load failed'));};document.head.append(s);});return packPromise;}
audio=new window.AltSIPAudio({loadPack,onChange:renderAudio});
const modeNames=['original','light','high'];
function draw(){if(!audio)return;const dark=root.dataset.theme==='dark';for(const kind of ['noise','record']){const p=audio.position(kind),duration=audio.duration(kind);$('#'+kind+'-time').textContent=format(p)+' / '+format(duration);for(const c of kind==='noise'?[$('#noise-wave')]:[$('#wave-a'),$('#wave-b')]){c.setAttribute('aria-valuenow',String(Math.round(p/duration*100)));c.setAttribute('aria-valuetext',format(p)+' / '+format(duration));}}
 const waves=window.ALTSIP_OWNER_WAVES||{};if(visible.noise)window.AltSIPWave.render($('#noise-wave'),{waves:['conversation-original','conversation-light','conversation-processed'].map(n=>waves[n]),weights,position:audio.position('noise'),playing:audio.playing&&audio.kind==='noise',clean:1-weights[0],reduced:reduced.matches,dark});
 if(visible.record)for(const[i,k]of ['a','b'].entries())window.AltSIPWave.render($('#wave-'+k),{waves:[waves['recording-'+k]],weights:[1],position:audio.position('record'),playing:audio.playing&&audio.kind==='record',clean:1,record:true,reduced:reduced.matches,muted:audio.muted[i],dark,accent:k==='a'?'#188c72':'#4c8e9a'});
}
function morphing(){const target=modeNames.indexOf(audio.noiseMode);return weights.some((v,i)=>v!==(i===target?1:0));}
function tick(now){frame=0;if(now-lastFrame>15){lastFrame=now;const target=modeNames.indexOf(audio.noiseMode);weights=weights.map((v,i)=>{const to=i===target?1:0;return reduced.matches||Math.abs(v-to)<.004?to:v+(to-v)*.14});draw();}if((audio.playing||morphing())&&!document.hidden)frame=requestAnimationFrame(tick);}
function renderAudio(){if(!audio)return;
 const listState=JSON.stringify({side:audio.solo,playing:audio.playing&&audio.kind==='record'});
 if(listState!==lastRecordingState){lastRecordingState=listState;document.dispatchEvent(new CustomEvent('sip-demo-recording-state',{detail:JSON.parse(listState)}));}
for(const kind of ['noise','record']){const playing=audio.playing&&audio.kind===kind,key=audio.busy&&audio.kind===kind?'loading':playing?'pause':audio.positions[kind]>=audio.duration(kind)-.02?'replay':'play';const b=$('#'+kind+'-play');b.disabled=audio.busy;b.setAttribute('aria-label',t(key));b.innerHTML=icon(playing?'pause':'play');$('#'+(kind==='noise'?'sound':'record')+'-player').classList.toggle('is-playing',playing);}
 $$('[data-noise-mode]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.noiseMode===audio.noiseMode)));$('.noise-mode').dataset.mode=audio.noiseMode;$('.track-selection').dataset.solo=audio.solo;$$('button[data-solo]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.solo===audio.solo)));$$('[data-track-solo]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.trackSolo===audio.solo)));for(const[i,k]of ['a','b'].entries()){$('[data-track='+k+']').classList.toggle('muted',audio.muted[i]);$('#gain-'+k).value=Math.round(audio.gains[i]*100);}$('#master-volume').value=Math.round(audio.volume*100);for(const e of [$('#master-volume'),$('#gain-a'),$('#gain-b')])e.style.setProperty('--range',e.value+'%');draw();if((audio.playing||morphing())&&!frame)frame=requestAnimationFrame(tick);else if(!audio.playing&&!morphing()&&frame){cancelAnimationFrame(frame);frame=0;}}
for(const kind of ['noise','record'])$('#'+kind+'-play').addEventListener('click',async()=>{$('#'+kind+'-error').textContent='';try{await audio.play(kind);if(document.hidden)audio.pause();}catch(_){$('#'+kind+'-error').textContent=t('audioError');}});
function seekable(canvas,kind){let drag=null;const seek=e=>{const r=canvas.getBoundingClientRect();audio.seek(kind,window.AltSIPWave.seekFraction({fraction:(e.clientX-r.left)/r.width,position:drag?.origin??audio.position(kind),duration:audio.duration(kind),playing:drag?.moving??(audio.playing&&audio.kind===kind),reduced:reduced.matches}));};canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,origin:audio.position(kind),moving:audio.playing&&audio.kind===kind,touch:e.pointerType==='touch',active:e.pointerType!=='touch'};if(drag.active){canvas.setPointerCapture(e.pointerId);seek(e);}});canvas.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;if(!drag.active){const dx=Math.abs(e.clientX-drag.x),dy=Math.abs(e.clientY-drag.y);if(dy>dx&&dy>8){drag=null;return;}if(dx<8)return;drag.active=true;canvas.setPointerCapture(e.pointerId);}seek(e);});canvas.addEventListener('pointerup',e=>{if(drag&&drag.id===e.pointerId){seek(e);drag=null;if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);}});canvas.addEventListener('pointercancel',()=>{drag=null;});canvas.addEventListener('keydown',e=>{const p=audio.position(kind),duration=audio.duration(kind);if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();audio.seek(kind,e.key==='Home'?0:e.key==='End'?1:(p+(e.key==='ArrowLeft'?-2:2))/duration);}});}
seekable($('#noise-wave'),'noise');seekable($('#wave-a'),'record');seekable($('#wave-b'),'record');
$$('[data-noise-mode]').forEach(e=>e.addEventListener('click',()=>audio.setNoiseMode(e.dataset.noiseMode)));$('#master-volume').addEventListener('input',e=>audio.setVolume(Number(e.target.value)/100));for(const[i,k]of ['a','b'].entries())$('#gain-'+k).addEventListener('input',e=>audio.setGain(i,Number(e.target.value)/100));$$('button[data-solo]').forEach(e=>e.addEventListener('click',()=>audio.setSolo(e.dataset.solo)));$$('[data-track-solo]').forEach(e=>e.addEventListener('click',()=>audio.setSolo(audio.solo===e.dataset.trackSolo?'both':e.dataset.trackSolo)));
document.addEventListener('sip-demo-recording',async e=>{
 const side=e.detail?.side;if(!['a','b'].includes(side))return;
 if(!e.detail.playing){if(audio.kind==='record')audio.pause();return;}
 audio.setSolo(side);
 if(audio.playing&&audio.kind==='record')return;
 try{await audio.play('record');if(document.hidden)audio.pause();}catch(_){$('#record-error').textContent=t('audioError');}
});
document.addEventListener('visibilitychange',()=>{if(document.hidden)audio.pause();});window.addEventListener('pagehide',()=>audio.pause());window.addEventListener('resize',draw,{passive:true});reduced.addEventListener('change',draw);
const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting)e.target.classList.add('seen');if(e.target.id==='sound-player')visible.noise=e.isIntersecting;if(e.target.id==='record-player')visible.record=e.isIntersecting;}draw();},{rootMargin:'60px',threshold:.06});$$('.reveal').forEach(e=>observer.observe(e));
const menus=$$('details.mac-choice,details.language-menu');document.addEventListener('click',e=>{for(const m of menus)if(m.open&&!m.contains(e.target))m.open=false;},true);document.addEventListener('keydown',e=>{if(e.key==='Escape')for(const m of menus)if(m.open){m.open=false;m.querySelector('summary').focus({preventScroll:true});}});
$$('[data-release]').forEach(a=>{const r=window.ALTSIP_RELEASES?.[a.dataset.release];if(!r)return;try{const u=new URL(r.url);if(u.protocol==='https:'&&u.origin==='https://github.com'&&u.pathname.startsWith('/AlternixApps/AltSIP-Releases/releases/download/')&&!u.search&&!u.hash&&!u.username&&!u.password)a.href=u.href;}catch(_){}});
const stage=$('#demo-stage'),host=$('#sip-demo'),position=$('.demo-position');
const demo=window.AltSIPDemo.mount(host,{compactLayout:stage.clientWidth<540});
host.style.zoom='1.5';
function applySize(){
 const size=demo.getSize(),width=stage.clientWidth,height=stage.clientHeight;if(width<1||height<1)return;
 const density=1.5,scale=Math.max(.1,Math.min(1,(width-18)/(380*density),(height-24)/(560*density)));
 position.style.setProperty('--demo-width',size.width*density+'px');position.style.setProperty('--demo-height',size.height*density+'px');position.style.setProperty('--demo-scale',scale.toFixed(5));
 const r=stage.getBoundingClientRect(),shift=width>=540?Math.min(0,innerWidth-28-(r.left+width/2+size.width*density*scale/2)):0;
 position.style.setProperty('--pane-shift',shift.toFixed(2)+'px');
}
function sizeDemo(){if(stage.clientWidth<1)return;demo.setCompactLayout(stage.clientWidth<540);applySize();}host.addEventListener('sip-demo-resize',applySize);new ResizeObserver(sizeDemo).observe(stage);sizeDemo();
let themeTransition;
function applyTheme(theme){root.dataset.theme=theme;demo.setTheme(theme);features?.setTheme?.(theme);guide?.setTheme?.(theme);draw();}
document.addEventListener('sip-demo-theme',e=>{
 e.preventDefault();const theme=e.detail?.theme;if(!['light','dark'].includes(theme)||theme===root.dataset.theme)return;
 themeTransition?.skipTransition?.();
 if(document.startViewTransition&&!reduced.matches){root.classList.add('theme-snapshot');const transition=document.startViewTransition(()=>applyTheme(theme));themeTransition=transition;transition.finished.catch(()=>{}).finally(()=>{if(themeTransition===transition)root.classList.remove('theme-snapshot');});}
 else applyTheme(theme);
});
features=window.AltSIPFeatures?.mount($('#features'),{lang:locale});
function setPage(next){if(!['home','guide'].includes(next))return;page=next;if(page==='guide')audio.pause();scrollShown=scrollTarget=0;cancelAnimationFrame(scrollFrame);scrollFrame=0;writeScroll(0);root.dataset.view=page;const target=$('#'+page+'-view');$('#home-view').hidden=page!=='home';$('#guide-view').hidden=page!=='guide';$$('.page-tabs [data-page]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.page===page));b.tabIndex=b.dataset.page===page?0:-1;});$('.page-tabs').style.setProperty('--page-index',page==='guide'?1:0);if(page==='guide'&&!guide)guide=window.AltSIPGuide?.mount($('#guide'),{lang:locale});guide?.setTheme?.(root.dataset.theme||'light');target.classList.remove('page-enter');requestAnimationFrame(()=>target.classList.add('page-enter'));window.scrollTo({top:0,behavior:'instant'});sizeDemo();scrollMotion();}
$$('.page-tabs [data-page]').forEach(b=>b.addEventListener('click',()=>setPage(b.dataset.page)));
$('.page-tabs').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();setPage(e.key==='Home'?'home':e.key==='End'?'guide':page==='home'?'guide':'home');$('.page-tabs [data-page='+page+']').focus({preventScroll:true});});
$('.brand').addEventListener('click',()=>{if(page!=='home')setPage('home');});
document.addEventListener('sip-demo-language',e=>{const next=e.detail?.locale;if(!window.ALTSIP_COPY[next])return;locale=next;translate();try{localStorage.setItem('altsip-language',locale);}catch(_){}});

let scrollFrame=0,scrollShown=0,scrollTarget=0,lastScrollTime=0;
const easeRange=(a,b,x)=>{const v=Math.max(0,Math.min(1,(x-a)/(b-a)));return v*v*(3-2*v);};
function writeScroll(p){
 const depart=easeRange(.02,.95,p),turn=easeRange(.06,.95,p);
 const values={'--hero-progress':p,'--copy-opacity':1-easeRange(.08,.72,p),'--copy-rise':(-depart*62)+'px','--device-opacity':1-easeRange(.27,.94,p),'--device-turn':(-14-turn*53)+'deg','--device-lean':(-depart*5)+'deg','--device-shrink':1-depart*.12,'--device-rise':(-depart*100)+'px'};
 const story=$('#hero-story');for(const[k,v]of Object.entries(values))story.style.setProperty(k,String(v));
 host.inert=p>.86;host.setAttribute('aria-hidden',String(p>.86));$('.hero-copy').inert=p>.75;
}
function sectionMotion(){
 if(page!=='home')return;
 for(const[id,roll]of [['sound-player',1],['record-player',-1]]){
  const el=$('#'+id);if(reduced.matches||innerWidth<=800){el.style.transform='';continue;}
  const r=el.closest('section').getBoundingClientRect(),entry=Math.max(0,Math.min(1,(innerHeight-r.top-100)/(innerHeight*.72)));
  const settle=easeRange(0,1,entry);el.style.transform='translate3d(0,'+((1-settle)*30).toFixed(2)+'px,0) rotateX('+((1-settle)*4).toFixed(2)+'deg) rotateY('+((1-settle)*roll*2).toFixed(2)+'deg) scale('+(1-(1-settle)*.025).toFixed(4)+')';
 }
}
function paintScroll(now){
 scrollFrame=0;const dt=lastScrollTime?Math.min(40,now-lastScrollTime):16;lastScrollTime=now;
 scrollShown=reduced.matches?scrollTarget:scrollShown+(scrollTarget-scrollShown)*(1-Math.exp(-dt/82));
 if(Math.abs(scrollShown-scrollTarget)<.0003)scrollShown=scrollTarget;
 writeScroll(scrollShown);sectionMotion();if(scrollShown!==scrollTarget)scrollFrame=requestAnimationFrame(paintScroll);
}
function scrollMotion(){const story=$('#hero-story'),r=story.getBoundingClientRect(),max=Math.max(1,innerHeight*.85);scrollTarget=reduced.matches||innerWidth<=800||page!=='home'?0:Math.max(0,Math.min(1,-r.top/max));if(!scrollFrame)scrollFrame=requestAnimationFrame(paintScroll);const hidden=scrollY<300;$('.back-top').dataset.hidden=String(hidden);$('.back-top').tabIndex=hidden?-1:0;}
window.addEventListener('scroll',scrollMotion,{passive:true});window.addEventListener('resize',scrollMotion,{passive:true});reduced.addEventListener('change',scrollMotion);scrollMotion();
root.classList.add('js');translate();window.addEventListener('load',draw,{once:true});
})();
