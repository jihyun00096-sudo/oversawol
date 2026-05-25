'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 'nike-acg',
    year: '2024',
    title: 'Nike ACG 협업',
    category: '협업',
    desc: 'Nike 혁신과 OVERLAB 지속가능성을 결합한 아웃도어 기어 컬렉션 공동 기획.',
    impact: '25,000+ 판매',
  },
  {
    id: 'seoul-design',
    year: '2024',
    title: '서울 디자인 페스티벌',
    category: '전시',
    desc: '대표 지속가능 브랜드로 선정. 50+ 아카이브 작품 전시.',
    impact: '12,000+ 관람객',
  },
  {
    id: 'lg-electronics',
    year: '2023',
    title: 'LG전자 파트너십',
    category: '파트너십',
    desc: '섬유 재활용과 순환경제를 탐구하는 소재 과학 협업.',
    impact: '5억원+ 연구지원',
  },
  {
    id: 'volvo-residency',
    year: '2023',
    title: '볼보 디자인 레지던시',
    category: '레지던시',
    desc: '볼보 디자인 팀과 함께하는 3개월간의 소재 혁신 몰입 프로그램.',
    impact: '3개 프로토타입',
  },
  {
    id: 'award-2023',
    year: '2023',
    title: '최우수 업사이클링 브랜드 수상',
    category: '수상',
    desc: '서울 지속가능패션연합으로부터 받은 국제적 인정.',
    impact: '업계 수상',
  },
  {
    id: 'snow-peak',
    year: '2022',
    title: 'Snow Peak 아웃도어 시리즈',
    category: '제품 시리즈',
    desc: '진지한 아웃도어 애호가를 위한 한정판 캠핑 & 하이킹 컬렉션.',
    impact: '8,000+ 판매',
  },
];

const PARTNER_LOGOS = ['Nike', 'LG', 'KT', 'Volvo', 'Snow Peak', 'Ader Error'];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative w-full bg-bg-primary overflow-hidden py-28 md:py-36 lg:py-48">

      <div className="px-6 md:px-12 lg:px-16 xl:px-20 max-w-screen-2xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-lime-primary" />
            <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">
              수상 & 협업
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h2
                className="font-ko text-text-primary"
                style={{ fontSize: 'clamp(1.9rem, 3.8vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                목적을 가지고<br />
                <span className="text-lime-primary">함께 일합니다.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <p className="font-serif italic text-text-secondary text-base leading-relaxed">
                지속가능한 디자인 탁월성에 대한 우리의 접근을 검증하는 전략적 파트너십과 업계 인정.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Partner logos marquee */}
        <motion.div
          className="mb-16 md:mb-20 overflow-hidden py-6"
          style={{ borderTop: '1px solid rgba(17,17,17,0.08)', borderBottom: '1px solid rgba(17,17,17,0.08)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="animate-marquee-slow">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((name, i) => (
              <span
                key={i}
                className="font-display px-10 md:px-14 text-text-primary/20 hover:text-text-primary/60 transition-colors duration-300 whitespace-nowrap"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}
              >
                {name}
                <span className="text-lime-primary/40 mx-8 text-base" style={{ letterSpacing: 0 }}>·</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-0" style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.7 }}
            >
              <Link href={`/projects#${project.id}`}>
                <div
                  className="relative grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 px-0 overflow-hidden transition-all duration-300"
                  style={{ borderBottom: '1px solid rgba(17,17,17,0.08)' }}
                >
                  {/* Hover wash */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ backgroundColor: 'rgba(216,255,62,0.03)' }} />

                  {/* Year */}
                  <div className="col-span-2 md:col-span-1 flex items-center">
                    <span
                      className="font-mono text-xs text-text-muted uppercase tracking-[0.15em]"
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="hidden md:flex col-span-2 items-center">
                    <span
                      className="font-mono text-xs uppercase tracking-[0.15em] px-2.5 py-1"
                      style={{ border: '1px solid rgba(216,255,62,0.3)', color: 'rgba(216,255,62,0.7)' }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <div className="col-span-8 md:col-span-6 flex flex-col justify-center">
                    <h3
                      className="font-ko text-text-primary mb-1 group-hover:text-lime-primary transition-colors duration-300"
                      style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)', letterSpacing: '-0.01em', lineHeight: 1.2 }}
                    >
                      {project.title}
                    </h3>
                    <p className="font-serif italic text-text-secondary text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="hidden md:flex col-span-2 items-center justify-end">
                    <span
                      className="font-mono text-xs uppercase tracking-[0.15em] text-lime-primary opacity-80 text-right"
                    >
                      {project.impact}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-2 md:col-span-1 flex items-center justify-end">
                    <span
                      className="text-lime-primary text-lg group-hover:translate-x-1.5 transition-transform duration-300"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div>
            <p className="font-serif italic text-text-secondary text-base leading-relaxed max-w-md">
              협업에 관심이 있으신가요? 오버랩은 지속가능한 혁신이라는 우리의 미션과 일치하는 파트너십에 항상 열려 있습니다.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/projects" className="btn-outline group inline-flex items-center gap-2 whitespace-nowrap">
              전체 프로젝트 →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
