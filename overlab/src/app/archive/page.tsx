'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/ui/Navigation';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

const MATERIALS = [
  {
    id: 'paraglider',
    num: '01',
    name: '패러글라이더',
    tagline: '하늘에서 일상으로',
    origin: '알파인 스포츠 센터',
    material: '고성능 나일론',
    weight: '초경량 · 80–150g/m²',
    properties: '방수 · 내구성 · UV 안정성',
    products: 8,
    desc: '알파인 바람을 가르고 사람의 무게를 지탱하도록 설계된 초경량 나일론. 이제 믿기 어려울 만큼 가볍지만 오래 지속되는 일상의 오브제로 짜여들고 있습니다.',
    process: [
      '전 세계 역할을 다한 패러글라이더 수거',
      '소재 무결성 세밀 분석',
      '조심스러운 분해 및 봉제선 제거',
      '색상 보존 및 품질 관리',
      '재단 및 패턴 디자인',
      '새로운 제품으로 제조',
    ],
  },
  {
    id: 'tent',
    num: '02',
    name: '텐트',
    tagline: '쉼터의 변신',
    origin: '아웃도어 장비 창고',
    material: '기술 폴리에스터 혼방',
    weight: '프로페셔널 등급',
    properties: '완전 방수 · 방풍 · 통기성',
    products: 12,
    desc: '극한 조건을 견디도록 제작된 구조적 기억이 있는 방수 다층 원단. 이 소재들은 산봉우리, 사막 고원, 북극 툰드라를 가로지르는 여정과 모험의 이야기를 담고 있습니다.',
    process: [
      '수명이 다한 텐트 체계적 수거',
      '소재 분류 및 평가',
      '봉제선 제거 및 조심스러운 분해',
      '산업용 세척 및 처리',
      '등급별 패널 재단 및 분류',
      '구조화된 제품으로 조립',
    ],
  },
  {
    id: 'sail',
    num: '03',
    name: '세일',
    tagline: '바다의 시',
    origin: '요트 클럽 & 마린 센터',
    material: '다크론 & 라미네이트 혼방',
    weight: '극한 날씨 테스트 완료',
    properties: '내염성 · 탄성 · 내구성',
    products: 6,
    desc: '자연적인 탄성과 내염성 직조 구조를 가진 해양 등급 다크론 라미네이트. 각 조각에는 항해의 지도가 새겨져 있습니다 — 로프, 태양, 대양의 돌풍이 직물에 스며든 희미한 흔적.',
    process: [
      '수거를 위한 해양 클럽과의 파트너십',
      '무결성 및 UV 손상 육안 검사',
      '봉제 제거 및 레이어 분리',
      '염분 및 광물 제거 처리',
      '색상 강화 및 컨디셔닝',
      '새로운 형태로의 정밀 재단 및 제작',
    ],
  },
  {
    id: 'diving',
    num: '04',
    name: '다이빙 슈트',
    tagline: '깊이를 재상상하다',
    origin: '다이빙 스쿨 & 스포츠 센터',
    material: '네오프렌 & 스트레치 소재',
    weight: '고성능 단열',
    properties: '유연성 · 단열 · 압력 테스트',
    products: 5,
    desc: '수심에서 압력을 균형 잡고 차가운 바닷속 다이버를 따뜻하게 유지했던 열조절 네오프렌. 밀도 높고, 유연하고, 단열성이 뛰어나 — 쿠션, 패딩, 소프트 홈 액세서리로 자연스럽게 변환됩니다.',
    process: [
      '다이빙 장비 공급업체로부터 획득',
      '두께 및 탄성 테스트',
      '봉제선 및 지퍼의 세심한 분해',
      '전문 네오프렌 세척 공정',
      '스트레칭 및 컨디셔닝',
      '새로운 형태로의 정밀 재단 및 조립',
    ],
  },
];

