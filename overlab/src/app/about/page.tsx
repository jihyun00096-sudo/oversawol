'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/ui/Navigation';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

const VALUES = [
  {
    tag: 'WHY',
    title: '눈앞에 감춰진 가능성',
    body: '레저 스포츠 장비는 극한을 견디도록 설계됩니다. 소재의 수명이 다해서가 아닌, 안전 규정에 의해 은퇴합니다. 우리는 이것을 쓰레기 매립지가 아닌 아카이브로 봅니다.',
  },
  {
    tag: 'HOW',
    title: '해체. 검수. 재구성.',
    body: '모든 조각은 개별적으로 평가되고, 손으로 세척되고, 재단됩니다. 화학 염료는 사용하지 않습니다. 낭비되는 것은 없습니다. 모든 실은 의도적입니다.',
  },
  {
    tag: 'IMPACT',
    title: '기억을 담은 오브제',
    body: '당신이 들고 다니는 토트백은 한때 알프스 상공을 날았을지도 모릅니다. 당신이 입는 재킷은 누군가를 바다 폭풍에서 지켜줬습니다. 오버랩 제품은 이야기를 담고 있습니다.',
  },
  {
    tag: 'VISION',
    title: '아카이브로서의 브랜드 정체성',
    body: '우리는 에코 레이블이 아닙니다. 우리는 아카이브입니다. 잊혀진 여정이 보존되고, 오래 지속되는 아름다움과 기능의 오브제로 변환되는 곳입니다.',
  },
];

const IMPACT = [
  { num: '50K+', label: '제작된 제품' },
  { num: '1.2M kg', label: '절약된 소재' },
  { num: '180+', label: '진출 국가' },
  { num: '28', label: '업계 수상' },
];

export default function AboutPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <main className="relative w-full overflow-x-hidden bg-bg-primary">
      <Cursor />
      <Navigation />

      {/* ── Hero ── */}
      <section
        className="relative w-full min-h-[80vh] flex items-end overflow-hidden"
        style={{ backgroundColor: '#181A16' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(216,255,62,0.1) 0%, transparent 60%)' }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
            opacity: 0.7,
          }}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-20 pb-16 md:pb-20 pt-36 max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: '#D8FF3E' }} />
              <span className="font-mono text-xs tracking-[0.3em] uppercase"
                style={{ color: 'rgba(245,245,239,0.4)' }}>
                우리의 철학
              </span>
            </div>
            <h1
              className="font-display text-white leading-none mb-8"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', letterSpacing: '-0.03em', lineHeight: 0.88 }}
            >
              어바웃<br />
              <span style={{ color: '#D8FF3E' }}>OVERLAB</span>
            </h1>
            <p
              className="font-serif italic leading-relaxed max-w-xl"
              style={{ color: 'rgba(245,245,239,0.6)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
            >
              우리는 아카이브입니다. 스튜디오입니다. 버려진 여정이 오래 지속되는 아름다움의 오브제로 변환되는 곳.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">

          {/* Left: Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div
              className="relative img-placeholder"
              style={{ aspectRatio: '4/5' }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="text-center">
                  <div
                    className="font-display text-text-primary mb-2"
                    style={{ fontSize: '8rem', letterSpacing: '-0.04em' }}
                  >
                    OVL
                  </div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-widest">
                    [스튜디오 이미지]
                  </div>
                </div>
              </div>
              {/* Lime border accent */}
              <div className="absolute bottom-0 left-0 w-24 h-1" style={{ backgroundColor: '#D8FF3E' }} />
            </div>
          </div>

          {/* Right: Text */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-lime-primary" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">우리의 이야기</span>
            </div>
            <h2
              className="font-display text-text-primary leading-none mb-10"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}
            >
              단순한 역설에서<br />
              탄생하다
            </h2>

            <div className="space-y-5 font-serif italic text-text-secondary leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)' }}>
              <p>
                오버랩은 하나의 단순한 관찰에서 시작됩니다. 레저 스포츠 장비 — 패러글라이더, 텐트, 세일, 다이빙 슈트 — 는 완벽하게 내구성을 갖추도록 설계됩니다.
              </p>
              <p>
                구조적 결함이 아닌 안전 규정에 의해 폐기되는, 소재 탁월성과 시스템적 낭비의 역설. 극한 조건을 견디도록 엔지니어링되었지만 버려집니다.
              </p>
              <p>
                우리는 다른 이들이 낭비를 보는 곳에서 가능성을 발견했습니다. 이 오브제들에 내재된 소재, 기술, 장인정신이 쓰레기 매립지가 아닌 두 번째 삶을 누릴 자격이 있음을 알아봤습니다.
              </p>
              <p>
                오늘날 오버랩은 아카이브이자 스튜디오로 운영됩니다 — 잊혀진 여정이 보존되고 현대적인 아름다움과 기능의 오브제로 변환되는 곳.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Four values ── */}
      <section
        ref={ref}
        className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-secondary overflow-hidden"
      >
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-lime-primary" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">핵심 철학</span>
            </div>
            <h2
              className="font-display text-text-primary leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              우리가 일하는 방식
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(17,17,17,0.08)' }}>
            {VALUES.map((v, i) => (
              <motion.div
                key={v.tag}
                className="group relative p-10 md:p-12 bg-bg-secondary hover:bg-bg-tertiary transition-colors duration-400 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-lime-primary/4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                <div className="absolute bottom-4 right-6 font-display leading-none pointer-events-none select-none"
                  style={{ fontSize: '5rem', color: 'rgba(17,17,17,0.04)', letterSpacing: '-0.04em' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="font-mono text-xs tracking-[0.25em] uppercase px-2.5 py-1"
                      style={{ border: '1px solid rgba(216,255,62,0.4)', color: 'rgba(216,255,62,0.8)' }}>
                      {v.tag}
                    </span>
                    <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(216,255,62,0.15)' }} />
                  </div>
                  <h3
                    className="font-display text-text-primary mb-5 group-hover:text-lime-primary transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
                  >
                    {v.title}
                  </h3>
                  <p className="font-serif italic text-text-secondary text-base leading-relaxed">{v.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact numbers ── */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary overflow-hidden"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-lime-primary" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">숫자로 보는</span>
            </div>
            <h2
              className="font-display text-text-primary leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              우리의 임팩트
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: 'rgba(17,17,17,0.08)' }}>
            {IMPACT.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group p-8 md:p-10 bg-bg-primary hover:bg-bg-secondary transition-colors duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div
                  className="font-display text-lime-primary mb-3 leading-none"
                  style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
                >
                  {stat.num}
                </div>
                <p className="font-mono text-xs text-text-muted uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20"
        style={{ backgroundColor: '#181A16' }}>
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <h2
              className="font-display text-white leading-none mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              함께<br />
              <span style={{ color: '#D8FF3E' }}>움직이세요</span>
            </h2>
            <p className="font-serif italic" style={{ color: 'rgba(245,245,239,0.5)', fontSize: '1rem' }}>
              쇼핑하거나, 협업하거나, 아카이브를 팔로우하세요.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="btn-lime group inline-flex items-center gap-3">
              지금 쇼핑하기 →
            </Link>
            <Link href="/projects" className="btn-outline-dark group inline-flex items-center gap-3">
              프로젝트 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
