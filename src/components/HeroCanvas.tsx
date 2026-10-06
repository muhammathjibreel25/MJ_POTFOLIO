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
  glow: boolean;
}

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    // Responsive particle count
    const getParticleCount = () => {
      const area = width * height;
      if (width < 768) return Math.min(35, Math.floor(area / 18000));
      return Math.min(75, Math.floor(area / 16000));
    };

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.8 + 1,
          alpha: Math.random() * 0.5 + 0.2,
          glow: Math.random() > 0.75,
        });
      }
    };

    initParticles();

    // Resize listener with debounced re-init
    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    // Click pulse wave
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180;
          p.vx += (dx / dist) * force * 4;
          p.vy += (dy / dist) * force * 4;
        }
      });
    };

    container.addEventListener('click', handleClick);

    // Efficient Intersection Observer to pause rendering when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            lastTime = performance.now();
            render();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    let lastTime = performance.now();

    const render = () => {
      if (!isVisibleRef.current) return;

      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 48;
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

      // Update and draw particles
      const count = particles.length;
      for (let i = 0; i < count; i++) {
        const p = particles[i];

        // Position movement
        p.x += p.vx * 60 * delta;
        p.y += p.vy * 60 * delta;

        // Friction damping
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Soft bounce against bounds
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

        // Mouse interaction
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouse.radius && mDist > 0) {
          const force = (mouse.radius - mDist) / mouse.radius;
          p.vx -= (mdx / mDist) * force * 0.8;
          p.vy -= (mdy / mDist) * force * 0.8;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        if (p.glow) {
          ctx.fillStyle = `rgba(52, 211, 153, ${p.alpha * 1.2})`;
        } else {
          ctx.fillStyle = `rgba(203, 213, 225, ${p.alpha * 0.7})`;
        }
        ctx.fill();

        // Draw connections to nearby particles using squared distance check
        const maxDist = 110;
        const maxDistSq = maxDist * maxDist;
        for (let j = i + 1; j < count; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const distSq = cdx * cdx + cdy * cdy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('click', handleClick);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-auto overflow-hidden select-none opacity-80 transition-opacity duration-1000"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Subtle radial vignette gradient to blend edges seamlessly */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#08090d]/60 to-[#08090d] pointer-events-none" />
    </div>
  );
};
