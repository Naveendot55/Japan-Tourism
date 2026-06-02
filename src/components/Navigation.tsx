import { useCursor } from '@/hooks/useCursor';
import { Globe } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: string;
}

function NavLink({ href, children }: NavLinkProps) {
  const { setIsHovering } = useCursor();

  return (
    <a
      href={href}
      className="text-small-caps text-kimono-white/70 hover:text-kimono-white transition-colors duration-200 relative group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-px bg-kimono-white transition-all duration-200 ease-cinematic group-hover:w-full" />
    </a>
  );
}

export default function Navigation() {
  const { setIsHovering } = useCursor();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12 py-6">
      <div className="flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 text-small-caps text-kimono-white"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Globe size={16} strokeWidth={1.5} />
          <span>Japan Tours</span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#included">Included</NavLink>
          <NavLink href="#contact">Contacts</NavLink>
        </div>

        {/* Book Button */}
        <a
          href="#contact"
          className="text-small-caps px-6 py-2 border border-kimono-white/60 rounded-full text-kimono-white hover:bg-mountain-cream/30 transition-all duration-300 ease-cinematic"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Book
        </a>
      </div>
    </nav>
  );
}
