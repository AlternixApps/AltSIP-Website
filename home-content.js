/* Scroll-driven product scenes; shared audio sections are placed by app.js. */
(() => {
 'use strict';
 const copy={
  "ru": {
    "accounts": [
      "Несколько SIP-аккаунтов\nБыстрое переключение",
      "Используйте аккаунты разных провайдеров и АТС. Выбирайте нужный перед звонком, не переключаясь между программами."
    ],
    "compact": [
      "Полный и компактный режим",
      "В компактном режиме остаются основные элементы управления звонком. Переключайтесь между видами, сохраняя место для других окон."
    ],
    "calls": [
      "Перевод вызова и конференция",
      "Передавайте разговор коллеге после консультации или объединяйте два вызова в конференцию."
    ],
    "parties": [
      "Клиент",
      "Вы",
      "Коллега"
    ],
    "callModes": [
      "Разговор",
      "Конференция",
      "Перевод"
    ],
    "callStates": [
      "Вы на связи с клиентом. Коллегу можно подключить к общей беседе или сначала обсудить с ним вопрос отдельно.",
      "Клиент, коллега и вы слышите друг друга в одной конференции. Оба вызова остаются под вашим управлением.",
      "После консультации вы передаёте клиента коллеге. Они продолжают разговор напрямую, а ваш вызов завершается."
    ],
    "tech": [
      "Подключение и безопасность",
      "Подключайте SIP-аккаунты своей телефонии и настраивайте соединение, кодеки и защиту звонков."
    ],
    "connect": "Подключение",
    "codecs": "Аудиокодеки",
    "settings": "Настройки",
    "settingsBody": "Приоритет кодеков · обработка номера · SIP-аккаунты",
    "security": "TLS шифрует SIP-сигнализацию, а SDES-SRTP — голосовой поток. Защищённый звонок требует поддержки и включения обоих режимов на сервере. Ключи SDES передаются внутри сигнализации.",
    "history": "История звонков и контакты",
    "historyTab": "История",
    "contactsTab": "Контакты",
    "securityTitle": "Защита сигнализации и голоса",
    "detailTitle": "Детализация вызова",
    "direction": "Направление",
    "outgoing": "Исходящий вызов",
    "started": "Начало",
    "ended": "Завершение",
    "duration": "Длительность",
    "result": "Ответ SIP",
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
    "calls": [
      "Call transfer and conference",
      "Consult a colleague before transferring a call, or merge two calls into a conference."
    ],
    "parties": [
      "Client",
      "You",
      "Colleague"
    ],
    "callModes": [
      "Call",
      "Conference",
      "Transfer"
    ],
    "callStates": [
      "You are speaking with the client. Bring a colleague into the conversation or consult them privately first.",
      "The client, your colleague and you can hear one another in one conference. Both calls stay under your control.",
      "After consulting your colleague, hand over the client. They continue speaking directly and your call ends."
    ],
    "tech": [
      "Connection and security",
      "Connect your SIP accounts and configure the connection, codecs and call protection."
    ],
    "connect": "Connection",
    "codecs": "Audio codecs",
    "settings": "Settings",
    "settingsBody": "Codec priority · number formatting · SIP accounts",
    "security": "TLS encrypts SIP signalling. SDES-SRTP encrypts the voice stream. Both modes must be supported and enabled on the server. SDES keys travel inside signalling.",
    "history": "Call history and contacts",
    "historyTab": "History",
    "contactsTab": "Contacts",
    "securityTitle": "Protect signalling and voice",
    "detailTitle": "Call details",
    "direction": "Direction",
    "outgoing": "Outgoing call",
    "started": "Started",
    "ended": "Ended",
    "duration": "Duration",
    "result": "SIP response",
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
    "calls": [
      "Переведення виклику та конференція",
      "Порадьтеся з колегою перед переведенням або об’єднайте два виклики в конференцію."
    ],
    "parties": [
      "Клієнт",
      "Ви",
      "Колега"
    ],
    "callModes": [
      "Розмова",
      "Конференція",
      "Переведення"
    ],
    "callStates": [
      "Ви розмовляєте з клієнтом. Додайте колегу до спільної розмови або спочатку проконсультуйтеся з ним окремо.",
      "Клієнт, колега та ви чуєте одне одного в одній конференції. Обидва виклики залишаються під вашим керуванням.",
      "Після консультації передайте клієнта колезі. Вони продовжать розмову напряму, а ваш виклик завершиться."
    ],
    "tech": [
      "Підключення та безпека",
      "Підключайте SIP-акаунти своєї телефонії та налаштовуйте з’єднання, кодеки й захист дзвінків."
    ],
    "connect": "Підключення",
    "codecs": "Аудіокодеки",
    "settings": "Налаштування",
    "settingsBody": "Пріоритет кодеків · обробка номера · SIP-акаунти",
    "security": "TLS шифрує SIP-сигналізацію, а SDES-SRTP — голосовий потік. Обидва режими мають підтримуватися й бути ввімкнені на сервері. Ключі SDES передаються всередині сигналізації.",
    "history": "Історія дзвінків і контакти",
    "historyTab": "Історія",
    "contactsTab": "Контакти",
    "securityTitle": "Захист сигналізації та голосу",
    "detailTitle": "Деталізація виклику",
    "direction": "Напрямок",
    "outgoing": "Вихідний виклик",
    "started": "Початок",
    "ended": "Завершення",
    "duration": "Тривалість",
    "result": "Відповідь SIP",
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
    "calls": [
      "Weiterleitung und Konferenz",
      "Sprechen Sie vor der Weiterleitung mit einem Kollegen oder verbinden Sie zwei Anrufe zu einer Konferenz."
    ],
    "parties": [
      "Kunde",
      "Sie",
      "Kollege"
    ],
    "callModes": [
      "Gespräch",
      "Konferenz",
      "Weiterleitung"
    ],
    "callStates": [
      "Sie sprechen mit dem Kunden. Holen Sie einen Kollegen dazu oder halten Sie zunächst privat Rücksprache.",
      "Kunde, Kollege und Sie hören einander in einer Konferenz. Beide Anrufe bleiben unter Ihrer Kontrolle.",
      "Nach der Rücksprache übergeben Sie den Kunden an den Kollegen. Die beiden sprechen direkt weiter, Ihr Anruf endet."
    ],
    "tech": [
      "Verbindung und Sicherheit",
      "Verbinden Sie Ihre SIP-Konten und konfigurieren Sie Verbindung, Codecs und Anrufschutz."
    ],
    "connect": "Verbindung",
    "codecs": "Audiocodecs",
    "settings": "Einstellungen",
    "settingsBody": "Codec-Priorität · Nummernformat · SIP-Konten",
    "security": "TLS verschlüsselt die SIP-Signalisierung, SDES-SRTP den Sprachstrom. Beide Modi müssen vom Server unterstützt und aktiviert werden. SDES-Schlüssel werden in der Signalisierung übertragen.",
    "history": "Anrufliste und Kontakte",
    "historyTab": "Anrufliste",
    "contactsTab": "Kontakte",
    "securityTitle": "Signalisierung und Sprache schützen",
    "detailTitle": "Anrufdetails",
    "direction": "Richtung",
    "outgoing": "Ausgehender Anruf",
    "started": "Beginn",
    "ended": "Ende",
    "duration": "Dauer",
    "result": "SIP-Antwort",
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
    "calls": [
      "Transfert et conférence",
      "Consultez un collègue avant de transférer un appel, ou réunissez deux appels en conférence."
    ],
    "parties": [
      "Client",
      "Vous",
      "Collègue"
    ],
    "callModes": [
      "Appel",
      "Conférence",
      "Transfert"
    ],
    "callStates": [
      "Vous parlez au client. Invitez un collègue à la conversation ou consultez-le d’abord en privé.",
      "Le client, votre collègue et vous vous entendez dans une même conférence. Vous gardez le contrôle des deux appels.",
      "Après consultation, vous transférez le client au collègue. Ils poursuivent la conversation directement et votre appel se termine."
    ],
    "tech": [
      "Connexion et sécurité",
      "Connectez vos comptes SIP et réglez la connexion, les codecs et la protection des appels."
    ],
    "connect": "Connexion",
    "codecs": "Codecs audio",
    "settings": "Réglages",
    "settingsBody": "Priorité des codecs · format des numéros · comptes SIP",
    "security": "TLS chiffre la signalisation SIP, SDES-SRTP le flux vocal. Le serveur doit prendre en charge et activer les deux modes. Les clés SDES transitent dans la signalisation.",
    "history": "Historique des appels et contacts",
    "historyTab": "Historique",
    "contactsTab": "Contacts",
    "securityTitle": "Protéger la signalisation et la voix",
    "detailTitle": "Détails de l’appel",
    "direction": "Direction",
    "outgoing": "Appel sortant",
    "started": "Début",
    "ended": "Fin",
    "duration": "Durée",
    "result": "Réponse SIP",
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
    "calls": [
      "Transferencia y conferencia",
      "Consulta con un compañero antes de transferir, o une dos llamadas en una conferencia."
    ],
    "parties": [
      "Cliente",
      "Tú",
      "Compañero"
    ],
    "callModes": [
      "Llamada",
      "Conferencia",
      "Transferencia"
    ],
    "callStates": [
      "Hablas con el cliente. Añade a un compañero a la conversación o consúltale primero en privado.",
      "El cliente, tu compañero y tú os escucháis en una conferencia. Las dos llamadas siguen bajo tu control.",
      "Tras la consulta, transfieres el cliente al compañero. Ellos siguen hablando directamente y tu llamada termina."
    ],
    "tech": [
      "Conexión y seguridad",
      "Conecta tus cuentas SIP y configura la conexión, los códecs y la protección de las llamadas."
    ],
    "connect": "Conexión",
    "codecs": "Codecs de audio",
    "settings": "Ajustes",
    "settingsBody": "Prioridad de codecs · formato del número · cuentas SIP",
    "security": "TLS cifra la señalización SIP y SDES-SRTP el flujo de voz. El servidor debe admitir y activar ambos modos. Las claves SDES se transmiten en la señalización.",
    "history": "Historial de llamadas y contactos",
    "historyTab": "Historial",
    "contactsTab": "Contactos",
    "securityTitle": "Protección de señalización y voz",
    "detailTitle": "Detalles de la llamada",
    "direction": "Dirección",
    "outgoing": "Llamada saliente",
    "started": "Inicio",
    "ended": "Fin",
    "duration": "Duración",
    "result": "Respuesta SIP",
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
    "calls": [
      "Trasferimento e conferenza",
      "Consulta un collega prima di trasferire la chiamata o unisci due chiamate in conferenza."
    ],
    "parties": [
      "Cliente",
      "Tu",
      "Collega"
    ],
    "callModes": [
      "Chiamata",
      "Conferenza",
      "Trasferimento"
    ],
    "callStates": [
      "Stai parlando con il cliente. Aggiungi un collega alla conversazione o consultalo prima in privato.",
      "Il cliente, il collega e tu vi sentite in una conferenza. Entrambe le chiamate restano sotto il tuo controllo.",
      "Dopo la consultazione, passi il cliente al collega. Continuano a parlare direttamente e la tua chiamata termina."
    ],
    "tech": [
      "Connessione e sicurezza",
      "Collega i tuoi account SIP e configura connessione, codec e protezione delle chiamate."
    ],
    "connect": "Connessione",
    "codecs": "Codec audio",
    "settings": "Impostazioni",
    "settingsBody": "Priorità codec · formato numeri · account SIP",
    "security": "TLS cifra la segnalazione SIP, SDES-SRTP il flusso vocale. Entrambe le modalità devono essere supportate e attivate dal server. Le chiavi SDES passano nella segnalazione.",
    "history": "Cronologia chiamate e contatti",
    "historyTab": "Cronologia",
    "contactsTab": "Contatti",
    "securityTitle": "Proteggere segnalazione e voce",
    "detailTitle": "Dettagli chiamata",
    "direction": "Direzione",
    "outgoing": "Chiamata in uscita",
    "started": "Inizio",
    "ended": "Fine",
    "duration": "Durata",
    "result": "Risposta SIP",
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
    "calls": [
      "Przekazywanie i konferencja",
      "Porozmawiaj z kolegą przed przekazaniem połączenia lub połącz dwie rozmowy w konferencję."
    ],
    "parties": [
      "Klient",
      "Ty",
      "Kolega"
    ],
    "callModes": [
      "Rozmowa",
      "Konferencja",
      "Przekazanie"
    ],
    "callStates": [
      "Rozmawiasz z klientem. Dołącz współpracownika do rozmowy lub najpierw skonsultuj się z nim prywatnie.",
      "Klient, współpracownik i Ty słyszycie się w jednej konferencji. Oba połączenia pozostają pod Twoją kontrolą.",
      "Po konsultacji przekazujesz klienta współpracownikowi. Rozmawiają dalej bezpośrednio, a Twoje połączenie się kończy."
    ],
    "tech": [
      "Połączenie i bezpieczeństwo",
      "Połącz swoje konta SIP i skonfiguruj połączenie, kodeki oraz ochronę rozmów."
    ],
    "connect": "Połączenie",
    "codecs": "Kodeki audio",
    "settings": "Ustawienia",
    "settingsBody": "Priorytet kodeków · format numeru · konta SIP",
    "security": "TLS szyfruje sygnalizację SIP, a SDES-SRTP strumień głosu. Serwer musi obsługiwać i włączyć oba tryby. Klucze SDES są przesyłane wewnątrz sygnalizacji.",
    "history": "Historia połączeń i kontakty",
    "historyTab": "Historia",
    "contactsTab": "Kontakty",
    "securityTitle": "Ochrona sygnalizacji i głosu",
    "detailTitle": "Szczegóły połączenia",
    "direction": "Kierunek",
    "outgoing": "Połączenie wychodzące",
    "started": "Początek",
    "ended": "Koniec",
    "duration": "Czas trwania",
    "result": "Odpowiedź SIP",
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
    "calls": [
      "Transferência e conferência",
      "Consulte um colega antes de transferir a chamada ou una duas chamadas em conferência."
    ],
    "parties": [
      "Cliente",
      "Você",
      "Colega"
    ],
    "callModes": [
      "Chamada",
      "Conferência",
      "Transferência"
    ],
    "callStates": [
      "Está a falar com o cliente. Junte um colega à conversa ou consulte-o primeiro em privado.",
      "O cliente, o colega e você ouvem-se numa conferência. As duas chamadas continuam sob o seu controlo.",
      "Após a consulta, transfere o cliente para o colega. Continuam a falar diretamente e a sua chamada termina."
    ],
    "tech": [
      "Ligação e segurança",
      "Ligue as suas contas SIP e configure a ligação, os codecs e a proteção das chamadas."
    ],
    "connect": "Ligação",
    "codecs": "Codecs de áudio",
    "settings": "Definições",
    "settingsBody": "Prioridade de codecs · formato de números · contas SIP",
    "security": "TLS cifra a sinalização SIP e SDES-SRTP o fluxo de voz. O servidor tem de suportar e ativar ambos os modos. As chaves SDES passam na sinalização.",
    "history": "Histórico de chamadas e contactos",
    "historyTab": "Histórico",
    "contactsTab": "Contactos",
    "securityTitle": "Proteger sinalização e voz",
    "detailTitle": "Detalhes da chamada",
    "direction": "Direção",
    "outgoing": "Chamada de saída",
    "started": "Início",
    "ended": "Fim",
    "duration": "Duração",
    "result": "Resposta SIP",
    "noteLabel": "Nota",
    "contactNote": "Contacto de trabalho. Discussão de projetos e coordenação de reuniões."
  }
};
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const svg=n=>`<svg aria-hidden="true"><use href="#i-${n}"></use></svg>`;
 function callData(i){const start=10*3600+(42-i)*60,duration=60*(1+i%4)+12+i*2;const clock=n=>[Math.floor(n/3600),Math.floor(n/60)%60,n%60].map(v=>String(v).padStart(2,'0')).join(':');return{start:clock(start),end:clock(start+duration),duration:clock(duration).slice(3)};}
 function accountPose(progress,index){const t=Math.max(0,Math.min(1,(progress-index*.045)/.865));return{x:0,y:(1-t)*(95+index*12)+t*(index*82-12),z:0,angle:90*(1-t)};}
 function mount(host,{lang='ru',onViewport=()=>{}}={}){
  let locale=copy[lang]?lang:'en',theme=document.documentElement.dataset.theme||'light',active=true,destroyed=false,compact=false,callMode='call',listView='history';
  let io,ro,resizeFrame=0,scrollFrame=0,native,compactTimeline,compactTurn,compactStarted=false,listTimeline,listStarted=false,listCycle=0;
  const visible=new Set(),reduce=matchMedia('(prefers-reduced-motion: reduce)'),{SceneTimeline,TransitionController}=window.AltSIPTour;
  const people=window.AltSIPFixtures.people;
  const $=s=>host.querySelector(s),$$=s=>[...host.querySelectorAll(s)],c=()=>copy[locale];
  const heading=(title,body='')=>`<div class="hp-heading"><h2>${esc(title)}</h2>${body?`<p>${esc(body)}</p>`:''}</div>`;
  function detailContent(index){const d=c(),contact=listView==='contacts',[name,phone]=people[index],data=callData(index);return `<div class="hp-detail-symbol">${svg(contact?'person':'phone')}</div><h3>${esc(contact?name:d.detailTitle)}</h3><p class="hp-detail-number">${esc(phone)}</p>${contact?`<div class="hp-contact-note"><span>${esc(d.noteLabel)}</span><p>${esc(d.contactNote)}</p></div>`:`<dl>${[[d.direction,d.outgoing],[d.started,'19.10.2026 · '+data.start],[d.ended,'19.10.2026 · '+data.end],[d.duration,data.duration],[d.result,'200 · OK'],['DTMF','2 · 5 · #']].map(([label,value])=>`<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>`}`;}
  function listMarkup(){const d=c(),contact=listView==='contacts';const rows=people.map(([name,phone],i)=>`<div class="hp-floating-row" data-entry="${i}"><span class="hp-row-icon">${svg(contact?'person':'phone')}</span><span><strong>${esc(contact?name:phone)}</strong><small>${esc(contact?phone:d.outgoing+' · '+callData(i).start.slice(0,5)+' · '+callData(i).duration)}</small></span></div>`).join('');return `<div class="hp-list-window" aria-hidden="true"><div class="hp-floating-rows"><div class="hp-rows-cycle">${rows}</div><div class="hp-rows-cycle">${rows}</div></div></div><article class="hp-list-detail">${detailContent(5)}</article>`;}
  function markup(){const d=c();return `<div class="home-overview home-premium" lang="${locale}">
   <section class="hp-section hp-accounts" data-hp-scene="accounts">${heading(d.accounts[0],d.accounts[1])}<div class="hp-account-stage"><div class="hp-account-stack">${['Office','Support','Personal','Secondary'].map((name,i)=>`<div class="hp-account" style="--slot:${i}"><span class="hp-account-dot"></span><span><strong>${name}</strong><small>${12025550142+i}</small></span><i class="hp-account-edge" aria-hidden="true"></i></div>`).join('')}</div></div></section>
   <section class="hp-section hp-compact" data-hp-scene="compact">${heading(d.compact[0],d.compact[1])}<div class="hp-compact-stage"><div class="hp-compact-position"><div class="hp-compact-turn"><div class="hp-compact-depth" aria-hidden="true">${Array.from({length:10},(_,i)=>`<i style="--depth:${i}"></i>`).join('')}</div><div class="hp-native-frame" inert aria-hidden="true"><div class="hp-native"></div></div><div class="hp-compact-back" aria-hidden="true"><img src="assets/mark.svg" alt=""></div></div></div></div></section>
   <div class="hp-audio-slot" data-home-audio="sound"></div><div class="hp-audio-slot" data-home-audio="echo"></div><div class="hp-audio-slot" data-home-audio="record"></div>
   <section class="hp-section hp-history" data-hp-scene="lists"><div class="hp-history-copy">${heading(d.history)}<div class="hp-modes" role="group" aria-label="${esc(d.history)}"><button type="button" data-hp-list="history" aria-pressed="${listView==='history'}">${esc(d.historyTab)}</button><button type="button" data-hp-list="contacts" aria-pressed="${listView==='contacts'}">${esc(d.contactsTab)}</button></div></div><div class="hp-list-scene" data-list="${listView}">${listMarkup()}</div></section>
   <section class="hp-section hp-calls" data-hp-scene="calls">${heading(d.calls[0],d.calls[1])}<div class="hp-call-demo" data-mode="call"><svg class="hp-call-links" viewBox="0 0 680 270" aria-hidden="true"><path class="hp-link-client" d="M100 120 L340 120"/><path class="hp-link-colleague" d="M340 120 L580 120"/><path class="hp-link-transfer" d="M100 120 C220 20 460 20 580 120"/></svg>${['client','you','colleague'].map((p,i)=>`<div class="hp-party hp-party-${p}"><span>${svg('person')}</span><strong>${esc(d.parties[i])}</strong></div>`).join('')}</div><div class="hp-call-switch hp-modes" role="group" aria-label="${esc(d.calls[0])}">${['call','conference','transfer'].map((m,i)=>`<button type="button" data-hp-call="${m}" aria-pressed="${i===0}">${esc(d.callModes[i])}</button>`).join('')}</div><div class="hp-call-explanation" aria-live="polite"><h3 class="hp-call-state-title"></h3><p class="hp-call-status"></p></div></section>
   <section class="hp-section hp-tech" data-hp-scene="tech">${heading(d.tech[0],d.tech[1])}<div class="hp-security-feature">${svg('shield')}<h3>${esc(d.securityTitle)}</h3><p>${esc(d.security)}</p></div><div class="hp-tech-columns"><div><h3>${esc(d.connect)}</h3><p>SIP · UDP · TCP · TLS</p></div><div><h3>${esc(d.codecs)}</h3><p>Opus · G.711 · G.722</p></div><div><h3>${esc(d.settings)}</h3><p>${esc(d.settingsBody)}</p></div></div></section>
  </div>`;}
  function syncCallGeometry(){const box=$('.hp-call-demo'),links=$('.hp-call-links'),dots=$$('.hp-party>span');if(!box||dots.length!==3)return;const r=box.getBoundingClientRect();if(!r.width)return;const centers=dots.map(el=>{const b=el.getBoundingClientRect();return{x:b.left+b.width/2-r.left,y:b.top+b.height/2-r.top};});const [a,b,z]=centers,arc=Math.max(12,a.y-85),paths=[`M${a.x} ${a.y} L${b.x} ${b.y}`,`M${b.x} ${b.y} L${z.x} ${z.y}`,`M${a.x} ${a.y} C${a.x+r.width*.22} ${arc} ${z.x-r.width*.22} ${arc} ${z.x} ${z.y}`];links.setAttribute('viewBox',`0 0 ${r.width} ${r.height}`);$$('.hp-call-links path').forEach((path,i)=>path.setAttribute('d',paths[i]));}
  function fit(){if(destroyed)return;syncCallGeometry();if(!native)return;const frame=$('.hp-compact-position'),slot=$('.hp-native'),size=native.getSize(),available=frame.parentElement.clientWidth,scale=Math.min(.75,(available-12)/size.width,420/size.height);frame.style.width=`${size.width*scale}px`;frame.style.height=`${size.height*scale}px`;slot.style.transform=`scale(${scale})`;}
  function queueFit(){cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(fit);}
  function ensure(){if(native)return;native=window.AltSIPDemo.mount($('.hp-native'),{initialView:compact?'compact':'dial',interactionScope:'compact',locale});native.setTheme(theme);native.setActive(false);$('.hp-native').addEventListener('sip-demo-resize',queueFit);compactTurn=new TransitionController($('.hp-compact-turn'),()=>!reduce.matches);compactTimeline=new SceneTimeline([{at:2400,run:()=>compactTurn.turn()},{at:2620,run(){compact=!compact;native.preview(compact?'compact':'dial');queueFit();}},{at:3760,run(){}}],{onComplete(){if(running()&&visible.has('compact'))compactTimeline.start();else compactStarted=false;}});queueFit();}
  function running(){return active&&!document.hidden&&!reduce.matches&&!destroyed;}
  function updateCompact(){if(!compactTimeline)return;if(running()&&visible.has('compact')){if(!compactStarted){compactStarted=true;compactTimeline.start();}else compactTimeline.resume();compactTurn.resume();}else{compactTimeline.pause();compactTurn.pause();if(reduce.matches){compactTimeline.reset();compactTurn.cancel();compactStarted=false;if(compact){compact=false;native.preview('dial');queueFit();}}}}
  function updateListSelection(){const distance=(listCycle*8000+2400)*.1,index=Math.floor((distance+230)/87)%people.length;$('.hp-list-detail').innerHTML=detailContent(index);$$('[data-entry]').forEach(row=>row.classList.toggle('hp-row-selected',+row.dataset.entry===index));}
  function createListTimeline(){listTimeline?.reset();listCycle=0;listStarted=false;listTimeline=new SceneTimeline([{at:2400,run:updateListSelection},{at:8000,run(){}}],{onComplete(){listCycle++;if(running()&&visible.has('lists'))listTimeline.start();else listStarted=false;}});}
  function updateList(){const run=running()&&visible.has('lists');$('.hp-list-scene')?.classList.toggle('hp-running',run);if(run){if(!listStarted){listStarted=true;listTimeline.start();}else listTimeline.resume();}else listTimeline.pause();}
  function setCall(value){callMode=value;const i=['call','conference','transfer'].indexOf(value);$('.hp-call-demo').dataset.mode=value;$$('[data-hp-call]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.hpCall===value)));$('.hp-call-state-title').textContent=c().callModes[i];$('.hp-call-status').textContent=c().callStates[i];}
  function paintStack(){scrollFrame=0;if(!active||document.hidden||!visible.has('accounts'))return;const r=$('.hp-account-stage').getBoundingClientRect(),progress=reduce.matches?1:Math.max(0,Math.min(1,(innerHeight*.68-r.top)/(innerHeight*.32))),t=progress*progress*(3-2*progress);$$('.hp-account').forEach((card,i)=>{const p=accountPose(t,i);card.style.transform=`translate3d(${p.x}px,${p.y}px,${p.z}px) rotateX(${p.angle}deg)`;});}
  function scroll(){if(!scrollFrame&&active&&!document.hidden&&visible.has('accounts'))scrollFrame=requestAnimationFrame(paintStack);}
  function updateMotion(){updateCompact();updateList();scroll();}
  function setup(){host.innerHTML=markup();setCall(callMode);createListTimeline();host.addEventListener('click',onClick);io=new IntersectionObserver(entries=>{for(const e of entries){const name=e.target.dataset.hpScene;if(e.isIntersecting){visible.add(name);e.target.classList.add('hp-visible');if(name==='compact')ensure();}else visible.delete(name);}updateMotion();onViewport();},{threshold:.08,rootMargin:'0px'});$$('[data-hp-scene]').forEach(e=>io.observe(e));ro=new ResizeObserver(()=>{queueFit();onViewport();});ro.observe(host);}
  function onClick(e){const b=e.target.closest('button');if(!b||!host.contains(b))return;if(b.dataset.hpCall)setCall(b.dataset.hpCall);if(b.dataset.hpList&&b.dataset.hpList!==listView){listView=b.dataset.hpList;const scene=$('.hp-list-scene');scene.dataset.list=listView;scene.innerHTML=listMarkup();createListTimeline();updateList();$$('[data-hp-list]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.hpList===listView)));}}
  function teardown(){io?.disconnect();ro?.disconnect();compactTimeline?.reset();compactTurn?.cancel();listTimeline?.reset();compactTimeline=compactTurn=null;compactStarted=false;cancelAnimationFrame(resizeFrame);cancelAnimationFrame(scrollFrame);native?.destroy();native=null;visible.clear();host.removeEventListener('click',onClick);}
  const visibility=()=>updateMotion();document.addEventListener('visibilitychange',visibility);window.addEventListener('scroll',scroll,{passive:true});reduce.addEventListener('change',visibility);setup();
  return{setLocale(code){const next=copy[code]?code:'en';if(next===locale)return;teardown();locale=next;setup();},setTheme(value){theme=value;native?.setTheme(value);onViewport();},setActive(value){active=!!value;updateMotion();},destroy(){if(destroyed)return;teardown();destroyed=true;document.removeEventListener('visibilitychange',visibility);window.removeEventListener('scroll',scroll);reduce.removeEventListener('change',visibility);host.innerHTML='';}};
 }
 window.AltSIPHome={mount,accountPose};
})();
