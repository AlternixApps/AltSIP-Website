/* Self-contained feature deck. UI fragments trace the Windows app; all sample call data is preview data. */
(() => {
  'use strict';
  const en = {
    previous:'Previous feature', next:'Next feature', of:'of', preview:'Preview', compactAction:'Show compact mode', compactRestore:'Show full window',
    compactTitle:'Room for the conversation', compactBody:'Compact mode keeps call controls close and frees up screen space.',
    qualityTitle:"Call quality at a glance", qualityBody:"MOS estimates call quality from packet loss and delay. See the reading beside the call timer.",
    detailsTitle:'Call details', detailsBody:'Everything about a call, close at hand.',
    codecTitle:'Codecs, your way', codecBody:'AltSIP agrees on a codec with your PBX. Arrange codec priority manually when you need a preferred order.',
    numberTitle:"The right number format for your PBX", numberBody:"Remove spaces or the leading + before dialing, as your PBX requires.",
    echoTitle:'Echo cancellation', echoBody:'Less speaker echo returns through the microphone, so your voice stays clearer.',
    conferenceTitle:'Conference', conferenceBody:'Bring two calls into one conversation. Split them again whenever you need.', conferenceReplay:'Replay conference',
    good:'Good', fair:'Fair', poor:'Poor', loss:'Loss', jitter:'Jitter', networkEstimate:'Network estimate, not speech quality', qualitySample:'G.711 sample with fresh RTT',
    stripSpaces:'Remove spaces', stripPlus:'Remove leading +', enterNumber:'Number to dial', processedNumber:'Processed number',
    speaker:'Speaker', microphone:'Microphone'
  };
  const ru = {
    previous:'Предыдущая функция', next:'Следующая функция', of:'из', preview:'Предпросмотр', compactAction:'Компактный режим', compactRestore:'Полное окно',
    compactTitle:'Больше места для разговора', compactBody:'Компактный режим оставляет управление вызовом под рукой и освобождает место на экране.',
    qualityTitle:"Качество связи во время звонка", qualityBody:"MOS оценивает качество по потерям пакетов и задержке. Оценка видна рядом с таймером.",
    detailsTitle:'Детализация вызова', detailsBody:'Вся информация о вызове под рукой.',
    codecTitle:'Кодеки в нужном порядке', codecBody:'AltSIP согласует кодек с АТС. При необходимости задайте приоритет кодеков вручную.',
    numberTitle:"Формат номера для вашей АТС", numberBody:"Перед набором уберите пробелы или начальный «+», если этого требует АТС.",
    echoTitle:'Эхоподавление', echoBody:'Меньше эха от динамиков возвращается в микрофон, чтобы собеседник лучше слышал ваш голос.',
    conferenceTitle:'Конференция', conferenceBody:'Объедините два вызова в один разговор. При необходимости снова разделите их.', conferenceReplay:'Повторить конференцию',
    good:'Хорошо', fair:'Средне', poor:'Плохо', loss:'Потери', jitter:'Джиттер', networkEstimate:'Оценка сети, не качества речи', qualitySample:'Пример G.711 со свежим RTT',
    stripSpaces:'Убирать пробелы', stripPlus:'Убирать начальный +', enterNumber:'Номер для набора', processedNumber:'Обработанный номер',
    speaker:'Динамик', microphone:'Микрофон'
  };
  const de = {
    previous:'Vorherige Funktion', next:'Nächste Funktion', of:'von', preview:'Vorschau', compactAction:'Kompaktmodus zeigen', compactRestore:'Ganzes Fenster zeigen',
    compactTitle:'Mehr Platz für Gespräche', compactBody:'Im Kompaktmodus bleibt die Anrufsteuerung griffbereit und der Bildschirm wird freier.',
    qualityTitle:"Gesprächsqualität im Blick", qualityBody:"MOS schätzt die Qualität anhand von Paketverlust und Verzögerung. Der Wert steht neben der Gesprächszeit.",
    detailsTitle:'Anrufdetails', detailsBody:'Alle Informationen zum Anruf auf einen Blick.',
    codecTitle:'Codecs in Ihrer Reihenfolge', codecBody:'AltSIP stimmt einen Codec mit der Telefonanlage ab. Bei Bedarf legen Sie die Codec-Priorität selbst fest.',
    numberTitle:"Das Nummernformat für Ihre Telefonanlage", numberBody:"Entfernen Sie vor dem Wählen Leerzeichen oder das führende +, wenn Ihre Anlage es verlangt.",
    echoTitle:'Echounterdrückung', echoBody:'Weniger Lautsprecherecho gelangt zurück ins Mikrofon, damit Ihre Stimme klarer bleibt.',
    conferenceTitle:'Konferenz', conferenceBody:'Verbinden Sie zwei Anrufe zu einem Gespräch. Bei Bedarf können Sie sie wieder trennen.', conferenceReplay:'Konferenz erneut zeigen',
    good:'Gut', fair:'Mittel', poor:'Schlecht', loss:'Verlust', jitter:'Jitter', networkEstimate:'Netzwerkschätzung, keine Bewertung der Sprachqualität', qualitySample:'G.711-Beispiel mit aktuellem RTT',
    stripSpaces:'Leerzeichen entfernen', stripPlus:'Führendes + entfernen', enterNumber:'Zu wählende Nummer', processedNumber:'Verarbeitete Nummer',
    speaker:'Lautsprecher', microphone:'Mikrofon'
  };
  const es = {
    previous:'Función anterior', next:'Función siguiente', of:'de', preview:'Vista previa', compactAction:'Ver modo compacto', compactRestore:'Ver ventana completa',
    compactTitle:'Más espacio para hablar', compactBody:'El modo compacto deja los controles de llamada a mano y libera espacio en pantalla.',
    qualityTitle:"Calidad de la llamada a la vista", qualityBody:"MOS estima la calidad a partir de la pérdida de paquetes y la demora. Mira el valor junto al contador.",
    detailsTitle:'Detalles de la llamada', detailsBody:'Toda la información de la llamada, a mano.',
    codecTitle:'Códecs en tu orden', codecBody:'AltSIP acuerda un códec con la centralita. Puedes ordenar su prioridad manualmente cuando lo necesites.',
    numberTitle:"El formato que necesita tu centralita", numberBody:"Quita los espacios o el + inicial antes de marcar, si tu centralita lo requiere.",
    echoTitle:'Cancelación de eco', echoBody:'Vuelve menos eco del altavoz al micrófono para que tu voz se oiga mejor.',
    conferenceTitle:'Conferencia', conferenceBody:'Une dos llamadas en una conversación. Vuelve a separarlas cuando quieras.', conferenceReplay:'Repetir conferencia',
    good:'Buena', fair:'Regular', poor:'Mala', loss:'Pérdida', jitter:'Fluctuación', networkEstimate:'Estimación de la red, no de la calidad de voz', qualitySample:'Ejemplo G.711 con RTT reciente',
    stripSpaces:'Quitar espacios', stripPlus:'Quitar + inicial', enterNumber:'Número que vas a marcar', processedNumber:'Número procesado',
    speaker:'Altavoz', microphone:'Micrófono'
  };
  const fr = {
    previous:'Fonction précédente', next:'Fonction suivante', of:'sur', preview:'Aperçu', compactAction:'Voir le mode compact', compactRestore:'Voir la fenêtre entière',
    compactTitle:'Plus de place pour parler', compactBody:'Le mode compact garde les commandes d’appel à portée de main et libère l’écran.',
    qualityTitle:"Qualité de l’appel en un coup d’œil", qualityBody:"Le MOS estime la qualité à partir des pertes de paquets et du délai. Le résultat s’affiche près du compteur.",
    detailsTitle:'Détails de l’appel', detailsBody:'Toutes les informations sur l’appel à portée de main.',
    codecTitle:'Vos codecs, dans votre ordre', codecBody:'AltSIP choisit un codec avec le PBX. Vous pouvez définir manuellement leur priorité au besoin.',
    numberTitle:"Le bon format pour votre standard", numberBody:"Avant de composer, retirez les espaces ou le + initial si votre standard l’exige.",
    echoTitle:'Annulation d’écho', echoBody:'Moins d’écho du haut-parleur revient dans le microphone, pour une voix plus claire.',
    conferenceTitle:'Conférence', conferenceBody:'Réunissez deux appels dans une conversation. Séparez-les à nouveau si besoin.', conferenceReplay:'Rejouer la conférence',
    good:'Bonne', fair:'Moyenne', poor:'Mauvaise', loss:'Perte', jitter:'Gigue', networkEstimate:'Estimation du réseau, pas de la qualité vocale', qualitySample:'Exemple G.711 avec RTT récent',
    stripSpaces:'Supprimer les espaces', stripPlus:'Supprimer le + initial', enterNumber:'Numéro à composer', processedNumber:'Numéro traité',
    speaker:'Haut-parleur', microphone:'Microphone'
  };
  const it = {
    previous:'Funzione precedente', next:'Funzione successiva', of:'di', preview:'Anteprima', compactAction:'Mostra modalità compatta', compactRestore:'Mostra finestra intera',
    compactTitle:'Più spazio per parlare', compactBody:'La modalità compatta tiene i comandi di chiamata a portata di mano e libera lo schermo.',
    qualityTitle:"Qualità della chiamata a colpo d’occhio", qualityBody:"MOS stima la qualità in base a perdita di pacchetti e ritardo. Il valore appare accanto al timer.",
    detailsTitle:'Dettagli della chiamata', detailsBody:'Tutte le informazioni sulla chiamata a portata di mano.',
    codecTitle:'Codec nel tuo ordine', codecBody:'AltSIP concorda un codec con il centralino. Se serve, imposta manualmente la priorità dei codec.',
    numberTitle:"Il formato adatto al tuo centralino", numberBody:"Prima di chiamare, rimuovi gli spazi o il + iniziale se il centralino lo richiede.",
    echoTitle:'Cancellazione dell’eco', echoBody:'Meno eco degli altoparlanti torna nel microfono, così la tua voce rimane più chiara.',
    conferenceTitle:'Conferenza', conferenceBody:'Unisci due chiamate in una conversazione. Separale di nuovo quando vuoi.', conferenceReplay:'Ripeti conferenza',
    good:'Buona', fair:'Discreta', poor:'Scarsa', loss:'Perdita', jitter:'Jitter', networkEstimate:'Stima della rete, non della qualità vocale', qualitySample:'Esempio G.711 con RTT recente',
    stripSpaces:'Rimuovi spazi', stripPlus:'Rimuovi + iniziale', enterNumber:'Numero da comporre', processedNumber:'Numero elaborato',
    speaker:'Altoparlante', microphone:'Microfono'
  };
  const pl = {
    previous:'Poprzednia funkcja', next:'Następna funkcja', of:'z', preview:'Podgląd', compactAction:'Pokaż tryb kompaktowy', compactRestore:'Pokaż pełne okno',
    compactTitle:'Więcej miejsca na rozmowę', compactBody:'Tryb kompaktowy zostawia sterowanie rozmową pod ręką i zwalnia miejsce na ekranie.',
    qualityTitle:"Jakość rozmowy na pierwszy rzut oka", qualityBody:"MOS szacuje jakość na podstawie utraty pakietów i opóźnienia. Wynik widać obok licznika.",
    detailsTitle:'Szczegóły rozmowy', detailsBody:'Wszystkie informacje o rozmowie pod ręką.',
    codecTitle:'Kodeki w Twojej kolejności', codecBody:'AltSIP uzgadnia kodek z centralą PBX. W razie potrzeby ręcznie ustaw priorytet kodeków.',
    numberTitle:"Format numeru dla Twojej centrali", numberBody:"Przed wybraniem numeru usuń spacje lub początkowy +, jeśli wymaga tego centrala.",
    echoTitle:'Usuwanie echa', echoBody:'Mniej echa z głośnika wraca do mikrofonu, więc Twój głos pozostaje wyraźniejszy.',
    conferenceTitle:'Konferencja', conferenceBody:'Połącz dwie rozmowy w jedną. W razie potrzeby rozdziel je ponownie.', conferenceReplay:'Odtwórz konferencję ponownie',
    good:'Dobra', fair:'Średnia', poor:'Słaba', loss:'Utrata', jitter:'Jitter', networkEstimate:'Ocena sieci, nie jakości mowy', qualitySample:'Przykład G.711 z aktualnym RTT',
    stripSpaces:'Usuń spacje', stripPlus:'Usuń początkowy +', enterNumber:'Numer do wybrania', processedNumber:'Przetworzony numer',
    speaker:'Głośnik', microphone:'Mikrofon'
  };
  const pt = {
    previous:'Funcionalidade anterior', next:'Funcionalidade seguinte', of:'de', preview:'Pré-visualização', compactAction:'Mostrar modo compacto', compactRestore:'Mostrar janela completa',
    compactTitle:'Mais espaço para falar', compactBody:'O modo compacto mantém os controlos da chamada à mão e liberta espaço no ecrã.',
    qualityTitle:"Qualidade da chamada à vista", qualityBody:"O MOS estima a qualidade com base na perda de pacotes e no atraso. Veja o valor junto ao contador.",
    detailsTitle:'Detalhes da chamada', detailsBody:'Toda a informação da chamada à mão.',
    codecTitle:'Codecs na sua ordem', codecBody:'O AltSIP acorda um codec com a central. Se precisar, defina manualmente a prioridade dos codecs.',
    numberTitle:"O formato certo para a sua central", numberBody:"Antes de marcar, remova espaços ou o + inicial se a sua central assim o exigir.",
    echoTitle:'Cancelamento de eco', echoBody:'Menos eco do altifalante regressa ao microfone, para que a sua voz fique mais clara.',
    conferenceTitle:'Conferência', conferenceBody:'Junte duas chamadas numa conversa. Separe-as novamente quando precisar.', conferenceReplay:'Repetir conferência',
    good:'Boa', fair:'Razoável', poor:'Fraca', loss:'Perda', jitter:'Jitter', networkEstimate:'Estimativa da rede, não da qualidade da voz', qualitySample:'Exemplo G.711 com RTT recente',
    stripSpaces:'Remover espaços', stripPlus:'Remover + inicial', enterNumber:'Número a marcar', processedNumber:'Número processado',
    speaker:'Altifalante', microphone:'Microfone'
  };
  const uk = {
    previous:'Попередня функція', next:'Наступна функція', of:'з', preview:'Попередній перегляд', compactAction:'Компактний режим', compactRestore:'Повне вікно',
    compactTitle:'Більше місця для розмови', compactBody:'Компактний режим залишає керування викликом під рукою й звільняє місце на екрані.',
    qualityTitle:"Якість зв’язку під час дзвінка", qualityBody:"MOS оцінює якість за втратами пакетів і затримкою. Оцінку видно поруч із таймером.",
    detailsTitle:'Деталі виклику', detailsBody:'Уся інформація про виклик — під рукою.',
    codecTitle:'Кодеки у вашому порядку', codecBody:'AltSIP узгоджує кодек з АТС. За потреби задайте пріоритет кодеків вручну.',
    numberTitle:"Формат номера для вашої АТС", numberBody:"Перед набором приберіть пробіли або початковий «+», якщо цього вимагає АТС.",
    echoTitle:'Ехоподавлення', echoBody:'Менше луни від динаміків повертається в мікрофон, тож ваш голос залишається чіткішим.',
    conferenceTitle:'Конференція', conferenceBody:'Об’єднайте два виклики в одну розмову. За потреби знову розділіть їх.', conferenceReplay:'Повторити конференцію',
    good:'Добре', fair:'Середньо', poor:'Погано', loss:'Втрати', jitter:'Джитер', networkEstimate:'Оцінка мережі, не якості мовлення', qualitySample:'Приклад G.711 зі свіжим RTT',
    stripSpaces:'Прибирати пробіли', stripPlus:'Прибирати початковий +', enterNumber:'Номер для набору', processedNumber:'Оброблений номер',
    speaker:'Динамік', microphone:'Мікрофон'
  };
  const locales = {de,en,es,fr,it,pl,pt,ru,uk};
  const extra = {
    en:{networkNote:"Example values from a simulated call, not a test of your connection.",echoAction:"Turn echo cancellation on",echoRestore:"Turn echo cancellation off"},
    ru:{networkNote:"Показаны примерные значения. Ваше соединение не проверяется.",echoAction:"Включить эхоподавление",echoRestore:"Выключить эхоподавление"},
    de:{networkNote:"Beispielwerte; Ihre Verbindung wird nicht geprüft.",echoAction:"Echounterdrückung einschalten",echoRestore:"Echounterdrückung ausschalten"},
    es:{networkNote:"Valores de ejemplo; no se prueba tu conexión.",echoAction:"Activar cancelación de eco",echoRestore:"Desactivar cancelación de eco"},
    fr:{networkNote:"Valeurs d’exemple ; votre connexion n’est pas testée.",echoAction:"Activer l’annulation d’écho",echoRestore:"Désactiver l’annulation d’écho"},
    it:{networkNote:"Valori di esempio; la tua connessione non viene testata.",echoAction:"Attiva cancellazione dell’eco",echoRestore:"Disattiva cancellazione dell’eco"},
    pl:{networkNote:"Wartości przykładowe; Twoje łącze nie jest testowane.",echoAction:"Włącz usuwanie echa",echoRestore:"Wyłącz usuwanie echa"},
    pt:{networkNote:"Valores de exemplo; a sua ligação não é testada.",echoAction:"Ativar cancelamento de eco",echoRestore:"Desativar cancelamento de eco"},
    uk:{networkNote:"Це приклад значень; ваше з’єднання не перевіряється.",echoAction:"Увімкнути ехоподавлення",echoRestore:"Вимкнути ехоподавлення"}
  };
  const signalLabels = {
    en:{micInput:'Microphone signal'},
    ru:{micInput:'Сигнал микрофона'},
    de:{micInput:'Mikrofonsignal'},
    es:{micInput:'Señal del micrófono'},
    fr:{micInput:'Signal du microphone'},
    it:{micInput:'Segnale del microfono'},
    pl:{micInput:'Sygnał mikrofonu'},
    pt:{micInput:'Sinal do microfone'},
    uk:{micInput:'Сигнал мікрофона'}
  };
  const arrow = direction => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" '+(direction === 'left' ? 'transform="rotate(180 12 12)"' : '')+'/></svg>';
  const icon = name => ({mic:'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>'}[name] || '');
  const svg = name => '<svg viewBox="0 0 24 24" aria-hidden="true">'+icon(name)+'</svg>';
  const slides = [
    ['compact','compactTitle','compactBody'],['quality','qualityTitle','qualityBody'],['details','detailsTitle','detailsBody'],
    ['codec','codecTitle','codecBody'],['number','numberTitle','numberBody'],['echo','echoTitle','echoBody'],['conference','conferenceTitle','conferenceBody']
  ];
  let host, track, current=0, copy=en, custom={}, locale='en', compactShown=true, echoReduced=false, featureTheme='light';
  let widgets=[], compactWidget, qualityWidget, numberWidget, conferenceWidget, qualityTimer, qualityStep=0, resizeObserver, visibilityObserver, sectionVisible=true;
  const rawNumber='+1 202 555 0142';
  let echoFrame=0, echoStarted=0, echoFade=1;
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  // Procedural envelopes illustrate separate paths; they contain no recorded sound or AEC measurement.
  const echoEnvelope=(phase,pace)=>({duration:18,bins:Array.from({length:512},(_,i)=>{
    const x=i/512;
    return Math.max(.008,Math.pow(Math.abs(Math.sin(x*pace+phase)*Math.cos(x*47+phase*.3)+Math.sin(x*91)*.24),2)*(.22+.33*Math.sin(x*5.4+phase)**2));
  })});
  const voiceWave=echoEnvelope(1.7,35),returnWave=echoEnvelope(.42,29);
  const dict=()=>({...en,...copy,...extra[locale],...signalLabels[locale],...custom});
  const frame = (view,crop) => '<div class="af-widget-frame" data-view="'+view+'" data-crop="'+crop+'"><div class="af-widget-slot"></div></div>';
  function stage(name){
    if(name==='compact') return '<div class="af-native-wrap">'+frame('compact','full')+'</div>';
    if(name==='quality') return '<div class="af-quality-layout"><div class="af-quality-focus">'+frame('quality','quality')+'</div><div class="af-quality-panel" aria-describedby="af-quality-note"><div class="af-quality-reading"><span class="af-reading-dot"></span><strong class="af-quality-status"></strong></div><div class="af-quality-metrics"><span class="af-quality-loss"></span><span class="af-quality-jitter"></span><span class="af-quality-rtt"></span></div><p class="af-quality-note" id="af-quality-note" data-extra="networkNote"></p></div></div>';
    if(name==='details') return '<div class="af-native-wrap">'+frame('details','pane')+'</div>';
    if(name==='codec') return '<div class="af-native-wrap">'+frame('codecs','pane')+'</div>';
    if(name==='number') return '<div class="af-number-layout">'+frame('dial','full')+'<div class="af-number-controls"><label><input class="af-strip-spaces" type="checkbox" checked><span data-af="stripSpaces"></span></label><label><input class="af-strip-plus" type="checkbox"><span data-af="stripPlus"></span></label></div></div>';
    if(name==='echo') return '<div class="af-echo-diagram" role="group"><div class="af-mic-heading">'+svg('mic')+'<span data-extra="micInput"></span></div><div class="af-wave-stack"><canvas class="af-echo-canvas af-voice-wave" aria-hidden="true"></canvas><canvas class="af-echo-canvas af-return-wave" aria-hidden="true"></canvas></div><button class="af-echo-toggle" type="button" aria-pressed="false"></button></div>';
    return '<div class="af-native-wrap">'+frame('conference','full')+'</div>';
  }
  function markup(){
    return '<div class="af-shell"><div class="af-header"><div class="af-nav"><button type="button" class="af-arrow" data-af-prev>'+arrow('left')+'</button><button type="button" class="af-arrow" data-af-next>'+arrow('right')+'</button></div></div><div class="af-viewport" tabindex="0" role="region" aria-roledescription="carousel"><div class="af-track">'+slides.map((item)=>'<article class="af-slide af-'+item[0]+'" data-feature="'+item[0]+'"><div class="af-copy"><h3 data-af="'+item[1]+'"></h3><p data-af="'+item[2]+'"></p>'+(item[0]==='compact'?'<button type="button" class="af-compact-toggle" aria-pressed="true"><span></span>'+arrow('right')+'</button>':item[0]==='conference'?'<button type="button" class="af-conference-replay" data-af="conferenceReplay"></button>':'')+'</div><div class="af-stage">'+stage(item[0])+'</div></article>').join('')+'</div></div><div class="af-progress" aria-hidden="true"><i></i></div></div>';
  }
  function paint(){
    if(!host)return;
    const d=dict();
    host.querySelectorAll('[data-af]').forEach(el=>{el.textContent=d[el.dataset.af]||'';});
    host.querySelectorAll('[data-extra]').forEach(el=>{el.textContent=d[el.dataset.extra]||'';});
    host.querySelector('[data-af-prev]').setAttribute('aria-label',d.previous);
    host.querySelector('[data-af-next]').setAttribute('aria-label',d.next);
    host.querySelector('.af-viewport').setAttribute('aria-label',d[slides[current][1]]+' — AltSIP');
    host.querySelector('.af-echo-diagram').setAttribute('aria-label',d.echoBody);
    host.querySelector('.af-compact-toggle span').textContent=compactShown?d.compactRestore:d.compactAction;
    host.querySelector('.af-echo-toggle').textContent=echoReduced?d.echoRestore:d.echoAction;
    updatePosition();
    quality(host.querySelector('.af-quality-panel').dataset.level||'good');
  }
  function updatePosition(){
    if(!host)return;
    track.style.transform='translate3d(-'+(current*100)+'%,0,0)';
    host.querySelectorAll('.af-slide').forEach((slide,i)=>{const active=i===current;slide.inert=!active;slide.setAttribute('aria-hidden',String(!active));slide.classList.toggle('af-active',active);});
    host.querySelector('.af-progress i').style.transform='scaleX('+((current+1)/slides.length)+')';
    host.querySelector('.af-viewport').setAttribute('aria-label',dict()[slides[current][1]]+' — AltSIP');
    host.querySelector('[data-af-prev]').disabled=current===0;
    host.querySelector('[data-af-next]').disabled=current===slides.length-1;
  }
  function go(delta){const next=Math.max(0,Math.min(slides.length-1,current+delta));if(next===current)return;current=next;mountCurrentWidget();updatePosition();syncActivity();requestAnimationFrame(fitWidgets);}
  function quality(level){
    if(!host)return;
    const states={good:{loss:'0.2%',jitter:'6 ms',rtt:'48 ms'},fair:{loss:'1.8%',jitter:'22 ms',rtt:'118 ms'},poor:{loss:'5.4%',jitter:'64 ms',rtt:'280 ms'}};
    if(!states[level])return;
    const s=states[level],box=host.querySelector('.af-quality-panel'),d=dict();
    box.dataset.level=level;
    box.querySelector('.af-quality-status').textContent=d[level];
    box.querySelector('.af-quality-loss').textContent=d.loss+': '+s.loss;
    box.querySelector('.af-quality-jitter').textContent=d.jitter+': '+s.jitter;
    box.querySelector('.af-quality-rtt').textContent='RTT: '+s.rtt;
    qualityWidget?.setQualityPreview?.(level);
  }
  function fitWidgets(){
    if(!host)return;
    host.querySelectorAll('.af-widget-frame').forEach(frame=>{
      const size=frame.__afWidget?.getSize?.();if(!size)return;
      const crop=frame.dataset.crop;
      let sourceWidth=size.width,sourceHeight=size.height,offsetX=0,offsetY=0;
      if(crop==='pane'){sourceWidth=304;sourceHeight=frame.dataset.view==='details'?560:455;offsetX=380;}
      if(crop==='quality'){sourceWidth=286;sourceHeight=106;offsetX=8;offsetY=18;}
      const parent=frame.parentElement;
      let availableWidth=parent.clientWidth||sourceWidth;
      let availableHeight=parent.clientHeight||sourceHeight;
      if(frame.dataset.view==='dial'){
        const controls=parent.querySelector('.af-number-controls');
        if(getComputedStyle(parent).flexDirection==='column')availableHeight-=controls.offsetHeight+8;
        else availableWidth-=controls.offsetWidth+22;
      }
      const cap=crop==='quality'?1.85:crop==='pane'?1.2:frame.dataset.view==='compact'?1.55:1;
      const scale=Math.max(.1,Math.min(cap,(availableWidth-4)/sourceWidth,(availableHeight-4)/sourceHeight));
      frame.style.width=Math.floor(sourceWidth*scale)+'px';
      frame.style.height=Math.floor(sourceHeight*scale)+'px';
      const slot=frame.querySelector('.af-widget-slot');
      slot.style.left=(-offsetX)+'px';
      slot.style.top=(-offsetY)+'px';
      slot.style.zoom=String(scale);slot.style.transform='none';
    });
  }
  function ensureWidget(frame){
    if(!frame||frame.__afWidget||!window.AltSIPDemo?.mount)return;
    const view=frame.dataset.view;
    const scope=view==='dial'?'number':view;
    const widget=window.AltSIPDemo.mount(frame.querySelector('.af-widget-slot'),{initialView:view,interactionScope:scope});
    frame.__afWidget=widget;widgets.push(widget);
    frame.addEventListener('sip-demo-resize',()=>{if(view==='compact'){compactShown=frame.querySelector('.sip-demo').classList.contains('sd-compact');const button=host.querySelector('.af-compact-toggle');button.setAttribute('aria-pressed',String(compactShown));button.querySelector('span').textContent=compactShown?dict().compactRestore:dict().compactAction;}requestAnimationFrame(fitWidgets);});
    if(view==='compact')compactWidget=widget;
    if(view==='quality'){qualityWidget=widget;quality(frame.closest('.af-slide').querySelector('.af-quality-panel').dataset.level||'good');}
    if(view==='dial'){numberWidget=widget;applyNumber();}
    if(view==='conference')conferenceWidget=widget;
    widget.setLocale?.(locale);
    widget.setTheme?.(featureTheme);
    widget.setActive?.(sectionVisible&&!document.hidden&&frame.closest('.af-slide').classList.contains('af-active'));
    requestAnimationFrame(fitWidgets);
  }
  function mountCurrentWidget(){ensureWidget(host?.querySelector('.af-slide:nth-child('+(current+1)+') .af-widget-frame'));}
  function applyTheme(theme=document.documentElement.dataset.theme==='dark'?'dark':'light'){featureTheme=theme;widgets.forEach(w=>w?.setTheme?.(theme));syncEcho();}
  function scheduleQuality(){
    clearTimeout(qualityTimer);qualityTimer=0;
    if(current!==1||!sectionVisible||document.hidden)return;
    qualityTimer=setTimeout(()=>{const sequence=['good','good','good','good','fair','good','good','good','good','poor','good','good'];quality(sequence[(++qualityStep)%sequence.length]);scheduleQuality();},4000);
  }
  function syncActivity(){
    if(!host)return;
    host.querySelectorAll('.af-widget-frame').forEach(frame=>frame.__afWidget?.setActive?.(sectionVisible&&!document.hidden&&frame.closest('.af-slide').classList.contains('af-active')));
    scheduleQuality();syncEcho();
  }
  function toggleCompact(){
    compactShown=!compactShown;
    const frame=host.querySelector('.af-compact .af-widget-frame');
    compactWidget?.preview?.(compactShown?'compact':'idle');
    frame.dataset.view=compactShown?'compact':'idle';
    host.querySelector('.af-compact-toggle').setAttribute('aria-pressed',String(compactShown));
    paint();requestAnimationFrame(fitWidgets);
  }
  function numberProjection(raw){
    const spaces=host.querySelector('.af-strip-spaces').checked,plus=host.querySelector('.af-strip-plus').checked;
    const chars=[],positions=[];
    for(let i=0;i<raw.length;){const char=String.fromCodePoint(raw.codePointAt(i)),normalized=char.normalize('NFKC');
      for(const c of normalized){if(!/\p{Cf}/u.test(c)&&!(spaces&&/[\s\p{Zs}]/u.test(c))){chars.push(c);positions.push(i);}}
      i+=char.length;
    }
    const interim=chars.join('');
    const plusAt=plus?(interim.match(/^sips:\+/i)?5:interim.match(/^sip:\+/i)?4:interim.startsWith('+')?0:-1):-1;
    if(plusAt>=0){chars.splice(plusAt,1);positions.splice(plusAt,1);}
    return {value:chars.join(''),positions};
  }
  function applyNumber(){
    if(!host)return;
    const value=numberProjection(rawNumber).value;
    const native=host.querySelector('.af-number .sd-number');
    if(native?.value===value)return;
    numberWidget?.setNumberPreview?.(value);
  }

  let lastEchoPaint=0;
  function drawEcho(time){
    if(!host||!window.AltSIPWave?.render)return;
    const active=current===5&&sectionVisible&&!document.hidden;
    if(active&&!reducedMotion.matches&&time-lastEchoPaint<(innerWidth<=800?40:32)){echoFrame=requestAnimationFrame(drawEcho);return;}lastEchoPaint=time;
    const next=echoReduced ? .13 : 1;
    echoFade=reducedMotion.matches?next:echoFade+(next-echoFade)*.12;
    const opts={weights:[1],position:0,playing:false,reduced:reducedMotion.matches,dark:document.documentElement.dataset.theme==='dark',motionTime:reducedMotion.matches?0:(time-echoStarted)/1000};
    window.AltSIPWave.render(host.querySelector('.af-voice-wave'),{...opts,waves:[voiceWave],clean:1,accent:'#168d75'});
    window.AltSIPWave.render(host.querySelector('.af-return-wave'),{...opts,waves:[returnWave],clean:0});
    host.querySelector('.af-return-wave').style.opacity=String(echoFade);
    echoFrame=active&&!reducedMotion.matches?requestAnimationFrame(drawEcho):0;
  }
  function syncEcho(){
    cancelAnimationFrame(echoFrame);echoFrame=0;
    if(current!==5||!sectionVisible||document.hidden)return;
    if(!echoStarted)echoStarted=performance.now();
    echoFrame=requestAnimationFrame(drawEcho);
  }
  function mount(el,options={}){
    if(!el)return api;
    widgets.forEach(w=>w?.destroy?.());widgets=[];compactWidget=qualityWidget=numberWidget=conferenceWidget=null;
    clearTimeout(qualityTimer);resizeObserver?.disconnect();visibilityObserver?.disconnect();cancelAnimationFrame(echoFrame);
    document.removeEventListener('visibilitychange',syncActivity);reducedMotion.removeEventListener?.('change',syncEcho);
    host=el;host.classList.add('af-features');host.innerHTML=markup();track=host.querySelector('.af-track');
    locale=locales[options.lang]?options.lang:'en';copy=locales[locale];custom=options.copy||{};current=0;compactShown=true;echoReduced=false;qualityStep=0;echoStarted=0;echoFade=1;
    featureTheme=options.theme==='dark'?'dark':document.documentElement.dataset.theme==='dark'?'dark':'light';
    const bounds=host.getBoundingClientRect();sectionVisible=bounds.bottom>0&&bounds.top<innerHeight;
    updatePosition();mountCurrentWidget();
    applyNumber();
    paint();
    host.querySelector('[data-af-prev]').addEventListener('click',()=>go(-1));
    host.querySelector('[data-af-next]').addEventListener('click',()=>go(1));
    host.querySelector('.af-compact-toggle').addEventListener('click',toggleCompact);
    host.querySelector('.af-conference-replay').addEventListener('click',()=>{conferenceWidget?.preview?.('conference');requestAnimationFrame(fitWidgets);});
    host.querySelector('.af-echo-toggle').addEventListener('click',()=>{echoReduced=!echoReduced;host.querySelector('.af-echo-toggle').setAttribute('aria-pressed',String(echoReduced));paint();syncEcho();});
    host.querySelectorAll('.af-number-controls input').forEach(input=>input.addEventListener('change',applyNumber));
    host.querySelector('.af-viewport').addEventListener('keydown',e=>{if(e.target.closest('button,input,.sip-demo'))return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();go(e.key==='ArrowRight'?1:-1);}});
    let touchX=null,touchY=null;
    host.querySelector('.af-viewport').addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;touchY=e.changedTouches[0].clientY;},{passive:true});
    host.querySelector('.af-viewport').addEventListener('touchend',e=>{if(touchX===null)return;const dx=e.changedTouches[0].clientX-touchX,dy=e.changedTouches[0].clientY-touchY;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.3)go(dx<0?1:-1);touchX=null;},{passive:true});
    resizeObserver=new ResizeObserver(()=>fitWidgets());resizeObserver.observe(host);
    if('IntersectionObserver' in window){visibilityObserver=new IntersectionObserver(entries=>{sectionVisible=entries[0].isIntersecting;syncActivity();},{threshold:.1});visibilityObserver.observe(host);}
    document.addEventListener('visibilitychange',syncActivity);reducedMotion.addEventListener?.('change',syncEcho);
    syncActivity();
    return api;
  }
  const api={mount,setLocale(lang){locale=locales[lang]?lang:'en';copy=locales[locale];custom={};widgets.forEach(w=>w?.setLocale?.(locale));paint();requestAnimationFrame(fitWidgets);return api;},setTheme(theme){applyTheme(theme==='dark'?'dark':'light');return api;},updateCopy(next){custom=next||{};paint();return api;},copyKeys:Object.keys(en),defaults:locales};
  window.AltSIPFeatures=api;
})();
