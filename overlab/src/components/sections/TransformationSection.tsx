'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const STEPS = [
  {
    num: '01',
    label: 'Collection',
    sub: 'Source',
    desc: 'Retired sports equipment collected from alpine centers, sailing clubs, and diving schools worldwide.',
  },
  {
    num: '02',
    label: 'Disassembly',
    sub: 'Deconstruct',
    desc: 'Each piece is carefully taken apart by hand. Seams removed, panels separated, hardware catalogued.',
  },
  {
    num: '03',
    label: 'Inspection',
    sub: 'Assess',
    desc: 'Material integrity tested — tensile strength, waterproofing, UV resistance. Only the best advances.',
  },
  {
    num: '04',
    label: 'Cleaning',
    sub: 'Restore',
    desc: 'Industrial treatment removes salt, mineral deposits, and surface wear. Color is preserved, never dyed.',
  },
  {
    num: '05',
    label: 'Re-cutting',
    sub: 'Transform',
    desc: 'Patterns precision-cut around existing wear marks and stitch lines. Each piece is truly unique.',
  },
  {
    num: '06',
    label: 'Reconstruction',
    sub: 'Create',
    desc: 'The material becomes a new object. A tote, a jacket, a cushion. Function reimagined, story preserved.',
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
          background: 'radial-gradient(ellipse, rgba(216,255,62,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 xl:px-20">
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
                <div className="w-8 h-px" style={{ backgroundColor: '#D8FF3E' }} />
                <span className="font-mono text-xs tracking-[0.3em] uppercase"
                  style={{ color: 'rgba(245,245,239,0.4)' }}>
                  The Process
                </span>
              </div>
              <h2
                className="font-display leading-none text-white"
                style={{
                  fontSize: 'clamp(2.8rem, 7vw, 7rem)',
                  letterSpacing: '-0.03em', lineHeight: 0.92,
                }}
              >
                FROM EQUIPMENT<br />
                <span style={{ color: '#D8FF3E' }}>TO OBJECT.</span>
              </h2>
            </motion.div>
            <motion.div
              className="lg:col-span-5 flex items-end"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="font-serif italic leading-relaxed"
                style={{ color: 'rgba(245,245,239,0.5)', fontSize: '1rem' }}>
                Six deliberate steps. Zero waste. Every piece certified and traceable from source to finished object.
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
                  style={{ backgroundColor: 'rgba(216,255,62,0.04)' }}
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
                      style={{ color: '#D8FF3E', opacity: 0.8 }}>{step.num}</span>
                    <span className="font-mono text-xs tracking-[0.2em] uppercase"
                      style={{ color: 'rgba(245,245,239,0.25)' }}>{step.sub}</span>
                  </div>
                  <div
                    className="w-full h-px mb-8 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(216,255,62,0.2)', opacity: 0.4 }}
                  />
                  <h3
                    className="font-display text-white mb-4 group-hover:text-lime-primary transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', letterSpacing: '-0.02em', lineHeight: 1 }}
                  >
                    {step.label}
                  </h3>
                  <p className="font-serif italic text-sm leading-relaxed"
                    style={{ color: 'rgba(245,245,239,0.5)' }}>
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
              {[['50K+', 'Items Processed'], ['100%', 'Manual Inspect'], ['0', 'Chemical Dyes']].map(([num, label]) => (
                <div key={label}>
                  <div
                    className="font-display leading-none mb-1"
                    style={{ color: '#D8FF3E', fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', letterSpacing: '-0.03em' }}
                  >
                    {num}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em]"
                    style={{ color: 'rgba(245,245,239,0.3)' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/archive" className="btn-outline-dark group inline-flex items-center gap-3">
              View Full Archive
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
