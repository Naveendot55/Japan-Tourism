import { useState } from 'react';

interface MinimalInputProps {
  label: string;
  type?: string;
  name: string;
  isTextarea?: boolean;
}

export default function MinimalInput({ label, type = 'text', name, isTextarea = false }: MinimalInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const isActive = isFocused || hasValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0);
  };

  const inputClasses = "w-full bg-transparent border-0 border-b outline-none text-kimono-white font-inter text-base py-3 pt-6 transition-colors duration-200 resize-y min-h-[48px]";
  const borderClasses = isFocused ? "border-lime-accent" : "border-kimono-white/10";

  return (
    <div className="relative">
      <label
        className={`absolute left-0 transition-all duration-200 ease-cinematic pointer-events-none text-small-caps ${
          isActive
            ? 'top-0 text-[11px] text-kimono-white/60'
            : 'top-4 text-[12px] text-kimono-white/40'
        }`}
      >
        {label}
      </label>

      {isTextarea ? (
        <textarea
          name={name}
          rows={3}
          className={`${inputClasses} ${borderClasses}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          className={`${inputClasses} ${borderClasses}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
