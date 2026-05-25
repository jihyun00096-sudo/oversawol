'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

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
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.7,
        }}
      />

      {/* Large lime glow center */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          background: [
            'radial-gradient(ellipse at 50% 50%, rgba(216,255,62,0.1) 0%, transparent 65%)',
            'radial-gradient(ellipse at 50% 50%, rgba(216,255,62,0.16) 0%, transparent 65%)',
            'radial-gradient(ellipse at 50% 50%, rgba(216,255,62,0.1) 0%, transparent 65%)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 py-24 md:py-36 lg:py-48 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-2xl mx-auto">

          {/* Big headline */}
          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-ko text-white"
                style={{ fontSize: 'clamp(2.2rem, 6vw, 6rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
              >
                미래는<br />
                {' '}
                <span style={{ color: '#D8FF3E', WebkitTextStroke: '0', textShadow: '0 0 60px rgba(216,255,62,0.4)' }}>
                  이미
                </span>
                <br />
                여기 있습니다.
              </h2>
            </motion.div>
          </div>

          {/* Sub + CTAs row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 pt-12 md:pt-16"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            <div>
              <p
                className="font-serif italic leading-relaxed mb-8"
                style={{ color: 'rgba(245,245,239,0.6)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
              >
                품질, 장인정신, 그리고 양심을 타협하지 않는 디자인을 향한 움직임에 함께하세요.
                모든 오버랩 오브제는 한때 움직였던 무언가의 기억을 담고 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-lime group inline-flex items-center gap-3">
                  아카이브 쇼핑하기
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link href="/archive" className="btn-outline-dark group inline-flex items-center gap-3">
                  아카이브 탐색
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6 justify-start">
              {[
                ['50,000+', '제작된 제품'],
                ['1.2M kg', '절약된 소재'],
                ['28', '업계 수상'],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="flex items-baseline gap-4 py-5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span
                    className="font-display text-lime-primary leading-none"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}
                  >
                    {num}
                  </span>
                  <span
                    className="font-mono text-xs uppercase tracking-[0.25em]"
                    style={{ color: 'rgba(245,245,239,0.35)' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: 'rgba(245,245,239,0.25)' }}>
              전 세계 배송 가능 · ₩100,000 이상 무료 배송
            </p>
            <p className="font-serif italic text-xs"
              style={{ color: 'rgba(245,245,239,0.25)' }}>
              지속가능성은 트렌드가 아닙니다. 그것은 움직임입니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
