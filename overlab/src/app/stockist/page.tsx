'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/ui/Navigation';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/ui/Footer';

const ONLINE = [
  { name: 'OVERLAB 공식', url: 'overlab.co.kr', region: '글로벌', type: '직영' },
  { name: '무신사', url: 'musinsa.com', region: '한국', type: '멀티 브랜드' },
  { name: '29CM', url: '29cm.co.kr', region: '한국', type: '멀티 브랜드' },
  { name: 'Farfetch', url: 'farfetch.com', region: '글로벌', type: '럭셔리 마켓플레이스' },
  { name: 'Dover Street Market', url: 'doverstreetmarket.com', region: '글로벌', type: '큐레이션 멀티 브랜드' },
  { name: 'Browns Fashion', url: 'brownsfashion.com', region: '유럽', type: '멀티 브랜드' },
];

const PHYSICAL = [
  { name: 'OVERLAB 플래그십', location: '마포구, 서울', address: '서울시 마포구 디자인가 123', hours: '11:00–20:00 매일', type: '플래그십' },
  { name: '더현대 서울', location: '중구, 서울', address: '서울시 영등포구 더현대', hours: '10:30–20:00 매일', type: '백화점' },
  { name: '아모레퍼시픽 빌딩', location: '강남구, 서울', address: '서울시 용산구 아모레퍼시픽 HQ', hours: '11:00–21:00 매일', type: '럭셔리 복합몰' },
  { name: 'Dover Street Market 런던', location: '메이페어, 런던', address: 'Dover Street, London W1S', hours: '11:00–19:00 매일', type: '멀티 브랜드' },
  { name: 'Browns East 런던', location: '쇼어디치, 런던', address: 'Redchurch Street, E2', hours: '11:00–18:00 매일', type: '부티크' },
  { name: '콜레트 파리', location: '1구, 파리', address: 'Rue Saint-Honoré, Paris', hours: '11:00–19:30 월–토', type: '콘셉트 스토어' },
];

