'use client';
import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

const stats = [
  { value: 2840, suffix: 'kg', label: '소재 수거량', sub: '누적 기준' },
  { value: 1247, suffix: '점', label: '제작 완료', sub: '2021–2024' },
  { value: 38, suffix: '개사', label: '파트너 기업', sub: '국내외' },
  { value: 100, suffix: '%', label: '수작업 생산', sub: '국내 제작' },
];

export default function ImpactSection() {
  const { ref, inView } = useInView(0.15);

  const c0 = useCounter(stats[0].value, 1800, inView);
  const c1 = useCounter(stats[1].value, 1600, inView);
  const c2 = useCounter(stats[2].value, 1400, inView);
  const c3 = useCounter(stats[3].value, 1200, inView);
  const counts = [c0, c1, c2, c3];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="impact"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 18% 18%, rgba(168,183,106,0.08), transparent 22%), linear-gradient(170deg, #F5F5F0 0%, #ECEDE7 60%, #F5F5F0 100%)',
      }}
    >
      {/* Background texture — horizontal lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${8 + i * 8}%`,
              background: 'rgba(17,17,17,0.05)',
            }}
          />
        ))}
      </div>

      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative z-10">

        {/* Section label */}
        <div
          className="section-label mb-5"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.2s' }}
        >
          05 / IMPACT
        </div>

        {/* Main headline */}
        <div className="mb-20 md:mb-28">
          <h2
            className="font-display text-[clamp(44px,7vw,110px)] leading-none text-[#111111] mb-6"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(40px)',
              transition: 'opacity 0.9s ease 0.35s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.35s',
            }}
          >
            INDUSTRY<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(168,183,106,0.25)' }}>CYCLE</span>
          </h2>
          <p
            className="font-serif text-[18px] md:text-[22px] italic max-w-lg leading-relaxed"
            style={{
              color: 'rgba(74,74,74,0.72)',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.9s ease 0.5s',
            }}
          >
            산업의 끝에서 새로운 순환을 만드는 브랜드.<br />
            숫자가 우리의 철학을 증명합니다.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative py-10 md:py-14"
              style={{
                borderTop: '1px solid rgba(17,17,17,0.08)',
                borderLeft: i % 2 === 1 || i > 1 ? (i % 2 === 1 ? '1px solid rgba(17,17,17,0.08)' : (i === 2 ? 'none' : '1px solid rgba(17,17,17,0.08)')) : 'none',
                paddingLeft: i % 2 === 1 || (i > 1 && i % 2 === 1) ? '2rem' : 0,
                paddingRight: '2rem',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(30px)',
                transition: `opacity 0.8s ease ${0.3 + i * 0.15}s, transform 0.8s ease ${0.3 + i * 0.15}s`,
              }}
            >
              {/* Number */}
              <div className="mb-3">
                <span
                  className="font-display text-[clamp(48px,6vw,88px)] leading-none text-[#111111]"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  {counts[i].toLocaleString()}
                </span>
                <span
                  className="font-display text-[clamp(24px,3vw,44px)] leading-none text-[#C5CC99] ml-1"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  {s.suffix}
                </span>
              </div>

              {/* Label */}
              <div className="font-mono text-[10px] tracking-[0.25em] text-[rgba(74,74,74,0.75)] mb-1">
                {s.label}
              </div>
              <div className="font-mono text-[9px] tracking-[0.2em] text-[rgba(74,74,74,0.45)]">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Divider statement */}
        <div
          className="mt-20 md:mt-28 relative"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 1s ease 1s',
          }}
        >
          <div className="border border-[rgba(17,17,17,0.08)] p-8 md:p-14">
            <div className="font-mono text-[9px] tracking-[0.35em] text-[#4A4A4A] mb-6">
              BRAND STATEMENT
            </div>
            <p className="font-serif text-[clamp(18px,2.5vw,30px)] italic leading-relaxed" style={{ color: 'rgba(74,74,74,0.72)' }}>
              우리는 친환경 브랜드가 아닙니다.<br />
              우리는 <span style={{ color: '#A8B76A' }}>산업 순환 구조를 설계하는 브랜드</span>입니다.<br />
              그 차이가 모든 것을 바꿉니다.
            </p>
            <div className="mt-8 h-px bg-gradient-to-r from-[#A8B76A]/24 via-[#D6D8A0]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
