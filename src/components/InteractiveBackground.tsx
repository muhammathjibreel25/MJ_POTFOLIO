import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  size: number;
  alpha: number;
  color: string;
  glowColor: string;
  pulseSpeed: number;
  pulsePhase: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Pointer state with smooth dampening (lerping)
    const pointer = {
      targetX: -2000,
      targetY: -2000,
      currentX: -2000,
      currentY: -2000,
      isHovered: false,
      lastMoveTime: performance.now(),
      speed: 0,
    };

    // Color definitions coordinated with Zithtech-inspired palette
    const colors = [
      { fill: '#10b981', glow: 'rgba(16, 185, 129, 0.8)' },   // Emerald
      { fill: '#38bdf8', glow: 'rgba(56, 189, 248, 0.8)' },   // Azure / Cyan
      { fill: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.8)' },   // Violet
      { fill: '#c2f23f', glow: 'rgba(194, 242, 63, 0.8)' },   // Electric Lime
      { fill: '#ff6a3d', glow: 'rgba(255, 106, 61, 0.8)' },   // Tangerine
    ];

    let particles: Particle[] = [];
    const ripples: Ripple[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Calculate particle density based on screen area (balanced for high performance)
      const isMobile = width < 768;
      const count = isMobile
        ? Math.min(32, Math.floor((width * height) / 24000))
        : Math.min(75, Math.floor((width * height) / 18000));

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const col = colors[Math.floor(Math.random() * colors.length)];

        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.8 + 1,
          alpha: Math.random() * 0.5 + 0.25,
          color: col.fill,
          glowColor: col.glow,
          pulseSpeed: 0.015 + Math.random() * 0.02,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Initial center default for subtle organic ambient drift
    pointer.targetX = width * 0.5;
    pointer.targetY = height * 0.35;
    pointer.currentX = pointer.targetX;
    pointer.currentY = pointer.targetY;

    let prevPointerX = pointer.targetX;
    let prevPointerY = pointer.targetY;

    const handlePointerMove = (e: PointerEvent) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
      pointer.isHovered = true;
      pointer.lastMoveTime = performance.now();

      const dx = pointer.targetX - prevPointerX;
      const dy = pointer.targetY - prevPointerY;
      pointer.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 40);
      prevPointerX = pointer.targetX;
      prevPointerY = pointer.targetY;
    };

    const handlePointerLeave = () => {
      pointer.isHovered = false;
    };

    const handleClick = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const clickCol = colors[Math.floor(Math.random() * colors.length)].glow;
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: Math.min(width, height) * 0.35,
        alpha: 0.45,
        color: clickCol,
      });

      // Gentle impulse to nearby particles
      for (const p of particles) {
        const dx = p.x - e.clientX;
        const dy = p.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0 && dist < 220) {
          const force = ((220 - dist) / 220) * 4;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('click', handleClick, { passive: true });

    // Handle visibility changes to conserve battery & CPU
    let isTabVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();

    // Ambient orbs configuration for the dynamic light mesh
    const orbs = [
      {
        baseRatioX: 0.25,
        baseRatioY: 0.22,
        radius: 420,
        color: 'rgba(37, 99, 235, 0.16)', // Azure
        lerpFactor: 0.045,
        offsetMultiplier: 0.12,
        driftSpeed: 0.0006,
      },
      {
        baseRatioX: 0.78,
        baseRatioY: 0.38,
        radius: 460,
        color: 'rgba(139, 92, 246, 0.15)', // Violet
        lerpFactor: 0.035,
        offsetMultiplier: -0.10,
        driftSpeed: 0.0008,
      },
      {
        baseRatioX: 0.50,
        baseRatioY: 0.75,
        radius: 480,
        color: 'rgba(16, 185, 129, 0.14)', // Emerald
        lerpFactor: 0.04,
        offsetMultiplier: 0.08,
        driftSpeed: 0.0005,
      },
      {
        baseRatioX: 0.85,
        baseRatioY: 0.82,
        radius: 360,
        color: 'rgba(255, 106, 61, 0.10)', // Tangerine
        lerpFactor: 0.03,
        offsetMultiplier: -0.06,
        driftSpeed: 0.0007,
      },
    ];

    const orbPositions = orbs.map((o) => ({
      x: width * o.baseRatioX,
      y: height * o.baseRatioY,
    }));

    // Animation Loop
    const render = () => {
      if (!isTabVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Smooth pointer lerp
      const lerpEase = 0.055;
      pointer.currentX += (pointer.targetX - pointer.currentX) * lerpEase;
      pointer.currentY += (pointer.targetY - pointer.currentY) * lerpEase;

      // Natural autonomous breathing motion when mouse is idle
      const idleTime = now - pointer.lastMoveTime;
      const isIdle = idleTime > 1500;
      const naturalDriftX = isIdle ? Math.sin(now * 0.0008) * 80 : 0;
      const naturalDriftY = isIdle ? Math.cos(now * 0.0006) * 60 : 0;

      const activePointerX = pointer.currentX + naturalDriftX;
      const activePointerY = pointer.currentY + naturalDriftY;

      ctx.clearRect(0, 0, width, height);

      // ========================================================
      // 1. LAYER A: DYNAMIC AMBIENT LIGHT MESH (Zithtech Glow)
      // ========================================================
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      orbs.forEach((orb, i) => {
        const pos = orbPositions[i];
        const driftOffsetX = Math.sin(now * orb.driftSpeed + i) * 60;
        const driftOffsetY = Math.cos(now * orb.driftSpeed * 0.8 + i) * 50;

        // Mouse reactive parallax target
        const targetX = width * orb.baseRatioX + (activePointerX - width * 0.5) * orb.offsetMultiplier + driftOffsetX;
        const targetY = height * orb.baseRatioY + (activePointerY - height * 0.5) * orb.offsetMultiplier + driftOffsetY;

        pos.x += (targetX - pos.x) * orb.lerpFactor;
        pos.y += (targetY - pos.y) * orb.lerpFactor;

        const rad = orb.radius * (width < 768 ? 0.75 : 1);
        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, rad);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(0.55, orb.color.replace(/[\d\.]+\)$/, '0.04)'));
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, rad, 0, Math.PI * 2);
        ctx.fill();
      });

      // Interactive Pointer Core Glow (Subtle cursor illumination halo)
      if (pointer.isHovered && !prefersReducedMotion) {
        const cursorGlowRad = 260;
        const cursorGrad = ctx.createRadialGradient(
          pointer.currentX,
          pointer.currentY,
          0,
          pointer.currentX,
          pointer.currentY,
          cursorGlowRad
        );
        cursorGrad.addColorStop(0, 'rgba(56, 189, 248, 0.12)'); // Electric cyan halo
        cursorGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)'); // Violet fringe
        cursorGrad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = cursorGrad;
        ctx.beginPath();
        ctx.arc(pointer.currentX, pointer.currentY, cursorGlowRad, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // ========================================================
      // 2. LAYER B: SUBTLE TECH MATRIX GRID WITH POINTER AURA
      // ========================================================
      ctx.save();
      const gridSize = width < 768 ? 56 : 48;
      const mouseRadius = 240;
      const mouseRadiusSq = mouseRadius * mouseRadius;

      // Base grid color
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;

      // Draw faint background grid
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw interactive grid intersection highlights near pointer
      if (!prefersReducedMotion && pointer.isHovered) {
        const startX = Math.max(0, Math.floor((pointer.currentX - mouseRadius) / gridSize) * gridSize);
        const endX = Math.min(width, Math.ceil((pointer.currentX + mouseRadius) / gridSize) * gridSize);
        const startY = Math.max(0, Math.floor((pointer.currentY - mouseRadius) / gridSize) * gridSize);
        const endY = Math.min(height, Math.ceil((pointer.currentY + mouseRadius) / gridSize) * gridSize);

        for (let x = startX; x <= endX; x += gridSize) {
          for (let y = startY; y <= endY; y += gridSize) {
            const dx = pointer.currentX - x;
            const dy = pointer.currentY - y;
            const dSq = dx * dx + dy * dy;
            if (dSq < mouseRadiusSq) {
              const proximity = 1 - Math.sqrt(dSq) / mouseRadius;
              const alpha = proximity * 0.35;
              ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx.beginPath();
              ctx.arc(x, y, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }
      ctx.restore();

      // ========================================================
      // 3. LAYER C: EXPANDING CLICK RIPPLES
      // ========================================================
      if (ripples.length > 0) {
        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i];
          r.radius += (r.maxRadius - r.radius) * 0.06 + 1.2;
          r.alpha *= 0.94;

          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = r.color.replace(/[\d\.]+\)$/, `${r.alpha})`);
          ctx.lineWidth = 1.5;
          ctx.stroke();

          if (r.alpha < 0.01 || r.radius >= r.maxRadius * 0.98) {
            ripples.splice(i, 1);
          }
        }
      }

      // ========================================================
      // 4. LAYER D: INTERACTIVE PARTICLES & CONSTELLATIONS
      // ========================================================
      if (!prefersReducedMotion) {
        const pCount = particles.length;
        const interactionRadius = 150;
        const maxConnectDist = width < 768 ? 90 : 120;
        const maxConnectDistSq = maxConnectDist * maxConnectDist;

        for (let i = 0; i < pCount; i++) {
          const p = particles[i];

          // Natural autonomous drift
          p.x += p.vx * 60 * delta;
          p.y += p.vy * 60 * delta;

          // Drag / friction
          p.vx *= 0.985;
          p.vy *= 0.985;

          // Soft screen bounds bounce
          if (p.x < 10) {
            p.x = 10;
            p.vx = Math.abs(p.vx);
          } else if (p.x > width - 10) {
            p.x = width - 10;
            p.vx = -Math.abs(p.vx);
          }

          if (p.y < 10) {
            p.y = 10;
            p.vy = Math.abs(p.vy);
          } else if (p.y > height - 10) {
            p.y = height - 10;
            p.vy = -Math.abs(p.vy);
          }

          // Mouse fluid repulsion & velocity transfer
          const mdx = activePointerX - p.x;
          const mdy = activePointerY - p.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < interactionRadius && mDist > 0) {
            const force = (interactionRadius - mDist) / interactionRadius;
            // Repulsion with gentle tangential swirl
            const repulseX = (mdx / mDist) * force * 1.2;
            const repulseY = (mdy / mDist) * force * 1.2;
            p.vx -= repulseX;
            p.vy -= repulseY;
          }

          // Gentle spring pull toward natural position so particles don't bunch into corners
          const homePull = 0.0004;
          p.vx += (p.baseX - p.x) * homePull;
          p.vy += (p.baseY - p.y) * homePull;

          // Subtle pulsing alpha
          p.pulsePhase += p.pulseSpeed;
          const dynamicAlpha = p.alpha + Math.sin(p.pulsePhase) * 0.15;

          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0.1, Math.min(1, dynamicAlpha));
          ctx.fill();
          ctx.globalAlpha = 1;

          // Draw inter-particle constellation lines
          for (let j = i + 1; j < pCount; j++) {
            const p2 = particles[j];
            const cdx = p.x - p2.x;
            const cdy = p.y - p2.y;
            const distSq = cdx * cdx + cdy * cdy;

            if (distSq < maxConnectDistSq) {
              const dist = Math.sqrt(distSq);
              const lineAlpha = (1 - dist / maxConnectDist) * 0.18;

              // Line color blends with proximity to mouse
              let strokeCol = 'rgba(56, 189, 248, ';
              if (i % 3 === 0) strokeCol = 'rgba(16, 185, 129, ';
              else if (i % 3 === 1) strokeCol = 'rgba(139, 92, 246, ';

              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `${strokeCol}${lineAlpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Top subtle tech vignette & bottom blend */}
      <div className="absolute inset-0 bg-radial-at-t from-transparent via-[#08090d]/30 to-[#08090d]/80 pointer-events-none" />
    </div>
  );
};
