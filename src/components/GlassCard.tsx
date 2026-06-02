import { motion } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';
import type { LucideIcon } from 'lucide-react';

interface GlassCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function GlassCard({ icon: Icon, title, description }: GlassCardProps) {
  const { setIsHovering } = useCursor();

  return (
    <motion.div
      className="glass-surface rounded-xl p-8 cursor-pointer group"
      whileHover={{
        y: -4,
        borderColor: 'rgba(212, 248, 122, 0.4)',
        boxShadow: '0 8px 32px rgba(212, 248, 122, 0.08)',
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon size={24} strokeWidth={1.5} className="text-lime-accent mb-4" />
      </motion.div>

      <h3 className="text-small-caps text-kimono-white mb-3 tracking-[0.18em]">
        {title}
      </h3>

      <p className="text-sm text-kimono-white/70 font-inter leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
