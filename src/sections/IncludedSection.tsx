import { motion } from 'framer-motion';
import { Users, Plane, Bus, Hotel } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';
import GlassCard from '@/components/GlassCard';

const cards = [
  {
    icon: Users,
    title: 'GUIDES',
    description: '2 awesome guides who know everything about Japan!',
  },
  {
    icon: Plane,
    title: 'FLIGHTS',
    description: 'Routes: Moscow \u2014 Osaka, Tokyo \u2014 Moscow',
  },
  {
    icon: Bus,
    title: 'TRANSFERS',
    description: 'From the airport to the hotels',
  },
  {
    icon: Hotel,
    title: 'HOTELS',
    description: 'Comfortable accommodation, 2 people per room (breakfasts included)',
  },
];

export default function IncludedSection() {
  return (
    <section id="included" className="relative bg-mist-black py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <SectionReveal className="flex items-center gap-6 mb-12 lg:mb-16">
          <h2 className="text-display-l text-kimono-white whitespace-nowrap">
            WHAT&apos;S INCLUDED
          </h2>
          <div className="flex-1 h-px bg-kimono-white/10" />
        </SectionReveal>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
