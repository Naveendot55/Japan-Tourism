import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Lenis smooth scroll provider.
 *
 * Configuration tuned for cinematic editorial pacing:
 * - duration: 1.2 (slightly slower than default for a weighty feel)
 * - Exponential ease-out easing (buttery deceleration)
 * - smoothTouch disabled (mobile keeps native scroll for perf)
 *
 * Lenis drives its own rAF loop and scrolls the native scrollbar,
 * so Framer Motion's useScroll (which reads native scroll position)
 * continues to work correctly without any adapter.
 */
export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      // Clean up: cancel rAF first, then destroy Lenis
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
