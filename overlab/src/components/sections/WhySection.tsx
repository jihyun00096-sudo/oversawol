'use client';
import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.2) {
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

const pillars = [
  {
    num: '01',
    ko: '수거',
    en: 'COLLECTION',
    desc: '현장에서 직접 수거된 패러글라이더, 요트돛, 텐트. 폐기 직전의 소재들이 새 출발점이 됩니다.',
  },
  {
    num: '02',
    ko: '해체',
    en: 'DECONSTRUCTION',
    desc: '각 소재가 가진 구조와 성능을 이해하고 분해합니다. 이 과정 자체가 브랜드의 핵심 기술입니다.',
  },
  {
    num: '03',
    ko: '재설계',
    en: 'REDESIGN',
    desc: '소재 본연의 물성과 역사를 존중하며 새로운 형태로 재탄생시킵니다. 제품이 아닌 기록물입니다.',
  },
];

export default function WhySection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="archive"
      className="relative py-28 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: 'radial-gradient(circle at 90% 10%, rgba(168,183,106,0.08), transparent 22%), linear-gradient(180deg, #F5F5F0 0%, #ECEDE7 100%)' }}
    >
      {/* Decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(168,183,106,0.28), transparent)',
          transform: inView ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
          <div>
            <div
              className="section-label mb-5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(10px)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
              }}
            >
              02 / WHY OVERLAB
            </div>
            <h2
              className="font-display text-[clamp(48px,8vw,120px)] leading-none text-[#111111]"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(40px)',
                transition: 'opacity 0.9s ease 0.35s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s',
              }}
            >
              SECOND<br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(168,183,106,0.3)' }}>
                MOVEMENT
              </span>
            </h2>
          </div>

          <div
            className="max-w-xs"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s',
            }}
          >
            <p className="font-serif text-[17px] italic leading-relaxed" style={{ color: 'rgba(74,74,74,0.72)' }}>
              산업 순환 구조를 설계하는 브랜드.<br />
              환경을 위한 브랜드가 아닌,<br />
              움직임을 이어가는 브랜드입니다.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className="relative border-t border-[rgba(17,17,17,0.08)] py-10 md:py-14 md:pr-12"
              style={{
                borderLeft: i === 0 ? 'none' : '1px solid rgba(17,17,17,0.08)',
                paddingLeft: i === 0 ? 0 : '3rem',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(30px)',
                transition: `opacity 0.8s ease ${0.3 + i * 0.15}s, transform 0.8s ease ${0.3 + i * 0.15}s`,
              }}
            >
              {/* Number */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[rgba(74,74,74,0.7)]">{p.num}</span>
                <div className="h-px flex-1 bg-[rgba(17,17,17,0.08)]" />
              </div>

              {/* Korean */}
              <div className="font-display text-5xl md:text-6xl text-[#111111] mb-2 tracking-wide"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                {p.ko}
              </div>

              {/* English */}
              <div className="font-mono text-[9px] tracking-[0.35em] text-[rgba(74,74,74,0.65)] mb-6">
                {p.en}
              </div>

              {/* Desc */}
              <p className="font-serif text-[15px] italic leading-loose" style={{ color: 'rgba(216,212,206,0.45)' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div
          className="mt-20 md:mt-28 pt-10 border-t border-[rgba(17,17,17,0.08)] text-center"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 1s ease 0.9s',
          }}
        >
          <blockquote
            className="font-serif text-[clamp(20px,3vw,36px)] italic leading-relaxed"
            style={{ color: 'rgba(216,212,206,0.3)' }}
          >
            "우리는 폐기물을 다루지 않습니다.<br />
            우리는 기록과 흔적을 다룹니다."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
