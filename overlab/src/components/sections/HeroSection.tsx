'use client';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-[var(--bg-main)] text-[var(--text-dark)]"
    >
      {/* Background — cinematic gradient + abstract shapes */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        {/* Deep atmospheric gradient */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 22% 18%, rgba(199,255,100,0.14) 0%, transparent 24%),
            radial-gradient(circle at 80% 10%, rgba(17,17,17,0.09) 0%, transparent 22%),
            radial-gradient(circle at 55% 34%, rgba(215,255,138,0.08) 0%, transparent 16%),
            linear-gradient(180deg, #F5F5F0 0%, #ECEDE7 42%, #F5F5F0 100%)
          `,
        }} />

        {/* Abstract fabric / parachute texture lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="fadeOut" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={i}
              x1={720 + (i - 9) * 30}
              y1={0}
              x2={200 + i * 80}
              y2={900}
              stroke="rgba(17,17,17,0.08)"
              strokeWidth="0.5"
            />
          ))}
          <circle cx="720" cy="0" r="600" fill="none" stroke="rgba(17,17,17,0.08)" strokeWidth="0.3" strokeDasharray="4 8" />
          <circle cx="720" cy="0" r="400" fill="none" stroke="rgba(17,17,17,0.08)" strokeWidth="0.3" strokeDasharray="4 12" />
        </svg>

        {/* Large textural circle — parachute canopy hint */}
        <div className="absolute" style={{
          width: '70vmax',
          height: '70vmax',
          top: '-20vmax',
          left: '50%',
          transform: 'translateX(-50%)',
          border: '1px solid rgba(199,255,100,0.1)',
          borderRadius: '50%',
          boxShadow: 'inset 0 0 80px rgba(199,255,100,0.07)',
        }} />
        <div className="absolute" style={{
          width: '50vmax',
          height: '50vmax',
          top: '-10vmax',
          left: '50%',
          transform: 'translateX(-50%)',
          border: '1px solid rgba(17,17,17,0.06)',
          borderRadius: '50%',
        }} />

        {/* Horizontal rule detail */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C7FF64]/18 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-20 md:pb-28">

        {/* Counter / label */}
        <div
          className="mb-8 md:mb-12 flex items-center gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(10px)',
            transition: 'opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s',
          }}
        >
          <span className="font-mono text-[10px] tracking-[0.35em] text-[#D7FF64]">01 / OVERLAB</span>
          <div className="h-px w-16 bg-[#D7FF64]/30" />
          <span className="font-mono text-[10px] tracking-[0.35em] text-[rgba(17,17,17,0.65)]">ARCHIVE 2024</span>
        </div>

        {/* Main headline */}
        <div className="overflow-hidden mb-4">
          <h1
            className="font-display text-[clamp(72px,14vw,200px)] leading-none tracking-tight text-[#111111]"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(100px)',
              transition: 'opacity 1s ease 0.5s, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}
          >
            SOME
          </h1>
        </div>
        <div className="overflow-hidden mb-4">
          <h1
            className="font-display text-[clamp(72px,14vw,200px)] leading-none tracking-tight"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(17,17,17,0.35)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(100px)',
              transition: 'opacity 1s ease 0.65s, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.65s',
            }}
          >
            MOVEMENTS
          </h1>
        </div>
        <div className="overflow-hidden mb-10 md:mb-14">
          <h1
            className="font-display text-[clamp(72px,14vw,200px)] leading-none tracking-tight text-[#111111]"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(100px)',
              transition: 'opacity 1s ease 0.8s, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
            }}
          >
            NEVER END.
          </h1>
        </div>

        {/* Sub-row */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'opacity 1s ease 1.1s, transform 1s ease 1.1s',
          }}
        >
          <p
            className="font-serif text-[18px] md:text-[22px] italic leading-relaxed max-w-md"
            style={{ color: 'rgba(17,17,17,0.78)' }}
          >
            레저 스포츠의 폐기 구조를 새로운 움직임으로.<br />
            소재의 두 번째 생을 설계합니다.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#archive"
              className="group flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase text-[#111111] hover:text-[#C7FF64] transition-colors duration-400"
            >
              <span>Explore Archive</span>
              <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                <line x1="0" y1="6" x2="24" y2="6" stroke="currentColor" strokeWidth="1" className="transition-all duration-300 group-hover:x2-28" />
                <polyline points="18,1 24,6 18,11" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute right-6 md:right-12 bottom-10 flex flex-col items-center gap-3"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: 'opacity 1s ease 1.5s',
        }}
      >
        <span className="font-mono text-[8px] tracking-[0.3em] text-[#111111] rotate-90 origin-center mb-6">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#C7FF64]/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
