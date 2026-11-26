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
  "В Pro доступны кодек, шифрование, RTP-пакеты и битрейт в обе стороны, потери, джиттер и RTT.",
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
  "Pro shows the codec, encryption, RTP packets and bitrate in both directions, loss, jitter and RTT.",
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
  "У Pro видно кодек, шифрування, RTP-пакети й бітрейт в обидва боки, втрати, джитер і RTT.",
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
  "Pro zeigt Codec, Verschlüsselung, RTP-Pakete und Bitrate in beide Richtungen sowie Verlust, Jitter und RTT.",
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
  "Pro muestra códec, cifrado, paquetes RTP y tasa de audio en ambos sentidos, pérdidas, fluctuación y RTT.",
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
  "Pro affiche le codec, le chiffrement, les paquets RTP et le débit dans les deux sens, les pertes, la gigue et le RTT.",
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
  "Pro mostra codec, cifratura, pacchetti RTP e bitrate nei due sensi, perdite, jitter e RTT.",
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
  "Pro pokazuje kodek, szyfrowanie, pakiety RTP i przepływność w obu kierunkach, straty, jitter i RTT.",
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
  "Pro mostra codec, cifragem, pacotes RTP e débito nos dois sentidos, perdas, jitter e RTT.",
  "Regras de marcação|Prefixo da linha|Indique um prefixo na conta SIP ou altere-o no marcador. O AltSIP adiciona-o antes de ligar.",
  "Reencaminhamento|Quando não atende|Escolha um destino e o tempo de espera. No exemplo, a chamada segue para um colega.",
  "Estado dos contactos|Quem está em linha|O ponto junto ao nome mostra o estado quando o servidor SIP o disponibiliza.",
  "Chamadas por ligação|Do navegador ao AltSIP|Abra uma ligação tel: ou sip: e confira o número antes de ligar.",
  "Atalhos de teclado|Atenda sem rato|Atribua teclas para atender, desligar ou gravar. F2 atende uma chamada.",
  "Captura de chamada|Atenda por um colega|Se a linha estiver livre e a central o permitir, atenda a chamada a partir dos contactos.",
  "Ligar|A receber|Reencaminhada|Disponível|Em chamada|Sem dados|Abrir no AltSIP|Atender|Capturar|Colega|Apoio|Guardar|Alterar prefixo"
 ]
};
 const phone = '<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-phone"/></svg>';
 const icon = name => '<svg aria-hidden="true"><use href="#i-'+name+'"/></svg>';
 const escape = text => String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function scenes(locale) {
  const words = translations[locale] || translations.en;
  const [call,incoming,forwarded,ready,busy,unknown,open,answer,pickup,colleague,support,save,edit] = words[14].split('|').map(escape);
  const card = (index, art) => ({ art, labels:words[index+8].split('|') });
  const action = (label,extra='') => '<span class="pd-mini-action '+extra+'">'+phone+label+'</span>';
  const contact = (name,number,state,kind) => '<div class="pd-mini-contact"><strong>'+name+' <i data-presence="'+kind+'"></i></strong><small>'+number+' · '+state+'</small></div>';
  return [
   card(0,`<div class="pd-fragment pd-prefix" data-pd-fragment><div class="pd-mini-field"><button type="button" class="pd-prefix-trigger" aria-label="${edit}" aria-expanded="false">9</button><span>202 555 0142</span></div><form class="pd-prefix-form" hidden><input inputmode="numeric" maxlength="5" pattern="[0-9]{1,5}" aria-label="${edit}" value="90" required><button type="submit">${save}</button></form><div class="pd-mini-result"><small>${call}</small><b class="pd-prefix-result">92025550142</b></div>${action(call)}</div>`),
   card(1,`<div class="pd-fragment pd-forward" data-pd-fragment><div class="pd-mini-call"><small>${incoming}</small><strong>202 555 0142</strong><div class="pd-countdown" aria-hidden="true"><span>00:03</span><span>00:02</span><span>00:01</span></div></div><span class="pd-forward-arrow" aria-hidden="true">↓</span><div class="pd-mini-call pd-mini-dark"><small>${forwarded}</small><strong>204</strong>${action(answer)}</div></div>`),
   card(2,`<div class="pd-fragment pd-presence" data-pd-fragment>${contact(colleague,'204',ready,'ready')}${contact(support,'205',busy,'busy')}${contact('206','206',unknown,'unknown')}</div>`),
   card(3,`<div class="pd-fragment pd-link" data-pd-fragment><div class="pd-mini-browser"><code>tel:2025550142</code><small>${open} ↗</small></div><span class="pd-forward-arrow" aria-hidden="true">↓</span><div class="pd-mini-field"><span>202 555 0142</span></div>${action(call)}</div>`),
   card(4,`<div class="pd-fragment pd-hotkey" data-pd-fragment><div class="pd-mini-call"><small>${incoming}</small><strong>202 555 0142</strong></div><kbd>F2</kbd>${action(answer)}</div>`),
   card(5,`<div class="pd-fragment pd-pickup" data-pd-fragment>${contact(colleague,'204',incoming,'ringing')}<div class="pd-mini-pickup">${action(pickup)}</div><div class="pd-mini-result"><small>${call}</small><b>202 555 0142</b></div></div>`)
  ];
 }
 window.AltSIPFeatureGallery={words: locale=>translations[locale]||translations.en,scenes};
})();
