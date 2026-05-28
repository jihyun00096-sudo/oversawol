'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const FEATURED = {
  name: '아카이브 토트',
  collection: '패러글라이더 시리즈',
  desc: '역할을 다한 고고도 패러글라이더 캐노피로 제작. 믿기 어려울 만큼 가볍지만, 평생을 함께할 내구성 — 이 가방은 알프스를 본 적 있습니다.',
  price: '₩280,000',
  tags: ['초경량', '방수', '데일리 캐리'],
  ref: '#paraglider',
};

const PRODUCTS = [
  {
    id: 2,
    name: '세일러 재킷',
    collection: '세일 리본',
    price: '₩420,000',
    tags: ['방수', '테크니컬'],
  },
  {
    id: 3,
    name: '알티튜드 백팩',
    collection: '패러글라이더 시리즈',
    price: '₩350,000',
    tags: ['구조적', '알파인'],
  },
  {
    id: 4,
    name: '딥 쿠션',
    collection: '다이빙 시리즈',
    price: '₩180,000',
    tags: ['보온', '홈'],
  },
  {
    id: 5,
    name: '쉘터 파우치',
    collection: '텐트 리바이벌',
    price: '₩95,000',
    tags: ['컴팩트', '여행'],
  },
  {
    id: 6,
    name: '오션 베이신',
    collection: '세일 리본',
    price: '₩220,000',
    tags: ['조각적', '데코'],
  },
];

export default function ProductShowcaseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full bg-bg-secondary overflow-hidden py-28 md:py-36 lg:py-48"
    >
      <div className="px-6 md:px-12 lg:px-16 xl:px-20 max-w-screen-2xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5"
                style={{ border: '1px solid rgba(163,230,53,0.45)', backgroundColor: 'rgba(163,230,53,0.07)' }}
              >
                <div className="w-1 h-1 rounded-full bg-lime-primary flex-shrink-0" />
                <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">
                  주요 제품
                </span>
              </div>
            </motion.div>
            <h2
              className="font-ko text-text-primary"
              style={{ fontSize: 'clamp(1.9rem, 3.8vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              목적 있는<br />
              <span style={{ borderBottom: '2px solid var(--lime-primary)', paddingBottom: '0.1em' }}>오브제.</span>
            </h2>
          </div>
          <Link href="/products" className="btn-outline group inline-flex items-center gap-3 whitespace-nowrap flex-shrink-0">
            전체 보기
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        {/* ── Editorial grid: featured large + grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

          {/* Featured product — large left */}
          <motion.div
            className="lg:col-span-5 group relative overflow-hidden card-lift"
            style={{ minHeight: 'clamp(400px, 60vw, 640px)' }}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            {/* Image placeholder */}
            <div className="absolute inset-0 img-placeholder group-hover:scale-[1.03] transition-transform duration-700" />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.15) 60%, transparent 100%)' }}
            />

            {/* Featured badge */}
            <div className="absolute top-6 left-6">
              <span
                className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1.5"
                style={{ backgroundColor: 'var(--lime-primary)', color: '#111111' }}
              >
                추천
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-lime-primary opacity-80 block mb-3">
                {FEATURED.collection}
              </span>
              <h3
                className="font-ko text-white mb-4 group-hover:text-lime-primary transition-colors duration-300"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                {FEATURED.name}
              </h3>
              <p className="font-serif italic text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
                {FEATURED.desc}
              </p>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <span
                  className="font-display text-white"
                  style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', letterSpacing: '-0.02em' }}
                >
                  {FEATURED.price}
                </span>
                <Link href="/products" className="btn-lime group-inner inline-flex items-center gap-2 text-xs py-2 px-5">
                  지금 쇼핑하기 →
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Product grid — right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 content-start">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} i={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Bottom CTA band */}
        <motion.div
          className="mt-20 md:mt-28 py-10 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            backgroundColor: '#181A16',
            background: 'linear-gradient(135deg, #181A16 0%, #1f2218 100%)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div>
            <h3
              className="font-ko text-white mb-1"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)', letterSpacing: '-0.02em', lineHeight: 1.2 }}
            >
              모든 오브제에는 이야기가 있습니다.
            </h3>
            <p className="font-serif italic text-sm" style={{ color: 'rgba(245,245,239,0.72)' }}>
              31개 제품, 4개 소재 컬렉션 — 전체 아카이브를 탐색하세요.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/archive" className="btn-outline-dark group inline-flex items-center gap-2 whitespace-nowrap">
              아카이브
            </Link>
            <Link href="/products" className="btn-lime group inline-flex items-center gap-2 whitespace-nowrap">
              전체 쇼핑 →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  i,
  inView,
}: {
  product: (typeof PRODUCTS)[0];
  i: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="group flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.25 + i * 0.08, duration: 0.7 }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden mb-5 img-placeholder"
        style={{ aspectRatio: '3/4' }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
          style={{ backgroundColor: 'rgba(17,17,17,0.35)' }}
        >
          <Link
            href="/products"
            className="font-mono text-xs tracking-[0.2em] uppercase px-5 py-2.5"
            style={{ backgroundColor: 'var(--lime-primary)', color: '#111111' }}
          >
            보기
          </Link>
        </div>
      </div>

      {/* Info */}
      <div>
        <span className="font-mono text-xs text-text-muted uppercase tracking-[0.2em] block mb-1.5">
          {product.collection}
        </span>
        <h4
          className="font-ko text-text-primary mb-3 group-hover:text-lime-primary transition-colors duration-300"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.3rem)', letterSpacing: '-0.01em', lineHeight: 1.2 }}
        >
          {product.name}
        </h4>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1"
              style={{ border: '1px solid rgba(17,17,17,0.15)', color: '#6B6B6B' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}
        >
          <span
            className="font-display text-text-primary"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', letterSpacing: '-0.02em' }}
          >
            {product.price}
          </span>
          <Link
            href="/products"
            className="font-mono text-xs text-lime-primary uppercase tracking-[0.2em] hover:text-lime-secondary transition-colors duration-300"
          >
            담기 →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
