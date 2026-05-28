'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const statementRef = useRef(null);
  const statementInView = useInView(statementRef, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-bg-primary">

      {/* ── Part 1: Problem statement ── */}
      <div
        ref={statementRef}
        className="relative w-full py-28 md:py-40 lg:py-52 px-6 md:px-12 lg:px-16 xl:px-20"
        style={{ borderBottom: '1px solid rgba(17,17,17,0.08)' }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-end">

            {/* Left */}
            <div className="lg:col-span-7">
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, x: -20 }}
                animate={statementInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5"
                  style={{ border: '1px solid rgba(163,230,53,0.45)', backgroundColor: 'rgba(163,230,53,0.07)' }}
                >
                  <div className="w-1 h-1 rounded-full bg-lime-primary flex-shrink-0" />
                  <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">
                    우리가 해결하는 문제
                  </span>
                </div>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  className="font-ko text-text-primary"
                  style={{
                    fontSize: 'clamp(1.9rem, 3.8vw, 4.5rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    fontWeight: 700,
                  }}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={statementInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  장비는 은퇴하지만,<br />
                  <span style={{ borderBottom: '2px solid var(--lime-primary)', paddingBottom: '0.1em' }}>
                    소재는 그렇지 않습니다.
                  </span>
                </motion.h2>
              </div>
            </div>

            {/* Right */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              animate={statementInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="font-serif text-base italic leading-relaxed text-text-secondary mb-5"
                style={{ maxWidth: '38ch', lineHeight: 1.75 }}>
                레저 스포츠 장비는 지구상 가장 극한의 환경을
                버텨내도록 설계됩니다.
              </p>
              <p className="font-serif text-sm italic leading-relaxed text-text-secondary"
                style={{ maxWidth: '38ch', lineHeight: 1.75 }}>
                안전 규정이 소재 수명보다 훨씬 앞서 은퇴를 결정합니다.
                오버랩에서 우리는 이것을 낭비가 아닌, 다시 열릴 아카이브로 봅니다.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Part 2: Three pillars ── */}
      <div className="relative w-full py-28 md:py-36 lg:py-48 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-secondary">
        <div className="max-w-screen-2xl mx-auto">

          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5"
              style={{ border: '1px solid rgba(163,230,53,0.45)', backgroundColor: 'rgba(163,230,53,0.07)' }}
            >
              <div className="w-1 h-1 rounded-full bg-lime-primary flex-shrink-0" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">우리의 철학</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(17,17,17,0.08)' }}>
            {[
              {
                tag: 'WHY',
                num: '01',
                title: '눈앞에 감춰진 가능성',
                body: '패러글라이더 캐노피는 수년간의 알파인 공학을 담습니다. 텐트 원단은 몬순을 견뎌냅니다. 세일 소재는 바다를 이겨냅니다.',
              },
              {
                tag: 'HOW',
                num: '02',
                title: '해체. 검수. 재구성.',
                body: '모든 조각은 개별 평가 후 세척, 재단됩니다. 낭비는 없습니다. 모든 실은 의도적입니다. 우리는 공장이 아닌 아카이브입니다.',
              },
              {
                tag: 'IMPACT',
                num: '03',
                title: '기억을 담은 오브제',
                body: '당신의 토트백은 알프스를 날았을지 모릅니다. 당신의 재킷은 누군가를 바다 폭풍에서 지켰습니다. 새 소재가 담을 수 없는 이야기.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                className="group relative p-10 md:p-12 lg:p-14 bg-bg-secondary hover:bg-bg-tertiary transition-colors duration-400 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.8 }}
              >
                {/* Left bar reveal on hover */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-lime-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-400" />
                <div className="absolute inset-0 bg-lime-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                <div
                  className="absolute bottom-4 right-4 font-display leading-none pointer-events-none select-none"
                  style={{ fontSize: '6rem', color: 'rgba(17,17,17,0.035)', letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  {item.num}
                </div>

                <div className="relative z-10">
                  {/* Archive tag label */}
                  <div className="flex items-center gap-4 mb-10">
                    <span
                      className="font-mono text-xs tracking-[0.2em] uppercase px-2.5 py-1 flex-shrink-0"
                      style={{
                        border: '1px solid rgba(163,230,53,0.45)',
                        backgroundColor: 'rgba(163,230,53,0.07)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {item.tag}
                    </span>
                    <div
                      className="flex-1 h-px"
                      style={{ background: 'linear-gradient(90deg, rgba(163,230,53,0.35) 0%, transparent 80%)' }}
                    />
                  </div>

                  <h3
                    className="font-ko text-text-primary mb-5 transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.6rem)', letterSpacing: '-0.01em', lineHeight: 1.2, fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>

                  <p className="font-serif italic text-text-secondary leading-relaxed"
                    style={{ maxWidth: '32ch', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: 1.78 }}>
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="mt-24 md:mt-32 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="w-10 h-px bg-lime-primary mb-8" />
            <blockquote
              className="font-serif italic text-text-secondary leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.2rem)' }}
            >
              &ldquo;우리는 에코 브랜드가 아닙니다. 우리는 아카이브입니다.
              잊혀진 여정이 보존되고, 오래 지속되는 아름다움과 기능의 오브제로 변환되는 곳.&rdquo;
            </blockquote>
            <p className="font-mono text-xs text-text-muted uppercase tracking-[0.3em] mt-6">
              — OVERLAB 선언문
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
