import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left';
  className?: string;
}

export default function SectionReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: SectionRevealProps) {
  const initial = direction === 'up'
    ? { opacity: 0, y: 40 }
    : { opacity: 0, x: -60 };

  const animate = direction === 'up'
    ? { opacity: 1, y: 0 }
    : { opacity: 1, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
