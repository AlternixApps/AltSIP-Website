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
    "incoming": "Входящий вызов",
    "missed": "Пропущенный вызов",
    "declined": "Отклонено",
    "failed": "Не удалось выполнить вызов",
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
    "incoming": "Incoming call",
    "missed": "Missed call",
    "declined": "Declined",
    "failed": "Failed call",
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
    "incoming": "Вхідний виклик",
    "missed": "Пропущений виклик",
    "declined": "Відхилено",
    "failed": "Невдалий виклик",
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
    "incoming": "Eingehender Anruf",
    "missed": "Verpasster Anruf",
    "declined": "Abgelehnt",
    "failed": "Fehlgeschlagen",
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
    "incoming": "Appel entrant",
    "missed": "Appel manqué",
    "declined": "Refusé",
    "failed": "Échec de l’appel",
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
    "incoming": "Llamada entrante",
    "missed": "Llamada perdida",
    "declined": "Rechazada",
    "failed": "Llamada fallida",
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
    "incoming": "Chiamata in entrata",
    "missed": "Chiamata persa",
    "declined": "Rifiutata",
    "failed": "Chiamata non riuscita",
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
    "incoming": "Połączenie przychodzące",
    "missed": "Nieodebrane połączenie",
    "declined": "Odrzucono",
    "failed": "Nieudane połączenie",
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
    "incoming": "Chamada recebida",
    "missed": "Chamada não atendida",
    "declined": "Rejeitada",
    "failed": "Chamada falhada",
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
 const extra={
  ru:{accounts:'Множество SIP-аккаунтов',security:'TLS защищает SIP-сигнализацию с сервером. SDES-SRTP защищает медиапоток между его фактическими конечными точками. Оба режима требуют поддержки и включения на стороне сервера. Ключи SDES передаются в SIP-сигнализации.',signal:'SIP-сигнализация',media:'Медиапоток',mediaPeer:'Медиаузел',server:'SIP-сервер',trio:'Детали, которые помогают звонить',cards:[['Оценка качества','Оценка сети во время разговора по потерям, задержке и джиттеру. MOS появляется, когда данных достаточно.','Оценка сети, не качества речи'],['Порядок кодеков','Задайте приоритет поддерживаемых кодеков или оставьте выбор АТС. Порядок применяется при следующем SIP-подключении.','Выше в списке — выше приоритет'],['Обработка номера','Убирайте пробелы и ведущий знак + перед набором, если этого требует ваша АТС.','Пример обработки номера']]},
  en:{accounts:'Multiple SIP accounts',security:'TLS protects SIP signalling to the server. SDES-SRTP protects media between its actual endpoints. Both modes require server support and configuration. SDES keys travel in SIP signalling.',signal:'SIP signalling',media:'Media stream',mediaPeer:'Media endpoint',server:'SIP server',trio:'The details behind each call',cards:[['Call quality','A network estimate during a call based on loss, delay, and jitter. MOS appears when enough data is available.','Network estimate, not speech quality'],['Codec order','Prioritize supported codecs or let the PBX choose. The order takes effect on the next SIP connection.','Higher means higher priority'],['Number processing','Remove spaces and a leading + before dialing when your PBX requires it.','Example number processing']]},
  uk:{accounts:'Кілька SIP-акаунтів',security:'TLS захищає SIP-сигналізацію до сервера. SDES-SRTP захищає медіапотік між його фактичними кінцевими точками. Обидва режими потребують підтримки й увімкнення на сервері. Ключі SDES передаються в SIP-сигналізації.',signal:'SIP-сигналізація',media:'Медіапотік',mediaPeer:'Медіавузол',server:'SIP-сервер',trio:'Деталі для кожного дзвінка',cards:[['Якість зв’язку','Оцінка мережі під час розмови за втратами, затримкою і джитером. MOS з’являється, коли даних достатньо.','Оцінка мережі, не якості мовлення'],['Порядок кодеків','Установіть пріоритет кодеків або залиште вибір АТС. Порядок діє з наступного SIP-підключення.','Вище в списку — вищий пріоритет'],['Обробка номера','Прибирайте пробіли та початковий знак + перед набором, якщо цього потребує ваша АТС.','Приклад обробки номера']]},
  de:{accounts:'Mehrere SIP-Konten',security:'TLS schützt die SIP-Signalisierung zum Server. SDES-SRTP schützt Medien zwischen den tatsächlichen Endpunkten. Beide Modi erfordern Unterstützung und Aktivierung auf dem Server. SDES-Schlüssel werden in der SIP-Signalisierung übertragen.',signal:'SIP-Signalisierung',media:'Medienstrom',mediaPeer:'Medienendpunkt',server:'SIP-Server',trio:'Details für jeden Anruf',cards:[['Verbindungsqualität','Eine Netzwerkschätzung während des Anrufs anhand von Verlust, Verzögerung und Jitter. MOS erscheint bei ausreichenden Daten.','Netzwerkschätzung, keine Sprachmessung'],['Codec-Reihenfolge','Priorisieren Sie unterstützte Codecs oder lassen Sie die Anlage wählen. Die Reihenfolge gilt ab der nächsten SIP-Verbindung.','Oben bedeutet höhere Priorität'],['Nummernverarbeitung','Entfernen Sie vor der Wahl Leerzeichen und ein führendes +, wenn Ihre Anlage das erfordert.','Beispiel der Nummernverarbeitung']]},
  fr:{accounts:'Plusieurs comptes SIP',security:'TLS protège la signalisation SIP vers le serveur. SDES-SRTP protège les médias entre leurs points de terminaison réels. Les deux modes nécessitent une prise en charge et une activation côté serveur. Les clés SDES passent dans la signalisation SIP.',signal:'Signalisation SIP',media:'Flux média',mediaPeer:'Point média',server:'Serveur SIP',trio:'Les détails de chaque appel',cards:[['Qualité de l’appel','Une estimation réseau pendant l’appel fondée sur les pertes, le délai et la gigue. Le MOS apparaît avec assez de données.','Estimation réseau, pas qualité vocale'],['Ordre des codecs','Classez les codecs compatibles ou laissez le standard choisir. L’ordre s’applique à la prochaine connexion SIP.','Plus haut signifie plus prioritaire'],['Traitement du numéro','Supprimez les espaces et le + initial avant de composer si votre standard le demande.','Exemple de traitement du numéro']]},
  es:{accounts:'Varias cuentas SIP',security:'TLS protege la señalización SIP hasta el servidor. SDES-SRTP protege el medio entre sus extremos reales. Ambos modos requieren compatibilidad y activación en el servidor. Las claves SDES viajan en la señalización SIP.',signal:'Señalización SIP',media:'Flujo multimedia',mediaPeer:'Extremo multimedia',server:'Servidor SIP',trio:'Detalles para cada llamada',cards:[['Calidad de llamada','Estimación de red durante la llamada basada en pérdidas, retardo y fluctuación. MOS aparece cuando hay datos suficientes.','Estimación de red, no de voz'],['Orden de códecs','Prioriza los códecs compatibles o deja que la central elija. El orden se aplica en la siguiente conexión SIP.','Más arriba indica mayor prioridad'],['Procesamiento de números','Elimina espacios y el signo + inicial antes de marcar si tu central lo requiere.','Ejemplo de tratamiento del número']]},
  it:{accounts:'Più account SIP',security:'TLS protegge la segnalazione SIP verso il server. SDES-SRTP protegge il flusso multimediale tra i suoi effettivi endpoint. Entrambe le modalità richiedono supporto e attivazione sul server. Le chiavi SDES passano nella segnalazione SIP.',signal:'Segnalazione SIP',media:'Flusso multimediale',mediaPeer:'Endpoint media',server:'Server SIP',trio:'I dettagli di ogni chiamata',cards:[['Qualità della chiamata','Una stima della rete durante la chiamata basata su perdita, ritardo e jitter. Il MOS appare quando ci sono dati sufficienti.','Stima di rete, non della voce'],['Ordine dei codec','Dai priorità ai codec supportati o lascia scegliere il centralino. L’ordine vale dalla prossima connessione SIP.','Più in alto significa più prioritario'],['Elaborazione del numero','Rimuovi spazi e il segno + iniziale prima di comporre se il centralino lo richiede.','Esempio di elaborazione del numero']]},
  pl:{accounts:'Wiele kont SIP',security:'TLS chroni sygnalizację SIP do serwera. SDES-SRTP chroni strumień mediów między jego rzeczywistymi punktami końcowymi. Oba tryby wymagają obsługi i włączenia na serwerze. Klucze SDES są przesyłane w sygnalizacji SIP.',signal:'Sygnalizacja SIP',media:'Strumień mediów',mediaPeer:'Punkt mediów',server:'Serwer SIP',trio:'Szczegóły każdej rozmowy',cards:[['Jakość połączenia','Ocena sieci podczas rozmowy na podstawie strat, opóźnienia i jittera. MOS pojawia się, gdy danych jest dość.','Ocena sieci, nie jakości mowy'],['Kolejność kodeków','Ustaw priorytet kodeków albo pozwól wybrać centrali. Kolejność działa od następnego połączenia SIP.','Wyżej oznacza wyższy priorytet'],['Przetwarzanie numeru','Usuń spacje i początkowy znak + przed wybraniem numeru, jeśli wymaga tego centrala.','Przykład przetwarzania numeru']]},
  pt:{accounts:'Várias contas SIP',security:'TLS protege a sinalização SIP até ao servidor. SDES-SRTP protege o fluxo multimédia entre os seus pontos finais reais. Ambos os modos exigem suporte e ativação no servidor. As chaves SDES passam na sinalização SIP.',signal:'Sinalização SIP',media:'Fluxo multimédia',mediaPeer:'Ponto multimédia',server:'Servidor SIP',trio:'Detalhes de cada chamada',cards:[['Qualidade da chamada','Estimativa da rede durante a chamada baseada em perdas, atraso e jitter. O MOS aparece quando há dados suficientes.','Estimativa da rede, não da voz'],['Ordem dos codecs','Priorize codecs suportados ou deixe a central escolher. A ordem aplica-se na próxima ligação SIP.','Mais acima significa maior prioridade'],['Tratamento do número','Remova espaços e o sinal + inicial antes de marcar, se a sua central o exigir.','Exemplo de tratamento do número']]}
 };
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
 const mediaPeerHint={ru:'АТС или собеседник',en:'PBX or peer',uk:'АТС або співрозмовник',de:'Anlage oder Gegenstelle',fr:'Standard ou correspondant',es:'Central o interlocutor',it:'Centralino o interlocutore',pl:'Centrala lub rozmówca',pt:'Central ou interlocutor'};
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const svg=n=>`<svg aria-hidden="true"><use href="#i-${n}"></use></svg>`;
 // Same 24-unit construction as NeoIcon("person") in desktop-app/Icons.kt.
 const personGlyph=()=>'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="6" r="3.25"/><path d="M3 21v-2c0-7.2 18-7.2 18 0v2Z"/></svg>';
 const lockGlyph=()=>'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>';
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
 function mount(host,{lang='ru',onViewport=()=>{}}={}){
  let locale=copy[lang]?lang:'en',theme=document.documentElement.dataset.theme||'light',active=true,destroyed=false,compact=false,callMode='conference',listView='history',trioActive=0;
  let io,ro,resizeFrame=0,native,compactTimeline,compactTurn,compactStarted=false,listTimeline,listStarted=false,listCycle=0,listOffset=0,listTarget=0,listAnimations=[],accountTimeline,accountStarted=false,accountOpened=false,accountReady=false,accountAwaitEntry=false,accountWidth=0,accountAnimations=[],lastScrollY=window.scrollY||0,scrollingUp=false;
  const visible=new Set(),reduce=matchMedia('(prefers-reduced-motion: reduce)'),{SceneTimeline,TransitionController}=window.AltSIPTour;
  const people=window.AltSIPFixtures.people;
  const $=s=>host.querySelector(s),$$=s=>[...host.querySelectorAll(s)],c=()=>copy[locale];
  const heading=(title,body='')=>`<div class="hp-heading"><h2>${esc(title)}</h2>${body?`<p>${esc(body)}</p>`:''}</div>`;
  function detailContent(index){const d=c(),t=detailTerms[locale],contact=listView==='contacts',[name,phone]=people[index],data=callData(index),connected=data.duration!=='00:00',sip=data.sip.split(' · ');return `<div class="hp-detail-head"><span class="hp-detail-symbol" data-kind="${contact?'contact':data.kind}">${contact?svg('person'):historyIcon(data.kind)}</span><div><h3>${esc(contact?name:phone)}</h3>${!contact?`<p class="hp-detail-kind" data-kind="${data.kind}">${esc(d[data.kind])}</p>`:''}</div></div>${contact?`<div class="hp-contact-note"><span>${esc(d.noteLabel)}</span><p>${esc(d.contactNote)}</p></div>`:`<dl>${[[d.started,'19.10.2026 '+data.start],[d.ended,'19.10.2026 '+data.end],[d.duration,data.duration],[d.direction,d[data.incoming?'incoming':'outgoing']],[t[0],sip[0]],[t[1],sip[1]||'—'],[t[2],data.kind==='declined'?t[4]:data.kind==='failed'?t[5]:t[3]],...(connected?[['DTMF','2 · 5 · #']]:[])].map(([label,value])=>`<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>`}`;}
  function listMarkup(){const d=c(),contact=listView==='contacts';const rows=people.map(([name,phone],i)=>{const data=callData(i);return `<div class="hp-floating-row" data-entry="${i}" data-kind="${contact?'contact':data.kind}"><span class="hp-row-icon">${contact?svg('person'):historyIcon(data.kind)}</span><span class="hp-row-copy"><strong>${esc(contact?name:phone)}</strong><small>${esc(contact?phone:'19.10 · '+data.start.slice(0,5)+' · '+data.duration)}</small>${contact?'':`<small class="hp-row-status">${esc(d[data.kind])}</small>`}</span><span class="hp-row-more" aria-hidden="true">⋮</span></div>`;}).join('');return `<div class="hp-list-window" aria-hidden="true"><div class="hp-floating-rows"><div class="hp-rows-cycle">${rows}</div><div class="hp-rows-cycle">${rows}</div></div></div><article class="hp-list-detail">${detailContent(5)}</article>`;}
  function trioMarkup(){const x=extra[locale];return `<section class="hp-section hp-trio" data-hp-scene="trio">${heading(x.trio)}<div class="hp-trio-grid">${x.cards.map(([title,body,note],i)=>`<article class="hp-trio-card" data-trio-card="${i}" data-open="${i===trioActive}"><button type="button" data-trio-button="${i}" aria-expanded="${i===trioActive}" aria-controls="hp-trio-detail-${i}"><span class="hp-trio-index">0${i+1}</span><strong>${esc(title)}</strong><span class="hp-trio-chevron" aria-hidden="true">↗</span></button><div class="hp-trio-panel"><div class="hp-trio-art hp-trio-art-${i}" aria-hidden="true">${i===0?'<span class="hp-mos-ring"><b>4.2</b><small>MOS ≈</small></span><span class="hp-mos-bars"><i></i><i></i><i></i><i></i><i></i></span>':i===1?'<span class="hp-codec-order"><i><b>01</b> Opus</i><i><b>02</b> G.722</i><i><b>03</b> G.711</i></span>':'<span class="hp-number-rule"><i>+1 202 555 0142</i><b>→</b><i>12025550142</i></span>'}</div><small class="hp-trio-note">${esc(note)}</small><p class="hp-trio-detail" id="hp-trio-detail-${i}" ${i===trioActive?'':'hidden'}>${esc(body)}</p></div></article>`).join('')}</div></section>`;}
  function markup(){const d=c(),x=extra[locale];return `<div class="home-overview home-premium" lang="${locale}">
   <section class="hp-section hp-accounts" data-hp-scene="accounts">${heading(x.accounts,d.accounts[1])}<div class="hp-account-stage"><div class="hp-account-stack">${['Office','Support','Personal','Secondary'].map((name,i)=>`<div class="hp-account" style="--slot:${i}"><span class="hp-account-dot"></span><span><strong>${name}</strong><small>${12025550142+i}</small></span><i class="hp-account-edge" aria-hidden="true"></i></div>`).join('')}</div></div></section>
   <section class="hp-section hp-compact" data-hp-scene="compact">${heading(d.compact[0],d.compact[1])}<div class="hp-compact-stage"><div class="hp-compact-position"><div class="hp-compact-turn"><div class="hp-compact-depth" aria-hidden="true">${Array.from({length:10},(_,i)=>`<i style="--depth:${i}"></i>`).join('')}</div><div class="hp-native-frame" inert aria-hidden="true"><div class="hp-native"></div></div><div class="hp-compact-back" aria-hidden="true"><img src="assets/mark.svg" alt=""></div></div></div></div></section>
   <div class="hp-audio-slot" data-home-audio="sound"></div><div class="hp-audio-slot" data-home-audio="echo"></div><div class="hp-audio-slot" data-home-audio="record"></div>
   <section class="hp-section hp-history" data-hp-scene="lists"><div class="hp-history-copy">${heading(d.history)}<div class="hp-modes" role="group" aria-label="${esc(d.history)}"><button type="button" data-hp-list="history" aria-pressed="${listView==='history'}">${esc(d.historyTab)}</button><button type="button" data-hp-list="contacts" aria-pressed="${listView==='contacts'}">${esc(d.contactsTab)}</button></div></div><div class="hp-list-scene" data-list="${listView}">${listMarkup()}</div></section>
   ${trioMarkup()}
   <section class="hp-section hp-calls" data-hp-scene="calls">${heading(d.calls[0],d.calls[1])}<div class="hp-call-demo" data-mode="${callMode}"><svg class="hp-call-lines" aria-hidden="true"><path class="hp-flow-client"/><path class="hp-flow-colleague"/><path class="hp-flow-transfer"/></svg>${['client','you','colleague'].map((p,i)=>`<div class="hp-party hp-party-${p}"><span class="hp-party-avatar">${personGlyph()}</span><strong>${esc(d.parties[i])}</strong></div>`).join('')}</div><div class="hp-call-switch hp-modes" role="group" aria-label="${esc(d.calls[0])}">${['call','conference','transfer'].map((m,i)=>`<button type="button" data-hp-call="${m}" aria-pressed="${m===callMode}">${esc(d.callModes[i])}</button>`).join('')}</div><div class="hp-call-explanation" aria-live="polite"><h3 class="hp-call-state-title"></h3><p class="hp-call-status"></p></div></section>
   <section class="hp-section hp-tech" data-hp-scene="tech">${heading(d.tech[0],d.tech[1])}<div class="hp-security-feature"><h3>${esc(d.securityTitle)}</h3><div class="hp-security-diagram"><div class="hp-security-node hp-security-app"><span><img src="assets/mark.svg" alt="" width="28" height="28"></span><strong>AltSIP</strong></div><div class="hp-security-lanes"><div class="hp-security-lane"><span class="hp-lane-heading">${esc(x.signal)} <b>TLS</b></span><span class="hp-lane-track"><i class="hp-lane-dot"></i><i class="hp-lane-dot"></i><span class="hp-path-lock">${lockGlyph()}</span></span></div><div class="hp-security-lane"><span class="hp-lane-heading">${esc(x.media)} <b>SDES-SRTP</b></span><span class="hp-lane-track"><i class="hp-lane-dot"></i><i class="hp-lane-dot"></i><span class="hp-path-lock">${lockGlyph()}</span></span></div></div><div class="hp-security-targets"><div class="hp-security-node"><span>${svg('server')}</span><strong>${esc(x.server)}</strong></div><div class="hp-security-node"><span>${svg('server')}</span><strong>${esc(x.mediaPeer)}</strong><small>${esc(mediaPeerHint[locale])}</small></div></div></div><p>${esc(x.security)}</p></div><div class="hp-tech-tiles"><article><div class="hp-protocols">${['UDP','TCP','TLS'].map(p=>`<span>${p}</span>`).join('')}</div><h3>${esc(d.connect)}</h3><p>${esc(d.connectBody)}</p></article><article><div class="hp-protocols">${['Opus','G.711','G.722'].map(p=>`<span>${p}</span>`).join('')}</div><h3>${esc(d.codecs)}</h3><p>${esc(d.codecsBody)}</p></article></div></section>
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
  function syncCallGeometry(){const stage=$('.hp-call-demo'),svg=$('.hp-call-lines'),r=stage?.getBoundingClientRect();if(!r?.width)return;const a=$('.hp-party-client .hp-party-avatar')?.getBoundingClientRect(),y=a?.height?a.top+a.height/2-r.top:Math.min(86,r.height*.36||86),w=r.width;svg.setAttribute('viewBox',`0 0 ${w} ${r.height}`);[['.hp-flow-client',.2,.5],['.hp-flow-colleague',.5,.73],['.hp-flow-transfer',.39,.61]].forEach(([selector,x1,x2],i)=>{if(i===0&&callMode==='conference')x1=.27;$(selector)?.setAttribute('d',`M${w*x1} ${y} L${w*x2} ${y}`);});}
  function setCall(value){callMode=value;const i=['call','conference','transfer'].indexOf(value);$('.hp-call-demo').dataset.mode=value;$$('[data-hp-call]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.hpCall===value)));$('.hp-call-state-title').textContent=c().callModes[i];$('.hp-call-status').textContent=c().callStates[i];syncCallGeometry();}
  const accountTransform=p=>`translate3d(${p.x}px,${p.y}px,${p.z}px) scale(${p.scale})`;
  function currentAccountTransform(card){const current=typeof getComputedStyle==='function'?getComputedStyle(card).transform:null;return current&&current!=='none'?current:card.style.transform;}
  function layoutAccounts(){const width=$('.hp-account-stage')?.getBoundingClientRect().width;if(!width||Math.abs(width-accountWidth)<2)return;const previous=accountWidth;accountWidth=width;if(accountAnimations.some(a=>a.playState==='running')&&Math.abs(width-previous)<24)return;accountAnimations.forEach(a=>a.cancel());accountAnimations=[];$$('.hp-account').forEach((card,i)=>{card.style.transform=accountTransform(accountPose(accountOpened?1:0,i,width));});}
  function openAccounts(){accountOpened=true;accountAwaitEntry=false;const width=$('.hp-account-stage').getBoundingClientRect().width;accountWidth=width;const cards=$$('.hp-account'),from=cards.map(currentAccountTransform);accountAnimations.forEach(a=>a.cancel());accountAnimations=[];cards.forEach((card,i)=>{const start=from[i]||accountTransform(accountPose(0,i,width)),to=accountTransform(accountPose(1,i,width));card.style.transform=to;if(!reduce.matches&&card.animate)accountAnimations.push(card.animate([{transform:start},{transform:to}],{duration:980,delay:i*45,easing:'cubic-bezier(.22,.72,.28,1)',fill:'backwards'}));});}
  function foldAccounts(animate=false){accountTimeline.reset();const width=$('.hp-account-stage').getBoundingClientRect().width||accountWidth,run=animate&&running()&&visible.has('accounts');const cards=$$('.hp-account'),from=cards.map(currentAccountTransform);accountAnimations.forEach(a=>a.cancel());accountAnimations=[];accountStarted=accountOpened=accountReady=false;accountAwaitEntry=true;cards.forEach((card,i)=>{const to=accountTransform(accountPose(0,i,width));card.style.transform=to;if(run&&card.animate)accountAnimations.push(card.animate([{transform:from[i]||to},{transform:to}],{duration:620,easing:'cubic-bezier(.32,0,.38,1)',fill:'backwards'}));});}
  function onScroll(){const y=window.scrollY||0;scrollingUp=y<lastScrollY;lastScrollY=y;if(!active||document.hidden||reduce.matches||!accountOpened||!scrollingUp)return;const top=$('.hp-accounts')?.getBoundingClientRect().top;if(top>=innerHeight)foldAccounts();}
  function updateAccounts(){if(reduce.matches){accountTimeline?.reset();accountAnimations.forEach(a=>a.cancel());accountAnimations=[];if(!accountOpened)openAccounts();accountStarted=true;accountReady=false;return;}const run=running()&&visible.has('accounts');if(run&&accountReady){if(!accountStarted){accountStarted=true;accountTimeline.start();}else accountTimeline.resume();}else accountTimeline.pause();accountAnimations.forEach(a=>{if(run&&a.playState==='paused')a.play();else if(!run&&a.playState==='running')a.pause();});if(!run&&!accountOpened&&accountAnimations.length){accountAnimations.forEach(a=>a.cancel());accountAnimations=[];}}
  function updateMotion(){updateAccounts();updateCompact();updateList();$('.hp-calls')?.classList.toggle('hp-running',running()&&visible.has('calls'));$('.hp-tech')?.classList.toggle('hp-running',running()&&visible.has('tech'));$('.hp-trio')?.classList.toggle('hp-running',running()&&visible.has('trio'));}
  function setTrio(index){if(index<0||index>2||index===trioActive)return;trioActive=index;$$('[data-trio-card]').forEach((card,i)=>{const open=i===index;card.dataset.open=String(open);const button=card.querySelector('button');button.setAttribute('aria-expanded',String(open));card.querySelector('.hp-trio-detail').hidden=!open;});}
  function onTrioFocus(e){const card=e.target.closest?.('[data-trio-card]');if(card&&host.contains(card))setTrio(Number(card.dataset.trioCard));}
  function setup(){host.innerHTML=markup();setCall(callMode);createListTimeline();accountTimeline=new SceneTimeline([{at:320,run:openAccounts},{at:1450,run(){}}]);host.addEventListener('click',onClick);host.addEventListener('pointerover',onTrioFocus);host.addEventListener('focusin',onTrioFocus);io=new IntersectionObserver(entries=>{for(const e of entries){const name=e.target.dataset.hpScene;if(e.isIntersecting){visible.add(name);e.target.classList.add('hp-visible');if(name==='compact')ensure();if(name==='accounts'){if(accountOpened&&e.intersectionRatio<.25&&e.boundingClientRect?.top>0&&scrollingUp)foldAccounts(true);else if(e.intersectionRatio>=.5&&(!accountAwaitEntry||!scrollingUp)){accountReady=true;accountAwaitEntry=false;}}}else visible.delete(name);}updateMotion();onViewport();},{threshold:[0,.25,.5],rootMargin:'0px'});$$('[data-hp-scene]').forEach(e=>io.observe(e));ro=new ResizeObserver(()=>{layoutAccounts();syncCallGeometry();if(native)queueFit();onViewport();});ro.observe(host);layoutAccounts();if(reduce.matches)updateAccounts();}
  function onClick(e){const b=e.target.closest('button');if(!b||!host.contains(b))return;if(b.dataset.hpCall)setCall(b.dataset.hpCall);if(b.dataset.trioButton!==undefined)setTrio(Number(b.dataset.trioButton));if(b.dataset.hpList&&b.dataset.hpList!==listView){listView=b.dataset.hpList;const scene=$('.hp-list-scene');scene.dataset.list=listView;scene.innerHTML=listMarkup();createListTimeline();updateList();$$('[data-hp-list]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.hpList===listView)));}}
  function teardown(){io?.disconnect();ro?.disconnect();compactTimeline?.reset();compactTurn?.cancel();listTimeline?.reset();accountTimeline?.reset();clearListAnimations();accountAnimations.forEach(a=>a.cancel());accountAnimations=[];accountStarted=accountOpened=accountReady=accountAwaitEntry=false;accountWidth=0;compactTimeline=compactTurn=null;compactStarted=false;cancelAnimationFrame(resizeFrame);native?.destroy();native=null;visible.clear();host.removeEventListener('click',onClick);host.removeEventListener('pointerover',onTrioFocus);host.removeEventListener('focusin',onTrioFocus);}
  const visibility=()=>updateMotion();document.addEventListener('visibilitychange',visibility);reduce.addEventListener('change',visibility);window.addEventListener('scroll',onScroll,{passive:true});setup();
  return{setLocale(code){const next=copy[code]?code:'en';if(next===locale)return;teardown();locale=next;setup();},setTheme(value){theme=value;native?.setTheme(value);onViewport();},setActive(value){active=!!value;updateMotion();},destroy(){if(destroyed)return;teardown();destroyed=true;document.removeEventListener('visibilitychange',visibility);reduce.removeEventListener('change',visibility);window.removeEventListener('scroll',onScroll);host.innerHTML='';}};
 }
 window.AltSIPHome={mount,accountPose};
})();
