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

const partners = [
  { name: 'KT', category: 'TELECOM', desc: 'Drone & Digital' },
  { name: 'NIKE', category: 'SPORTS', desc: 'Apparel Research' },
  { name: 'LG', category: 'ELECTRONICS', desc: 'Sustainability' },
  { name: 'VOLVO', category: 'AUTOMOTIVE', desc: 'Marine Division' },
  { name: 'SNOW PEAK', category: 'OUTDOOR', desc: 'Material Supply' },
  { name: 'SALOMON', category: 'ALPINE', desc: 'Gear Recovery' },
];

export default function CollaborationSection() {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="collab"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: 'radial-gradient(circle at 10% 15%, rgba(199,255,100,0.08), transparent 24%), linear-gradient(180deg, #F5F5F0 0%, #ECEDE7 100%)' }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div
            className="section-label mb-5"
            style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.2s' }}
          >
            06 / GLOBAL COLLABORATION
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
              PARTNERS<br />
              <span style={{ color: '#C7FF64' }}>& COLLAB</span>
            </h2>
            <p
              className="font-serif text-[16px] italic max-w-[260px] leading-relaxed"
              style={{
                color: 'rgba(74,74,74,0.72)',
                opacity: inView ? 1 : 0,
                transition: 'opacity 0.9s ease 0.5s',
              }}
            >
              산업의 경계를 넘어<br />
              새로운 순환을 함께 만드는 파트너들.
            </p>
          </div>
        </div>

        {/* Partners list */}
        <div className="flex flex-col gap-0">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className="group relative flex items-center justify-between py-6 md:py-8 cursor-pointer transition-all duration-300"
              style={{
                borderTop: '1px solid rgba(17,17,17,0.08)',
                borderBottom: i === partners.length - 1 ? '1px solid rgba(17,17,17,0.08)' : 'none',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateX(-20px)',
                transition: `opacity 0.7s ease ${0.1 + i * 0.08}s, transform 0.7s ease ${0.1 + i * 0.08}s, background-color 0.3s ease`,
                backgroundColor: hovered === i ? 'rgba(199,255,100,0.08)' : 'transparent',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center gap-6 md:gap-10">
                {/* Index */}
                <span className="font-mono text-[9px] tracking-[0.3em] text-[rgba(74,74,74,0.45)] w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Partner name */}
                <span
                  className="font-display text-[clamp(28px,5vw,68px)] leading-none tracking-wider transition-colors duration-300"
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    color: hovered === i ? '#111111' : 'rgba(74,74,74,0.8)',
                  }}
                >
                  {p.name}
                </span>

                {/* Category badge */}
                <span
                  className="hidden md:block font-mono text-[9px] tracking-[0.3em] border px-2 py-1 transition-all duration-300"
                  style={{
                    borderColor: hovered === i ? 'rgba(199,255,100,0.5)' : 'rgba(17,17,17,0.12)',
                    color: hovered === i ? '#111111' : 'rgba(74,74,74,0.55)',
                  }}
                >
                  {p.category}
                </span>
              </div>

              {/* Right: desc + arrow */}
              <div className="flex items-center gap-4">
                <span
                  className="hidden md:block font-serif text-[14px] italic transition-all duration-300"
                  style={{
                    color: hovered === i ? 'rgba(74,74,74,0.75)' : 'rgba(74,74,74,0.3)',
                  }}
                >
                  {p.desc}
                </span>
                <svg
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="none"
                  className="transition-all duration-300"
                  style={{
                    opacity: hovered === i ? 1 : 0.2,
                    transform: hovered === i ? 'translateX(4px)' : 'none',
                    color: '#4A4A4A',
                  }}
                >
                  <line x1="0" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1" />
                  <polyline points="11,1 16,5 11,9" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="mt-14 flex items-center gap-6"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 1s ease 0.9s',
          }}
        >
          <span className="font-mono text-[9px] tracking-[0.3em] text-[rgba(74,74,74,0.5)]">
            파트너십 문의 →  hello@overlab.kr
          </span>
        </div>
      </div>
    </section>
  );
}
