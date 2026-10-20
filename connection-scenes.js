/* Call and security scenes. Synthetic visuals only, with no audio playback. */
(() => {
  'use strict';
  const copy = {
  "ru": {
    "calls": "Перевод вызова и конференция",
    "parties": [
      "Клиент",
      "Вы",
      "Коллега"
    ],
    "tech": [
      "Подключение и безопасность",
      "Рабочая связь с защитой разговора. Подключите свою АТС и используйте шифрование, которое поддерживает ваш сервер."
    ],
    "connect": "Подключение",
    "connectBody": "Для SIP-провайдера и рабочей АТС.",
    "server": "SIP-сервер",
    "mediaPeer": "Медиаузел",
    "modes": [
      "Разговор",
      "Консультация",
      "Перевод",
      "Конференция"
    ],
    "badges": [
      "Активный вызов",
      "Клиент ожидает",
      "Вызов передан",
      "Общая конференция"
    ],
    "notes": [
      "Вы говорите с клиентом.",
      "Вы консультируетесь с коллегой, пока клиент ждёт.",
      "Клиент продолжает разговор с коллегой.",
      "Все участники слышат друг друга одновременно."
    ],
    "hold": "На удержании",
    "signal": "СИГНАЛИЗАЦИЯ",
    "audio": "АУДИО",
    "signalDetail": "Регистрация и управление вызовом",
    "audioDetail": "Передача голоса по RTP",
    "sipTarget": "Провайдер или АТС",
    "mediaTarget": "АТС или собеседник",
    "securityMain": "TLS защищает SIP-соединение с сервером. SRTP шифрует медиапоток, если режим согласован.",
    "securityFine": "При SDES ключи находятся в SDP внутри защищённой SIP-сигнализации. Нужны поддержка и настройка АТС.",
    "transport": "UDP + TCP"
  },
  "en": {
    "calls": "Call transfer and conference",
    "parties": [
      "Client",
      "You",
      "Colleague"
    ],
    "tech": [
      "Connection and security",
      "Work calls with protection built in. Connect your PBX and use the encryption your server supports."
    ],
    "connect": "Connection",
    "connectBody": "For your SIP provider or business PBX.",
    "server": "SIP server",
    "mediaPeer": "Media endpoint",
    "modes": [
      "Conversation",
      "Consultation",
      "Transfer",
      "Conference"
    ],
    "badges": [
      "Active call",
      "Client on hold",
      "Call transferred",
      "Shared conference"
    ],
    "notes": [
      "You are speaking with the client.",
      "You consult your colleague while the client waits.",
      "The client continues speaking with your colleague.",
      "Everyone can hear one another at the same time."
    ],
    "hold": "On hold",
    "signal": "SIGNALLING",
    "audio": "AUDIO",
    "signalDetail": "Registration and call control",
    "audioDetail": "Voice over RTP",
    "sipTarget": "Provider or PBX",
    "mediaTarget": "PBX or peer",
    "securityMain": "TLS protects the SIP connection to the server. SRTP encrypts the media stream when negotiated.",
    "securityFine": "With SDES, keys are in SDP carried by protected SIP signalling. Encryption requires PBX support and configuration.",
    "transport": "UDP + TCP"
  },
  "uk": {
    "calls": "Переведення виклику та конференція",
    "parties": [
      "Клієнт",
      "Ви",
      "Колега"
    ],
    "tech": [
      "Підключення та безпека",
      "Робочий зв’язок із захистом розмови. Підключіть свою АТС і використовуйте шифрування, яке підтримує сервер."
    ],
    "connect": "Підключення",
    "connectBody": "Для SIP-провайдера та робочої АТС.",
    "server": "SIP-сервер",
    "mediaPeer": "Медіавузол",
    "modes": [
      "Розмова",
      "Консультація",
      "Переведення",
      "Конференція"
    ],
    "badges": [
      "Активний виклик",
      "Клієнт очікує",
      "Виклик переведено",
      "Спільна конференція"
    ],
    "notes": [
      "Ви розмовляєте з клієнтом.",
      "Ви радитеся з колегою, поки клієнт очікує.",
      "Клієнт продовжує розмову з колегою.",
      "Усі учасники чують одне одного одночасно."
    ],
    "hold": "На утриманні",
    "signal": "СИГНАЛІЗАЦІЯ",
    "audio": "АУДІО",
    "signalDetail": "Реєстрація й керування викликом",
    "audioDetail": "Передавання голосу через RTP",
    "sipTarget": "Провайдер або АТС",
    "mediaTarget": "АТС або співрозмовник",
    "securityMain": "TLS захищає SIP-з’єднання із сервером. SRTP шифрує медіапотік, якщо режим узгоджено.",
    "securityFine": "За SDES ключі містяться в SDP у захищеній SIP-сигналізації. Потрібні підтримка й налаштування АТС.",
    "transport": "UDP + TCP"
  },
  "de": {
    "calls": "Weiterleitung und Konferenz",
    "parties": [
      "Kunde",
      "Sie",
      "Kollege"
    ],
    "tech": [
      "Verbindung und Sicherheit",
      "Geschäftlich telefonieren und Gespräche schützen. Verbinden Sie Ihre Telefonanlage und nutzen Sie die vom Server unterstützte Verschlüsselung."
    ],
    "connect": "Verbindung",
    "connectBody": "Für Ihren SIP-Anbieter oder Ihre Telefonanlage.",
    "server": "SIP-Server",
    "mediaPeer": "Medienendpunkt",
    "modes": [
      "Gespräch",
      "Rücksprache",
      "Weiterleitung",
      "Konferenz"
    ],
    "badges": [
      "Aktiver Anruf",
      "Kunde wartet",
      "Anruf übergeben",
      "Gemeinsame Konferenz"
    ],
    "notes": [
      "Sie sprechen mit dem Kunden.",
      "Sie beraten sich mit dem Kollegen, während der Kunde wartet.",
      "Der Kunde spricht mit dem Kollegen weiter.",
      "Alle Teilnehmer hören einander gleichzeitig."
    ],
    "hold": "Wartet",
    "signal": "SIGNALISIERUNG",
    "audio": "AUDIO",
    "signalDetail": "Registrierung und Anrufsteuerung",
    "audioDetail": "Sprachübertragung per RTP",
    "sipTarget": "Anbieter oder Anlage",
    "mediaTarget": "Anlage oder Gegenstelle",
    "securityMain": "TLS schützt die SIP-Verbindung zum Server. SRTP verschlüsselt den Medienstrom, wenn es ausgehandelt wurde.",
    "securityFine": "Bei SDES liegen die Schlüssel im SDP innerhalb geschützter SIP-Signalisierung. Die Anlage muss Verschlüsselung unterstützen und konfigurieren.",
    "transport": "UDP + TCP"
  },
  "fr": {
    "calls": "Transfert et conférence",
    "parties": [
      "Client",
      "Vous",
      "Collègue"
    ],
    "tech": [
      "Connexion et sécurité",
      "Des appels professionnels protégés. Connectez votre standard et utilisez le chiffrement pris en charge par votre serveur."
    ],
    "connect": "Connexion",
    "connectBody": "Pour votre fournisseur SIP ou votre standard.",
    "server": "Serveur SIP",
    "mediaPeer": "Point média",
    "modes": [
      "Conversation",
      "Consultation",
      "Transfert",
      "Conférence"
    ],
    "badges": [
      "Appel actif",
      "Client en attente",
      "Appel transféré",
      "Conférence commune"
    ],
    "notes": [
      "Vous parlez avec le client.",
      "Vous consultez un collègue pendant que le client attend.",
      "Le client poursuit sa conversation avec votre collègue.",
      "Tous les participants s’entendent simultanément."
    ],
    "hold": "En attente",
    "signal": "SIGNALISATION",
    "audio": "AUDIO",
    "signalDetail": "Inscription et contrôle des appels",
    "audioDetail": "Voix transmise par RTP",
    "sipTarget": "Fournisseur ou standard",
    "mediaTarget": "Standard ou correspondant",
    "securityMain": "TLS protège la connexion SIP au serveur. SRTP chiffre le flux média lorsque ce mode est négocié.",
    "securityFine": "Avec SDES, les clés figurent dans le SDP transmis par une signalisation SIP protégée. Le standard doit prendre en charge et configurer le chiffrement.",
    "transport": "UDP + TCP"
  },
  "es": {
    "calls": "Transferencia y conferencia",
    "parties": [
      "Cliente",
      "Tú",
      "Compañero"
    ],
    "tech": [
      "Conexión y seguridad",
      "Llamadas de trabajo con protección. Conecta tu centralita y utiliza el cifrado que admite tu servidor."
    ],
    "connect": "Conexión",
    "connectBody": "Para tu proveedor SIP o centralita de empresa.",
    "server": "Servidor SIP",
    "mediaPeer": "Extremo multimedia",
    "modes": [
      "Conversación",
      "Consulta",
      "Transferencia",
      "Conferencia"
    ],
    "badges": [
      "Llamada activa",
      "Cliente en espera",
      "Llamada transferida",
      "Conferencia conjunta"
    ],
    "notes": [
      "Hablas con el cliente.",
      "Consultas con un compañero mientras el cliente espera.",
      "El cliente sigue hablando con tu compañero.",
      "Todos los participantes se escuchan a la vez."
    ],
    "hold": "En espera",
    "signal": "SEÑALIZACIÓN",
    "audio": "AUDIO",
    "signalDetail": "Registro y control de llamadas",
    "audioDetail": "Voz transmitida por RTP",
    "sipTarget": "Proveedor o central",
    "mediaTarget": "Central o interlocutor",
    "securityMain": "TLS protege la conexión SIP con el servidor. SRTP cifra el flujo multimedia cuando se negocia.",
    "securityFine": "Con SDES, las claves van en SDP dentro de la señalización SIP protegida. La central debe admitir y configurar el cifrado.",
    "transport": "UDP + TCP"
  },
  "it": {
    "calls": "Trasferimento e conferenza",
    "parties": [
      "Cliente",
      "Tu",
      "Collega"
    ],
    "tech": [
      "Connessione e sicurezza",
      "Chiamate di lavoro protette. Collega il tuo centralino e usa la cifratura supportata dal server."
    ],
    "connect": "Connessione",
    "connectBody": "Per il tuo operatore SIP o centralino aziendale.",
    "server": "Server SIP",
    "mediaPeer": "Endpoint media",
    "modes": [
      "Conversazione",
      "Consultazione",
      "Trasferimento",
      "Conferenza"
    ],
    "badges": [
      "Chiamata attiva",
      "Cliente in attesa",
      "Chiamata trasferita",
      "Conferenza comune"
    ],
    "notes": [
      "Parli con il cliente.",
      "Consulti un collega mentre il cliente attende.",
      "Il cliente continua a parlare con il collega.",
      "Tutti i partecipanti si sentono contemporaneamente."
    ],
    "hold": "In attesa",
    "signal": "SEGNALAZIONE",
    "audio": "AUDIO",
    "signalDetail": "Registrazione e controllo chiamate",
    "audioDetail": "Voce trasmessa via RTP",
    "sipTarget": "Provider o centralino",
    "mediaTarget": "Centralino o interlocutore",
    "securityMain": "TLS protegge la connessione SIP al server. SRTP cifra il flusso multimediale se negoziato.",
    "securityFine": "Con SDES, le chiavi si trovano nel SDP della segnalazione SIP protetta. Servono supporto e configurazione del centralino.",
    "transport": "UDP + TCP"
  },
  "pl": {
    "calls": "Przekazywanie i konferencja",
    "parties": [
      "Klient",
      "Ty",
      "Kolega"
    ],
    "tech": [
      "Połączenie i bezpieczeństwo",
      "Rozmowy służbowe z ochroną połączenia. Podłącz centralę i korzystaj z szyfrowania obsługiwanego przez serwer."
    ],
    "connect": "Połączenie",
    "connectBody": "Dla dostawcy SIP lub centrali firmowej.",
    "server": "Serwer SIP",
    "mediaPeer": "Punkt mediów",
    "modes": [
      "Rozmowa",
      "Konsultacja",
      "Przekazanie",
      "Konferencja"
    ],
    "badges": [
      "Aktywne połączenie",
      "Klient oczekuje",
      "Połączenie przekazane",
      "Wspólna konferencja"
    ],
    "notes": [
      "Rozmawiasz z klientem.",
      "Konsultujesz się ze współpracownikiem, a klient czeka.",
      "Klient kontynuuje rozmowę ze współpracownikiem.",
      "Wszyscy uczestnicy słyszą się jednocześnie."
    ],
    "hold": "Oczekuje",
    "signal": "SYGNALIZACJA",
    "audio": "AUDIO",
    "signalDetail": "Rejestracja i sterowanie połączeniem",
    "audioDetail": "Głos przez RTP",
    "sipTarget": "Dostawca lub centrala",
    "mediaTarget": "Centrala lub rozmówca",
    "securityMain": "TLS chroni połączenie SIP z serwerem. SRTP szyfruje strumień mediów po uzgodnieniu.",
    "securityFine": "Przy SDES klucze są w SDP przesyłanym chronioną sygnalizacją SIP. Centrala musi obsługiwać i konfigurować szyfrowanie.",
    "transport": "UDP + TCP"
  },
  "pt": {
    "calls": "Transferência e conferência",
    "parties": [
      "Cliente",
      "Você",
      "Colega"
    ],
    "tech": [
      "Ligação e segurança",
      "Chamadas de trabalho protegidas. Ligue a sua central e utilize a cifragem suportada pelo servidor."
    ],
    "connect": "Ligação",
    "connectBody": "Para o seu fornecedor SIP ou central empresarial.",
    "server": "Servidor SIP",
    "mediaPeer": "Ponto multimédia",
    "modes": [
      "Conversa",
      "Consulta",
      "Transferência",
      "Conferência"
    ],
    "badges": [
      "Chamada ativa",
      "Cliente em espera",
      "Chamada transferida",
      "Conferência conjunta"
    ],
    "notes": [
      "Está a falar com o cliente.",
      "Consulta um colega enquanto o cliente aguarda.",
      "O cliente continua a falar com o colega.",
      "Todos os participantes se ouvem ao mesmo tempo."
    ],
    "hold": "Em espera",
    "signal": "SINALIZAÇÃO",
    "audio": "ÁUDIO",
    "signalDetail": "Registo e controlo da chamada",
    "audioDetail": "Voz transmitida por RTP",
    "sipTarget": "Fornecedor ou central",
    "mediaTarget": "Central ou interlocutor",
    "securityMain": "TLS protege a ligação SIP ao servidor. SRTP cifra o fluxo multimédia quando negociado.",
    "securityFine": "Com SDES, as chaves seguem em SDP na sinalização SIP protegida. A central tem de suportar e configurar a cifragem.",
    "transport": "UDP + TCP"
  }
};

  const routeHelp = {
    ru: {signal:'По этому каналу AltSIP сообщает SIP-серверу, кому вы звоните, и управляет началом и завершением вызова. TLS шифрует эти сообщения на пути к серверу.',media:'По этому каналу передаётся сам разговор. SRTP шифрует голос между AltSIP и медиаузлом, если этот режим согласован с сервером.'},
    en: {signal:'This path tells the SIP server whom you are calling and when to start or end the call. TLS encrypts those messages between AltSIP and the server.',media:'This path carries the conversation itself. SRTP encrypts voice between AltSIP and the media endpoint if this mode is negotiated with the server.'},
    uk: {signal:'Цим каналом AltSIP повідомляє SIP-серверу, кому ви телефонуєте, і керує початком та завершенням виклику. TLS шифрує ці повідомлення на шляху до сервера.',media:'Цим каналом передається сама розмова. SRTP шифрує голос між AltSIP і медіавузлом, якщо цей режим узгоджено із сервером.'},
    de: {signal:'Über diesen Weg teilt AltSIP dem SIP-Server mit, wen Sie anrufen, und steuert Beginn und Ende des Anrufs. TLS verschlüsselt diese Nachrichten zwischen AltSIP und dem Server.',media:'Über diesen Weg wird das Gespräch selbst übertragen. SRTP verschlüsselt die Stimme zwischen AltSIP und dem Medienendpunkt, wenn dieser Modus mit dem Server ausgehandelt wurde.'},
    fr: {signal:'Par cette voie, AltSIP indique au serveur SIP qui vous appelez et commande le début et la fin de l’appel. TLS chiffre ces messages entre AltSIP et le serveur.',media:'Cette voie transporte la conversation elle-même. SRTP chiffre la voix entre AltSIP et le point média si ce mode est négocié avec le serveur.'},
    es: {signal:'Por esta vía, AltSIP indica al servidor SIP a quién llama y controla el inicio y el fin de la llamada. TLS cifra esos mensajes entre AltSIP y el servidor.',media:'Por esta vía viaja la conversación. SRTP cifra la voz entre AltSIP y el punto de medios si se negocia este modo con el servidor.'},
    it: {signal:'Su questo percorso AltSIP comunica al server SIP chi sta chiamando e controlla l’inizio e la fine della chiamata. TLS cifra questi messaggi tra AltSIP e il server.',media:'Su questo percorso viaggia la conversazione. SRTP cifra la voce tra AltSIP e il punto multimediale se questa modalità è concordata con il server.'},
    pl: {signal:'Tą drogą AltSIP informuje serwer SIP, do kogo dzwonisz, oraz steruje rozpoczęciem i zakończeniem połączenia. TLS szyfruje te wiadomości między AltSIP a serwerem.',media:'Tą drogą przesyłana jest sama rozmowa. SRTP szyfruje głos między AltSIP a punktem mediów, jeśli ten tryb zostanie uzgodniony z serwerem.'},
    pt: {signal:'Por esta via, o AltSIP informa o servidor SIP de quem está a chamar e controla o início e o fim da chamada. TLS cifra estas mensagens entre o AltSIP e o servidor.',media:'Por esta via passa a própria conversa. SRTP cifra a voz entre o AltSIP e o ponto multimédia se este modo for negociado com o servidor.'}
  };
  const routeExplanation=(locale,route)=>routeHelp[locale]?.[route]||'';

  const modes = ['call','consult','transfer','conference'];
  const clamp = (n,a=0,b=1) => Math.max(a,Math.min(b,n));
  const approach = (from,to,dt) => from+(to-from)*(1-Math.exp(-dt/175));
  const poses = {
    call:       {client:[.20,.40,1,1], you:[.80,.40,1,1], colleague:[.84,.40,0,.82], hub:[.5,.40], links:[1,0,0,0,0,0], wave:[.5,.40]},
    consult:    {client:[.16,.40,.62,1],you:[.50,.40,1,1],colleague:[.84,.40,1,1],hub:[.5,.40],links:[0,1,0,.52,0,0],wave:[.67,.40]},
    transfer:   {client:[.25,.36,1,1],you:[.50,.78,.4,.72],colleague:[.75,.36,1,1],hub:[.5,.36],links:[0,0,1,0,0,0],wave:[.5,.36]},
    conference: {client:[.17,.27,1,1],you:[.50,.77,1,1],colleague:[.83,.27,1,1],hub:[.5,.49],links:[0,0,0,0,1,1],wave:[.5,.49]}
  };
  // A segment is clipped to each circle's outer edge, including during transitions.
  function clippedSegment(a,b,ra,rb){
    const dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1,ux=dx/d,uy=dy/d;
    return {x1:a.x+ux*ra,y1:a.y+uy*ra,x2:b.x-ux*rb,y2:b.y-uy*rb};
  }
  const canConnect=(a,b,ra,rb)=>Math.hypot(b.x-a.x,b.y-a.y)>ra+rb+3;
  function lerpPose(a,b,t){
    const out={};for(const key of ['client','you','colleague','hub','wave'])out[key]=a[key].map((v,i)=>v+(b[key][i]-v)*t);
    out.links=a.links.map((v,i)=>v+(b.links[i]-v)*t);return out;
  }
  function waveCenter(pose){
    const centers=[
      [(pose.client[0]+pose.you[0])/2,(pose.client[1]+pose.you[1])/2],
      [(pose.you[0]+pose.colleague[0])/2,(pose.you[1]+pose.colleague[1])/2],
      [(pose.client[0]+pose.colleague[0])/2,(pose.client[1]+pose.colleague[1])/2],
      pose.hub
    ];
    const weights=[pose.links[0],pose.links[1],pose.links[2],(pose.links[4]+pose.links[5])/2];
    const total=weights.reduce((sum,value)=>sum+value,0);
    if(total<.00001)return {x:pose.wave[0],y:pose.wave[1]};
    return {x:centers.reduce((sum,p,i)=>sum+p[0]*weights[i],0)/total,y:centers.reduce((sum,p,i)=>sum+p[1]*weights[i],0)/total};
  }
  function securityCurve(origin,end){
    const x0=origin.x+origin.r+1,y0=origin.y,x3=end.x-end.r-1,y3=end.y,dx=x3-x0;
    const bend=x0+dx*.16;
    return [{x:x0,y:y0},{x:x0+dx*.04,y:y0},{x:bend-dx*.03,y:y3},{x:bend,y:y3},{x:x3,y:y3}];
  }
  const bezier=(p,t)=>{const q=1-t;return {x:q*q*q*p[0].x+3*q*q*t*p[1].x+3*q*t*t*p[2].x+t*t*t*p[3].x,y:q*q*q*p[0].y+3*q*q*t*p[1].y+3*q*t*t*p[2].y+t*t*t*p[3].y}};
  function routeYAtX(p,x){if(x>=p[3].x)return p[4].y;let lo=0,hi=1;for(let i=0;i<22;i++){const mid=(lo+hi)/2;if(bezier(p,mid).x<x)lo=mid;else hi=mid}return bezier(p,(lo+hi)/2).y}
  function mediaWaveSpan(chipX,chipWidth,endX,endRadius){
    const chipRight=chipX+chipWidth/2,iconLeft=endX-endRadius,center=(chipRight+iconLeft)/2;
    const width=Math.max(0,Math.min(215,2*(center-chipRight-7),2*(iconLeft-8-center)));
    return {start:center-width/2,width,center};
  }
  const securityEndpointX=(baseX,width,progress,compact)=>baseX-width*(compact?.13:.24)*clamp(progress);
  const securityEndpointPose=(baseX,width,progress,compact)=>({signal:securityEndpointX(baseX,width,progress.signal,compact),media:securityEndpointX(baseX,width,progress.media,compact)});
  const securityHelpOpacity=progress=>clamp((progress-.52)/.3);
  function routeVisualExited(event,chip,focusedElement){
    if(!chip.contains(event.target)||chip.contains(event.relatedTarget))return false;
    return event.type==='focusout'||event.type==='pointerout'&&!chip.contains(focusedElement);
  }
  const poseUnsettled=(current,target)=>['client','you','colleague','hub','wave','links'].some(k=>current[k].some((v,i)=>Math.abs(v-target[k][i])>.002));
  const miniPaintDue=(now,lastPaint)=>now-lastPaint>=33;
  const miniWakeDelay=(now,lastPaint)=>Math.max(0,34-(now-lastPaint));
  function sceneFrameKind({enabled,hidden,reduced,visibleCalls,visibleTech,callDirty,securityDirty,unsettled,securityUnsettled=false}){
    if(!enabled||hidden)return 'none';
    if((visibleCalls&&(callDirty||unsettled))||(visibleTech&&(securityDirty||securityUnsettled)))return 'raf';
    return !reduced&&(visibleCalls||visibleTech)?'timer':'none';
  }
  const sceneNeedsFrame=state=>sceneFrameKind(state)!=='none';
  const model={poses,clippedSegment,canConnect,lerpPose,waveCenter,securityCurve,routeYAtX,mediaWaveSpan,securityEndpointX,securityEndpointPose,securityHelpOpacity,routeVisualExited,poseUnsettled,miniPaintDue,miniWakeDelay,sceneFrameKind,sceneNeedsFrame};
  const personIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="6.3" r="3.2"/><path d="M3.4 20.5v-1.9c0-7 17.2-7 17.2 0v1.9Z"/></svg>';
  const serverIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.8" width="17" height="7" rx="1.7"/><rect x="3.5" y="13.2" width="17" height="7" rx="1.7"/><path d="M6.5 7.3h.1M6.5 16.7h.1M10 7.3h6.5M10 16.7h6.5"/></svg>';
  const lockIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5M12 14v3"/></svg>';
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const envelope={duration:1,bins:Array.from({length:96},(_,i)=>{
    const speech=Math.abs(Math.sin(i*.41)+.42*Math.sin(i*1.27)+.27*Math.sin(i*2.89));
    const phrase=.23+.77*Math.pow(Math.sin(i*.105),2);
    return .045+Math.min(.56,speech*phrase*.31);
  })};
  const callMarkup=d=>`<section class="cs-section cs-calls" data-cs-scene="calls"><div class="cs-heading"><h2>${esc(d.calls)}</h2></div><div class="cs-switch" role="group" aria-label="${esc(d.calls)}"><span class="cs-switch-pill" aria-hidden="true"></span>${modes.map((mode,i)=>`<button type="button" data-cs-mode="${mode}" aria-pressed="${i===0}">${esc(d.modes[i])}</button>`).join('')}</div><div class="cs-call-stage" data-mode="call"><svg class="cs-call-paths" aria-hidden="true"><path data-cs-link="0"/><path data-cs-link="1"/><path data-cs-link="2"/><path data-cs-link="3" class="cs-held-path"/><path data-cs-link="4"/><path data-cs-link="5"/><path data-cs-link="6"/></svg><div class="cs-call-wave" aria-hidden="true"><canvas></canvas></div><span class="cs-hold" aria-hidden="true">${esc(d.hold)}</span>${['client','you','colleague'].map((p,i)=>`<div class="cs-party" data-cs-party="${p}"><span class="cs-avatar">${personIcon}</span><strong>${esc(d.parties[i])}</strong></div>`).join('')}</div><div class="cs-explanation" aria-live="polite"><span class="cs-badge"><i aria-hidden="true"></i><span data-cs-badge>${esc(d.badges[0])}</span></span><p data-cs-note>${esc(d.notes[0])}</p></div></section>`;
  const securityMarkup=d=>`<section class="cs-section cs-tech" data-cs-scene="tech"><div class="cs-heading"><h2>${esc(d.tech[0])}</h2><p>${esc(d.tech[1])}</p></div><div class="cs-security"><div class="cs-security-visual"><div class="cs-security-stage"><svg class="cs-security-paths" aria-hidden="true"><path data-cs-route-path="signal"/><path data-cs-route-path="media"/><circle data-cs-packet="0" r="3.5"/><circle data-cs-packet="1" r="3.5"/><circle data-cs-packet="2" r="3.5"/></svg><div class="cs-endpoint cs-origin"><span class="cs-endpoint-icon"><img src="assets/mark.svg" alt="" width="30" height="30"></span><strong>AltSIP</strong></div><div class="cs-endpoint cs-server"><span class="cs-endpoint-icon">${serverIcon}</span><strong>${esc(d.server)}</strong><small>${esc(d.sipTarget)}</small></div><div class="cs-endpoint cs-media-end"><span class="cs-endpoint-icon">${personIcon}</span><strong>${esc(d.mediaPeer)}</strong><small>${esc(d.mediaTarget)}</small></div><div class="cs-route cs-route-signal"><span class="cs-route-meta"><b>${esc(d.signal)}</b><small>${esc(d.signalDetail)}</small></span><button type="button" class="cs-chip" data-cs-route="signal" aria-pressed="false" aria-controls="cs-route-help">${lockIcon} SIP + TLS</button></div><div class="cs-route cs-route-media"><span class="cs-route-meta"><b>${esc(d.audio)}</b><small>${esc(d.audioDetail)}</small></span><button type="button" class="cs-chip" data-cs-route="media" aria-pressed="false" aria-controls="cs-route-help">${lockIcon} SDES-SRTP</button></div><canvas class="cs-security-wave" aria-hidden="true"></canvas></div><div class="cs-route-help" id="cs-route-help" role="status" aria-live="polite" aria-atomic="true"></div></div><p class="cs-security-main">${esc(d.securityMain)}</p><p class="cs-security-fine">${esc(d.securityFine)}</p></div><div class="cs-transport"><span>${esc(d.connect)}</span><div class="cs-transports"><span>UDP</span><span>TCP</span><span>TLS</span><span>${esc(d.transport)}</span></div><p>${esc(d.connectBody)}</p></div></section>`;

  function mount(host,{lang='ru',active=true}={}){
    if(!host)throw new TypeError('Connection scenes require a host');
    let locale=copy[lang]?lang:'en',enabled=!!active,visible={calls:false,tech:false},destroyed=false,raf=0,wakeTimer=0,last=0,lastMini=0,motion=0,mode='call',route='',helpRoute='',pinnedRoute='',current=structuredClone(poses.call),target=poses.call,curvesCache=null,securityDirty=true,callDirty=true,callMetrics=null,securityMetrics=null,securityProgress={signal:0,media:0},securityTarget={signal:0,media:0};
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    const $=s=>host.querySelector(s),$$=s=>[...host.querySelectorAll(s)];
    host.innerHTML=callMarkup(copy[locale])+securityMarkup(copy[locale]);
    const stage=$('.cs-call-stage'),security=$('.cs-security-stage'),parties=Object.fromEntries(['client','you','colleague'].map(k=>[k,$(`[data-cs-party="${k}"]`)]));
    const paths=$$('[data-cs-link]'),routePaths=Object.fromEntries(['signal','media'].map(k=>[k,$(`[data-cs-route-path="${k}"]`)]));
    const packets=$$('[data-cs-packet]'),callCanvas=$('.cs-call-wave canvas'),securityCanvas=$('.cs-security-wave');
    function running(name){return enabled&&visible[name]&&!document.hidden&&!reduced.matches;}
    function paintWave(canvas,time){if(window.AltSIPWave?.render)window.AltSIPWave.render(canvas,{waves:[envelope],weights:[1],density:'mini',contour:canvas===callCanvas?'oval':'natural',clean:1,record:true,motionTime:time,playing:true,tone:'#829aa0',accent:'#829aa0'});}
    function measureCall(){callMetrics={w:stage.clientWidth,h:stage.clientHeight,r:parties.client.querySelector('.cs-avatar').offsetWidth/2}}
    function drawCall(){
      const {w,h,r}=callMetrics||{};if(!w||!h)return;
      const svg=$('.cs-call-paths');svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
      const pos=k=>({x:current[k][0]*w,y:current[k][1]*h});
      for(const k of ['client','you','colleague']){
        const p=parties[k],v=current[k];p.style.left=(v[0]*100)+'%';p.style.top=(v[1]*100)+'%';p.style.opacity=v[2];p.style.setProperty('--cs-scale',v[3]);p.style.pointerEvents=v[2]<.2?'none':'';
      }
      const hub={x:current.hub[0]*w,y:current.hub[1]*h};
      const specs=[['client','you'],['you','colleague'],['client','colleague'],['client','you'],['client','hub'],['colleague','hub'],['you','hub']];
      specs.forEach(([a,b],i)=>{
        const p1=a==='hub'?hub:pos(a),p2=b==='hub'?hub:pos(b),ra=a==='hub'?19:r*current[a][3]+2,rb=b==='hub'?19:r*current[b][3]+2,s=clippedSegment(p1,p2,ra,rb),path=paths[i];
        path.setAttribute('d',`M${s.x1.toFixed(2)} ${s.y1.toFixed(2)}L${s.x2.toFixed(2)} ${s.y2.toFixed(2)}`);
        path.style.opacity=canConnect(p1,p2,ra,rb)?(i===6?current.links[5]:(current.links[i]||0)):0;
      });
      const wave=$('.cs-call-wave'),center=waveCenter(current);wave.style.left=(center.x*100)+'%';wave.style.top=(center.y*100)+'%';
      const hold=$('.cs-hold');hold.style.left=(current.client[0]*100)+'%';hold.style.top=(current.client[1]*h+r*current.client[3]+35)+'px';hold.style.opacity=mode==='consult'?1:0;
    }
    function measureSecurity(){
      const w=security.clientWidth,h=security.clientHeight;if(!w||!h)return null;
      const base=security.getBoundingClientRect();
      const center=sel=>{const n=$(sel).getBoundingClientRect();return {x:n.left+n.width/2-base.left,y:n.top+n.height/2-base.top,r:n.width/2}};
      const origin=center('.cs-origin .cs-endpoint-icon');
      const targets={signal:center('.cs-server .cs-endpoint-icon'),media:center('.cs-media-end .cs-endpoint-icon')};
      const mediaChip=$('.cs-route-media .cs-chip').getBoundingClientRect();
      securityMetrics={w,h,origin,targets,mediaChipX:mediaChip.left+mediaChip.width/2-base.left,mediaChipWidth:mediaChip.width,compact:matchMedia('(max-width: 800px)').matches};
      return securityMetrics;
    }
    function secGeometry(){
      const metrics=securityMetrics||measureSecurity();if(!metrics)return null;
      const {w,h,origin,targets,mediaChipX,mediaChipWidth,compact}=metrics;
      const svg=$('.cs-security-paths');svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
      const endpointX=securityEndpointPose(w*.9,w,securityProgress,compact);
      const curves={};
      for(const kind of ['signal','media']){
        const end={...targets[kind],x:endpointX[kind]};
        $('.cs-'+(kind==='signal'?'server':'media-end')).style.left=end.x+'px';
        const curve=securityCurve(origin,end);curves[kind]=curve;
        const [p0,p1,p2,p3,p4]=curve;
        routePaths[kind].setAttribute('d',`M${p0.x} ${p0.y}C${p1.x} ${p1.y} ${p2.x} ${p2.y} ${p3.x} ${p3.y}H${p4.x}`);
      }
      const waveSpan=mediaWaveSpan(mediaChipX,mediaChipWidth,endpointX.media,targets.media.r);
      securityCanvas.style.width=waveSpan.width+'px';securityCanvas.style.left=waveSpan.center+'px';securityCanvas.style.top=curves.media[4].y+'px';
      const help=$('.cs-route-help'),helpOpacity=securityHelpOpacity(securityProgress[helpRoute]||0);
      help.style.opacity=helpOpacity;
      help.style.visibility=helpOpacity>.001?'visible':'hidden';
      if(!route&&helpOpacity===0&&helpRoute){helpRoute='';help.textContent=''}
      curvesCache=curves;securityDirty=false;return curves;
    }
    function routePoint(p,t){if(t<.3)return bezier(p,t/.3);const f=(t-.3)/.7;return {x:p[3].x+(p[4].x-p[3].x)*f,y:p[4].y}}
    function drawSecurity(time,curves){if(!curves)return;packets.forEach((p,i)=>{const phase=((time*.24+i/3)%1),t=.07+phase*.86,pt=routePoint(curves.signal,t);p.setAttribute('cx',pt.x);p.setAttribute('cy',pt.y);p.style.opacity=running('tech')?Math.min(1,phase*9,(1-phase)*9):0;});}
    function frame(now){raf=0;if(!enabled||document.hidden)return;const dt=Math.min(80,last?now-last:16);last=now;motion+=dt/1000;
      if(visible.calls&&reduced.matches&&poseUnsettled(current,target)){current=structuredClone(target);callDirty=true}
      else if(visible.calls&&!reduced.matches&&poseUnsettled(current,target)){
        for(const k of ['client','you','colleague','hub','wave'])current[k]=current[k].map((v,i)=>approach(v,target[k][i],dt));
        current.links=current.links.map((v,i)=>approach(v,target.links[i],dt));
        callDirty=true;
      }
      if(visible.tech)for(const kind of ['signal','media'])if(Math.abs(securityProgress[kind]-securityTarget[kind])>.002){securityProgress[kind]=reduced.matches?securityTarget[kind]:approach(securityProgress[kind],securityTarget[kind],dt);if(Math.abs(securityProgress[kind]-securityTarget[kind])<.02)securityProgress[kind]=securityTarget[kind];securityDirty=true}
      if(visible.tech&&securityDirty)secGeometry();
      if(visible.calls&&callDirty){drawCall();callDirty=false}
      if(visible.tech&&reduced.matches)drawSecurity(motion,curvesCache);
      if(miniPaintDue(now,lastMini)){lastMini=now;if(running('tech'))drawSecurity(motion,curvesCache);if(running('calls'))paintWave(callCanvas,motion*.42);if(running('tech'))paintWave(securityCanvas,motion*.32)}
      schedule();
    }
    function cancelWake(){if(wakeTimer)clearTimeout(wakeTimer);wakeTimer=0}
    function schedule(){
      if(destroyed)return;
      const kind=sceneFrameKind({enabled,hidden:document.hidden,reduced:reduced.matches,visibleCalls:visible.calls,visibleTech:visible.tech,callDirty,securityDirty,unsettled:poseUnsettled(current,target),securityUnsettled:['signal','media'].some(k=>Math.abs(securityProgress[k]-securityTarget[k])>.002)});
      if(kind==='none'){if(raf)cancelAnimationFrame(raf);raf=0;cancelWake();return}
      if(kind==='raf'){cancelWake();if(!raf)raf=requestAnimationFrame(frame);return}
      if(raf)return;
      if(!wakeTimer){
        const delay=miniWakeDelay(performance.now(),lastMini);
        wakeTimer=setTimeout(()=>{wakeTimer=0;if(!destroyed&&enabled&&!document.hidden&&!reduced.matches&&(visible.calls||visible.tech))frame(performance.now())},delay);
      }
    }
    function setMode(next){if(!poses[next]||destroyed)return;mode=next;target=poses[next];stage.dataset.mode=next;callDirty=true;
      const index=modes.indexOf(next),d=copy[locale];$$('[data-cs-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.csMode===next)));
      $('.cs-switch').style.setProperty('--cs-index',index);$('[data-cs-badge]').textContent=d.badges[index];$('[data-cs-note]').textContent=d.notes[index];
      if(reduced.matches){current=structuredClone(target);drawCall()}else schedule();
    }
    function setRoute(next){const selected=next==='signal'||next==='media'?next:'';if(selected===route)return;route=selected;securityTarget={signal:route==='signal'?1:0,media:route==='media'?1:0};security.dataset.route=route;$('.cs-security').dataset.detail=route;if(route){const help=$('.cs-route-help');if(helpRoute&&helpRoute!==route){help.style.opacity=0;help.style.visibility='hidden'}helpRoute=route;help.textContent=routeExplanation(locale,route)}$$('[data-cs-route]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.csRoute===route)));securityDirty=true;schedule();}
    function onClick(e){const modeButton=e.target.closest('[data-cs-mode]'),routeButton=e.target.closest('[data-cs-route]');if(modeButton&&host.contains(modeButton))setMode(modeButton.dataset.csMode);if(routeButton&&host.contains(routeButton)){pinnedRoute=pinnedRoute===routeButton.dataset.csRoute?'':routeButton.dataset.csRoute;setRoute(pinnedRoute)}}
    function onFocus(e){const b=e.target.closest?.('[data-cs-route]');if(b&&host.contains(b))setRoute(b.dataset.csRoute)}
    function onBlur(e){const chip=e.target.closest?.('[data-cs-route]');if(chip&&host.contains(chip)&&routeVisualExited(e,chip,document.activeElement))setRoute(pinnedRoute)}
    host.addEventListener('click',onClick);host.addEventListener('pointerover',onFocus);host.addEventListener('pointerout',onBlur);host.addEventListener('focusin',onFocus);host.addEventListener('focusout',onBlur);
    const observer=new IntersectionObserver(entries=>{entries.forEach(e=>visible[e.target.dataset.csScene]=e.isIntersecting);schedule()},{threshold:.01});$$('[data-cs-scene]').forEach(x=>observer.observe(x));
    const resize=new ResizeObserver(()=>{measureCall();callDirty=true;securityMetrics=null;securityDirty=true;secGeometry();schedule()});resize.observe(stage);resize.observe(security);
    const visibility=()=>{last=0;if(reduced.matches){callDirty=true;securityDirty=true}schedule()};document.addEventListener('visibilitychange',visibility);reduced.addEventListener('change',visibility);
    measureCall();secGeometry();drawCall();callDirty=false;drawSecurity(0,curvesCache);paintWave(callCanvas,0);paintWave(securityCanvas,0);schedule();
    return {setActive(value){enabled=!!value;last=0;if(!enabled){cancelAnimationFrame(raf);raf=0;cancelWake()}else schedule()},setLocale(code){const next=copy[code]?code:'en';if(next===locale)return;locale=next;const d=copy[locale];$('.cs-calls .cs-heading h2').textContent=d.calls;$('.cs-switch').setAttribute('aria-label',d.calls);$$('[data-cs-mode]').forEach((b,i)=>b.textContent=d.modes[i]);$$('[data-cs-party]').forEach((p,i)=>p.querySelector('strong').textContent=d.parties[i]);$('.cs-hold').textContent=d.hold;$('.cs-tech .cs-heading h2').textContent=d.tech[0];$('.cs-tech .cs-heading p').textContent=d.tech[1];$('.cs-server strong').textContent=d.server;$('.cs-server small').textContent=d.sipTarget;$('.cs-media-end strong').textContent=d.mediaPeer;$('.cs-media-end small').textContent=d.mediaTarget;$('.cs-route-signal b').textContent=d.signal;$('.cs-route-signal small').textContent=d.signalDetail;$('.cs-route-media b').textContent=d.audio;$('.cs-route-media small').textContent=d.audioDetail;$('.cs-security-main').textContent=d.securityMain;$('.cs-security-fine').textContent=d.securityFine;$('.cs-transport>span').textContent=d.connect;$('.cs-transport p').textContent=d.connectBody;$('.cs-route-help').textContent=routeExplanation(locale,helpRoute);securityDirty=true;setMode(mode);schedule()},destroy(){if(destroyed)return;destroyed=true;cancelAnimationFrame(raf);cancelWake();observer.disconnect();resize.disconnect();document.removeEventListener('visibilitychange',visibility);reduced.removeEventListener('change',visibility);host.removeEventListener('click',onClick);host.removeEventListener('pointerover',onFocus);host.removeEventListener('focusin',onFocus);host.removeEventListener('pointerout',onBlur);host.removeEventListener('focusout',onBlur);window.AltSIPWave?.release?.(callCanvas);window.AltSIPWave?.release?.(securityCanvas);host.innerHTML=''}};
  }
  window.AltSIPConnectionScenes={mount,model,copy,routeHelp,routeExplanation};
})();
