import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';

/**
 * Custom cursor with two states:
 * - Default: 8px solid lime dot, follows mouse with smooth lerp (~0.15 lag)
 * - Hover: 32px outlined circle (1px border, no fill), triggered on interactive elements
 *
 * Uses mix-blend-mode: difference to stay visible on any background.
 * Hidden entirely on touch/mobile devices.
 */
export default function CustomCursor() {
  const { isHovering } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Lower stiffness = more lag / smoother follow (~0.15 lerp feel)
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  // Track whether we should show a custom cursor at all
  const [isTouch, setIsTouch] = useState(true); // default hidden until proven pointer

  useEffect(() => {
    // Check for hover-capable device
    const mq = window.matchMedia('(hover: none)');
    setIsTouch(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible],
  );

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouch, handleMouseMove, handleMouseLeave, handleMouseEnter]);

  if (isTouch) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        className="rounded-full"
        animate={{
          width: isHovering ? 32 : 8,
          height: isHovering ? 32 : 8,
          backgroundColor: isHovering ? 'transparent' : '#D4F87A',
          borderWidth: isHovering ? 1 : 0,
          borderColor: isHovering ? '#D4F87A' : 'transparent',
          x: isHovering ? -16 : -4,
          y: isHovering ? -16 : -4,
        }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          borderStyle: 'solid',
        }}
      />
    </motion.div>
  );
}
