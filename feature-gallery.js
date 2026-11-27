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
  "Переадресация|По заданному условию|Задайте номер назначения и время ожидания. В примере звонок переходит на линию коллеги.",
  "Статусы контактов|Кто сейчас на линии|Точка рядом с именем показывает состояние коллеги, если ваш SIP-сервер передаёт эти данные.",
  "Звонки по ссылке|С сайта в AltSIP|Нажмите на телефонный номер на сайте, чтобы открыть его в AltSIP и позвонить.",
  "Горячие клавиши|Ответ без мыши|Назначьте сочетания для ответа, завершения звонка, записи и других действий. F2 отвечает на вызов.",
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
  "Call forwarding|By a chosen rule|Choose a destination and a delay. Here the call moves to a colleague’s line.",
  "Contact status|See who is on a call|A dot by each name shows their status when your SIP server provides it.",
  "Call links|From a website to AltSIP|Click a phone number on a website to open it in AltSIP and call.",
  "Keyboard shortcuts|Answer without a mouse|Assign keys to answer, hang up, record and more. F2 answers an incoming call.",
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
  "Переадресація|За заданою умовою|Укажіть номер призначення й час очікування. У прикладі виклик переходить колезі.",
  "Стани контактів|Хто зараз на лінії|Крапка біля імені показує стан колеги, якщо SIP-сервер передає ці дані.",
  "Дзвінки за посиланням|Із сайту в AltSIP|Натисніть номер телефону на сайті, щоб відкрити його в AltSIP і зателефонувати.",
  "Гарячі клавіші|Відповідь без миші|Налаштуйте клавіші для відповіді, завершення дзвінка й запису. F2 відповідає на виклик.",
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
  "Rufumleitung|Nach einer festgelegten Regel|Wählen Sie ein Ziel und eine Wartezeit. Im Beispiel klingelt danach die Leitung eines Kollegen.",
  "Kontaktstatus|Wer gerade telefoniert|Der Punkt neben dem Namen zeigt den Status, sofern Ihr SIP-Server ihn meldet.",
  "Anruf per Link|Von der Website zu AltSIP|Klicken Sie auf einer Website auf eine Telefonnummer, um sie in AltSIP zu öffnen und anzurufen.",
  "Tastenkürzel|Ohne Maus abheben|Legen Sie Tasten für Annahme, Auflegen oder Aufzeichnung fest. F2 nimmt einen Anruf an.",
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
  "Desvío de llamadas|Según una regla definida|Elige un destino y el tiempo de espera. En el ejemplo, la llamada pasa a un compañero.",
  "Estado de contactos|Quién está en línea|El punto junto al nombre indica el estado cuando el servidor SIP lo comunica.",
  "Llamar desde un enlace|De un sitio web a AltSIP|Pulsa un número de teléfono en un sitio web para abrirlo en AltSIP y llamar.",
  "Atajos de teclado|Contesta sin ratón|Asigna teclas para contestar, colgar o grabar. F2 contesta una llamada.",
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
  "Renvoi d’appel|Selon une règle définie|Choisissez un numéro et un délai. Dans l’exemple, l’appel est renvoyé vers un collègue.",
  "Statut des contacts|Qui est en ligne|Le point à côté du nom indique le statut si le serveur SIP le fournit.",
  "Appels par lien|Du site vers AltSIP|Cliquez sur un numéro de téléphone sur un site pour l’ouvrir dans AltSIP et appeler.",
  "Raccourcis clavier|Répondez sans souris|Attribuez des touches pour répondre, raccrocher ou enregistrer. F2 répond à un appel.",
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
  "Deviazione di chiamata|Secondo una regola impostata|Scegli destinazione e attesa. Nell’esempio la chiamata passa a un collega.",
  "Stato dei contatti|Chi è in linea|Il punto accanto al nome indica lo stato se il server SIP lo comunica.",
  "Chiamare da un link|Dal sito ad AltSIP|Tocca un numero di telefono su un sito per aprirlo in AltSIP e chiamare.",
  "Scorciatoie da tastiera|Rispondi senza mouse|Assegna tasti per rispondere, riagganciare o registrare. F2 risponde a una chiamata.",
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
  "Przekierowanie|Według wybranej reguły|Wybierz cel i czas oczekiwania. W przykładzie połączenie trafi do współpracownika.",
  "Stan kontaktów|Kto jest na linii|Kropka przy nazwie pokazuje stan, jeśli serwer SIP go udostępnia.",
  "Połączenia z linku|Ze strony do AltSIP|Kliknij numer telefonu na stronie, aby otworzyć go w AltSIP i zadzwonić.",
  "Skróty klawiszowe|Odbierz bez myszy|Przypisz klawisze do odbierania, kończenia i nagrywania. F2 odbiera połączenie.",
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
  "Reencaminhamento|Segundo uma regra definida|Escolha um destino e o tempo de espera. No exemplo, a chamada segue para um colega.",
  "Estado dos contactos|Quem está em linha|O ponto junto ao nome mostra o estado quando o servidor SIP o disponibiliza.",
  "Chamadas por ligação|Do site para o AltSIP|Clique num número de telefone num site para o abrir no AltSIP e ligar.",
  "Atalhos de teclado|Atenda sem rato|Atribua teclas para atender, desligar ou gravar. F2 atende uma chamada.",
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
  ru:['Префиксы и суффиксы','По заданному условию','Доступность коллег','С сайта в AltSIP','Ответ клавишей F2','Вызов коллеги'],
  en:['Prefixes and suffixes','By a chosen rule','Colleague availability','From a website to AltSIP','Answer with F2','A colleague’s call'],
  uk:['Префікси та суфікси','За заданою умовою','Доступність колег','Із сайту в AltSIP','Відповідь клавішею F2','Виклик колеги'],
  de:['Präfixe und Suffixe','Nach einer festgelegten Regel','Erreichbarkeit im Team','Von der Website zu AltSIP','Annahme mit F2','Anruf beim Kollegen'],
  es:['Prefijos y sufijos','Según una regla definida','Disponibilidad del equipo','De un sitio web a AltSIP','Respuesta con F2','Llamada de un compañero'],
  fr:['Préfixes et suffixes','Selon une règle définie','Disponibilité des collègues','Du site vers AltSIP','Réponse avec F2','Appel d’un collègue'],
  it:['Prefissi e suffissi','Secondo una regola impostata','Disponibilità dei colleghi','Dal sito ad AltSIP','Risposta con F2','Chiamata a un collega'],
  pl:['Prefiksy i sufiksy','Według wybranej reguły','Dostępność zespołu','Ze strony do AltSIP','Odbiór klawiszem F2','Telefon do kolegi'],
  pt:['Prefixos e sufixos','Segundo uma regra definida','Disponibilidade da equipa','Do site para o AltSIP','Atender com F2','Chamada de um colega']
 };
 const shell=(kind,body)=>`<div class="fg-scene fg-${kind}" data-stage="0">${body}</div>`;
 const dial=(number,chip='')=>`<div class="fg-dial"><span class="fg-chip ${chip?'':'fg-empty'}">${chip}</span><span class="fg-number">${number}</span><span class="fg-erase" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9L2 12zM12 9l6 6m0-6-6 6"/></svg></span></div>`;
 const active=(number,end)=>`<div class="fg-active"><span class="fg-clock">00:00</span>${dial(number)}<div class="fg-action fg-end">${phone}<span>${end}</span></div></div>`;
 const incomingCard=(label,name,answer,reject,variant='')=>`<div class="fg-incoming ${variant}"><small>${label}</small><strong>${name}</strong><div class="fg-choices"><span>${answer}</span><span>${reject}</span></div></div>`;
 const contact=(name,number,state,kind,pickup='')=>`<div class="fg-contact"><div class="fg-contact-main"><div class="fg-contact-name"><strong>${name}</strong><span class="fg-dot" data-presence="${kind}" data-hint="${state}" aria-label="${state}" tabindex="0"></span></div><small>${number}</small></div>${pickup?`<span class="fg-pickup-button" aria-label="${pickup}">${phone}</span>`:''}<span class="fg-more" aria-hidden="true">···</span></div>`;
 function scenes(locale) {
  const words = translations[locale] || translations.en;
  const [call,incoming,,ready,busy,unknown,,answer,pickup,,support,save,edit] = words[14].split('|').map(escape);
  const end=endLabels[locale]||endLabels.en,reject=rejectLabels[locale]||rejectLabels.en;
  const [online,occupied,offline]=presenceLabels[locale]||presenceLabels.en,title=incomingTitles[locale]||incomingTitles.en;
  const card=(index,art)=>{const labels=words[index+8].split('|');labels[1]=subtitles[locale]?.[index]||subtitles.en[index];return {art,labels};};
  const number='+90 212 555 01 42';
  return [
   card(0,shell('prefix',`<div class="fg-idle"><div class="fg-dial"><button type="button" class="fg-chip pd-prefix-trigger" aria-label="${edit}" aria-expanded="false">1C</button><span class="fg-number">${number}</span><span class="fg-erase" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9L2 12zM12 9l6 6m0-6-6 6"/></svg></span></div><form class="pd-prefix-form" hidden><label>${edit}<input maxlength="5" pattern="[0-9A-Za-z]{1,5}" aria-label="${edit}" value="2A" required></label><button type="submit">${save}</button></form><div class="fg-action fg-place">${phone}<span>${call}</span></div></div>${active('2A902125550142',end)}`)),
   card(1,shell('forward',`<div class="fg-count">00:03</div><span class="fg-recipient">Ece Demir</span>${incomingCard(title,'Deniz Yılmaz',answer,reject,'fg-first')}${incomingCard(title,'Deniz Yılmaz',answer,reject,'fg-second')}${active(number,end)}`)),
   card(2,shell('presence',`<div class="fg-contacts">${contact('Deniz Yılmaz','204',online,'ready')}${contact('Ece Demir','205',occupied,'busy')}${contact('Arda Kaya','206',offline,'offline')}</div>`)),
   card(3,shell('link',`<div class="fg-browser"><div class="fg-browser-bar"><i></i><i></i><i></i><span>support.example</span></div><div class="fg-browser-body"><strong>${support}</strong><span class="fg-browser-link">tel:+902125550142</span><span class="fg-browser-call">${phone}${call}</span></div></div><span class="fg-flying">${number}</span><div class="fg-link-dial">${dial('')}</div><div class="fg-action fg-place">${phone}<span>${call}</span></div>${active(number,end)}`)),
   card(4,shell('hotkey',`${incomingCard(title,'Deniz Yılmaz',answer,reject)}<kbd class="fg-key">F2</kbd>${active(number,end)}`)),
   card(5,shell('pickup',`<div class="fg-contacts">${contact('Deniz Yılmaz','204',online,'ready')}${contact('Ece Demir','205',incoming,'ringing',pickup)}${contact('Arda Kaya','206',offline,'offline')}</div>${active(number,end)}`))
  ];
 }
 function stage(grid,page,step,locale,force=false){
  if(!grid)return;
  const words=translations[locale]||translations.en;
  const incoming=words[14].split('|')[1];
  const [online,occupied,offline]=presenceLabels[locale]||presenceLabels.en;
  grid.querySelectorAll('.fg-scene').forEach((scene,index)=>{
   // One visible-slide clock keeps all three previews in phase; CSS skips off-screen painting.
   scene.dataset.stage=String(step);
   if(page===1&&index===0){
    const trigger=scene.querySelector('.pd-prefix-trigger');
    if(!scene.dataset.manual){trigger.textContent=step<3?'1C':'2A';const form=scene.querySelector('.pd-prefix-form');form.hidden=step!==1&&step!==2;form.querySelector('input').value=step<2?'1C':'2A';trigger.setAttribute('aria-expanded',String(!form.hidden));}
    scene.querySelector('.fg-clock').textContent=step<6?'00:00':step===6?'00:01':'00:02';
   }
   if(page===1&&index===1){scene.querySelector('.fg-count').textContent=step<2?'00:0'+(3-step):step===2?'00:00':step<6?'00:0'+(6-step):'';scene.querySelector('.fg-clock').textContent=step<7?'00:00':'00:01';}
   if(page===1&&index===2){
    const states=step<3?[[online,'ready'],[occupied,'busy'],[offline,'offline']]:step<6?[[occupied,'busy'],[online,'ready'],[offline,'offline']]:[[online,'ready'],[occupied,'busy'],[offline,'offline']];
    scene.querySelectorAll('.fg-dot').forEach((dot,i)=>{dot.dataset.presence=states[i][1];dot.dataset.hint=states[i][0];dot.setAttribute('aria-label',states[i][0]);});
   }
   if(page===2&&index===0){scene.querySelector('.fg-link-dial .fg-number').textContent=step<3?'':'+90 212 555 01 42';scene.querySelector('.fg-clock').textContent=step<6?'00:00':step===6?'00:01':'00:02';}
   if(page===2&&index===1)scene.querySelector('.fg-clock').textContent=step<4?'00:00':step===4?'00:01':step===5?'00:02':'00:03';
   if(page===2&&index===2){scene.querySelector('.fg-clock').textContent=step<4?'00:00':step===4?'00:01':step===5?'00:02':'00:03';const dot=scene.querySelector('.fg-contact:nth-child(2) .fg-dot');dot.dataset.presence=step<3?'ringing':'busy';dot.dataset.hint=step<3?incoming:occupied;dot.setAttribute('aria-label',dot.dataset.hint);}
  });
 }
 window.AltSIPFeatureGallery={words: locale=>translations[locale]||translations.en,scenes,stage,stageCount:()=>8};
})();
