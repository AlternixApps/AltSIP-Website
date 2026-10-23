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
 const hangup='<svg class="pd-hangup" viewBox="0 0 24 24" aria-hidden="true"><path d="M1 12 C3 6 21 6 23 12 Q24 14 22 16 Q21 17 18 15 L17 12.5 Q12 11 7 12.5 L6 15 Q3 17 2 16 Q0 14 1 12 Z" fill="currentColor" stroke="none"/></svg>';
 const erase='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9L2 12zM12 9l6 6m0-6-6 6" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/></svg>';
 const codecNames=['Opus','G.722','G.711 μ-law','G.711 A-law','G.729'];
 const hangupLabels={ru:'Завершить',en:'End call',uk:'Завершити',de:'Auflegen',fr:'Raccrocher',es:'Colgar',it:'Termina chiamata',pl:'Zakończ',pt:'Desligar'};
 const starting=[3.65,3.72,3.81,3.74,3.92,3.83,4.02,3.96,4.08,4.02,4.14,4.21];
 const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
 let serial=0;
 function mount(host,{lang='en',active:initialActive=true}={}) {
  if(!host||typeof host.innerHTML!=='string')throw new TypeError('AltSIPProductDetails.mount requires a DOM host');
  const id=`pd-${++serial}`;
  const media=window.matchMedia?.('(prefers-reduced-motion: reduce)');
 const mobile=window.matchMedia?.('(max-width: 900px)');
  let locale=translations[lang]?lang:'en',selected=0,active=Boolean(initialActive),inView=false,destroyed=false;
 let graphTimer=0,codecTimer=0,numberTimer=0,observer,resizeObserver,codecStep=0,numberStep=0,sceneDeadline=0,sceneRemaining=null,callingElapsed=0,callingStartedAt=0;
  let lastGraphTime=null,graphElapsed=0,visibleElapsed=0,history=starting.slice(),previousValue=3.58,nextValue=4.28,qualityStep=0;
  const animations=new Set();
  const query=selector=>host.querySelector(selector);
  const canRun=()=>active&&inView&&!document.hidden&&!media?.matches&&!destroyed;
  const later=(fn,delay)=>window.setTimeout(fn,delay);
  const clockNow=()=>window.performance?.now?.()??Date.now();
  function scheduleNumber(delay){sceneDeadline=clockNow()+delay;sceneRemaining=null;numberTimer=later(numberTick,delay);}
  function clearMotion(){
   if(callingStartedAt){callingElapsed+=Math.max(0,clockNow()-callingStartedAt);callingStartedAt=0;}
   if(codecTimer)window.clearTimeout(codecTimer);codecTimer=0;
   if(numberTimer){if(sceneDeadline)sceneRemaining=Math.max(0,sceneDeadline-clockNow());window.clearTimeout(numberTimer);}numberTimer=0;sceneDeadline=0;
   if(graphTimer)window.clearTimeout(graphTimer);graphTimer=0;
   animations.forEach(animation=>animation.pause?.());
  }
  function refresh(){
   clearMotion();
   host.classList.toggle('pd-running',canRun());
   if(canRun()){
    animations.forEach(animation=>animation.play?.());
    lastGraphTime=null;
    graphTimer=later(graphTick,34);
    codecTimer=later(codecTick,650);
    scheduleNumber(sceneRemaining??numberStages[numberStep].delay);
    if(numberStages[numberStep].phase==='calling')callingStartedAt=clockNow();
   }
  }
  function measure(step){
   const loss=[.1,.3,.5,.8,1.1,1.4,1.8,1.2,.7,.4][step%10];
   const jitter=[4,6,9,12,16,21,25,18,11,7][step%10];
   const rtt=[32,38,47,59,74,89,112,91,61,43][step%10];
   const mos=clamp(4.47-loss*.17-jitter*.009-rtt*.0015,3.2,4.5);
   return {loss,jitter,rtt,mos:+mos.toFixed(2)};
  }
  function curve(values,progress=0,incoming=values.at(-1)){
   const spacing=360/(values.length-1),future=measure(qualityStep+1).mos;
   const sample=(a,b,before,after,t)=>{
    const m0=(b-before)/2,m1=(after-a)/2,t2=t*t,t3=t2*t;
    return {value:(2*t3-3*t2+1)*a+(t3-2*t2+t)*m0+(-2*t3+3*t2)*b+(t3-t2)*m1,
     slope:((6*t2-6*t)*a+(3*t2-4*t+1)*m0+(-6*t2+6*t)*b+(3*t2-2*t)*m1)/spacing};
   };
   const left=sample(values[0],values[1],previousValue,values[2],progress);
   const right=sample(values.at(-1),incoming,values.at(-2),future,progress);
   const points=[{x:0,value:left.value,slope:left.slope}];
   for(let i=1;i<values.length;i++){
    const x=(i-progress)*spacing;
    if(x>0&&x<360)points.push({x,value:values[i],slope:((i===values.length-1?incoming:values[i+1])-values[i-1])/(2*spacing)});
   }
   points.push({x:360,value:right.value,slope:right.slope});
   const y=value=>113-(value-3)*70;
   let path=`M0.00 ${y(points[0].value).toFixed(2)}`;
   for(let i=1;i<points.length;i++){
    const a=points[i-1],b=points[i],width=b.x-a.x;
    path+=` C${(a.x+width/3).toFixed(2)} ${(y(a.value)-a.slope*70*width/3).toFixed(2)} ${(b.x-width/3).toFixed(2)} ${(y(b.value)+b.slope*70*width/3).toFixed(2)} ${b.x.toFixed(2)} ${y(b.value).toFixed(2)}`;
   }
   const area=`${path} L360 116 L0 116 Z`;
   const value=right.value,tone=value<3.7?'#cf757c':value<4.03?'#deb870':'#37b287';
   query('.pd-graph-line')?.setAttribute('d',path);
   query('.pd-graph-area')?.setAttribute('d',area);
   const dot=query('.pd-graph-dot');if(dot){dot.style.top=`${((113-(value-3)*70)/116*100).toFixed(3)}%`;dot.style.background=tone;}
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
    graphElapsed%=1700;
    let q;
    for(let i=0;i<periods;i++){
     previousValue=history[0];history=[...history.slice(1),nextValue];
     q=measure(++qualityStep);
     nextValue=q.mos;
    }
    const loss=query('.pd-loss'),jitter=query('.pd-jitter'),rtt=query('.pd-rtt');
    if(loss)loss.textContent=`${q.loss.toFixed(1)}%`;
    if(jitter)jitter.textContent=`${q.jitter} ms`;
    if(rtt)rtt.textContent=`${q.rtt} ms`;
   }
   const seconds=86+Math.floor(visibleElapsed/1000);
   const clock=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
   const display=query('.pd-timer');if(display)display.textContent=clock;
   const axis=query('.pd-plot-axis span:last-child');if(axis)axis.textContent=clock;
   if(numberStages[numberStep].phase==='calling'){
    const seconds=Math.min(3,Math.floor((callingElapsed+(callingStartedAt?clockNow()-callingStartedAt:0))/1000));
    const callTimer=query('.pd-call-timer');if(callTimer)callTimer.textContent=`00:0${seconds}`;
   }
   curve(history,graphElapsed/1700,nextValue);
   graphTimer=later(graphTick,34);
  }
  function reorder(){
   const list=query('.pd-codec-list');if(!list?.children)return;
   const rows=[...list.children],old=new Map(rows.map(row=>[row.dataset.codec,row.getBoundingClientRect().top]));
   codecStep++;
   const orders=[
    ['Opus','G.722','G.711 μ-law','G.711 A-law','G.729'],
    ['G.722','Opus','G.729','G.711 μ-law','G.711 A-law'],
    ['Opus','G.729','G.711 μ-law','G.722','G.711 A-law'],
    ['G.729','Opus','G.722','G.711 A-law','G.711 μ-law']
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
  const numberStages=[
   {phase:'source',delay:600},{phase:'travel',delay:1800},{phase:'land',delay:420},
   {phase:'ready',delay:550},{phase:'press',delay:260},{phase:'calling',delay:3300},
   {phase:'hangup',delay:280},{phase:'reset',delay:650}
  ];
  function measureNumber(force=false){
   const scene=query('.pd-number-scene');if(!scene)return;
   if(!force&&scene.dataset.phase!=='source'&&scene.dataset.phase!=='reset')return;
   const keeps=scene.querySelectorAll?.('.pd-flow-group .pd-keep')||[];
   const guides=scene.querySelectorAll?.('.pd-target-guide span')||[];
   const groups=scene.querySelectorAll?.('.pd-flow-group')||[];
   const paths=scene.querySelectorAll?.('.pd-flow-path path')||[];
   if(keeps.length!==4||guides.length!==4||groups.length!==4||paths.length!==4)return;
   groups.forEach(group=>group.style.removeProperty('offset-path'));
   const sceneBox=scene.getBoundingClientRect(),scaleX=sceneBox.width/(scene.offsetWidth||sceneBox.width||1),scaleY=sceneBox.height/(scene.offsetHeight||sceneBox.height||1);
   const localX=x=>(x-sceneBox.left)/scaleX,localY=y=>(y-sceneBox.top)/scaleY;
   const sourceInput=query('.pd-number-source input'),sourceBox=sourceInput.getBoundingClientRect();
   const mirror=scene.querySelector('.pd-source-measure'),sourceTokens=mirror?.querySelectorAll('.pd-source-token')||[];
   const flowBox=scene.querySelector('.pd-flow-groups')?.getBoundingClientRect();
   if(sourceTokens.length!==4||!flowBox)return;
   const inputStyle=window.getComputedStyle?.(sourceInput);
   if(inputStyle){
    for(const key of ['fontFamily','fontSize','fontWeight','fontStyle','lineHeight'])mirror.style[key]=inputStyle[key];
    mirror.style.fontVariantNumeric=inputStyle.fontVariantNumeric;
    mirror.style.letterSpacing=inputStyle.letterSpacing;
    const flowStyle=scene.querySelector('.pd-flow-groups').style;
    for(const key of ['fontFamily','fontSize','fontWeight','fontStyle','lineHeight'])flowStyle[key]=inputStyle[key];
    flowStyle.fontVariantNumeric=inputStyle.fontVariantNumeric;
    flowStyle.letterSpacing=inputStyle.letterSpacing;
    const leftPadding=parseFloat(inputStyle.paddingLeft)||0,rightPadding=parseFloat(inputStyle.paddingRight)||0;
    const textCenter=sourceBox.left+leftPadding+(sourceBox.width-leftPadding-rightPadding)/2;
    mirror.style.left=`${localX(textCenter)-mirror.getBoundingClientRect().width/(2*scaleX)}px`;
    mirror.style.top=`${localY(sourceBox.top+sourceBox.height/2)}px`;
   }
   groups.forEach((group,i)=>{
    const glyph=sourceTokens[i].getBoundingClientRect(),token=keeps[i].getBoundingClientRect();
    group.style.left=`${(glyph.left+glyph.width/2-flowBox.left-token.width/2)/scaleX}px`;
    group.style.top=`${(sourceBox.top+sourceBox.height/2-flowBox.top-token.height/2)/scaleY}px`;
   });
   const targetBox=query('.pd-number-target').getBoundingClientRect();
   const mix=(a,b,t)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t});
   const split=(points,t)=>{
    const a=mix(points[0],points[1],t),b=mix(points[1],points[2],t),c=mix(points[2],points[3],t);
    const d=mix(a,b,t),e=mix(b,c,t),f=mix(d,e,t);
    return {left:[points[0],a,d,f],right:[f,e,c,points[3]]};
   };
   const curveY=(points,t)=>{const u=1-t;return u*u*u*points[0].y+3*u*u*t*points[1].y+3*u*t*t*points[2].y+t*t*t*points[3].y;};
   const timeAtY=(points,y)=>{let low=0,high=1;for(let n=0;n<30;n++){const mid=(low+high)/2;if(curveY(points,mid)<y)low=mid;else high=mid;}return (low+high)/2;};
   keeps.forEach((token,i)=>{
    const from=token.getBoundingClientRect(),to=guides[i].getBoundingClientRect();
    const dx=(to.left-from.left+(to.width-from.width)/2)/scaleX,dy=(to.top-from.top+(to.height-from.height)/2)/scaleY;
    groups[i].style.setProperty('--dx',`${dx}px`);
    groups[i].style.setProperty('--dy',`${dy}px`);
    const bend=[-20,-9,9,20][i],sx=localX(from.left+from.width/2),sy=localY(sourceBox.top+sourceBox.height/2);
    const endX=localX(to.left+to.width/2),endY=localY(to.top+to.height/2);
    const makePath=(ox,oy)=>`M${(sx-ox).toFixed(2)} ${(sy-oy).toFixed(2)} C${(sx+bend-ox).toFixed(2)} ${(sy+(endY-sy)*.35-oy).toFixed(2)} ${(endX+bend-ox).toFixed(2)} ${(sy+(endY-sy)*.68-oy).toFixed(2)} ${(endX-ox).toFixed(2)} ${(endY-oy).toFixed(2)}`;
    const points=[{x:sx,y:sy},{x:sx+bend,y:sy+(endY-sy)*.35},{x:endX+bend,y:sy+(endY-sy)*.68},{x:endX,y:endY}];
    const visibleStart=Math.max(sy,Math.min(endY,localY(sourceBox.bottom)+12));
    const visibleEnd=Math.max(visibleStart,Math.min(endY,localY(targetBox.top)-12));
    const startT=timeAtY(points,visibleStart),endT=timeAtY(points,visibleEnd);
    const clipped=split(split(points,endT).left,startT/endT).right;
    const [a,b,c,d]=clipped;
    paths[i].setAttribute('d',`M${a.x.toFixed(2)} ${a.y.toFixed(2)} C${b.x.toFixed(2)} ${b.y.toFixed(2)} ${c.x.toFixed(2)} ${c.y.toFixed(2)} ${d.x.toFixed(2)} ${d.y.toFixed(2)}`);
    groups[i].style.setProperty('offset-path',`path("${makePath(localX(from.left),localY(from.top))}")`);
   });
  }
  function numberScene(){
   const scene=query('.pd-number-scene');if(!scene)return;
   numberStep=(numberStep+1)%numberStages.length;
   if(numberStages[numberStep].phase==='calling'){callingElapsed=0;callingStartedAt=clockNow();const timer=query('.pd-call-timer');if(timer)timer.textContent='00:00';}
   else if(numberStages[numberStep].phase==='hangup'){callingStartedAt=0;callingElapsed=3000;const timer=query('.pd-call-timer');if(timer)timer.textContent='00:03';}
   else if(numberStages[numberStep].phase==='source'){callingStartedAt=0;callingElapsed=0;const timer=query('.pd-call-timer');if(timer)timer.textContent='00:00';}
   if(numberStages[numberStep].phase==='travel')measureNumber();
   scene.dataset.phase=numberStages[numberStep].phase;
   const source=query('.pd-number-source input');
   if(source)source.value=numberStages[numberStep].phase==='source'?'+1 202 555 0142':'';
   const target=query('.pd-number-target input');
   if(target)target.value=['land','ready','press','calling','hangup'].includes(numberStages[numberStep].phase)?'12025550142':'';
   const label=query('.pd-call-label');if(label)label.textContent=['calling','hangup'].includes(numberStages[numberStep].phase)?hangupLabels[locale]:translations[locale][19];
  }
  function finishNumberTravel(){
   if(numberStages[numberStep].phase!=='travel'||!canRun())return;
   if(numberTimer)window.clearTimeout(numberTimer);
   numberTimer=0;sceneDeadline=0;sceneRemaining=null;
   numberScene();scheduleNumber(numberStages[numberStep].delay);
  }
  function onAnimationEnd(event){
   if(event.animationName!=='pd-route-travel')return;
   const scene=query('.pd-number-scene');
   if(scene&&[...scene.querySelectorAll('.pd-flow-group')].includes(event.target))finishNumberTravel();
  }
  function codecTick(){codecTimer=0;if(!canRun())return;reorder();codecTimer=later(codecTick,2050);}
  function numberTick(){numberTimer=0;sceneDeadline=0;if(!canRun())return;
   if(numberStages[numberStep].phase==='travel'){
    const groups=query('.pd-number-scene')?.querySelectorAll('.pd-flow-group')||[];
    if([...groups].some(group=>group.getAnimations?.().some(animation=>animation.animationName==='pd-route-travel'&&animation.playState==='running'))){scheduleNumber(120);return;}
    finishNumberTravel();return;
   }
   numberScene();scheduleNumber(numberStages[numberStep].delay);
  }
  function select(index){
   if(destroyed||mobile?.matches||index<0||index>2||index===selected)return;
   selected=index;
   host.querySelectorAll('.pd-card').forEach((card,i)=>{
    const open=i===index;
    card.dataset.open=String(open);
    card.querySelector('.pd-card-button').setAttribute('aria-expanded',String(open));
    card.querySelector('.pd-card-content').setAttribute('aria-hidden',String(!open));
   });
   if(numberStages[numberStep].phase==='source'||numberStages[numberStep].phase==='reset')measureNumber();
  }
  function markup(){
   const t=translations[locale];
   const quality=`<div class="pd-quality-scene"><div class="pd-native-call"><div class="pd-call-meta"><span class="pd-quality-dot" aria-hidden="true"></span><span class="pd-timer">01:26</span></div><div class="pd-native-number"><input type="tel" value="12025550142" readonly tabindex="-1" aria-label="${escape(t[14])}"><span class="pd-native-erase" aria-hidden="true">${erase}</span></div></div><div class="pd-plot"><div class="pd-plot-value">MOS <b class="pd-mos-value">4.2</b></div><div class="pd-chart"><svg viewBox="0 0 360 116" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="${id}-fill" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#37b287" stop-opacity=".26"/><stop offset="1" stop-color="#37b287" stop-opacity="0"/></linearGradient></defs><path class="pd-graph-grid" d="M0 18H360 M0 50H360 M0 82H360 M0 114H360"/><path class="pd-graph-area" fill="url(#${id}-fill)"/><path class="pd-graph-line"/></svg><span class="pd-graph-dot" aria-hidden="true"></span></div><div class="pd-plot-axis"><span>00:00</span><span>00:30</span><span>01:00</span><span>01:26</span></div></div><div class="pd-network-stats"><span>${escape(t[15])}<b class="pd-loss">0.1%</b></span><span>${escape(t[16])}<b class="pd-jitter">4 ms</b></span><span>${escape(t[17])}<b class="pd-rtt">32 ms</b></span></div></div>`;
   const codec=`<div class="pd-codec-scene"><div class="pd-codec-list">${codecNames.map(name=>`<div class="pd-codec-row" data-codec="${escape(name)}"><span class="pd-grip" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="pd-codec-name"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 12 5 5 11-11" fill="none" stroke="currentColor" stroke-width="2"/></svg>${escape(name)}</span><span class="pd-codec-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 15 6-6 6 6"/></svg></span><span class="pd-codec-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></span></div>`).join('')}</div></div>`;
   const number=`<div class="pd-number-scene" data-phase="source"><div class="pd-number-source pd-native-number"><input type="tel" value="+1 202 555 0142" readonly tabindex="-1" aria-label="${escape(t[10])}"><span class="pd-native-erase" aria-hidden="true">${erase}</span></div><span class="pd-source-measure" aria-hidden="true">+<span class="pd-source-token">1</span> <span class="pd-source-token">202</span> <span class="pd-source-token">555</span> <span class="pd-source-token">0142</span></span><svg class="pd-flow-path" aria-hidden="true"><path/><path/><path/><path/></svg><div class="pd-number-flow" aria-hidden="true"><div class="pd-flow-groups"><span class="pd-flow-group"><span class="pd-discard pd-plus">+</span><span class="pd-keep">1</span></span><span class="pd-flow-group"><span class="pd-discard pd-space">&nbsp;</span><span class="pd-keep">202</span></span><span class="pd-flow-group"><span class="pd-discard pd-space">&nbsp;</span><span class="pd-keep">555</span></span><span class="pd-flow-group"><span class="pd-discard pd-space">&nbsp;</span><span class="pd-keep">0142</span></span></div></div><div class="pd-number-target pd-native-number"><div class="pd-number-call-meta"><span class="pd-quality-dot" aria-hidden="true"></span><span class="pd-call-timer">00:00</span><span class="pd-mos">MOS <b>4.2</b></span></div><input type="tel" value="" readonly tabindex="-1" aria-label="${escape(t[11])}"><span class="pd-target-guide" aria-hidden="true"><span>1</span><span>202</span><span>555</span><span>0142</span></span><span class="pd-native-erase" aria-hidden="true">${erase}</span></div><div class="pd-call-row"><button class="pd-call-action" type="button" tabindex="-1" disabled aria-hidden="true">${phone}${hangup}<span class="pd-call-label">${escape(t[19])}</span></button></div></div>`;
   const arts=[quality,codec,number];
   const cards=arts.map((art,i)=>{
    const at=2+i*4;
    const sentences=i===0?t[at+2].split(/(?<=\.) /):[t[at+2]];
    const open=mobile?.matches||i===selected;
    return `<article class="pd-card" data-pd-card="${i}" data-open="${open}"><button class="pd-card-button" type="button" aria-expanded="${open}" aria-controls="${id}-panel-${i}" data-pd-select="${i}" ${mobile?.matches?'aria-disabled="true" tabindex="-1"':''}><span class="pd-card-label"><strong>${escape(t[at])}</strong><small>${escape(t[at+1])}</small></span></button><div class="pd-card-content" id="${id}-panel-${i}" aria-hidden="${!open}"><div class="pd-card-art">${art}</div><div class="pd-card-copy"><p>${sentences.map(sentence=>`<span>${escape(sentence)}</span>`).join('')}</p></div></div></article>`;
   }).join('');
   return `<section class="pd-section" aria-labelledby="${id}-heading"><div class="pd-heading"><h2 id="${id}-heading">${escape(t[0])}</h2></div><div class="pd-grid">${cards}</div></section>`;
  }
  function render(){
   clearMotion();animations.forEach(animation=>animation.cancel?.());animations.clear();observer?.disconnect();
   numberStep=0;callingElapsed=0;callingStartedAt=0;host.innerHTML=markup();curve(history,graphElapsed/1700,nextValue);
   const source=query('.pd-number-source input');if(source)source.value='+1 202 555 0142';
   if(media?.matches){const scene=query('.pd-number-scene'),source=query('.pd-number-source input'),target=query('.pd-number-target input');if(scene)scene.dataset.phase='ready';if(source)source.value='';if(target)target.value='12025550142';}
   if(typeof window.IntersectionObserver==='function'){
    observer=new window.IntersectionObserver(entries=>{inView=entries.some(entry=>entry.isIntersecting);if(inView)measureNumber();refresh();},{threshold:.06});
    observer.observe(query('.pd-section'));
   }else{inView=true;measureNumber();refresh();}
   resizeObserver?.disconnect();
   if(typeof window.ResizeObserver==='function'){resizeObserver=new window.ResizeObserver(()=>{if(inView)measureNumber(true);});resizeObserver.observe(query('.pd-number-scene'));}
  }
  function onClick(event){const button=event.target.closest?.('[data-pd-select]');if(button&&host.contains(button))select(Number(button.dataset.pdSelect));}
  function onFocus(event){const card=event.target.closest?.('[data-pd-card]');if(card&&host.contains(card))select(Number(card.dataset.pdCard));}
  function onPointer(event){if(window.matchMedia?.('(hover: hover)').matches){const card=event.target.closest?.('[data-pd-card]');if(card&&host.contains(card))select(Number(card.dataset.pdCard));}}
  host.addEventListener('click',onClick);host.addEventListener('focusin',onFocus);host.addEventListener('pointerover',onPointer);
  host.addEventListener('animationend',onAnimationEnd);
  const onVisibility=()=>refresh();
  document.addEventListener('visibilitychange',onVisibility);media?.addEventListener?.('change',onVisibility);
  mobile?.addEventListener?.('change',render);
  render();
  return {
   setLocale(next){if(!destroyed&&translations[next]&&next!==locale){locale=next;render();}},
   setActive(next){active=Boolean(next);refresh();},
   destroy(){if(destroyed)return;destroyed=true;clearMotion();animations.forEach(animation=>animation.cancel?.());animations.clear();observer?.disconnect();resizeObserver?.disconnect();host.removeEventListener('click',onClick);host.removeEventListener('focusin',onFocus);host.removeEventListener('pointerover',onPointer);host.removeEventListener('animationend',onAnimationEnd);document.removeEventListener('visibilitychange',onVisibility);media?.removeEventListener?.('change',onVisibility);mobile?.removeEventListener?.('change',render);host.innerHTML='';}
  };
 }
 window.AltSIPProductDetails={mount};
})();
