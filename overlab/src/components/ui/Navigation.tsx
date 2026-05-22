'use client';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = ['Archive', 'Material', 'Process', 'Shop'];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-700"
        style={{
          backgroundColor: scrolled ? 'rgba(247,248,245,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(234,234,234,0.95)' : 'none',
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5 md:py-6">
          {/* Logo */}
          <a href="#" className="font-display text-2xl md:text-3xl tracking-widest text-[#111111]"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            OVERLAB
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#4F4F4F] hover:text-[#111111] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-6">
            <a href="#shop" className="hidden md:block font-mono text-[10px] tracking-[0.25em] uppercase border border-[#D7FF64]/30 text-[#111111] hover:border-[#D7FF64] hover:text-[#D7FF64] px-4 py-2 transition-all duration-300">
              Shop
            </a>
            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`block w-6 h-[1px] bg-[#111111] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block w-4 h-[1px] bg-[#4F4F4F] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[1px] bg-[#111111] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[90] bg-[#FFFFFF] flex flex-col justify-center px-10 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-6xl text-[#111111] tracking-widest transition-colors duration-200 hover:text-[#D7FF64]"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                transitionDelay: `${i * 40}ms`,
              }}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="absolute bottom-12 left-10 font-mono text-[10px] text-[#4F4F4F] tracking-[0.3em]">
          OVERLAB © 2024
        </div>
      </div>
    </>
  );
}
