/* Editorial home overview shared by all supported site languages. */
(() => {
  'use strict';

  const copy = {
    en: {
      title: 'AltSIP — a softphone for voice calls',
      intro: [
        'Make and answer calls on your computer using a SIP account from your provider or office phone system. AltSIP keeps dialing, contacts and recent calls close to your work.',
        'At the office or working remotely, AltSIP helps you stay in touch with colleagues and clients. Use your existing work number, switch between accounts and manage conversations in one app.'
      ],
      benefitsTitle: 'Why AltSIP',
      benefits: [
        ['Calls within reach', 'Dial and answer from your computer. Compact mode keeps essential call controls close while you work in other windows.'],
        ['Several accounts together', 'Keep more than one SIP account in the app and choose which one to use for an outgoing call.'],
        ['Comfortable in your language', 'The interface is available in nine languages, so the daily call controls and settings feel familiar.']
      ],
      compatibilityTitle: 'Works with your SIP service',
      compatibility: [
        'AltSIP connects to a SIP provider or an office PBX using the server address and sign-in details they give you. Your provider or PBX handles your number, call routing and service features.',
        'SIP connections can use UDP, TCP or TLS. The settings and available calling features depend on your service, so confirm them with your provider or administrator.'
      ],
      technologyTitle: 'Voice and connection technology',
      technology: [
        ['Voice that fits the connection', 'Opus, G.711 A-law and μ-law, and G.722 are available. The codec is negotiated with the other side of each call. Local noise reduction can help with background sound.'],
        ['Call protection', 'When your provider or PBX supports and enables them, TLS protects SIP signaling and SDES-SRTP protects the voice stream. Use them together because SDES keys travel in the signaling.'],
        ['Windows SIP foundation', 'The Windows app uses baresip/libre for SIP signaling and voice media, including account registration and call setup.']
      ]
    },
    ru: {
      title: 'AltSIP — софтфон для голосовых звонков',
      intro: [
        'Звоните и принимайте вызовы с компьютера через SIP-аккаунт провайдера или рабочей АТС. Набор номера, контакты и история звонков всегда под рукой.',
        'В офисе и на удалённой работе AltSIP помогает оставаться на связи с коллегами и клиентами. Используйте действующий рабочий номер, переключайтесь между аккаунтами и управляйте разговорами в одном приложении.'
      ],
      benefitsTitle: 'Почему AltSIP',
      benefits: [
        ['Звонки под рукой', 'Набирайте номер и отвечайте с компьютера. В компактном режиме основные элементы управления остаются рядом, пока вы работаете в других окнах.'],
        ['Несколько аккаунтов вместе', 'Добавьте несколько SIP-аккаунтов и выбирайте нужный для исходящего звонка.'],
        ['Понятный интерфейс', 'Интерфейс доступен на девяти языках, чтобы управление звонками и настройки были привычными.']
      ],
      compatibilityTitle: 'Работает с вашей SIP-телефонией',
      compatibility: [
        'AltSIP подключается к SIP-провайдеру или рабочей АТС по адресу сервера и данным входа, которые они предоставляют. Номер, маршрут звонка и услуги связи остаются на стороне провайдера или АТС.',
        'Для SIP-подключения доступны UDP, TCP и TLS. Параметры и возможности вызовов зависят от вашей системы. Уточните их у провайдера или администратора.'
      ],
      technologyTitle: 'Звук и технологии связи',
      technology: [
        ['Звук для разных соединений', 'Доступны Opus, G.711 A-law и μ-law, G.722. Кодек согласуется с другой стороной при каждом звонке. Локальное шумоподавление помогает уменьшить фоновый звук.'],
        ['Защита связи', 'Если провайдер или АТС поддерживает и включает эти режимы, TLS защищает SIP-сигнализацию, а SDES-SRTP — голосовой поток. Их используют вместе, поскольку ключи SDES передаются в сигнализации.'],
        ['Основа версии для Windows', 'За SIP-сигнализацию и передачу голоса в версии для Windows отвечают baresip/libre, включая регистрацию аккаунта и установление звонка.']
      ]
    },
    uk: {
      title: 'AltSIP — софтфон для голосових дзвінків',
      intro: [
        'Телефонуйте й приймайте виклики з комп’ютера через SIP-акаунт провайдера або робочої АТС. Набір номера, контакти й історія дзвінків завжди поруч.',
        'В офісі та під час віддаленої роботи AltSIP допомагає залишатися на зв’язку з колегами й клієнтами. Користуйтеся наявним робочим номером, перемикайтеся між акаунтами й керуйте розмовами в одному застосунку.'
      ],
      benefitsTitle: 'Чому AltSIP',
      benefits: [
        ['Дзвінки під рукою', 'Набирайте номер і відповідайте з комп’ютера. У компактному режимі основні елементи керування залишаються поруч, поки ви працюєте в інших вікнах.'],
        ['Кілька акаунтів разом', 'Додайте кілька SIP-акаунтів і вибирайте потрібний для вихідного дзвінка.'],
        ['Зрозумілий інтерфейс', 'Інтерфейс доступний дев’ятьма мовами, щоб керування дзвінками й налаштування були звичними.']
      ],
      compatibilityTitle: 'Сумісність із вашим SIP-зв’язком',
      compatibility: [
        'AltSIP підключається до SIP-провайдера або робочої АТС за адресою сервера й даними входу, які вони надають. Номер, маршрут дзвінка та послуги зв’язку залишаються на боці провайдера або АТС.',
        'Для SIP-підключення доступні UDP, TCP і TLS. Параметри й можливості викликів залежать від вашої системи. Уточніть їх у провайдера або адміністратора.'
      ],
      technologyTitle: 'Звук і технології зв’язку',
      technology: [
        ['Звук для різних з’єднань', 'Доступні Opus, G.711 A-law і μ-law, G.722. Кодек узгоджується з іншою стороною під час кожного дзвінка. Локальне шумозаглушення допомагає зменшити фоновий звук.'],
        ['Захист зв’язку', 'Якщо провайдер або АТС підтримує та вмикає ці режими, TLS захищає SIP-сигналізацію, а SDES-SRTP — голосовий потік. Їх використовують разом, оскільки ключі SDES передаються в сигналізації.'],
        ['Основа версії для Windows', 'За SIP-сигналізацію та передавання голосу у версії для Windows відповідають baresip/libre, зокрема за реєстрацію акаунта й установлення дзвінка.']
      ]
    },
    de: {
      title: 'AltSIP — ein Softphone für Sprachanrufe',
      intro: [
        'Telefonieren Sie am Computer mit einem SIP-Konto Ihres Anbieters oder Ihrer Büro-Telefonanlage. Wählen, Kontakte und Anrufliste sind direkt bei Ihrer Arbeit erreichbar.',
        'Im Büro und bei der Arbeit von zu Hause hilft AltSIP, mit Kollegen und Kunden in Kontakt zu bleiben. Nutzen Sie Ihre vorhandene geschäftliche Rufnummer, wechseln Sie zwischen Konten und steuern Sie Gespräche in einer App.'
      ],
      benefitsTitle: 'Warum AltSIP',
      benefits: [
        ['Anrufe griffbereit', 'Wählen und antworten Sie am Computer. Im Kompaktmodus bleiben die wichtigsten Anrufsteuerungen erreichbar, während Sie in anderen Fenstern arbeiten.'],
        ['Mehrere Konten an einem Ort', 'Fügen Sie mehrere SIP-Konten hinzu und wählen Sie für ausgehende Anrufe das passende aus.'],
        ['Vertraute Bedienung', 'Die Oberfläche ist in neun Sprachen verfügbar, damit Anrufsteuerung und Einstellungen leicht zugänglich sind.']
      ],
      compatibilityTitle: 'Für Ihren SIP-Dienst',
      compatibility: [
        'AltSIP verbindet sich mit einem SIP-Anbieter oder einer Büro-Telefonanlage. Dafür geben Sie die Serveradresse und Zugangsdaten ein, die Sie dort erhalten. Rufnummer, Anrufwege und Dienste verwaltet weiterhin Ihr Anbieter oder Ihre Anlage.',
        'SIP-Verbindungen können UDP, TCP oder TLS nutzen. Welche Einstellungen und Anruffunktionen verfügbar sind, hängt von Ihrem Dienst ab. Fragen Sie dazu Ihren Anbieter oder Ihre Administration.'
      ],
      technologyTitle: 'Ton und Verbindungstechnik',
      technology: [
        ['Ton für verschiedene Verbindungen', 'Opus, G.711 A-law und μ-law sowie G.722 sind verfügbar. Der Codec wird bei jedem Anruf mit der Gegenseite ausgehandelt. Lokale Rauschunterdrückung kann Hintergrundgeräusche mindern.'],
        ['Schutz für Gespräche', 'Wenn Anbieter oder Telefonanlage beides unterstützen und aktivieren, schützt TLS die SIP-Signalisierung und SDES-SRTP den Sprachstrom. Beides gehört zusammen, da die SDES-Schlüssel über die Signalisierung übertragen werden.'],
        ['SIP-Basis unter Windows', 'Die Windows-App verwendet baresip/libre für SIP-Signalisierung und Sprachübertragung, einschließlich Kontoregistrierung und Anrufaufbau.']
      ]
    },
    es: {
      title: 'AltSIP — un softphone para llamadas de voz',
      intro: [
        'Haz y recibe llamadas desde tu ordenador usando una cuenta SIP de tu proveedor o centralita de oficina. La marcación, los contactos y el historial quedan a mano mientras trabajas.',
        'En la oficina o al trabajar a distancia, AltSIP te ayuda a seguir en contacto con compañeros y clientes. Usa tu número de trabajo habitual, cambia entre cuentas y gestiona las conversaciones en una sola aplicación.'
      ],
      benefitsTitle: 'Por qué AltSIP',
      benefits: [
        ['Llamadas a mano', 'Marca y responde desde el ordenador. El modo compacto mantiene cerca los controles esenciales mientras trabajas en otras ventanas.'],
        ['Varias cuentas juntas', 'Añade más de una cuenta SIP y elige cuál usar para cada llamada saliente.'],
        ['Una interfaz familiar', 'La interfaz está disponible en nueve idiomas para que los controles y ajustes resulten claros.']
      ],
      compatibilityTitle: 'Compatible con tu servicio SIP',
      compatibility: [
        'AltSIP se conecta a un proveedor SIP o una centralita de oficina con la dirección del servidor y las credenciales que te faciliten. El número, el encaminamiento y los servicios siguen a cargo del proveedor o la centralita.',
        'La conexión SIP puede usar UDP, TCP o TLS. La configuración y las funciones de llamada dependen de tu servicio. Consulta los detalles con tu proveedor o administrador.'
      ],
      technologyTitle: 'Audio y tecnología de conexión',
      technology: [
        ['Audio para cada conexión', 'Están disponibles Opus, G.711 A-law y μ-law, y G.722. El códec se negocia con el otro extremo en cada llamada. La reducción local de ruido puede atenuar el sonido de fondo.'],
        ['Protección de llamadas', 'Si tu proveedor o centralita los admite y activa, TLS protege la señalización SIP y SDES-SRTP el audio. Se usan juntos porque las claves SDES viajan en la señalización.'],
        ['Base SIP en Windows', 'La aplicación para Windows usa baresip/libre para la señalización SIP y el audio, incluidos el registro de cuentas y el establecimiento de llamadas.']
      ]
    },
    fr: {
      title: 'AltSIP — un softphone pour les appels vocaux',
      intro: [
        'Passez et recevez des appels sur votre ordinateur avec un compte SIP fourni par votre opérateur ou votre standard professionnel. Numérotation, contacts et historique restent à portée de main.',
        'Au bureau comme en télétravail, AltSIP vous aide à garder le contact avec collègues et clients. Utilisez votre numéro professionnel habituel, passez d’un compte à l’autre et gérez vos conversations dans une seule application.'
      ],
      benefitsTitle: 'Pourquoi AltSIP',
      benefits: [
        ['Les appels à portée de main', 'Composez et répondez depuis l’ordinateur. Le mode compact garde les commandes essentielles accessibles pendant que vous travaillez dans d’autres fenêtres.'],
        ['Plusieurs comptes réunis', 'Ajoutez plusieurs comptes SIP et choisissez celui à utiliser pour un appel sortant.'],
        ['Une interface familière', 'L’interface est proposée en neuf langues pour rendre commandes et réglages plus faciles à retrouver.']
      ],
      compatibilityTitle: 'Avec votre service SIP',
      compatibility: [
        'AltSIP se connecte à un fournisseur SIP ou à un standard professionnel avec l’adresse du serveur et les identifiants fournis. Votre numéro, l’acheminement des appels et les services restent gérés par ce fournisseur ou ce standard.',
        'La connexion SIP peut utiliser UDP, TCP ou TLS. Les réglages et les fonctions d’appel dépendent de votre service. Confirmez-les auprès de votre fournisseur ou de votre administrateur.'
      ],
      technologyTitle: 'Audio et technologie de connexion',
      technology: [
        ['Un son adapté à la connexion', 'Opus, G.711 A-law et μ-law, ainsi que G.722 sont disponibles. Le codec est négocié avec l’autre extrémité de chaque appel. La réduction locale du bruit peut atténuer les sons ambiants.'],
        ['Protection des appels', 'Si votre fournisseur ou votre standard les prend en charge et les active, TLS protège la signalisation SIP et SDES-SRTP le flux vocal. Les deux vont ensemble car les clés SDES passent par la signalisation.'],
        ['La base SIP sous Windows', 'L’application Windows utilise baresip/libre pour la signalisation SIP et la voix, notamment pour l’enregistrement du compte et l’établissement des appels.']
      ]
    },
    it: {
      title: 'AltSIP — un softphone per le chiamate vocali',
      intro: [
        'Chiama e rispondi dal computer con un account SIP del tuo provider o centralino aziendale. Composizione, contatti e cronologia restano a portata di mano mentre lavori.',
        'In ufficio o da remoto, AltSIP ti aiuta a restare in contatto con colleghi e clienti. Usa il tuo numero di lavoro abituale, passa da un account all’altro e gestisci le conversazioni in un’unica app.'
      ],
      benefitsTitle: 'Perché AltSIP',
      benefits: [
        ['Chiamate a portata di mano', 'Chiama e rispondi dal computer. La modalità compatta mantiene i comandi essenziali vicini mentre lavori in altre finestre.'],
        ['Più account insieme', 'Aggiungi diversi account SIP e scegli quale usare per una chiamata in uscita.'],
        ['Un’interfaccia familiare', 'L’interfaccia è disponibile in nove lingue per rendere familiari comandi e impostazioni.']
      ],
      compatibilityTitle: 'Con il tuo servizio SIP',
      compatibility: [
        'AltSIP si collega a un provider SIP o a un centralino aziendale con l’indirizzo del server e le credenziali che ti forniscono. Numero, instradamento e servizi telefonici rimangono gestiti dal provider o dal centralino.',
        'La connessione SIP può usare UDP, TCP o TLS. Impostazioni e funzioni di chiamata dipendono dal tuo servizio. Verificale con il provider o l’amministratore.'
      ],
      technologyTitle: 'Audio e tecnologia di connessione',
      technology: [
        ['Audio adatto alla connessione', 'Sono disponibili Opus, G.711 A-law e μ-law e G.722. Il codec viene concordato con l’altra parte per ogni chiamata. La riduzione locale del rumore può attenuare i suoni di fondo.'],
        ['Protezione delle chiamate', 'Se il provider o il centralino li supporta e li attiva, TLS protegge la segnalazione SIP e SDES-SRTP il flusso vocale. Vanno usati insieme perché le chiavi SDES passano nella segnalazione.'],
        ['Base SIP per Windows', 'L’app Windows usa baresip/libre per segnalazione SIP e voce, inclusi la registrazione degli account e l’avvio delle chiamate.']
      ]
    },
    pl: {
      title: 'AltSIP — softphone do rozmów głosowych',
      intro: [
        'Dzwoń i odbieraj połączenia na komputerze, korzystając z konta SIP od dostawcy lub firmowej centrali. Wybieranie numerów, kontakty i historia rozmów są zawsze pod ręką.',
        'W biurze i podczas pracy zdalnej AltSIP pomaga utrzymywać kontakt ze współpracownikami i klientami. Korzystaj z dotychczasowego numeru służbowego, przełączaj konta i prowadź rozmowy w jednej aplikacji.'
      ],
      benefitsTitle: 'Dlaczego AltSIP',
      benefits: [
        ['Rozmowy pod ręką', 'Dzwoń i odbieraj na komputerze. Tryb kompaktowy utrzymuje najważniejsze przyciski blisko, gdy pracujesz w innych oknach.'],
        ['Kilka kont w jednym miejscu', 'Dodaj wiele kont SIP i wybieraj odpowiednie do połączeń wychodzących.'],
        ['Znajomy interfejs', 'Interfejs jest dostępny w dziewięciu językach, dzięki czemu sterowanie i ustawienia są łatwe do odnalezienia.']
      ],
      compatibilityTitle: 'Współpraca z Twoją usługą SIP',
      compatibility: [
        'AltSIP łączy się z dostawcą SIP lub firmową centralą przy użyciu adresu serwera i danych logowania, które od nich otrzymasz. Numer, kierowanie połączeń i usługi pozostają po ich stronie.',
        'Połączenie SIP może korzystać z UDP, TCP lub TLS. Ustawienia i dostępne funkcje zależą od Twojej usługi. Potwierdź je u dostawcy albo administratora.'
      ],
      technologyTitle: 'Dźwięk i technologia połączeń',
      technology: [
        ['Dźwięk dopasowany do połączenia', 'Dostępne są Opus, G.711 A-law i μ-law oraz G.722. Kodek jest uzgadniany z drugą stroną przy każdym połączeniu. Lokalne tłumienie szumu może ograniczyć dźwięki tła.'],
        ['Ochrona rozmów', 'Jeśli dostawca lub centrala je obsługuje i włącza, TLS chroni sygnalizację SIP, a SDES-SRTP strumień głosu. Należy używać ich razem, ponieważ klucze SDES są przesyłane w sygnalizacji.'],
        ['Podstawa SIP w Windows', 'Aplikacja Windows korzysta z baresip/libre do sygnalizacji SIP i przesyłania głosu, w tym rejestracji kont oraz nawiązywania połączeń.']
      ]
    },
    pt: {
      title: 'AltSIP — um softphone para chamadas de voz',
      intro: [
        'Faça e receba chamadas no computador com uma conta SIP do seu fornecedor ou central telefónica da empresa. Marcação, contactos e histórico ficam à mão durante o trabalho.',
        'No escritório ou em trabalho remoto, o AltSIP ajuda a manter o contacto com colegas e clientes. Utilize o número profissional habitual, alterne entre contas e gira as conversas numa só aplicação.'
      ],
      benefitsTitle: 'Porquê o AltSIP',
      benefits: [
        ['Chamadas à mão', 'Marque e atenda no computador. O modo compacto mantém os controlos essenciais por perto enquanto trabalha noutras janelas.'],
        ['Várias contas num só lugar', 'Adicione várias contas SIP e escolha qual utilizar numa chamada efetuada.'],
        ['Uma interface familiar', 'A interface está disponível em nove idiomas para tornar os controlos e as definições fáceis de encontrar.']
      ],
      compatibilityTitle: 'Com o seu serviço SIP',
      compatibility: [
        'O AltSIP liga-se a um fornecedor SIP ou a uma central da empresa com o endereço do servidor e os dados de acesso que lhe forem fornecidos. O número, o encaminhamento e os serviços continuam a cargo do fornecedor ou da central.',
        'A ligação SIP pode utilizar UDP, TCP ou TLS. As definições e as funções de chamada dependem do seu serviço. Confirme-as com o fornecedor ou administrador.'
      ],
      technologyTitle: 'Áudio e tecnologia de ligação',
      technology: [
        ['Áudio para cada ligação', 'Estão disponíveis Opus, G.711 A-law e μ-law, e G.722. O codec é negociado com a outra parte em cada chamada. A redução local de ruído pode atenuar os sons de fundo.'],
        ['Proteção das chamadas', 'Se o fornecedor ou a central os suportar e ativar, TLS protege a sinalização SIP e SDES-SRTP o fluxo de voz. Devem ser usados em conjunto porque as chaves SDES passam pela sinalização.'],
        ['Base SIP no Windows', 'A aplicação Windows utiliza baresip/libre para sinalização SIP e voz, incluindo o registo de contas e o estabelecimento de chamadas.']
      ]
    }
  };

  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const paragraphs = items => items.map(item => `<p>${escape(item)}</p>`).join('');
  const cards = items => items.map(([title, body]) => `<article class="hm-card"><h3>${escape(title)}</h3><p>${escape(body)}</p></article>`).join('');

  function mount(host, {lang = 'en'} = {}) {
    if (!host) throw new Error('AltSIPHome requires a host element');
    let locale = copy[lang] ? lang : 'en';

    function render() {
      const c = copy[locale];
      host.innerHTML = `<div class="home-overview" lang="${locale}">
        <section class="home-intro" aria-labelledby="home-intro-title">
          <h2 id="home-intro-title">${escape(c.title)}</h2>
          <div class="hm-intro-copy">${paragraphs(c.intro)}</div>
        </section>
        <section class="home-benefits" aria-labelledby="home-benefits-title">
          <h2 id="home-benefits-title">${escape(c.benefitsTitle)}</h2>
          <div class="hm-benefit-grid">${cards(c.benefits)}</div>
        </section>
        <section class="home-compatibility" aria-labelledby="home-compatibility-title">
          <h2 id="home-compatibility-title">${escape(c.compatibilityTitle)}</h2>
          <div class="hm-compat-copy">${paragraphs(c.compatibility)}</div>
          <div class="hm-protocols"><span class="hm-chip">SIP</span><span class="hm-chip">UDP</span><span class="hm-chip">TCP</span><span class="hm-chip">TLS</span></div>
        </section>
        <section class="home-technology" aria-labelledby="home-technology-title">
          <h2 id="home-technology-title">${escape(c.technologyTitle)}</h2>
          <div class="hm-tech-grid">${cards(c.technology)}</div>
        </section>
      </div>`;
    }

    render();
    return {
      setLocale(code) {
        locale = copy[code] ? code : 'en';
        render();
      }
    };
  }

  window.AltSIPHome = {mount};
})();
