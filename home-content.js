/* Scroll-driven product scenes; shared audio sections are placed by app.js. */
(() => {
 'use strict';
 const copy = {
  "ru": {
    "accounts": [
      "Несколько SIP-аккаунтов\nБыстрое переключение",
      "Используйте аккаунты разных провайдеров и АТС. Выбирайте нужный перед звонком, не переключаясь между программами."
    ],
    "compact": [
      "Полный и компактный режим",
      "В компактном режиме остаются основные элементы управления звонком. Переключайтесь между видами, сохраняя место для других окон."
    ],
    "history": "История звонков и контакты",
    "historyTab": "История",
    "contactsTab": "Контакты",
    "direction": "Направление",
    "outgoing": "Исходящий вызов",
    "incoming": "Входящий вызов",
    "missed": "Пропущенный вызов",
    "declined": "Отклонено",
    "failed": "Не удалось выполнить вызов",
    "started": "Начало",
    "ended": "Завершение",
    "duration": "Длительность",
    "noteLabel": "Заметка",
    "contactNote": "Рабочий контакт. Обсуждение проекта и согласование встреч."
  },
  "en": {
    "accounts": [
      "Multiple SIP accounts\nA quick switch",
      "Use accounts from different providers and PBXs. Choose one before calling, without changing apps."
    ],
    "compact": [
      "Full and compact modes",
      "Compact mode keeps essential call controls visible and leaves room for other windows."
    ],
    "history": "Call history and contacts",
    "historyTab": "History",
    "contactsTab": "Contacts",
    "direction": "Direction",
    "outgoing": "Outgoing call",
    "incoming": "Incoming call",
    "missed": "Missed call",
    "declined": "Declined",
    "failed": "Failed call",
    "started": "Started",
    "ended": "Ended",
    "duration": "Duration",
    "noteLabel": "Note",
    "contactNote": "Work contact. Project discussions and meeting coordination."
  },
  "uk": {
    "accounts": [
      "Кілька SIP-акаунтів\nШвидке перемикання",
      "Використовуйте акаунти різних провайдерів та АТС. Вибирайте потрібний перед дзвінком, не змінюючи застосунок."
    ],
    "compact": [
      "Повний і компактний режими",
      "У компактному режимі залишаються основні кнопки виклику. Звільніть місце для інших вікон."
    ],
    "history": "Історія дзвінків і контакти",
    "historyTab": "Історія",
    "contactsTab": "Контакти",
    "direction": "Напрямок",
    "outgoing": "Вихідний виклик",
    "incoming": "Вхідний виклик",
    "missed": "Пропущений виклик",
    "declined": "Відхилено",
    "failed": "Невдалий виклик",
    "started": "Початок",
    "ended": "Завершення",
    "duration": "Тривалість",
    "noteLabel": "Нотатка",
    "contactNote": "Робочий контакт. Обговорення проєкту та узгодження зустрічей."
  },
  "de": {
    "accounts": [
      "Mehrere SIP-Konten\nSchnell gewechselt",
      "Nutzen Sie Konten verschiedener Anbieter und Telefonanlagen. Wählen Sie vor dem Anruf das passende Konto, ohne die App zu wechseln."
    ],
    "compact": [
      "Voll- und Kompaktmodus",
      "Im kompakten Modus bleiben die wichtigsten Anrufbedienelemente sichtbar. So bleibt Platz für andere Fenster."
    ],
    "history": "Anrufliste und Kontakte",
    "historyTab": "Anrufliste",
    "contactsTab": "Kontakte",
    "direction": "Richtung",
    "outgoing": "Ausgehender Anruf",
    "incoming": "Eingehender Anruf",
    "missed": "Verpasster Anruf",
    "declined": "Abgelehnt",
    "failed": "Fehlgeschlagen",
    "started": "Beginn",
    "ended": "Ende",
    "duration": "Dauer",
    "noteLabel": "Notiz",
    "contactNote": "Geschäftlicher Kontakt. Projektbesprechungen und Terminabstimmung."
  },
  "fr": {
    "accounts": [
      "Plusieurs comptes SIP\nUn changement rapide",
      "Utilisez des comptes de différents fournisseurs et standards. Choisissez le compte avant d’appeler, sans changer d’application."
    ],
    "compact": [
      "Modes complet et compact",
      "Le mode compact garde les commandes essentielles des appels et libère de la place pour vos autres fenêtres."
    ],
    "history": "Historique des appels et contacts",
    "historyTab": "Historique",
    "contactsTab": "Contacts",
    "direction": "Direction",
    "outgoing": "Appel sortant",
    "incoming": "Appel entrant",
    "missed": "Appel manqué",
    "declined": "Refusé",
    "failed": "Échec de l’appel",
    "started": "Début",
    "ended": "Fin",
    "duration": "Durée",
    "noteLabel": "Note",
    "contactNote": "Contact professionnel. Suivi de projet et organisation des réunions."
  },
  "es": {
    "accounts": [
      "Varias cuentas SIP\nUn cambio rápido",
      "Usa cuentas de distintos proveedores y centralitas. Elige la cuenta antes de llamar sin cambiar de aplicación."
    ],
    "compact": [
      "Modos completo y compacto",
      "El modo compacto mantiene los controles esenciales de llamada y deja espacio para otras ventanas."
    ],
    "history": "Historial de llamadas y contactos",
    "historyTab": "Historial",
    "contactsTab": "Contactos",
    "direction": "Dirección",
    "outgoing": "Llamada saliente",
    "incoming": "Llamada entrante",
    "missed": "Llamada perdida",
    "declined": "Rechazada",
    "failed": "Llamada fallida",
    "started": "Inicio",
    "ended": "Fin",
    "duration": "Duración",
    "noteLabel": "Nota",
    "contactNote": "Contacto de trabajo. Seguimiento de proyectos y coordinación de reuniones."
  },
  "it": {
    "accounts": [
      "Più account SIP\nUn cambio rapido",
      "Usa account di provider e centralini diversi. Scegli quello giusto prima di chiamare, senza cambiare app."
    ],
    "compact": [
      "Modalità completa e compatta",
      "La modalità compatta mantiene i comandi essenziali della chiamata e lascia spazio alle altre finestre."
    ],
    "history": "Cronologia chiamate e contatti",
    "historyTab": "Cronologia",
    "contactsTab": "Contatti",
    "direction": "Direzione",
    "outgoing": "Chiamata in uscita",
    "incoming": "Chiamata in entrata",
    "missed": "Chiamata persa",
    "declined": "Rifiutata",
    "failed": "Chiamata non riuscita",
    "started": "Inizio",
    "ended": "Fine",
    "duration": "Durata",
    "noteLabel": "Nota",
    "contactNote": "Contatto di lavoro. Discussione dei progetti e organizzazione delle riunioni."
  },
  "pl": {
    "accounts": [
      "Kilka kont SIP\nSzybkie przełączanie",
      "Korzystaj z kont różnych operatorów i central. Wybierz konto przed rozmową bez zmiany aplikacji."
    ],
    "compact": [
      "Tryb pełny i kompaktowy",
      "Tryb kompaktowy zachowuje podstawowe przyciski rozmowy i zostawia miejsce na inne okna."
    ],
    "history": "Historia połączeń i kontakty",
    "historyTab": "Historia",
    "contactsTab": "Kontakty",
    "direction": "Kierunek",
    "outgoing": "Połączenie wychodzące",
    "incoming": "Połączenie przychodzące",
    "missed": "Nieodebrane połączenie",
    "declined": "Odrzucono",
    "failed": "Nieudane połączenie",
    "started": "Początek",
    "ended": "Koniec",
    "duration": "Czas trwania",
    "noteLabel": "Notatka",
    "contactNote": "Kontakt służbowy. Omówienie projektu i ustalanie spotkań."
  },
  "pt": {
    "accounts": [
      "Várias contas SIP\nMudança rápida",
      "Use contas de fornecedores e centrais diferentes. Escolha a conta antes de ligar, sem mudar de aplicação."
    ],
    "compact": [
      "Modos completo e compacto",
      "O modo compacto mantém os controlos essenciais de chamada e deixa espaço para outras janelas."
    ],
    "history": "Histórico de chamadas e contactos",
    "historyTab": "Histórico",
    "contactsTab": "Contactos",
    "direction": "Direção",
    "outgoing": "Chamada de saída",
    "incoming": "Chamada recebida",
    "missed": "Chamada não atendida",
    "declined": "Rejeitada",
    "failed": "Chamada falhada",
    "started": "Início",
    "ended": "Fim",
    "duration": "Duração",
    "noteLabel": "Nota",
    "contactNote": "Contacto de trabalho. Discussão de projetos e coordenação de reuniões."
  }
};
 const accountHeadings={ru:'Множество SIP-аккаунтов',en:'Multiple SIP accounts',uk:'Кілька SIP-акаунтів',de:'Mehrere SIP-Konten',fr:'Plusieurs comptes SIP',es:'Varias cuentas SIP',it:'Più account SIP',pl:'Wiele kont SIP',pt:'Várias contas SIP'};
 const detailTerms={
  ru:['Код завершения','Описание SIP','Завершил вызов','Абонент / АТС','Вы','Ошибка соединения'],
  en:['End code','SIP description','Call ended by','Peer / PBX','You','Connection error'],
  uk:['Код завершення','Опис SIP','Завершив виклик','Абонент / АТС','Ви','Помилка з’єднання'],
  de:['Endcode','SIP-Beschreibung','Anruf beendet durch','Gegenstelle / Anlage','Sie','Verbindungsfehler'],
  fr:['Code de fin','Description SIP','Appel terminé par','Correspondant / standard','Vous','Erreur de connexion'],
  es:['Código de fin','Descripción SIP','Llamada finalizada por','Interlocutor / central','Tú','Error de conexión'],
  it:['Codice finale','Descrizione SIP','Chiamata terminata da','Interlocutore / centralino','Tu','Errore di connessione'],
  pl:['Kod zakończenia','Opis SIP','Połączenie zakończył','Rozmówca / centrala','Ty','Błąd połączenia'],
  pt:['Código de fim','Descrição SIP','Chamada terminada por','Interlocutor / central','Você','Erro de ligação']
 };
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const svg=n=>`<svg aria-hidden="true"><use href="#i-${n}"></use></svg>`;
 // Same 24-unit construction as NeoIcon("person") in desktop-app/Icons.kt.
 const historyKinds=['outgoing','incoming','missed','outgoing','declined','incoming','failed','outgoing','missed','incoming','failed','declined','outgoing','incoming','missed','outgoing'];
 function callData(i){const kind=historyKinds[i],connected=kind==='outgoing'||kind==='incoming',start=10*3600+(42-i)*60,duration=connected?60*(1+i%4)+12+i*2:0;const clock=n=>[Math.floor(n/3600),Math.floor(n/60)%60,n%60].map(v=>String(v).padStart(2,'0')).join(':');return{kind,incoming:kind==='incoming'||kind==='missed'||kind==='declined',start:clock(start),end:clock(start+(connected?duration:12+i%4*3)),duration:clock(duration).slice(3),sip:connected?'200 · OK':kind==='failed'?'480 · Temporarily Unavailable':kind==='declined'?'603 · Decline':'487 · Request Terminated'};}
 function historyIcon(kind){const handset='<path d="M5 3 8 7 6 9Q9 15 15 18l2-2 4 3q-1 4-4 3C8 20 2 13 2 6q0-3 3-3Z"/>';const marks={outgoing:'<path d="m13 10 7-7m-5 0h5v5"/>',incoming:'<path d="m20 3-7 7V5m0 5h5"/>',missed:'<path d="m13 3 8 8m0-8-8 8"/>',declined:'<path d="m13 3 8 8m0-8-8 8"/>',failed:'<path d="m13 3 8 8m0-8-8 8"/>'};return `<svg viewBox="0 0 24 24" aria-hidden="true">${handset}${marks[kind]}</svg>`;}
 // Readable Office card first; a horizontal fan on desktop, a two-column fan on phones.
 function accountPose(progress,index,width=1080){
  const t=Math.max(0,Math.min(1,progress)),mobile=width<620;
  const cardWidth=Math.min(240,(width-20)/(mobile?2:4)-12),gap=mobile?12:18;
  const x=mobile?((index%2)-.5)*(cardWidth+gap):(index-1.5)*(cardWidth+gap);
  const y=mobile?Math.floor(index/2)*102:Math.abs(index-1.5)*12;
  return{x:x*t||0,y:18+(1-t)*index*6+y*t,z:0,angle:0,opacity:1,scale:.985+.015*t};
 }
 function mount(host,{lang='ru',onViewport=()=>{},onMount=()=>{}}={}){
  let locale=copy[lang]?lang:'en',theme=document.documentElement.dataset.theme||'light',active=true,destroyed=false,compact=false,listView='history';
  let io,ro,resizeFrame=0,native,productDetails,connectionScenes,compactTimeline,compactTurn,compactStarted=false,listTimeline,listStarted=false,listCycle=0,listOffset=0,listTarget=0,listAnimations=[],accountTimeline,accountStarted=false,accountOpened=false,accountReady=false,accountAwaitEntry=false,accountWidth=0,accountAnimations=[],lastAccountScroll=window.scrollY||0;
  let accountScrollingUp=false;
  const visible=new Set(),reduce=matchMedia('(prefers-reduced-motion: reduce)'),{SceneTimeline,TransitionController}=window.AltSIPTour;
  const people=window.AltSIPFixtures.people;
  const $=s=>host.querySelector(s),$$=s=>[...host.querySelectorAll(s)],c=()=>copy[locale];
  const heading=(title,body='')=>`<div class="hp-heading"><h2>${esc(title)}</h2>${body?`<p>${esc(body)}</p>`:''}</div>`;
  function detailContent(index){const d=c(),t=detailTerms[locale],contact=listView==='contacts',[name,phone]=people[index],data=callData(index),connected=data.duration!=='00:00',sip=data.sip.split(' · ');return `<div class="hp-detail-head"><span class="hp-detail-symbol" data-kind="${contact?'contact':data.kind}">${contact?svg('person'):historyIcon(data.kind)}</span><div><h3>${esc(contact?name:phone)}</h3>${!contact?`<p class="hp-detail-kind" data-kind="${data.kind}">${esc(d[data.kind])}</p>`:''}</div></div>${contact?`<div class="hp-contact-note"><span>${esc(d.noteLabel)}</span><p>${esc(d.contactNote)}</p></div>`:`<dl>${[[d.started,'19.10.2026 '+data.start],[d.ended,'19.10.2026 '+data.end],[d.duration,data.duration],[d.direction,d[data.incoming?'incoming':'outgoing']],[t[0],sip[0]],[t[1],sip[1]||'—'],[t[2],data.kind==='declined'?t[4]:data.kind==='failed'?t[5]:t[3]],...(connected?[['DTMF','2 · 5 · #']]:[])].map(([label,value])=>`<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>`}`;}
  function listMarkup(){const d=c(),contact=listView==='contacts';const rows=people.map(([name,phone],i)=>{const data=callData(i);return `<div class="hp-floating-row" data-entry="${i}" data-kind="${contact?'contact':data.kind}"><span class="hp-row-icon">${contact?svg('person'):historyIcon(data.kind)}</span><span class="hp-row-copy"><strong>${esc(contact?name:phone)}</strong><small>${esc(contact?phone:'19.10 · '+data.start.slice(0,5)+' · '+data.duration)}</small>${contact?'':`<small class="hp-row-status">${esc(d[data.kind])}</small>`}</span><span class="hp-row-more" aria-hidden="true">⋮</span></div>`;}).join('');return `<div class="hp-list-window" aria-hidden="true"><div class="hp-floating-rows"><div class="hp-rows-cycle">${rows}</div><div class="hp-rows-cycle">${rows}</div></div></div><article class="hp-list-detail">${detailContent(5)}</article>`;}
  function trioMarkup(){return '<div class="hp-product-details"></div>';}
  function markup(){const d=c();return `<div class="home-overview home-premium" lang="${locale}">
   <section class="hp-section hp-accounts" data-hp-scene="accounts">${heading(accountHeadings[locale],d.accounts[1])}<div class="hp-account-stage"><div class="hp-account-stack">${['Office','Support','Personal','Secondary'].map((name,i)=>`<div class="hp-account" style="--slot:${i}"><span class="hp-account-dot"></span><span><strong>${name}</strong><small>${12025550142+i}</small></span><i class="hp-account-edge" aria-hidden="true"></i></div>`).join('')}</div></div></section>
   <section class="hp-section hp-compact" data-hp-scene="compact">${heading(d.compact[0],d.compact[1])}<div class="hp-compact-stage"><div class="hp-compact-position"><div class="hp-compact-turn"><div class="hp-compact-depth" aria-hidden="true">${Array.from({length:10},(_,i)=>`<i style="--depth:${i}"></i>`).join('')}</div><div class="hp-native-frame" inert aria-hidden="true"><div class="hp-native"></div></div><div class="hp-compact-back" aria-hidden="true"><img src="assets/mark.svg" alt=""></div></div></div></div></section>
   <div class="hp-audio-slot" data-home-audio="sound"></div><div class="hp-audio-slot" data-home-audio="echo"></div><div class="hp-audio-slot" data-home-audio="record"></div>
   <section class="hp-section hp-history" data-hp-scene="lists"><div class="hp-history-copy">${heading(d.history)}<div class="hp-modes" role="group" aria-label="${esc(d.history)}"><span class="hp-mode-track" aria-hidden="true"><span class="hp-mode-indicator" hidden></span></span><button type="button" data-hp-list="history" aria-pressed="${listView==='history'}">${esc(d.historyTab)}</button><button type="button" data-hp-list="contacts" aria-pressed="${listView==='contacts'}">${esc(d.contactsTab)}</button></div></div><div class="hp-list-scene" data-list="${listView}"></div></section>
   ${trioMarkup()}
   <div class="hp-connection-scenes"></div>
  </div>`;}
  function fit(){if(destroyed||!native)return;const frame=$('.hp-compact-position'),slot=$('.hp-native'),size=native.getSize(),available=frame.parentElement.clientWidth,scale=Math.min(.75,(available-12)/size.width,420/size.height);frame.style.width=`${size.width*scale}px`;frame.style.height=`${size.height*scale}px`;slot.style.transform=`scale(${scale})`;}
  function queueFit(){cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(fit);}
  function ensure(){if(native)return;native=window.AltSIPDemo.mount($('.hp-native'),{initialView:compact?'compact':'dial',interactionScope:'compact',locale});native.setTheme(theme);native.setActive(false);$('.hp-native').addEventListener('sip-demo-resize',queueFit);compactTurn=new TransitionController($('.hp-compact-turn'),()=>!reduce.matches,{duration:1460});compactTimeline=new SceneTimeline([{at:2400,run:()=>compactTurn.turn()},{at:2620,run(){compact=!compact;native.preview(compact?'compact':'dial');queueFit();}},{at:3860,run(){}}],{onComplete(){if(running()&&visible.has('compact'))compactTimeline.start();else compactStarted=false;}});queueFit();}
  function running(){return active&&!document.hidden&&!reduce.matches&&!destroyed;}
  function updateCompact(){if(!compactTimeline)return;if(running()&&visible.has('compact')){if(!compactStarted){compactStarted=true;compactTimeline.start();}else compactTimeline.resume();compactTurn.resume();}else{compactTimeline.pause();compactTurn.pause();if(reduce.matches){compactTimeline.reset();compactTurn.cancel();compactStarted=false;if(compact){compact=false;native.preview('dial');queueFit();}}}}
  function clearListAnimations(){listAnimations.forEach(a=>a.cancel());listAnimations=[];}
  function animateList(node,frames,options){const a=node?.animate?.(frames,options);if(a)listAnimations.push(a);}
  function flowList(){
   clearListAnimations();const scene=$('.hp-list-scene'),rows=$('.hp-floating-rows');scene.dataset.phase='flow';
   $$('[data-entry]').forEach(row=>row.classList.remove('hp-row-selected'));
   listOffset=listTarget%(people.length*87);const cruise=listOffset+720;
   listTarget=Math.ceil((cruise+444)/87)*87-194;
   // The brake distance varies with row alignment; match its entry slope to
   // the 480px/s cruise so the list does not lurch when deceleration begins.
   const brakeDistance=listTarget+8-cruise,brakeStartY=.3*480/brakeDistance;
   animateList(rows,[{transform:`translateY(${-listOffset}px)`,offset:0,easing:'linear'},
    {transform:`translateY(${-cruise}px)`,offset:1500/2780,easing:`cubic-bezier(.3,${brakeStartY},.65,1)`},
    {transform:`translateY(${-listTarget-8}px)`,offset:2500/2780,easing:'cubic-bezier(.28,0,.62,1)'},
    {transform:`translateY(${-listTarget}px)`,offset:1}],{duration:2780,fill:'forwards'});
  }
  function updateListSelection(){
   const index=Math.round((listTarget+194)/87)%people.length;
   $('.hp-list-detail').innerHTML=detailContent(index);$('.hp-list-scene').dataset.phase='select';
   $$('[data-entry]').forEach(row=>{const selected=+row.dataset.entry===index;row.classList.toggle('hp-row-selected',selected);
    if(selected)animateList(row,[{transform:'scale(1)'},{transform:'scale(.965)',offset:.4},{transform:'scale(1)'}],{duration:300,easing:'ease-out'});
   });
  }
  function createListTimeline(){listTimeline?.reset();clearListAnimations();listCycle=0;listTarget=0;listStarted=false;
   listTimeline=new SceneTimeline([{at:0,run:flowList},{at:2780,run:updateListSelection},
    {at:3130,run:()=>{$('.hp-list-scene').dataset.phase='detail';}},
    {at:5780,run:()=>{$('.hp-list-scene').dataset.phase='return';}},
    {at:6180,run(){}}],{onComplete(){listCycle++;if(running()&&visible.has('lists'))listTimeline.start();else listStarted=false;}});
  }
  function hydrateHistory(){const scene=$('.hp-list-scene');if(scene&&!scene.firstElementChild)scene.innerHTML=listMarkup();}
  function updateList(){const run=running()&&visible.has('lists');$('.hp-list-scene')?.classList.toggle('hp-running',run);
   if(run){if(!listStarted){listStarted=true;listTimeline.start();}else listTimeline.resume();listAnimations.forEach(a=>{if(a.playState==='paused')a.play();});}
   else{listTimeline.pause();listAnimations.forEach(a=>{if(a.playState==='running')a.pause();});}
  }
  const accountTransform=p=>`translate3d(${p.x}px,${p.y}px,${p.z}px) scale(${p.scale})`;
  function currentAccountTransform(card){const current=typeof getComputedStyle==='function'?getComputedStyle(card).transform:null;return current&&current!=='none'?current:card.style.transform;}
  function layoutAccounts(){const width=$('.hp-account-stage')?.getBoundingClientRect().width;if(!width||Math.abs(width-accountWidth)<2)return;if(accountAnimations.some(a=>a.playState==='running')&&Math.abs(width-accountWidth)<24)return;accountWidth=width;accountAnimations.forEach(a=>a.cancel());accountAnimations=[];$$('.hp-account').forEach((card,i)=>{card.style.transform=accountTransform(accountPose(accountOpened?1:0,i,width));});}
  function openAccounts(){accountOpened=true;accountAwaitEntry=false;const width=$('.hp-account-stage').getBoundingClientRect().width;accountWidth=width;const cards=$$('.hp-account'),from=cards.map(currentAccountTransform);accountAnimations.forEach(a=>a.cancel());accountAnimations=[];cards.forEach((card,i)=>{const start=from[i]||accountTransform(accountPose(0,i,width)),to=accountTransform(accountPose(1,i,width));card.style.transform=to;if(!reduce.matches&&card.animate)accountAnimations.push(card.animate([{transform:start},{transform:to}],{duration:980,delay:i*45,easing:'cubic-bezier(.22,.72,.28,1)',fill:'backwards'}));});accountAnimations.forEach(a=>a.onfinish=layoutAccounts);}
  function foldAccounts(){
   accountTimeline.reset();const width=$('.hp-account-stage').getBoundingClientRect().width||accountWidth;
   const cards=$$('.hp-account'),from=cards.map(currentAccountTransform),animate=accountOpened&&!reduce.matches;
   accountAnimations.forEach(animation=>animation.cancel());accountAnimations=[];
   accountStarted=accountOpened=accountReady=false;accountAwaitEntry=true;
   cards.forEach((card,i)=>{const to=accountTransform(accountPose(0,i,width));card.style.transform=to;
    if(animate&&card.animate)accountAnimations.push(card.animate([{transform:from[i]||to},{transform:to}],{duration:760,delay:(3-i)*24,easing:'cubic-bezier(.22,.72,.28,1)',fill:'backwards'}));
   });accountWidth=width;accountAnimations.forEach(a=>a.onfinish=layoutAccounts);
  }
  function accountExposure(r){return r?.height?Math.max(0,Math.min(r.bottom,innerHeight)-Math.max(r.top,0))/r.height:0;}
  function onScroll(){
   const y=window.scrollY||0,up=y<lastAccountScroll;lastAccountScroll=y;accountScrollingUp=up;if(reduce.matches||!active||document.hidden)return;
   if(y<=2&&(accountOpened||accountStarted)){foldAccounts();return;}
   // The observer owns offscreen entry/exit. Long-page scrolling should not
   // synchronously measure an account section that is nowhere near the screen.
   if(!visible.has('accounts'))return;
   const section=$('.hp-accounts')?.getBoundingClientRect();if(!section)return;
   const retreat=up&&accountOpened&&$('.hp-account-stage').getBoundingClientRect().top>innerHeight*.6;
   if((accountOpened||accountStarted)&&(y<=2||section.top>=innerHeight-8||retreat)){foldAccounts();return;}
   if(accountAwaitEntry&&y>2&&!up&&accountExposure(section)>=.5){accountReady=true;accountAwaitEntry=false;updateAccounts();}
  }
  function updateAccounts(){if(reduce.matches){accountTimeline?.reset();accountAnimations.forEach(a=>a.cancel());accountAnimations=[];if(!accountOpened)openAccounts();accountStarted=true;accountReady=false;return;}const run=running()&&visible.has('accounts');if(run&&accountReady){if(!accountStarted){accountStarted=true;accountTimeline.start();}else accountTimeline.resume();}else accountTimeline.pause();accountAnimations.forEach(a=>{if(run&&a.playState==='paused')a.play();else if(!run&&a.playState==='running')a.pause();});if(!run&&!accountOpened&&accountAnimations.length){accountAnimations.forEach(a=>a.cancel());accountAnimations=[];}}
  function updateMotion(){if(visible.has('lists'))hydrateHistory();updateAccounts();updateCompact();updateList();productDetails?.setActive(active);connectionScenes?.setActive(active);}
  function positionHistoryPill(){const switcher=$('.hp-modes'),pill=$('.hp-mode-indicator');if(!switcher||!pill)return;switcher.style.setProperty('--history-index',listView==='contacts'?1:0);pill.hidden=false;}
  function setup(){host.innerHTML=markup();onMount();positionHistoryPill();productDetails=window.AltSIPProductDetails?.mount($('.hp-product-details'),{lang:locale,active});connectionScenes=window.AltSIPConnectionScenes?.mount($('.hp-connection-scenes'),{lang:locale,active});createListTimeline();accountTimeline=new SceneTimeline([{at:320,run:openAccounts},{at:1450,run(){}}]);host.addEventListener('click',onClick);io=new IntersectionObserver(entries=>{for(const e of entries){const name=e.target.dataset.hpScene;if(e.isIntersecting){visible.add(name);e.target.classList.add('hp-visible');if(name==='compact')ensure();if(name==='accounts'&&e.intersectionRatio>=.5&&(!accountAwaitEntry||(!accountScrollingUp&&(window.scrollY||0)>2))){accountReady=true;accountAwaitEntry=false;}}else{visible.delete(name);if(name==='accounts'&&(accountOpened||accountStarted)&&e.boundingClientRect?.top>=innerHeight-8)foldAccounts();}}updateMotion();onViewport();},{threshold:[0,.5],rootMargin:'0px'});$$('[data-hp-scene]').forEach(e=>io.observe(e));ro=new ResizeObserver(()=>{layoutAccounts();positionHistoryPill();if(native)queueFit();onViewport();});ro.observe(host);if(reduce.matches)updateAccounts();}
  let listSwitchJob=0;
  function onClick(e){const b=e.target.closest('button');if(!b||!host.contains(b))return;if(b.dataset.hpList&&b.dataset.hpList!==listView){listView=b.dataset.hpList;positionHistoryPill();$$('[data-hp-list]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.hpList===listView)));const job=++listSwitchJob;requestAnimationFrame(()=>setTimeout(()=>{if(job!==listSwitchJob||destroyed)return;const scene=$('.hp-list-scene');if(!scene)return;scene.dataset.list=listView;scene.innerHTML=listMarkup();createListTimeline();updateList();},0));}}
  function teardown(){listSwitchJob++;io?.disconnect();ro?.disconnect();compactTimeline?.reset();compactTurn?.cancel();listTimeline?.reset();accountTimeline?.reset();clearListAnimations();accountAnimations.forEach(a=>a.cancel());accountAnimations=[];accountStarted=accountOpened=accountReady=accountAwaitEntry=false;accountWidth=0;compactTimeline=compactTurn=null;compactStarted=false;cancelAnimationFrame(resizeFrame);native?.destroy();native=null;productDetails?.destroy();productDetails=null;connectionScenes?.destroy();connectionScenes=null;visible.clear();host.removeEventListener('click',onClick);}
  const visibility=()=>updateMotion();document.addEventListener('visibilitychange',visibility);reduce.addEventListener('change',visibility);window.addEventListener('scroll',onScroll,{passive:true});setup();
  return{setLocale(code){const next=copy[code]?code:'en';if(next===locale)return;teardown();locale=next;setup();},setTheme(value){theme=value;native?.setTheme(value);onViewport();},setActive(value){active=!!value;if(active)requestAnimationFrame(positionHistoryPill);updateMotion();},destroy(){if(destroyed)return;teardown();destroyed=true;document.removeEventListener('visibilitychange',visibility);reduce.removeEventListener('change',visibility);window.removeEventListener('scroll',onScroll);host.innerHTML='';}};
 }
 window.AltSIPHome={mount,accountPose};
})();
