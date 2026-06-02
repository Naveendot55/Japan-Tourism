import { useCursor } from '@/hooks/useCursor';
import { Globe } from 'lucide-react';

function FooterLink({ href, children }: { href: string; children: string }) {
  const { setIsHovering } = useCursor();

  return (
    <a
      href={href}
      className="text-small-caps text-kimono-white/60 hover:text-kimono-white transition-colors duration-200 relative group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-px bg-kimono-white transition-all duration-200 ease-cinematic group-hover:w-full" />
    </a>
  );
}

function SocialIcon({ name }: { name: string }) {
  const { setIsHovering } = useCursor();

  return (
    <a
      href="#"
      className="text-kimono-white/40 hover:text-lime-accent hover:opacity-100 transition-all duration-200"
      aria-label={name}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {name === 'Instagram' && (
          <>
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </>
        )}
        {name === 'Facebook' && (
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        )}
        {name === 'Telegram' && (
          <path d="M21.2 3.8L2.4 11.2c-1 .4-1 1.1.1 1.5l4.7 1.5 1.8 5.5c.2.6.1.8.7.8s.6-.2.9-.5l2.3-2.2 4.5 3.3c.8.5 1.4.2 1.6-.7L22.6 5c.3-1.2-.4-1.7-1.4-1.2z" />
        )}
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-mist-black border-t border-kimono-white/10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-12">
        {/* Row 1 - Navigation */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-8">
          <FooterLink href="#">HOME</FooterLink>
          <FooterLink href="#about">ABOUT</FooterLink>
          <FooterLink href="#included">INCLUDED</FooterLink>
          <FooterLink href="#contact">CONTACTS</FooterLink>
        </div>

        {/* Row 2 - Separator */}
        <div className="h-px bg-kimono-white/10 mb-8" />

        {/* Row 3 - Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Wordmark */}
          <a href="#" className="flex items-center gap-2 text-small-caps text-kimono-white/50">
            <Globe size={16} strokeWidth={1.5} />
            <span>Japan Tours</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <SocialIcon name="Instagram" />
            <SocialIcon name="Facebook" />
            <SocialIcon name="Telegram" />
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-[11px] text-kimono-white/30 tracking-wider mt-8">
          &copy; 2026 Japan Tours. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
