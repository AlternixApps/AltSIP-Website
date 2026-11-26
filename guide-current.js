/* Additional guide topics for current Windows AltSIP. */
(() => {
 const copy={
  "ru": [
    "Установка и первый звонок|Скачайте установщик для своей системы. На Mac выберите Apple Silicon или Intel. На Windows запустите установщик, выберите папку и откройте AltSIP.|Добавьте SIP-аккаунт, полученный от оператора или администратора АТС. Дождитесь подключения, введите номер и нажмите «Вызов».",
    "Аккаунт AltSIP|Откройте список аккаунтов и выберите «Аккаунт AltSIP». Войдите по почте и паролю. Для регистрации или сброса пароля подтвердите код из письма.|SIP-аккаунт подключает телефонную линию. Аккаунт AltSIP нужен для подписки, устройств, статистики и переноса данных.",
    "Перенос данных|На прежнем устройстве войдите в аккаунт AltSIP с Pro и нажмите «Сохранить данные». При сохранении можно включить историю звонков.|На новом устройстве войдите в тот же аккаунт AltSIP и выберите «Синхронизировать аккаунты». Переносятся SIP-аккаунты и настройки, а история входит в копию по выбору. Копия хранится 7 дней. Аудиофайлы записей остаются в выбранной локальной папке.",
    "Pro и устройства|В аккаунте AltSIP нажмите «Купить подписку», выберите срок и следуйте инструкции в счёте. Статус оплаты и срок подписки видны в приложении.|В списке устройств можно освободить место, отключив старое устройство. Для подтверждения понадобится пароль аккаунта AltSIP. Без Pro доступны первые три SIP-аккаунта.",
    "Статистика|В аккаунте AltSIP откройте «Статистика». Переключайте день, неделю и месяц, чтобы посмотреть сводку звонков за нужный период.",
    "Переадресация|Откройте «Настройки → Звонки → Автоматическая переадресация». Укажите номер или SIP-адрес назначения, условие и нажмите «Применить».|Выберите «Все входящие», «Если занят» или «Если не ответил». Для последнего условия задайте ожидание от 5 до 120 секунд. Нужны Pro и поддержка со стороны АТС.",
    "Статусы и перехват|Привяжите контакт к SIP-аккаунту, через который АТС сообщает его статус. Точка у имени показывает, находится ли коллега в сети, звонит или говорит, если сервер передаёт эти сведения.|Включите «Перехват звонков» в дополнительных настройках этого SIP-аккаунта. Когда коллега получает звонок, воспользуйтесь кнопкой перехвата в контактах. Ваша линия должна быть свободна, а АТС должна поддерживать перехват.",
    "Горячие клавиши|Откройте «Настройки → Горячие клавиши». Включите сочетания и нажмите на нужное действие, чтобы назначить свои клавиши.|По умолчанию F2 отвечает, F4 завершает разговор, Ctrl+Shift+M выключает или включает микрофон, Ctrl+L переводит фокус к набору. «Сочетания во всей Windows» разрешают использовать их из других окон.",
    "Обновления|Откройте «Настройки → Обновление». Запустите проверку вручную или выберите ежедневный, недельный либо месячный интервал. Автопроверка выполняется при запуске AltSIP, если подошёл срок.|Скачивание видно в программе. Когда оно завершится, нажмите «Установить». Windows может запросить подтверждение для установки в Program Files.",
    "Журнал событий|После сбоя откройте «Настройки → Бета-тестирование → Журнал событий». Сохраните диагностику и приложите её к сообщению об ошибке.|Укажите версию AltSIP, примерное время сбоя и действия перед ним. Журналы отправляются только по вашему решению."
  ],
  "en": [
    "Install and make a call|Download the installer for your platform. On Mac, choose Apple Silicon or Intel. On Windows, run Setup, choose a folder and open AltSIP.|Add the SIP profile from your provider or PBX administrator, wait for it to connect, then dial and select Call.",
    "AltSIP account|Open the accounts list and choose AltSIP account. Sign in with email and password. Use the email code to confirm registration or a password reset.|A SIP account connects your phone line. The AltSIP account manages Pro, devices, statistics and data transfer.",
    "Transfer data|On the old device, sign in with Pro and select Save data. You can include call history in the copy.|On the new device, sign in to the same AltSIP account and select Sync accounts. The copy holds SIP profiles, settings and any history you included for 7 days. Audio recordings stay in their local folder.",
    "Pro and devices|Choose Buy subscription in your AltSIP account, pick a term and follow the invoice instructions.|Disconnect an old device to free a slot. Confirm with your AltSIP password. Free access covers the first three SIP profiles.",
    "Statistics|Open Statistics in your AltSIP account. Select a day, week or month to see the call summary for that period.",
    "Call forwarding|Go to Settings → Calls → Automatic forwarding. Enter the destination number or SIP address, choose a condition and apply.|Forward all incoming calls, when busy, or on no answer. Set 5–120 seconds for no answer. Pro and PBX support are required.",
    "Contact status and pickup|Assign the SIP profile that provides presence for the contact. The dot by the name reflects status reported by the server.|Enable call pickup in that profile’s advanced settings. When a colleague’s phone rings, use the pickup button in Contacts. Your line must be free and your PBX must support pickup.",
    "Keyboard shortcuts|Open Settings → Keyboard shortcuts and enable shortcuts. Select an action to record your own keys.|By default, F2 answers, F4 hangs up, Ctrl+Shift+M toggles the microphone and Ctrl+L focuses dialling. Enable Windows-wide shortcuts to use them from other apps.",
    "Updates|Open Settings → Updates for a manual check or set a daily, weekly or monthly interval. Automatic checks run at startup when due.|Wait for the download and select Install. Windows may request confirmation for a Program Files installation.",
    "Event log|After an issue, open Settings → Beta testing → Event log. Save the diagnostics and attach them to your report.|Include the AltSIP version, approximate time and the steps that led to the issue. You decide when to share the log."
  ],
  "uk": [
    "Встановлення й перший дзвінок|Завантажте інсталятор для своєї системи. На Mac виберіть Apple Silicon або Intel. На Windows запустіть інсталятор, виберіть папку та відкрийте AltSIP.|Додайте SIP-акаунт від оператора чи адміністратора АТС. Дочекайтеся підключення, наберіть номер і натисніть «Виклик».",
    "Акаунт AltSIP|У списку акаунтів виберіть «Акаунт AltSIP». Увійдіть за поштою й паролем. Для реєстрації та відновлення пароля введіть код із листа.|SIP-акаунт підключає телефонну лінію. Акаунт AltSIP потрібен для Pro, пристроїв, статистики й перенесення даних.",
    "Перенесення даних|На попередньому пристрої увійдіть з Pro та виберіть «Зберегти дані». За бажанням включіть історію дзвінків.|На новому пристрої увійдіть у той самий акаунт і синхронізуйте SIP-акаунти та налаштування. Копія зберігається 7 днів. Аудіозаписи залишаються в локальній папці.",
    "Pro і пристрої|Виберіть придбання підписки в акаунті AltSIP, вкажіть строк і дотримуйтесь інструкції в рахунку.|Щоб звільнити місце, від’єднайте старий пристрій і підтвердьте дію паролем. Без Pro доступні перші три SIP-акаунти.",
    "Статистика|Відкрийте «Статистика» в акаунті AltSIP. Виберіть день, тиждень або місяць.",
    "Переадресація|У налаштуваннях дзвінків увімкніть автоматичну переадресацію. Вкажіть номер або SIP-адресу, умову та застосуйте її.|Можна переадресовувати всі виклики, коли зайнято або коли не відповіли. Для останньої умови встановіть 5–120 секунд. Потрібні Pro та підтримка АТС.",
    "Стани й перехоплення|Прив’яжіть контакт до SIP-акаунта, через який АТС передає його стан. Стан видно за крапкою біля імені.|Увімкніть перехоплення в додаткових налаштуваннях SIP-акаунта. Коли колезі телефонує абонент, натисніть кнопку в контактах. Потрібна вільна лінія й підтримка АТС.",
    "Гарячі клавіші|Увімкніть клавіші в налаштуваннях і виберіть дію, щоб записати своє сполучення.|За замовчуванням F2 відповідає, F4 завершує, Ctrl+Shift+M керує мікрофоном, Ctrl+L відкриває поле набору. Сполучення можна ввімкнути для всієї Windows.",
    "Оновлення|Перевіряйте оновлення вручну або задайте інтервал: день, тиждень чи місяць. Автоперевірка відбувається під час запуску AltSIP, коли настав строк.|Дочекайтеся завантаження й натисніть «Встановити». Для Program Files Windows може запросити підтвердження.",
    "Журнал подій|Після збою відкрийте «Налаштування → Бета-тестування → Журнал подій», збережіть діагностику й додайте її до опису проблеми.|Вкажіть версію, приблизний час і послідовність дій. Ви самі вирішуєте, коли надсилати журнал."
  ],
  "de": [
    "Installation und erster Anruf|Laden Sie das Paket für Ihr System. Legen Sie Ihr SIP-Konto an und wählen Sie nach erfolgreicher Verbindung eine Nummer.",
    "AltSIP-Konto|Öffnen Sie die Kontenliste. Melden Sie sich mit E-Mail und Passwort an. Bestätigen Sie Registrierung oder Passwortwechsel per E-Mail-Code.",
    "Daten übertragen|Speichern Sie Ihre Daten auf dem alten Gerät mit Pro und synchronisieren Sie auf dem neuen Gerät im selben Konto. Die Kopie bleibt 7 Tage verfügbar. Aufnahmen bleiben lokal.",
    "Pro und Geräte|Wählen Sie im Konto eine Laufzeit und folgen Sie der Rechnung. Trennen Sie bei Bedarf ein altes Gerät mit Ihrem Passwort.",
    "Statistik|Wählen Sie im AltSIP-Konto Tag, Woche oder Monat.",
    "Rufumleitung|Öffnen Sie Einstellungen → Anrufe. Wählen Sie Ziel und Bedingung. Bei Nichtannahme sind 5–120 Sekunden möglich. Pro und Anlagenunterstützung sind erforderlich.",
    "Status und Rufübernahme|Ordnen Sie den Kontakt dem passenden SIP-Konto zu. Aktivieren Sie Pickup im Kontoprofil und übernehmen Sie den Anruf bei freier Leitung.",
    "Tastenkürzel|Öffnen Sie die Tastenkürzel in den Einstellungen. F2 nimmt an, F4 legt auf und Strg+Umschalt+M schaltet das Mikrofon.",
    "Updates|Prüfen Sie manuell oder wählen Sie einen täglichen, wöchentlichen oder monatlichen Start-Check.",
    "Ereignisprotokoll|Exportieren Sie bei einem Fehler das Ereignisprotokoll unter Beta-Tests und nennen Sie Version, Uhrzeit und Schritte."
  ],
  "es": [
    "Instalación y primera llamada|Descarga el paquete de tu sistema. Añade tu cuenta SIP y marca un número cuando se conecte.",
    "Cuenta AltSIP|Abre la lista de cuentas e inicia sesión con correo y contraseña. Confirma el registro o el cambio de contraseña con el código del correo.",
    "Transferir datos|Guarda los datos con Pro en el equipo anterior y sincroniza en el nuevo con la misma cuenta. La copia dura 7 días. Las grabaciones siguen en su carpeta local.",
    "Pro y dispositivos|Elige un plazo y sigue la factura. Puedes liberar una plaza desconectando un dispositivo con tu contraseña.",
    "Estadísticas|Abre Estadísticas en tu cuenta AltSIP y elige día, semana o mes.",
    "Desvío de llamadas|En Ajustes → Llamadas, indica el destino y la condición. Si no contestas, la espera admite 5–120 segundos. Requiere Pro y compatibilidad de la centralita.",
    "Estado y captura|Asigna al contacto la cuenta SIP que informa de su estado. Activa la captura y contesta desde Contactos cuando tu línea esté libre.",
    "Atajos de teclado|Abre los atajos en Ajustes. F2 contesta, F4 cuelga y Ctrl+Mayús+M activa o silencia el micrófono.",
    "Actualizaciones|Comprueba manualmente o programa la comprobación al iniciar cada día, semana o mes.",
    "Registro de eventos|Tras un fallo, guarda el registro en Pruebas beta y describe la versión, la hora y los pasos."
  ],
  "fr": [
    "Installation et premier appel|Téléchargez le paquet de votre système. Ajoutez le compte SIP, attendez la connexion puis composez le numéro.",
    "Compte AltSIP|Ouvrez la liste des comptes. Connectez-vous avec votre adresse et votre mot de passe. Validez l’inscription ou la réinitialisation avec le code reçu par e-mail.",
    "Transfert de données|Enregistrez vos données avec Pro sur l’ancien appareil. Synchronisez sur le nouveau avec le même compte. La copie reste 7 jours. Les enregistrements audio restent dans leur dossier local.",
    "Pro et appareils|Choisissez une durée et suivez la facture. Déconnectez un ancien appareil avec votre mot de passe pour libérer une place.",
    "Statistiques|Dans le compte AltSIP, choisissez le jour, la semaine ou le mois.",
    "Renvoi d’appel|Dans Réglages → Appels, choisissez la destination et la condition. En cas de non-réponse, réglez 5 à 120 secondes. Pro et un standard compatible sont requis.",
    "Statuts et interception|Associez le contact au compte SIP qui fournit son statut. Activez l’interception pour répondre depuis Contacts si votre ligne est libre.",
    "Raccourcis clavier|Ouvrez les raccourcis dans les réglages. F2 répond, F4 raccroche et Ctrl+Maj+M coupe ou réactive le micro.",
    "Mises à jour|Vérifiez manuellement ou choisissez une vérification au démarrage, quotidienne, hebdomadaire ou mensuelle.",
    "Journal d’événements|Après un problème, exportez le journal depuis Tests bêta et indiquez la version, l’heure et les étapes."
  ],
  "it": [
    "Installazione e prima chiamata|Scarica il pacchetto per il tuo sistema. Aggiungi il profilo SIP e componi un numero dopo la connessione.",
    "Account AltSIP|Apri l’elenco degli account. Accedi con e-mail e password. Conferma registrazione o recupero con il codice ricevuto via e-mail.",
    "Trasferimento dati|Salva con Pro sul vecchio dispositivo e sincronizza sul nuovo con lo stesso account. La copia dura 7 giorni. Le registrazioni rimangono nella cartella locale.",
    "Pro e dispositivi|Scegli una durata e segui la fattura. Per liberare un posto scollega un vecchio dispositivo con la password.",
    "Statistiche|Apri Statistiche nell’account AltSIP e scegli giorno, settimana o mese.",
    "Deviazione chiamate|In Impostazioni → Chiamate indica destinazione e condizione. Per mancata risposta scegli 5–120 secondi. Servono Pro e un centralino compatibile.",
    "Stato e intercettazione|Associa il contatto al profilo SIP che segnala lo stato. Abilita l’intercettazione e rispondi da Contatti con la linea libera.",
    "Scorciatoie da tastiera|Apri le scorciatoie nelle impostazioni. F2 risponde, F4 riaggancia e Ctrl+Maiusc+M controlla il microfono.",
    "Aggiornamenti|Verifica manualmente o al riavvio con frequenza giornaliera, settimanale o mensile.",
    "Registro eventi|Dopo un problema, salva il registro in Test beta e indica versione, orario e passaggi."
  ],
  "pl": [
    "Instalacja i pierwsze połączenie|Pobierz pakiet dla systemu, dodaj konto SIP i wybierz numer po nawiązaniu połączenia z serwerem.",
    "Konto AltSIP|Otwórz listę kont. Zaloguj się e-mailem i hasłem. Rejestrację lub reset hasła potwierdź kodem z poczty.",
    "Przenoszenie danych|Zapisz dane z Pro na starym urządzeniu i zsynchronizuj je na nowym na tym samym koncie. Kopia pozostaje 7 dni. Nagrania są lokalne.",
    "Pro i urządzenia|Wybierz okres i postępuj według rachunku. Zwolnij miejsce, odłączając stare urządzenie z potwierdzeniem hasłem.",
    "Statystyki|Otwórz statystyki konta i wybierz dzień, tydzień lub miesiąc.",
    "Przekierowanie połączeń|W ustawieniach połączeń podaj cel i warunek. Brak odpowiedzi można ustawić na 5–120 sekund. Potrzebne są Pro i obsługa centrali.",
    "Status i przejęcie|Przypisz kontaktowi właściwe konto SIP. Włącz przejęcie i odbierz z Kontaktów, jeśli Twoja linia jest wolna.",
    "Skróty klawiszowe|Otwórz skróty w ustawieniach. F2 odbiera, F4 kończy, a Ctrl+Shift+M przełącza mikrofon.",
    "Aktualizacje|Sprawdzaj ręcznie lub ustal sprawdzanie przy starcie co dzień, tydzień lub miesiąc.",
    "Dziennik zdarzeń|Po błędzie zapisz dziennik z sekcji Testy beta i podaj wersję, godzinę i wykonane kroki."
  ],
  "pt": [
    "Instalação e primeira chamada|Descarregue o pacote do seu sistema. Adicione a conta SIP e marque o número depois de ligar ao servidor.",
    "Conta AltSIP|Abra a lista de contas. Inicie sessão por e-mail e palavra-passe. Confirme o registo ou a recuperação pelo código do e-mail.",
    "Transferir dados|Guarde os dados com Pro no aparelho antigo e sincronize no novo pela mesma conta. A cópia fica disponível por 7 dias. As gravações ficam na pasta local.",
    "Pro e dispositivos|Escolha um prazo e siga a fatura. Desligue um dispositivo antigo com confirmação por palavra-passe para libertar um lugar.",
    "Estatísticas|Abra Estatísticas na conta AltSIP e escolha dia, semana ou mês.",
    "Reencaminhamento|Nas definições de chamadas, escolha o destino e a condição. Para chamadas não atendidas, selecione 5–120 segundos. Requer Pro e uma central compatível.",
    "Estado e captura|Associe o contacto à conta SIP que fornece o estado. Ative a captura e atenda em Contactos se a sua linha estiver livre.",
    "Atalhos de teclado|Abra os atalhos nas definições. F2 atende, F4 desliga e Ctrl+Shift+M alterna o microfone.",
    "Atualizações|Verifique manualmente ou ao arrancar com frequência diária, semanal ou mensal.",
    "Registo de eventos|Depois de uma falha, guarde o registo em Testes beta e indique versão, hora e passos."
  ]
};
 const topics=[
  ['install','start','dial','tour-dialer'],
  ['product-account','start','accounts','guide-login'],
  ['cloud-sync','start','accounts','guide-account'],
  ['pro-devices','start','accounts','guide-plans'],
  ['statistics','start','accounts','guide-statistics'],
  ['auto-forward','daily','calls','tour-setting-0'],
  ['presence-pickup','daily','contacts','current-contacts'],
  ['shortcuts','settings','calls','tour-setting-2'],
  ['updates','settings','appearance','guide-update'],
  ['diagnostics','settings','appearance','guide-diagnostics']
 ];
 window.AltSIPGuideCurrent={
  topics:topics.map(([id,group,view,frame],index)=>({id,group,view,frame,frames:id==='product-account'?['guide-login','guide-signup']:undefined,current:index,steps:[]})),
  text:(locale,index)=>(copy[locale]||copy.en)[index].split('|')
 };
})();