export default function ArchivePage() {
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
          style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(216,255,62,0.1) 0%, transparent 55%)' }} />
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
                전체 소재 아카이브
              </span>
            </div>
            <h1
              className="font-display text-white leading-none mb-8"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', letterSpacing: '-0.03em', lineHeight: 0.88 }}
            >
              아카이브
            </h1>
            <p className="font-serif italic leading-relaxed max-w-lg"
              style={{ color: 'rgba(245,245,239,0.6)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              모든 소재에는 이야기가 있습니다. 출처, 과정, 그리고 잊혀진 오브제에 새 생명을 불어넣는 변환을 탐색해 보세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Material sections ── */}
      <div className="relative">
        {MATERIALS.map((mat, idx) => (
          <MaterialSection key={mat.id} mat={mat} idx={idx} />
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <section
        className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <h2
              className="font-display text-text-primary leading-none mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              역사의 한 조각을<br />
              <span className="text-lime-primary">소유할 준비가 되셨나요?</span>
            </h2>
            <p className="font-serif italic text-text-secondary text-base">
              각 제품은 소재 출처의 이야기와 재구성의 예술성을 담고 있습니다.
            </p>
          </div>
          <Link href="/products" className="btn-lime group inline-flex items-center gap-3 whitespace-nowrap flex-shrink-0">
            제품 쇼핑하기 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function MaterialSection({ mat, idx }: { mat: (typeof MATERIALS)[0]; idx: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const isEven = idx % 2 === 0;

  return (
    <section
      ref={ref}
      id={mat.id}
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 xl:px-20 overflow-hidden"
      style={{ backgroundColor: idx % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)' }}
    >
      <div className="max-w-screen-2xl mx-auto">

        {/* Main grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 md:mb-28`}>

          {/* Image */}
          <motion.div
            className={`lg:col-span-5 ${isEven ? '' : 'lg:order-2'}`}
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="relative img-placeholder overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-15">
                <div className="font-display text-text-primary text-center"
                  style={{ fontSize: '10rem', letterSpacing: '-0.04em' }}>
                  {mat.num}
                </div>
              </div>
              <div className="absolute top-6 left-6">
                <span
                  className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1.5"
                  style={{ backgroundColor: '#D8FF3E', color: '#111111' }}
                >
                  {mat.products} 제품
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-lime-primary" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className={`lg:col-span-7 ${isEven ? '' : 'lg:order-1'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-lime-primary">
                소재 {mat.num}
              </span>
              <div className="flex-1 h-px bg-lime-primary/20" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-muted">
                {mat.origin}
              </span>
            </div>

            <h2
              className="font-display text-text-primary leading-none mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              {mat.name.toUpperCase()}
            </h2>
            <p className="font-serif italic text-text-secondary mb-8"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
              {mat.tagline}
            </p>
            <p className="font-serif italic text-text-secondary text-base leading-relaxed mb-10 max-w-lg">
              {mat.desc}
            </p>

            {/* Specs */}
            <div className="space-y-4 py-8" style={{ borderTop: '1px solid rgba(17,17,17,0.1)', borderBottom: '1px solid rgba(17,17,17,0.1)' }}>
              {[
                ['소재', mat.material],
                ['무게 / 등급', mat.weight],
                ['특성', mat.properties],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-start gap-8">
                  <span className="font-mono text-xs text-text-muted uppercase tracking-[0.2em]">{k}</span>
                  <span className="font-sans text-sm text-text-primary text-right">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/products" className="btn-lime group inline-flex items-center gap-3">
                {mat.products}개 제품 보기 →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Process grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-lime-primary" />
            <h3 className="font-display text-text-primary"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.025em' }}>
              제작 과정
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {mat.process.map((step, i) => (
              <div
                key={i}
                className="relative p-6 group hover:border-lime-primary/40 transition-all duration-300"
                style={{ border: '1px solid rgba(17,17,17,0.1)' }}
              >
                <div className="absolute -top-3 left-4 w-6 h-6 flex items-center justify-center font-mono text-xs"
                  style={{ backgroundColor: '#D8FF3E', color: '#111111' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-serif italic text-text-secondary text-sm leading-relaxed pt-3">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
