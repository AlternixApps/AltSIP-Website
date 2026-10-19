/* One shared audio engine, two deliberate listening scenes, bounded native previews. */
(() => {
 'use strict';
 const copy={
  "ru": {
    "accounts": [
      "Несколько SIP-аккаунтов\nБыстрое переключение",
      "Используйте аккаунты разных провайдеров и АТС. Выбирайте нужный перед звонком, не переключаясь между программами."
    ],
    "accountHint": "Выберите аккаунт",
    "compact": [
      "Полный интерфейс\nИ компактный, когда нужно",
      "В компактном режиме остаются основные элементы управления звонком. Переключайтесь между видами, сохраняя место для других окон."
    ],
    "full": "Полный",
    "small": "Компактный",
    "noise": [
      "Шумоподавление, которое можно услышать",
      "Сравните исходную запись с лёгкой и сильной обработкой фонового шума."
    ],
    "record": [
      "Один разговор\nДве отдельные дорожки",
      "Две стороны вызова записываются отдельно. Слушайте каждую сторону или обе дорожки вместе."
    ],
    "listen": "Послушайте сами",
    "play": "Слушать",
    "pause": "Пауза",
    "loading": "Загрузка",
    "modes": [
      "Оригинал",
      "Лёгкое",
      "Сильное"
    ],
    "processing": "Шумоподавление",
    "tracks": "Дорожки записи",
    "trackModes": [
      "Вместе",
      "Ваша сторона",
      "Собеседник"
    ],
    "sides": [
      "Ваша сторона",
      "Собеседник"
    ],
    "volume": "Громкость",
    "seek": "Позиция воспроизведения",
    "error": "Не удалось загрузить запись. Попробуйте ещё раз.",
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
      "Вы разговариваете с клиентом",
      "Два отвеченных вызова объединены. Вы участвуете в разговоре втроём.",
      "После консультации клиент продолжает разговор с коллегой. Ваше участие завершено."
    ],
    "tech": [
      "Настройте AltSIP под свою телефонию",
      "Подключайтесь к SIP-провайдеру или рабочей АТС, выбирайте кодеки и параметры соединения."
    ],
    "connect": "Подключение",
    "codecs": "Аудиокодеки",
    "settings": "Настройки",
    "settingsBody": "Приоритет кодеков · обработка номера · SIP-аккаунты",
    "security": "TLS защищает сигнализацию, SDES-SRTP — голос, если оба режима поддерживает и включает ваш сервис. SDES-ключи передаются в сигнализации.",
    "setup": "Настройка SIP-аккаунта",
    "history": "История звонков и контакты",
    "historyTab": "История",
    "contactsTab": "Контакты"
  },
  "en": {
    "accounts": [
      "Multiple SIP accounts\nA quick switch",
      "Use accounts from different providers and PBXs. Choose one before calling, without changing apps."
    ],
    "accountHint": "Choose an account",
    "compact": [
      "The full interface\nCompact when you need it",
      "Compact mode keeps essential call controls visible and leaves room for other windows."
    ],
    "full": "Full",
    "small": "Compact",
    "noise": [
      "Noise reduction you can hear",
      "Compare the original recording with light and strong background noise reduction."
    ],
    "record": [
      "One conversation\nTwo separate tracks",
      "Both sides of the call are recorded separately. Listen to each side or play both together."
    ],
    "listen": "Listen for yourself",
    "play": "Play",
    "pause": "Pause",
    "loading": "Loading",
    "modes": [
      "Original",
      "Light",
      "Strong"
    ],
    "processing": "Noise reduction",
    "tracks": "Recording tracks",
    "trackModes": [
      "Together",
      "Your side",
      "Other party"
    ],
    "sides": [
      "Your side",
      "Other party"
    ],
    "volume": "Volume",
    "seek": "Playback position",
    "error": "The recording could not load. Try again.",
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
      "You are speaking with the client",
      "Two answered calls are merged. All three of you can talk.",
      "After consultation, the client speaks with your colleague. Your part of the call is over."
    ],
    "tech": [
      "Set up AltSIP for your phone service",
      "Connect to a SIP provider or office PBX, choose codecs and adjust connection settings."
    ],
    "connect": "Connection",
    "codecs": "Audio codecs",
    "settings": "Settings",
    "settingsBody": "Codec priority · number formatting · SIP accounts",
    "security": "TLS protects signaling and SDES-SRTP protects voice when your service supports and enables both. SDES keys travel in signaling.",
    "setup": "SIP account setup",
    "history": "Call history and contacts",
    "historyTab": "History",
    "contactsTab": "Contacts"
  },
  "uk": {
    "accounts": [
      "Кілька SIP-акаунтів\nШвидке перемикання",
      "Використовуйте акаунти різних провайдерів та АТС. Вибирайте потрібний перед дзвінком, не змінюючи застосунок."
    ],
    "accountHint": "Виберіть акаунт",
    "compact": [
      "Повний інтерфейс\nІ компактний, коли потрібно",
      "У компактному режимі залишаються основні кнопки виклику. Звільніть місце для інших вікон."
    ],
    "full": "Повний",
    "small": "Компактний",
    "noise": [
      "Шумозаглушення, яке можна почути",
      "Порівняйте оригінал запису з легкою та сильною обробкою фонового шуму."
    ],
    "record": [
      "Одна розмова\nДві окремі доріжки",
      "Сторони виклику записуються окремо. Слухайте кожну сторону або обидві разом."
    ],
    "listen": "Послухайте самі",
    "play": "Слухати",
    "pause": "Пауза",
    "loading": "Завантаження",
    "modes": [
      "Оригінал",
      "Легке",
      "Сильне"
    ],
    "processing": "Шумозаглушення",
    "tracks": "Доріжки запису",
    "trackModes": [
      "Разом",
      "Ваша сторона",
      "Співрозмовник"
    ],
    "sides": [
      "Ваша сторона",
      "Співрозмовник"
    ],
    "volume": "Гучність",
    "seek": "Позиція відтворення",
    "error": "Не вдалося завантажити запис. Спробуйте ще раз.",
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
      "Ви розмовляєте з клієнтом",
      "Два прийняті виклики об’єднано. Ви розмовляєте втрьох.",
      "Після консультації клієнт розмовляє з колегою. Вашу участь завершено."
    ],
    "tech": [
      "Налаштуйте AltSIP під свою телефонію",
      "Підключайтеся до SIP-провайдера чи робочої АТС, вибирайте кодеки й параметри з’єднання."
    ],
    "connect": "Підключення",
    "codecs": "Аудіокодеки",
    "settings": "Налаштування",
    "settingsBody": "Пріоритет кодеків · обробка номера · SIP-акаунти",
    "security": "TLS захищає сигналізацію, SDES-SRTP — голос, якщо сервіс підтримує та вмикає обидва режими. Ключі SDES передаються в сигналізації.",
    "setup": "Налаштування SIP-акаунта",
    "history": "Історія дзвінків і контакти",
    "historyTab": "Історія",
    "contactsTab": "Контакти"
  },
  "de": {
    "accounts": [
      "Mehrere SIP-Konten\nSchnell gewechselt",
      "Nutzen Sie Konten verschiedener Anbieter und Telefonanlagen. Wählen Sie vor dem Anruf das passende Konto, ohne die App zu wechseln."
    ],
    "accountHint": "Konto auswählen",
    "compact": [
      "Die vollständige Oberfläche\nBei Bedarf kompakt",
      "Im kompakten Modus bleiben die wichtigsten Anrufbedienelemente sichtbar. So bleibt Platz für andere Fenster."
    ],
    "full": "Vollständig",
    "small": "Kompakt",
    "noise": [
      "Rauschunterdrückung zum Anhören",
      "Vergleichen Sie die Originalaufnahme mit leichter und starker Rauschunterdrückung."
    ],
    "record": [
      "Ein Gespräch\nZwei getrennte Spuren",
      "Beide Seiten werden getrennt aufgezeichnet. Hören Sie eine Seite oder beide gemeinsam."
    ],
    "listen": "Selbst anhören",
    "play": "Abspielen",
    "pause": "Pause",
    "loading": "Wird geladen",
    "modes": [
      "Original",
      "Leicht",
      "Stark"
    ],
    "processing": "Rauschunterdrückung",
    "tracks": "Aufnahmespuren",
    "trackModes": [
      "Zusammen",
      "Ihre Seite",
      "Gegenseite"
    ],
    "sides": [
      "Ihre Seite",
      "Gegenseite"
    ],
    "volume": "Lautstärke",
    "seek": "Wiedergabeposition",
    "error": "Die Aufnahme konnte nicht geladen werden. Versuchen Sie es erneut.",
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
      "Sie sprechen mit dem Kunden",
      "Zwei angenommene Anrufe sind verbunden. Sie sprechen zu dritt.",
      "Nach der Rücksprache spricht der Kunde mit Ihrem Kollegen. Ihr Gespräch ist beendet."
    ],
    "tech": [
      "AltSIP für Ihre Telefonie",
      "Verbinden Sie einen SIP-Anbieter oder eine Telefonanlage, wählen Sie Codecs und Verbindungseinstellungen."
    ],
    "connect": "Verbindung",
    "codecs": "Audiocodecs",
    "settings": "Einstellungen",
    "settingsBody": "Codec-Priorität · Nummernformat · SIP-Konten",
    "security": "TLS schützt die Signalisierung und SDES-SRTP die Sprache, wenn Ihr Dienst beides unterstützt und aktiviert. SDES-Schlüssel werden über die Signalisierung übertragen.",
    "setup": "SIP-Konto einrichten",
    "history": "Anrufliste und Kontakte",
    "historyTab": "Anrufliste",
    "contactsTab": "Kontakte"
  },
  "fr": {
    "accounts": [
      "Plusieurs comptes SIP\nUn changement rapide",
      "Utilisez des comptes de différents fournisseurs et standards. Choisissez le compte avant d’appeler, sans changer d’application."
    ],
    "accountHint": "Choisir un compte",
    "compact": [
      "L’interface complète\nCompacte si nécessaire",
      "Le mode compact garde les commandes essentielles des appels et libère de la place pour vos autres fenêtres."
    ],
    "full": "Complet",
    "small": "Compact",
    "noise": [
      "Une réduction du bruit à écouter",
      "Comparez l’enregistrement original aux traitements léger et fort du bruit de fond."
    ],
    "record": [
      "Une conversation\nDeux pistes distinctes",
      "Les deux côtés de l’appel sont enregistrés séparément. Écoutez un côté ou les deux ensemble."
    ],
    "listen": "Écoutez la différence",
    "play": "Écouter",
    "pause": "Pause",
    "loading": "Chargement",
    "modes": [
      "Original",
      "Léger",
      "Fort"
    ],
    "processing": "Réduction du bruit",
    "tracks": "Pistes enregistrées",
    "trackModes": [
      "Ensemble",
      "Votre côté",
      "Interlocuteur"
    ],
    "sides": [
      "Votre côté",
      "Interlocuteur"
    ],
    "volume": "Volume",
    "seek": "Position de lecture",
    "error": "Impossible de charger l’enregistrement. Réessayez.",
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
      "Vous parlez avec le client",
      "Deux appels acceptés sont réunis. Vous parlez à trois.",
      "Après consultation, le client parle au collègue. Votre participation est terminée."
    ],
    "tech": [
      "AltSIP pour votre téléphonie",
      "Connectez un fournisseur SIP ou un standard, choisissez les codecs et les paramètres de connexion."
    ],
    "connect": "Connexion",
    "codecs": "Codecs audio",
    "settings": "Réglages",
    "settingsBody": "Priorité des codecs · format des numéros · comptes SIP",
    "security": "TLS protège la signalisation et SDES-SRTP la voix si le service prend en charge et active les deux. Les clés SDES transitent dans la signalisation.",
    "setup": "Configurer un compte SIP",
    "history": "Historique des appels et contacts",
    "historyTab": "Historique",
    "contactsTab": "Contacts"
  },
  "es": {
    "accounts": [
      "Varias cuentas SIP\nUn cambio rápido",
      "Usa cuentas de distintos proveedores y centralitas. Elige la cuenta antes de llamar sin cambiar de aplicación."
    ],
    "accountHint": "Elige una cuenta",
    "compact": [
      "La interfaz completa\nCompacta cuando la necesitas",
      "El modo compacto mantiene los controles esenciales de llamada y deja espacio para otras ventanas."
    ],
    "full": "Completa",
    "small": "Compacta",
    "noise": [
      "Reducción de ruido que puedes oír",
      "Compara la grabación original con la reducción ligera e intensa del ruido de fondo."
    ],
    "record": [
      "Una conversación\nDos pistas separadas",
      "Los dos lados de la llamada se graban por separado. Escucha uno o ambos a la vez."
    ],
    "listen": "Escúchalo tú mismo",
    "play": "Reproducir",
    "pause": "Pausa",
    "loading": "Cargando",
    "modes": [
      "Original",
      "Ligera",
      "Intensa"
    ],
    "processing": "Reducción de ruido",
    "tracks": "Pistas grabadas",
    "trackModes": [
      "Juntas",
      "Tu lado",
      "Interlocutor"
    ],
    "sides": [
      "Tu lado",
      "Interlocutor"
    ],
    "volume": "Volumen",
    "seek": "Posición de reproducción",
    "error": "No se pudo cargar la grabación. Inténtalo de nuevo.",
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
      "Estás hablando con el cliente",
      "Dos llamadas contestadas están unidas. Habláis los tres.",
      "Tras la consulta, el cliente habla con tu compañero. Tu participación ha terminado."
    ],
    "tech": [
      "Configura AltSIP para tu telefonía",
      "Conecta tu proveedor SIP o centralita y elige los codecs y parámetros de conexión."
    ],
    "connect": "Conexión",
    "codecs": "Codecs de audio",
    "settings": "Ajustes",
    "settingsBody": "Prioridad de codecs · formato del número · cuentas SIP",
    "security": "TLS protege la señalización y SDES-SRTP la voz si el servicio admite y activa ambos. Las claves SDES viajan en la señalización.",
    "setup": "Configurar una cuenta SIP",
    "history": "Historial de llamadas y contactos",
    "historyTab": "Historial",
    "contactsTab": "Contactos"
  },
  "it": {
    "accounts": [
      "Più account SIP\nUn cambio rapido",
      "Usa account di provider e centralini diversi. Scegli quello giusto prima di chiamare, senza cambiare app."
    ],
    "accountHint": "Scegli un account",
    "compact": [
      "L’interfaccia completa\nCompatta quando serve",
      "La modalità compatta mantiene i comandi essenziali della chiamata e lascia spazio alle altre finestre."
    ],
    "full": "Completa",
    "small": "Compatta",
    "noise": [
      "La riduzione del rumore si sente",
      "Confronta la registrazione originale con la riduzione leggera e forte del rumore di fondo."
    ],
    "record": [
      "Una conversazione\nDue tracce separate",
      "I due lati della chiamata vengono registrati separatamente. Ascoltane uno o entrambi insieme."
    ],
    "listen": "Ascolta la differenza",
    "play": "Ascolta",
    "pause": "Pausa",
    "loading": "Caricamento",
    "modes": [
      "Originale",
      "Leggera",
      "Forte"
    ],
    "processing": "Riduzione del rumore",
    "tracks": "Tracce registrate",
    "trackModes": [
      "Insieme",
      "Il tuo lato",
      "Interlocutore"
    ],
    "sides": [
      "Il tuo lato",
      "Interlocutore"
    ],
    "volume": "Volume",
    "seek": "Posizione di riproduzione",
    "error": "Impossibile caricare la registrazione. Riprova.",
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
      "Stai parlando con il cliente",
      "Due chiamate accettate sono unite. Potete parlare in tre.",
      "Dopo la consultazione, il cliente parla con il collega. La tua partecipazione è terminata."
    ],
    "tech": [
      "Configura AltSIP per la tua telefonia",
      "Collega il provider SIP o il centralino, scegli i codec e i parametri di connessione."
    ],
    "connect": "Connessione",
    "codecs": "Codec audio",
    "settings": "Impostazioni",
    "settingsBody": "Priorità codec · formato numeri · account SIP",
    "security": "TLS protegge la segnalazione e SDES-SRTP la voce se il servizio supporta e attiva entrambi. Le chiavi SDES viaggiano nella segnalazione.",
    "setup": "Configurare un account SIP",
    "history": "Cronologia chiamate e contatti",
    "historyTab": "Cronologia",
    "contactsTab": "Contatti"
  },
  "pl": {
    "accounts": [
      "Kilka kont SIP\nSzybkie przełączanie",
      "Korzystaj z kont różnych operatorów i central. Wybierz konto przed rozmową bez zmiany aplikacji."
    ],
    "accountHint": "Wybierz konto",
    "compact": [
      "Pełny interfejs\nKompaktowy, gdy potrzeba",
      "Tryb kompaktowy zachowuje podstawowe przyciski rozmowy i zostawia miejsce na inne okna."
    ],
    "full": "Pełny",
    "small": "Kompaktowy",
    "noise": [
      "Redukcja szumu, którą słychać",
      "Porównaj oryginalne nagranie z lekką i silną redukcją szumu tła."
    ],
    "record": [
      "Jedna rozmowa\nDwie oddzielne ścieżki",
      "Obie strony rozmowy są nagrywane oddzielnie. Słuchaj jednej lub obu razem."
    ],
    "listen": "Posłuchaj samodzielnie",
    "play": "Odtwórz",
    "pause": "Pauza",
    "loading": "Ładowanie",
    "modes": [
      "Oryginał",
      "Lekka",
      "Silna"
    ],
    "processing": "Redukcja szumu",
    "tracks": "Ścieżki nagrania",
    "trackModes": [
      "Razem",
      "Twoja strona",
      "Rozmówca"
    ],
    "sides": [
      "Twoja strona",
      "Rozmówca"
    ],
    "volume": "Głośność",
    "seek": "Pozycja odtwarzania",
    "error": "Nie udało się wczytać nagrania. Spróbuj ponownie.",
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
      "Rozmawiasz z klientem",
      "Dwie odebrane rozmowy są połączone. Rozmawiacie we troje.",
      "Po konsultacji klient rozmawia z kolegą. Twój udział jest zakończony."
    ],
    "tech": [
      "Dostosuj AltSIP do swojej telefonii",
      "Połącz operatora SIP lub centralę, wybierz kodeki i parametry połączenia."
    ],
    "connect": "Połączenie",
    "codecs": "Kodeki audio",
    "settings": "Ustawienia",
    "settingsBody": "Priorytet kodeków · format numeru · konta SIP",
    "security": "TLS chroni sygnalizację, a SDES-SRTP głos, jeśli usługa obsługuje i włącza oba tryby. Klucze SDES są przesyłane w sygnalizacji.",
    "setup": "Konfiguracja konta SIP",
    "history": "Historia połączeń i kontakty",
    "historyTab": "Historia",
    "contactsTab": "Kontakty"
  },
  "pt": {
    "accounts": [
      "Várias contas SIP\nMudança rápida",
      "Use contas de fornecedores e centrais diferentes. Escolha a conta antes de ligar, sem mudar de aplicação."
    ],
    "accountHint": "Escolha uma conta",
    "compact": [
      "A interface completa\nCompacta quando precisa",
      "O modo compacto mantém os controlos essenciais de chamada e deixa espaço para outras janelas."
    ],
    "full": "Completa",
    "small": "Compacta",
    "noise": [
      "Redução de ruído que pode ouvir",
      "Compare a gravação original com a redução leve e forte do ruído de fundo."
    ],
    "record": [
      "Uma conversa\nDuas faixas separadas",
      "Os dois lados da chamada são gravados separadamente. Ouça um lado ou os dois em conjunto."
    ],
    "listen": "Ouça a diferença",
    "play": "Ouvir",
    "pause": "Pausa",
    "loading": "A carregar",
    "modes": [
      "Original",
      "Leve",
      "Forte"
    ],
    "processing": "Redução de ruído",
    "tracks": "Faixas gravadas",
    "trackModes": [
      "Em conjunto",
      "O seu lado",
      "Interlocutor"
    ],
    "sides": [
      "O seu lado",
      "Interlocutor"
    ],
    "volume": "Volume",
    "seek": "Posição de reprodução",
    "error": "Não foi possível carregar a gravação. Tente novamente.",
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
      "Está a falar com o cliente",
      "Duas chamadas atendidas estão unidas. Podem falar os três.",
      "Após a consulta, o cliente fala com o colega. A sua participação terminou."
    ],
    "tech": [
      "Configure o AltSIP para a sua telefonia",
      "Ligue um fornecedor SIP ou central, escolha codecs e parâmetros de ligação."
    ],
    "connect": "Ligação",
    "codecs": "Codecs de áudio",
    "settings": "Definições",
    "settingsBody": "Prioridade de codecs · formato de números · contas SIP",
    "security": "TLS protege a sinalização e SDES-SRTP a voz se o serviço suportar e ativar ambos. As chaves SDES passam na sinalização.",
    "setup": "Configurar uma conta SIP",
    "history": "Histórico de chamadas e contactos",
    "historyTab": "Histórico",
    "contactsTab": "Contactos"
  }
};
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const svg=n=>`<svg aria-hidden="true"><use href="#i-${n}"></use></svg>`;
 const time=s=>`${Math.floor(s/60).toString().padStart(2,'0')}:${Math.floor(s%60).toString().padStart(2,'0')}`;
 function mount(host,{lang='ru',audio,onViewport=()=>{}}={}){
  let locale=copy[lang]?lang:'en',theme=document.documentElement.dataset.theme||'light',active=true,destroyed=false,compact=false,account=0,callMode='call';
  let io,ro,resizeFrame=0,compactJob=0,compactStarted=false,native,lists,listView='history';
  const visible=new Set(),reduce=matchMedia('(prefers-reduced-motion: reduce)'),mobile=matchMedia('(max-width:800px), (pointer:coarse)');
  const $=s=>host.querySelector(s),$$=s=>[...host.querySelectorAll(s)],c=()=>copy[locale];
  const heading=(title,body='',eyebrow='')=>`<div class="hp-heading">${eyebrow?`<span class="hp-eyebrow">${esc(eyebrow)}</span>`:''}<h2>${esc(title)}</h2>${body?`<p>${esc(body)}</p>`:''}</div>`;
  const seek=(kind)=>`<input class="hp-seek" data-hp-seek="${kind}" type="range" min="0" max="1000" value="0" aria-label="${esc(c().seek)}">`;
  const volume=()=>`<label class="hp-volume">${svg('volume')}<input data-hp-volume type="range" min="0" max="100" value="55" aria-label="${esc(c().volume)}"></label>`;
  function markup(){const d=c();return `<div class="home-overview home-premium" lang="${locale}">
   <section class="hp-section hp-accounts" data-hp-scene="accounts">${heading(d.accounts[0],d.accounts[1])}<div class="hp-account-stage"><div class="hp-account-stack" role="group" aria-label="${esc(d.accounts[0])}">${['Office','Support','Personal','Secondary'].map((name,i)=>`<button type="button" class="hp-account" data-hp-account="${i}" aria-pressed="${i===account}"><span class="hp-account-dot"></span><span><strong>${name}</strong><small>${12025550142+i}</small></span><span class="hp-account-grip" aria-hidden="true">⋮⋮</span></button>`).join('')}</div><p class="hp-account-caption">${esc(d.accountHint)}</p></div></section>
   <section class="hp-section hp-compact" data-hp-scene="compact">${heading(d.compact[0],d.compact[1])}<div class="hp-compact-stage"><div class="hp-native-frame"><div class="hp-native"></div></div><div class="hp-view-switch" role="group" aria-label="${esc(d.compact[0])}"><button type="button" data-hp-compact="false" aria-pressed="${!compact}">${esc(d.full)}</button><button type="button" data-hp-compact="true" aria-pressed="${compact}">${esc(d.small)}</button></div></div></section>
   <section class="hp-section hp-sound" data-hp-scene="noise">${heading(d.noise[0],d.noise[1],d.listen)}<div class="hp-noise-signal"><canvas data-hp-wave="noise" aria-hidden="true"></canvas></div><div class="hp-audio-controls"><button class="hp-play" type="button" data-hp-play="noise" aria-label="${esc(d.play)}">${svg('play')}</button><div class="hp-modes" role="group" aria-label="${esc(d.processing)}">${['original','light','high'].map((m,i)=>`<button type="button" data-hp-noise="${m}" aria-pressed="${i===0}">${esc(d.modes[i])}</button>`).join('')}</div></div>${seek('noise')}<div class="hp-audio-footer"><span data-hp-time="noise">00:00 / 00:21</span>${volume()}</div><p class="hp-audio-error" data-hp-error="noise" role="status"></p></section>
   <section class="hp-section hp-record" data-hp-scene="record">${heading(d.record[0],d.record[1],d.listen)}<div class="hp-record-tracks">${['a','b'].map((side,i)=>`<div class="hp-record-track" data-hp-track="${side}"><div class="hp-track-label"><button type="button" data-hp-solo="${side}" aria-pressed="false">${esc(d.sides[i])}</button><input type="range" data-hp-gain="${i}" min="0" max="100" value="80" aria-label="${esc(d.volume+' '+d.sides[i])}"></div><canvas data-hp-wave="${side}" aria-hidden="true"></canvas></div>`).join('')}</div>${seek('record')}<div class="hp-audio-controls"><button class="hp-play" type="button" data-hp-play="record" aria-label="${esc(d.play)}">${svg('play')}</button><div class="hp-modes" role="group" aria-label="${esc(d.tracks)}">${['both','a','b'].map((m,i)=>`<button type="button" data-hp-select="${m}" aria-pressed="${i===0}">${esc(d.trackModes[i])}</button>`).join('')}</div><span data-hp-time="record">00:00 / 00:21</span></div><p class="hp-audio-error" data-hp-error="record" role="status"></p></section>
   <section class="hp-section hp-calls" data-hp-scene="calls">${heading(d.calls[0],d.calls[1])}<div class="hp-call-demo" data-mode="call"><svg class="hp-call-links" viewBox="0 0 680 270" aria-hidden="true"><path class="hp-link-client" d="M100 135 C180 135 180 135 340 135"/><path class="hp-link-colleague" d="M340 135 C500 135 500 135 580 135"/><path class="hp-link-transfer" d="M100 135 C260 -10 420 -10 580 135"/></svg>${['client','you','colleague'].map((p,i)=>`<div class="hp-party hp-party-${p}"><span>${svg('person')}</span><strong>${esc(d.parties[i])}</strong></div>`).join('')}</div><div class="hp-call-switch hp-modes" role="group" aria-label="${esc(d.calls[0])}">${['call','conference','transfer'].map((m,i)=>`<button type="button" data-hp-call="${m}" aria-pressed="${i===0}">${esc(d.callModes[i])}</button>`).join('')}</div><p class="hp-call-status" aria-live="polite">${esc(d.callStates[0])}</p></section>
   <section class="hp-section hp-tech" data-hp-scene="tech">${heading(d.tech[0],d.tech[1])}<div class="hp-tech-columns"><div><h3>${esc(d.connect)}</h3><p>SIP · UDP · TCP · TLS</p></div><div><h3>${esc(d.codecs)}</h3><p>Opus · G.711 · G.722</p></div><div><h3>${esc(d.settings)}</h3><p>${esc(d.settingsBody)}</p></div></div><p class="hp-security">${esc(d.security)}</p><a class="hp-text-link" href="#guide" data-route="guide" data-topic="account">${esc(d.setup)} <span aria-hidden="true">↗</span></a></section>
   <section class="hp-section hp-history" data-hp-scene="lists"><div class="hp-history-copy">${heading(d.history)}<div class="hp-modes" role="group" aria-label="${esc(d.history)}"><button type="button" data-hp-list="history" aria-pressed="${listView==='history'}">${esc(d.historyTab)}</button><button type="button" data-hp-list="contacts" aria-pressed="${listView==='contacts'}">${esc(d.contactsTab)}</button></div></div><div class="hp-list-frame"><div class="hp-list-native"></div></div></section>
  </div>`;}
  function fit(){if(destroyed)return;for(const [widget,frame,slot,view]of [[native,$('.hp-native-frame'),$('.hp-native'),compact?'compact':'dial'],[lists,$('.hp-list-frame'),$('.hp-list-native'),listView]]){if(!widget||!frame?.clientWidth)continue;const size=widget.getSize(),crop=view==='dial'?{x:0,y:0,width:size.width,height:size.height}:widget.getGuideCrop(view);const max=view==='dial'?420:view==='compact'?255:310;const available=frame.parentElement.clientWidth;const scale=Math.min(1,available/crop.width,max/crop.height);frame.style.width=`${crop.width*scale}px`;frame.style.height=`${crop.height*scale}px`;slot.style.transform=`translate(${-crop.x*scale}px,${-crop.y*scale}px) scale(${scale})`;}}
  function ensure(name){if(name==='compact'&&!native){native=window.AltSIPDemo.mount($('.hp-native'),{initialView:compact?'compact':'dial',interactionScope:'compact',locale});native.setTheme(theme);native.setActive(false);$('.hp-native').addEventListener('sip-demo-resize',queueFit);queueFit();}if(name==='lists'&&!lists){lists=window.AltSIPDemo.mount($('.hp-list-native'),{initialView:listView,interactionScope:listView,locale});lists.setTheme(theme);lists.setActive(false);queueFit();}}
  function queueFit(){cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(fit);}
  function setCompact(value){compact=!!value;native?.preview(compact?'compact':'dial');$$('[data-hp-compact]').forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.hpCompact==='true')===compact)));queueFit();}
  function cancelCompact(){clearTimeout(compactJob);compactJob=0;}
  function maybeCompact(){if(!active||document.hidden||!visible.has('compact')||compactStarted||reduce.matches||mobile.matches)return;compactStarted=true;compactJob=setTimeout(()=>{compactJob=0;setCompact(true);compactJob=setTimeout(()=>{compactJob=0;setCompact(false);},2600);},1000);}
  function setAccount(value){account=+value;$$('[data-hp-account]').forEach(b=>{const i=+b.dataset.hpAccount,slot=(i-account+4)%4;b.style.setProperty('--slot',slot);b.setAttribute('aria-pressed',String(i===account));});}
  function setCall(value){callMode=value;$('.hp-call-demo').dataset.mode=value;$$('[data-hp-call]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.hpCall===value)));$('.hp-call-status').textContent=c().callStates[['call','conference','transfer'].indexOf(value)];}
  async function play(kind){$(`[data-hp-error="${kind}"]`).textContent='';try{await audio.play(kind);if(!active||document.hidden||!visible.has(kind))audio.pause();}catch(_){$(`[data-hp-error="${kind}"]`).textContent=c().error;}}
  function updateClock(kind){if(kind!=='noise'&&kind!=='record')return;const p=audio.position(kind),duration=audio.duration(kind),label=time(p)+' / '+time(duration),node=$(`[data-hp-time="${kind}"]`);if(node.textContent!==label)node.textContent=label;const seek=$(`[data-hp-seek="${kind}"]`),value=String(Math.round(p/duration*1000));if(seek.value!==value)seek.value=value;seek.style.setProperty('--progress',p/duration*100+'%');if(seek.getAttribute('aria-valuetext')!==label)seek.setAttribute('aria-valuetext',label);}
  function renderAudio(){if(!audio||destroyed)return;for(const kind of ['noise','record']){const playing=audio.playing&&audio.kind===kind,b=$(`[data-hp-play="${kind}"]`),state=audio.busy?'loading':playing?'pause':'play';b.disabled=audio.busy;if(b.dataset.state!==state){b.dataset.state=state;b.innerHTML=svg(playing?'pause':'play');b.setAttribute('aria-label',c()[state]);}updateClock(kind);}$$('[data-hp-noise]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.hpNoise===audio.noiseMode)));$$('[data-hp-select]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.hpSelect===audio.solo)));$$('[data-hp-solo]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.hpSolo===audio.solo)));for(const[i,side]of['a','b'].entries()){$(`[data-hp-track="${side}"]`).classList.toggle('hp-muted',audio.muted[i]);$(`[data-hp-gain="${i}"]`).value=audio.gains[i]*100;}$$('[data-hp-volume]').forEach(e=>e.value=audio.volume*100);}
  function draw({weights=[1,0,0],reduced=reduce.matches}={}){if(!audio||destroyed||!active||document.hidden)return;const waves=window.ALTSIP_OWNER_WAVES||{};if(visible.has('noise'))window.AltSIPWave.render($('[data-hp-wave="noise"]'),{waves:['conversation-original','conversation-light','conversation-processed'].map(n=>waves[n]),weights,clean:1-weights[0],position:audio.position('noise'),playing:audio.playing&&audio.kind==='noise',reduced,dark:theme==='dark'});if(visible.has('record'))for(const[i,k]of['a','b'].entries())window.AltSIPWave.render($(`[data-hp-wave="${k}"]`),{waves:[waves['recording-'+k]],weights:[1],clean:1,record:true,position:audio.position('record'),playing:audio.playing&&audio.kind==='record',reduced,dark:theme==='dark',muted:audio.muted[i],accent:i?'#548c9f':'#168d75',tone:i?(theme==='dark'?'#91b0c1':'#548c9f'):null});if(audio.playing)updateClock(audio.kind);}
  function setup(){host.innerHTML=markup();setAccount(account);setCall(callMode);host.addEventListener('click',onClick);host.addEventListener('input',onInput);io=new IntersectionObserver(entries=>{for(const e of entries){const name=e.target.dataset.hpScene;if(e.isIntersecting){visible.add(name);e.target.classList.add('hp-visible');ensure(name);}else{visible.delete(name);if(name==='compact')cancelCompact();if(active&&audio?.playing&&audio.kind===name)audio.pause();}}maybeCompact();onViewport();},{threshold:.08,rootMargin:'40px 0px'});$$('[data-hp-scene]').forEach(e=>io.observe(e));ro=new ResizeObserver(()=>{queueFit();onViewport();});ro.observe(host);renderAudio();}
  function onClick(e){const b=e.target.closest('button');if(!b||!host.contains(b))return;if(b.dataset.hpAccount!==undefined){const stack=$('.hp-account-stack');stack.classList.toggle('hp-open',!(account===+b.dataset.hpAccount&&stack.classList.contains('hp-open')));setAccount(b.dataset.hpAccount);}if(b.dataset.hpCompact!==undefined){compactStarted=true;cancelCompact();setCompact(b.dataset.hpCompact==='true');}if(b.dataset.hpPlay)play(b.dataset.hpPlay);if(b.dataset.hpNoise)audio.setNoiseMode(b.dataset.hpNoise);if(b.dataset.hpSelect)audio.setSolo(b.dataset.hpSelect);if(b.dataset.hpSolo)audio.setSolo(audio.solo===b.dataset.hpSolo?'both':b.dataset.hpSolo);if(b.dataset.hpCall)setCall(b.dataset.hpCall);if(b.dataset.hpList){listView=b.dataset.hpList;lists?.preview(listView);lists?.setInteractionScope(listView);$$('[data-hp-list]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.hpList===listView)));queueFit();}}
  function onInput(e){const b=e.target;if(b.dataset.hpSeek)audio.seek(b.dataset.hpSeek,+b.value/1000);if(b.hasAttribute('data-hp-volume'))audio.setVolume(+b.value/100);if(b.dataset.hpGain!==undefined)audio.setGain(+b.dataset.hpGain,+b.value/100);}
  function teardown(){io?.disconnect();ro?.disconnect();cancelCompact();cancelAnimationFrame(resizeFrame);native?.destroy();lists?.destroy();native=lists=null;visible.clear();host.removeEventListener('click',onClick);host.removeEventListener('input',onInput);}
  const visibility=()=>{if(document.hidden)cancelCompact();else maybeCompact();};document.addEventListener('visibilitychange',visibility);const motionChange=()=>{cancelCompact();if(reduce.matches)setCompact(false);};reduce.addEventListener('change',motionChange);setup();
  return{draw,renderAudio,isAudioVisible:kind=>active&&visible.has(kind),setLocale(code){const next=copy[code]?code:'en';if(next===locale)return;teardown();locale=next;setup();},setTheme(value){theme=value;native?.setTheme(value);lists?.setTheme(value);onViewport();},setActive(value){active=!!value;if(!active)cancelCompact();else maybeCompact();},destroy(){if(destroyed)return;teardown();destroyed=true;document.removeEventListener('visibilitychange',visibility);reduce.removeEventListener('change',motionChange);host.innerHTML='';}};
 }
 window.AltSIPHome={mount};
})();
