import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';

interface PhotoClusterProps {
  images: [string, string];
  rotations?: [number, number];
  delay?: number;
}

export default function PhotoCluster({ images, rotations = [-3, 3], delay = 0 }: PhotoClusterProps) {
  const { setIsHovering } = useCursor();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[240px] h-[140px] cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsHovering(false);
      }}
    >
      <motion.img
        src={images[0]}
        alt=""
        className="absolute top-0 left-0 w-[120px] h-[80px] object-cover border-2 border-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] rounded-sm"
        animate={{
          rotate: isHovered ? rotations[0] - 2 : rotations[0],
          x: isHovered ? -4 : 0,
          y: isHovered ? -4 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        loading="lazy"
      />
      <motion.img
        src={images[1]}
        alt=""
        className="absolute bottom-0 right-0 w-[120px] h-[80px] object-cover border-2 border-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] rounded-sm"
        animate={{
          rotate: isHovered ? rotations[1] + 2 : rotations[1],
          x: isHovered ? 4 : 0,
          y: isHovered ? 4 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        loading="lazy"
      />
    </motion.div>
  );
}
