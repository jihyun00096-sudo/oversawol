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

      {/* ── Part 1: Problem statement (full-width editorial) ── */}
      <div
        ref={statementRef}
        className="relative w-full py-24 md:py-36 lg:py-44 px-6 md:px-12 lg:px-16 xl:px-20 border-b border-text-primary/8"
        style={{ borderColor: 'rgba(17,17,17,0.08)' }}
      >
        {/* Background large number */}
        <div
          className="absolute top-0 right-0 pointer-events-none select-none leading-none"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(8rem, 22vw, 22rem)',
            color: 'rgba(17,17,17,0.03)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            top: '-2%',
            right: '-1%',
          }}
        >
          WHY
        </div>

        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">

            {/* Left: Label + Big statement */}
            <div className="lg:col-span-8">
              <motion.div
                className="flex items-center gap-3 mb-10"
                initial={{ opacity: 0, x: -20 }}
                animate={statementInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <div className="w-8 h-px bg-lime-primary" />
                <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">
                  The Problem We Solve
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  className="font-display leading-none text-text-primary"
                  style={{
                    fontSize: 'clamp(2.4rem, 6.5vw, 6.5rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 0.92,
                  }}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={statementInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  Equipment Retires.<br />
                  <span style={{ color: '#D8FF3E' }}>Materials Don&apos;t.</span>
                </motion.h2>
              </div>
            </div>

            {/* Right: Explanatory text */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              animate={statementInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="font-serif text-lg italic leading-relaxed text-text-secondary mb-6">
                Leisure sports equipment—paragliders, tents, sails, diving suits—is engineered
                to withstand the most extreme conditions on earth.
              </p>
              <p className="font-serif text-base italic leading-relaxed text-text-secondary/80">
                Safety regulations mandate retirement long before the materials fail.
                At OVERLAB, we see this not as waste—but as an archive waiting to be reopened.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Part 2: Three pillars — WHY / HOW / IMPACT ── */}
      <div className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-secondary">
        <div className="max-w-screen-2xl mx-auto">

          <motion.div
            className="flex items-center gap-3 mb-16 md:mb-24"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <div className="w-8 h-px bg-lime-primary" />
            <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">Our Philosophy</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(17,17,17,0.08)' }}>
            {[
              {
                tag: 'WHY',
                num: '01',
                title: 'Potential Hidden in Plain Sight',
                body: 'Paraglider canopies carry years of alpine engineering. Tent fabrics survive monsoons. Sail material withstands oceans. These objects deserve a second act—not a landfill.',
              },
              {
                tag: 'HOW',
                num: '02',
                title: 'Deconstruct. Inspect. Reconstruct.',
                body: 'Every piece is individually assessed, cleaned, and re-cut before becoming something new. Nothing is wasted. Every thread is intentional. We are an archive, not a factory.',
              },
              {
                tag: 'IMPACT',
                num: '03',
                title: 'Objects That Carry Memory',
                body: 'The tote you carry may have once soared over the Alps. The jacket you wear protected someone from an ocean storm. OVERLAB products hold stories no new material can carry.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                className="group relative p-10 md:p-12 bg-bg-secondary hover:bg-bg-tertiary transition-colors duration-400 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.8 }}
              >
                {/* Hover lime wash */}
                <div className="absolute inset-0 bg-lime-primary/4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                {/* Background number */}
                <div
                  className="absolute bottom-4 right-4 font-display leading-none pointer-events-none select-none"
                  style={{
                    fontSize: '7rem',
                    color: 'rgba(17,17,17,0.04)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </div>

                <div className="relative z-10">
                  {/* Tag */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-5 h-5 flex items-center justify-center border border-lime-primary">
                      <span className="font-mono text-xs text-lime-primary leading-none"
                        style={{ fontSize: '8px' }}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-lime-primary/30" />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display text-text-primary mb-5 group-hover:text-lime-primary transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.05,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Body */}
                  <p className="font-serif text-sm md:text-base italic text-text-secondary leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="mt-20 md:mt-28 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="w-10 h-px bg-lime-primary mb-8" />
            <blockquote
              className="font-serif italic text-text-secondary leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.35rem)' }}
            >
              &ldquo;We are not an eco brand. We are an archive. A place where forgotten journeys
              are preserved and transformed into objects of lasting beauty and function.&rdquo;
            </blockquote>
            <p className="font-mono text-xs text-text-muted uppercase tracking-[0.3em] mt-6">
              — OVERLAB Manifesto
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
