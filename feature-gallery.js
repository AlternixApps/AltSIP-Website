/* Browser-only fragments for the six additional cards. */
(() => {
 'use strict';
 const translations = {
 "ru": [
  "Назад",
  "Вперёд",
  "Оценка сети",
  "Пакеты RTP",
  "Аудиопоток",
  "кбит/с",
  "Кодек",
  "Оценка соединения по потерям пакетов, задержке и джиттеру. Показатель описывает сеть, а не звучание голоса.",
  "Правила набора|Префиксы и суффиксы|Измените префикс в поле набора. AltSIP добавит его к номеру перед вызовом.",
  "Переадресация|По заданному условию|Задайте номер назначения и время ожидания.",
  "Статусы контактов|Кто сейчас на линии|Индикатор рядом с именем показывает состояние коллеги, если SIP-сервер передаёт эти данные.",
  "Звонки по ссылке|С сайта в AltSIP|Нажмите на телефонный номер на сайте, чтобы открыть его в AltSIP и позвонить.",
  "Горячие клавиши|Управление без мыши|Назначьте сочетания для ответа, завершения звонка, записи и других действий.",
  "Перехват звонка|Ответ за коллегу|Если АТС поддерживает перехват и ваша линия свободна, ответьте на вызов коллеги из списка контактов.",
  "Вызов|Входящий|Переадресовано|В сети|Занят|Не в сети|Открыть в AltSIP|Ответить|Перехватить|Коллега|Поддержка|Сохранить|Изменить префикс"
 ],
 "en": [
  "Previous",
  "Next",
  "Network score",
  "RTP packets",
  "Audio bitrate",
  "kbps",
  "Codec",
  "The connection estimate uses packet loss, latency and jitter. It describes the network, not how the voice sounds.",
  "Dialling rules|Prefixes and suffixes|Change the prefix in the dial field. AltSIP adds it to the number before calling.",
  "Call forwarding|By a chosen rule|Choose a destination and a delay.",
  "Contact status|See who is on a call|A dot by each name shows their status when your SIP server provides it.",
  "Call links|From a website to AltSIP|Click a phone number on a website to open it in AltSIP and call.",
  "Keyboard shortcuts|Control without a mouse|Assign keys to answer, hang up, record and more.",
  "Call pickup|Answer for a colleague|If your PBX supports pickup and your line is free, answer a colleague’s call from Contacts.",
  "Call|Incoming|Forwarded|Online|Busy|Offline|Open in AltSIP|Answer|Pick up|Colleague|Support|Save|Edit prefix"
 ],
 "uk": [
  "Назад",
  "Далі",
  "Оцінка мережі",
  "Пакети RTP",
  "Аудіопотік",
  "кбіт/с",
  "Кодек",
  "Оцінка з’єднання за втратами пакетів, затримкою та джитером. Показник описує мережу, а не звучання голосу.",
  "Правила набору|Префікси та суфікси|Змініть префікс у полі набору. AltSIP додасть його до номера перед викликом.",
  "Переадресація|За заданою умовою|Укажіть номер призначення й час очікування.",
  "Стани контактів|Хто зараз на лінії|Крапка біля імені показує стан колеги, якщо SIP-сервер передає ці дані.",
  "Дзвінки за посиланням|Із сайту в AltSIP|Натисніть номер телефону на сайті, щоб відкрити його в AltSIP і зателефонувати.",
  "Гарячі клавіші|Керування без миші|Налаштуйте клавіші для відповіді, завершення дзвінка й запису.",
  "Перехоплення дзвінка|Відповідь за колегу|Якщо АТС підтримує перехоплення й ваша лінія вільна, дайте відповідь зі списку контактів.",
  "Виклик|Вхідний|Переадресовано|У мережі|Зайнятий|Не в мережі|Відкрити в AltSIP|Відповісти|Перехопити|Колега|Підтримка|Зберегти|Змінити префікс"
 ],
 "de": [
  "Zurück",
  "Weiter",
  "Netzbewertung",
  "RTP-Pakete",
  "Audio-Bitrate",
  "kbit/s",
  "Codec",
  "Die Verbindung wird anhand von Paketverlust, Latenz und Jitter bewertet. Der Wert beschreibt das Netz, nicht den Klang der Stimme.",
  "Wählregeln|Präfixe und Suffixe|Ändern Sie das Präfix im Wählfeld. AltSIP ergänzt es vor dem Anruf.",
  "Rufumleitung|Nach einer festgelegten Regel|Wählen Sie ein Ziel und eine Wartezeit.",
  "Kontaktstatus|Wer gerade telefoniert|Der Punkt neben dem Namen zeigt den Status, sofern Ihr SIP-Server ihn meldet.",
  "Anruf per Link|Von der Website zu AltSIP|Klicken Sie auf einer Website auf eine Telefonnummer, um sie in AltSIP zu öffnen und anzurufen.",
  "Tastenkürzel|Steuerung ohne Maus|Legen Sie Tasten für Annahme, Auflegen oder Aufzeichnung fest.",
  "Anruf übernehmen|Für Kollegen abheben|Ist Ihre Leitung frei und unterstützt die Anlage Pickup, übernehmen Sie den Anruf in der Kontaktliste.",
  "Anrufen|Eingehend|Umgeleitet|Online|Besetzt|Offline|In AltSIP öffnen|Annehmen|Übernehmen|Kollege|Support|Speichern|Vorwahl ändern"
 ],
 "es": [
  "Anterior",
  "Siguiente",
  "Calidad de red",
  "Paquetes RTP",
  "Tasa de audio",
  "kb/s",
  "Códec",
  "La conexión se evalúa según la pérdida de paquetes, la latencia y la fluctuación. El indicador describe la red, no cómo suena la voz.",
  "Reglas de marcación|Prefijos y sufijos|Cambia el prefijo en el marcador. AltSIP lo añade al número antes de llamar.",
  "Desvío de llamadas|Según una regla definida|Elige un destino y el tiempo de espera.",
  "Estado de contactos|Quién está en línea|El punto junto al nombre indica el estado cuando el servidor SIP lo comunica.",
  "Llamar desde un enlace|De un sitio web a AltSIP|Pulsa un número de teléfono en un sitio web para abrirlo en AltSIP y llamar.",
  "Atajos de teclado|Control sin ratón|Asigna teclas para contestar, colgar o grabar.",
  "Captura de llamadas|Contesta por un compañero|Si tu línea está libre y la centralita lo permite, captura la llamada desde Contactos.",
  "Llamar|Entrante|Desviada|En línea|Ocupado|Sin conexión|Abrir en AltSIP|Contestar|Capturar|Compañero|Soporte|Guardar|Editar prefijo"
 ],
 "fr": [
  "Précédent",
  "Suivant",
  "Score réseau",
  "Paquets RTP",
  "Débit audio",
  "kbit/s",
  "Codec",
  "La connexion est évaluée selon les pertes de paquets, la latence et la gigue. Cet indicateur décrit le réseau, pas le rendu de la voix.",
  "Règles de numérotation|Préfixes et suffixes|Modifiez le préfixe dans le champ de numérotation. AltSIP l’ajoute avant l’appel.",
  "Renvoi d’appel|Selon une règle définie|Choisissez un numéro et un délai.",
  "Statut des contacts|Qui est en ligne|Le point à côté du nom indique le statut si le serveur SIP le fournit.",
  "Appels par lien|Du site vers AltSIP|Cliquez sur un numéro de téléphone sur un site pour l’ouvrir dans AltSIP et appeler.",
  "Raccourcis clavier|Contrôle sans souris|Attribuez des touches pour répondre, raccrocher ou enregistrer.",
  "Interception d’appel|Répondez pour un collègue|Si la ligne est libre et le standard compatible, interceptez l’appel depuis les contacts.",
  "Appeler|Entrant|Renvoyé|En ligne|Occupé|Hors ligne|Ouvrir dans AltSIP|Répondre|Intercepter|Collègue|Assistance|Enregistrer|Modifier le préfixe"
 ],
 "it": [
  "Indietro",
  "Avanti",
  "Qualità di rete",
  "Pacchetti RTP",
  "Bitrate audio",
  "kbit/s",
  "Codec",
  "La connessione è valutata in base a perdita di pacchetti, latenza e jitter. Il valore descrive la rete, non il suono della voce.",
  "Regole di composizione|Prefissi e suffissi|Modifica il prefisso nel tastierino. AltSIP lo aggiunge al numero prima di chiamare.",
  "Deviazione di chiamata|Secondo una regola impostata|Scegli destinazione e attesa.",
  "Stato dei contatti|Chi è in linea|Il punto accanto al nome indica lo stato se il server SIP lo comunica.",
  "Chiamare da un link|Dal sito ad AltSIP|Tocca un numero di telefono su un sito per aprirlo in AltSIP e chiamare.",
  "Scorciatoie da tastiera|Controllo senza mouse|Assegna tasti per rispondere, riagganciare o registrare.",
  "Risposta per un collega|Intercetta la chiamata|Se la linea è libera e il centralino lo supporta, rispondi dalla lista dei contatti.",
  "Chiama|In arrivo|Deviata|Online|Occupato|Offline|Apri in AltSIP|Rispondi|Intercetta|Collega|Assistenza|Salva|Modifica prefisso"
 ],
 "pl": [
  "Wstecz",
  "Dalej",
  "Ocena sieci",
  "Pakiety RTP",
  "Przepływność audio",
  "kb/s",
  "Kodek",
  "Ocena połączenia uwzględnia utratę pakietów, opóźnienie i jitter. Wskaźnik opisuje sieć, a nie brzmienie głosu.",
  "Reguły wybierania|Prefiksy i sufiksy|Zmień prefiks w polu wybierania. AltSIP doda go do numeru przed połączeniem.",
  "Przekierowanie|Według wybranej reguły|Wybierz cel i czas oczekiwania.",
  "Stan kontaktów|Kto jest na linii|Kropka przy nazwie pokazuje stan, jeśli serwer SIP go udostępnia.",
  "Połączenia z linku|Ze strony do AltSIP|Kliknij numer telefonu na stronie, aby otworzyć go w AltSIP i zadzwonić.",
  "Skróty klawiszowe|Sterowanie bez myszy|Przypisz klawisze do odbierania, kończenia i nagrywania.",
  "Przejęcie połączenia|Odbierz za kolegę|Gdy linia jest wolna, a centrala to obsługuje, przejmij połączenie z listy kontaktów.",
  "Zadzwoń|Przychodzące|Przekierowane|W sieci|Zajęty|Poza siecią|Otwórz w AltSIP|Odbierz|Przejmij|Kolega|Wsparcie|Zapisz|Zmień prefiks"
 ],
 "pt": [
  "Anterior",
  "Seguinte",
  "Qualidade da rede",
  "Pacotes RTP",
  "Débito de áudio",
  "kbit/s",
  "Codec",
  "A ligação é avaliada pela perda de pacotes, latência e jitter. O indicador descreve a rede, não o som da voz.",
  "Regras de marcação|Prefixos e sufixos|Altere o prefixo no marcador. O AltSIP adiciona-o ao número antes de ligar.",
  "Reencaminhamento|Segundo uma regra definida|Escolha um destino e o tempo de espera.",
  "Estado dos contactos|Quem está em linha|O ponto junto ao nome mostra o estado quando o servidor SIP o disponibiliza.",
  "Chamadas por ligação|Do site para o AltSIP|Clique num número de telefone num site para o abrir no AltSIP e ligar.",
  "Atalhos de teclado|Controlo sem rato|Atribua teclas para atender, desligar ou gravar.",
  "Captura de chamada|Atenda por um colega|Se a linha estiver livre e a central o permitir, atenda a chamada a partir dos contactos.",
  "Ligar|A receber|Reencaminhada|Em linha|Ocupado|Offline|Abrir no AltSIP|Atender|Capturar|Colega|Apoio|Guardar|Alterar prefixo"
 ]
};
 const phone = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2c-2-.5-4 1-4 4 0 7 9 16 16 16 3 0 4.5-2 4-4l-4-4c-.7-.7-1.5-.6-2.3.2l-1.4 1.4a14 14 0 0 1-5.9-5.9l1.4-1.4c.8-.8.9-1.6.2-2.3z" fill="currentColor"/></svg>';
 const escape = text => String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const endLabels={ru:'Завершить',en:'End call',uk:'Завершити',de:'Auflegen',es:'Colgar',fr:'Raccrocher',it:'Termina chiamata',pl:'Zakończ',pt:'Desligar'};
 const rejectLabels={ru:'Отклонить',en:'Decline',uk:'Відхилити',de:'Ablehnen',es:'Rechazar',fr:'Refuser',it:'Rifiuta',pl:'Odrzuć',pt:'Rejeitar'};
 const incomingTitles={ru:'Входящий вызов',en:'Incoming call',uk:'Вхідний виклик',de:'Eingehender Anruf',es:'Llamada entrante',fr:'Appel entrant',it:'Chiamata in arrivo',pl:'Połączenie przychodzące',pt:'Chamada recebida'};
 const presenceLabels={ru:['В сети','Занят','Не в сети'],en:['Online','Busy','Offline'],uk:['У мережі','Зайнятий','Не в мережі'],de:['Online','Besetzt','Offline'],es:['En línea','Ocupado','Sin conexión'],fr:['En ligne','Occupé','Hors ligne'],it:['Online','Occupato','Offline'],pl:['W sieci','Zajęty','Poza siecią'],pt:['Em linha','Ocupado','Offline']};
 const subtitles={
  ru:['Префиксы и суффиксы','По заданному условию','Доступность коллег','С сайта в AltSIP','Управление без мыши','Вызов коллеги'],
  en:['Prefixes and suffixes','By a chosen rule','Colleague availability','From a website to AltSIP','Control without a mouse','A colleague’s call'],
  uk:['Префікси та суфікси','За заданою умовою','Доступність колег','Із сайту в AltSIP','Керування без миші','Виклик колеги'],
  de:['Präfixe und Suffixe','Nach einer festgelegten Regel','Erreichbarkeit im Team','Von der Website zu AltSIP','Steuerung ohne Maus','Anruf beim Kollegen'],
  es:['Prefijos y sufijos','Según una regla definida','Disponibilidad del equipo','De un sitio web a AltSIP','Control sin ratón','Llamada de un compañero'],
  fr:['Préfixes et suffixes','Selon une règle définie','Disponibilité des collègues','Du site vers AltSIP','Contrôle sans souris','Appel d’un collègue'],
  it:['Prefissi e suffissi','Secondo una regola impostata','Disponibilità dei colleghi','Dal sito ad AltSIP','Controllo senza mouse','Chiamata a un collega'],
  pl:['Prefiksy i sufiksy','Według wybranej reguły','Dostępność zespołu','Ze strony do AltSIP','Sterowanie bez myszy','Telefon do kolegi'],
  pt:['Prefixos e sufixos','Segundo uma regra definida','Disponibilidade da equipa','Do site para o AltSIP','Controlo sem rato','Chamada de um colega']
 };
 const shell=(kind,body)=>`<div class="fg-scene fg-${kind}" data-phase="idle">${body}</div>`;
 const dial=(number,chip='')=>`<div class="fg-dial"><span class="fg-chip ${chip?'':'fg-empty'}">${chip}</span><span class="fg-number">${number}</span><span class="fg-erase" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9L2 12zM12 9l6 6m0-6-6 6"/></svg></span></div>`;
 const active=(number,end)=>`<div class="fg-active"><span class="fg-clock">00:00</span>${dial(number)}<div class="fg-action fg-end">${phone}<span>${end}</span></div></div>`;
 const incomingCard=(label,name,answer,reject,variant='')=>`<div class="fg-incoming ${variant}"><small>${label}</small><strong>${name}</strong><div class="fg-choices"><span>${answer}</span><span>${reject}</span></div></div>`;
 const contact=(name,number,state,kind,pickup='')=>`<div class="fg-contact"><div class="fg-contact-main"><div class="fg-contact-name"><strong>${name}</strong><span class="fg-dot" data-presence="${kind}" data-hint="${state}" aria-label="${state}" tabindex="0"></span></div><small>${number}</small></div>${pickup?`<span class="fg-pickup-button" aria-label="${pickup}">${phone}</span>`:''}<span class="fg-more" aria-hidden="true">···</span></div>`;
 const cursor='<svg class="fg-cursor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.92098 2.29927C6.93571 1.53286 5.5 2.23498 5.5 3.48325V20.492C5.5 21.9142 7.2945 22.538 8.17661 21.4224L12.3676 16.1222C12.6806 15.7264 13.1574 15.4956 13.6619 15.4956H20.5143C21.9425 15.4956 22.5626 13.6885 21.4353 12.8116L7.92098 2.29927Z"/></svg>';
 const forwardLabels={ru:['Входящий вызов для','Переадресация для'],en:['Incoming call for','Forwarding to'],uk:['Вхідний виклик для','Переадресація для'],de:['Eingehender Anruf für','Umleitung an'],es:['Llamada entrante para','Desvío a'],fr:['Appel entrant pour','Renvoi vers'],it:['Chiamata in arrivo per','Deviazione a'],pl:['Połączenie do','Przekierowanie do'],pt:['Chamada para','Reencaminhamento para']};
 function scenes(locale) {
  const words = translations[locale] || translations.en;
  const [call,incoming,,ready,busy,unknown,,answer,pickup,,support,save,edit] = words[14].split('|').map(escape);
  const end=endLabels[locale]||endLabels.en,reject=rejectLabels[locale]||rejectLabels.en;
  const [online,occupied,offline]=presenceLabels[locale]||presenceLabels.en,title=incomingTitles[locale]||incomingTitles.en;
  const card=(index,art)=>{const labels=words[index+8].split('|');labels[1]=subtitles[locale]?.[index]||subtitles.en[index];return {art,labels};};
  const number='+90 212 555 01 42',forward=forwardLabels[locale]||forwardLabels.en;
  return [
   card(0,shell('prefix',`<div class="fg-idle"><div class="fg-dial"><button type="button" class="fg-chip pd-prefix-trigger" aria-label="${edit}" aria-expanded="false">1C</button><span class="fg-number">${number}</span><span class="fg-erase" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9L2 12zM12 9l6 6m0-6-6 6"/></svg></span></div><form class="pd-prefix-form" hidden><label>${edit}<input maxlength="5" pattern="[0-9A-Za-z]{1,5}" aria-label="${edit}" value="1C" required></label><button type="submit">${save}</button></form><div class="fg-action fg-place">${phone}<span>${call}</span></div></div>${cursor}${active('2A902125550142',end)}`)),
   card(1,shell('forward',`<div class="fg-count">00:03</div>${incomingCard(forward[0]+' Deniz Yılmaz','Arda Kaya',answer,reject,'fg-first')}${incomingCard(forward[1]+' Ece Demir','Arda Kaya',answer,reject,'fg-second')}${active('902125550142',end)}`)),
   card(2,shell('presence',`<div class="fg-contacts">${contact('Deniz Yılmaz','204',online,'ready')}${contact('Ece Demir','205',occupied,'busy')}${contact('Arda Kaya','206',offline,'offline')}</div>${cursor}`)),
   card(3,shell('link',`<div class="fg-browser"><div class="fg-browser-bar"><i></i><i></i><i></i><span>support.example</span></div><div class="fg-browser-body"><strong>${support}</strong><span class="fg-browser-link">+1 202 555 0142</span></div></div>${cursor}<span class="fg-flying">+1 202 555 0142</span><div class="fg-link-dial">${dial('')}</div><div class="fg-action fg-place">${phone}<span>${call}</span></div>${active('12025550142',end)}`)),
   card(4,shell('hotkey',`${incomingCard(title,'Avery Jones',answer,reject)}<kbd class="fg-key">F2</kbd>${active('02079460958',end)}`)),
   card(5,shell('pickup',`<div class="fg-contacts">${contact('Deniz Yılmaz','204',online,'ready')}${contact('Ece Demir','205',incoming,'ringing',pickup)}${contact('Arda Kaya','206',offline,'offline')}</div>${cursor}${active('2025550186',end)}`))
  ];
 }
 const timelines=[
  [['idle',650],['cursor-prefix',380],['prefix-press',140],['popup',480],['erase-one',180],['erase-all',180],['type-two',220],['type-complete',350],['save-press',120],['ready',650],['call-press',120],['active-0',900],['active-1',1000],['active-2',1000],['end-press',120],['reset',650]],
  [['first-3',1000],['first-2',1000],['first-1',1000],['expired',1350],['forwarding',750],['second-3',2300],['answer-press',240],['active-0',1000],['active-1',1000],['active-2',1000],['active-3',1000],['active-4',1000],['end-press',180],['reset',950]],
  [['idle',800],['hover-one',1700],['hover-two',1700],['hover-three',1700],['reset',900]],
  [['idle',850],['cursor-link',400],['link-press',120],['flight',950],['dial-ready',650],['call-press',120],['active-0',900],['active-1',1000],['active-2',1000],['end-press',120],['reset',650]],
  [['idle',900],['ring',1000],['key-press',350],['active-0',900],['active-1',1000],['active-2',1000],['end-press',120],['reset',650]],
  [['idle',900],['ring',900],['cursor-pickup',400],['pickup-press',120],['active-0',900],['active-1',1000],['active-2',1000],['end-press',120],['reset',650]]
 ];
 function aim(scene,target){
  const cursor=scene.querySelector('.fg-cursor');if(!cursor||!target?.getBoundingClientRect)return;
  const a=scene.getBoundingClientRect(),b=target.getBoundingClientRect();
  const sx=a.width/(scene.offsetWidth||a.width||1),sy=a.height/(scene.offsetHeight||a.height||1);
  cursor.style.left=((b.left+b.width/2-a.left)/sx-5.4).toFixed(1)+'px';
  cursor.style.top=((b.top+b.height/2-a.top)/sy-2.1).toFixed(1)+'px';
 }
 function flightPath(scene){
  const source=scene.querySelector('.fg-browser-link'),target=scene.querySelector('.fg-link-dial .fg-number'),flying=scene.querySelector('.fg-flying');
  if(!source||!target||!flying)return;
  const a=scene.getBoundingClientRect(),b=source.getBoundingClientRect(),c=target.getBoundingClientRect();
  const sx=a.width/(scene.offsetWidth||a.width||1),sy=a.height/(scene.offsetHeight||a.height||1);
  flying.style.left=((b.left-a.left)/sx).toFixed(1)+'px';flying.style.top=((b.top-a.top)/sy).toFixed(1)+'px';
  scene.style.setProperty('--fg-flight-x',((c.left+7*sx-b.left)/sx).toFixed(1)+'px');
  scene.style.setProperty('--fg-flight-y',((c.top-40*sy-b.top)/sy).toFixed(1)+'px');
 }
 function advance(scene,page,index,step,locale){
  if(!scene)return;
  const kind=(page-1)*3+index,phase=timelines[kind][step]?.[0]||'idle';
  scene.dataset.phase=phase;scene.dataset.call=String(phase.startsWith('active-')||phase==='end-press');
  const clock=scene.querySelector('.fg-clock');
  if(clock)clock.textContent='00:0'+(phase.startsWith('active-')?phase.slice(-1):phase==='end-press'?(kind===1?'4':'2'):'0');
  if(kind===0){
   if(['idle','cursor-prefix','prefix-press'].includes(phase))aim(scene,scene.querySelector('.pd-prefix-trigger'));
   if(scene.dataset.manual)return;
   const form=scene.querySelector('.pd-prefix-form'),trigger=scene.querySelector('.pd-prefix-trigger');
   form.hidden=!['popup','erase-one','erase-all','type-two','type-complete','save-press'].includes(phase);
   form.querySelector('input').value=({'popup':'1C','erase-one':'1','erase-all':'','type-two':'2','type-complete':'2A','save-press':'2A'})[phase]??'2A';
   trigger.textContent=['idle','cursor-prefix','prefix-press','popup','erase-one','erase-all','type-two','type-complete','save-press','reset'].includes(phase)?'1C':'2A';
   trigger.setAttribute('aria-expanded',String(!form.hidden));
  }
  if(kind===1){
   const value=({'first-3':'00:03','first-2':'00:02','first-1':'00:01','expired':'00:00','forwarding':'00:00','reset':'00:03'})[phase]||'';
   scene.querySelector('.fg-count').textContent=value;
  }
  if(kind===2){
   const dots=scene.querySelectorAll('.fg-dot'),labels=presenceLabels[locale]||presenceLabels.en;
   dots.forEach((dot,i)=>{dot.dataset.presence=['ready','busy','offline'][i];dot.dataset.hint=labels[i];dot.setAttribute('aria-label',labels[i]);});
   const target=phase==='hover-two'?dots[1]:phase==='hover-three'||phase==='reset'?dots[2]:dots[0];aim(scene,target);
  }
  if(kind===3){
   if(['idle','cursor-link','link-press'].includes(phase))aim(scene,scene.querySelector('.fg-browser-link'));
   if(phase==='link-press')flightPath(scene);
   const talking=phase.startsWith('active-')||phase==='end-press';
   scene.querySelector('.fg-link-dial .fg-number').textContent=talking?'12025550142':'+1 202 555 0142';
   scene.querySelector('.fg-place span').textContent=talking?(endLabels[locale]||endLabels.en):(translations[locale]||translations.en)[14].split('|')[0];
  }
  if(kind===5){if(['idle','ring','cursor-pickup','pickup-press'].includes(phase))aim(scene,scene.querySelector('.fg-pickup-button'));const dot=scene.querySelector('.fg-contact:nth-child(2) .fg-dot'),ringing=['idle','ring','cursor-pickup','pickup-press'].includes(phase);dot.dataset.presence=ringing?'ringing':'busy';dot.dataset.hint=ringing?(translations[locale]||translations.en)[14].split('|')[1]:(presenceLabels[locale]||presenceLabels.en)[1];dot.setAttribute('aria-label',dot.dataset.hint);}
 }
 function stage(grid,page,step,locale){grid?.querySelectorAll('.fg-scene').forEach((scene,index)=>advance(scene,page,index,Math.min(step,timelines[(page-1)*3+index].length-1),locale));}
 window.AltSIPFeatureGallery={words:locale=>translations[locale]||translations.en,scenes,stage,advance,timeline:(page,index)=>timelines[(page-1)*3+index]};
})();
