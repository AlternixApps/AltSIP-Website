/* A bounded, event-led signal constellation. No idle animation loop. */
(() => {
  'use strict';
  const canvas = document.getElementById('signal-atmosphere');
  if (!canvas || !canvas.getContext) return;
  const context = canvas.getContext('2d', { alpha: true });
  if (!context) return;

  const nodes = [
    [.61, .11], [.74, .07], [.86, .15], [1.04, .27],
    [.56, .34], [.70, .32], [.83, .40], [.99, .50],
    [.56, .61], [.70, .68], [.84, .64], [1.02, .78],
    [-.02, .61], [.10, .68], [.22, .76]
  ];
  const connections = [
    [0, 1, -12], [1, 2, -8], [2, 3, 12],
    [0, 4, 12], [4, 5, -10], [5, 6, 9], [6, 7, -12],
    [4, 8, -14], [8, 9, 10], [9, 10, -9], [10, 11, 15],
    [12, 13, -12], [13, 14, 11]
  ];
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const mobilePreference = matchMedia('(max-width: 800px), (pointer: coarse)');
  let width = 0;
  let height = 0;
  let ratio = 1;
  let active = true;
  let frame = 0;
  let resizeFrame = 0;
  let destroyed = false;
  let pointer = null;
  let currentX = 0;
  let currentY = 0;
  let currentStrength = 0;
  let lastDrawTime = 0;
  let packetPhase = 0;
  let color = null;

  function setColors() {
    const dark = document.documentElement.dataset.theme === 'dark';
    color = dark ? {
      rgb: '151, 209, 180',
      line: 'rgba(151, 209, 180, .13)',
      point: 'rgba(169, 220, 191, .37)',
      halo: 'rgba(151, 209, 180, .055)'
    } : {
      rgb: '63, 114, 91',
      line: 'rgba(63, 114, 91, .15)',
      point: 'rgba(58, 109, 85, .38)',
      halo: 'rgba(63, 114, 91, .065)'
    };
  }

  function staticPosition(node) {
    return { x: node[0] * width, y: node[1] * height };
  }

  function position(node) {
    const origin = staticPosition(node);
    if (!currentStrength || mobilePreference.matches || motionPreference.matches) return origin;
    const dx = origin.x - currentX;
    const dy = origin.y - currentY;
    const influence = Math.exp(-(dx * dx + dy * dy) / 105000) * currentStrength;
    return { x: origin.x + dx * .035 * influence, y: origin.y + dy * .035 * influence };
  }

  function draw(showPackets = false) {
    if (destroyed || !active || document.hidden || !width || !height) return;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    const points = nodes.map(position);
    context.lineWidth = 1;
    const nearest = [];
    for (const [from, to, bend] of connections) {
      const a = points[from];
      const b = points[to];
      const vx = b.x - a.x;
      const vy = b.y - a.y;
      const length = Math.hypot(vx, vy) || 1;
      const controlX = (a.x + b.x) / 2 - vy / length * bend;
      const controlY = (a.y + b.y) / 2 + vx / length * bend;
      const midpointX = (a.x + b.x + 2 * controlX) / 4;
      const midpointY = (a.y + b.y + 2 * controlY) / 4;
      const distance = Math.hypot(midpointX - currentX, midpointY - currentY);
      const glow = currentStrength * Math.exp(-distance * distance / 60000);
      context.strokeStyle = glow > .01
        ? `rgba(${color.rgb}, ${Math.min(.56, .15 + glow * .4)})`
        : color.line;
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.quadraticCurveTo(controlX, controlY, b.x, b.y);
      context.stroke();
      if (glow > .12) nearest.push({ a, b, controlX, controlY, glow });
    }
    for (let index = 0; index < points.length; index++) {
      const p = points[index];
      const distance = Math.hypot(p.x - currentX, p.y - currentY);
      const glow = currentStrength * Math.exp(-distance * distance / 45000);
      if (index === 1 || index === 6 || index === 9 || index === 14) {
        context.beginPath();
        context.arc(p.x, p.y, 11 + glow * 5, 0, Math.PI * 2);
        context.fillStyle = color.halo;
        context.fill();
      }
      context.beginPath();
      context.arc(p.x, p.y, (index % 5 === 0 ? 2 : 1.35) + glow * 1.25, 0, Math.PI * 2);
      context.fillStyle = glow > .01 ? `rgba(${color.rgb}, ${Math.min(.86, .38 + glow * .48)})` : color.point;
      context.fill();
    }
    if (showPackets && currentStrength > .08) {
      nearest.sort((a, b) => b.glow - a.glow);
      for (let index = 0; index < Math.min(2, nearest.length); index++) {
        const edge = nearest[index];
        const t = (packetPhase + index * .46) % 1;
        const u = 1 - t;
        const x = u * u * edge.a.x + 2 * u * t * edge.controlX + t * t * edge.b.x;
        const y = u * u * edge.a.y + 2 * u * t * edge.controlY + t * t * edge.b.y;
        context.beginPath();
        context.arc(x, y, 2.8, 0, Math.PI * 2);
        context.fillStyle = `rgba(${color.rgb}, ${Math.min(.85, edge.glow * .8)})`;
        context.fill();
      }
    }
  }

  function animate(now) {
    frame = 0;
    if (!active || document.hidden || mobilePreference.matches || motionPreference.matches) return;
    if (now - lastDrawTime < 32) {
      frame = requestAnimationFrame(animate);
      return;
    }
    lastDrawTime = now;
    const targetX = pointer ? pointer.x : width / 2;
    const targetY = pointer ? pointer.y : height / 2;
    const targetStrength = pointer ? 1 : 0;
    currentX += (targetX - currentX) * .27;
    currentY += (targetY - currentY) * .27;
    currentStrength += (targetStrength - currentStrength) * .27;
    const unsettled = Math.abs(targetX - currentX) > .4 ||
        Math.abs(targetY - currentY) > .4 ||
        Math.abs(targetStrength - currentStrength) > .004;
    packetPhase = (packetPhase + .055) % 1;
    draw(unsettled && Boolean(pointer));
    if (unsettled) {
      frame = requestAnimationFrame(animate);
    }
  }

  function scheduleMotion() {
    if (!frame && active && !document.hidden && !mobilePreference.matches && !motionPreference.matches) {
      frame = requestAnimationFrame(animate);
    }
  }

  function onPointerMove(event) {
    if (mobilePreference.matches || motionPreference.matches) return;
    pointer = event.clientX < width * .3 ? null : { x: event.clientX, y: event.clientY };
    scheduleMotion();
  }

  function onPointerExit() {
    pointer = null;
    scheduleMotion();
  }

  function resize() {
    resizeFrame = 0;
    if (destroyed) return;
    width = window.innerWidth;
    height = window.innerHeight;
    ratio = Math.min(window.devicePixelRatio || 1, 1.25);
    canvas.width = Math.max(1, Math.round(width * ratio));
    canvas.height = Math.max(1, Math.round(height * ratio));
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    currentX = width / 2;
    currentY = height / 2;
    if (mobilePreference.matches || motionPreference.matches) {
      pointer = null;
      currentStrength = 0;
    }
    draw();
  }

  function onResize() {
    if (!resizeFrame) resizeFrame = requestAnimationFrame(resize);
  }

  function onVisibility() {
    if (document.hidden && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else if (!document.hidden) {
      draw();
    }
  }

  function onMotionPreference() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    pointer = null;
    currentStrength = 0;
    draw();
  }

  const themeObserver = new MutationObserver(() => {
    setColors();
    draw();
  });
  setColors();
  resize();
  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('pointerleave', onPointerExit);
  window.addEventListener('blur', onPointerExit);
  document.addEventListener('visibilitychange', onVisibility);
  motionPreference.addEventListener('change', onMotionPreference);
  mobilePreference.addEventListener('change', onMotionPreference);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  window.AltSIPAtmosphere = {
    setActive(value) {
      active = Boolean(value);
      if (!active && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      if (active) draw();
    },
    destroy() {
      if (destroyed) return;
      destroyed = true;
      if (frame) cancelAnimationFrame(frame);
      if (resizeFrame) cancelAnimationFrame(resizeFrame);
      themeObserver.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerExit);
      window.removeEventListener('blur', onPointerExit);
      document.removeEventListener('visibilitychange', onVisibility);
      motionPreference.removeEventListener('change', onMotionPreference);
      mobilePreference.removeEventListener('change', onMotionPreference);
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };
})();
