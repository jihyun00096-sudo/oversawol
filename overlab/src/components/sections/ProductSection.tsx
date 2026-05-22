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

const products = [
  {
    id: 'OVL-P-001',
    name: '캐노피 크로스백',
    nameEn: 'CANOPY CROSSBAG',
    material: 'Paraglider Nylon',
    origin: '2022 패러글라이더 회수',
    edition: 'Limited — 24ea',
    price: '₩ 248,000',
    tag: 'AIR ARCHIVE',
    color: '#5a7a5a',
    w: 'col-span-2',
    h: '420px',
  },
  {
    id: 'OVL-P-002',
    name: '세일 토트백',
    nameEn: 'SAIL TOTE',
    material: 'Yacht Sail Dacron',
    origin: '2023 요트 돛 재활용',
    edition: 'Limited — 18ea',
    price: '₩ 198,000',
    tag: 'SEA ARCHIVE',
    color: '#8C8A7A',
    w: 'col-span-1',
    h: '280px',
  },
  {
    id: 'OVL-P-003',
    name: '파우치 세트',
    nameEn: 'POUCH SET',
    material: 'Alpine Tent Silnylon',
    origin: '2023 등산 텐트',
    edition: 'Limited — 36ea',
    price: '₩ 98,000',
    tag: 'PEAK ARCHIVE',
    color: '#7A6E5A',
    w: 'col-span-1',
    h: '280px',
  },
];

export default function ProductSection() {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="shop"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: 'radial-gradient(circle at 10% 10%, rgba(168,183,106,0.08), transparent 22%), linear-gradient(180deg, #F5F5F0 0%, #ECEDE7 100%)' }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div
            className="section-label mb-5"
            style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.2s' }}
          >
            08 / PRODUCT
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
              THE<br />
              <span style={{ color: '#A8B76A' }}>ARCHIVE</span><br />
              ITEMS
            </h2>
            <div
              style={{
                opacity: inView ? 1 : 0,
                transition: 'opacity 0.9s ease 0.5s',
              }}
            >
              <p className="font-serif text-[16px] italic max-w-[260px] leading-relaxed mb-6" style={{ color: 'rgba(74,74,74,0.75)' }}>
                각 제품은 소재의 이력이 담긴<br />
                단 하나의 아카이브입니다.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase border border-[rgba(17,17,17,0.12)] text-[#111111] hover:border-[#A8B76A] hover:text-[#A8B76A] px-5 py-3 transition-all duration-300"
              >
                View All Archive
              </a>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[rgba(17,17,17,0.04)]">
          {products.map((p, i) => (
            <div
              key={p.id}
              className={`relative bg-[rgba(255,255,255,0.78)] cursor-pointer ${i === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(40px)',
                transition: `opacity 0.9s ease ${0.2 + i * 0.15}s, transform 0.9s ease ${0.2 + i * 0.15}s`,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Visual area */}
              <div
                className="relative overflow-hidden"
                style={{ height: i === 0 ? '360px' : '240px', background: 'rgba(236,237,231,0.95)' }}
              >
                {/* Atmospheric background */}
                <div
                  className="absolute inset-0 transition-all duration-700"
                  style={{
                    background: `radial-gradient(ellipse at center, ${p.color}22 0%, transparent 70%)`,
                    transform: hovered === i ? 'scale(1.08)' : 'scale(1)',
                  }}
                />

                {/* Abstract product shape */}
                <svg
                  className="absolute inset-0 w-full h-full transition-all duration-700"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    opacity: 0.35,
                    transform: hovered === i ? 'scale(1.04)' : 'scale(1)',
                  }}
                >
                  {i === 0 && (
                    <>
                      <rect x="120" y="60" width="160" height="200" rx="8" fill="none" stroke={p.color} strokeWidth="1" />
                      <line x1="120" y1="100" x2="280" y2="100" stroke={p.color} strokeWidth="0.5" />
                      <line x1="200" y1="60" x2="200" y2="260" stroke={p.color} strokeWidth="0.5" />
                      <path d="M140,80 Q200,120 260,80" fill="none" stroke={p.color} strokeWidth="0.5" />
                      <circle cx="200" cy="150" r="40" fill="none" stroke={p.color} strokeWidth="0.5" strokeDasharray="4 6" />
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <path d="M100,80 L300,80 L280,240 L120,240 Z" fill="none" stroke={p.color} strokeWidth="1" />
                      <line x1="100" y1="80" x2="200" y2="40" stroke={p.color} strokeWidth="0.5" />
                      <line x1="300" y1="80" x2="200" y2="40" stroke={p.color} strokeWidth="0.5" />
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <ellipse cx="200" cy="150" rx="90" ry="70" fill="none" stroke={p.color} strokeWidth="1" />
                      <ellipse cx="200" cy="150" rx="60" ry="45" fill="none" stroke={p.color} strokeWidth="0.5" strokeDasharray="3 5" />
                      <line x1="110" y1="150" x2="290" y2="150" stroke={p.color} strokeWidth="0.5" />
                      <line x1="200" y1="80" x2="200" y2="220" stroke={p.color} strokeWidth="0.5" />
                    </>
                  )}
                </svg>

                {/* Tag */}
                <div className="absolute top-4 left-4 font-mono text-[8px] tracking-[0.3em] px-2 py-1"
                  style={{ color: 'rgba(17,17,17,0.85)', border: '1px solid rgba(17,17,17,0.12)' }}>
                  {p.tag}
                </div>

                {/* Edition badge */}
                <div className="absolute top-4 right-4 font-mono text-[8px] tracking-[0.2em] text-[rgba(74,74,74,0.65)]">
                  {p.edition}
                </div>
              </div>

              {/* Product info */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div
                      className="font-display text-2xl md:text-3xl text-[#111111] tracking-wide mb-1"
                      style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                    >
                      {p.name}
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.25em] text-[rgba(74,74,74,0.75)]">
                      {p.nameEn}
                    </div>
                  </div>
                  <div className="font-mono text-[13px] tracking-[0.05em] text-[#111111] whitespace-nowrap">
                    {p.price}
                  </div>
                </div>

                {/* Material origin */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[rgba(74,74,74,0.65)]">
                    소재: {p.material}
                  </span>
                  <span className="text-[rgba(17,17,17,0.18)]">·</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[rgba(74,74,74,0.55)]">
                    {p.origin}
                  </span>
                </div>

                {/* ID */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[rgba(74,74,74,0.5)]">{p.id}</span>
                  <a
                    href="#"
                    className="font-mono text-[9px] tracking-[0.25em] uppercase border-b border-[rgba(17,17,17,0.08)] text-[#111111] hover:text-[#A8B76A] hover:border-[#A8B76A]/50 pb-0.5 transition-all duration-200"
                  >
                    View Detail →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-28 md:mt-40 border-t border-[rgba(17,17,17,0.08)] px-6 md:px-12 lg:px-20 pt-12 pb-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="font-display text-4xl md:text-5xl text-[#111111] tracking-widest mb-3"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              OVERLAB
            </div>
            <p className="font-serif text-[14px] italic" style={{ color: 'rgba(74,74,74,0.55)' }}>
              산업 순환 구조를 설계하는 브랜드
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="font-mono text-[9px] tracking-[0.3em] text-[rgba(74,74,74,0.7)]">hello@overlab.kr</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-[rgba(74,74,74,0.55)]">© OVERLAB 2024 — All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
