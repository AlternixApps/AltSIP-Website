/* Compact home story, using the same in-memory interface as the guide. */
(() => {
  'use strict';

  const copy = {
  "en": {
    "accounts": [
      "Several accounts, one app",
      "Connect your office PBX and accounts from other SIP providers. Choose the account before you call",
      "Sample accounts"
    ],
    "compact": [
      "More room for your work",
      "Compact mode keeps essential call buttons and audio controls close, leaving more space for other windows",
      "Full window",
      "Compact window"
    ],
    "noise": [
      "Less noise, more voice",
      "Light and strong noise reduction help reduce background sound during a call",
      "Original",
      "Processed",
      "Sample recording",
      "Listen to the comparison"
    ],
    "tech": [
      "Built for your SIP service",
      "Connect to a provider or office PBX over UDP, TCP or TLS. Your service supplies the number and call routing.",
      "Opus, G.711 A-law and μ-law, and G.722 are available. The codec is negotiated for each call.",
      "Where your service supports and enables both, TLS protects signaling and SDES-SRTP protects voice. SDES keys travel in signaling."
    ],
    "lists": [
      "Your contacts and recent calls",
      "Find someone in your contacts or return to a recent call from the history",
      "Recent calls",
      "Contacts"
    ],
    "start": [
      "Ready in three steps",
      "Install the app",
      "Add your SIP account",
      "Choose an account and call",
      "Open the setup guide"
    ],
    "settings": [
      "Settings",
      "SIP accounts, codec priorities and number formatting"
    ]
  },
  "ru": {
    "accounts": [
      "Несколько аккаунтов в одном приложении",
      "Подключите рабочую АТС и аккаунты других SIP-провайдеров. Перед звонком выберите нужный аккаунт",
      "Пример аккаунтов"
    ],
    "compact": [
      "Больше места для работы",
      "Компактный режим сохраняет основные кнопки вызова и управление звуком, освобождая место для других окон",
      "Полное окно",
      "Компактное окно"
    ],
    "noise": [
      "Меньше шума, больше голоса",
      "Лёгкое и сильное шумоподавление помогают уменьшить фоновые звуки во время разговора",
      "Оригинал",
      "После обработки",
      "Образец записи",
      "Послушать сравнение"
    ],
    "tech": [
      "Для вашей SIP-телефонии",
      "Подключитесь к провайдеру или рабочей АТС через UDP, TCP или TLS. Номер и маршрутизацию вызовов предоставляет ваш сервис.",
      "Доступны Opus, G.711 A-law и μ-law, G.722. Кодек согласуется для каждого звонка.",
      "Если сервис поддерживает и включает оба режима, TLS защищает сигнализацию, а SDES-SRTP — голос. Ключи SDES передаются в сигнализации."
    ],
    "lists": [
      "История и контакты под рукой",
      "Найдите нужного человека в контактах или вернитесь к недавнему вызову из истории",
      "История",
      "Контакты"
    ],
    "start": [
      "Начните за три шага",
      "Установите приложение",
      "Добавьте SIP-аккаунт",
      "Выберите аккаунт и позвоните",
      "Открыть руководство"
    ],
    "settings": [
      "Настройка",
      "SIP-аккаунты, приоритет кодеков и обработка номера"
    ]
  },
  "uk": {
    "accounts": [
      "Кілька акаунтів в одному застосунку",
      "Підключіть робочу АТС і акаунти інших SIP-провайдерів. Перед дзвінком виберіть потрібний акаунт",
      "Приклад акаунтів"
    ],
    "compact": [
      "Більше місця для роботи",
      "Компактний режим зберігає основні кнопки виклику й керування звуком, звільняючи місце для інших вікон",
      "Повне вікно",
      "Компактне вікно"
    ],
    "noise": [
      "Менше шуму, більше голосу",
      "Легке й сильне шумозаглушення допомагають зменшити фонові звуки під час розмови",
      "Оригінал",
      "Після обробки",
      "Зразок запису",
      "Прослухати порівняння"
    ],
    "tech": [
      "Для вашої SIP-телефонії",
      "Підключіться до провайдера або робочої АТС через UDP, TCP чи TLS. Номер і маршрутизацію викликів надає ваш сервіс.",
      "Доступні Opus, G.711 A-law і μ-law, G.722. Кодек узгоджується для кожного дзвінка.",
      "Якщо сервіс підтримує й вмикає обидва режими, TLS захищає сигналізацію, а SDES-SRTP — голос. Ключі SDES передаються в сигналізації."
    ],
    "lists": [
      "Історія й контакти поруч",
      "Знайдіть потрібну людину в контактах або поверніться до недавнього виклику з історії",
      "Історія",
      "Контакти"
    ],
    "start": [
      "Почніть за три кроки",
      "Установіть застосунок",
      "Додайте SIP-акаунт",
      "Виберіть акаунт і телефонуйте",
      "Відкрити посібник"
    ],
    "settings": [
      "Налаштування",
      "SIP-акаунти, пріоритет кодеків і обробка номера"
    ]
  },
  "de": {
    "accounts": [
      "Mehrere Konten, eine App",
      "Verbinden Sie Ihre Telefonanlage und Konten anderer SIP-Anbieter. Wählen Sie das passende Konto vor dem Anruf",
      "Beispielkonten"
    ],
    "compact": [
      "Mehr Platz für Ihre Arbeit",
      "Der Kompaktmodus hält Anruftasten und Audioregler bereit und lässt mehr Platz für andere Fenster",
      "Ganzes Fenster",
      "Kompaktes Fenster"
    ],
    "noise": [
      "Weniger Rauschen, mehr Stimme",
      "Leichte und starke Rauschunterdrückung helfen, Hintergrundgeräusche beim Telefonieren zu mindern",
      "Original",
      "Bearbeitet",
      "Beispielaufnahme",
      "Vergleich anhören"
    ],
    "tech": [
      "Für Ihren SIP-Dienst",
      "Verbinden Sie sich per UDP, TCP oder TLS mit einem Anbieter oder einer Telefonanlage. Rufnummer und Anrufweiterleitung stellt Ihr Dienst bereit.",
      "Verfügbar sind Opus, G.711 A-law und μ-law sowie G.722. Der Codec wird für jeden Anruf ausgehandelt.",
      "Wenn Ihr Dienst beides unterstützt und aktiviert, schützt TLS die Signalisierung und SDES-SRTP die Stimme. SDES-Schlüssel werden in der Signalisierung übertragen."
    ],
    "lists": [
      "Kontakte und letzte Anrufe",
      "Finden Sie eine Person in den Kontakten oder rufen Sie über die Anrufliste zurück",
      "Anrufliste",
      "Kontakte"
    ],
    "start": [
      "In drei Schritten starten",
      "App installieren",
      "SIP-Konto hinzufügen",
      "Konto wählen und anrufen",
      "Einrichtungsanleitung öffnen"
    ],
    "settings": [
      "Einstellungen",
      "SIP-Konten, Codec-Prioritäten und Rufnummernformatierung"
    ]
  },
  "es": {
    "accounts": [
      "Varias cuentas, una aplicación",
      "Conecta tu centralita y cuentas de otros proveedores SIP. Elige la cuenta antes de llamar",
      "Cuentas de ejemplo"
    ],
    "compact": [
      "Más espacio para trabajar",
      "El modo compacto conserva los controles de llamada y audio y deja espacio para otras ventanas",
      "Ventana completa",
      "Ventana compacta"
    ],
    "noise": [
      "Menos ruido, más voz",
      "Los niveles suave y fuerte de reducción de ruido ayudan a atenuar el fondo durante la llamada",
      "Original",
      "Procesado",
      "Grabación de muestra",
      "Escuchar la comparación"
    ],
    "tech": [
      "Para tu servicio SIP",
      "Conecta con un proveedor o centralita mediante UDP, TCP o TLS. Tu servicio proporciona el número y dirige las llamadas.",
      "Están disponibles Opus, G.711 A-law y μ-law, y G.722. El códec se negocia en cada llamada.",
      "Si tu servicio admite y activa ambas opciones, TLS protege la señalización y SDES-SRTP la voz. Las claves SDES viajan en la señalización."
    ],
    "lists": [
      "Contactos y llamadas a mano",
      "Encuentra un contacto o vuelve a llamar desde el historial",
      "Historial",
      "Contactos"
    ],
    "start": [
      "Empieza en tres pasos",
      "Instala la aplicación",
      "Añade tu cuenta SIP",
      "Elige una cuenta y llama",
      "Abrir la guía de configuración"
    ],
    "settings": [
      "Ajustes",
      "Cuentas SIP, prioridad de códecs y formato de números"
    ]
  },
  "fr": {
    "accounts": [
      "Plusieurs comptes, une application",
      "Connectez votre standard et vos comptes d’autres fournisseurs SIP. Choisissez le compte avant d’appeler",
      "Exemples de comptes"
    ],
    "compact": [
      "Plus de place pour travailler",
      "Le mode compact conserve les commandes d’appel et de son, laissant plus de place aux autres fenêtres",
      "Fenêtre complète",
      "Fenêtre compacte"
    ],
    "noise": [
      "Moins de bruit, plus de voix",
      "Les deux niveaux de réduction du bruit atténuent les sons de fond pendant les appels",
      "Original",
      "Traité",
      "Exemple d’enregistrement",
      "Écouter la comparaison"
    ],
    "tech": [
      "Pour votre service SIP",
      "Connectez-vous à un fournisseur ou à un standard par UDP, TCP ou TLS. Votre service fournit le numéro et achemine les appels.",
      "Opus, G.711 A-law et μ-law ainsi que G.722 sont disponibles. Le codec est négocié pour chaque appel.",
      "Si votre service prend en charge et active les deux, TLS protège la signalisation et SDES-SRTP la voix. Les clés SDES passent dans la signalisation."
    ],
    "lists": [
      "Vos contacts et appels récents",
      "Retrouvez une personne dans les contacts ou rappelez depuis l’historique",
      "Appels récents",
      "Contacts"
    ],
    "start": [
      "Démarrez en trois étapes",
      "Installez l’application",
      "Ajoutez votre compte SIP",
      "Choisissez un compte et appelez",
      "Ouvrir le guide de configuration"
    ],
    "settings": [
      "Réglages",
      "Comptes SIP, priorité des codecs et format des numéros"
    ]
  },
  "it": {
    "accounts": [
      "Più account, una sola app",
      "Collega il centralino e gli account di altri provider SIP. Scegli l’account prima di chiamare",
      "Account di esempio"
    ],
    "compact": [
      "Più spazio per lavorare",
      "La modalità compatta conserva i controlli di chiamata e audio e lascia spazio alle altre finestre",
      "Finestra completa",
      "Finestra compatta"
    ],
    "noise": [
      "Meno rumore, più voce",
      "I livelli leggero e forte di riduzione del rumore aiutano ad attenuare il fondo durante la chiamata",
      "Originale",
      "Elaborato",
      "Registrazione di esempio",
      "Ascolta il confronto"
    ],
    "tech": [
      "Per il tuo servizio SIP",
      "Collegati a un provider o centralino tramite UDP, TCP o TLS. Il servizio fornisce il numero e instrada le chiamate.",
      "Sono disponibili Opus, G.711 A-law e μ-law e G.722. Il codec viene concordato per ogni chiamata.",
      "Se il servizio supporta e attiva entrambe le opzioni, TLS protegge la segnalazione e SDES-SRTP la voce. Le chiavi SDES passano nella segnalazione."
    ],
    "lists": [
      "Contatti e chiamate a portata di mano",
      "Trova una persona nei contatti o richiama dalla cronologia",
      "Cronologia",
      "Contatti"
    ],
    "start": [
      "Inizia in tre passaggi",
      "Installa l’app",
      "Aggiungi l’account SIP",
      "Scegli l’account e chiama",
      "Apri la guida alla configurazione"
    ],
    "settings": [
      "Impostazioni",
      "Account SIP, priorità dei codec e formato dei numeri"
    ]
  },
  "pl": {
    "accounts": [
      "Kilka kont, jedna aplikacja",
      "Połącz centralę firmową i konta innych dostawców SIP. Przed połączeniem wybierz potrzebne konto",
      "Przykładowe konta"
    ],
    "compact": [
      "Więcej miejsca do pracy",
      "Tryb kompaktowy zachowuje przyciski rozmowy i regulację dźwięku, zostawiając miejsce na inne okna",
      "Pełne okno",
      "Okno kompaktowe"
    ],
    "noise": [
      "Mniej szumu, więcej głosu",
      "Lekki i silny poziom tłumienia szumu pomaga ograniczyć dźwięki tła podczas rozmowy",
      "Oryginał",
      "Po obróbce",
      "Przykładowe nagranie",
      "Posłuchaj porównania"
    ],
    "tech": [
      "Dla Twojej usługi SIP",
      "Połącz się z dostawcą lub centralą przez UDP, TCP albo TLS. Usługa zapewnia numer i kierowanie połączeń.",
      "Dostępne są Opus, G.711 A-law i μ-law oraz G.722. Kodek jest uzgadniany dla każdej rozmowy.",
      "Jeśli usługa obsługuje i włącza oba tryby, TLS chroni sygnalizację, a SDES-SRTP głos. Klucze SDES są przesyłane w sygnalizacji."
    ],
    "lists": [
      "Historia i kontakty pod ręką",
      "Znajdź osobę w kontaktach lub oddzwoń z historii połączeń",
      "Historia",
      "Kontakty"
    ],
    "start": [
      "Zacznij w trzech krokach",
      "Zainstaluj aplikację",
      "Dodaj konto SIP",
      "Wybierz konto i zadzwoń",
      "Otwórz instrukcję konfiguracji"
    ],
    "settings": [
      "Ustawienia",
      "Konta SIP, priorytety kodeków i formatowanie numerów"
    ]
  },
  "pt": {
    "accounts": [
      "Várias contas, uma aplicação",
      "Ligue a central da empresa e contas de outros fornecedores SIP. Escolha a conta antes de ligar",
      "Contas de exemplo"
    ],
    "compact": [
      "Mais espaço para trabalhar",
      "O modo compacto mantém os controlos de chamada e áudio e deixa espaço para outras janelas",
      "Janela completa",
      "Janela compacta"
    ],
    "noise": [
      "Menos ruído, mais voz",
      "Os níveis leve e forte de redução de ruído ajudam a atenuar o fundo durante a chamada",
      "Original",
      "Processado",
      "Gravação de exemplo",
      "Ouvir a comparação"
    ],
    "tech": [
      "Para o seu serviço SIP",
      "Ligue-se a um fornecedor ou central por UDP, TCP ou TLS. O serviço fornece o número e encaminha as chamadas.",
      "Estão disponíveis Opus, G.711 A-law e μ-law, e G.722. O codec é negociado em cada chamada.",
      "Se o serviço suportar e ativar ambos, TLS protege a sinalização e SDES-SRTP a voz. As chaves SDES passam na sinalização."
    ],
    "lists": [
      "Contactos e chamadas à mão",
      "Encontre uma pessoa nos contactos ou volte a ligar a partir do histórico",
      "Histórico",
      "Contactos"
    ],
    "start": [
      "Comece em três passos",
      "Instale a aplicação",
      "Adicione a conta SIP",
      "Escolha a conta e ligue",
      "Abrir o guia de configuração"
    ],
    "settings": [
      "Definições",
      "Contas SIP, prioridade de codecs e formato de números"
    ]
  }
};

  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const sectionTitle = (id, number, title) => `<div class="hm-heading"><h2 id="${id}">${escape(title)}</h2></div>`;

  function mount(host, {lang = 'en'} = {}) {
    if (!host) throw new Error('AltSIPHome requires a host element');
    let locale = copy[lang] ? lang : 'en';
    let theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    let active = true;
    let destroyed = false;
    let observer = null;
    let resizeObserver = null;
    let resizeFrame = 0;
    const widgets = new Map();
    const visibility = new Map();
    const views = {accounts:'accounts', compact:'dial', lists:'history'};
    let compact = false;
    let listView = 'history';

    function markup() {
      const c = copy[locale];
      return `<div class="home-overview" lang="${locale}">
        <section class="hm-section hm-accounts" aria-labelledby="hm-accounts-title">
          <div class="hm-copy">${sectionTitle('hm-accounts-title','01',c.accounts[0])}<p>${escape(c.accounts[1])}</p></div>
          <div class="hm-visual hm-account-visual"><div class="hm-visual-label">${escape(c.accounts[2])}</div><div class="hm-demo-frame" data-home-demo="accounts" aria-label="${escape(c.accounts[2])}"><div class="hm-demo-slot"></div></div></div>
        </section>
        <section class="hm-section hm-compact" aria-labelledby="hm-compact-title">
          <div class="hm-copy">${sectionTitle('hm-compact-title','02',c.compact[0])}<p>${escape(c.compact[1])}</p><button class="hm-action hm-compact-toggle" type="button" aria-pressed="${compact}">${escape(c.compact[compact ? 2 : 3])}<span aria-hidden="true">↗</span></button></div>
          <div class="hm-visual hm-compact-visual"><div class="hm-visual-label hm-compact-label">${escape(c.compact[compact ? 3 : 2])}</div><div class="hm-demo-frame" data-home-demo="compact"><div class="hm-demo-slot"></div></div></div>
        </section>
        <section class="hm-section hm-noise" aria-labelledby="hm-noise-title">
          <div class="hm-copy">${sectionTitle('hm-noise-title','03',c.noise[0])}<p>${escape(c.noise[1])}</p><a class="hm-text-link" href="#sound" data-route="showcase" data-anchor="sound">${escape(c.noise[5])}<span aria-hidden="true">↗</span></a></div>
          <div class="hm-wave-pair" role="img" aria-label="${escape(c.noise[4] + ': ' + c.noise[2] + ' / ' + c.noise[3])}"><div class="hm-wave-row"><span>${escape(c.noise[2])}</span><canvas class="hm-wave" data-wave="conversation-original" aria-hidden="true"></canvas></div><div class="hm-wave-row"><span>${escape(c.noise[3])}</span><canvas class="hm-wave" data-wave="conversation-processed" aria-hidden="true"></canvas></div><small>${escape(c.noise[4])}</small></div>
        </section>
        <section class="hm-section hm-technical" aria-labelledby="hm-tech-title">
          ${sectionTitle('hm-tech-title','04',c.tech[0])}
          <div class="hm-tech-line"><strong>SIP · UDP / TCP / TLS</strong><p>${escape(c.tech[1])}</p></div>
          <div class="hm-tech-line"><strong>Opus · G.711 · G.722</strong><p>${escape(c.tech[2])}</p></div>
          <div class="hm-tech-line"><strong>${escape(c.settings[0])}</strong><p>${escape(c.settings[1])}</p></div><div class="hm-tech-foot"><p>${escape(c.tech[3])}</p><a class="hm-text-link" href="#guide" data-route="guide" data-topic="account">${escape(c.start[4])}<span aria-hidden="true">↗</span></a></div>
        </section>
        <section class="hm-section hm-lists" aria-labelledby="hm-lists-title">
          <div class="hm-copy">${sectionTitle('hm-lists-title','05',c.lists[0])}<p>${escape(c.lists[1])}</p><div class="hm-switch" role="group" aria-label="${escape(c.lists[0])}"><button type="button" data-home-list="history" aria-pressed="${listView === 'history'}">${escape(c.lists[2])}</button><button type="button" data-home-list="contacts" aria-pressed="${listView === 'contacts'}">${escape(c.lists[3])}</button></div></div>
          <div class="hm-visual hm-list-visual"><div class="hm-demo-frame" data-home-demo="lists"><div class="hm-demo-slot"></div></div></div>
        </section>
        <section class="hm-section hm-start" aria-labelledby="hm-start-title">
          ${sectionTitle('hm-start-title','06',c.start[0])}
          <ol><li>${escape(c.start[1])}</li><li>${escape(c.start[2])}</li><li>${escape(c.start[3])}</li></ol>
          <a class="hm-action" href="#guide" data-route="guide" data-topic="account">${escape(c.start[4])}<span aria-hidden="true">↗</span></a>
        </section>
      </div>`;
    }

    function updateActivity() {
      for (const [name, widget] of widgets) widget.setActive?.(active && !document.hidden && !!visibility.get(name));
    }

    function fit(name) {
      const widget = widgets.get(name);
      const frame = host.querySelector(`[data-home-demo="${name}"]`);
      if (!widget || !frame || !frame.clientWidth) return;
      const size = widget.getSize();
      const view = name === 'compact' ? (compact ? 'compact' : 'dial') : name === 'lists' ? listView : 'accounts';
      const crop = widget.getGuideCrop?.(view) || {x:0,y:0,width:size.width,height:size.height};
      const x = Math.max(0, Math.min(size.width - 1, crop.x));
      const y = Math.max(0, Math.min(size.height - 1, crop.y));
      const width = Math.min(size.width - x, crop.width);
      const height = Math.min(size.height - y, crop.height);
      const maxHeight = name === 'compact' ? 308 : name === 'accounts' ? 350 : 324;
      const available = frame.parentElement?.clientWidth || frame.clientWidth;
      const scale = Math.min(name === 'accounts' ? 1.32 : 1, available / width, maxHeight / height);
      const slot = frame.querySelector('.hm-demo-slot');
      slot.style.left = `${-x * scale}px`;
      slot.style.top = `${-y * scale}px`;
      slot.style.transform = `scale(${scale})`;
      frame.style.height = `${height * scale}px`;
      frame.style.width = `${width * scale}px`;
      frame.style.maxWidth = '100%';
    }

    function fitAll() {
      for (const name of widgets.keys()) fit(name);
    }

    function drawWaves() {
      if (destroyed || !active || document.hidden || !visibility.get('noise') || !window.AltSIPWave?.render) return;
      const waves = window.ALTSIP_OWNER_WAVES || {};
      host.querySelectorAll('.hm-wave').forEach(canvas => {
        const wave = waves[canvas.dataset.wave];
        if (wave) window.AltSIPWave.render(canvas, {waves:[wave],weights:[1],clean:canvas.dataset.wave === 'conversation-processed' ? 1 : 0,reduced:true,dark:theme === 'dark'});
      });
    }

    function mountWidget(name) {
      if (destroyed || widgets.has(name) || !window.AltSIPDemo?.mount) return;
      const frame = host.querySelector(`[data-home-demo="${name}"]`);
      if (!frame) return;
      const slot = frame.querySelector('.hm-demo-slot');
      const view = name === 'compact' ? (compact ? 'compact' : 'dial') : name === 'lists' ? listView : views[name];
      const options = {initialView:view,interactionScope:name === 'lists' ? listView : name};
      if (name === 'accounts') options.accountNames = ['Office','Support','Personal'];
      const widget = window.AltSIPDemo.mount(slot, options);
      widgets.set(name, widget);
      widget.setLocale?.(locale);
      widget.setTheme?.(theme);
      frame.addEventListener('sip-demo-resize', () => {cancelAnimationFrame(resizeFrame);resizeFrame = requestAnimationFrame(() => fit(name));});
      widget.setActive?.(active && !document.hidden && !!visibility.get(name));
      requestAnimationFrame(() => fit(name));
    }

    function connectObserver() {
      observer?.disconnect();
      if (!('IntersectionObserver' in window)) {
        ['accounts','compact','noise','lists'].forEach(name => {visibility.set(name,true);if (name === 'noise') drawWaves(); else mountWidget(name);});
        return;
      }
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          const name = entry.target.dataset.homeDemo || (entry.target.classList.contains('hm-wave-pair') ? 'noise' : null);
          if (!name) continue;
          visibility.set(name, entry.isIntersecting);
          if (entry.isIntersecting) name === 'noise' ? drawWaves() : mountWidget(name);
        }
        updateActivity();
      }, {rootMargin:'180px 0px'});
      host.querySelectorAll('[data-home-demo],.hm-wave-pair').forEach(node => observer.observe(node));
    }

    function render() {
      for (const widget of widgets.values()) widget.destroy?.();
      widgets.clear(); visibility.clear(); observer?.disconnect(); resizeObserver?.disconnect();
      host.innerHTML = markup();
      host.querySelector('.hm-compact-toggle').addEventListener('click', () => {
        compact = !compact;
        const button = host.querySelector('.hm-compact-toggle');
        button.setAttribute('aria-pressed', String(compact));
        button.firstChild.textContent = copy[locale].compact[compact ? 2 : 3];
        host.querySelector('.hm-compact-label').textContent = copy[locale].compact[compact ? 3 : 2];
        const widget = widgets.get('compact');
        widget?.preview(compact ? 'compact' : 'dial');
        widget?.setInteractionScope?.('compact');
        requestAnimationFrame(() => fit('compact'));
      });
      host.querySelectorAll('[data-home-list]').forEach(button => button.addEventListener('click', () => {
        listView = button.dataset.homeList;
        host.querySelectorAll('[data-home-list]').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.homeList === listView)));
        const widget = widgets.get('lists');
        widget?.preview(listView);
        widget?.setInteractionScope?.(listView);
        requestAnimationFrame(() => fit('lists'));
      }));
      connectObserver();
      if ('ResizeObserver' in window) {
        resizeObserver = new ResizeObserver(() => {cancelAnimationFrame(resizeFrame);resizeFrame = requestAnimationFrame(() => {fitAll();drawWaves();});});
        resizeObserver.observe(host);
      }
    }

    const onVisibility = () => {updateActivity();drawWaves();};
    document.addEventListener('visibilitychange', onVisibility);
    render();
    return {
      setLocale(code) {if (destroyed) return;const next = copy[code] ? code : 'en';if (next !== locale) {locale = next;render();}},
      setTheme(value) {if (destroyed || !['light','dark'].includes(value)) return;theme = value;for (const widget of widgets.values()) widget.setTheme?.(theme);drawWaves();},
      setActive(value) {if (destroyed) return;active = !!value;updateActivity();drawWaves();},
      destroy() {if (destroyed) return;destroyed = true;observer?.disconnect();resizeObserver?.disconnect();cancelAnimationFrame(resizeFrame);document.removeEventListener('visibilitychange',onVisibility);for (const widget of widgets.values()) widget.destroy?.();widgets.clear();host.innerHTML = '';}
    };
  }

  window.AltSIPHome = {mount};
})();
