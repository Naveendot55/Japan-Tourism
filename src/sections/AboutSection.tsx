import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import Timeline from '@/components/Timeline';

function HighlightText({ children, delay = 0 }: { children: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setHighlighted(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <motion.span
      ref={ref}
      className="transition-colors duration-[600ms] ease-cinematic font-normal"
      style={{
        color: highlighted ? '#D4F87A' : '#FAFAFA',
      }}
    >
      {children}
    </motion.span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-mist-black py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Heading with hairline rules */}
        <SectionReveal className="flex items-center gap-6 mb-16 lg:mb-24">
          <div className="hidden sm:block flex-1 h-px bg-kimono-white/10" />
          <h2 className="text-display-l text-kimono-white whitespace-nowrap">
            ABOUT THE TOUR
          </h2>
          <div className="hidden sm:block flex-1 h-px bg-kimono-white/10" />
        </SectionReveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20">
          {/* Left Column - Editorial Text */}
          <div className="space-y-8">
            <SectionReveal delay={0.1}>
              <p className="font-cormorant text-lg lg:text-xl text-kimono-white/85 leading-[1.7]">
                We&apos;ve planned a simple and convenient 10-day itinerary for your trip to Japan. You&apos;ll visit three cities:{' '}
                <HighlightText delay={300}>
                  Osaka, Kyoto, and Tokyo
                </HighlightText>
                .
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="font-cormorant text-lg lg:text-xl text-kimono-white/85 leading-[1.7]">
                No need to worry about routes, schedules, or finding places &mdash; everything is already organized. We&apos;ll show you where to go, what to see, and where to eat, so you can simply{' '}
                <HighlightText delay={500}>
                  enjoy the journey
                </HighlightText>
                .
              </p>
            </SectionReveal>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:pt-4">
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
}
