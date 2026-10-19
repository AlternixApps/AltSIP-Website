/* Synthetic, in-memory AltSIP interface preview. It never touches SIP, audio devices or a profile. */
(() => {
  'use strict';
  const localeNames={en:'English',de:'Deutsch',es:'Español',fr:'Français',it:'Italiano',pl:'Polski',pt:'Português',ru:'Русский',uk:'Українська'};
  const localeCodes=Object.keys(localeNames);
  const aliases={
    'Sound & devices':'Sound and devices','Refresh device list':'Refresh devices',
    'Remove spaces from number':'Remove spaces from dial string','Remove + before number':'Remove leading +',
    'High':'Strong','System default':'System default device','Search history':'Search call history',
    'Automatically record calls':'Record calls automatically','Recordings list':'Recordings',
    'Export history CSV':'Export history to CSV','Edit account':'Edit SIP account','Copy address':'Copy SIP account',
    'Move up':'Raise priority','Move down':'Lower priority','Copy unavailable':'Could not copy the number. Try again.',
    'Authorization login':'Authentication login','Talk duration':'Call duration','Toggle compact mode':'Compact mode','Dial pad':'Keypad','Redial or erase':'Redial last number','Automatic recording':'Record calls automatically','Conference':'Merge calls','Number to dial':'Number or SIP address','speaker level':'Speaker','microphone level':'Microphone','Use global codec settings':'Use shared codec settings'
  };
  const extra={
    'Light theme':{de:'Hell',es:'Claro',fr:'Clair',it:'Chiaro',pl:'Jasny',pt:'Claro',ru:'Светлая',uk:'Світла'},
    'Dark theme':{de:'Dunkel',es:'Oscuro',fr:'Sombre',it:'Scuro',pl:'Ciemny',pt:'Escuro',ru:'Тёмная',uk:'Темна'},
    'Example password':{de:'Beispielpasswort',es:'Contraseña de ejemplo',fr:'Mot de passe fictif',it:'Password di esempio',pl:'Przykładowe hasło',pt:'Palavra-passe de exemplo',ru:'Пример пароля',uk:'Приклад пароля'},
    'Delete character':{de:'Zeichen löschen',es:'Borrar carácter',fr:'Effacer un caractère',it:'Elimina carattere',pl:'Usuń znak',pt:'Apagar caráter',ru:'Удалить символ',uk:'Видалити символ'},
    'Clear':{de:'Löschen',es:'Borrar',fr:'Effacer',it:'Cancella',pl:'Wyczyść',pt:'Limpar',ru:'Очистить',uk:'Очистити'},
    'Enter a number':{de:'Nummer eingeben',es:'Introduce un número',fr:'Saisissez un numéro',it:'Inserisci un numero',pl:'Wpisz numer',pt:'Introduza um número',ru:'Введите номер',uk:'Введіть номер'},
    'Enter a transfer number':{de:'Zielnummer eingeben',es:'Introduce el número de destino',fr:'Saisissez le numéro de destination',it:'Inserisci il numero di destinazione',pl:'Wpisz numer docelowy',pt:'Introduza o número de destino',ru:'Введите номер для перевода',uk:'Введіть номер для переведення'},
    'Name and number are required':{de:'Name und Nummer sind erforderlich',es:'Se requieren nombre y número',fr:'Le nom et le numéro sont requis',it:'Nome e numero sono obbligatori',pl:'Imię i numer są wymagane',pt:'Nome e número são obrigatórios',ru:'Нужны имя и номер',uk:'Потрібні ім’я та номер'}
  };
  function normalizedLocale(value){const code=String(value||'en').toLowerCase().split(/[-_]/)[0];return localeCodes.includes(code)?code:'en';}
  function translate(value,locale='en'){
    const code=normalizedLocale(locale),key=aliases[value]||value,row=window.AltSIPDemoLocales?.[key];
    if(value==='Light theme'||value==='Dark theme')return code==='en'?value.slice(0,-6):extra[value][code]||value;
    if(code==='en')return row?.en||value;
    if(value.startsWith('AltSIP · Version '))return `AltSIP · ${translate('Version',code)} ${value.slice(17)}`;
    return row?.[code]||extra[value]?.[code]||value;
  }
  const paths = {
    user:'<circle cx="12" cy="5" r="3"/><path d="M4 21v-2a8 8 0 0 1 16 0v2z"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M10 2h4l.5 2.2 1.7.8 2-.9 2.7 2.7-.9 2  .8 1.7L23 11v3l-2.2.5-.8 1.7.9 2-2.7 2.7-2-.9-1.7.8L14 23h-4l-.5-2.2-1.7-.8-2 .9-2.7-2.7.9-2-.8-1.7L1 14v-3l2.2-.5.8-1.7-.9-2 2.7-2.7 2 .9 1.7-.8z"/>',
    compact:'<rect x="3" y="5" width="18" height="14" rx="2"/><rect x="14" y="10" width="4" height="5" rx=".5"/>',
    phone:'<path d="M6 2.8 9.3 7l-1.6 2c1.5 3 4 5.5 7 7l2-1.6L21 18c-.5 2.7-2 4-4.3 3.3C10.5 19.7 4.3 13.5 2.7 7.3 2 5 3.3 3.3 6 2.8Z"/>',
    people:'<circle cx="8.5" cy="7" r="2.4"/><path d="M2.5 19v-1.2a6 6 0 0 1 12 0V19z"/><circle cx="18" cy="8" r="2"/><path d="M17 14a5 5 0 0 1 4.5 5"/>',
    addperson:'<circle cx="8" cy="7" r="2.5"/><path d="M2.5 19v-1a5.5 5.5 0 0 1 11 0v1M19 9v8m-4-4h8"/>',
    grid:'<path d="M5 4v1m7-1v1m7-1v1M5 11v1m7-1v1m7-1v1M5 18v1m7-1v1m7-1v1" stroke-width="3" stroke-linecap="round"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 3"/>',
    chevron:'<path d="m9 5 7 7-7 7"/>', down:'<path d="m5 9 7 7 7-7"/>', left:'<path d="m15 5-7 7 7 7"/>',
    close:'<path d="M5 5 19 19M19 5 5 19"/>',
    redial:'<path d="M7 9H3V5M3 9a9 9 0 1 1 0 6"/>',hold:'<path d="M8 4v16M16 4v16" stroke-width="3"/>',transfer:'<path d="M3 7h16m0 0-4-4m4 4-4 4M21 17H5m0 0 4-4m-4 4 4 4"/>',
    erase:'<path d="M9 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9L2 12zM12 9l6 6m0-6-6 6"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    more:'<circle cx="12" cy="5" r=".8"/><circle cx="12" cy="12" r=".8"/><circle cx="12" cy="19" r=".8"/>',
    moon:'<path d="M16.5 2.5a9.5 9.5 0 1 0 5 14.9A8.3 8.3 0 0 1 16.5 2.5Z"/>',
    auto:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>',
    record:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/>',
    recordStop:'<circle cx="12" cy="12" r="8"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" stroke="none"/>',
    up:'<path d="m6 15 6-6 6 6"/>',
    volume:'<path d="M3 9h4l4-4v14l-4-4H3zM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
    volumeOff:'<path d="M3 9h4l4-4v14l-4-4H3zM15 9l6 6m0-6-6 6"/>',
    mic:'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>',
    mute:'<path d="M4 4 20 20M9 8v4a3 3 0 0 0 5 2.2M15 10V5a3 3 0 0 0-5.7-1.3M5 10v2a7 7 0 0 0 12 5M12 19v3m-4 0h8"/>',
    filter:'<path d="M3 5h18l-7 8v5l-4 2v-7z"/>',
    star:'<path d="m12 2 3 6.2 6.8 1-4.9 4.8 1.1 6.8-6-3.2-6 3.2 1.1-6.8L2.2 9.2l6.8-1z"/>',
    check:'<path d="m4 12 5 5L20 6"/>', plus:'<path d="M12 4v16M4 12h16"/>',
    trash:'<path d="M4 7h16M9 4h6m-9 3 1 14h10l1-14M10 10v8m4-8v8"/>',
    copy:'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M5 16H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1"/>',
    play:'<path d="m9 6 10 6-10 6Z" fill="currentColor" stroke="none"/>',
    stop:'<rect x="8" y="8" width="8" height="8" rx="1" fill="currentColor" stroke="none"/>',
    folder:'<path d="M3 6h7l2 3h9v11H3Z"/>',
    eye:'<path d="M2 12c5-9 15-9 20 0-5 9-15 9-20 0Z"/><circle cx="12" cy="12" r="3"/>',
    eyeOff:'<path d="M2 12c5-9 15-9 20 0-5 9-15 9-20 0Z"/><circle cx="12" cy="12" r="3"/><path d="M3 3 21 21"/>'
  };
  const icon = (name, size='') => `<svg class="sd-icon ${size}" viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
  const esc = value => String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const contactsSeed = [
    {name:'Ada Lovelace',number:'720459',note:'Support desk',favorite:true},
    {name:'Ben Carter',number:'720460',note:'',favorite:false},
    {name:'Chris Park',number:'720461',note:'',favorite:false},
    {name:'Dana Ortiz',number:'720462',note:'',favorite:false}
  ];
  const historySeed = [
    {number:'12025550142',date:'21.09 17:13',start:'19.10.2026 17:13:20',end:'19.10.2026 17:14:54',duration:'01:34',status:'Completed',direction:'Outgoing call',outcome:'completed',incoming:false,code:'200',sip:'OK'},
    {number:'720460',date:'21.09 17:10',start:'19.10.2026 17:10:04',end:'19.10.2026 17:10:04',duration:'00:00',status:'Busy Here',direction:'Outgoing call',outcome:'failed',incoming:false,code:'486',sip:'Busy Here'},
    {number:'720461',date:'21.09 17:06',start:'19.10.2026 17:06:01',end:'19.10.2026 17:06:28',duration:'00:27',status:'Completed',direction:'Incoming call',outcome:'completed',incoming:true,code:'200',sip:'OK'}
  ];
  const groups = ['Sound and devices','Codecs','Call recording','Calls','Noise suppression','Number processing','Notifications','Appearance'];
  const scopedActions={
    compact:new Set(),
    quality:new Set(),
    details:new Set(['copy-history']),
    codecs:new Set(['pref','codec-toggle','codec-up','codec-down']),
    number:new Set(['pref']),
    conference:new Set(['toggle-conf','toggle-rec','hangup','hold','line-1','line-2']),
    account:new Set(['account-choice','password-eye']),
    advanced:new Set(['account-choice','account-toggle','password-eye','codec-toggle','codec-up','codec-down']),
    accounts:new Set(['account-select']),
    devices:new Set(['device-input','device-output','select-device','refresh-devices']),
    noise:new Set(['pref','segment']),
    echo:new Set(['pref']),
    record:new Set(['pref','choice']),
    notifications:new Set(['pref','windows-notifications']),
    calls:new Set(['pref']),
    transfer:new Set(['transfer-mode','transfer-apply','transfer-complete','transfer-cancel']),
    consultation:new Set(['transfer','transfer-mode','transfer-apply','transfer-complete','transfer-cancel']),
    history:new Set(['history-filter','history-filter-select','filter-all','history-export']),
    contacts:new Set(['favorites']),
    appearance:new Set(['segment','language'])
  };
  const scopedSettingSections={devices:'Sound and devices',codecs:'Codecs',noise:'Noise suppression',echo:'Sound and devices',record:'Call recording',number:'Number processing',notifications:'Notifications',calls:'Calls',appearance:'Appearance'};
  function mount(root, options={}) {
    if (!root) throw new TypeError('AltSIPDemo.mount needs an element');
    if (root.__altSipDemo) return root.__altSipDemo;
    let scope=Object.hasOwn(scopedActions,options.interactionScope)?options.interactionScope:'full';
    const s = {tab:'dial',pane:null,accountsOpen:false,detail:null,compactLayout:!!options.compactLayout,compactMode:false,rail:true,
      number:'',recent:false,account:0,accountMenu:false,settings:null,theme:'light',
      dnd:false,aa:false,recAutomatic:false,recActive:false,conf:false,callActive:false,held:false,callSeconds:94,line:1,quality:'good',speaker:72,microphone:92,speakerMuted:false,microphoneMuted:false,
      codecAuto:true,codecs:['Opus','G.722','G.711 μ-law','G.711 A-law'],disabledCodecs:[],
      noise:true,noiseMode:'light',echo:false,recordingMode:'Mix',stripSpaces:true,stripPlus:false,
      notifications:true,notificationSound:true,silent:false,keySounds:true,locale:normalizedLocale(options.locale),language:localeNames[normalizedLocale(options.locale)],inputDevice:'System default',outputDevice:'System default',deviceMenu:null,
      contacts:contactsSeed.map(x=>({...x})),history:historySeed.map(x=>({...x})),favorites:false,historyFilter:'All calls',historyFilterOpen:false,
      contactDraft:null,accounts:[{name:'Studio',fixture:true,address:'720459',username:'720459',server:'sip.example.invalid',domain:'example.invalid',authLogin:'studio-auth',displayName:'Studio desk',interval:'600',voicemail:'*97',proxy:'proxy.example.invalid',dtmf:'RTP',srtp:'Optional',stun:'stun.example.invalid'},{name:'Office',fixture:true,address:'720460',username:'720460',server:'sip.example.invalid',domain:'example.invalid'},{name:'Personal',fixture:true,address:'720461',username:'720461',server:'sip.example.invalid',domain:'example.invalid'}],accountDraft:null,accountAdvanced:false,accountPasswordVisible:false,draggedAccount:null,draggedCodec:null,recordingFolder:'C:\\Calls',recordingPlaying:null,recordingQuery:'',recordings:[{side:'a',file:'A_720459.wav',meta:'18.10 15:37 · 00:21'},{side:'b',file:'B_720459.wav',meta:'18.10 15:37 · 00:21'}]};
    if(Array.isArray(options.accountNumbers))s.accounts.forEach((account,i)=>{const number=options.accountNumbers[i];if(typeof number==='string'&&/^[0-9]{8,15}$/.test(number)){account.address=number;account.username=number;}});
    if(Array.isArray(options.accountNames))s.accounts.forEach((account,i)=>{if(typeof options.accountNames[i]==='string'&&options.accountNames[i].trim())account.name=options.accountNames[i].trim().slice(0,48);});
    let presentationPaused=false,presentationIncoming=false,presentationRinging=false,presentationScroll=null;
    const ringingLabel=()=>({ru:'Вызов…',uk:'Виклик…',en:'Calling…',de:'Verbindungsaufbau…',fr:'Appel…',es:'Llamando…',it:'Chiamata…',pl:'Łączenie…',pt:'A ligar…'})[s.locale]||'Calling…';
    function stopPresentationScroll(){presentationScroll?.cancel();presentationScroll=null;}
    function scrollPresentationList(duration){
      stopPresentationScroll();const list=$('.sd-list-items');if(!list||window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return;
      const flow=document.createElement('div');flow.className='sd-presentation-flow';while(list.firstChild)flow.append(list.firstChild);list.append(flow);list.classList.add('sd-film-list');
      const distance=Math.max(0,flow.scrollHeight-list.clientHeight);if(distance<1)return;
      presentationScroll=flow.animate([{transform:'translateY(0)'},{transform:`translateY(${-distance}px)`}],{duration:Math.max(1000,+duration||3600),easing:'linear',fill:'forwards'});
      if(presentationPaused)presentationScroll.pause();
    }
    function showPresentationHistory(){
      stopPresentationScroll();s.history=[...s.history.filter(x=>x.tourFixture),...window.AltSIPFixtures.people.map(([name,number],i)=>({number:number.replace(/[^0-9]/g,''),date:`19.10 10:${String(42-i).padStart(2,'0')}`,start:`19.10.2026 10:${String(42-i).padStart(2,'0')}:00`,end:`19.10.2026 10:${String(43-i).padStart(2,'0')}:24`,duration:'01:24',status:'Completed',direction:i%3?'Outgoing call':'Incoming call',outcome:'completed',incoming:i%3===0,code:'200',sip:'OK',tourFixture:true}))];
      s.compactMode=false;s.tab='history';s.pane=null;s.accountsOpen=false;s.historyFilter='All calls';s.historyFilterOpen=false;render();
    }
    function showPresentationContacts(){stopPresentationScroll();s.contacts=window.AltSIPFixtures.people.map(([name,number],i)=>({name,number:number.replace(/[^0-9]/g,''),note:window.AltSIPFixtures.note[s.locale]||window.AltSIPFixtures.note.en,favorite:i%4===0,presentationFixture:true}));s.compactMode=false;s.tab='contacts';s.pane=null;s.accountsOpen=false;render();}
    function presentationPane(kind){s.pane=kind;if(kind==='history')s.detail=0;else s.contactDraft={...s.contacts[2],index:2};renderPane();}

    let toastTimer,callTimer=null,requestedActive=true,visible=true,consultationPhase='active';
    function getConsultationState(){return {phase:consultationPhase,original:'12025550142',destination:s.transferNumber||'12025550143',originalHeld:!!s.held,consultationStatus:consultationPhase==='consulting'?'connecting':consultationPhase==='connected'?'active':null};}
    function consultationChanged(phase){consultationPhase=phase;root.dispatchEvent(new CustomEvent('sip-demo-consultation-state',{bubbles:true,detail:getConsultationState()}));}
    const accountCodecOptions=['G.711 A-law','G.711 μ-law','Opus','G.722'];
    const defaultAccountCodecs=()=>accountCodecOptions.slice(0,3);
    function codecModel(kind){
      if(kind==='account'){
        const active=s.accountDraft?.codecs||defaultAccountCodecs();
        return {order:[...active,...accountCodecOptions.filter(x=>!active.includes(x))],disabled:accountCodecOptions.filter(x=>!active.includes(x)),active};
      }
      return {order:s.codecs,disabled:s.disabledCodecs,active:s.codecs.filter(x=>!s.disabledCodecs.includes(x))};
    }
    function codecRows(kind){const model=codecModel(kind);return `<div class="sd-codecs" data-codec-scope="${kind}">${model.order.map((codec,i)=>`<div class="sd-codec" draggable="false" data-codec-index="${i}"><span class="sd-grip" aria-hidden="true">⋮⋮</span><button data-action="codec-toggle" data-codec="${esc(codec)}" aria-pressed="${!model.disabled.includes(codec)}">${model.disabled.includes(codec)?'○':icon('check')} ${esc(codec)}</button><button data-action="codec-up" data-index="${i}" aria-label="Move ${esc(codec)} up" ${i===0||model.disabled.includes(codec)?'disabled':''}>${icon('up')}</button><button data-action="codec-down" data-index="${i}" aria-label="Move ${esc(codec)} down" ${i>=model.active.length-1?'disabled':''}>${icon('down')}</button></div>`).join('')}</div>`;}
    function syncCallTimer(){
      const run=requestedActive&&!presentationPaused&&!presentationRinging&&visible&&document.visibilityState!=='hidden'&&s.callActive;
      if(!run){if(callTimer!==null){clearInterval(callTimer);callTimer=null;}return;}
      if(callTimer!==null)return;
      callTimer=setInterval(()=>{s.callSeconds++;const timer=$('.sd-call-timer');if(timer)timer.textContent=`${String(Math.floor(s.callSeconds/60)).padStart(2,'0')}:${String(s.callSeconds%60).padStart(2,'0')}`;},1000);
    }
    const $ = sel=>root.querySelector(sel);
    const $$ = sel=>[...root.querySelectorAll(sel)];
    const visibilityObserver=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;syncCallTimer();}):null;
    visibilityObserver?.observe(root);
    const onVisibilityChange=()=>syncCallTimer();
    document.addEventListener('visibilitychange',onVisibilityChange);
    root.classList.add('sip-demo');
    root.dataset.interactionScope=scope;
    root.setAttribute('aria-label','AltSIP interface');
    root.innerHTML = `<div class="sd-window"><div class="sd-core"><div class="sd-main"><div class="sd-topbar"><button data-action="accounts" aria-label="Accounts">${icon('user')}</button><div class="sd-top-right"><button data-action="compact" aria-label="Toggle compact mode">${icon('compact')}</button><button data-action="settings" aria-label="Settings">${icon('settings')}</button></div></div><div class="sd-content"></div><nav class="sd-nav" role="tablist" aria-label="Main navigation"><button role="tab" data-action="tab-dial" aria-label="Dial pad">${icon('grid')}</button><button role="tab" data-action="tab-history" aria-label="Call history">${icon('clock')}</button><button role="tab" data-action="tab-contacts" aria-label="Contacts">${icon('people')}</button></nav></div><div class="sd-rail"><div class="sd-rail-buttons"></div><div class="sd-levels"></div><div class="sd-rail-account"></div></div></div><div class="sd-rail-toggle"><button data-action="rail" aria-label="Collapse controls">${icon('left')}</button></div><div class="sd-account-dim" data-action="close-accounts"></div><div class="sd-account-pane"></div><div class="sd-right-pane"></div><div class="sd-toast" role="status" aria-live="polite"></div></div>`;
    function dimensions(){const accountEditor=s.pane==='account-edit';const base=s.compactMode?280:(accountEditor?300:(s.rail?380:300));const right=!!s.pane;const paneWidth=accountEditor?384:304;return {base,right,paneWidth};}
    function dims() { const {base,right,paneWidth}=dimensions();return {width:s.compactLayout?(s.compactMode&&!right?280:380):base+(right?paneWidth:0),height:s.compactMode?(right?360:252):560}; }
    let lastResizeKey='';
    function resize(){const d=dims(),g=dimensions();$('.sd-rail-toggle button').setAttribute('aria-label',s.rail?'Collapse controls':'Expand controls');root.style.setProperty('--sd-width',d.width+'px');root.style.setProperty('--sd-height',d.height+'px');root.style.setProperty('--sd-base',g.base+'px');root.style.setProperty('--sd-pane-width',g.paneWidth+'px');root.classList.toggle('sd-compact',s.compactMode);root.classList.toggle('sd-conference',s.conf);root.classList.toggle('sd-call-active',s.callActive);root.classList.toggle('sd-rail-off',!s.rail&&!s.compactMode);root.classList.toggle('sd-account-editor-open',s.pane==='account-edit');root.classList.toggle('sd-mobile-pane',s.compactLayout);root.classList.toggle('sd-accounts-open',s.accountsOpen);root.classList.toggle('sd-right-open',g.right);root.classList.toggle('sd-dark',s.theme==='dark');$('.sd-core').inert=s.accountsOpen||!!(s.compactLayout&&s.pane);$('.sd-account-pane').inert=!s.accountsOpen;$('.sd-right-pane').inert=!g.right;$('.sd-account-pane').setAttribute('aria-hidden',String(!s.accountsOpen));$('.sd-right-pane').setAttribute('aria-hidden',String(!g.right));const key=JSON.stringify([d,g,s.pane,s.accountsOpen,s.compactLayout,s.rail,s.compactMode]);if(key!==lastResizeKey){lastResizeKey=key;root.dispatchEvent(new CustomEvent('sip-demo-resize',{bubbles:true,detail:{...d,panel:s.pane,accountsOpen:s.accountsOpen,compactLayout:s.compactLayout,paneWidth:g.paneWidth,baseWidth:g.base}}));}}
    function toast(message){
      if(!/^(Enter |Name and number are required|SIP username|SIP server|SIP domain|Enter the password for this connection.|Copy unavailable)/.test(message))return;
      const node=$('.sd-toast');node.textContent=translate(message,s.locale);node.classList.add('sd-show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('sd-show'),2600);
    }
    function localizeDom(){
      root.lang=s.locale;
      // Persistent chrome keeps its nodes across locale changes. Restore source
      // labels before translating instead of translating an already localized label.
      for(const [action,label] of Object.entries({accounts:'Accounts',compact:'Toggle compact mode',settings:'Settings','tab-dial':'Dial pad','tab-history':'Call history','tab-contacts':'Contacts'})){
        const node=root.querySelector('[data-action="'+action+'"]');
        if(node)node.setAttribute('aria-label',label);
      }

      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
      while(walker.nextNode()){
        const node=walker.currentNode,raw=node.nodeValue,trimmed=raw.trim();
        if(!trimmed||node.parentElement?.closest('svg'))continue;
        const translated=translate(trimmed,s.locale);
        if(translated!==trimmed)node.nodeValue=raw.replace(trimmed,translated);
      }
      root.querySelectorAll('[aria-label],[placeholder],[title]').forEach(node=>{
        for(const name of ['aria-label','placeholder','title']){
          const value=node.getAttribute(name);if(value){const translated=translate(value,s.locale);if(translated!==value)node.setAttribute(name,translated);}
        }
      });
    }
    function dial(){const keys=[['1',''],['2','A B C'],['3','D E F'],['4','G H I'],['5','J K L'],['6','M N O'],['7','P Q R S'],['8','T U V'],['9','W X Y Z'],['*',''],['0','+'],['#','']];return `<div class="sd-dial">${s.callActive?`<div class="sd-call-meta">${presentationRinging?'':`<span class="sd-quality sd-quality-${s.quality}" title="${s.quality} network quality"></span>`}<span class="sd-call-timer">${presentationRinging?ringingLabel():`${String(Math.floor(s.callSeconds/60)).padStart(2,'0')}:${String(s.callSeconds%60).padStart(2,'0')}`}</span></div>${s.conf?`<div class="sd-call-lines"><button data-action="line-1" class="${s.line===1?'sd-current':''}">1</button><button data-action="line-2" class="${s.line===2?'sd-current':''}">2</button></div>`:''}`:''}<div class="sd-number-wrap"><input class="sd-number" aria-label="Number to dial" type="tel" maxlength="32" autocomplete="off" value="${esc(s.number)}"><button data-action="${s.number?'erase':'recent'}" aria-label="${s.number?'Delete character':'Recent numbers'}" aria-expanded="${s.recent}">${icon(s.number?'erase':'down')}</button>${s.recent?`<div class="sd-recent">${s.history.map(x=>x.number).filter((x,i,a)=>a.indexOf(x)===i).map(x=>`<button data-action="recent-use" data-number="${esc(x)}">${esc(x)}</button>`).join('')}</div>`:''}</div><div class="sd-keypad">${keys.map(([n,l])=>`<button class="sd-key" data-action="digit" data-digit="${n}" aria-label="${n}${l?' '+l:''}"><span>${n}</span><small>${l}</small></button>`).join('')}</div><div class="sd-call-row">${s.callActive?`<button class="sd-circle" data-action="hold" aria-label="${s.held?'Resume':'Hold'} call">${icon('hold')}</button><button class="sd-call sd-hangup" data-action="hangup">${icon('phone')}<span>End call</span></button><button class="sd-circle" data-action="transfer" aria-label="Transfer call">${icon('transfer')}</button>`:`<button class="sd-circle" data-action="redial" aria-label="Redial last number">${icon('redial')}</button><button class="sd-call" data-action="call">${icon('phone')}<span>Call</span></button><button class="sd-circle" data-action="new-contact" aria-label="Add contact">${icon('addperson')}</button>`}</div></div>`;}
    function history(){const filters={'All calls':x=>true,'Missed':x=>x.outcome==='missed','Incoming':x=>x.incoming,'Outgoing':x=>!x.incoming,'Accepted':x=>x.outcome==='completed'||x.duration!=='00:00','Declined':x=>x.outcome==='declined','Failed':x=>x.outcome==='failed'};const list=s.history.filter(filters[s.historyFilter]);return `<div class="sd-list"><div class="sd-list-heading">Call history</div><div class="sd-search-row"><input data-search="history" type="search" placeholder="Search history" aria-label="Search history"><button class="sd-circle" data-action="history-filter" aria-label="Filter history" aria-expanded="${s.historyFilterOpen}">${icon('filter')}</button></div>${s.historyFilterOpen?`<div class="sd-history-menu">${Object.keys(filters).map(label=>`<button data-action="history-filter-select" data-value="${label}" aria-pressed="${s.historyFilter===label}">${label}<span>${s.historyFilter===label?icon('check'):'○'}</span></button>`).join('')}<button data-action="history-export">Export history CSV</button></div>`:''}${s.historyFilter!=='All calls'?`<div class="sd-filter-note">${s.historyFilter} <button data-action="filter-all">Clear</button></div>`:''}<div class="sd-list-items">${list.map(x=>`<div class="sd-list-card"><span class="sd-history-glyph ${x.status!=='Completed'?'sd-error':''}">${icon('phone')}</span><button class="sd-list-text" data-action="use-history" data-index="${s.history.indexOf(x)}"><strong>${esc(x.number)}</strong><small>${esc(x.date)} · ${esc(x.duration)}</small><small>${esc(x.status)}</small></button><button class="sd-more" data-action="history-detail" data-index="${s.history.indexOf(x)}" aria-label="Details for ${esc(x.number)}">${icon('more')}</button></div>`).join('')}</div></div>`;}
    function contacts(){const list=s.contacts.filter(x=>!s.favorites||x.favorite);return `<div class="sd-list"><div class="sd-list-heading">Contacts <button class="sd-circle" data-action="new-contact" aria-label="Add contact">${icon('addperson')}</button></div><div class="sd-search-row"><input data-search="contacts" type="search" placeholder="Search contacts" aria-label="Search contacts"><button class="sd-circle ${s.favorites?'sd-active':''}" data-action="favorites" aria-label="Favorites only" aria-pressed="${s.favorites}">${icon('star')}</button></div><div class="sd-list-items">${list.map(x=>`<div class="sd-list-card"><button class="sd-list-text" data-action="use-contact" data-index="${s.contacts.indexOf(x)}"><strong>${esc(x.name)}</strong><small>${esc(x.number)}</small></button><button class="sd-more" data-action="contact-detail" data-index="${s.contacts.indexOf(x)}" aria-label="Edit ${esc(x.name)}">${icon('more')}</button></div>`).join('')}</div></div>`;}
    let renderedMainTab;
    function renderMain(){const tabChanged=renderedMainTab!==undefined&&renderedMainTab!==s.tab;renderedMainTab=s.tab; root.classList.toggle('sd-list-mode',s.tab!=='dial');const compact=$('[data-action="compact"]');compact.hidden=s.tab!=='dial';compact.tabIndex=s.tab==='dial'?0:-1;$('.sd-content').innerHTML=s.tab==='dial'?dial():s.tab==='history'?history():contacts();$$('.sd-nav button').forEach(b=>{const on=b.dataset.action==='tab-'+s.tab;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;});localizeDom();applyScope();if(tabChanged&&!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)$('.sd-content').animate([{transform:'translateY(5px)'},{transform:'translateY(0)'}],{duration:220,easing:'cubic-bezier(.2,.72,.15,1)'});}
    function renderRail(){const controls=[['dnd','moon','DND',s.dnd],['aa','phone','AA',s.aa],['conf','people','CONF',s.conf],['rec',s.recActive?'recordStop':'record',s.recAutomatic?'AUTO':'REC',s.recActive]];const buttonsTemplate=document.createElement('div');buttonsTemplate.className='sd-rail-buttons';buttonsTemplate.innerHTML=controls.map(([key,ico,label,active])=>`<button class="sd-rail-button ${active?'sd-active':''}" data-action="toggle-${key}" aria-label="${key==='rec'?'Record call':label==='AA'?'Auto answer':label==='CONF'?'Conference':'Do not disturb'}" aria-pressed="${active}">${icon(ico)}<small>${label}</small></button>`).join('');patchNode($('.sd-rail-buttons'),buttonsTemplate);const levelsTemplate=document.createElement('div');levelsTemplate.className='sd-levels';levelsTemplate.innerHTML=['speaker','microphone'].map(k=>`<div class="sd-level"><input data-level="${k}" aria-label="${k} level" type="range" min="0" max="${k==='speaker'?100:200}" value="${s[k]}"><button data-action="mute-${k}" aria-label="${s[k+'Muted']?'Unmute':'Mute'} ${k}" aria-pressed="${s[k+'Muted']}">${icon(s[k+'Muted']?(k==='speaker'?'volumeOff':'mute'):k==='speaker'?'volume':'mic')}</button></div>`).join('');patchNode($('.sd-levels'),levelsTemplate);$$('[data-level]').forEach(input=>input.style.setProperty('--sd-progress',`${Math.round(s[input.dataset.level]/+input.max*100)}%`));$('.sd-rail-account').textContent=s.accounts[s.account]?.address||'';localizeDom();applyScope();}
    function accountPane(){return `<div class="sd-drawer-head">Accounts<button data-action="close-accounts" aria-label="Close accounts">${icon('close')}</button></div><button class="sd-surface-button sd-add-account" data-action="account-new">${icon('plus')} Account</button><div class="sd-account-list">${s.accounts.map((x,i)=>`<div class="sd-account-card ${i===s.account?'sd-selected':''}" draggable="false" data-account-index="${i}"><button data-action="account-select" data-index="${i}" class="sd-account-identity"><strong>${esc(x.name)}</strong><small>${esc(x.address)}</small></button><span class="sd-account-grip" aria-hidden="true">⋮⋮</span><button data-action="account-menu" data-index="${i}" aria-label="Account options">${icon('more')}</button></div>`).join('')}</div>${s.accountMenu?`<div class="sd-account-menu"><button data-action="account-edit">Edit account</button><button data-action="account-copy">Copy address</button><button data-action="account-up">Move up</button><button data-action="account-down">Move down</button></div>`:''}`;}
    function settings(){return `<div class="sd-pane-title">Settings</div><div class="sd-settings-scroll">${groups.map((name,i)=>`<section class="sd-setting-section ${i===4||i===6?'sd-section-gap':''}"><button class="sd-section-head ${s.settings===name?'sd-open':''}" data-action="section" data-name="${name}" aria-expanded="${s.settings===name}"><span>${name}</span>${icon(s.settings===name?'down':'chevron')}</button>${s.settings===name?`<div class="sd-section-body">${settingsBody(name)}</div>`:''}</section>`).join('')}<div class="sd-version">AltSIP · Version 0.1.66</div></div>`;}
    function checkRow(label,key,help=''){return `<button class="sd-check-row" data-action="pref" data-key="${key}" aria-pressed="${!!s[key]}"><span class="sd-checkmark">${s[key]?icon('check'):'○'}</span><span>${label}</span>${help?`<small title="${esc(help)}">?</small>`:''}</button>`;}
    function choiceRow(label,value,key){return `<button class="sd-check-row" data-action="choice" data-key="${key}" data-value="${value}" aria-pressed="${s[key]===value}"><span class="sd-checkmark">${s[key]===value?icon('check'):'○'}</span><span>${label}</span><small>?</small></button>`;}
    function segment(key,values){return `<div class="sd-segment" role="group">${values.map(([value,label])=>`<button data-action="segment" data-key="${key}" data-value="${value}" aria-pressed="${s[key]===value}">${label}</button>`).join('')}</div>`;}
    function settingsBody(name){switch(name){
      case 'Sound and devices':return `<label class="sd-field-label">Microphone</label><button class="sd-select" data-action="device-input" aria-expanded="${s.deviceMenu==='input'}">${esc(s.inputDevice)} ${icon('down')}</button>${s.deviceMenu==='input'?`<div class="sd-device-list">${['System default','Desk headset microphone','USB microphone'].map(x=>`<button data-action="select-device" data-kind="input" data-value="${x}">${x}</button>`).join('')}</div>`:''}<label class="sd-field-label">Speaker</label><button class="sd-select" data-action="device-output" aria-expanded="${s.deviceMenu==='output'}">${esc(s.outputDevice)} ${icon('down')}</button>${s.deviceMenu==='output'?`<div class="sd-device-list">${['System default','Desk headset speaker','Monitor speakers'].map(x=>`<button data-action="select-device" data-kind="output" data-value="${x}">${x}</button>`).join('')}</div>`:''}<button class="sd-surface-button" data-action="refresh-devices">Refresh devices</button>${checkRow('Keypad and hangup sounds','keySounds')}${checkRow('Echo cancellation','echo','Reduces speaker echo picked up by your microphone. Useful for speakerphone calls.')}`;
      case 'Codecs':return `${checkRow('Automatic','codecAuto','AltSIP negotiates codecs automatically. Turn this off to change priority.')}${!s.codecAuto?codecRows('global'):''}`;
      case 'Call recording':return `${checkRow('Automatically record calls','recAutomatic')}<label class="sd-field-label">Recording mode</label>${['Mix','A/B','Mix + A/B'].map(v=>choiceRow(v,v,'recordingMode')).join('')}<div class="sd-path">${esc(s.recordingFolder)}</div><div class="sd-button-pair"><button class="sd-surface-button" data-action="choose-folder">Choose folder</button><button class="sd-surface-button" data-action="open-folder">Open folder</button></div><button class="sd-surface-button sd-wide" data-action="recordings">Recordings list</button>`;
      case 'Calls':return `${checkRow('Do not disturb','dnd','Incoming calls will be declined.')}${checkRow('Auto answer','aa','Answers after 2 s and enables the microphone.')}`;
      case 'Noise suppression':return `${checkRow('Noise suppression','noise','Reduces microphone background noise during calls; you can switch it during a call.')}${segment('noiseMode',[['light','Light'],['high','Strong']])}`;
      case 'Number processing':return `${checkRow('Remove spaces from dial string','stripSpaces')}${checkRow('Remove leading +','stripPlus')}`;
      case 'Notifications':return `${checkRow('Notifications','notifications')}${s.notifications?`${checkRow('AltSIP notification sound','notificationSound')}${checkRow('Silent notifications','silent')}`:''}<button class="sd-surface-button" data-action="windows-notifications">Open Windows notification settings</button>`;
      case 'Appearance':return `<label class="sd-field-label">Language</label><div class="sd-language">${['Deutsch','English','Español','Français','Italiano','Polski','Português','Русский','Українська'].map(v=>`<button data-action="language" data-value="${v}" aria-pressed="${s.language===v}">${v}</button>`).join('')}</div>`;
    }}
    function detailPane(){if(s.pane==='settings')return settings();if(s.pane==='history'){const x=s.history[s.detail];return `<div class="sd-pane-title">Call details</div><div class="sd-detail"><div class="sd-detail-number"><h3>${esc(x.number)}</h3><button class="sd-circle" data-action="copy-history" aria-label="Copy time and number" title="Copy time and number">${icon('copy')}</button></div><p class="${x.status==='Completed'?'sd-ok':'sd-bad'}">${esc(x.status)}</p>${[['Start',x.start],['End',x.end],['Talk duration',x.duration],['Direction',x.direction],['End code',x.code],['SIP description',x.sip],['Ended by','Unknown'],['DTMF','123#']].map(([l,v])=>`<div><small>${l}</small><span>${esc(v)}</span></div>`).join('')}</div>`;}if(s.pane==='contact'){const d=s.contactDraft;return `<div class="sd-pane-title">${d.index===null?'New contact':'Edit contact'}</div><div class="sd-contact-form"><label>Name<input data-contact="name" value="${esc(d.name)}"></label><label>Number<input data-contact="number" value="${esc(d.number)}"></label><label>Note<textarea data-contact="note">${esc(d.note)}</textarea></label><button class="sd-check-row" data-action="contact-favorite" aria-pressed="${d.favorite}"><span class="sd-checkmark">${d.favorite?icon('check'):'○'}</span>Favorite contacts</button><div class="sd-form-actions"><button class="sd-save" data-action="contact-save">Save</button>${d.index!==null?`<button class="sd-circle" data-action="contact-delete" aria-label="Delete contact">${icon('trash')}</button>`:''}</div></div>`;}return '';}
    function accountEditor(){const d=s.accountDraft;const input=(label,key,required=false,type='text')=>`<label class="sd-account-field"><span>${label}${required?' <b>*</b>':''}</span><input data-account="${key}" type="${type}" value="${esc(d[key]||'')}" ${required?'required':''}></label>`;const toggle=(label,key)=>`<button class="sd-check-row" data-action="account-toggle" data-key="${key}" aria-pressed="${!!d[key]}"><span class="sd-checkmark">${d[key]?icon('check'):'○'}</span>${label}</button>`;const pick=(label,key,opts)=>`<label class="sd-field-label">${label}</label><div class="sd-segment">${opts.map(v=>`<button data-action="account-choice" data-key="${key}" data-value="${v}" aria-pressed="${d[key]===v}">${v}</button>`).join('')}</div>`;return `<div class="sd-pane-title" >${s.guideAdvancedOnly?'Advanced settings':d.index===null?'New SIP account':'Edit SIP account'}</div><div class="sd-account-form"><div class="sd-account-basic">${input('Account name','name')}${input('SIP username','username',true)}${input('SIP server','server',true)}${input('SIP domain','domain',true)}${input('Authorization login','authLogin')}<label class="sd-account-field"><span>Password <b>*</b></span><input data-account="password" type="${s.accountPasswordVisible?'text':'password'}" value="${esc(d.password)}" required><button data-action="password-eye" aria-label="${s.accountPasswordVisible?'Hide':'Show'} password">${icon(s.accountPasswordVisible?'eyeOff':'eye')}</button></label>${pick('Transport','transport',['UDP','TCP','TLS','UDP + TCP'])}</div><button class="sd-advanced-head" data-action="account-advanced" aria-expanded="${s.accountAdvanced}">Advanced settings ${icon(s.accountAdvanced?'down':'chevron')}</button>${s.accountAdvanced?`${input('Display name','displayName')}${input('Registration interval','interval')}${input('Voicemail','voicemail')}${input('SIP proxy','proxy')}${pick('DTMF transmission','dtmf',['AUTO','RTP','SIP INFO'])}${pick('Media encryption','srtp',['Off','Optional','Required'])}${toggle('Use global codec settings','codecAuto')}${!d.codecAuto?codecRows('account'):''}${toggle('ICE','ice')}${input('STUN server','stun')}${pick('IP version','ip',['Auto','IPv4','IPv6'])}${toggle('TURN relay','turn')}${d.turn?`${input('TURN server','turnServer')}${input('TURN login','turnLogin')}${input('TURN password','turnPassword',false,'password')}`:''}`:''}<div class="sd-form-actions"><button class="sd-save" data-action="account-save">Save account</button>${d.index!==null?`<button class="sd-circle" data-action="account-delete" aria-label="Delete account">${icon('trash')}</button>`:''}</div></div>`;}
    function transferPane(){const consulting=s.transferConsulting,connected=consultationPhase==='connected';return '<div class="sd-pane-title">Transfer call</div><div class="sd-transfer-form">'+(consulting?'<p>The original caller is on hold.</p><strong>'+esc(s.transferNumber)+'</strong><p class="sd-consult-status" role="status">'+(connected?'Call active':'Connecting…')+'</p><button class="sd-save" data-action="transfer-complete" '+(!connected?'disabled':'')+'>Complete transfer</button><button class="sd-surface-button" data-action="transfer-cancel">Cancel consultation</button>':(consultationPhase==='cancelled'?'<p>Consultation cancelled. The original call is active.</p>':'')+'<div class="sd-transfer-modes" role="group">'+[false,true].map(v=>'<button type="button" data-action="transfer-mode" data-attended="'+v+'" aria-pressed="'+(!!s.transferAttended===v)+'">'+(v?'Attended transfer':'Blind transfer')+'</button>').join('')+'</div><label>Number or SIP address<input data-transfer="number" aria-label="Transfer destination" value="'+esc(s.transferNumber||'')+'"></label><button class="sd-save" data-action="transfer-apply" '+(!s.transferNumber?.trim()?'disabled':'')+'>'+(s.transferAttended?'Call to consult':'Transfer')+'</button>')+'</div>';}
    function recordingsPane(){return `<div class="sd-pane-title"><button data-action="recording-back">${icon('left')}</button> Recordings</div><div class="sd-recording-list"><input data-recording-search type="search" placeholder="Search recordings" value="${esc(s.recordingQuery)}"><div class="sd-button-pair"><button class="sd-surface-button" data-action="recording-recover">Recover</button><button class="sd-surface-button" data-action="open-folder">Open folder</button></div>${s.recordings.map((x,i)=>x.file.toLowerCase().includes(s.recordingQuery.toLowerCase())?`<div class="sd-recording-card" data-recording-side="${x.side}"><strong>${esc(x.file)}</strong><small>${esc(x.meta)}</small><div><button data-action="recording-play" data-index="${i}" aria-label="${s.recordingPlaying===x.side?'Stop':'Preview'} ${esc(x.file)}">${icon(s.recordingPlaying===x.side?'stop':'play')}</button><button data-action="recording-open" data-index="${i}" aria-label="Open ${esc(x.file)}">${icon('folder')}</button><button data-action="recording-delete" data-index="${i}" aria-label="Delete ${esc(x.file)}">${icon('trash')}</button></div></div>`:'').join('')}</div>`;}
    function updateRecordingButtons(){
      $$('.sd-recording-card').forEach(card=>{
        const playing=s.recordingPlaying===card.dataset.recordingSide;
        const button=card.querySelector('[data-action="recording-play"]');
        if(button){button.innerHTML=icon(playing?'stop':'play');button.setAttribute('aria-label',`${playing?'Stop':'Preview'} ${card.querySelector('strong').textContent}`);}
        card.querySelector('.sd-play-progress')?.remove();
      });
    }
    function renderAccounts(){const pane=$('.sd-account-pane'),scroll=pane.querySelector('.sd-account-list')?.scrollTop||0;pane.innerHTML=accountPane();pane.querySelector('.sd-account-list').scrollTop=scroll;const accountMenu=$('.sd-account-menu');if(accountMenu)accountMenu.style.top=`${105+s.account*50}px`;localizeDom();applyScope();}
    // Keep the pane's live nodes during ordinary settings changes. This preserves scroll,
    // keyboard focus, and the current input selection while labels and checks update.
    function nodeKey(node){if(node.nodeType!==1)return '';if(node.matches('section'))return 'section:'+node.querySelector('[data-name]')?.dataset.name;if(node.matches('[data-account]'))return 'account:'+node.dataset.account;if(node.matches('[data-codec]'))return 'codec:'+node.dataset.codec;if(node.matches('.sd-codec'))return 'codec-row:'+node.querySelector('[data-codec]')?.dataset.codec;if(node.matches('[data-key][data-value]'))return 'choice:'+node.dataset.key+':'+node.dataset.value;if(node.matches('[data-action][data-key]'))return 'action:'+node.dataset.action+':'+node.dataset.key;return '';}
    function patchNode(current,next){if(current.nodeType!==next.nodeType||current.nodeType===1&&current.tagName!==next.tagName){current.replaceWith(next.cloneNode(true));return;}if(current.nodeType===3){if(current.nodeValue!==next.nodeValue)current.nodeValue=next.nodeValue;return;}if(current.nodeType!==1)return;for(const attr of [...current.attributes])if(!next.hasAttribute(attr.name))current.removeAttribute(attr.name);for(const attr of next.attributes)if(current.getAttribute(attr.name)!==attr.value)current.setAttribute(attr.name,attr.value);if(current instanceof HTMLInputElement&&current.value!==next.value&&document.activeElement!==current)current.value=next.value;const old=[...current.childNodes],wanted=[...next.childNodes];let cursor=current.firstChild;for(const desired of wanted){const key=nodeKey(desired);let match=key?old.find(node=>node.parentNode===current&&nodeKey(node)===key):cursor;if(match&&match.nodeType===desired.nodeType&&(!key||nodeKey(match)===key)){if(match!==cursor)current.insertBefore(match,cursor);patchNode(match,desired);cursor=match.nextSibling;}else{const fresh=desired.cloneNode(true);current.insertBefore(fresh,cursor);cursor=fresh.nextSibling;}}while(cursor){const nextSibling=cursor.nextSibling;cursor.remove();cursor=nextSibling;}}
    let renderedPane=null;
    function renderPane(){if(s.accountsOpen)renderAccounts();const host=$('.sd-right-pane');if(s.pane){const template=document.createElement('div');template.className='sd-right-pane';template.innerHTML=`<button class="sd-pane-close" data-action="close-pane" aria-label="Close pane">${icon('close')}</button>${s.pane==='account-edit'?accountEditor():s.pane==='transfer'?transferPane():s.pane==='recordings'?recordingsPane():detailPane()}`;if(renderedPane===s.pane&&s.pane!=='transfer')patchNode(host,template);else host.replaceChildren(...template.childNodes);if(s.pane==='account-edit'&&s.demoAccountFixture)$('[data-account="password"]').placeholder='Example password';}else host.replaceChildren();renderedPane=s.pane;resize();localizeDom();applyScope();}
    function renderIncoming(){
      let card=$('.sd-incoming-preview');if(!presentationIncoming){if(card)card.remove();return;}
      if(!card){card=document.createElement('div');card.className='sd-incoming-preview';$('.sd-window').append(card);}
      const labels={en:['Incoming call','Answer','Decline'],ru:['Входящий вызов','Ответить','Отклонить'],uk:['Вхідний виклик','Відповісти','Відхилити'],de:['Eingehender Anruf','Annehmen','Ablehnen'],fr:['Appel entrant','Répondre','Refuser'],es:['Llamada entrante','Responder','Rechazar'],it:['Chiamata in arrivo','Rispondi','Rifiuta'],pl:['Połączenie przychodzące','Odbierz','Odrzuć'],pt:['Chamada recebida','Atender','Recusar']}[s.locale]||['Incoming call','Answer','Decline'];
      card.innerHTML=`<p>${labels[0]}</p><strong>12025550142</strong><div><button data-action="presentation-answer">${labels[1]}</button><button data-action="presentation-decline">${labels[2]}</button></div>`;
    }
    function render(){renderMain();renderRail();renderPane();renderIncoming();syncCallTimer();}
    function openPane(p){if(p==='account-edit')s.accountReturnPane=s.pane==='settings'?'settings':null;else if(p===null&&s.pane==='account-edit'){p=s.accountReturnPane||null;s.accountReturnPane=null;s.accountDraft=null;}s.pane=p;s.accountsOpen=false;s.recent=false;render();}
    function makeAccountDraft(isNew){s.demoAccountFixture=false;s.accountAdvanced=false;s.accountPasswordVisible=false;const x=s.accounts[s.account];s.accountDraft=isNew?{index:null,name:'',username:'',server:'',domain:'',authLogin:'',password:'',transport:'UDP',displayName:'',interval:'600',voicemail:'',proxy:'',dtmf:'AUTO',srtp:'Off',codecAuto:true,codecs:defaultAccountCodecs(),ice:false,stun:'',ip:'Auto',turn:false}:{...x,index:s.account,password:x.fixture?'00000':'',transport:x.transport||'UDP',dtmf:x.dtmf||'AUTO',srtp:x.srtp||'Off',codecAuto:x.codecAuto??true,codecs:[...(x.codecs||defaultAccountCodecs())],ip:x.ip||'Auto'};openPane('account-edit');}
    function actionAllowed(action,button){
      if(scope==='full')return true;
      if(!scopedActions[scope].has(action))return false;
      if(scope==='consultation'&&action==='transfer-mode'&&button.dataset.attended==='false')return false;
      if(action==='pref'){if(scope==='number'&&s.pane!=='settings')return false;const keys={number:['stripSpaces','stripPlus'],codecs:['codecAuto'],noise:['noise'],echo:['echo'],record:['recAutomatic'],notifications:['notifications','notificationSound','silent'],calls:['dnd','aa']};return (keys[scope]||[]).includes(button.dataset.key);}
      return true;
    }
    function applyScope(){
      const selectedSection=scopedSettingSections[scope];
      root.classList.toggle('sd-single-setting',!!selectedSection);
      $$('.sd-setting-section').forEach(section=>{section.hidden=!!selectedSection&&section.querySelector('.sd-section-head')?.dataset.name!==selectedSection;});
      if(selectedSection){const scroller=$('.sd-settings-scroll');if(scroller)scroller.scrollTop=0;}
      $$('[data-action]').forEach(button=>{
        const allowed=actionAllowed(button.dataset.action,button);
        if(!allowed){button.setAttribute('aria-disabled','true');button.dataset.scopeDisabled='true';button.tabIndex=-1;}
        else{button.removeAttribute('aria-disabled');delete button.dataset.scopeDisabled;if(button.closest('.sd-nav'))button.tabIndex=button.dataset.action==='tab-'+s.tab?0:-1;else if(button.dataset.action==='compact'&&s.tab!=='dial')button.tabIndex=-1;else button.removeAttribute('tabindex');}
      });
      $$('input,textarea').forEach(field=>{
        const allowed=scope==='full'||(['account','advanced'].includes(scope)&&field.matches('[data-account]'))||(scope==='calls'&&field.matches('.sd-number'))||(['transfer','consultation'].includes(scope)&&field.matches('[data-transfer]'))||(scope==='history'&&field.matches('[data-search="history"]'))||(scope==='contacts'&&field.matches('[data-search="contacts"],[data-contact]'))||(scope==='record'&&field.matches('[data-recording-search]'));
        if(field.type==='range')field.disabled=!allowed;
        else field.readOnly=!allowed;
        if(!allowed){field.dataset.scopeDisabled='true';field.tabIndex=-1;}
        else{delete field.dataset.scopeDisabled;field.removeAttribute('tabindex');}
      });
    }
    root.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b||!root.contains(b))return;e.stopPropagation();const a=b.dataset.action;if(!actionAllowed(a,b))return;
      if(a==='accounts') {s.accountMenu=false;s.accountsOpen=!s.accountsOpen;renderAccounts();resize();}
      else if(a==='close-accounts'){s.accountsOpen=false;resize();}
      else if(a==='settings')openPane(s.pane==='settings'?null:'settings');
      else if(a==='close-pane')openPane(null);
      else if(a==='compact'){s.compactMode=!s.compactMode;s.pane=null;s.accountsOpen=false;render();}
      else if(a==='rail'){s.rail=!s.rail;resize();}
      else if(a.startsWith('tab-')){s.tab=a.slice(4);renderMain();}
      else if(a==='digit'){s.number=(s.number+b.dataset.digit).slice(0,32);s.recent=false;renderMain();}
      else if(a==='recent'){s.recent=!s.recent;renderMain();}
      else if(a==='recent-use'){s.number=b.dataset.number;s.recent=false;renderMain();}
      else if(a==='redial'){s.number=s.history[0].number;renderMain();}
      else if(a==='call'){if(!s.number){toast('Enter a number');return;}s.callActive=true;s.held=false;s.callSeconds=0;s.recActive=s.recAutomatic;s.quality='good';render();}
      else if(a==='presentation-answer'){presentationIncoming=false;s.number='12025550142';s.held=false;s.callActive=true;s.callSeconds=0;render();}
      else if(a==='presentation-decline'){presentationIncoming=false;render();}
      else if(a==='hangup'){presentationIncoming=false;s.callActive=false;s.conf=false;s.recActive=false;s.held=false;render();}
      else if(a==='hold'){s.held=!s.held;renderMain();}
      else if(a==='transfer'){s.transferAttended=scope==='consultation';s.transferConsulting=false;s.transferNumber=scope==='consultation'?'12025550143':'';openPane('transfer');if(scope==='consultation')consultationChanged('destination');}
       else if(a==='line-1'||a==='line-2'){s.line=a==='line-1'?1:2;s.number=s.line===1?'12025550142':'12025550143';renderMain();}
      else if(a==='erase'){s.number=s.number.slice(0,-1);renderMain();}
      else if(a==='new-contact'){s.contactDraft={index:null,name:'',number:s.number,note:'',favorite:false};openPane('contact');}
      else if(a==='use-contact'){s.number=s.contacts[+b.dataset.index].number;s.tab='dial';renderMain();}
      else if(a==='contact-detail'){const i=+b.dataset.index;s.contactDraft={...s.contacts[i],index:i};openPane('contact');}
      else if(a==='contact-favorite'){s.contactDraft.favorite=!s.contactDraft.favorite;renderPane();}
      else if(a==='contact-save'){const d=s.contactDraft;if(!d.name.trim()||!d.number.trim()){toast('Name and number are required');return;}const x={name:d.name.trim(),number:d.number.trim(),note:d.note.trim(),favorite:d.favorite};if(d.index===null)s.contacts.push(x);else s.contacts[d.index]=x;openPane(null);renderMain();toast('Contact saved in this preview');}
      else if(a==='contact-delete'){s.contacts.splice(s.contactDraft.index,1);openPane(null);renderMain();toast('Contact removed from this preview');}
      else if(a==='favorites'){s.favorites=!s.favorites;renderMain();}
      else if(a==='use-history'){s.number=s.history[+b.dataset.index].number;s.tab='dial';renderMain();}
      else if(a==='history-detail'){s.detail=+b.dataset.index;openPane('history');}
      else if(a==='history-filter'){s.historyFilterOpen=!s.historyFilterOpen;renderMain();}
      else if(a==='history-filter-select'){s.historyFilter=b.dataset.value;s.historyFilterOpen=false;renderMain();}
      else if(a==='filter-all'){s.historyFilter='All calls';renderMain();}
      else if(a==='history-export'){const rows=['number,date,duration,status,direction',...s.history.map(x=>[x.number,x.date,x.duration,x.status,x.direction].join(','))];const url=URL.createObjectURL(new Blob([rows.join('\n')],{type:'text/csv'}));const link=document.createElement('a');link.href=url;link.download='altsip-demo-history.csv';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);s.historyFilterOpen=false;renderMain();toast('Synthetic history CSV exported');}
       else if(a==='copy-history'){const x=s.history[s.detail];navigator.clipboard?.writeText(`${x.start} ${x.number}`).then(()=>{b.innerHTML=icon('check');b.setAttribute('aria-label',translate('Copied',s.locale));setTimeout(()=>{if(b.isConnected){b.innerHTML=icon('copy');b.setAttribute('aria-label',translate('Copy time and number',s.locale));}},1000);},()=>toast('Copy unavailable'));}
      else if(a==='account-menu'){s.account=+b.dataset.index;s.accountMenu=false;makeAccountDraft(false);}
      else if(a==='account-select'){s.account=+b.dataset.index;s.accountMenu=false;s.accountsOpen=scope==='accounts';if(s.accountsOpen)renderAccounts();renderRail();resize();}
      else if(a==='account-copy'){navigator.clipboard?.writeText(s.accounts[s.account].address).then(()=>toast('Copied'),()=>toast('Copy unavailable'));}
      else if(a==='account-new'||a==='account-edit')makeAccountDraft(a==='account-new');
       else if(a==='account-save'){const d=s.accountDraft;if(!d.username.trim()){toast('Enter a SIP username.');return;}if(!d.server.trim()){toast('Enter a SIP server.');return;}if(!d.domain.trim()){toast('Enter a SIP domain.');return;}if(d.index===null&&!d.password){toast('Enter the password for this connection.');return;}const x={...d,name:d.name.trim()||d.username.trim(),address:d.username.trim(),username:d.username.trim(),domain:d.domain.trim()};delete x.index;delete x.password;delete x.turnPassword;x.fixture=false;if(d.index===null){s.accounts.push(x);s.account=s.accounts.length-1;}else{s.accounts[d.index]=x;s.account=d.index;}openPane(null);renderRail();}
      else if(a==='account-delete'){if(s.accounts.length===1){toast('Keep one account');return;}s.accounts.splice(s.accountDraft.index,1);s.account=0;openPane(null);renderRail();toast('Account removed');}
      else if(a==='account-up'||a==='account-down'){const i=s.account,j=i+(a==='account-up'?-1:1);if(j>=0&&j<s.accounts.length){[s.accounts[i],s.accounts[j]]=[s.accounts[j],s.accounts[i]];s.account=j;s.accountMenu=false;renderAccounts();}}
      else if(a==='account-advanced'){s.accountAdvanced=!s.accountAdvanced;renderPane();}
      else if(a==='account-toggle'){const k=b.dataset.key;s.accountDraft[k]=!s.accountDraft[k];renderPane();}
      else if(a==='account-choice'){s.accountDraft[b.dataset.key]=b.dataset.value;renderPane();}
      else if(a==='password-eye'){s.accountPasswordVisible=!s.accountPasswordVisible;renderPane();}
      else if(a==='transfer-mode'){s.transferAttended=b.dataset.attended==='true';renderPane();}
      else if(a==='transfer-apply'){if(!s.transferNumber?.trim())return;if(s.transferAttended){s.transferConsulting=true;s.held=true;consultationChanged(scope==='consultation'?'consulting':'connected');renderPane();renderMain();}else{s.callActive=false;s.held=false;openPane(null);renderMain();}}
      else if(a==='transfer-complete'){if(consultationPhase!=='connected')return;s.transferConsulting=false;s.callActive=false;s.held=false;consultationChanged('complete');openPane(null);renderMain();syncCallTimer();}
      else if(a==='transfer-cancel'){s.transferConsulting=false;s.held=false;consultationChanged('cancelled');renderPane();renderMain();}
      else if(a==='section'){s.settings=s.settings===b.dataset.name?null:b.dataset.name;renderPane();}
      else if(a==='pref'){const k=b.dataset.key;s[k]=!s[k];renderPane();if(['dnd','aa','recAutomatic'].includes(k))renderRail();}
      else if(a==='choice'||a==='segment'){const k=b.dataset.key;if(k!=='theme'){s[k]=b.dataset.value;renderPane();}}
       else if(a==='language'){const code=Object.keys(localeNames).find(key=>localeNames[key]===b.dataset.value)||'en';setLocale(code);root.dispatchEvent(new CustomEvent('sip-demo-language',{bubbles:true,detail:{locale:code}}));}
      else if(a==='codec-toggle'){const x=b.dataset.codec,kind=b.closest('[data-codec-scope]')?.dataset.codecScope;if(kind==='account'){
        const active=s.accountDraft.codecs;s.accountDraft.codecs=active.includes(x)?active.length>1?active.filter(y=>y!==x):active:[...active,x];
      }else{
        if(!s.disabledCodecs.includes(x)&&s.codecs.length-s.disabledCodecs.length<=1)return;
        s.codecs.splice(s.codecs.indexOf(x),1);if(s.disabledCodecs.includes(x)){s.disabledCodecs=s.disabledCodecs.filter(y=>y!==x);const firstInactive=s.codecs.findIndex(y=>s.disabledCodecs.includes(y));s.codecs.splice(firstInactive<0?s.codecs.length:firstInactive,0,x);}else{s.disabledCodecs.push(x);s.codecs.push(x);}
      }renderPane();}
      else if(a==='codec-up'||a==='codec-down'){const kind=b.closest('[data-codec-scope]')?.dataset.codecScope||'global',model=codecModel(kind),i=+b.dataset.index,j=i+(a==='codec-up'?-1:1);if(i>=0&&j>=0&&j<model.active.length){reorderCodec(i,j,kind);}}
       else if(a.startsWith('toggle-')){const k=a.slice(7);if(k==='rec'){if(!s.callActive)return;s.recActive=!s.recActive;}else if(k==='conf'){if(!s.callActive)return;s.conf=!s.conf;s.line=s.conf?2:1;s.number=s.conf?'12025550143':'12025550142';renderMain();resize();}else s[k]=!s[k];renderRail();if(s.pane==='settings')renderPane();}
      else if(a.startsWith('mute-')){const k=a.slice(5)+'Muted';s[k]=!s[k];renderRail();}
      else if(a==='device-input'||a==='device-output'){const k=a.slice(7);s.deviceMenu=s.deviceMenu===k?null:k;renderPane();}
      else if(a==='select-device'){s[b.dataset.kind+'Device']=b.dataset.value;s.deviceMenu=null;renderPane();}
      else if(a==='refresh-devices')renderPane();
      else if(a==='choose-folder'){s.recordingFolder=s.recordingFolder.startsWith('C:')?'D:\\Calls':'C:\\Calls';renderPane();}
      else if(a==='open-folder'){if(s.pane!=='recordings')openPane('recordings');}
      else if(a==='recordings')openPane('recordings');
      else if(a==='recording-back'){openPane('settings');s.settings='Call recording';renderPane();}
      else if(a==='recording-recover')renderPane();
      else if(a==='recording-delete'){const i=+b.dataset.index,side=s.recordings[i]?.side;if(side===s.recordingPlaying){s.recordingPlaying=null;root.dispatchEvent(new CustomEvent('sip-demo-recording',{bubbles:true,detail:{side,playing:false}}));}s.recordings.splice(i,1);renderPane();}
      else if(a==='recording-play'){const i=+b.dataset.index,side=s.recordings[i]?.side;if(!side)return;const playing=s.recordingPlaying!==side;s.recordingPlaying=playing?side:null;updateRecordingButtons();root.dispatchEvent(new CustomEvent('sip-demo-recording',{bubbles:true,detail:{side,playing}}));}
      else if(a==='windows-notifications')toast('Windows notification settings are outside this preview');
    });
    root.addEventListener('input',e=>{const t=e.target;if(scope!=='full'&&t.readOnly)return;if(t.matches('.sd-number')){s.number=t.value.slice(0,32);const button=$('.sd-number-wrap>button'),next=s.number?'erase':'recent';if(button&&button.dataset.action!==next){button.dataset.action=next;button.setAttribute('aria-label',s.number?'Delete character':'Recent numbers');button.innerHTML=icon(s.number?'erase':'down');applyScope();}}else if(t.matches('[data-level]')){s[t.dataset.level]=+t.value;t.style.setProperty('--sd-progress',Math.round(+t.value/+t.max*100)+'%');}else if(t.matches('[data-search]')){const q=t.value.toLowerCase().trim();$$('.sd-list-card').forEach(c=>c.hidden=!c.textContent.toLowerCase().includes(q));}else if(t.matches('[data-recording-search]')){s.recordingQuery=t.value;$$('.sd-recording-card').forEach(c=>c.hidden=!c.textContent.toLowerCase().includes(t.value.toLowerCase()));}else if(t.matches('[data-contact]'))s.contactDraft[t.dataset.contact]=t.value;else if(t.matches('[data-account]'))s.accountDraft[t.dataset.account]=t.value;else if(t.matches('[data-transfer]')){s.transferNumber=t.value;const submit=$('[data-action="transfer-apply"]');if(submit)submit.disabled=!t.value.trim();if(scope==='consultation')consultationChanged(consultationPhase);}});
    function reorderCodec(from,to,kind='global'){
      const before=new Map($$('.sd-codec').map(row=>[row.querySelector('[data-codec]').dataset.codec,row.getBoundingClientRect().top]));
      const order=kind==='account'?s.accountDraft.codecs:s.codecs;order.splice(to,0,order.splice(from,1)[0]);renderPane();
      if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return;
      $$('.sd-codec').forEach(row=>{const previous=before.get(row.querySelector('[data-codec]').dataset.codec);if(previous===undefined)return;const delta=previous-row.getBoundingClientRect().top;if(Math.abs(delta)>1)row.animate([{transform:`translateY(${delta}px)`},{transform:'translateY(0)'}],{duration:260,easing:'cubic-bezier(.2,.72,.15,1)'});});
    }
    let codecPointer=null;
    root.addEventListener('pointerdown',e=>{const grip=e.target.closest('.sd-codec .sd-grip'),row=grip?.closest('.sd-codec');if(!row)return;const list=row.parentElement,kind=list.dataset.codecScope,model=codecModel(kind);if(!(scope==='full'||scope==='codecs'||(scope==='advanced'&&kind==='account'))||(kind==='global'&&s.codecAuto)||model.disabled.includes(model.order[+row.dataset.codecIndex])||model.active.length<2)return;const rect=row.getBoundingClientRect();codecPointer={id:e.pointerId,row,list,kind,grabY:e.clientY-rect.top,dy:0};row.classList.add('sd-dragging');root.setPointerCapture?.(e.pointerId);e.preventDefault();});
    root.addEventListener('pointermove',e=>{const drag=codecPointer;if(!drag||drag.id!==e.pointerId)return;const {row,list,kind}=drag,bounds=list.getBoundingClientRect(),height=row.getBoundingClientRect().height,active=codecModel(kind).active.length,y=Math.max(bounds.top+drag.grabY,Math.min(bounds.top+active*height-height+drag.grabY,e.clientY));const current=[...list.children].indexOf(row),target=Math.max(0,Math.min(active-1,Math.round((y-bounds.top-drag.grabY)/height)));if(target!==current){const before=new Map([...list.children].map(el=>[el,el.getBoundingClientRect().top]));const other=list.children[target];if(target>current)other.after(row);else list.insertBefore(row,other);const order=kind==='account'?s.accountDraft.codecs:s.codecs;order.splice(target,0,order.splice(current,1)[0]);[...list.children].forEach((el,i)=>el.dataset.codecIndex=String(i));if(!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)[...list.children].filter(el=>el!==row).forEach(el=>{const delta=before.get(el)-el.getBoundingClientRect().top;if(Math.abs(delta)>1)el.animate([{transform:`translateY(${delta}px)`},{transform:'translateY(0)'}],{duration:180,easing:'cubic-bezier(.2,.72,.15,1)'});});}const visualTop=Math.max(bounds.top,Math.min(bounds.bottom-height,y-drag.grabY));const scale=root.getBoundingClientRect().width/dims().width||1,baseTop=row.getBoundingClientRect().top-(drag.dy||0)*scale;drag.dy=(visualTop-baseTop)/scale;row.style.transform=`translateY(${drag.dy}px)`;e.preventDefault();});
    function finishCodecPointer(e){const drag=codecPointer;if(!drag||drag.id!==e.pointerId)return;drag.row.classList.remove('sd-dragging');drag.row.style.transform='';drag.row.style.removeProperty('--sd-drag-y');codecPointer=null;if(root.hasPointerCapture?.(e.pointerId))root.releasePointerCapture(e.pointerId);renderPane();}
    root.addEventListener('pointerup',finishCodecPointer);root.addEventListener('pointercancel',finishCodecPointer);
    let accountPointer=null;
    root.addEventListener('pointerdown',e=>{const grip=e.target.closest('.sd-account-grip'),row=grip?.closest('.sd-account-card');if(!row||!s.accountsOpen||!(scope==='full'||scope==='accounts'))return;const rect=row.getBoundingClientRect();accountPointer={id:e.pointerId,row,list:row.parentElement,grabY:e.clientY-rect.top,dy:0};row.classList.add('sd-dragging');root.setPointerCapture?.(e.pointerId);e.preventDefault();});
    root.addEventListener('pointermove',e=>{const drag=accountPointer;if(!drag||drag.id!==e.pointerId)return;const {row,list}=drag,rows=[...list.querySelectorAll('.sd-account-card')],scale=root.getBoundingClientRect().width/dims().width||1,bounds=list.getBoundingClientRect(),height=row.getBoundingClientRect().height;const slotTops=rows.map(el=>bounds.top+(el.offsetTop-list.scrollTop)*scale),minTop=Math.max(bounds.top,slotTops[0]),maxTop=Math.min(bounds.bottom-height,slotTops.at(-1));const visualTop=Math.max(minTop,Math.min(maxTop,e.clientY-drag.grabY)),center=visualTop+height/2,current=rows.indexOf(row);let target=current,best=Infinity;rows.forEach((el,i)=>{const distance=Math.abs(center-(slotTops[i]+el.getBoundingClientRect().height/2));if(distance<best){best=distance;target=i;}});if(target!==current){const before=new Map(rows.map(el=>[el,el.getBoundingClientRect().top]));const selected=s.accounts[s.account],other=rows[target];if(target>current)other.after(row);else list.insertBefore(row,other);s.accounts.splice(target,0,s.accounts.splice(current,1)[0]);s.account=s.accounts.indexOf(selected);[...list.children].forEach((el,i)=>{el.dataset.accountIndex=String(i);el.querySelectorAll('[data-index]').forEach(button=>button.dataset.index=String(i));el.classList.toggle('sd-selected',i===s.account);});if(!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)[...list.children].filter(el=>el!==row).forEach(el=>{const delta=before.get(el)-el.getBoundingClientRect().top;if(Math.abs(delta)>1)el.animate([{transform:`translateY(${delta}px)`},{transform:'translateY(0)'}],{duration:180,easing:'cubic-bezier(.2,.72,.15,1)'});});}const baseTop=row.getBoundingClientRect().top-drag.dy*scale;drag.dy=(visualTop-baseTop)/scale;row.style.transform=`translateY(${drag.dy}px)`;e.preventDefault();});
    function finishAccountPointer(e){const drag=accountPointer;if(!drag||drag.id!==e.pointerId)return;drag.row.classList.remove('sd-dragging');drag.row.style.transform='';accountPointer=null;if(root.hasPointerCapture?.(e.pointerId))root.releasePointerCapture(e.pointerId);renderAccounts();renderRail();}
    root.addEventListener('pointerup',finishAccountPointer);root.addEventListener('pointercancel',finishAccountPointer);
    root.addEventListener('dragstart',e=>e.preventDefault());
    root.addEventListener('keydown',e=>{if(e.key==='Escape'&&s.accountsOpen&&scope==='full'){s.accountsOpen=false;resize();e.stopPropagation();}else if(e.key==='Escape'&&s.pane&&scope==='full'){openPane(null);e.stopPropagation();}else if(e.key==='Escape'&&s.recent&&(scope==='full'||scope==='number')){s.recent=false;renderMain();}else if(scope==='full'&&e.target.closest('.sd-nav')&&['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const tabs=['dial','history','contacts'],i=tabs.indexOf(s.tab);s.tab=e.key==='Home'?'dial':e.key==='End'?'contacts':tabs[(i+(e.key==='ArrowRight'?1:2))%3];renderMain();$(`[data-action="tab-${s.tab}"]`)?.focus();}});
    for(const type of ['pointermove','pointerdown','click'])root.addEventListener(type,e=>e.stopPropagation());
    root.addEventListener('wheel',e=>{
      if(root.id!=='sip-demo')return;
      const factor=e.deltaMode===1?16:e.deltaMode===2?root.clientHeight:1,dx=e.deltaX*factor,dy=e.deltaY*factor;
      for(let node=e.target;node&&node!==root;node=node.parentElement){
        if(!(node instanceof HTMLElement))continue;
        const style=getComputedStyle(node),maxY=node.scrollHeight-node.clientHeight,maxX=node.scrollWidth-node.clientWidth;
        const vertical=/auto|scroll/.test(style.overflowY)&&maxY>1&&dy!==0;
        const horizontal=/auto|scroll/.test(style.overflowX)&&maxX>1&&dx!==0;
        if(!vertical&&!horizontal)continue;
        if(vertical)node.scrollTop+=dy;
        if(horizontal)node.scrollLeft+=dx;
        e.preventDefault();e.stopPropagation();
        return;
      }
    },{passive:false});
    root.addEventListener('scroll',e=>{if(e.target instanceof HTMLElement)e.target.classList.toggle('sd-scrolled',e.target.scrollTop>2);},true);
     function preview(view){
        s.pane=null;s.accountsOpen=false;s.accountDraft=null;s.accountPasswordVisible=false;s.demoAccountFixture=false;s.guideAdvancedOnly=view==='account-edit-advanced';root.classList.toggle('sd-guide-advanced-only',s.guideAdvancedOnly);s.transferAttended=false;s.transferConsulting=false;s.transferNumber='';s.tab='dial';s.compactMode=false;s.callActive=false;s.conf=false;s.recActive=false;s.recAutomatic=false;s.held=false;s.recent=false;s.quality='good';s.accountMenu=false;s.settings=null;s.number='';
       if(view==='compact')s.compactMode=true;
        else if(view==='conference'){s.callActive=true;s.conf=true;s.line=2;s.number='12025550143';s.callSeconds=94;}
       else if(view==='quality'){s.callActive=true;s.line=1;s.number='12025550142';s.callSeconds=94;}
       else if(view==='details'){s.tab='history';s.detail=0;s.pane='history';}
       else if(view==='history'||view==='contacts')s.tab=view;
       else if(view==='accounts')s.accountsOpen=true;
       else if(view==='transfer'){s.callActive=true;s.line=1;s.number='12025550142';s.callSeconds=94;s.pane='transfer';}
       else if(view==='consultation'){s.callActive=true;s.line=1;s.number='12025550142';s.callSeconds=94;consultationPhase='active';}
       else if(view==='account-new'||view==='account-edit'||view==='account-edit-advanced'){
          const x=s.accounts[s.account];s.accountDraft={...x,index:view==='account-new'?null:s.account,name:view==='account-new'?'Example account':x.name,username:view==='account-new'?'12025550142':x.username,server:'sip.example.invalid',domain:'example.invalid',password:'00000',authLogin:view==='account-new'?'example-auth':x.authLogin||'studio-auth',transport:view==='account-new'?'UDP':'TLS',displayName:view==='account-new'?'Example caller':x.displayName||'Studio desk',interval:x.interval||'600',voicemail:x.voicemail||'*97',proxy:x.proxy||'proxy.example.invalid',dtmf:x.dtmf||'RTP',srtp:x.srtp||'Optional',codecAuto:x.codecAuto??true,codecs:[...(x.codecs||defaultAccountCodecs())],ice:x.ice??false,stun:x.stun||'stun.example.invalid',ip:x.ip||'Auto',turn:x.turn??false};s.demoAccountFixture=true;s.accountAdvanced=false;s.pane='account-edit';
         s.accountAdvanced=view==='account-edit-advanced';if(s.accountAdvanced)Object.assign(s.accountDraft,{transport:'UDP',ip:'IPv4',ice:true,stun:'',turn:true,turnServer:'turn.example.invalid:3478',turnLogin:'demo-relay',turnPassword:'00000'});
       }
       else if(view==='recordings')s.pane='recordings';
       else if(view==='settings')s.pane='settings';
       else if(['noise','codecs','number','calls','devices','echo','appearance','recording','notifications'].includes(view)){
         s.pane='settings';s.settings={noise:'Noise suppression',codecs:'Codecs',number:'Number processing',calls:'Calls',devices:'Sound and devices',echo:'Sound and devices',appearance:'Appearance',recording:'Call recording',notifications:'Notifications'}[view];
         if(view==='codecs')s.codecAuto=false;
       }
        render();
        if(view==='consultation')consultationChanged('active');
        if(s.pane==='settings'&&s.settings){const scroller=$('.sd-settings-scroll'),section=$$('.sd-setting-section').find(el=>el.querySelector('.sd-section-head')?.dataset.name===s.settings);if(scroller&&section)scroller.scrollTop+=section.getBoundingClientRect().top-scroller.getBoundingClientRect().top-4;}
     }
    if(options.initialView)preview(options.initialView);else render();
     function setLocale(code){const next=normalizedLocale(code);if(s.locale===next)return;s.locale=next;s.language=localeNames[next];for(const contact of s.contacts)if(contact.presentationFixture)contact.note=window.AltSIPFixtures.note[next];if(s.contactDraft?.presentationFixture)s.contactDraft.note=window.AltSIPFixtures.note[next];render();}
     const onLanguage=e=>setLocale(e.detail?.locale||e.detail?.code||e.detail);
     const onRecordingState=e=>{const {side,playing}=e.detail||{};if(side!=='a'&&side!=='b')return;s.recordingPlaying=playing?side:(s.recordingPlaying===side?null:s.recordingPlaying);updateRecordingButtons();};
     window.addEventListener('sip-demo-language',onLanguage);
     document.addEventListener('sip-demo-language',onLanguage);
     document.addEventListener('sip-demo-recording-state',onRecordingState);
     const api={setCompactLayout(value){s.compactLayout=!!value;resize();},setActive(value){requestedActive=!!value;syncCallTimer();},getSize(){return dims();},getConsultationState,simulateConsultationAnswer(){if(scope!=='consultation'||consultationPhase!=='consulting')return false;consultationChanged('connected');renderPane();return true;},setLocale,destroy(){stopPresentationScroll();window.removeEventListener('sip-demo-language',onLanguage);document.removeEventListener('sip-demo-language',onLanguage);document.removeEventListener('sip-demo-recording-state',onRecordingState);document.removeEventListener('visibilitychange',onVisibilityChange);visibilityObserver?.disconnect();clearTimeout(toastTimer);clearInterval(callTimer);codecPointer=null;root.innerHTML='';root.className=root.className.replace(/\bsip-demo\b|\bsd-[\w-]+\b/g,'').trim();delete root.dataset.interactionScope;delete root.__altSipDemo;}};
    api.preview=preview;
     api.setInteractionScope=value=>{scope=Object.hasOwn(scopedActions,value)?value:'full';root.dataset.interactionScope=scope;applyScope();if(root.contains(document.activeElement)&&document.activeElement?.dataset.scopeDisabled)document.activeElement.blur();};
     api.getGuideCrop=view=>{const mobile=s.compactLayout,right=mobile?0:dimensions().base,paneWidth=mobile?380:dimensions().paneWidth;const pane=(height=560)=>({x:right,y:0,width:paneWidth,height});if(['account-new','account-edit'].includes(view))return {...pane(430),x:mobile?0:300,width:mobile?380:384};if(view==='account-edit-advanced')return {...pane(),x:mobile?0:300,width:mobile?380:384};if(['devices','codecs','noise','echo','number','calls','notifications','appearance','recording'].includes(view)){const section=$$('.sd-setting-section').find(el=>el.querySelector('.sd-section-head')?.dataset.name===s.settings);const scale=root.getBoundingClientRect().width/dims().width||1;const height=Math.min(560,Math.max(150,Math.ceil((section?.getBoundingClientRect().height||180)/scale+52)));return pane(height);}if(['details','recordings','settings','transfer'].includes(view))return pane(view==='transfer'?265:560);if(view==='accounts')return {x:0,y:0,width:180,height:265};if(view==='compact')return {x:0,y:0,width:280,height:252};if(view==='quality')return {x:0,y:0,width:380,height:145};if(view==='conference')return {x:0,y:0,width:380,height:225};if(view==='history'||view==='contacts')return {x:0,y:0,width:300,height:310};return {x:0,y:0,...dims()};};
     api.setNumberPreview=value=>{s.number=String(value).slice(0,32);const field=$('.sd-number');if(field&&field.value!==s.number){const focused=document.activeElement===field,start=focused?field.selectionStart:null;field.value=s.number;if(focused&&start!==null)field.setSelectionRange(Math.min(start,s.number.length),Math.min(start,s.number.length));}};
    api.setPresentationPaused=value=>{if(scope!=='full')return;presentationPaused=!!value;if(presentationScroll){if(value&&presentationScroll.playState==='running')presentationScroll.pause();else if(!value&&presentationScroll.playState==='paused')presentationScroll.play();}syncCallTimer();};
    api.present=(action,value)=>{
      if(scope!=='full')return false;
      const pulse=selector=>{if(!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)$(selector)?.animate?.([{transform:'scale(1)'},{transform:'scale(.93)'},{transform:'scale(1)'}],{duration:360,easing:'ease-out'});};
      if(action==='reset'){stopPresentationScroll();presentationRinging=false;presentationIncoming=false;s.microphoneMuted=false;s.dnd=false;s.aa=false;s.recAutomatic=false;s.noise=false;s.noiseMode='light';api.resetTour();s.account=0;api.setTheme(value||'light');render();}
      else if(action==='digit')api.appendTourDigit(value);
      else if(action==='number'){s.number=String(value||'');renderMain();}
      else if(action==='call'){presentationRinging=false;api.startTourCall();s.recActive=s.recAutomatic;renderRail();pulse('.sd-call');}
      else if(action==='ringing'){presentationRinging=true;s.callActive=true;s.recActive=false;s.callSeconds=0;render();}
      else if(action==='unanswered'){presentationRinging=false;s.callActive=false;s.recActive=false;render();const status=document.createElement('div');status.className='sd-call-meta sd-ringing-preview';status.textContent=translate('Callee unavailable',s.locale);$('.sd-dial').prepend(status);}
       else if(action==='settings'){s.pane=value?'settings':null;s.settings=value;renderPane();}
      else if(action==='noise'){s.noise=!!value;renderPane();pulse('[data-action="pref"][data-key="noise"]');}
      else if(action==='noise-mode'){s.noiseMode=value;renderPane();pulse('[data-key="noiseMode"][data-value="'+value+'"]');}
      else if(action==='automatic-recording'){s.recAutomatic=!!value;renderPane();renderRail();pulse('[data-action="pref"][data-key="recAutomatic"]');}
      else if(action==='microphone'){s.microphoneMuted=!!value;renderRail();pulse('[data-action="mute-microphone"]');}
      else if(action==='record'){s.recActive=!!value;renderRail();pulse('[data-action="toggle-rec"]');}
      else if(action==='end'){presentationRinging=false;api.endTourCall();presentationIncoming=false;s.callActive=false;s.recActive=false;s.conf=false;s.pane=null;render();}
      else if(action==='history')showPresentationHistory();
      else if(action==='history-detail')presentationPane('history');
      else if(action==='contacts')showPresentationContacts();
      else if(action==='contact-detail')presentationPane('contact');
      else if(action==='scroll-list')scrollPresentationList(value);
       else if(action==='rail'){s.rail=!!value;resize();}
       else if(action==='accounts'){s.accountsOpen=!!value;if(value){s.tab='dial';renderMain();}renderPane();if(value&&!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)$$('.sd-account-card').forEach((row,i)=>row.animate([{opacity:0,transform:'translateX(-8px)'},{opacity:1,transform:'none'}],{duration:300,delay:i*90,fill:'backwards',easing:'ease-out'}));}
      else if(action==='account'){s.account=Math.max(0,Math.min(s.accounts.length-1,+value));renderAccounts();renderRail();}
       else if(action==='theme')api.setTheme('light');
      else if(action==='compact'){s.accountsOpen=false;s.tab='dial';s.number='';s.compactMode=!!value;render();}
      else if(action==='incoming'){s.compactMode=false;s.tab='dial';s.pane=null;s.callActive=false;s.number='';presentationIncoming=true;render();}
      else if(action==='answer'){presentationIncoming=false;s.number='12025550142';s.callSeconds=0;s.callActive=true;render();}
      else if(action==='second'){s.held=true;s.number='12025550143';render();}
      else if(action==='conference'){s.conf=true;s.held=false;s.line=2;render();pulse('[data-action="toggle-conf"]');}
      else if(action==='transfer'){s.conf=false;s.line=1;s.held=true;s.pane='transfer';s.transferAttended=true;s.transferConsulting=true;s.transferNumber='12025550143';consultationPhase='connected';render();}
      else if(action==='transferred'){s.callActive=false;s.held=false;s.pane=null;s.transferConsulting=false;render();}
      else if(action==='finish'){stopPresentationScroll();presentationRinging=false;presentationIncoming=false;s.callActive=false;s.microphoneMuted=false;s.conf=false;s.recActive=false;s.compactMode=false;s.accountsOpen=false;api.finishTour();api.setTheme(value||'light');render();}
      else return false;
      return true;
    };
    let tourCallPending=false;
    api.resetTour=()=>{if(scope!=='full')return false;s.history=s.history.filter(item=>!item.tourFixture);s.rail=true;s.tab='dial';s.pane=null;s.accountsOpen=false;s.compactMode=false;s.callActive=false;s.conf=false;s.recActive=false;s.held=false;s.recent=false;s.number='';s.callSeconds=0;s.quality='good';s.historyFilter='All calls';s.historyFilterOpen=false;tourCallPending=false;render();return true;};
    api.appendTourDigit=digit=>{if(scope!=='full'||s.callActive||!/^[0-9]$/.test(digit))return false;s.tab='dial';s.number=(s.number+digit).slice(0,32);renderMain();return true;};
    api.startTourCall=()=>{if(scope!=='full'||s.callActive||!s.number)return false;s.tab='dial';s.callActive=true;s.held=false;s.callSeconds=0;s.quality='good';tourCallPending=true;render();return true;};
    api.endTourCall=()=>{if(scope!=='full'||!s.callActive||!tourCallPending)return false;const duration=`${String(Math.floor(s.callSeconds/60)).padStart(2,'0')}:${String(s.callSeconds%60).padStart(2,'0')}`;s.history.unshift({number:s.number,date:'19.10 17:18',start:'19.10.2026 17:18:00',end:'19.10.2026 17:'+String(18+Math.floor(s.callSeconds/60)).padStart(2,'0')+':'+String(s.callSeconds%60).padStart(2,'0'),duration,status:'Completed',direction:'Outgoing call',outcome:'completed',incoming:false,code:'200',sip:'OK',tourFixture:true});s.callActive=false;s.conf=false;s.recActive=false;s.held=false;tourCallPending=false;render();return true;};
    api.showTourHistory=()=>{if(scope!=='full')return false;s.tab='history';s.pane=null;s.historyFilter='All calls';s.historyFilterOpen=false;render();return true;};
    api.finishTour=()=>{if(scope!=='full')return false;s.tab='dial';s.pane=null;s.number='';s.recent=false;render();return true;};
    api.setQualityPreview=level=>{if(!['good','fair','poor'].includes(level))return;if(!s.callActive)preview('quality');s.quality=level;const dot=$('.sd-quality');if(dot){dot.className=`sd-quality sd-quality-${level}`;dot.title=`${level} network quality`;}};
      function setTheme(){s.theme='light';root.classList.remove('sd-dark');}
     api.setTheme=setTheme;
    root.__altSipDemo=api;return api;
  }
   window.AltSIPDemo={mount,translate};
  // Every surface mounts explicitly, with its own sizing, locale and fixture options.
})();