export default function StockistPage() {
  const onlineRef = useRef(null);
  const onlineInView = useInView(onlineRef, { once: true, amount: 0.1 });
  const physicalRef = useRef(null);
  const physicalInView = useInView(physicalRef, { once: true, amount: 0.1 });

  return (
    <main className="relative w-full overflow-x-hidden bg-bg-primary">
      <Cursor />
      <Navigation />

      {/* ── Hero ── */}
      <section
        className="relative w-full min-h-[65vh] flex items-end overflow-hidden"
        style={{ backgroundColor: '#181A16' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(196,200,40,0.1) 0%, transparent 55%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
            opacity: 0.6,
          }} />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-20 pb-16 md:pb-20 pt-36 max-w-screen-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--lime-primary)' }} />
              <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(245,245,239,0.4)' }}>
                찾아오시는 방법
              </span>
            </div>
            <h1
              className="font-ko text-white mb-8"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', letterSpacing: '-0.02em', lineHeight: 1.0 }}
            >
              스토어
            </h1>
            <p className="font-serif italic leading-relaxed max-w-lg"
              style={{ color: 'rgba(245,245,239,0.78)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              OVERLAB 제품은 전 세계 엄선된 리테일 파트너를 통해 구매하실 수 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Online ── */}
      <section
        ref={onlineRef}
        className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary"
      >
        <div className="max-w-screen-2xl mx-auto">
          <motion.div className="mb-14 md:mb-18"
            initial={{ opacity: 0, y: 20 }}
            animate={onlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
              style={{ border: '1px solid rgba(196,200,40,0.45)', backgroundColor: 'rgba(196,200,40,0.07)' }}
            >
              <div className="w-1 h-1 rounded-full bg-lime-primary flex-shrink-0" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">온라인 리테일러</span>
            </div>
            <h2 className="font-ko text-text-primary"
              style={{ fontSize: 'clamp(1.7rem, 3.2vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              온라인 쇼핑
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ backgroundColor: 'rgba(17,17,17,0.08)' }}>
            {ONLINE.map((store, i) => (
              <motion.div
                key={store.name}
                className="group relative p-8 md:p-10 bg-bg-primary hover:bg-bg-secondary transition-colors duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={onlineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-lime-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono text-xs uppercase tracking-[0.2em] px-2.5 py-1"
                      style={{ backgroundColor: 'rgba(196,200,40,0.1)', color: 'rgba(196,200,40,0.8)' }}
                    >
                      {store.type}
                    </span>
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em]">{store.region}</span>
                  </div>
                  <h3
                    className="font-ko text-text-primary mb-6 group-hover:text-lime-primary transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.5rem)', letterSpacing: '-0.01em', lineHeight: 1.2 }}
                  >
                    {store.name}
                  </h3>
                  <a
                    href={`https://${store.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime-primary hover:text-lime-secondary transition-colors duration-300"
                  >
                    스토어 방문
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Physical ── */}
      <section
        ref={physicalRef}
        className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-secondary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <motion.div className="mb-14 md:mb-18"
            initial={{ opacity: 0, y: 20 }}
            animate={physicalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
              style={{ border: '1px solid rgba(196,200,40,0.45)', backgroundColor: 'rgba(196,200,40,0.07)' }}
            >
              <div className="w-1 h-1 rounded-full bg-lime-primary flex-shrink-0" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">오프라인 매장</span>
            </div>
            <h2 className="font-ko text-text-primary"
              style={{ fontSize: 'clamp(1.7rem, 3.2vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              직접 방문하세요
            </h2>
          </motion.div>

          <div className="space-y-0" style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
            {PHYSICAL.map((store, i) => (
              <motion.div
                key={store.name}
                className="group"
                initial={{ opacity: 0, x: -20 }}
                animate={physicalInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.7 }}
              >
                <div
                  className="relative grid grid-cols-12 gap-4 md:gap-8 py-8 overflow-hidden transition-colors duration-300"
                  style={{ borderBottom: '1px solid rgba(17,17,17,0.08)' }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ backgroundColor: 'rgba(196,200,40,0.03)' }} />

                  {/* Type badge */}
                  <div className="col-span-12 md:col-span-2 flex items-center md:items-start md:pt-1">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] px-2.5 py-1"
                      style={{ border: '1px solid rgba(196,200,40,0.35)', color: 'rgba(196,200,40,0.75)' }}>
                      {store.type}
                    </span>
                  </div>

                  {/* Name + location */}
                  <div className="col-span-12 md:col-span-4">
                    <h3
                      className="font-ko text-text-primary mb-1 group-hover:text-lime-primary transition-colors duration-300"
                      style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.5rem)', letterSpacing: '-0.01em', lineHeight: 1.2 }}
                    >
                      {store.name}
                    </h3>
                    <p className="font-serif italic text-text-secondary text-sm">{store.location}</p>
                  </div>

                  {/* Address */}
                  <div className="col-span-6 md:col-span-4">
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] block mb-1">주소</span>
                    <p className="font-sans text-sm text-text-secondary">{store.address}</p>
                  </div>

                  {/* Hours */}
                  <div className="col-span-6 md:col-span-2">
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] block mb-1">영업시간</span>
                    <p className="font-sans text-sm text-text-secondary">{store.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Presence ── */}
      <section className="relative w-full py-20 md:py-24 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-1 rounded-full bg-lime-primary flex-shrink-0" />
            <h2 className="font-ko text-text-primary"
              style={{ fontSize: 'clamp(1.3rem, 2vw, 2.2rem)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              글로벌 현황
            </h2>
          </div>
          <div
            className="relative img-placeholder flex items-center justify-center"
            style={{ aspectRatio: '21/9' }}
          >
            <div className="text-center opacity-20">
              <div className="font-display text-text-primary mb-2"
                style={{ fontSize: '4rem', letterSpacing: '-0.04em' }}>
                WORLD
              </div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-widest">[인터랙티브 맵 — 180개국 이상]</div>
            </div>
            {/* Lime accent corner */}
            <div className="absolute bottom-0 left-0 w-16 h-1" style={{ backgroundColor: 'var(--lime-primary)' }} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
