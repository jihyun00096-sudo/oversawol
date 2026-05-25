'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

const FILTERS = ['전체', '패러글라이더', '세일', '텐트', '다이빙'];
const FILTER_MAP: Record<string, string> = {
  '전체': 'All',
  '패러글라이더': 'Paraglider',
  '세일': 'Sail',
  '텐트': 'Tent',
  '다이빙': 'Diving',
};

const PRODUCTS = [
  { id: 1, name: '아카이브 토트', collection: '패러글라이더 시리즈', price: '₩280,000', tags: ['초경량', '데일리 캐리'], filter: 'Paraglider', desc: '역할을 다한 고고도 패러글라이더 캐노피로 제작. 믿기 어려울 만큼 가볍고, 평생을 함께할 내구성.' },
  { id: 2, name: '세일러 재킷', collection: '세일 리본', price: '₩420,000', tags: ['방수', '테크니컬'], filter: 'Sail', desc: '해양 등급 테크니컬 재킷. 모든 스티치는 웨어러블 아트로 변환된 대양 항해의 이야기를 담습니다.' },
  { id: 3, name: '알티튜드 백팩', collection: '패러글라이더 시리즈', price: '₩350,000', tags: ['구조적', '알파인'], filter: 'Paraglider', desc: '빈티지 패러글라이더 캐노피로 엔지니어링. 기능적 용량의 미니멀리스트 디자인.' },
  { id: 4, name: '딥 쿠션', collection: '다이빙 시리즈', price: '₩180,000', tags: ['보온', '홈'], filter: 'Diving', desc: '편안함과 지속가능성의 만남. 재활용 다이빙 슈트 네오프렌으로 완벽한 지지력.' },
  { id: 5, name: '쉘터 파우치', collection: '텐트 리바이벌', price: '₩95,000', tags: ['컴팩트', '여행'], filter: 'Tent', desc: '원정 텐트에서 일상 캐리로. 방수 처리, 내구성 강화.' },
  { id: 6, name: '오션 베이신', collection: '세일 리본', price: '₩220,000', tags: ['조각적', '데코'], filter: 'Sail', desc: '조각적 액센트 피스. 해양 등급 원단이 기능적 홈 디자인으로 변환.' },
  { id: 7, name: '플라이트 액세서리', collection: '패러글라이더 시리즈', price: '₩60,000–', tags: ['컬렉션', '액세서리'], filter: 'Paraglider', desc: '헤어밴드, 파우치, 스트랩 — 모두 프리미엄 패러글라이더 원단으로 제작.' },
  { id: 8, name: '익스페디션 코트', collection: '텐트 리바이벌', price: '₩385,000', tags: ['방수', '어드벤처'], filter: 'Tent', desc: '기술 텐트 원단으로 엔지니어링. 방수, 통기성, 어드벤처를 위해 설계.' },
];

export default function ProductsPage() {
  const [active, setActive] = useState('전체');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const filtered = active === '전체' ? PRODUCTS : PRODUCTS.filter(p => p.filter === FILTER_MAP[active]);

  return (
    <main className="relative w-full overflow-x-hidden bg-bg-primary">
      <Cursor />
      <Navigation />

      {/* ── Hero ── */}
      <section
        className="relative w-full min-h-[70vh] flex items-end overflow-hidden"
        style={{ backgroundColor: '#181A16' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(216,255,62,0.1) 0%, transparent 55%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
            opacity: 0.6,
          }} />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-20 pb-16 md:pb-20 pt-36 max-w-screen-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: '#D8FF3E' }} />
              <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(245,245,239,0.4)' }}>
                컬렉션 쇼핑하기
              </span>
            </div>
            <h1
              className="font-display text-white leading-none mb-8"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', letterSpacing: '-0.03em', lineHeight: 0.88 }}
            >
              제품
            </h1>
            <p className="font-serif italic leading-relaxed max-w-lg"
              style={{ color: 'rgba(245,245,239,0.6)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              스포츠 장비에서 재탄생한 현대적 오브제. 각 조각은 변환의 이야기를 담고, 이전 삶의 기억을 간직합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <div
        className="sticky top-0 z-30 px-6 md:px-12 lg:px-16 xl:px-20 py-4 backdrop-blur-xl"
        style={{ backgroundColor: 'rgba(245,245,239,0.92)', borderBottom: '1px solid rgba(17,17,17,0.08)' }}
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-xs text-text-muted uppercase tracking-[0.2em]">
            {filtered.length} 제품
          </span>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300"
                style={{
                  border: `1px solid ${active === f ? '#D8FF3E' : 'rgba(17,17,17,0.2)'}`,
                  color: active === f ? '#111111' : '#6B6B6B',
                  backgroundColor: active === f ? '#D8FF3E' : 'transparent',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Products grid ── */}
      <section
        ref={ref}
        className="relative w-full py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary"
      >
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                className="group flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.7 }}
              >
                {/* Image */}
                <div className="relative img-placeholder overflow-hidden mb-5"
                  style={{ aspectRatio: '3/4' }}>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                    style={{ backgroundColor: 'rgba(17,17,17,0.4)' }}
                  >
                    <button
                      className="font-mono text-xs tracking-[0.2em] uppercase px-5 py-2.5"
                      style={{ backgroundColor: '#D8FF3E', color: '#111111' }}
                    >
                      빠른 보기
                    </button>
                  </div>
                </div>

                {/* Info */}
                <span className="font-mono text-xs text-text-muted uppercase tracking-[0.2em] block mb-1.5">
                  {product.collection}
                </span>
                <h3
                  className="font-display text-text-primary mb-2 group-hover:text-lime-primary transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                >
                  {product.name}
                </h3>
                <p className="font-serif italic text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {product.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2 py-1"
                      style={{ border: '1px solid rgba(17,17,17,0.15)', color: '#6B6B6B' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3"
                  style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
                  <span className="font-display text-text-primary"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', letterSpacing: '-0.02em' }}>
                    {product.price}
                  </span>
                  <button className="font-mono text-xs text-lime-primary uppercase tracking-[0.2em] hover:text-lime-secondary transition-colors duration-300">
                    장바구니 담기 →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-secondary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="font-display text-text-primary leading-none mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}>
              더 찾고 계신가요?
            </h2>
            <p className="font-serif italic text-text-secondary text-base leading-relaxed mb-8 max-w-md">
              아카이브를 탐색하여 제품 뒤에 있는 소재에 대해 더 알아보거나, 진행 중인 프로젝트와 협업을 발견해 보세요.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/archive" className="btn-lime group w-full text-center inline-flex items-center justify-center gap-3">
              아카이브 탐색 →
            </Link>
            <Link href="/projects" className="btn-outline group w-full text-center inline-flex items-center justify-center gap-3">
              프로젝트 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
