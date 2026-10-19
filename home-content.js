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
      "Рабочая связь с защитой разговора. Подключите свою АТС и используйте шифрование, которое поддерживает ваш сервер."
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
    "contactNote": "Рабочий контакт. Обсуждение проекта и согласование встреч.",
    "connectBody": "Для SIP-провайдера и рабочей АТС.",
    "codecsBody": "Автоматическое согласование с сервером или свой порядок кодеков.",
    "signal": "Сигнализация",
    "voice": "Голос",
    "server": "Ваша АТС"
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
      "Work calls with protection built in. Connect your PBX and use the encryption your server supports."
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
    "contactNote": "Work contact. Project discussions and meeting coordination.",
    "connectBody": "For your SIP provider or business PBX.",
    "codecsBody": "Automatic negotiation with the server, or your preferred codec order.",
    "signal": "Signalling",
    "voice": "Voice",
    "server": "Your PBX"
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
      "Робочий зв’язок із захистом розмови. Підключіть свою АТС і використовуйте шифрування, яке підтримує сервер."
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
    "contactNote": "Робочий контакт. Обговорення проєкту та узгодження зустрічей.",
    "connectBody": "Для SIP-провайдера та робочої АТС.",
    "codecsBody": "Автоматичне узгодження із сервером або власний порядок кодеків.",
    "signal": "Сигналізація",
    "voice": "Голос",
    "server": "Ваша АТС"
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
      "Geschäftlich telefonieren und Gespräche schützen. Verbinden Sie Ihre Telefonanlage und nutzen Sie die vom Server unterstützte Verschlüsselung."
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
    "contactNote": "Geschäftlicher Kontakt. Projektbesprechungen und Terminabstimmung.",
    "connectBody": "Für Ihren SIP-Anbieter oder Ihre Telefonanlage.",
    "codecsBody": "Automatische Aushandlung mit dem Server oder eigene Codec-Reihenfolge.",
    "signal": "Signalisierung",
    "voice": "Sprache",
    "server": "Ihre Anlage"
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
      "Des appels professionnels protégés. Connectez votre standard et utilisez le chiffrement pris en charge par votre serveur."
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
    "contactNote": "Contact professionnel. Suivi de projet et organisation des réunions.",
    "connectBody": "Pour votre fournisseur SIP ou votre standard.",
    "codecsBody": "Négociation automatique avec le serveur ou ordre de codecs personnalisé.",
    "signal": "Signalisation",
    "voice": "Voix",
    "server": "Votre standard"
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
      "Llamadas de trabajo con protección. Conecta tu centralita y utiliza el cifrado que admite tu servidor."
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
    "contactNote": "Contacto de trabajo. Seguimiento de proyectos y coordinación de reuniones.",
    "connectBody": "Para tu proveedor SIP o centralita de empresa.",
    "codecsBody": "Negociación automática con el servidor o tu propio orden de códecs.",
    "signal": "Señalización",
    "voice": "Voz",
    "server": "Tu centralita"
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
      "Chiamate di lavoro protette. Collega il tuo centralino e usa la cifratura supportata dal server."
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
    "contactNote": "Contatto di lavoro. Discussione dei progetti e organizzazione delle riunioni.",
    "connectBody": "Per il tuo operatore SIP o centralino aziendale.",
    "codecsBody": "Negoziazione automatica con il server o un ordine dei codec personalizzato.",
    "signal": "Segnalazione",
    "voice": "Voce",
    "server": "Il tuo centralino"
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
      "Rozmowy służbowe z ochroną połączenia. Podłącz centralę i korzystaj z szyfrowania obsługiwanego przez serwer."
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
    "contactNote": "Kontakt służbowy. Omówienie projektu i ustalanie spotkań.",
    "connectBody": "Dla dostawcy SIP lub centrali firmowej.",
    "codecsBody": "Automatyczne uzgadnianie z serwerem lub własna kolejność kodeków.",
    "signal": "Sygnalizacja",
    "voice": "Głos",
    "server": "Twoja centrala"
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
      "Chamadas de trabalho protegidas. Ligue a sua central e utilize a cifragem suportada pelo servidor."
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
    "contactNote": "Contacto de trabalho. Discussão de projetos e coordenação de reuniões.",
    "connectBody": "Para o seu fornecedor SIP ou central empresarial.",
    "codecsBody": "Negociação automática com o servidor ou uma ordem de codecs personalizada.",
    "signal": "Sinalização",
    "voice": "Voz",
    "server": "A sua central"
  }
};
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const svg=n=>`<svg aria-hidden="true"><use href="#i-${n}"></use></svg>`;
 function callData(i){const start=10*3600+(42-i)*60,duration=60*(1+i%4)+12+i*2;const clock=n=>[Math.floor(n/3600),Math.floor(n/60)%60,n%60].map(v=>String(v).padStart(2,'0')).join(':');return{start:clock(start),end:clock(start+duration),duration:clock(duration).slice(3)};}
 // Readable Office card first; a horizontal fan on desktop, a two-column fan on phones.
 function accountPose(progress,index,width=1080){
  const t=Math.max(0,Math.min(1,progress)),mobile=width<620;
  const cardWidth=Math.min(240,(width-20)/(mobile?2:4)-12),gap=mobile?12:18;
  const x=mobile?((index%2)-.5)*(cardWidth+gap):(index-1.5)*(cardWidth+gap);
  const y=mobile?Math.floor(index/2)*102:Math.abs(index-1.5)*12;
  return{x:x*t||0,y:18+(1-t)*index*6+y*t,z:-index*(1-t)*2,angle:0,opacity:1,scale:.97+.03*t};
 }
 function mount(host,{lang='ru',onViewport=()=>{}}={}){
  let locale=copy[lang]?lang:'en',theme=document.documentElement.dataset.theme||'light',active=true,destroyed=false,compact=false,callMode='call',listView='history';
  let io,ro,resizeFrame=0,native,compactTimeline,compactTurn,compactStarted=false,listTimeline,listStarted=false,listCycle=0,listOffset=0,listTarget=0,listAnimations=[],accountTimeline,accountStarted=false,accountOpened=false,accountReady=false,accountWidth=0,accountAnimations=[],callTimeline,callStarted=false,callManual=false;
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
   <section class="hp-section hp-calls" data-hp-scene="calls">${heading(d.calls[0],d.calls[1])}<div class="hp-call-demo" data-mode="call"><div class="hp-session"><div class="hp-session-top"><span class="hp-session-live"><i></i><span class="hp-live-label">${esc(d.callModes[0])}</span></span><span class="hp-session-brand">AltSIP</span></div><div class="hp-session-people">${['client','you','colleague'].map((p,i)=>`<div class="hp-party hp-party-${p}"><span class="hp-party-avatar">${svg('person')}</span><strong>${esc(d.parties[i])}</strong></div>`).join('')}<span class="hp-session-join" aria-hidden="true"></span></div><div class="hp-session-bottom"><span class="hp-session-pill">${esc(d.callModes[1])}</span><span class="hp-session-pill">${esc(d.callModes[2])}</span></div></div></div><div class="hp-call-switch hp-modes" role="group" aria-label="${esc(d.calls[0])}">${['call','conference','transfer'].map((m,i)=>`<button type="button" data-hp-call="${m}" aria-pressed="${i===0}">${esc(d.callModes[i])}</button>`).join('')}</div><div class="hp-call-explanation" aria-live="polite"><h3 class="hp-call-state-title"></h3><p class="hp-call-status"></p></div></section>
   <section class="hp-section hp-tech" data-hp-scene="tech">${heading(d.tech[0],d.tech[1])}<div class="hp-security-feature"><h3>${esc(d.securityTitle)}</h3><div class="hp-secure-story"><div class="hp-secure-source"><span class="hp-secure-mark"><img src="assets/mark.svg" alt="" width="28" height="28"></span><strong>AltSIP</strong></div><div class="hp-secure-streams"><div class="hp-secure-stream hp-secure-sip"><span class="hp-stream-name">${esc(d.signal)}</span><span class="hp-stream-token">SIP</span><span class="hp-stream-convert">TLS</span><span class="hp-stream-packets" aria-hidden="true"><i></i><i></i><i></i></span><span class="hp-stream-received" aria-hidden="true">SIP</span></div><div class="hp-secure-stream hp-secure-voice"><span class="hp-stream-name">${esc(d.voice)}</span><span class="hp-stream-token"><span class="hp-sound-bars" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></span><span class="hp-stream-convert">SDES-SRTP</span><span class="hp-stream-packets" aria-hidden="true"><i></i><i></i><i></i></span><span class="hp-stream-received" aria-hidden="true">≋</span></div></div><div class="hp-secure-destination">${svg('server')}<strong>${esc(d.server)}</strong></div></div><p>${esc(d.security)}</p></div><div class="hp-tech-tiles"><article><div class="hp-protocols">${['UDP','TCP','TLS'].map(p=>`<span>${p}</span>`).join('')}</div><h3>${esc(d.connect)}</h3><p>${esc(d.connectBody)}</p></article><article><div class="hp-protocols">${['Opus','G.711','G.722'].map(p=>`<span>${p}</span>`).join('')}</div><h3>${esc(d.codecs)}</h3><p>${esc(d.codecsBody)}</p></article></div></section>
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
  function updateList(){const run=running()&&visible.has('lists');$('.hp-list-scene')?.classList.toggle('hp-running',run);
   if(run){if(!listStarted){listStarted=true;listTimeline.start();}else listTimeline.resume();listAnimations.forEach(a=>{if(a.playState==='paused')a.play();});}
   else{listTimeline.pause();listAnimations.forEach(a=>{if(a.playState==='running')a.pause();});}
  }
  function setCall(value){callMode=value;const i=['call','conference','transfer'].indexOf(value);$('.hp-call-demo').dataset.mode=value;$('.hp-live-label').textContent=c().callModes[i];$$('[data-hp-call]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.hpCall===value)));$('.hp-call-state-title').textContent=c().callModes[i];$('.hp-call-status').textContent=c().callStates[i];}
  const accountTransform=p=>`translate3d(${p.x}px,${p.y}px,${p.z}px) scale(${p.scale})`;
  function layoutAccounts(){const width=$('.hp-account-stage')?.getBoundingClientRect().width;if(!width||Math.abs(width-accountWidth)<.5)return;accountWidth=width;accountAnimations.forEach(a=>a.cancel());accountAnimations=[];$$('.hp-account').forEach((card,i)=>{card.style.transform=accountTransform(accountPose(accountOpened?1:0,i,width));});}
  function openAccounts(){accountOpened=true;const width=$('.hp-account-stage').getBoundingClientRect().width;accountWidth=width;$$('.hp-account').forEach((card,i)=>{const from=accountPose(0,i,width),to=accountPose(1,i,width);card.style.transform=accountTransform(to);if(!reduce.matches&&card.animate){const overshoot={...to,x:to.x*1.035,y:to.y+3};accountAnimations.push(card.animate([{transform:accountTransform(from)},{transform:accountTransform(overshoot),offset:.82},{transform:accountTransform(to)}],{duration:1150,delay:i*65,easing:'cubic-bezier(.22,.8,.3,1)'}));}});}
  function updateAccounts(){if(reduce.matches){accountTimeline?.reset();accountAnimations.forEach(a=>a.cancel());accountAnimations=[];if(!accountOpened)openAccounts();accountStarted=true;accountReady=false;return;}const run=running()&&visible.has('accounts');if(run&&accountReady){if(!accountStarted){accountStarted=true;accountTimeline.start();}else accountTimeline.resume();}else accountTimeline.pause();accountAnimations.forEach(a=>{if(run&&a.playState==='paused')a.play();else if(!run&&a.playState==='running')a.pause();});}
  function updateCall(){const run=running()&&visible.has('calls')&&!callManual;if(run){if(!callStarted){callStarted=true;callTimeline.start();}else callTimeline.resume();}else callTimeline.pause();}
  function updateMotion(){updateAccounts();updateCompact();updateList();updateCall();$('.hp-tech')?.classList.toggle('hp-running',running()&&visible.has('tech'));}
  function setup(){host.innerHTML=markup();setCall(callMode);createListTimeline();accountTimeline=new SceneTimeline([{at:320,run:openAccounts},{at:1730,run(){}}]);callTimeline=new SceneTimeline([{at:0,run:()=>setCall('call')},{at:3600,run:()=>setCall('conference')},{at:7200,run:()=>setCall('transfer')},{at:10800,run(){}}],{onComplete(){if(running()&&visible.has('calls')&&!callManual)callTimeline.start();else callStarted=false;}});host.addEventListener('click',onClick);io=new IntersectionObserver(entries=>{for(const e of entries){const name=e.target.dataset.hpScene;if(e.isIntersecting){visible.add(name);e.target.classList.add('hp-visible');if(name==='compact')ensure();if(name==='accounts'&&(e.intersectionRatio===undefined||e.intersectionRatio>=.5))accountReady=true;}else visible.delete(name);}updateMotion();onViewport();},{threshold:[.08,.5],rootMargin:'0px'});$$('[data-hp-scene]').forEach(e=>io.observe(e));ro=new ResizeObserver(()=>{layoutAccounts();if(native)queueFit();onViewport();});ro.observe(host);layoutAccounts();if(reduce.matches)updateAccounts();}
  function onClick(e){const b=e.target.closest('button');if(!b||!host.contains(b))return;if(b.dataset.hpCall){callManual=true;callTimeline.pause();setCall(b.dataset.hpCall);}if(b.dataset.hpList&&b.dataset.hpList!==listView){listView=b.dataset.hpList;const scene=$('.hp-list-scene');scene.dataset.list=listView;scene.innerHTML=listMarkup();createListTimeline();updateList();$$('[data-hp-list]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.hpList===listView)));}}
  function teardown(){io?.disconnect();ro?.disconnect();compactTimeline?.reset();compactTurn?.cancel();listTimeline?.reset();callTimeline?.reset();accountTimeline?.reset();clearListAnimations();accountAnimations.forEach(a=>a.cancel());accountAnimations=[];accountStarted=accountOpened=accountReady=callStarted=callManual=false;accountWidth=0;compactTimeline=compactTurn=null;compactStarted=false;cancelAnimationFrame(resizeFrame);native?.destroy();native=null;visible.clear();host.removeEventListener('click',onClick);}
  const visibility=()=>updateMotion();document.addEventListener('visibilitychange',visibility);reduce.addEventListener('change',visibility);setup();
  return{setLocale(code){const next=copy[code]?code:'en';if(next===locale)return;teardown();locale=next;setup();},setTheme(value){theme=value;native?.setTheme(value);onViewport();},setActive(value){active=!!value;updateMotion();},destroy(){if(destroyed)return;teardown();destroyed=true;document.removeEventListener('visibilitychange',visibility);reduce.removeEventListener('change',visibility);host.innerHTML='';}};
 }
 window.AltSIPHome={mount,accountPose};
})();
