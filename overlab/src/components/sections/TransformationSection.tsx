'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const STEPS = [
  {
    num: '01',
    label: '수거',
    sub: '소스',
    desc: '전 세계 알파인 센터, 요트 클럽, 다이빙 스쿨에서 수명이 다한 스포츠 장비를 수거합니다.',
  },
  {
    num: '02',
    label: '분해',
    sub: '해체',
    desc: '각 조각은 손으로 조심스럽게 분해됩니다. 봉제선 제거, 패널 분리, 하드웨어 목록화.',
  },
  {
    num: '03',
    label: '검수',
    sub: '평가',
    desc: '소재 무결성 테스트 — 인장 강도, 방수, 자외선 저항성. 오직 최상급만 다음 단계로.',
  },
  {
    num: '04',
    label: '세척',
    sub: '복원',
    desc: '산업용 처리로 염분, 광물 침전물, 표면 마모를 제거합니다. 색상은 보존되며, 절대 염색하지 않습니다.',
  },
  {
    num: '05',
    label: '재단',
    sub: '변환',
    desc: '기존 마모 흔적과 봉제선 주변을 정밀하게 재단합니다. 각 조각은 진정으로 유니크합니다.',
  },
  {
    num: '06',
    label: '재구성',
    sub: '제작',
    desc: '소재가 새로운 오브제가 됩니다. 토트백, 재킷, 쿠션. 기능은 재탄생하고, 이야기는 보존됩니다.',
  },
];

export default function TransformationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#181A16' }}
    >
      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.6,
        }}
      />
      {/* Lime glow center */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(163,230,53,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 py-28 md:py-36 lg:py-48 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-2xl mx-auto">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-28">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px" style={{ backgroundColor: 'var(--lime-primary)' }} />
                <span className="font-mono text-xs tracking-[0.3em] uppercase"
                  style={{ color: 'rgba(245,245,239,0.6)' }}>
                  제작 과정
                </span>
              </div>
              <h2
                className="font-ko text-white"
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 4rem)',
                  letterSpacing: '-0.02em', lineHeight: 1.1,
                }}
              >
                장비에서<br />
                <span style={{ color: 'var(--lime-primary)' }}>오브제로.</span>
              </h2>
            </motion.div>
            <motion.div
              className="lg:col-span-5 flex items-end"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="font-serif italic leading-relaxed"
                style={{ color: 'rgba(245,245,239,0.72)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)' }}>
                여섯 가지 의도적인 단계. 낭비 제로. 모든 조각은 출처부터 완성품까지 인증되고 추적 가능합니다.
              </p>
            </motion.div>
          </div>

          {/* Steps grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="group relative p-10 md:p-12 overflow-hidden"
                style={{ backgroundColor: '#181A16' }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.7 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: 'rgba(163,230,53,0.04)' }}
                />
                <div
                  className="absolute bottom-4 right-6 font-display leading-none pointer-events-none select-none"
                  style={{ fontSize: '6rem', color: 'rgba(255,255,255,0.04)', letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs tracking-[0.25em] uppercase"
                      style={{ color: 'var(--lime-primary)', opacity: 0.8 }}>{step.num}</span>
                    <span className="font-mono text-xs tracking-[0.2em] uppercase"
                      style={{ color: 'rgba(245,245,239,0.42)' }}>{step.sub}</span>
                  </div>
                  <div
                    className="w-full h-px mb-8 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(163,230,53,0.2)', opacity: 0.4 }}
                  />
                  <h3
                    className="font-ko text-white mb-4 group-hover:text-lime-primary transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.8rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                  >
                    {step.label}
                  </h3>
                  <p className="font-serif italic leading-relaxed"
                    style={{ color: 'rgba(245,245,239,0.70)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom stats + CTA */}
          <motion.div
            className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-12"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="flex items-center gap-8 md:gap-12">
              {[['50K+', '처리된 제품'], ['100%', '수작업 검수'], ['0', '화학 염료']].map(([num, label]) => (
                <div key={label}>
                  <div
                    className="font-display leading-none mb-1"
                    style={{ color: 'var(--lime-primary)', fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', letterSpacing: '-0.03em' }}
                  >
                    {num}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em]"
                    style={{ color: 'rgba(245,245,239,0.48)' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/archive" className="btn-outline-dark group inline-flex items-center gap-3">
              아카이브 전체 보기
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
