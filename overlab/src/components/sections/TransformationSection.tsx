'use client';
import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.1) {
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

const steps = [
  {
    step: 'STEP 01',
    ko: '수거',
    en: 'COLLECTION',
    detail: '레저 스포츠 현장, 폐기 예정 장비 직거래, 브랜드 협력 프로그램을 통해 소재를 수거합니다.',
    icon: '↗',
  },
  {
    step: 'STEP 02',
    ko: '해체',
    en: 'DECONSTRUCTION',
    detail: '각 소재의 구조와 특성을 파악하고 봉제선, 코팅층, 소재 구조를 분해합니다.',
    icon: '⊞',
  },
  {
    step: 'STEP 03',
    ko: '검수·세척',
    en: 'INSPECTION',
    detail: '소재 상태를 면밀히 검수하고 고압 세척 및 UV 처리로 위생 기준을 충족시킵니다.',
    icon: '◎',
  },
  {
    step: 'STEP 04',
    ko: '재설계',
    en: 'REDESIGN',
    detail: '소재 본연의 물성을 최대한 살리는 방향으로 패턴을 설계합니다. 각 제품은 유일합니다.',
    icon: '⬡',
  },
  {
    step: 'STEP 05',
    ko: '완성',
    en: 'COMPLETION',
    detail: '소재의 역사가 담긴 제품이 완성됩니다. 제품 번호와 소재 출처가 함께 기록됩니다.',
    icon: '◆',
  },
];

export default function TransformationSection() {
  const { ref, inView } = useInView(0.1);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="process"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: 'radial-gradient(circle at 75% 10%, rgba(199,255,100,0.08), transparent 22%), linear-gradient(180deg, #F5F5F0 0%, #ECEDE7 100%)' }}
    >
      {/* Background number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display pointer-events-none select-none"
        style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(180px, 30vw, 400px)',
          color: 'rgba(17,17,17,0.06)',
          lineHeight: 1,
          right: '-2vw',
        }}
      >
        {String(activeStep + 1).padStart(2, '0')}
      </div>

      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div
            className="section-label mb-5"
            style={{
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.8s ease 0.2s',
            }}
          >
            04 / TRANSFORMATION
          </div>
          <h2
            className="font-display text-[clamp(44px,7vw,110px)] leading-none text-[#111111]"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(40px)',
              transition: 'opacity 0.9s ease 0.35s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.35s',
            }}
          >
            HOW WE<br />
            <span style={{ color: '#C7FF64' }}>TRANSFORM</span>
          </h2>
        </div>

        {/* Steps — vertical timeline on mobile, horizontal on desktop */}
        <div className="flex flex-col md:flex-row gap-0">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="relative flex-1 cursor-pointer"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(30px)',
                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`,
              }}
              onMouseEnter={() => setActiveStep(i)}
              onClick={() => setActiveStep(i)}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-6 z-10"
                  style={{
                    left: '100%',
                    width: '100%',
                    height: '1px',
                    background: `linear-gradient(90deg, rgba(199,255,100,${activeStep >= i ? 0.36 : 0.12}), rgba(17,17,17,0.08))`,
                    transition: 'background 0.5s ease',
                  }}
                />
              )}

              <div
                className="p-6 md:p-8 border-t md:border-t md:border-l-0 border-l-0 transition-all duration-500"
                style={{
                  borderTop: '1px solid rgba(17,17,17,0.08)',
                  borderLeft: i > 0 ? '0' : 'none',
                  backgroundColor: activeStep === i ? 'rgba(199,255,100,0.08)' : 'rgba(255,255,255,0.72)',
                }}
              >
                {/* Step badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center transition-all duration-400"
                    style={{
                      border: `1px solid ${activeStep === i ? 'rgba(199,255,100,0.45)' : 'rgba(17,17,17,0.15)'}`,
                      color: activeStep === i ? '#111111' : 'rgba(74,74,74,0.65)',
                      fontSize: '16px',
                    }}
                  >
                    {s.icon}
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.3em] text-[rgba(74,74,74,0.75)]">{s.step}</span>
                </div>

                {/* Names */}
                <div
                  className="font-display text-4xl md:text-5xl mb-1 transition-all duration-400"
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    color: activeStep === i ? '#111111' : 'rgba(74,74,74,0.55)',
                  }}
                >
                  {s.ko}
                </div>
                <div className="font-mono text-[9px] tracking-[0.3em] text-[rgba(74,74,74,0.45)] mb-5">{s.en}</div>

                {/* Detail */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: activeStep === i ? '120px' : '0px',
                    opacity: activeStep === i ? 1 : 0,
                  }}
                >
                  <p className="font-serif text-[14px] italic leading-relaxed" style={{ color: 'rgba(74,74,74,0.72)' }}>
                    {s.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom emphasis */}
        <div
          className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 1s ease 0.8s',
          }}
        >
          <div className="h-px flex-1 bg-[rgba(17,17,17,0.08)]" />
          <p className="font-serif text-[18px] italic text-center" style={{ color: 'rgba(74,74,74,0.7)' }}>
            모든 제품에는 소재의 출처와 제작 번호가 기록됩니다.
          </p>
          <div className="h-px flex-1 bg-[rgba(17,17,17,0.08)]" />
        </div>
      </div>
    </section>
  );
}
