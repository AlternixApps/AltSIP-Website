/* Glass spheres react locally to the pointer. No canvas or persistent animation. */
(() => {
  'use strict';
  const orbs = [...document.querySelectorAll('.site-atmosphere .glass-sphere')];
  if (!orbs.length) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const touch = matchMedia('(max-width: 800px), (pointer: coarse)');
  let frame = 0, pointer = null, active = true, destroyed = false;
  const allowed = () => active && !destroyed && !document.hidden && !motion.matches && !touch.matches;
  function reset() {
    pointer = null;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    for (const orb of orbs) {
      orb.style.removeProperty('--orb-x');
      orb.style.removeProperty('--orb-y');
    }
  }
  function paint() {
    frame = 0;
    if (!allowed() || !pointer) return;
    // Read every position before writing transforms; interleaving these calls
    // forces repeated layout during a pointer move on slower devices.
    const boxes = orbs.map(orb => orb.getBoundingClientRect());
    for (const [index, orb] of orbs.entries()) {
      const box = boxes[index];
      const dx = pointer.x - (box.left + box.width / 2);
      const dy = pointer.y - (box.top + box.height / 2);
      const radius = box.width / 2 + 65;
      const strength = Math.max(0, 1 - Math.hypot(dx, dy) / radius);
      orb.style.setProperty('--orb-x', (dx * strength * .08).toFixed(2) + 'px');
      orb.style.setProperty('--orb-y', (dy * strength * .08).toFixed(2) + 'px');
    }
  }
  function move(event) {
    if (!allowed()) return;
    pointer = { x: event.clientX, y: event.clientY };
    if (!frame) frame = requestAnimationFrame(paint);
  }
  function visibility() { if (document.hidden) reset(); }
  window.addEventListener('pointermove', move, { passive: true });
  window.addEventListener('blur', reset);
  document.addEventListener('pointerleave', reset);
  document.addEventListener('visibilitychange', visibility);
  motion.addEventListener('change', reset);
  touch.addEventListener('change', reset);
  window.AltSIPAtmosphere = {
    setActive(value) { active = Boolean(value); if (!active) reset(); },
    destroy() {
      if (destroyed) return;
      reset(); destroyed = true;
      window.removeEventListener('pointermove', move);
      window.removeEventListener('blur', reset);
      document.removeEventListener('pointerleave', reset);
      document.removeEventListener('visibilitychange', visibility);
      motion.removeEventListener('change', reset);
      touch.removeEventListener('change', reset);
    }
  };
})();
