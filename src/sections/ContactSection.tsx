import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-[1]">
        <img
          src="/images/contact-sakura.jpg"
          alt="Cherry blossoms framing Mount Fuji and a red pagoda at sunrise"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-mist-black/20" />
      </div>

      {/* Form Panel */}
      <div className="relative z-[2] max-w-[1200px] w-full mx-auto px-6 lg:px-12 py-20">
        <ContactForm />
      </div>
    </section>
  );
}
