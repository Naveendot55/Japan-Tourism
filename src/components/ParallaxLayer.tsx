import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

export default function ParallaxLayer({
  children,
  speed = 0.3,
  className = '',
  direction = 'vertical',
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const distance = speed * 200;
  const transformValue = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'vertical' ? [-distance, distance] : [0, -distance]
  );

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div
        style={
          direction === 'vertical'
            ? { y: transformValue }
            : { x: transformValue }
        }
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
