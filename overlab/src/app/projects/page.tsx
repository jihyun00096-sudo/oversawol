'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/ui/Navigation';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 'nike-acg',
    year: '2024',
    title: 'Nike ACG 협업',
    category: '협업',
    desc: 'Nike 혁신과 OVERLAB 지속가능성을 결합한 아웃도어 기어 컬렉션 공동 기획. 고성능 업사이클 제품의 이정표.',
    impact: '25,000+ 글로벌 판매',
    long: 'Nike의 ACG 팀과 함께, 패러글라이더 및 텐트 원단을 퍼포먼스 아웃도어 기어에 접목한 컬렉션을 개발했습니다. 이 협업은 두 팀이 "기술적"이라는 의미를 재고하게 만들었습니다 — 소재가 이미 역사를 담고 있을 때.',
  },
  {
    id: 'seoul-design',
    year: '2024',
    title: '서울 디자인 페스티벌',
    category: '전시',
    desc: '대표 지속가능 브랜드로 선정. 아카이브 변환 과정을 보여주는 50+ 작품 큐레이션.',
    impact: '12,000+ 관람객',
    long: 'DDP에서의 큐레이션 전시는 관람객들에게 오버랩의 완전한 변환 여정을 안내했습니다 — 미처리 은퇴 장비에서 완성된 오브제까지. 설치 작품은 원본 소재와 재탄생된 대응물을 나란히 배치했습니다.',
  },
  {
    id: 'lg-electronics',
    year: '2023',
    title: 'LG전자 파트너십',
    category: '파트너십',
    desc: '섬유 재활용과 순환경제 통합을 탐구하는 소재 과학 협업.',
    impact: '5억원+ 연구지원',
    long: '고성능 기술 섬유의 고급 소재 처리 기술을 연구하는 공동 연구 이니셔티브. 이 파트너십은 현재 우리의 전체 아카이브에 사용되는 새로운 검사 방법론과 처리법을 이끌어냈습니다.',
  },
  {
    id: 'volvo-residency',
    year: '2023',
    title: '볼보 디자인 레지던시',
    category: '레지던시',
    desc: '볼보 디자인과 함께하는 소재 혁신과 지속가능한 디자인 원칙 탐구 3개월 몰입 프로그램.',
    impact: '3개 프로토타입 개발',
    long: '볼보의 예테보리 디자인 스튜디오에서의 레지던시는 우리의 아카이브적 사고를 자동차 맥락에 적용하도록 도전했습니다 — 기술 원단이 캐빈 소재와 액세서리로 어떻게 변환될 수 있는지 탐구.',
  },
  {
    id: 'award-2023',
    year: '2023',
    title: '최우수 업사이클링 브랜드 수상',
    category: '수상',
    desc: '환경 영향과 디자인 탁월성에 대한 국제적 인정. 서울 지속가능패션연합 수여.',
    impact: '업계 리더십',
    long: '서울 지속가능패션연합으로부터 업사이클링을 미적 실천으로 접근한 방식을 인정받았습니다 — 타협이 아닌. 수상 이유는 우리의 아카이브 방법론과 소재 추적성을 업계 벤치마크로 꼽았습니다.',
  },
  {
    id: 'snow-peak',
    year: '2022',
    title: 'Snow Peak 아웃도어 시리즈',
    category: '제품 시리즈',
    desc: '한정판 캠핑 & 하이킹 컬렉션. 진지한 아웃도어 애호가를 위한 8개 제품.',
    impact: '8,000+ 판매',
    long: '일본의 아웃도어 철학과 오버랩의 아카이브 감성을 융합한 Snow Peak과의 협업. 시리즈의 각 제품은 단일 소스 소재로 — 하나의 텐트, 하나의 패러글라이더로 — 제작되어 모든 조각이 진정으로 한정판.',
  },
];

export default function ProjectsPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

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
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(216,255,62,0.1) 0%, transparent 55%)' }} />
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
                협업 & 수상
              </span>
            </div>
            <h1
              className="font-display text-white leading-none mb-8"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', letterSpacing: '-0.03em', lineHeight: 0.88 }}
            >
              프로젝트
            </h1>
            <p className="font-serif italic leading-relaxed max-w-lg"
              style={{ color: 'rgba(245,245,239,0.6)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              지속가능한 디자인을 변환하는 우리의 미션을 검증하는 전략적 파트너십, 전시, 그리고 업계 인정.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Projects list ── */}
      <section ref={ref} className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary">
        <div className="max-w-screen-2xl mx-auto">

          {/* Index header */}
          <div
            className="hidden md:grid grid-cols-12 gap-8 pb-4 mb-2"
            style={{ borderBottom: '1px solid rgba(17,17,17,0.12)' }}
          >
            <span className="col-span-1 font-mono text-xs text-text-muted uppercase tracking-[0.2em]">연도</span>
            <span className="col-span-2 font-mono text-xs text-text-muted uppercase tracking-[0.2em]">유형</span>
            <span className="col-span-5 font-mono text-xs text-text-muted uppercase tracking-[0.2em]">프로젝트</span>
            <span className="col-span-3 font-mono text-xs text-text-muted uppercase tracking-[0.2em] text-right">임팩트</span>
            <span className="col-span-1" />
          </div>

          <div>
            {PROJECTS.map((p, i) => (
              <ProjectRow key={p.id} project={p} i={i} inView={inView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration CTA ── */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-secondary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="font-display text-text-primary leading-none mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}>
              협업에<br />
              <span className="text-lime-primary">관심이 있으신가요?</span>
            </h2>
            <p className="font-serif italic text-text-secondary text-base leading-relaxed max-w-md">
              오버랩은 지속가능한 혁신과 디자인 탁월성이라는 우리의 미션과 일치하는 파트너십에 항상 열려 있습니다.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/about" className="btn-lime group w-full text-center inline-flex items-center justify-center gap-3">
              문의하기 →
            </Link>
            <Link href="/products" className="btn-outline group w-full text-center inline-flex items-center justify-center gap-3">
              제품 둘러보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProjectRow({
  project, i, inView
}: {
  project: (typeof PROJECTS)[0];
  i: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.07, duration: 0.7 }}
    >
      <div
        className="relative grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 overflow-hidden transition-colors duration-300"
        style={{ borderBottom: '1px solid rgba(17,17,17,0.08)' }}
        id={project.id}
      >
        {/* Hover wash */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ backgroundColor: 'rgba(216,255,62,0.03)' }} />

        {/* Year */}
        <div className="col-span-4 md:col-span-1 flex items-start">
          <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] pt-1">{project.year}</span>
        </div>

        {/* Category */}
        <div className="hidden md:flex col-span-2 items-start pt-0.5">
          <span
            className="font-mono text-xs uppercase tracking-[0.15em] px-2.5 py-1"
            style={{ border: '1px solid rgba(216,255,62,0.35)', color: 'rgba(216,255,62,0.75)' }}
          >
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="col-span-7 md:col-span-5">
          <h3
            className="font-display text-text-primary mb-2 group-hover:text-lime-primary transition-colors duration-300"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
          >
            {project.title}
          </h3>
          <p className="font-serif italic text-text-secondary text-sm leading-relaxed">{project.desc}</p>
        </div>

        {/* Impact */}
        <div className="hidden md:flex col-span-3 items-start justify-end">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-lime-primary opacity-80 text-right pt-1">
            {project.impact}
          </span>
        </div>

        {/* Arrow */}
        <div className="col-span-1 flex items-center justify-end">
          <span className="text-lime-primary text-lg group-hover:translate-x-1.5 transition-transform duration-300">→</span>
        </div>
      </div>
    </motion.div>
  );
}
