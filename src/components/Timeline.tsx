import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PhotoCluster from './PhotoCluster';

const base = import.meta.env.BASE_URL;

const cities = [
  {
    days: 'DAYS 1\u20133',
    name: 'OSAKA',
    images: [`${base}images/about-osaka-castle.jpg`, `${base}images/about-osaka-neon.jpg`] as [string, string],
    rotations: [-2, 3] as [number, number],
  },
  {
    days: 'DAYS 4\u20136',
    name: 'KYOTO',
    images: [`${base}images/about-kyoto-pagoda.jpg`, `${base}images/about-kyoto-shrine.jpg`] as [string, string],
    rotations: [3, -2] as [number, number],
  },
  {
    days: 'DAYS 7\u201310',
    name: 'TOKYO',
    images: [`${base}images/about-tokyo-shibuya.jpg`, `${base}images/about-tokyo-torii.jpg`] as [string, string],
    rotations: [-3, 2] as [number, number],
  },
];

// Stagger delays per city (ms converted to seconds for Framer Motion)
const STAGGER_DELAYS = [0, 0.2, 0.4];

const revealTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
};

/**
 * Individual city cluster with its own viewport-triggered reveal.
 * Each cluster uses useInView independently so they fire as the user
 * scrolls down — like turning pages of a travel journal.
 */
function CityCluster({
  city,
  index,
}: {
  city: (typeof cities)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        ...revealTransition,
        delay: STAGGER_DELAYS[index],
      }}
    >
      {/* Node dot on the timeline hairline */}
      <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-mountain-cream" />

      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <div>
          <span className="text-small-caps text-kimono-white/50 block mb-1">
            {city.days}
          </span>
          <span className="text-editorial text-kimono-white font-cormorant">
            {city.name}
          </span>
        </div>

        <PhotoCluster
          images={city.images}
          rotations={city.rotations}
          delay={index * 0.2}
        />
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <div className="relative pl-8 lg:pl-12">
      {/* Vertical hairline */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-kimono-white/20" />

      <div className="space-y-16 lg:space-y-20">
        {cities.map((city, i) => (
          <CityCluster key={city.name} city={city} index={i} />
        ))}
      </div>
    </div>
  );
}
