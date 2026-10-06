import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'explore'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Position refs for smooth lerping without triggering React re-renders
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch devices and small viewports
    const isTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches ||
        window.innerWidth < 1024
      );
    };

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice() || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Directly update inner dot for instant responsiveness
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Detect cursor context
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const exploreTarget = target.closest('[data-cursor="explore"]');
      const pointerTarget = target.closest(
        'button, a, [role="button"], input, textarea, select, [data-cursor="pointer"]'
      );

      if (exploreTarget) {
        setCursorType('explore');
      } else if (pointerTarget) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth Lerp Animation Loop using direct DOM style updates
    const render = () => {
      const ease = 0.18;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isEnabled || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300"
      aria-hidden="true"
    >
      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-emerald-400 rounded-full transition-transform duration-75 ease-out shadow-[0_0_8px_rgba(52,211,153,0.8)] ${
          cursorType === 'explore' ? 'scale-0' : cursorType === 'pointer' ? 'scale-125' : 'scale-100'
        }`}
      />

      {/* Outer Smooth Ring / Pill */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 flex items-center justify-center rounded-full border transition-all duration-200 ease-out will-change-transform ${
          cursorType === 'explore'
            ? 'w-24 h-24 -ml-12 -mt-12 bg-emerald-500/15 border-emerald-400/60 scale-100'
            : cursorType === 'pointer'
            ? 'w-11 h-11 -ml-[22px] -mt-[22px] bg-white/5 border-emerald-400/50 scale-105'
            : 'w-10 h-10 border-white/20 bg-transparent scale-100'
        }`}
      >
        {cursorType === 'explore' && (
          <span className="text-[10px] font-mono font-medium tracking-widest text-emerald-300 uppercase select-none">
            VIEW
          </span>
        )}
      </div>
    </div>
  );
};
