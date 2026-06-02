import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';
import PolaroidStrip from '@/components/PolaroidStrip';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function HeroSection() {
  const { setIsHovering } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms — linear mapping, no spring
  // Mountains: 0.3x scroll speed (slowest, anchors the scene)
  const mountainY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  // JAPAN text: 0.5x scroll speed (mid-depth)
  const textY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  // Polaroid strip: 0.4x scroll speed, translates leftward
  const stripX = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Disable parallax for reduced motion
  const safeMountainY = prefersReducedMotion ? 0 : mountainY;
  const safeTextY = prefersReducedMotion ? 0 : textY;
  const safeStripX = prefersReducedMotion ? 0 : stripX;

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-mist-black"
    >
      {/* Layer 1 — Sky gradient (lowest layer, behind everything) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, #8B7355 0%, #C4A882 20%, #D4B896 35%, #B89878 50%, #2A1F14 80%, #0A0A0A 100%)',
        }}
      />

      {/* Layer 2 — "JAPAN" display typography (behind mountains) */}
      <motion.div
        className="absolute inset-0 z-[2] flex items-center justify-center will-change-transform pointer-events-none"
        style={{ y: safeTextY }}
      >
        <h1
          className="text-display-xl text-japan-hero select-none"
          style={{ marginTop: '-5vh' }}
        >
          JAPAN
        </h1>
      </motion.div>

      {/* Layer 3 — Mountain image with masked sky (in front of text) */}
      <motion.div
        className="absolute inset-0 z-[3] will-change-transform"
        style={{
          y: safeMountainY,
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, transparent 15%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.7) 35%, black 45%, black 100%)',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, transparent 15%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.7) 35%, black 45%, black 100%)',
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/hero-mountains.jpg`}
          alt="Misty Japanese mountains at dawn"
          className="w-full h-[120%] object-cover object-center"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Gradient overlay to blend into black below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-mist-black" />
      </motion.div>

      {/* Layer 5 — Kimono Figure (highest, no parallax — visual anchor) */}
      <div className="absolute bottom-0 right-[5%] lg:right-[8%] z-[5] w-[45%] sm:w-[35%] lg:w-[28%] max-w-[400px]">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-kimono.png`}
          alt="Woman in floral kimono gazing at the valley"
          className="w-full h-auto object-contain"
          style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))' }}
        />
      </div>

      {/* Layer 4 — Polaroid Card Strip (lower left, translates leftward on scroll) */}
      <motion.div
        className="absolute bottom-[12%] left-[5%] lg:left-[8%] z-[4] will-change-transform"
        style={{ x: safeStripX }}
      >
        <PolaroidStrip />
      </motion.div>

      {/* Layer 4 — Floating Book Button */}
      <motion.a
        href="#contact"
        className="absolute bottom-[15%] right-[30%] lg:right-[35%] z-[4] px-10 py-4 bg-mountain-cream/90 backdrop-blur-sm rounded-full text-mist-black text-small-caps tracking-[0.15em] shadow-lg"
        whileHover={{
          backgroundColor: 'rgba(245, 232, 211, 1)',
          scale: 1.02,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        BOOK NOW
      </motion.a>

      {/* Right Edge Social Icons */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-[50] flex-col gap-4">
        {['Instagram', 'Facebook', 'Telegram'].map((social) => (
          <a
            key={social}
            href="#"
            className="text-kimono-white/50 hover:text-lime-accent transition-all duration-200"
            aria-label={social}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {social === 'Instagram' && (
                <>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </>
              )}
              {social === 'Facebook' && (
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              )}
              {social === 'Telegram' && (
                <path d="M21.2 3.8L2.4 11.2c-1 .4-1 1.1.1 1.5l4.7 1.5 1.8 5.5c.2.6.1.8.7.8s.6-.2.9-.5l2.3-2.2 4.5 3.3c.8.5 1.4.2 1.6-.7L22.6 5c.3-1.2-.4-1.7-1.4-1.2z" />
              )}
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}
