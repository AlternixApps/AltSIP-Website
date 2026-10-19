/* Homepage overview. Product copy is kept here so every locale has the same structure. */
(() => {
  'use strict';

  const copy = {
    en: {
      kicker: 'A phone for your SIP account', title: 'What is AltSIP',
      lead: 'AltSIP is a softphone for voice calls. Add an account from your SIP provider or office phone system, then make and receive calls from your desktop.',
      story: [
        ['Your SIP account', 'AltSIP does not assign a number. It signs in with the SIP account you already use at work or get from a provider.'],
        ['Multiple accounts in one window', 'Manage calls, contacts and more than one account in one desktop window. Your phone system still handles the call route.']
      ],
      nextFeatures: 'Explore the features', nextGuide: 'Read the guide',
      useKicker: 'Where it fits', useTitle: 'For different work needs', useLead: 'Work calls, multiple lines and conversations with your team.',
      uses: [
        ['At your desk', 'Answer and dial from your computer while you work. Call controls stay close without another device on the desk.'],
        ['Across accounts', 'Keep separate SIP accounts together and choose which account to use for a call.'],
        ['With a team', 'Put a caller on hold, consult a colleague and transfer the call when your phone system allows it.']
      ],
      routeKicker: 'How a call connects', routeTitle: 'From SIP account to the other person',
      routeLead: 'AltSIP is the app at your end of a SIP call. You supply the account and the network connection.',
      route: [
        ['Your SIP account', 'Enter the server address and sign-in details from your provider or PBX.'],
        ['Provider or PBX', 'AltSIP registers there and sends call requests through that system.'],
        ['The other person', 'The call reaches its destination according to your provider or PBX settings.']
      ],
      techKicker: 'Under the hood', techTitle: 'Technology and call security',
      tech: [
        ['SIP at its core', 'The Windows app uses baresip/libre for SIP signaling and voice media. Codec choice is negotiated with the other side.'],
        ['Voice tools on the device', 'Local noise reduction helps with background sound. Recording and call controls are available when you need them.'],
        ['Protection by configuration', 'SIP over TLS and SDES-SRTP are available. Configure them with a compatible provider or PBX to protect signaling and the media link.']
      ],
      faqKicker: 'Good to know', faqTitle: 'Questions before you start', faq: [
        ['Do I need a SIP account?', 'Yes. AltSIP connects to an account supplied by a SIP provider or PBX. It does not provide a phone number or calling plan.'],
        ['Can I use my existing office phone system?', 'If it offers SIP account details, you can enter them in AltSIP. Confirm the settings and supported call features with your administrator.'],
        ['Can I add more than one account?', 'Yes. You can keep multiple SIP accounts in AltSIP and choose the one for an outgoing call.'],
        ['Are calls encrypted?', 'TLS can protect SIP signaling and SDES-SRTP can protect the media link when your provider or PBX supports and enables them. This is not end-to-end encryption.'],
        ['Where does noise reduction happen?', 'The Windows app processes microphone audio locally before sending it into the call. Results depend on the sound and device.']
      ]
    },
    ru: {
      kicker: 'Телефон для вашего SIP-аккаунта', title: 'Что такое AltSIP',
      lead: 'AltSIP — программный телефон для голосовых звонков. Добавьте аккаунт своего SIP-провайдера или рабочей АТС, чтобы звонить и принимать вызовы с компьютера.',
      story: [
        ['Ваш SIP-аккаунт', 'AltSIP не выдаёт номер. Он входит в SIP-аккаунт, который у вас уже есть на работе или у провайдера.'],
        ['Несколько аккаунтов в одном окне', 'Управляйте вызовами, контактами и несколькими аккаунтами в одном окне. Маршрут звонка по-прежнему задаёт ваша АТС.']
      ],
      nextFeatures: 'Посмотреть возможности', nextGuide: 'Открыть руководство',
      useKicker: 'Когда удобно', useTitle: 'Для разных рабочих задач', useLead: 'Рабочие звонки, несколько линий и общение с командой.',
      uses: [
        ['За рабочим столом', 'Отвечайте и набирайте номер с компьютера во время работы. Управление вызовом всегда рядом.'],
        ['С несколькими аккаунтами', 'Держите разные SIP-аккаунты вместе и выбирайте нужный перед звонком.'],
        ['В команде', 'Поставьте вызов на удержание, поговорите с коллегой и переведите звонок, если это позволяет ваша АТС.']
      ],
      routeKicker: 'Как проходит звонок', routeTitle: 'От SIP-аккаунта до собеседника',
      routeLead: 'AltSIP — приложение на вашей стороне SIP-звонка. Для работы нужны ваш аккаунт и подключение к сети.',
      route: [
        ['Ваш SIP-аккаунт', 'Введите адрес сервера и данные для входа от провайдера или АТС.'],
        ['Провайдер или АТС', 'AltSIP регистрируется на сервере и отправляет через него запросы на звонок.'],
        ['Собеседник', 'Звонок идёт по маршруту, заданному провайдером или настройками АТС.']
      ],
      techKicker: 'Как устроено', techTitle: 'Технологии и защита связи',
      tech: [
        ['SIP в основе', 'В версии для Windows за SIP-сигнализацию и передачу голоса отвечают baresip/libre. Кодек согласуется с другой стороной.'],
        ['Обработка голоса на устройстве', 'Локальное шумоподавление помогает убрать фоновый звук. Запись и управление вызовом доступны при необходимости.'],
        ['Защита по настройке', 'Доступны SIP через TLS и SDES-SRTP. При поддержке провайдера или АТС они защищают сигнализацию и канал передачи голоса.']
      ],
      faqKicker: 'Перед началом', faqTitle: 'Частые вопросы', faq: [
        ['Нужен ли SIP-аккаунт?', 'Да. AltSIP подключается к аккаунту SIP-провайдера или АТС. Он не предоставляет номер и тариф для звонков.'],
        ['Подойдёт ли моя рабочая АТС?', 'Если она выдаёт данные SIP-аккаунта, их можно ввести в AltSIP. Настройки и доступные функции уточните у администратора.'],
        ['Можно добавить несколько аккаунтов?', 'Да. В AltSIP можно хранить несколько SIP-аккаунтов и выбирать аккаунт для исходящего звонка.'],
        ['Звонки шифруются?', 'TLS может защитить SIP-сигнализацию, а SDES-SRTP — голосовой канал при поддержке и настройке со стороны провайдера или АТС. Это не сквозное шифрование.'],
        ['Где работает шумоподавление?', 'Версия для Windows обрабатывает звук микрофона локально перед отправкой в звонок. Результат зависит от шума и устройства.']
      ]
    },
    uk: {
      kicker: 'Телефон для вашого SIP-акаунта', title: 'Що таке AltSIP',
      lead: 'AltSIP — програмний телефон для голосових дзвінків. Додайте акаунт свого SIP-провайдера або робочої АТС, щоб телефонувати й приймати виклики з комп’ютера.',
      story: [
        ['Ваш SIP-акаунт', 'AltSIP не надає номер. Він входить у SIP-акаунт, який у вас уже є на роботі або в провайдера.'],
        ['Кілька акаунтів в одному вікні', 'Керуйте викликами, контактами та кількома акаунтами в одному вікні. Маршрут дзвінка й далі визначає ваша АТС.']
      ],
      nextFeatures: 'Переглянути можливості', nextGuide: 'Відкрити посібник',
      useKicker: 'Коли зручно', useTitle: 'Для різних робочих завдань', useLead: 'Робочі дзвінки, кілька ліній і спілкування з командою.',
      uses: [
        ['За робочим столом', 'Відповідайте та набирайте номер із комп’ютера під час роботи. Керування викликом завжди поруч.'],
        ['З кількома акаунтами', 'Тримайте різні SIP-акаунти разом і вибирайте потрібний перед дзвінком.'],
        ['У команді', 'Утримайте виклик, порадьтеся з колегою та переведіть дзвінок, якщо це дозволяє ваша АТС.']
      ],
      routeKicker: 'Як проходить дзвінок', routeTitle: 'Від SIP-акаунта до співрозмовника',
      routeLead: 'AltSIP — застосунок на вашому боці SIP-дзвінка. Для роботи потрібні ваш акаунт і підключення до мережі.',
      route: [
        ['Ваш SIP-акаунт', 'Введіть адресу сервера й дані для входу від провайдера або АТС.'],
        ['Провайдер або АТС', 'AltSIP реєструється на сервері та надсилає через нього запити на дзвінок.'],
        ['Співрозмовник', 'Дзвінок іде за маршрутом, заданим провайдером або налаштуваннями АТС.']
      ],
      techKicker: 'Як це працює', techTitle: 'Технології та захист зв’язку',
      tech: [
        ['SIP в основі', 'У версії для Windows за SIP-сигналізацію й передавання голосу відповідають baresip/libre. Кодек узгоджується з іншою стороною.'],
        ['Обробка голосу на пристрої', 'Локальне шумозаглушення допомагає прибрати фоновий звук. Запис і керування викликом доступні за потреби.'],
        ['Захист за налаштуванням', 'Доступні SIP через TLS і SDES-SRTP. За підтримки провайдера або АТС вони захищають сигналізацію й канал передавання голосу.']
      ],
      faqKicker: 'Перед початком', faqTitle: 'Поширені запитання', faq: [
        ['Чи потрібен SIP-акаунт?', 'Так. AltSIP підключається до акаунта SIP-провайдера або АТС. Він не надає номер чи тариф для дзвінків.'],
        ['Чи підійде моя робоча АТС?', 'Якщо вона надає дані SIP-акаунта, їх можна ввести в AltSIP. Налаштування й доступні функції уточніть в адміністратора.'],
        ['Можна додати кілька акаунтів?', 'Так. В AltSIP можна зберігати кілька SIP-акаунтів і вибирати акаунт для вихідного дзвінка.'],
        ['Дзвінки шифруються?', 'TLS може захищати SIP-сигналізацію, а SDES-SRTP — голосовий канал за підтримки й налаштування провайдера або АТС. Це не наскрізне шифрування.'],
        ['Де працює шумозаглушення?', 'Версія для Windows обробляє звук мікрофона локально перед надсиланням у дзвінок. Результат залежить від шуму й пристрою.']
      ]
    },
    de: {
      kicker: 'Ein Telefon für Ihr SIP-Konto', title: 'Was ist AltSIP',
      lead: 'AltSIP ist ein Softphone für Sprachanrufe. Richten Sie ein Konto Ihres SIP-Anbieters oder Ihrer Telefonanlage ein, um am Computer anzurufen und Anrufe anzunehmen.',
      story: [
        ['Ihr SIP-Konto', 'AltSIP vergibt keine Rufnummer. Die App meldet sich mit dem SIP-Konto an, das Sie von Ihrer Arbeit oder Ihrem Anbieter erhalten.'],
        ['Mehrere Konten in einem Fenster', 'Verwalten Sie Anrufe, Kontakte und mehrere Konten in einem Fenster. Ihre Telefonanlage bestimmt weiterhin den Anrufweg.']
      ],
      nextFeatures: 'Funktionen entdecken', nextGuide: 'Anleitung lesen',
      useKicker: 'Im Arbeitsalltag', useTitle: 'Für verschiedene Aufgaben bei der Arbeit', useLead: 'Geschäftliche Anrufe, mehrere Leitungen und Gespräche im Team.',
      uses: [
        ['Am Schreibtisch', 'Nehmen Sie Anrufe an und wählen Sie direkt am Computer. Die Anrufsteuerung bleibt in Reichweite.'],
        ['Mit mehreren Konten', 'Verwalten Sie verschiedene SIP-Konten zusammen und wählen Sie vor dem Anruf das passende aus.'],
        ['Im Team', 'Halten Sie einen Anruf, sprechen Sie mit einem Kollegen und vermitteln Sie ihn, sofern Ihre Telefonanlage dies unterstützt.']
      ],
      routeKicker: 'So verbindet sich ein Anruf', routeTitle: 'Vom SIP-Konto zum Gesprächspartner',
      routeLead: 'AltSIP ist die App auf Ihrer Seite des SIP-Anrufs. Sie benötigen ein Konto und eine Netzwerkverbindung.',
      route: [
        ['Ihr SIP-Konto', 'Geben Sie Serveradresse und Zugangsdaten Ihres Anbieters oder Ihrer Telefonanlage ein.'],
        ['Anbieter oder Telefonanlage', 'AltSIP registriert sich dort und sendet Anrufanfragen über dieses System.'],
        ['Die andere Person', 'Der Anruf folgt dem Weg, den Ihr Anbieter oder Ihre Telefonanlage festlegt.']
      ],
      techKicker: 'Die Technik', techTitle: 'Technik und Schutz für Anrufe',
      tech: [
        ['SIP als Grundlage', 'Die Windows-App nutzt baresip/libre für SIP-Signalisierung und Sprachübertragung. Der Codec wird mit der Gegenseite ausgehandelt.'],
        ['Sprachverarbeitung am Gerät', 'Lokale Rauschunterdrückung hilft bei Hintergrundgeräuschen. Aufnahme und Anrufsteuerung stehen bei Bedarf bereit.'],
        ['Schutz nach Konfiguration', 'SIP über TLS und SDES-SRTP sind verfügbar. Mit einer passenden Telefonanlage schützen sie Signalisierung und Medienverbindung.']
      ],
      faqKicker: 'Vor dem Start', faqTitle: 'Häufige Fragen', faq: [
        ['Brauche ich ein SIP-Konto?', 'Ja. AltSIP verbindet sich mit dem Konto eines SIP-Anbieters oder einer Telefonanlage. Rufnummer und Tarif sind nicht enthalten.'],
        ['Kann ich meine bestehende Telefonanlage nutzen?', 'Wenn sie SIP-Zugangsdaten bereitstellt, können Sie diese in AltSIP eingeben. Fragen Sie Ihre Administration nach Einstellungen und Funktionen.'],
        ['Kann ich mehrere Konten hinzufügen?', 'Ja. Sie können mehrere SIP-Konten speichern und für ausgehende Anrufe eines auswählen.'],
        ['Sind Anrufe verschlüsselt?', 'TLS kann die SIP-Signalisierung und SDES-SRTP die Medienverbindung schützen, wenn Anbieter oder Telefonanlage dies unterstützen und aktivieren. Es ist keine Ende-zu-Ende-Verschlüsselung.'],
        ['Wo findet die Rauschunterdrückung statt?', 'Die Windows-App verarbeitet Mikrofonton lokal, bevor sie ihn in den Anruf sendet. Das Ergebnis hängt von Geräusch und Gerät ab.']
      ]
    },
    es: {
      kicker: 'Un teléfono para tu cuenta SIP', title: 'Qué es AltSIP',
      lead: 'AltSIP es un softphone para llamadas de voz. Añade una cuenta de tu proveedor SIP o centralita y llama o responde desde el ordenador.',
      story: [
        ['Tu cuenta SIP', 'AltSIP no proporciona un número. Accede con la cuenta SIP que ya usas en el trabajo o que te facilita un proveedor.'],
        ['Varias cuentas en una ventana', 'Gestiona llamadas, contactos y varias cuentas en una sola ventana. Tu centralita sigue decidiendo cómo se encaminan las llamadas.']
      ],
      nextFeatures: 'Explorar funciones', nextGuide: 'Leer la guía',
      useKicker: 'En tu día a día', useTitle: 'Para distintas tareas de trabajo', useLead: 'Llamadas de trabajo, varias líneas y comunicación con el equipo.',
      uses: [
        ['En tu escritorio', 'Responde y marca desde el ordenador mientras trabajas. Los controles de llamada siempre están cerca.'],
        ['Entre varias cuentas', 'Reúne distintas cuentas SIP y elige cuál usar antes de llamar.'],
        ['Con tu equipo', 'Pon una llamada en espera, habla con un compañero y transfiérela si tu centralita lo permite.']
      ],
      routeKicker: 'Cómo se conecta una llamada', routeTitle: 'De tu cuenta SIP a la otra persona',
      routeLead: 'AltSIP es la aplicación en tu extremo de la llamada SIP. Necesitas tu cuenta y conexión a la red.',
      route: [
        ['Tu cuenta SIP', 'Introduce el servidor y los datos de acceso de tu proveedor o centralita.'],
        ['Proveedor o centralita', 'AltSIP se registra allí y envía las solicitudes de llamada a través de ese sistema.'],
        ['La otra persona', 'La llamada sigue la ruta configurada por tu proveedor o centralita.']
      ],
      techKicker: 'Por dentro', techTitle: 'Tecnología y protección de las llamadas',
      tech: [
        ['SIP como base', 'La versión de Windows usa baresip/libre para la señalización SIP y el audio. El códec se acuerda con el otro extremo.'],
        ['Voz procesada en el dispositivo', 'La reducción local de ruido ayuda con los sonidos de fondo. También dispones de grabación y controles de llamada.'],
        ['Protección configurable', 'SIP sobre TLS y SDES-SRTP están disponibles. Con una centralita compatible protegen la señalización y el enlace de audio.']
      ],
      faqKicker: 'Antes de empezar', faqTitle: 'Preguntas frecuentes', faq: [
        ['¿Necesito una cuenta SIP?', 'Sí. AltSIP se conecta a una cuenta de un proveedor SIP o centralita. No incluye número ni plan de llamadas.'],
        ['¿Puedo usar mi centralita actual?', 'Si facilita datos de una cuenta SIP, puedes introducirlos en AltSIP. Consulta los ajustes y funciones con el administrador.'],
        ['¿Puedo añadir varias cuentas?', 'Sí. Puedes guardar varias cuentas SIP y elegir una para las llamadas salientes.'],
        ['¿Están cifradas las llamadas?', 'TLS puede proteger la señalización SIP y SDES-SRTP el enlace de audio si el proveedor o la centralita los admiten y activan. No es cifrado de extremo a extremo.'],
        ['¿Dónde se reduce el ruido?', 'La versión de Windows procesa el micrófono localmente antes de enviar el audio a la llamada. El resultado depende del ruido y del dispositivo.']
      ]
    },
    fr: {
      kicker: 'Un téléphone pour votre compte SIP', title: 'Qu’est-ce qu’AltSIP',
      lead: 'AltSIP est un logiciel de téléphonie pour les appels vocaux. Ajoutez le compte de votre fournisseur SIP ou de votre standard pour appeler et répondre depuis votre ordinateur.',
      story: [
        ['Votre compte SIP', 'AltSIP ne fournit pas de numéro. Il se connecte au compte SIP déjà utilisé au travail ou obtenu auprès d’un fournisseur.'],
        ['Plusieurs comptes dans une même fenêtre', 'Gérez appels, contacts et plusieurs comptes dans une seule fenêtre. Votre standard continue de définir le trajet des appels.']
      ],
      nextFeatures: 'Explorer les fonctions', nextGuide: 'Lire le guide',
      useKicker: 'Au quotidien', useTitle: 'Pour différents besoins au travail', useLead: 'Appels professionnels, plusieurs lignes et échanges en équipe.',
      uses: [
        ['À votre bureau', 'Répondez et composez depuis votre ordinateur pendant que vous travaillez. Les commandes restent accessibles.'],
        ['Avec plusieurs comptes', 'Regroupez différents comptes SIP et choisissez celui à utiliser avant d’appeler.'],
        ['En équipe', 'Mettez un appel en attente, consultez un collègue et transférez l’appel si votre standard le permet.']
      ],
      routeKicker: 'Le trajet d’un appel', routeTitle: 'Du compte SIP à votre interlocuteur',
      routeLead: 'AltSIP est l’application à votre extrémité de l’appel SIP. Vous fournissez le compte et la connexion réseau.',
      route: [
        ['Votre compte SIP', 'Saisissez le serveur et les identifiants fournis par votre fournisseur ou standard.'],
        ['Fournisseur ou standard', 'AltSIP s’y enregistre et lui transmet les demandes d’appel.'],
        ['Votre interlocuteur', 'L’appel suit l’itinéraire défini par votre fournisseur ou votre standard.']
      ],
      techKicker: 'Côté technique', techTitle: 'Technologie et protection des appels',
      tech: [
        ['SIP au cœur', 'La version Windows utilise baresip/libre pour la signalisation SIP et la voix. Le codec est négocié avec l’autre extrémité.'],
        ['Voix traitée sur l’appareil', 'La réduction locale du bruit aide à atténuer les sons ambiants. Enregistrement et commandes d’appel sont aussi disponibles.'],
        ['Protection à configurer', 'SIP sur TLS et SDES-SRTP sont disponibles. Avec un standard compatible, ils protègent la signalisation et la liaison audio.']
      ],
      faqKicker: 'Avant de commencer', faqTitle: 'Questions fréquentes', faq: [
        ['Faut-il un compte SIP ?', 'Oui. AltSIP se connecte au compte d’un fournisseur SIP ou d’un standard. Il ne fournit ni numéro ni forfait d’appels.'],
        ['Puis-je utiliser mon standard actuel ?', 'S’il fournit des identifiants SIP, vous pouvez les saisir dans AltSIP. Confirmez les réglages et fonctions auprès de votre administrateur.'],
        ['Puis-je ajouter plusieurs comptes ?', 'Oui. Vous pouvez enregistrer plusieurs comptes SIP et choisir celui d’un appel sortant.'],
        ['Les appels sont-ils chiffrés ?', 'TLS peut protéger la signalisation SIP et SDES-SRTP la liaison audio si le fournisseur ou le standard les prend en charge et les active. Ce n’est pas un chiffrement de bout en bout.'],
        ['Où se fait la réduction du bruit ?', 'La version Windows traite localement le son du micro avant de l’envoyer dans l’appel. Le résultat dépend du bruit et de l’appareil.']
      ]
    },
    it: {
      kicker: 'Un telefono per il tuo account SIP', title: 'Che cos’è AltSIP',
      lead: 'AltSIP è un softphone per le chiamate vocali. Aggiungi un account del tuo provider SIP o centralino per chiamare e rispondere dal computer.',
      story: [
        ['Il tuo account SIP', 'AltSIP non fornisce un numero. Accede con l’account SIP che usi già al lavoro o che ricevi da un provider.'],
        ['Più account in un’unica finestra', 'Gestisci chiamate, contatti e più account in un’unica finestra. Il centralino continua a definire il percorso delle chiamate.']
      ],
      nextFeatures: 'Esplora le funzioni', nextGuide: 'Leggi la guida',
      useKicker: 'Nella pratica', useTitle: 'Per diverse esigenze di lavoro', useLead: 'Chiamate di lavoro, più linee e comunicazione con il team.',
      uses: [
        ['Alla scrivania', 'Rispondi e componi dal computer mentre lavori. I comandi della chiamata restano vicini.'],
        ['Tra più account', 'Tieni insieme diversi account SIP e scegli quello da usare prima di chiamare.'],
        ['Con il team', 'Metti una chiamata in attesa, consulta un collega e trasferiscila se il centralino lo permette.']
      ],
      routeKicker: 'Come si collega una chiamata', routeTitle: 'Dall’account SIP all’interlocutore',
      routeLead: 'AltSIP è l’app alla tua estremità della chiamata SIP. Servono il tuo account e una connessione di rete.',
      route: [
        ['Il tuo account SIP', 'Inserisci server e credenziali forniti dal provider o dal centralino.'],
        ['Provider o centralino', 'AltSIP si registra e invia le richieste di chiamata tramite quel sistema.'],
        ['L’altra persona', 'La chiamata segue il percorso impostato dal provider o dal centralino.']
      ],
      techKicker: 'La tecnologia', techTitle: 'Tecnologia e protezione delle chiamate',
      tech: [
        ['SIP alla base', 'La versione Windows usa baresip/libre per segnalazione SIP e voce. Il codec viene negoziato con l’altra estremità.'],
        ['Voce elaborata sul dispositivo', 'La riduzione locale del rumore aiuta con i suoni di fondo. Registrazione e comandi di chiamata sono disponibili quando servono.'],
        ['Protezione da configurare', 'Sono disponibili SIP su TLS e SDES-SRTP. Con un centralino compatibile proteggono segnalazione e collegamento audio.']
      ],
      faqKicker: 'Prima di iniziare', faqTitle: 'Domande frequenti', faq: [
        ['Serve un account SIP?', 'Sì. AltSIP si collega a un account di un provider SIP o centralino. Non include numero né piano tariffario.'],
        ['Posso usare il mio centralino?', 'Se fornisce credenziali SIP, puoi inserirle in AltSIP. Chiedi all’amministratore le impostazioni e le funzioni disponibili.'],
        ['Posso aggiungere più account?', 'Sì. Puoi salvare più account SIP e scegliere quale usare per una chiamata in uscita.'],
        ['Le chiamate sono cifrate?', 'TLS può proteggere la segnalazione SIP e SDES-SRTP il collegamento audio se provider o centralino li supportano e attivano. Non è cifratura end-to-end.'],
        ['Dove avviene la riduzione del rumore?', 'La versione Windows elabora localmente il microfono prima di inviare l’audio alla chiamata. Il risultato dipende dal rumore e dal dispositivo.']
      ]
    },
    pl: {
      kicker: 'Telefon dla Twojego konta SIP', title: 'Czym jest AltSIP',
      lead: 'AltSIP to softphone do rozmów głosowych. Dodaj konto od dostawcy SIP lub firmowej centrali i dzwoń oraz odbieraj połączenia na komputerze.',
      story: [
        ['Twoje konto SIP', 'AltSIP nie przydziela numeru. Loguje się na konto SIP, którego używasz w pracy lub które otrzymasz od dostawcy.'],
        ['Kilka kont w jednym oknie', 'Zarządzaj połączeniami, kontaktami i kilkoma kontami w jednym oknie. Centrala nadal wyznacza trasę połączenia.']
      ],
      nextFeatures: 'Poznaj funkcje', nextGuide: 'Przeczytaj poradnik',
      useKicker: 'Na co dzień', useTitle: 'Do różnych zadań w pracy', useLead: 'Rozmowy służbowe, kilka linii i kontakt z zespołem.',
      uses: [
        ['Przy biurku', 'Odbieraj i wybieraj numer z komputera podczas pracy. Sterowanie rozmową jest zawsze blisko.'],
        ['Na kilku kontach', 'Trzymaj różne konta SIP w jednym miejscu i wybieraj właściwe przed rozmową.'],
        ['W zespole', 'Zawieś rozmowę, skonsultuj się ze współpracownikiem i przekaż połączenie, jeśli centrala na to pozwala.']
      ],
      routeKicker: 'Jak łączy się rozmowa', routeTitle: 'Od konta SIP do rozmówcy',
      routeLead: 'AltSIP to aplikacja po Twojej stronie połączenia SIP. Potrzebujesz konta i dostępu do sieci.',
      route: [
        ['Twoje konto SIP', 'Wpisz adres serwera i dane logowania od dostawcy lub centrali.'],
        ['Dostawca lub centrala', 'AltSIP rejestruje się tam i wysyła przez ten system żądania połączeń.'],
        ['Druga osoba', 'Połączenie trafia dalej według ustawień dostawcy lub centrali.']
      ],
      techKicker: 'Od strony technicznej', techTitle: 'Technologia i ochrona połączeń',
      tech: [
        ['SIP u podstaw', 'Wersja Windows używa baresip/libre do sygnalizacji SIP i przesyłania głosu. Kodek jest uzgadniany z drugą stroną.'],
        ['Głos przetwarzany na urządzeniu', 'Lokalna redukcja szumów pomaga przy dźwiękach tła. Nagrywanie i sterowanie rozmową są dostępne w razie potrzeby.'],
        ['Ochrona w ustawieniach', 'Dostępne są SIP przez TLS i SDES-SRTP. Ze zgodną centralą chronią sygnalizację i połączenie głosowe.']
      ],
      faqKicker: 'Przed rozpoczęciem', faqTitle: 'Częste pytania', faq: [
        ['Czy potrzebuję konta SIP?', 'Tak. AltSIP łączy się z kontem dostawcy SIP lub centrali. Nie zapewnia numeru ani abonamentu na rozmowy.'],
        ['Czy mogę użyć firmowej centrali?', 'Jeśli udostępnia dane konta SIP, możesz wpisać je w AltSIP. Potwierdź ustawienia i funkcje u administratora.'],
        ['Czy mogę dodać kilka kont?', 'Tak. Możesz przechowywać kilka kont SIP i wybierać konto do połączenia wychodzącego.'],
        ['Czy rozmowy są szyfrowane?', 'TLS może chronić sygnalizację SIP, a SDES-SRTP połączenie głosowe, jeśli dostawca lub centrala je obsługuje i włączy. To nie jest szyfrowanie end-to-end.'],
        ['Gdzie działa redukcja szumów?', 'Wersja Windows przetwarza dźwięk mikrofonu lokalnie przed wysłaniem go do rozmowy. Efekt zależy od hałasu i urządzenia.']
      ]
    },
    pt: {
      kicker: 'Um telefone para a sua conta SIP', title: 'O que é o AltSIP',
      lead: 'O AltSIP é um softphone para chamadas de voz. Adicione uma conta do seu fornecedor SIP ou da central da empresa para fazer e receber chamadas no computador.',
      story: [
        ['A sua conta SIP', 'O AltSIP não fornece um número. Inicia sessão com a conta SIP que já usa no trabalho ou que recebe de um fornecedor.'],
        ['Várias contas numa só janela', 'Gira chamadas, contactos e várias contas numa só janela. A sua central continua a definir o percurso das chamadas.']
      ],
      nextFeatures: 'Explorar funcionalidades', nextGuide: 'Ler o guia',
      useKicker: 'No dia a dia', useTitle: 'Para diferentes tarefas de trabalho', useLead: 'Chamadas de trabalho, várias linhas e comunicação com a equipa.',
      uses: [
        ['À secretária', 'Atenda e marque no computador enquanto trabalha. Os controlos da chamada ficam sempre por perto.'],
        ['Entre várias contas', 'Reúna diferentes contas SIP e escolha a certa antes de ligar.'],
        ['Com a equipa', 'Coloque uma chamada em espera, fale com um colega e transfira a chamada se a central o permitir.']
      ],
      routeKicker: 'Como se liga uma chamada', routeTitle: 'Da conta SIP à outra pessoa',
      routeLead: 'O AltSIP é a aplicação do seu lado da chamada SIP. Precisa da sua conta e de ligação à rede.',
      route: [
        ['A sua conta SIP', 'Introduza o servidor e os dados de acesso do fornecedor ou da central.'],
        ['Fornecedor ou central', 'O AltSIP regista-se nesse sistema e envia os pedidos de chamada através dele.'],
        ['A outra pessoa', 'A chamada segue o percurso definido pelo fornecedor ou pela central.']
      ],
      techKicker: 'A tecnologia', techTitle: 'Tecnologia e proteção das chamadas',
      tech: [
        ['SIP como base', 'A versão Windows usa baresip/libre para a sinalização SIP e o áudio. O codec é negociado com a outra parte.'],
        ['Voz tratada no dispositivo', 'A redução local de ruído ajuda com sons de fundo. A gravação e os controlos de chamada também estão disponíveis.'],
        ['Proteção configurável', 'SIP sobre TLS e SDES-SRTP estão disponíveis. Com uma central compatível, protegem a sinalização e a ligação de áudio.']
      ],
      faqKicker: 'Antes de começar', faqTitle: 'Perguntas frequentes', faq: [
        ['Preciso de uma conta SIP?', 'Sim. O AltSIP liga-se a uma conta de um fornecedor SIP ou central. Não inclui número nem plano de chamadas.'],
        ['Posso usar a minha central atual?', 'Se fornecer dados de uma conta SIP, pode introduzi-los no AltSIP. Confirme as definições e funções com o administrador.'],
        ['Posso adicionar várias contas?', 'Sim. Pode guardar várias contas SIP e escolher uma para chamadas efetuadas.'],
        ['As chamadas são cifradas?', 'TLS pode proteger a sinalização SIP e SDES-SRTP a ligação de áudio se o fornecedor ou a central os suportar e ativar. Não é cifra de ponta a ponta.'],
        ['Onde ocorre a redução de ruído?', 'A versão Windows processa o microfone localmente antes de enviar o áudio para a chamada. O resultado depende do ruído e do dispositivo.']
      ]
    }
  };

  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const card = ([title, body], className) => `<article class="${className}"><h3>${escape(title)}</h3><p>${escape(body)}</p></article>`;

  function mount(host, {lang = 'en'} = {}) {
    if (!host) throw new Error('AltSIPHome requires a host element');
    let locale = copy[lang] ? lang : 'en';
    let selected = 0;

    function render() {
      const c = copy[locale];
      host.innerHTML = `<div class="home-overview" lang="${locale}">
        <section class="home-intro" aria-labelledby="home-intro-title">
          <p class="home-kicker">${escape(c.kicker)}</p>
          <h2 id="home-intro-title" class="home-title">${escape(c.title)}</h2>
          <p class="home-lead">${escape(c.lead)}</p>
          <div class="home-story-grid">${c.story.map(item => card(item, 'home-story-card')).join('')}</div>
          <div class="home-next-links"><button type="button" data-route="showcase">${escape(c.nextFeatures)} <span aria-hidden="true">↗</span></button><button type="button" data-route="guide">${escape(c.nextGuide)} <span aria-hidden="true">↗</span></button></div>
        </section>
        <section class="home-usecases" aria-labelledby="home-use-title">
          <p class="home-kicker">${escape(c.useKicker)}</p>
          <h2 id="home-use-title">${escape(c.useTitle)}</h2>
          <p class="home-section-lead">${escape(c.useLead)}</p>
          <div class="home-use-tabs" role="tablist" aria-label="${escape(c.useTitle)}">${c.uses.map(([title], index) => `<button type="button" role="tab" id="home-use-tab-${index}" aria-controls="home-use-panel" aria-selected="${index === selected}" tabindex="${index === selected ? 0 : -1}" data-home-use="${index}">${escape(title)}</button>`).join('')}</div>
          <div class="home-use-panel" role="tabpanel" id="home-use-panel" aria-labelledby="home-use-tab-${selected}" tabindex="0">${card(c.uses[selected], 'home-use-card')}</div>
        </section>
        <section class="home-route" aria-labelledby="home-route-title">
          <p class="home-kicker">${escape(c.routeKicker)}</p>
          <h2 id="home-route-title">${escape(c.routeTitle)}</h2>
          <p class="home-section-lead">${escape(c.routeLead)}</p>
          <ol class="home-route-steps">${c.route.map(([title, body], index) => `<li><span class="home-route-num" aria-hidden="true">0${index + 1}</span><h3>${escape(title)}</h3><p>${escape(body)}</p></li>`).join('')}</ol>
        </section>
        <section class="home-technology" aria-labelledby="home-tech-title">
          <p class="home-kicker">${escape(c.techKicker)}</p>
          <h2 id="home-tech-title">${escape(c.techTitle)}</h2>
          <div class="home-tech-grid">${c.tech.map(item => card(item, 'home-tech-card')).join('')}</div>
        </section>
        <section class="home-faq" aria-labelledby="home-faq-title">
          <p class="home-kicker">${escape(c.faqKicker)}</p>
          <h2 id="home-faq-title">${escape(c.faqTitle)}</h2>
          <div class="home-faq-list">${c.faq.map(([question, answer]) => `<details><summary>${escape(question)}</summary><p>${escape(answer)}</p></details>`).join('')}</div>
        </section>
      </div>`;
    }

    function activate(index, focus) {
      if (index < 0 || index >= copy[locale].uses.length || index === selected) return;
      selected = index;
      const tabs = host.querySelectorAll('[data-home-use]');
      tabs.forEach((tab, i) => {
        tab.setAttribute('aria-selected', String(i === selected));
        tab.tabIndex = i === selected ? 0 : -1;
      });
      const panel = host.querySelector('#home-use-panel');
      panel.setAttribute('aria-labelledby', `home-use-tab-${selected}`);
      panel.innerHTML = card(copy[locale].uses[selected], 'home-use-card');
      if (focus) tabs[selected].focus();
    }

    host.addEventListener('click', event => {
      const tab = event.target.closest?.('[data-home-use]');
      if (tab && host.contains(tab)) activate(Number(tab.dataset.homeUse), false);
    });
    host.addEventListener('keydown', event => {
      const tab = event.target.closest?.('[data-home-use]');
      if (!tab || !host.contains(tab)) return;
      const keys = {ArrowRight: 1, ArrowLeft: -1, Home: 0, End: 2};
      if (!(event.key in keys)) return;
      event.preventDefault();
      activate(event.key === 'Home' ? 0 : event.key === 'End' ? 2 : (selected + keys[event.key] + 3) % 3, true);
    });

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
