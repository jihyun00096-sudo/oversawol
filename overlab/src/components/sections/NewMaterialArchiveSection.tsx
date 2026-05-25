'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const MATERIALS = [
  {
    id: 'paraglider',
    name: '패러글라이더',
    tagline: '하늘에서 일상으로',
    origin: '알파인 스포츠 센터',
    material: '고성능 나일론',
    weight: '초경량 80–150g/m²',
    products: 8,
    desc: '알파인 상공을 가르며 사람의 무게를 지탱하도록 설계된 초경량 나일론. 하늘에서 은퇴한 지금, 상상할 수 없을 만큼 가볍고 내구성 강한 일상의 오브제로 거듭납니다.',
    accentColor: 'rgba(196,200,40,0.12)',
  },
  {
    id: 'tent',
    name: '텐트',
    tagline: '쉼터의 변신',
    origin: '아웃도어 장비 창고',
    material: '기술 폴리에스터 혼방',
    weight: '프로페셔널 등급',
    products: 12,
    desc: '극한의 조건을 버텨낸 다층 방수 원단. 구조적 기억이 짜여든 이 패널들은 세계 최고봉의 능선에서 등반가들을 지켜왔습니다.',
    accentColor: 'rgba(196,200,40,0.08)',
  },
  {
    id: 'sail',
    name: '세일',
    tagline: '바다의 시',
    origin: '요트 클럽 & 마린 센터',
    material: '다크론 & 라미네이트 혼방',
    weight: '극한 날씨 테스트 완료',
    products: 6,
    desc: '대양의 돌풍을 맞서고 망망대해를 항해한 내염성 다크론 라미네이트. 각 조각에는 그 항해의 지도가 — 로프, 태양, 파도의 흔적이 — 희미하게 새겨져 있습니다.',
    accentColor: 'rgba(196,200,40,0.06)',
  },
  {
    id: 'diving',
    name: '다이빙 슈트',
    tagline: '깊이를 재상상하다',
    origin: '다이빙 스쿨 & 스포츠 센터',
    material: '네오프렌 & 스트레치 소재',
    weight: '고성능 단열',
    products: 5,
    desc: '수심에서 압력을 균형 잡고 차가운 바닷속 다이버를 따뜻하게 지켜온 열조절 네오프렌. 밀도 높고, 유연하고, 단열성이 뛰어나 — 쿠션, 패딩, 소프트 액세서리로 자연스럽게 변환됩니다.',
    accentColor: 'rgba(196,200,40,0.1)',
  },
];

export default function MaterialArchiveShowcaseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative w-full bg-bg-primary overflow-hidden py-28 md:py-36 lg:py-48">

      {/* Subtle grid bg */}
      <div className="absolute inset-0 -z-10 opacity-[0.025]">
        <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="archive-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#111111" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1440" height="900" fill="url(#archive-grid)" />
        </svg>
      </div>

      <div className="px-6 md:px-12 lg:px-16 xl:px-20 max-w-screen-2xl mx-auto">

        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:col-span-8">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5"
                style={{ border: '1px solid rgba(196,200,40,0.45)', backgroundColor: 'rgba(196,200,40,0.07)' }}
              >
                <div className="w-1 h-1 rounded-full bg-lime-primary flex-shrink-0" />
                <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">
                  아카이브 컬렉션
                </span>
              </div>
            </motion.div>
            <h2
              className="font-ko text-text-primary"
              style={{ fontSize: 'clamp(1.9rem, 3.8vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              네 가지 원천.<br />
              <span style={{ borderBottom: '2px solid var(--lime-primary)', paddingBottom: '0.1em' }}>하나의 아카이브.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="font-serif italic text-text-secondary text-base leading-relaxed">
              각 컬렉션은 그 출처의 이야기를 담고 있습니다 — 어디서 왔는지, 어떻게 변환되었는지, 무엇이 되었는지.
            </p>
          </div>
        </motion.div>

        {/* Materials — asymmetric editorial grid */}
        <div className="space-y-6 md:space-y-8">

          {/* Row 1: two equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {MATERIALS.slice(0, 2).map((mat, i) => (
              <MaterialCard key={mat.id} mat={mat} i={i} inView={inView} large />
            ))}
          </div>

          {/* Row 2: one wide + one narrow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2">
              <MaterialCard mat={MATERIALS[2]} i={2} inView={inView} large />
            </div>
            <div className="md:col-span-1">
              <MaterialCard mat={MATERIALS[3]} i={3} inView={inView} large={false} />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 md:mt-24 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div>
            <h3
              className="font-ko text-text-primary mb-3"
              style={{ fontSize: 'clamp(1.2rem, 2vw, 2rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              아카이브 전체 탐색
            </h3>
            <p className="font-serif italic text-text-secondary text-sm">
              4개 소재 카테고리, 31개 제품. 각각 추적 가능한 출처.
            </p>
          </div>
          <Link href="/archive" className="btn-lime group inline-flex items-center gap-3 whitespace-nowrap flex-shrink-0">
            아카이브 보기
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function MaterialCard({
  mat,
  i,
  inView,
  large,
}: {
  mat: (typeof MATERIALS)[0];
  i: number;
  inView: boolean;
  large: boolean;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden card-lift"
      style={{ height: large ? 'clamp(320px, 40vw, 520px)' : 'clamp(320px, 40vw, 520px)' }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 + i * 0.1, duration: 0.8 }}
    >
      <Link href={`/archive#${mat.id}`} className="block w-full h-full">
        {/* Placeholder background */}
        <div
          className="absolute inset-0 img-placeholder transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundColor: '#EFEDE7' }}
        />

        {/* Color wash */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 30% 30%, ${mat.accentColor}, transparent 60%)` }}
        />

        {/* Overlay gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(to top, rgba(17,17,17,0.85) 0%, rgba(17,17,17,0.2) 50%, transparent 100%)',
          }}
        />

        {/* Placeholder label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center opacity-20">
            <div
              className="font-display text-text-primary mb-2"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', letterSpacing: '-0.03em' }}
            >
              {mat.name.charAt(0)}
            </div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-widest">
              [이미지 준비 중]
            </div>
          </div>
        </div>

        {/* Top: product count */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1.5"
            style={{
              backgroundColor: 'rgba(17,17,17,0.6)',
              color: 'var(--lime-primary)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {mat.products} 제품
          </span>
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1.5"
            style={{
              backgroundColor: 'rgba(17,17,17,0.6)',
              color: 'rgba(245,245,239,0.7)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {mat.origin}
          </span>
        </div>

        {/* Bottom: content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="mb-3">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-lime-primary opacity-80">
              {mat.material}
            </span>
          </div>
          <h3
            className="font-ko text-white mb-2 group-hover:text-lime-primary transition-colors duration-300"
            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            {mat.name}
          </h3>
          <p
            className="font-serif italic text-white/60 text-sm leading-relaxed mb-4 max-w-sm"
            style={{
              maxHeight: '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease',
            }}
          >
            {mat.tagline}
          </p>
          <div className="flex items-center gap-2 text-lime-primary group-hover:gap-3 transition-all duration-300">
            <span className="font-mono text-xs tracking-[0.2em] uppercase">탐색하기</span>
            <span>→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
