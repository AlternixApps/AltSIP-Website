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
  "Правила набора|Префикс для линии|Укажите префикс в настройках SIP-аккаунта или измените его из поля набора. AltSIP добавит его перед вызовом.",
  "Переадресация|Если вы не ответили|Задайте номер назначения и время ожидания. В примере звонок переходит на линию коллеги.",
  "Статусы контактов|Кто сейчас на линии|Точка рядом с именем показывает состояние коллеги, если ваш SIP-сервер передаёт эти данные.",
  "Звонки по ссылке|Из браузера в AltSIP|Откройте ссылку tel: или sip: в AltSIP и проверьте номер перед вызовом.",
  "Горячие клавиши|Ответ без мыши|Назначьте сочетания для ответа, завершения звонка, записи и других действий. F2 отвечает на вызов.",
  "Перехват звонка|Ответ за коллегу|Если АТС поддерживает перехват и ваша линия свободна, ответьте на вызов коллеги из списка контактов.",
  "Вызов|Входящий|Переадресовано|На связи|Говорит|Нет данных|Открыть в AltSIP|Ответить|Перехватить|Коллега|Поддержка|Сохранить|Изменить префикс"
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
  "Dialling rules|A prefix for your line|Set a prefix in the SIP account or change it from the dial field. AltSIP adds it before placing the call.",
  "Call forwarding|When you don’t answer|Choose a destination and a delay. Here the call moves to a colleague’s line.",
  "Contact status|See who is on a call|A dot by each name shows their status when your SIP server provides it.",
  "Call links|From browser to AltSIP|Open a tel: or sip: link in AltSIP and check the number before calling.",
  "Keyboard shortcuts|Answer without a mouse|Assign keys to answer, hang up, record and more. F2 answers an incoming call.",
  "Call pickup|Answer for a colleague|If your PBX supports pickup and your line is free, answer a colleague’s call from Contacts.",
  "Call|Incoming|Forwarded|Available|In a call|Unknown|Open in AltSIP|Answer|Pick up|Colleague|Support|Save|Edit prefix"
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
  "Правила набору|Префікс для лінії|Вкажіть префікс у SIP-акаунті або змініть його в полі набору. AltSIP додасть його перед дзвінком.",
  "Переадресація|Якщо ви не відповіли|Укажіть номер призначення й час очікування. У прикладі виклик переходить колезі.",
  "Стани контактів|Хто зараз на лінії|Крапка біля імені показує стан колеги, якщо SIP-сервер передає ці дані.",
  "Дзвінки за посиланням|Із браузера в AltSIP|Відкрийте посилання tel: або sip: в AltSIP і перевірте номер перед викликом.",
  "Гарячі клавіші|Відповідь без миші|Налаштуйте клавіші для відповіді, завершення дзвінка й запису. F2 відповідає на виклик.",
  "Перехоплення дзвінка|Відповідь за колегу|Якщо АТС підтримує перехоплення й ваша лінія вільна, дайте відповідь зі списку контактів.",
  "Виклик|Вхідний|Переадресовано|На зв’язку|Розмовляє|Немає даних|Відкрити в AltSIP|Відповісти|Перехопити|Колега|Підтримка|Зберегти|Змінити префікс"
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
  "Wählregeln|Vorwahl für die Leitung|Legen Sie eine Vorwahl fest oder ändern Sie sie im Wählfeld. AltSIP ergänzt sie vor dem Anruf.",
  "Rufumleitung|Wenn Sie nicht abheben|Wählen Sie ein Ziel und eine Wartezeit. Im Beispiel klingelt danach die Leitung eines Kollegen.",
  "Kontaktstatus|Wer gerade telefoniert|Der Punkt neben dem Namen zeigt den Status, sofern Ihr SIP-Server ihn meldet.",
  "Anruf per Link|Vom Browser zu AltSIP|Öffnen Sie einen tel:- oder sip:-Link und prüfen Sie die Nummer vor dem Anruf.",
  "Tastenkürzel|Ohne Maus abheben|Legen Sie Tasten für Annahme, Auflegen oder Aufzeichnung fest. F2 nimmt einen Anruf an.",
  "Anruf übernehmen|Für Kollegen abheben|Ist Ihre Leitung frei und unterstützt die Anlage Pickup, übernehmen Sie den Anruf in der Kontaktliste.",
  "Anrufen|Eingehend|Umgeleitet|Verfügbar|Im Gespräch|Unbekannt|In AltSIP öffnen|Annehmen|Übernehmen|Kollege|Support|Speichern|Vorwahl ändern"
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
  "Reglas de marcación|Prefijo de la línea|Configura el prefijo en la cuenta SIP o cámbialo desde el marcador. AltSIP lo añade antes de llamar.",
  "Desvío de llamadas|Si no contestas|Elige un destino y el tiempo de espera. En el ejemplo, la llamada pasa a un compañero.",
  "Estado de contactos|Quién está en línea|El punto junto al nombre indica el estado cuando el servidor SIP lo comunica.",
  "Llamar desde un enlace|Del navegador a AltSIP|Abre un enlace tel: o sip: en AltSIP y revisa el número antes de llamar.",
  "Atajos de teclado|Contesta sin ratón|Asigna teclas para contestar, colgar o grabar. F2 contesta una llamada.",
  "Captura de llamadas|Contesta por un compañero|Si tu línea está libre y la centralita lo permite, captura la llamada desde Contactos.",
  "Llamar|Entrante|Desviada|Disponible|En llamada|Sin datos|Abrir en AltSIP|Contestar|Capturar|Compañero|Soporte|Guardar|Editar prefijo"
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
  "Règles de numérotation|Préfixe de ligne|Réglez le préfixe dans le compte SIP ou dans le champ de numérotation. AltSIP l’ajoute avant l’appel.",
  "Renvoi d’appel|Si vous ne répondez pas|Choisissez un numéro et un délai. Dans l’exemple, l’appel est renvoyé vers un collègue.",
  "Statut des contacts|Qui est en ligne|Le point à côté du nom indique le statut si le serveur SIP le fournit.",
  "Appels par lien|Du navigateur à AltSIP|Ouvrez un lien tel: ou sip: et vérifiez le numéro avant d’appeler.",
  "Raccourcis clavier|Répondez sans souris|Attribuez des touches pour répondre, raccrocher ou enregistrer. F2 répond à un appel.",
  "Interception d’appel|Répondez pour un collègue|Si la ligne est libre et le standard compatible, interceptez l’appel depuis les contacts.",
  "Appeler|Entrant|Renvoyé|Disponible|En appel|Inconnu|Ouvrir dans AltSIP|Répondre|Intercepter|Collègue|Assistance|Enregistrer|Modifier le préfixe"
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
  "Regole di composizione|Prefisso della linea|Imposta un prefisso nell’account SIP o modificalo dal tastierino. AltSIP lo aggiunge prima di chiamare.",
  "Deviazione di chiamata|Quando non rispondi|Scegli destinazione e attesa. Nell’esempio la chiamata passa a un collega.",
  "Stato dei contatti|Chi è in linea|Il punto accanto al nome indica lo stato se il server SIP lo comunica.",
  "Chiamare da un link|Dal browser ad AltSIP|Apri un link tel: o sip: e controlla il numero prima di chiamare.",
  "Scorciatoie da tastiera|Rispondi senza mouse|Assegna tasti per rispondere, riagganciare o registrare. F2 risponde a una chiamata.",
  "Risposta per un collega|Intercetta la chiamata|Se la linea è libera e il centralino lo supporta, rispondi dalla lista dei contatti.",
  "Chiama|In arrivo|Deviata|Disponibile|In chiamata|Sconosciuto|Apri in AltSIP|Rispondi|Intercetta|Collega|Assistenza|Salva|Modifica prefisso"
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
  "Reguły wybierania|Prefiks linii|Ustaw prefiks konta SIP lub zmień go w polu wybierania. AltSIP doda go przed połączeniem.",
  "Przekierowanie|Gdy nie odbierasz|Wybierz cel i czas oczekiwania. W przykładzie połączenie trafi do współpracownika.",
  "Stan kontaktów|Kto jest na linii|Kropka przy nazwie pokazuje stan, jeśli serwer SIP go udostępnia.",
  "Połączenia z linku|Z przeglądarki do AltSIP|Otwórz link tel: lub sip: i sprawdź numer przed połączeniem.",
  "Skróty klawiszowe|Odbierz bez myszy|Przypisz klawisze do odbierania, kończenia i nagrywania. F2 odbiera połączenie.",
  "Przejęcie połączenia|Odbierz za kolegę|Gdy linia jest wolna, a centrala to obsługuje, przejmij połączenie z listy kontaktów.",
  "Zadzwoń|Przychodzące|Przekierowane|Dostępny|Rozmawia|Brak danych|Otwórz w AltSIP|Odbierz|Przejmij|Kolega|Wsparcie|Zapisz|Zmień prefiks"
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
  "Regras de marcação|Prefixo da linha|Indique um prefixo na conta SIP ou altere-o no marcador. O AltSIP adiciona-o antes de ligar.",
  "Reencaminhamento|Quando não atende|Escolha um destino e o tempo de espera. No exemplo, a chamada segue para um colega.",
  "Estado dos contactos|Quem está em linha|O ponto junto ao nome mostra o estado quando o servidor SIP o disponibiliza.",
  "Chamadas por ligação|Do navegador ao AltSIP|Abra uma ligação tel: ou sip: e confira o número antes de ligar.",
  "Atalhos de teclado|Atenda sem rato|Atribua teclas para atender, desligar ou gravar. F2 atende uma chamada.",
  "Captura de chamada|Atenda por um colega|Se a linha estiver livre e a central o permitir, atenda a chamada a partir dos contactos.",
  "Ligar|A receber|Reencaminhada|Disponível|Em chamada|Sem dados|Abrir no AltSIP|Atender|Capturar|Colega|Apoio|Guardar|Alterar prefixo"
 ]
};
 const phone = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2c-2-.5-4 1-4 4 0 7 9 16 16 16 3 0 4.5-2 4-4l-4-4c-.7-.7-1.5-.6-2.3.2l-1.4 1.4a14 14 0 0 1-5.9-5.9l1.4-1.4c.8-.8.9-1.6.2-2.3z" fill="currentColor"/></svg>';
 const escape = text => String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const endLabels={ru:'Завершить',en:'End call',uk:'Завершити',de:'Auflegen',es:'Colgar',fr:'Raccrocher',it:'Termina chiamata',pl:'Zakończ',pt:'Desligar'};
 const field=(content,extra='')=>`<div class="pd-demo-field ${extra}">${content}<span class="pd-demo-caret" aria-hidden="true"></span></div>`;
 const action=(label,extra='')=>`<span class="pd-demo-action ${extra}">${phone}<span>${label}</span></span>`;
 const shell=(kind,body)=>`<div class="pd-demo pd-demo-${kind}" data-pd-fragment data-stage="0">${body}</div>`;
 const contact=(name,number,state,kind)=>`<div class="pd-demo-contact"><span class="pd-demo-person"><strong><i class="pd-demo-dot" data-presence="${kind}"></i>${name}</strong><small>${number} · <span data-pd-state>${state}</span></small></span></div>`;
 function scenes(locale) {
  const words = translations[locale] || translations.en;
  const [call,incoming,forwarded,ready,busy,unknown,open,answer,pickup,colleague,support,save,edit] = words[14].split('|').map(escape);
  const card = (index, art) => ({ art, labels:words[index+8].split('|') });
  return [
   card(0,shell('prefix',`${field(`<button type="button" class="pd-prefix-trigger" aria-label="${edit}" aria-expanded="false">9</button><span>202 555 0142</span>`)}<div class="pd-demo-edit" aria-hidden="true"><span>${edit}</span><b>90</b><span class="pd-demo-save">${save}</span></div><form class="pd-prefix-form" hidden><input inputmode="numeric" maxlength="5" pattern="[0-9]{1,5}" aria-label="${edit}" value="90" required><button type="submit">${save}</button></form><div class="pd-demo-separator"></div><div class="pd-demo-summary"><small>${call}</small><strong class="pd-prefix-result">92025550142</strong></div>${action(call)}`)),
   card(1,shell('forward',`<div class="pd-demo-call"><span class="pd-demo-call-label">${incoming}</span><strong>202 555 0142</strong><span class="pd-demo-clock">00:03</span></div><div class="pd-demo-route"><span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15m-6-6 6 6 6-6"/></svg><span></span></div><div class="pd-demo-call pd-demo-dark"><span class="pd-demo-call-label">${forwarded}</span><strong>204 · ${colleague}</strong><span class="pd-demo-connected">${answer}</span></div>`)),
   card(2,shell('presence',`${contact(colleague,'204',ready,'ready')}${contact(support,'205',busy,'busy')}${contact('206','206',unknown,'unknown')}`)),
   card(3,shell('link',`<div class="pd-demo-browser"><span class="pd-demo-dots"><i></i><i></i><i></i></span><code>tel:2025550142</code><span class="pd-demo-open">${open} ↗</span></div><div class="pd-demo-route"><span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15m-6-6 6 6 6-6"/></svg><span></span></div>${field('<span class="pd-demo-dial"></span>')}${action(call)}`)),
   card(4,shell('hotkey',`<div class="pd-demo-call"><span class="pd-demo-call-label">${incoming}</span><strong>202 555 0142</strong><span class="pd-demo-clock">00:03</span></div><div class="pd-demo-keyline"><span></span><kbd>F2</kbd><span></span></div>${action(answer)}`)),
   card(5,shell('pickup',`${contact(colleague,'204',incoming,'ringing')}<div class="pd-demo-route"><span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15m-6-6 6 6 6-6"/></svg><span></span></div>${action(pickup)}<div class="pd-demo-summary"><small class="pd-demo-status">${incoming}</small><strong>202 555 0142 · <span class="pd-demo-timer">00:00</span></strong></div>`))
  ];
 }
 function stage(grid,page,step,locale,force=false){
  if(!grid)return;
  const words=translations[locale]||translations.en;
  const [call,incoming,,ready,busy,unknown,,answer,pickup]=words[14].split('|');
  grid.querySelectorAll('.pd-demo').forEach((scene,index)=>{
   const card=scene.closest('.pd-card'),bounds=card.getBoundingClientRect();
   if(step&&!force&&((card.dataset.open!=='true'&&window.innerWidth>900)||bounds.bottom<=0||bounds.top>=window.innerHeight))return;
   scene.dataset.stage=String(step);
   if(page===1&&index===0){
    const trigger=scene.querySelector('.pd-prefix-trigger');
    if(!scene.dataset.manual){trigger.textContent=step<2?'9':'90';scene.querySelector('.pd-prefix-result').textContent=(step<2?'9':'90')+'2025550142';}
   }
   if(page===1&&index===1){scene.querySelector('.pd-demo-clock').textContent=step<3?'00:0'+(3-step):'00:00';scene.querySelector('.pd-demo-connected').textContent=step<4?answer:'00:01';}
   if(page===1&&index===2){
    const states=step<2?[[ready,'ready'],[busy,'busy'],[unknown,'unknown']]:step<4?[[busy,'busy'],[ready,'ready'],[unknown,'unknown']]:[[ready,'ready'],[busy,'busy'],[ready,'ready']];
    scene.querySelectorAll('.pd-demo-contact').forEach((row,i)=>{row.querySelector('[data-pd-state]').textContent=states[i][0];row.querySelector('[data-presence]').dataset.presence=states[i][1];});
   }
   if(page===2&&index===0){scene.querySelector('.pd-demo-dial').textContent=['','', '202 5','202 555 0142','202 555 0142'][step];}
   if(page===2&&index===1){
    scene.querySelector('.pd-demo-call-label').textContent=step<2?incoming:call;
    scene.querySelector('.pd-demo-clock').textContent=step<2?'00:03':step===2?'00:00':step===3?'00:01':'00:02';
    scene.querySelector('.pd-demo-action span').textContent=step<2?answer:endLabels[locale]||endLabels.en;
   }
   if(page===2&&index===2){scene.querySelector('.pd-demo-status').textContent=step<3?incoming:call;scene.querySelector('.pd-demo-timer').textContent=step<4?'00:00':'00:01';scene.querySelector('.pd-demo-action span').textContent=step<3?pickup:endLabels[locale]||endLabels.en;scene.querySelector('[data-pd-state]').textContent=step<3?incoming:busy;scene.querySelector('[data-presence]').dataset.presence=step<3?'ringing':'busy';}
  });
 }
 window.AltSIPFeatureGallery={words: locale=>translations[locale]||translations.en,scenes,stage,stageCount:()=>5};
})();
