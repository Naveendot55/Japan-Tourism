import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';
import { useInView } from 'framer-motion';

interface PolaroidCardProps {
  videoSrc: string;
  caption: string;
  rotation?: number;
}

export default function PolaroidCard({ videoSrc, caption, rotation = 0 }: PolaroidCardProps) {
  const { setIsHovering } = useCursor();
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered && isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered, isInView]);

  return (
    <motion.div
      ref={cardRef}
      className="flex-shrink-0 w-[140px] sm:w-[160px] lg:w-[180px] bg-mountain-cream p-2 pb-8 rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative cursor-pointer"
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(255, 184, 197, 0.2)',
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsHovering(false);
      }}
    >
      <div className="aspect-[3/4] overflow-hidden bg-mist-black relative">
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="absolute bottom-2 left-3 text-[11px] text-mouse-gray font-inter tracking-wide">
        {caption}
      </span>
    </motion.div>
  );
}
