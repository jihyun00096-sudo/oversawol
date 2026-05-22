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

const materials = [
  {
    id: 'MAT-001',
    name: '패러글라이더',
    nameEn: 'PARAGLIDER',
    origin: 'Ripstop Nylon / Dyneema',
    weight: '30–55 g/m²',
    tag: 'Air Archive',
    desc: '하늘을 가르던 캐노피. 공기저항과 바람의 기억을 품은 고밀도 나일론.',
    color: '#5a7a5a',
    accent: 'rgba(90,122,90,0.15)',
  },
  {
    id: 'MAT-002',
    name: '요트 돛',
    nameEn: 'YACHT SAIL',
    origin: 'Dacron / Laminate Film',
    weight: '170–300 g/m²',
    tag: 'Sea Archive',
    desc: '파도와 바람을 이겨낸 항해의 궤적. 라미네이트 구조가 독특한 텍스처를 만든다.',
    color: '#8C8A7A',
    accent: 'rgba(140,138,122,0.15)',
  },
  {
    id: 'MAT-003',
    name: '등산 텐트',
    nameEn: 'ALPINE TENT',
    origin: 'Gore-Tex / Silnylon',
    weight: '40–80 g/m²',
    tag: 'Peak Archive',
    desc: '극한의 날씨를 견딘 쉘터. 방수·방풍 기능이 그대로 살아있다.',
    color: '#7A6E5A',
    accent: 'rgba(122,110,90,0.15)',
  },
  {
    id: 'MAT-004',
    name: '다이빙 슈트',
    nameEn: 'DIVING SUIT',
    origin: 'Neoprene / Lycra',
    weight: '3–7 mm',
    tag: 'Deep Archive',
    desc: '수압과 냉기 속에서 몸을 지킨 네오프렌. 유연성과 단열이 공존한다.',
    color: '#2A3A3A',
    accent: 'rgba(42,58,58,0.25)',
  },
];

export default function MaterialArchiveSection() {
  const { ref, inView } = useInView(0.1);
  const [active, setActive] = useState(0);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="material"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: 'radial-gradient(circle at 10% 15%, rgba(199,255,100,0.08), transparent 24%), linear-gradient(180deg, #F5F5F0 0%, #ECEDE7 100%)' }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div
            className="section-label mb-5"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(10px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            03 / MATERIAL ARCHIVE
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="font-display text-[clamp(44px,7vw,110px)] leading-none text-[#111111]"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(40px)',
                transition: 'opacity 0.9s ease 0.35s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.35s',
              }}
            >
              소재가<br />
              <span style={{ color: '#C7FF64' }}>브랜드다</span>
            </h2>
            <p
              className="font-serif text-[16px] italic max-w-[280px] leading-relaxed"
              style={{
                color: 'rgba(74,74,74,0.72)',
                opacity: inView ? 1 : 0,
                transition: 'opacity 0.9s ease 0.5s',
              }}
            >
              각 소재는 하나의 아카이브입니다.<br />
              그것이 살아온 현장과 시간이 새 제품 속에 담깁니다.
            </p>
          </div>
        </div>

        {/* Material cards — horizontal scrollable on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-0">
          {materials.map((mat, i) => (
            <div
              key={mat.id}
              className="relative group cursor-pointer border-t border-[rgba(17,17,17,0.08)] py-8 md:py-10 transition-all duration-500"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(17,17,17,0.08)' : 'none',
                paddingLeft: i > 0 ? '2rem' : 0,
                paddingRight: '2rem',
                backgroundColor: active === i ? 'rgba(199,255,100,0.08)' : 'transparent',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(40px)',
                transition: `background-color 0.4s ease, opacity 0.8s ease ${0.2 + i * 0.1}s, transform 0.8s ease ${0.2 + i * 0.1}s`,
              }}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              {/* Archive badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[9px] tracking-[0.3em]" style={{ color: 'rgba(74,74,74,0.78)' }}>{mat.tag}</span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[rgba(74,74,74,0.45)]">{mat.id}</span>
              </div>

              {/* Visual placeholder — abstract shape */}
              <div
                className="w-full mb-8 transition-all duration-500"
                style={{ height: '140px', position: 'relative' }}
              >
                <div
                  className="absolute inset-0 rounded-sm transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(17,17,17,0.08) 0%, rgba(17,17,17,0.02) 100%)`,
                    border: '1px solid rgba(17,17,17,0.08)',
                    transform: active === i ? 'scale(1.02)' : 'scale(1)',
                  }}
                />
                {/* Abstract weave pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
                  {Array.from({ length: 10 }).map((_, j) => (
                    <line key={`h${j}`} x1="0" y1={14 * j} x2="200" y2={14 * j + 30} stroke={mat.color} strokeWidth="0.5" />
                  ))}
                  {Array.from({ length: 8 }).map((_, j) => (
                    <line key={`v${j}`} x1={25 * j} y1="0" x2={25 * j + 10} y2="140" stroke={mat.color} strokeWidth="0.5" />
                  ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-display text-7xl md:text-8xl tracking-widest"
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      color: mat.color,
                      opacity: 0.25,
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
              </div>

              {/* Material name */}
<div className="font-display text-3xl md:text-4xl text-[#111111] mb-1 tracking-wide"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                {mat.name}
              </div>
              <div className="font-mono text-[9px] tracking-[0.3em] text-[rgba(74,74,74,0.6)] mb-4">
                {mat.nameEn}
              </div>

              {/* Specs */}
              <div className="mb-5 space-y-1">
                <div className="font-mono text-[9px] tracking-[0.2em]" style={{ color: 'rgba(74,74,74,0.6)' }}>
                  {mat.origin}
                </div>
                <div className="font-mono text-[9px] tracking-[0.2em]" style={{ color: 'rgba(74,74,74,0.5)' }}>
                  {mat.weight}
                </div>
              </div>

              {/* Description */}
              <p className="font-serif text-[14px] italic leading-relaxed" style={{ color: 'rgba(74,74,74,0.72)' }}>
                {mat.desc}
              </p>

              {/* Active indicator */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500"
                style={{
                  background: '#C7FF64',
                  opacity: active === i ? 0.35 : 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
