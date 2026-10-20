/* Three product details for the home page. All motion is local to the visible card. */
(() => {
 'use strict';
 const translations = {
  ru:['Качество и настройки звонка','Три детали, которые помогают управлять разговором.','Качество связи','Оценка сети','Оценка соединения по потерям пакетов, задержке и джиттеру. Показатель описывает сеть, а не звучание голоса.','Оценка сети · не анализ речи','Порядок кодеков','Приоритет и совместимость','Задайте приоритет вручную или позвольте AltSIP автоматически согласовать кодек с АТС. Новый порядок действует при следующем звонке.','Приоритет применяется к следующему звонку','Обработка номера','Подготовка к набору','Если этого требует ваша АТС, AltSIP уберёт пробелы и начальный + перед набором.','Пример правила для вашей АТС','Разговор','Потери','Джиттер','Задержка','Выше в списке — выше приоритет','Вызов','Убрать +','Убрать пробелы','Набрать','Автоматически или вручную'],
  en:['Call quality and settings','Three details that keep a call under control.','Call quality','Network estimate','The connection estimate uses packet loss, latency and jitter. It describes the network, not how the voice sounds.','Network estimate · not speech analysis','Codec order','Priority and compatibility','Set priority manually or let AltSIP negotiate the codec with your PBX automatically. A new order applies on the next call.','Priority applies to the next call','Number processing','Ready to dial','If your PBX requires it, AltSIP removes spaces and a leading + before dialing.','An example rule for your PBX','Call','Loss','Jitter','Latency','Higher in the list means higher priority','Call','Remove +','Remove spaces','Dial','Automatic or manual'],
  uk:['Якість і налаштування дзвінка','Три деталі, що допомагають керувати розмовою.','Якість зв’язку','Оцінка мережі','Оцінка з’єднання за втратами пакетів, затримкою та джитером. Показник описує мережу, а не звучання голосу.','Оцінка мережі · не аналіз мовлення','Порядок кодеків','Пріоритет і сумісність','Установіть пріоритет вручну або дозвольте AltSIP автоматично узгодити кодек з АТС. Новий порядок діє з наступного дзвінка.','Пріоритет діє з наступного дзвінка','Обробка номера','Підготовка до набору','Якщо цього потребує ваша АТС, AltSIP прибере пробіли й початковий + перед набором.','Приклад правила для вашої АТС','Розмова','Втрати','Джитер','Затримка','Вище у списку — вищий пріоритет','Виклик','Прибрати +','Прибрати пробіли','Набрати','Автоматично або вручну'],
  de:['Anrufqualität und Einstellungen','Drei Details für mehr Kontrolle im Gespräch.','Verbindungsqualität','Netzwerkschätzung','Die Verbindung wird anhand von Paketverlust, Latenz und Jitter bewertet. Der Wert beschreibt das Netz, nicht den Klang der Stimme.','Netzwerkschätzung · keine Sprachanalyse','Codec-Reihenfolge','Priorität und Kompatibilität','Legen Sie Prioritäten selbst fest oder lassen Sie AltSIP den Codec automatisch mit der Anlage aushandeln. Die neue Reihenfolge gilt ab dem nächsten Anruf.','Priorität gilt ab dem nächsten Anruf','Nummernverarbeitung','Bereit zum Wählen','Wenn Ihre Telefonanlage es verlangt, entfernt AltSIP Leerzeichen und ein führendes + vor dem Wählen.','Beispielregel für Ihre Telefonanlage','Gespräch','Verlust','Jitter','Latenz','Oben in der Liste bedeutet höhere Priorität','Anruf','+ entfernen','Leerzeichen entfernen','Wählen','Automatisch oder manuell'],
  fr:['Qualité et réglages des appels','Trois détails pour garder le contrôle de vos appels.','Qualité de l’appel','Estimation réseau','La connexion est évaluée selon les pertes de paquets, la latence et la gigue. Cet indicateur décrit le réseau, pas le rendu de la voix.','Estimation réseau · pas une analyse vocale','Ordre des codecs','Priorité et compatibilité','Définissez les priorités ou laissez AltSIP négocier le codec avec votre standard. Le nouvel ordre s’applique au prochain appel.','Priorité appliquée au prochain appel','Traitement du numéro','Prêt à composer','Si votre standard l’exige, AltSIP retire les espaces et le + initial avant de composer.','Exemple de règle pour votre standard','Appel','Pertes','Gigue','Latence','Plus haut dans la liste signifie plus prioritaire','Appel','Retirer +','Retirer les espaces','Composer','Automatique ou manuel'],
  es:['Calidad y ajustes de llamada','Tres detalles para mantener el control de cada llamada.','Calidad de llamada','Estimación de red','La conexión se evalúa según la pérdida de paquetes, la latencia y la fluctuación. El indicador describe la red, no cómo suena la voz.','Estimación de red · no análisis de voz','Orden de códecs','Prioridad y compatibilidad','Define las prioridades o deja que AltSIP negocie el códec con tu central. El nuevo orden se aplica en la siguiente llamada.','La prioridad se aplica en la siguiente llamada','Procesamiento del número','Listo para marcar','Si tu central lo requiere, AltSIP elimina los espacios y el + inicial antes de marcar.','Ejemplo de regla para tu central','Llamada','Pérdida','Fluctuación','Latencia','Más arriba en la lista indica mayor prioridad','Llamar','Quitar +','Quitar espacios','Marcar','Automático o manual'],
  it:['Qualità e impostazioni della chiamata','Tre dettagli per gestire meglio ogni conversazione.','Qualità della chiamata','Stima della rete','La connessione è valutata in base a perdita di pacchetti, latenza e jitter. Il valore descrive la rete, non il suono della voce.','Stima della rete · non analisi vocale','Ordine dei codec','Priorità e compatibilità','Imposta le priorità o lascia che AltSIP negozi il codec con il centralino. Il nuovo ordine vale dalla prossima chiamata.','La priorità vale dalla prossima chiamata','Elaborazione del numero','Pronto a chiamare','Se il centralino lo richiede, AltSIP rimuove gli spazi e il + iniziale prima della chiamata.','Regola di esempio per il centralino','Chiamata','Perdita','Jitter','Latenza','Più in alto significa maggiore priorità','Chiama','Rimuovi +','Rimuovi spazi','Componi','Automatico o manuale'],
  pl:['Jakość i ustawienia połączeń','Trzy szczegóły, które pomagają prowadzić rozmowę.','Jakość połączenia','Ocena sieci','Ocena połączenia uwzględnia utratę pakietów, opóźnienie i jitter. Wskaźnik opisuje sieć, a nie brzmienie głosu.','Ocena sieci · nie analiza mowy','Kolejność kodeków','Priorytet i zgodność','Ustaw priorytety ręcznie albo pozwól AltSIP automatycznie uzgodnić kodek z centralą. Nowa kolejność działa od następnego połączenia.','Priorytet działa od następnego połączenia','Przetwarzanie numeru','Gotowy do wybrania','Jeśli wymaga tego centrala, AltSIP usuwa spacje i początkowy + przed wybraniem numeru.','Przykładowa reguła dla centrali','Rozmowa','Straty','Jitter','Opóźnienie','Wyżej na liście oznacza wyższy priorytet','Połącz','Usuń +','Usuń spacje','Wybierz','Automatycznie lub ręcznie'],
  pt:['Qualidade e definições da chamada','Três detalhes para manter o controlo da conversa.','Qualidade da chamada','Estimativa da rede','A ligação é avaliada pela perda de pacotes, latência e jitter. O indicador descreve a rede, não o som da voz.','Estimativa da rede · não análise da voz','Ordem dos codecs','Prioridade e compatibilidade','Defina prioridades ou deixe o AltSIP negociar o codec com a sua central. A nova ordem aplica-se na chamada seguinte.','A prioridade aplica-se na chamada seguinte','Tratamento do número','Pronto a marcar','Se a sua central o exigir, o AltSIP remove espaços e o + inicial antes de marcar.','Exemplo de regra para a sua central','Chamada','Perda','Jitter','Latência','Mais acima na lista significa maior prioridade','Ligar','Remover +','Remover espaços','Marcar','Automático ou manual']
 };
 const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
 const phone='<svg class="pd-phone" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2 C2 1 1 5 2.5 9 C5 16 10 21 17 22 C20 23 23 19 21 17 L17 14.5 Q16 14 14.5 16 Q9 14 7.5 9 L10 7 Q10 6 9 4.5 Z" fill="currentColor"/></svg>';
 const erase='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9L2 12zM12 9l6 6m0-6-6 6" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/></svg>';
 const codecNames=['Opus','G.722','G.711 μ-law','G.711 A-law'];
 const starting=[3.65,3.72,3.81,3.74,3.92,3.83,4.02,3.96,4.08,4.02,4.14,4.21];
 const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
 let serial=0;
 function mount(host,{lang='en',active:initialActive=true}={}) {
  if(!host||typeof host.innerHTML!=='string')throw new TypeError('AltSIPProductDetails.mount requires a DOM host');
  const id=`pd-${++serial}`;
  const media=window.matchMedia?.('(prefers-reduced-motion: reduce)');
  let locale=translations[lang]?lang:'en',selected=0,active=Boolean(initialActive),inView=false,destroyed=false;
  let timer=0,graphTimer=0,observer,codecStep=0,numberStep=0;
  let lastGraphTime=null,graphElapsed=0,visibleElapsed=0,from=starting.slice(),to=[...starting.slice(1),4.28],sample=starting.slice(),qualityStep=0;
  const animations=new Set();
  const query=selector=>host.querySelector(selector);
  const canRun=()=>active&&inView&&!document.hidden&&!media?.matches&&!destroyed;
  const later=(fn,delay)=>window.setTimeout(fn,delay);
  function clearMotion(){
   if(timer)window.clearTimeout(timer);timer=0;
   if(graphTimer)window.clearTimeout(graphTimer);graphTimer=0;
   animations.forEach(animation=>animation.pause?.());
  }
  function refresh(){
   clearMotion();
   host.classList.toggle('pd-running',canRun());
   if(canRun()){
    animations.forEach(animation=>animation.play?.());
    if(selected===0){lastGraphTime=null;graphTimer=later(graphTick,34);}
    else timer=later(sceneTick,selected===1?3500:350);
   }
  }
  function measure(step){
   const loss=[.1,.3,.5,.8,1.1,1.4,1.8,1.2,.7,.4][step%10];
   const jitter=[4,6,9,12,16,21,25,18,11,7][step%10];
   const rtt=[32,38,47,59,74,89,112,91,61,43][step%10];
   const mos=clamp(4.47-loss*.17-jitter*.009-rtt*.0015,3.2,4.5);
   return {loss,jitter,rtt,mos:+mos.toFixed(2)};
  }
  function curve(values){
   const point=i=>({x:i*360/(values.length-1),y:113-(values[i]-3)*70});
   let path='',area='';
   for(let i=0;i<values.length;i++){
    const p=point(i);
    if(!i){path=`M${p.x.toFixed(2)} ${p.y.toFixed(2)}`;continue;}
    const a=point(Math.max(0,i-2)),b=point(i-1),c=p,d=point(Math.min(values.length-1,i+1));
    const c1x=b.x+(c.x-a.x)/6,c1y=b.y+(c.y-a.y)/6,c2x=c.x-(d.x-b.x)/6,c2y=c.y-(d.y-b.y)/6;
    path+=` C${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(2)} ${c.x.toFixed(2)} ${c.y.toFixed(2)}`;
   }
   area=`${path} L360 116 L0 116 Z`;
   const value=values.at(-1),tone=value<3.7?'#cf757c':value<4.03?'#deb870':'#37b287';
   query('.pd-graph-line')?.setAttribute('d',path);
   query('.pd-graph-area')?.setAttribute('d',area);
   const dot=query('.pd-graph-dot');if(dot){dot.setAttribute('cx','360');dot.setAttribute('cy',(113-(value-3)*70).toFixed(2));dot.style.fill=tone;}
   const status=query('.pd-quality-dot');if(status)status.style.background=tone;
   const line=query('.pd-graph-line');if(line)line.style.stroke=tone;
   const number=query('.pd-mos-value');if(number)number.textContent=value.toFixed(1);
  }
  function graphTick(){
   graphTimer=0;if(!canRun())return;
   const now=window.performance?.now?.()??Date.now();
   const delta=lastGraphTime===null?0:Math.max(0,now-lastGraphTime);
   lastGraphTime=now;graphElapsed+=delta;visibleElapsed+=delta;
   const periods=Math.floor(graphElapsed/1700);
   if(periods){
    graphElapsed%=1700;from=to.slice();qualityStep+=periods;
    const q=measure(qualityStep);
    to=[...from.slice(1),q.mos];
    const loss=query('.pd-loss'),jitter=query('.pd-jitter'),rtt=query('.pd-rtt');
    if(loss)loss.textContent=`${q.loss.toFixed(1)}%`;
    if(jitter)jitter.textContent=`${q.jitter} ms`;
    if(rtt)rtt.textContent=`${q.rtt} ms`;
   }
   const seconds=86+Math.floor(visibleElapsed/1000);
   const clock=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
   const display=query('.pd-timer');if(display)display.textContent=clock;
   const axis=query('.pd-plot-axis span:last-child');if(axis)axis.textContent=clock;
   const p=graphElapsed/1700,ease=p*p*(3-2*p);
   sample=from.map((value,i)=>value+(to[i]-value)*ease);
   curve(sample);
   graphTimer=later(graphTick,34);
  }
  function reorder(){
   const list=query('.pd-codec-list');if(!list?.children)return;
   const rows=[...list.children],old=new Map(rows.map(row=>[row.dataset.codec,row.getBoundingClientRect().top]));
   codecStep++;
   const orders=[
    ['Opus','G.722','G.711 μ-law','G.711 A-law'],
    ['G.722','Opus','G.711 μ-law','G.711 A-law'],
    ['Opus','G.711 μ-law','G.722','G.711 A-law'],
    ['Opus','G.722','G.711 A-law','G.711 μ-law']
   ];
   orders[codecStep%orders.length].forEach(name=>{const row=rows.find(item=>item.dataset.codec===name);if(row)list.append(row);});
   if(media?.matches)return;
   rows.forEach(row=>{
    const offset=old.get(row.dataset.codec)-row.getBoundingClientRect().top;
    if(!offset||!row.animate)return;
    const animation=row.animate([{transform:`translateY(${offset}px)`},{transform:'translateY(0)'}],{duration:820,easing:'cubic-bezier(.2,.8,.2,1)'});
    animations.add(animation);
    animation.onfinish=animation.oncancel=()=>animations.delete(animation);
   });
  }
  function numberScene(){
   const scene=query('.pd-number-scene');if(!scene)return;
   numberStep=(numberStep+1)%15;
   scene.dataset.phase=numberStep<3?'source':numberStep<6?'strip':numberStep<8?'join':numberStep<11?'ready':'dial';
   const target=query('.pd-number-target input');
   if(target)target.value=numberStep>=8?'12025550142':'';
  }
  function sceneTick(){
   timer=0;if(!canRun())return;
   if(selected===1){reorder();timer=later(sceneTick,3500);}
   else if(selected===2){numberScene();timer=later(sceneTick,numberStep===0?1300:520);}
  }
  function select(index){
   if(destroyed||index<0||index>2||index===selected)return;
   animations.forEach(animation=>animation.cancel?.());animations.clear();
   selected=index;
   host.querySelectorAll('.pd-card').forEach((card,i)=>{
    const open=i===index;
    card.dataset.open=String(open);
    card.querySelector('.pd-card-button').setAttribute('aria-expanded',String(open));
    card.querySelector('.pd-card-content').setAttribute('aria-hidden',String(!open));
   });
   refresh();
  }
  function markup(){
   const t=translations[locale];
   const quality=`<div class="pd-quality-scene"><div class="pd-native-call"><div class="pd-call-meta"><span class="pd-quality-dot" aria-hidden="true"></span><span class="pd-timer">01:26</span></div><div class="pd-native-number"><input type="tel" value="+1 202 555 0142" readonly tabindex="-1" aria-label="${escape(t[14])}"><span class="pd-native-erase" aria-hidden="true">${erase}</span></div></div><div class="pd-plot"><div class="pd-plot-value">MOS <b class="pd-mos-value">4.2</b></div><svg viewBox="-6 0 372 116" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="${id}-fill" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#37b287" stop-opacity=".26"/><stop offset="1" stop-color="#37b287" stop-opacity="0"/></linearGradient></defs><path class="pd-graph-grid" d="M0 18H360 M0 50H360 M0 82H360 M0 114H360"/><path class="pd-graph-area" fill="url(#${id}-fill)"/><path class="pd-graph-line"/><circle class="pd-graph-dot" r="4"/></svg><div class="pd-plot-axis"><span>00:00</span><span>00:30</span><span>01:00</span><span>01:26</span></div></div><div class="pd-network-stats"><span>${escape(t[15])}<b class="pd-loss">0.1%</b></span><span>${escape(t[16])}<b class="pd-jitter">4 ms</b></span><span>${escape(t[17])}<b class="pd-rtt">32 ms</b></span></div></div>`;
   const codec=`<div class="pd-codec-scene"><div class="pd-codec-list">${codecNames.map(name=>`<div class="pd-codec-row" data-codec="${escape(name)}"><span class="pd-grip" aria-hidden="true">⋮⋮</span><span class="pd-codec-name"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 12 5 5 11-11" fill="none" stroke="currentColor" stroke-width="2"/></svg>${escape(name)}</span><span class="pd-codec-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 15 6-6 6 6"/></svg></span><span class="pd-codec-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></span></div>`).join('')}</div></div>`;
   const number=`<div class="pd-number-scene" data-phase="source"><div class="pd-number-source pd-native-number"><input type="tel" value="+1 202 555 0142" readonly tabindex="-1" aria-label="${escape(t[10])}"><span class="pd-native-erase" aria-hidden="true">${erase}</span></div><div class="pd-number-flow" aria-hidden="true"><div class="pd-flow-tokens"><span class="pd-discard">+</span><span class="pd-keep">1</span><span class="pd-discard"> </span><span class="pd-keep">202</span><span class="pd-discard"> </span><span class="pd-keep">555</span><span class="pd-discard"> </span><span class="pd-keep">0142</span></div><svg class="pd-flow-path" viewBox="0 0 320 82" preserveAspectRatio="none"><path d="M20 3 C20 48 84 23 93 78 M82 3 C82 48 119 23 128 78 M160 3 C160 48 159 23 160 78 M236 3 C236 48 203 23 193 78 M302 3 C302 48 244 23 226 78"/></svg></div><div class="pd-number-target pd-native-number"><input type="tel" value="" readonly tabindex="-1" aria-label="${escape(t[11])}"><span class="pd-native-erase" aria-hidden="true">${erase}</span></div><div class="pd-call-row"><button class="pd-call-action" type="button" tabindex="-1">${phone}<span>${escape(t[19])}</span></button></div></div>`;
   const arts=[quality,codec,number];
   const cards=arts.map((art,i)=>{
    const at=2+i*4;
    return `<article class="pd-card" data-pd-card="${i}" data-open="${i===selected}"><button class="pd-card-button" type="button" aria-expanded="${i===selected}" aria-controls="${id}-panel-${i}" data-pd-select="${i}"><span class="pd-card-label"><strong>${escape(t[at])}</strong><small>${escape(t[at+1])}</small></span></button><div class="pd-card-content" id="${id}-panel-${i}" aria-hidden="${i!==selected}"><div class="pd-card-art">${art}</div><div class="pd-card-copy"><p>${escape(t[at+2])}</p></div></div></article>`;
   }).join('');
   return `<section class="pd-section" aria-labelledby="${id}-heading"><div class="pd-heading"><h2 id="${id}-heading">${escape(t[0])}</h2></div><div class="pd-grid">${cards}</div></section>`;
  }
  function render(){
   clearMotion();animations.forEach(animation=>animation.cancel?.());animations.clear();observer?.disconnect();
   numberStep=0;host.innerHTML=markup();curve(sample);
   if(media?.matches){const scene=query('.pd-number-scene'),target=query('.pd-number-target input');if(scene)scene.dataset.phase='ready';if(target)target.value='12025550142';}
   if(typeof window.IntersectionObserver==='function'){
    observer=new window.IntersectionObserver(entries=>{inView=entries.some(entry=>entry.isIntersecting);refresh();},{threshold:.06});
    observer.observe(query('.pd-section'));
   }else{inView=true;refresh();}
  }
  function onClick(event){const button=event.target.closest?.('[data-pd-select]');if(button&&host.contains(button))select(Number(button.dataset.pdSelect));}
  function onFocus(event){const card=event.target.closest?.('[data-pd-card]');if(card&&host.contains(card))select(Number(card.dataset.pdCard));}
  function onPointer(event){if(window.matchMedia?.('(hover: hover)').matches){const card=event.target.closest?.('[data-pd-card]');if(card&&host.contains(card))select(Number(card.dataset.pdCard));}}
  host.addEventListener('click',onClick);host.addEventListener('focusin',onFocus);host.addEventListener('pointerover',onPointer);
  const onVisibility=()=>refresh();
  document.addEventListener('visibilitychange',onVisibility);media?.addEventListener?.('change',onVisibility);
  render();
  return {
   setLocale(next){if(!destroyed&&translations[next]&&next!==locale){locale=next;render();}},
   setActive(next){active=Boolean(next);refresh();},
   destroy(){if(destroyed)return;destroyed=true;clearMotion();animations.forEach(animation=>animation.cancel?.());animations.clear();observer?.disconnect();host.removeEventListener('click',onClick);host.removeEventListener('focusin',onFocus);host.removeEventListener('pointerover',onPointer);document.removeEventListener('visibilitychange',onVisibility);media?.removeEventListener?.('change',onVisibility);host.innerHTML='';}
  };
 }
 window.AltSIPProductDetails={mount};
})();
