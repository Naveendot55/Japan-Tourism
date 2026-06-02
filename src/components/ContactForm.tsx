import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';
import MinimalInput from './MinimalInput';
import SectionReveal from './SectionReveal';

export default function ContactForm() {
  const { setIsHovering } = useCursor();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionReveal direction="left" className="w-full max-w-[420px]">
      <div className="glass-frost rounded-2xl p-8 lg:p-12">
        <h2 className="font-cormorant text-2xl lg:text-[32px] font-light text-kimono-white leading-tight mb-4">
          Want to join us, but still have questions?
        </h2>

        <p className="text-small-caps text-kimono-white/60 mb-8">
          Leave a request
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <MinimalInput label="YOUR NAME" name="name" />
          <MinimalInput label="PHONE NUMBER" name="phone" type="tel" />
          <MinimalInput label="COMMENT" name="comment" isTextarea />

          <motion.button
            type="submit"
            className={`w-full py-4 rounded-full text-small-caps tracking-[0.15em] transition-colors duration-300 ${
              submitted
                ? 'bg-lime-accent text-mist-black'
                : 'bg-mountain-cream text-mist-black hover:bg-lime-accent'
            }`}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {submitted ? 'SENT \u2713' : 'SEND'}
          </motion.button>
        </form>
      </div>
    </SectionReveal>
  );
}
