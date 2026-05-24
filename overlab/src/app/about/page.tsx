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
    title: 'Potential Hidden in Plain Sight',
    body: 'Leisure sports equipment is engineered to withstand the extreme. Safety regulations retire it — not material failure. We see this as an archive, not a landfill.',
  },
  {
    tag: 'HOW',
    title: 'Deconstruct. Inspect. Reconstruct.',
    body: 'Every piece is individually assessed, hand-cleaned, and re-cut. We use no chemical dyes. Nothing is wasted. Every thread is intentional.',
  },
  {
    tag: 'IMPACT',
    title: 'Objects That Carry Memory',
    body: 'The tote you carry may have once soared over the Alps. The jacket you wear protected someone from an ocean storm. OVERLAB products hold stories.',
  },
  {
    tag: 'VISION',
    title: 'Archive as Brand Identity',
    body: 'We are not an eco-label. We are an archive. A place where forgotten journeys are preserved and transformed into objects of lasting beauty and function.',
  },
];

const IMPACT = [
  { num: '50K+', label: 'Products Created' },
  { num: '1.2M kg', label: 'Materials Saved' },
  { num: '180+', label: 'Countries Reached' },
  { num: '28', label: 'Industry Awards' },
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
                Our Philosophy
              </span>
            </div>
            <h1
              className="font-display text-white leading-none mb-8"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', letterSpacing: '-0.03em', lineHeight: 0.88 }}
            >
              ABOUT<br />
              <span style={{ color: '#D8FF3E' }}>OVERLAB</span>
            </h1>
            <p
              className="font-serif italic leading-relaxed max-w-xl"
              style={{ color: 'rgba(245,245,239,0.6)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
            >
              We are an archive. A studio. A place where discarded journeys are transformed into objects of lasting beauty.
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
                    [Studio Image]
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
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">Our Story</span>
            </div>
            <h2
              className="font-display text-text-primary leading-none mb-10"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}
            >
              BORN FROM A<br />
              SIMPLE PARADOX
            </h2>

            <div className="space-y-5 font-serif italic text-text-secondary leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)' }}>
              <p>
                OVERLAB was born from a simple observation: recreational sports equipment — paragliders, tents, sails, diving suits — is designed to be bulletproof.
              </p>
              <p>
                Engineered to withstand extreme conditions, yet discarded based on safety regulations rather than structural failure. A paradox of material excellence and systemic waste.
              </p>
              <p>
                We saw potential where others saw waste. We recognised that the materials, technology, and craftsmanship embedded in these objects deserved a second life — not a landfill.
              </p>
              <p>
                Today, OVERLAB operates as both archive and studio — a place where forgotten journeys are preserved and transformed into contemporary objects of beauty and function.
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
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">Core Philosophy</span>
            </div>
            <h2
              className="font-display text-text-primary leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              HOW WE OPERATE
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
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">By The Numbers</span>
            </div>
            <h2
              className="font-display text-text-primary leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              OUR IMPACT
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
              JOIN THE<br />
              <span style={{ color: '#D8FF3E' }}>MOVEMENT</span>
            </h2>
            <p className="font-serif italic" style={{ color: 'rgba(245,245,239,0.5)', fontSize: '1rem' }}>
              Shop, collaborate, or simply follow our archive.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="btn-lime group inline-flex items-center gap-3">
              Shop Now →
            </Link>
            <Link href="/projects" className="btn-outline-dark group inline-flex items-center gap-3">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
