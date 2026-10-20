/* Three product details for the home page. All motion is local to the visible card. */
(() => {
 'use strict';
 const translations = {
  ru:['Качество и настройки звонка','Три детали, которые помогают управлять разговором.','Качество связи','Оценка сети','Оценка во время звонка по потерям пакетов, джиттеру и задержке. Это не измерение качества речи.','Оценка сети · не анализ речи','Порядок кодеков','Приоритет и совместимость','Задайте приоритет вручную или позвольте AltSIP автоматически согласовать кодек с АТС. Новый порядок действует при следующем звонке.','Приоритет применяется к следующему звонку','Обработка номера','Подготовка к набору','Если этого требует ваша АТС, AltSIP уберёт пробелы и начальный + перед набором.','Пример правила для вашей АТС','Разговор','Потери','Джиттер','Задержка','Выше в списке — выше приоритет','Вызов','Убрать +','Убрать пробелы','Набрать','Автоматически или вручную'],
  en:['Call quality and settings','Three details that keep a call under control.','Call quality','Network estimate','Estimated during a call from packet loss, jitter and latency. This does not measure speech quality.','Network estimate · not speech analysis','Codec order','Priority and compatibility','Set priority manually or let AltSIP negotiate the codec with your PBX automatically. A new order applies on the next call.','Priority applies to the next call','Number processing','Ready to dial','If your PBX requires it, AltSIP removes spaces and a leading + before dialing.','An example rule for your PBX','Call','Loss','Jitter','Latency','Higher in the list means higher priority','Call','Remove +','Remove spaces','Dial','Automatic or manual'],
  uk:['Якість і налаштування дзвінка','Три деталі, що допомагають керувати розмовою.','Якість зв’язку','Оцінка мережі','Оцінка під час дзвінка за втратами пакетів, джитером і затримкою. Це не вимірювання якості мовлення.','Оцінка мережі · не аналіз мовлення','Порядок кодеків','Пріоритет і сумісність','Установіть пріоритет вручну або дозвольте AltSIP автоматично узгодити кодек з АТС. Новий порядок діє з наступного дзвінка.','Пріоритет діє з наступного дзвінка','Обробка номера','Підготовка до набору','Якщо цього потребує ваша АТС, AltSIP прибере пробіли й початковий + перед набором.','Приклад правила для вашої АТС','Розмова','Втрати','Джитер','Затримка','Вище у списку — вищий пріоритет','Виклик','Прибрати +','Прибрати пробіли','Набрати','Автоматично або вручну'],
  de:['Anrufqualität und Einstellungen','Drei Details für mehr Kontrolle im Gespräch.','Verbindungsqualität','Netzwerkschätzung','Während eines Anrufs aus Paketverlust, Jitter und Latenz geschätzt. Dies misst nicht die Sprachqualität.','Netzwerkschätzung · keine Sprachanalyse','Codec-Reihenfolge','Priorität und Kompatibilität','Legen Sie Prioritäten selbst fest oder lassen Sie AltSIP den Codec automatisch mit der Anlage aushandeln. Die neue Reihenfolge gilt ab dem nächsten Anruf.','Priorität gilt ab dem nächsten Anruf','Nummernverarbeitung','Bereit zum Wählen','Wenn Ihre Telefonanlage es verlangt, entfernt AltSIP Leerzeichen und ein führendes + vor dem Wählen.','Beispielregel für Ihre Telefonanlage','Gespräch','Verlust','Jitter','Latenz','Oben in der Liste bedeutet höhere Priorität','Anruf','+ entfernen','Leerzeichen entfernen','Wählen','Automatisch oder manuell'],
  fr:['Qualité et réglages des appels','Trois détails pour garder le contrôle de vos appels.','Qualité de l’appel','Estimation réseau','Estimation pendant l’appel à partir des pertes de paquets, de la gigue et de la latence. Elle ne mesure pas la qualité de la voix.','Estimation réseau · pas une analyse vocale','Ordre des codecs','Priorité et compatibilité','Définissez les priorités ou laissez AltSIP négocier le codec avec votre standard. Le nouvel ordre s’applique au prochain appel.','Priorité appliquée au prochain appel','Traitement du numéro','Prêt à composer','Si votre standard l’exige, AltSIP retire les espaces et le + initial avant de composer.','Exemple de règle pour votre standard','Appel','Pertes','Gigue','Latence','Plus haut dans la liste signifie plus prioritaire','Appel','Retirer +','Retirer les espaces','Composer','Automatique ou manuel'],
  es:['Calidad y ajustes de llamada','Tres detalles para mantener el control de cada llamada.','Calidad de llamada','Estimación de red','Estimación durante la llamada según pérdida de paquetes, fluctuación y latencia. No mide la calidad de la voz.','Estimación de red · no análisis de voz','Orden de códecs','Prioridad y compatibilidad','Define las prioridades o deja que AltSIP negocie el códec con tu central. El nuevo orden se aplica en la siguiente llamada.','La prioridad se aplica en la siguiente llamada','Procesamiento del número','Listo para marcar','Si tu central lo requiere, AltSIP elimina los espacios y el + inicial antes de marcar.','Ejemplo de regla para tu central','Llamada','Pérdida','Fluctuación','Latencia','Más arriba en la lista indica mayor prioridad','Llamar','Quitar +','Quitar espacios','Marcar','Automático o manual'],
  it:['Qualità e impostazioni della chiamata','Tre dettagli per gestire meglio ogni conversazione.','Qualità della chiamata','Stima della rete','Stimata durante la chiamata da perdita di pacchetti, jitter e latenza. Non misura la qualità della voce.','Stima della rete · non analisi vocale','Ordine dei codec','Priorità e compatibilità','Imposta le priorità o lascia che AltSIP negozi il codec con il centralino. Il nuovo ordine vale dalla prossima chiamata.','La priorità vale dalla prossima chiamata','Elaborazione del numero','Pronto a chiamare','Se il centralino lo richiede, AltSIP rimuove gli spazi e il + iniziale prima della chiamata.','Regola di esempio per il centralino','Chiamata','Perdita','Jitter','Latenza','Più in alto significa maggiore priorità','Chiama','Rimuovi +','Rimuovi spazi','Componi','Automatico o manuale'],
  pl:['Jakość i ustawienia połączeń','Trzy szczegóły, które pomagają prowadzić rozmowę.','Jakość połączenia','Ocena sieci','Ocena podczas rozmowy na podstawie utraty pakietów, jittera i opóźnienia. Nie mierzy jakości mowy.','Ocena sieci · nie analiza mowy','Kolejność kodeków','Priorytet i zgodność','Ustaw priorytety ręcznie albo pozwól AltSIP automatycznie uzgodnić kodek z centralą. Nowa kolejność działa od następnego połączenia.','Priorytet działa od następnego połączenia','Przetwarzanie numeru','Gotowy do wybrania','Jeśli wymaga tego centrala, AltSIP usuwa spacje i początkowy + przed wybraniem numeru.','Przykładowa reguła dla centrali','Rozmowa','Straty','Jitter','Opóźnienie','Wyżej na liście oznacza wyższy priorytet','Połącz','Usuń +','Usuń spacje','Wybierz','Automatycznie lub ręcznie'],
  pt:['Qualidade e definições da chamada','Três detalhes para manter o controlo da conversa.','Qualidade da chamada','Estimativa da rede','Estimativa durante a chamada a partir da perda de pacotes, jitter e latência. Não mede a qualidade da voz.','Estimativa da rede · não análise da voz','Ordem dos codecs','Prioridade e compatibilidade','Defina prioridades ou deixe o AltSIP negociar o codec com a sua central. A nova ordem aplica-se na chamada seguinte.','A prioridade aplica-se na chamada seguinte','Tratamento do número','Pronto a marcar','Se a sua central o exigir, o AltSIP remove espaços e o + inicial antes de marcar.','Exemplo de regra para a sua central','Chamada','Perda','Jitter','Latência','Mais acima na lista significa maior prioridade','Ligar','Remover +','Remover espaços','Marcar','Automático ou manual']
 };
 const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
 const icons = [
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 13.5v-3l3-1.3 2.3 3 2.3-1.8 2.7 2.7 2.1-1.2 2.1 2.4 3.5-2.2"/><path d="M3 18h18"/></svg>',
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="11" cy="18" r="2"/></svg>',
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v14H5zM8 9h8M8 13h8M8 17h5"/></svg>'
 ];
 let serial = 0;
 function mount(host, {lang='en',active:initialActive=true}={}) {
  if (!host || typeof host.innerHTML !== 'string') throw new TypeError('AltSIPProductDetails.mount requires a DOM host');
  const id = `pd-${++serial}`;
  const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const compact = window.matchMedia?.('(max-width: 900px)');
  let locale = translations[lang] ? lang : 'en';
  let selected = 0, active = Boolean(initialActive), inView = false, destroyed = false, timer = 0, graphTimer = 0, graphRaf = 0;
  let observer, qualityStep = 0, seconds = 86, codecStep = 0, numberStep = 0;
  let sample = [3.55,3.64,3.48,3.73,3.68,3.83,3.71,3.96,3.87,4.06,4.01,4.14];
  let graphFrom=sample.slice(), graphTo=null, graphFrame=0, graphRefs;
  const codecAnimations=new Set();
  const query = selector => host.querySelector(selector);
  const canRun = () => active && inView && !document.hidden && !media?.matches && !destroyed;
  const canGraph = () => canRun() && (!compact?.matches || selected===0);
  const schedule = delay => { if (canRun() && !timer) timer = window.setTimeout(tick, delay); };
  function stop() {
   if (timer) window.clearTimeout(timer); timer=0;
   if (graphTimer) window.clearTimeout(graphTimer); graphTimer=0;
   if (graphRaf) window.cancelAnimationFrame(graphRaf); graphRaf=0;
   codecAnimations.forEach(animation=>animation.pause());
  }
  function refresh() {
   stop(); host.classList.toggle('pd-running', canRun());
   if (canRun()) {
    codecAnimations.forEach(animation=>animation.play());
    if (canGraph()) scheduleGraph();
    if (selected!==0) schedule(selected===1?3600:260);
   }
  }
  function qualityValue(step) {
   const loss = [0.1,0.4,0.7,1.1,1.8,2.2,2.7,3.1,3.8,4.3,4.8,5.2][step%12];
   const jitter = [4,8,11,13,16,20,23,26,29,33,35,39][(step*5)%12];
   const rtt = [32,45,57,64,79,91,103,118,136,148,169,184][(step*7)%12];
   const mos = Math.max(3.2,Math.min(4.5,4.52-loss*.16-jitter*.009-rtt*.002));
   return {mos:+mos.toFixed(1),loss:loss.toFixed(1),jitter,rtt};
  }
  function graph(values=sample) {
   const path = values.map((v,i) => `${i?'L':'M'}${(i*32.7).toFixed(1)} ${(108-(v-3.0)*57).toFixed(1)}`).join(' ');
   const area = `${path} L360 110 L0 110 Z`;
   graphRefs?.line.setAttribute('d',path);
   graphRefs?.area.setAttribute('d',area);
   if (graphRefs?.dot) {
    const value=values.at(-1);
    graphRefs.dot.setAttribute('cx','360'); graphRefs.dot.setAttribute('cy',(108-(value-3)*57).toFixed(1));
    const tone=value<3.7?'#a48c5d':value<4.1?'#5e8b78':'#427772';
    graphRefs.dot.style.fill=tone; graphRefs.line.style.stroke=tone; graphRefs.status.style.color=tone;
   }
  }
  function scheduleGraph() {
   if (!canGraph() || graphTimer || graphRaf) return;
   graphTimer=window.setTimeout(()=>{graphTimer=0;graphRaf=window.requestAnimationFrame(graphTick);},40);
  }
  function graphTick() {
   graphRaf=0; if (!canGraph()) return;
   if (!graphTo) {
    graphFrom=sample.slice(); qualityStep++;
    const q=qualityValue(qualityStep);
    graphTo=[...sample.slice(1),q.mos];
    query('.pd-loss').textContent=`${q.loss}%`;
    query('.pd-jitter').textContent=`${q.jitter} ms`;
    query('.pd-rtt').textContent=`${q.rtt} ms`;
   }
   graphFrame++;
   const mix=Math.min(1,graphFrame/30), smooth=mix*mix*(3-2*mix);
   const values=graphFrom.map((v,i)=>v+(graphTo[i]-v)*smooth);
   graph(values);
   query('.pd-mos-value').textContent=values.at(-1).toFixed(1);
   if (graphFrame%25===0) {
    seconds++;
    query('.pd-timer').textContent=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
   }
   if (graphFrame>=30) {sample=graphTo;graphTo=null;graphFrame=0;}
   scheduleGraph();
  }
  function reorderCodecs() {
   const list=query('.pd-codec-list'); if (!list) return;
   const rows=[...list.children];
   const old=new Map(rows.map(row=>[row.dataset.codec,row.getBoundingClientRect().top]));
   codecStep++;
   const order = [['Opus','G.722','G.711'],['G.722','Opus','G.711'],['Opus','G.711','G.722']][codecStep%3];
   order.forEach((name,i)=>{const row=rows.find(r=>r.dataset.codec===name);row.querySelector('.pd-rank').textContent=String(i+1).padStart(2,'0');list.append(row);});
   if (!media?.matches) rows.forEach(row=>{
    const delta=old.get(row.dataset.codec)-row.getBoundingClientRect().top;
    if (delta && row.animate) {
     const animation=row.animate([{transform:`translateY(${delta}px)`},{transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.22,1,.36,1)'});
     codecAnimations.add(animation);
     animation.onfinish=()=>codecAnimations.delete(animation);
     animation.oncancel=()=>codecAnimations.delete(animation);
    }
   });
  }
  function updateNumber() {
   const source='+1 202 555 0142', scene=query('.pd-number-scene'); if (!scene) return;
   numberStep=(numberStep+1)%22;
   const typed=query('.pd-number-typed');
   if (numberStep<=9) {scene.dataset.phase='entry';typed.textContent=source.slice(0,Math.ceil(numberStep*source.length/9));}
   else if (numberStep<=11) {scene.dataset.phase='dial';typed.textContent=source;}
   else if (numberStep<=14) scene.dataset.phase='strip';
   else if (numberStep<=18) scene.dataset.phase='join';
   else scene.dataset.phase='ready';
  }
  function tick() {
   timer=0; if (!canRun()) return;
   if (selected===1) {reorderCodecs(); schedule(3600);}
   else {updateNumber(); schedule(numberStep<=11?145:480);}
  }
  function setSelected(index) {
   if (destroyed || index<0 || index>2 || index===selected) return;
   selected=index;
   host.querySelectorAll('.pd-card').forEach((card,i)=>{
    const open=i===selected;
    card.dataset.open=String(open);
    card.querySelector('.pd-card-button').setAttribute('aria-expanded',String(open));
    card.querySelector('.pd-card-content').setAttribute('aria-hidden',String(!open));
   });
   refresh();
  }
  function markup() {
   const t=translations[locale];
   const cards=[0,1,2].map(i=>{
    const at=2+i*4;
   const art=i===0?`<div class="pd-quality-scene"><div class="pd-call-bar"><span class="pd-call-indicator" aria-hidden="true">↗</span><span class="pd-timer">01:26</span><span class="pd-call-number">+1 202 555 0142</span><span class="pd-mos-pill">MOS <b class="pd-mos-value">4.2</b></span></div><div class="pd-plot"><svg viewBox="0 0 360 118" preserveAspectRatio="none" aria-hidden="true"><path class="pd-graph-grid" d="M0 22H360 M0 55H360 M0 88H360"/><path class="pd-graph-area"/><path class="pd-graph-line"/><circle class="pd-graph-dot" r="4"/></svg><div class="pd-plot-axis"><span>00:00</span><span>00:30</span><span>01:00</span><span>01:26</span></div></div><div class="pd-network-stats"><span>${escape(t[15])} <b class="pd-loss">0.1%</b></span><span>${escape(t[16])} <b class="pd-jitter">4 ms</b></span><span>${escape(t[17])} <b class="pd-rtt">32 ms</b></span></div></div>`:
     i===1?`<div class="pd-codec-scene"><div class="pd-codec-list"><div class="pd-codec-row" data-codec="Opus"><span class="pd-rank">01</span><b>Opus</b><span class="pd-codec-bars" aria-hidden="true"><i></i><i></i><i></i></span></div><div class="pd-codec-row" data-codec="G.722"><span class="pd-rank">02</span><b>G.722</b><span class="pd-codec-bars" aria-hidden="true"><i></i><i></i><i></i></span></div><div class="pd-codec-row" data-codec="G.711"><span class="pd-rank">03</span><b>G.711</b><span class="pd-codec-bars" aria-hidden="true"><i></i><i></i><i></i></span></div></div><div class="pd-codec-foot"><span class="pd-codec-status"></span>${escape(t[23])}</div></div>`:
     `<div class="pd-number-scene" data-phase="entry"><div class="pd-number-field"><span class="pd-number-typed">+1 202 555 0142</span><span class="pd-caret" aria-hidden="true"></span></div><div class="pd-call-action"><span class="pd-call-glyph" aria-hidden="true">↗</span>${escape(t[19])}</div><div class="pd-number-tokens" aria-hidden="true"><span class="pd-token-plus">+</span><span>1</span><span>202</span><span>555</span><span>0142</span></div><div class="pd-number-process"><span class="pd-process-step">${escape(t[20])}</span><span class="pd-process-arrow" aria-hidden="true">→</span><span class="pd-process-step">${escape(t[21])}</span><span class="pd-process-arrow" aria-hidden="true">→</span><span class="pd-process-step">${escape(t[22])}</span></div><div class="pd-number-result"><span>12025550142</span><span class="pd-result-check" aria-hidden="true">✓</span></div></div>`;
    return `<article class="pd-card" data-pd-card="${i}" data-open="${i===selected}"><button class="pd-card-button" type="button" aria-expanded="${i===selected}" aria-controls="${id}-panel-${i}" data-pd-select="${i}"><span class="pd-card-symbol">${icons[i]}</span><span class="pd-card-label"><strong>${escape(t[at])}</strong><small>${escape(t[at+1])}</small></span><span class="pd-card-arrow" aria-hidden="true">↗</span></button><div class="pd-card-content" id="${id}-panel-${i}" aria-hidden="${i!==selected}"><div class="pd-card-art">${art}</div><div class="pd-card-copy"><p>${escape(t[at+2])}</p><small>${escape(t[at+3])}</small></div></div></article>`;
   }).join('');
   return `<section class="pd-section" aria-labelledby="${id}-heading"><div class="pd-heading"><h2 id="${id}-heading">${escape(t[0])}</h2></div><div class="pd-grid">${cards}</div></section>`;
  }
  function render() {
   stop(); codecAnimations.forEach(animation=>animation.cancel());codecAnimations.clear(); if (observer) observer.disconnect();
   numberStep=0;
   host.innerHTML=markup();
   graphRefs={line:query('.pd-graph-line'),area:query('.pd-graph-area'),dot:query('.pd-graph-dot'),status:query('.pd-mos-pill')};graph(graphTo?graphFrom.map((v,i)=>v+(graphTo[i]-v)*(graphFrame/30)):sample);
   if (typeof window.IntersectionObserver==='function') {
    observer=new window.IntersectionObserver(entries=>{inView=entries.some(entry=>entry.isIntersecting);refresh();},{threshold:0.06});
    observer.observe(query('.pd-section'));
   } else {inView=true;refresh();}
  }
  function onClick(event) { const button=event.target.closest?.('[data-pd-select]'); if (button && host.contains(button)) setSelected(Number(button.dataset.pdSelect)); }
  function onFocus(event) {const card=event.target.closest?.('[data-pd-card]');if(card && host.contains(card))setSelected(Number(card.dataset.pdCard));}
  function onPointer(event) {if(window.matchMedia?.('(hover: hover)').matches){const card=event.target.closest?.('[data-pd-card]');if(card&&host.contains(card))setSelected(Number(card.dataset.pdCard));}}
  function onVisibility() {refresh();}
  host.addEventListener('click',onClick);host.addEventListener('focusin',onFocus);host.addEventListener('pointerover',onPointer);
  document.addEventListener('visibilitychange',onVisibility);
  media?.addEventListener?.('change',onVisibility);
  compact?.addEventListener?.('change',onVisibility);
  render();
  return {
   setLocale(next) { if(!destroyed && translations[next] && next!==locale){locale=next;render();} },
   setActive(next) {active=Boolean(next);refresh();},
   destroy() {if(destroyed)return;destroyed=true;stop();codecAnimations.forEach(animation=>animation.cancel());codecAnimations.clear();observer?.disconnect();host.removeEventListener('click',onClick);host.removeEventListener('focusin',onFocus);host.removeEventListener('pointerover',onPointer);document.removeEventListener('visibilitychange',onVisibility);media?.removeEventListener?.('change',onVisibility);compact?.removeEventListener?.('change',onVisibility);host.innerHTML='';}
  };
 }
 window.AltSIPProductDetails={mount};
})();
