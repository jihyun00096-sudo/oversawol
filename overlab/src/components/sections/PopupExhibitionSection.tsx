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

const exhibitions = [
  {
    id: 'EXH-01',
    year: '2024',
    month: 'MAR',
    title: 'ARCHIVE SPACE',
    location: '성수동, 서울',
    desc: '소재의 기억과 흔적을 전시 공간으로 재해석. 패러글라이더 캐노피를 활용한 설치 작업.',
    status: 'PAST',
    visitors: '2,840',
  },
  {
    id: 'EXH-02',
    year: '2024',
    month: 'AUG',
    title: 'SECOND MOVEMENT',
    location: 'Seoul Museum of Craft',
    desc: '레저 산업의 소재 순환을 주제로 한 그룹전. 산업 다큐멘터리 형식의 브랜드 전시.',
    status: 'PAST',
    visitors: '5,120',
  },
  {
    id: 'EXH-03',
    year: '2024',
    month: 'NOV',
    title: 'OVERLAB POP-UP 03',
    location: '한남동, 서울',
    desc: '2024 FW 컬렉션 론칭 팝업. 소재별 아카이브 구성과 현장 재봉 퍼포먼스.',
    status: 'UPCOMING',
    visitors: null,
  },
];

export default function PopupExhibitionSection() {
  const { ref, inView } = useInView(0.1);
  const [activeEx, setActiveEx] = useState(0);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="exhibition"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: 'radial-gradient(circle at 20% 15%, rgba(199,255,100,0.08), transparent 24%), linear-gradient(180deg, #F5F5F0 0%, #ECEDE7 100%)' }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div
            className="section-label mb-5"
            style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.2s' }}
          >
            07 / POP-UP & EXHIBITION
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
            SPACE &<br />
            <span style={{ color: '#C7FF64' }}>RECORD</span>
          </h2>
        </div>

        {/* Exhibition cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {exhibitions.map((ex, i) => (
            <div
              key={ex.id}
              className="relative cursor-pointer transition-all duration-400"
              style={{
                borderTop: '1px solid rgba(17,17,17,0.08)',
                borderLeft: i > 0 ? '1px solid rgba(17,17,17,0.08)' : 'none',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(30px)',
                transition: `opacity 0.8s ease ${0.2 + i * 0.12}s, transform 0.8s ease ${0.2 + i * 0.12}s`,
              }}
              onMouseEnter={() => setActiveEx(i)}
              onClick={() => setActiveEx(i)}
            >
              <div
                className="p-6 md:p-10 h-full transition-all duration-500"
                style={{
                  backgroundColor: activeEx === i ? 'rgba(199,255,100,0.08)' : 'rgba(255,255,255,0.74)',
                  border: '1px solid rgba(17,17,17,0.08)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Status */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="font-mono text-[9px] tracking-[0.3em]"
                    style={{ color: ex.status === 'UPCOMING' ? '#C7FF64' : '#4A4A4A' }}
                  >
                    {ex.status === 'UPCOMING' ? '▶ UPCOMING' : `✓ ${ex.status}`}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[rgba(74,74,74,0.4)]">{ex.id}</span>
                </div>

                {/* Date */}
                <div className="mb-6">
                  <div className="font-display text-6xl md:text-7xl text-[#111111] leading-none"
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      opacity: activeEx === i ? 1 : 0.6,
                      transition: 'opacity 0.4s ease',
                    }}
                  >
                    {ex.month}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.35em] text-[rgba(74,74,74,0.7)]">
                    {ex.year}
                  </div>
                </div>

                {/* Visual placeholder */}
                <div
                  className="w-full mb-6 relative overflow-hidden"
                  style={{ height: '160px' }}
                >
                  <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      background: activeEx === i
                        ? 'linear-gradient(135deg, rgba(199,255,100,0.14) 0%, rgba(199,255,100,0.04) 100%)'
                        : 'linear-gradient(135deg, rgba(17,17,17,0.06) 0%, transparent 100%)',
                      border: '1px solid rgba(17,17,17,0.08)',
                    }}
                  />
                  {/* Abstract grid / space lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 8 }).map((_, j) => (
                      <line key={`h${j}`} x1="0" y1={20 * j} x2="300" y2={20 * j} stroke="rgba(17,17,17,0.12)" strokeWidth="0.5" />
                    ))}
                    {Array.from({ length: 10 }).map((_, j) => (
                      <line key={`v${j}`} x1={30 * j} y1="0" x2={30 * j} y2="160" stroke="rgba(17,17,17,0.12)" strokeWidth="0.5" />
                    ))}
                    <rect x="50" y="30" width="90" height="70" fill="none" stroke="rgba(17,17,17,0.12)" strokeWidth="0.5" opacity="0.5" />
                    <rect x="160" y="60" width="110" height="60" fill="none" stroke="rgba(17,17,17,0.12)" strokeWidth="0.5" opacity="0.3" />
                  </svg>
                  {ex.visitors && (
                    <div className="absolute bottom-3 right-3 font-mono text-[9px] tracking-[0.2em] text-[rgba(74,74,74,0.55)]">
                      {ex.visitors} visitors
                    </div>
                  )}
                  {ex.status === 'UPCOMING' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-[9px] tracking-[0.4em] text-[#C7FF64]/75 border border-[#C7FF64]/20 px-3 py-1">
                        COMING SOON
                      </span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <div
                  className="font-display text-2xl md:text-3xl text-[#111111] mb-2 tracking-wide"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  {ex.title}
                </div>

                {/* Location */}
                <div className="font-mono text-[9px] tracking-[0.25em] text-[rgba(74,74,74,0.75)] mb-5">
                  📍 {ex.location}
                </div>

                {/* Desc */}
                <p className="font-serif text-[14px] italic leading-relaxed" style={{ color: 'rgba(74,74,74,0.75)' }}>
                  {ex.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
