'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TICKER = [
  '패러글라이더', '텐트', '세일', '다이빙 슈트',
  '업사이클링 소재', '퓨처 아카이브', 'OVERLAB', '2020년부터',
  '패러글라이더', '텐트', '세일', '다이빙 슈트',
  '업사이클링 소재', '퓨처 아카이브', 'OVERLAB', '2020년부터',
];

const HEADLINE = ['움직임은', '결코', '끝나지 않는다.'];

export default function NewHeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#181A16' }}
    >
      {/* Noise layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.8,
        }}
      />

      {/* Lime glow — upper right */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '0%', right: '10%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(196, 200, 40, 0.07) 0%, transparent 65%)',
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />
      {/* Lime glow — lower left */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          bottom: '10%', left: '0%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(196, 200, 40, 0.04) 0%, transparent 65%)',
          transform: `translateY(${-scrollY * 0.05}px)`,
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center w-full pt-32 md:pt-40 pb-24 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">

            {/* ── Left: Typography ── */}
            <div className="lg:col-span-8">

              {/* Label row */}
              <motion.div
                className="flex items-center gap-4 mb-10 md:mb-14"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
              >
                <div className="w-8 h-px" style={{ backgroundColor: 'var(--lime-primary)' }} />
                <span className="font-mono text-xs tracking-[0.3em] uppercase"
                  style={{ color: 'rgba(245,245,239,0.62)' }}>
                  퓨처 아카이브
                </span>
                <div className="w-8 h-px" style={{ backgroundColor: 'rgba(245,245,239,0.2)' }} />
                <span className="font-mono text-xs tracking-[0.3em] uppercase"
                  style={{ color: 'rgba(245,245,239,0.42)' }}>
                  SS 2024
                </span>
              </motion.div>

              {/* Headline */}
              <div className="mb-14 md:mb-20">
                {HEADLINE.map((word, i) => (
                  <div key={word} className="overflow-hidden">
                    <motion.div
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.18 + i * 0.13, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h1
                        className="font-ko text-white"
                        style={{
                          fontSize: 'clamp(2.8rem, 7vw, 7.5rem)',
                          letterSpacing: '-0.01em',
                          lineHeight: 1.05,
                          fontWeight: 900,
                        }}
                      >
                        {word}
                      </h1>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Divider + sub content */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-10"
                style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9 }}
              >
                {/* Description */}
                <div>
                  <p className="font-serif text-base md:text-lg italic leading-relaxed mb-8"
                    style={{ color: 'rgba(245,245,239,0.78)', maxWidth: '32ch' }}>
                    버려진 스포츠 장비가 일상의 시(詩)가 되는 곳.
                    오버랩은 한때 움직였던 것들을 새롭게 재탄생시킵니다.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs tracking-[0.25em] uppercase"
                      style={{ color: 'rgba(245,245,239,0.48)' }}>
                      스크롤하여 탐색
                    </span>
                    <motion.div
                      className="w-px h-6 origin-top"
                      style={{ backgroundColor: 'rgba(245,245,239,0.2)' }}
                      animate={{ scaleY: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3 sm:items-start">
                  <Link href="/archive" className="btn-outline-dark group inline-flex items-center gap-3 w-fit">
                    아카이브 탐색
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                  <Link href="/products" className="btn-lime group inline-flex items-center gap-3 w-fit">
                    지금 쇼핑하기
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* ── Right: Abstract visual ── */}
            <div className="hidden lg:flex lg:col-span-4 items-center justify-center">
              <motion.div
                className="relative w-full max-w-xs aspect-square"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 50%, rgba(163,230,53,0.14) 0%, transparent 60%)' }}
                />
                <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
                  <circle cx="200" cy="200" r="170" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
                  <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
                  <circle cx="200" cy="200" r="100" stroke="rgba(255,255,255,0.07)" strokeWidth="0.6" />
                  <circle cx="200" cy="200" r="60" stroke="rgba(163,230,53,0.2)" strokeWidth="0.8" />
                  <circle cx="200" cy="200" r="20" stroke="rgba(163,230,53,0.5)" strokeWidth="1" />
                  {Array.from({ length: 24 }).map((_, i) => (
                    <line key={`rl-${i}`}
                      x1={200 + Math.cos((i * 15 * Math.PI) / 180) * 22}
                      y1={200 + Math.sin((i * 15 * Math.PI) / 180) * 22}
                      x2={200 + Math.cos((i * 15 * Math.PI) / 180) * 170}
                      y2={200 + Math.sin((i * 15 * Math.PI) / 180) * 170}
                      stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"
                    />
                  ))}
                  <line x1="30" y1="200" x2="370" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  <line x1="200" y1="30" x2="200" y2="370" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  <path d="M 60 230 Q 200 70 340 230" stroke="rgba(163,230,53,0.25)" strokeWidth="1.2" fill="none" />
                  <path d="M 90 230 Q 200 95 310 230" stroke="rgba(163,230,53,0.15)" strokeWidth="0.8" fill="none" />
                  <path d="M 120 230 Q 200 120 280 230" stroke="rgba(163,230,53,0.1)" strokeWidth="0.6" fill="none" />
                  {[100, 130, 160, 200, 240, 270, 300].map((x, i) => (
                    <line key={`sl-${i}`}
                      x1={x} y1={230 - (i < 3 ? (3 - i) * 12 : i > 3 ? (i - 3) * 12 : 0)}
                      x2="200" y2="200"
                      stroke="rgba(163,230,53,0.08)" strokeWidth="0.5"
                    />
                  ))}
                  <rect x="28" y="28" width="12" height="12" stroke="rgba(163,230,53,0.3)" strokeWidth="0.8" fill="none" />
                  <rect x="360" y="28" width="12" height="12" stroke="rgba(163,230,53,0.3)" strokeWidth="0.8" fill="none" />
                  <rect x="28" y="360" width="12" height="12" stroke="rgba(163,230,53,0.3)" strokeWidth="0.8" fill="none" />
                  <rect x="360" y="360" width="12" height="12" stroke="rgba(163,230,53,0.3)" strokeWidth="0.8" fill="none" />
                  <circle cx="200" cy="200" r="5" fill="#A3E635" opacity="0.9" />
                  <circle cx="200" cy="200" r="10" fill="#A3E635" opacity="0.15" />
                  <text x="216" y="197" fontSize="7" fill="rgba(163,230,53,0.5)" fontFamily="Space Mono" letterSpacing="2">원점</text>
                  <text x="32" y="22" fontSize="6" fill="rgba(255,255,255,0.2)" fontFamily="Space Mono" letterSpacing="1">OVL-001</text>
                  <text x="22" y="390" fontSize="6" fill="rgba(255,255,255,0.15)" fontFamily="Space Mono" letterSpacing="1">아카이브 · 2024</text>
                </svg>
                <motion.div
                  className="absolute top-4 right-4 font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'rgba(163,230,53,0.4)', fontSize: '9px' }}
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  참조 아카이브
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom ticker ── */}
      <div className="relative z-10 overflow-hidden"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="py-4">
          <div className="animate-marquee">
            {TICKER.map((item, i) => (
              <span key={i} className="font-mono text-xs tracking-[0.3em] uppercase px-8"
                style={{ color: 'rgba(245,245,239,0.35)', whiteSpace: 'nowrap' }}>
                {item}
                <span style={{ color: 'var(--lime-primary)', marginLeft: '28px' }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
