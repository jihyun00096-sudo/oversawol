'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const MATERIALS = [
  {
    id: 'paraglider',
    name: 'Paraglider',
    tagline: 'Wings to Wonder',
    origin: 'Alpine Sports Centers',
    material: 'High-Performance Nylon',
    weight: 'Ultra-light 80–150g/m²',
    products: 8,
    desc: 'Ultra-lightweight nylon designed to carry human weight through alpine air. Once retired from the sky, it becomes the lightest, most durable everyday carry imaginable.',
    accentColor: 'rgba(216,255,62,0.12)',
  },
  {
    id: 'tent',
    name: 'Tent',
    tagline: 'Shelter Transformed',
    origin: 'Outdoor Equipment Depots',
    material: 'Technical Polyester Blend',
    weight: 'Professional-Grade',
    products: 12,
    desc: 'Weather-resistant layered fabric built to survive monsoons and blizzards. Structural memory woven in. These panels have sheltered climbers on the world\'s highest ridges.',
    accentColor: 'rgba(216,255,62,0.08)',
  },
  {
    id: 'sail',
    name: 'Sail',
    tagline: 'Ocean Poetry',
    origin: 'Sailing Clubs & Marine Centers',
    material: 'Dacron & Laminate Blend',
    weight: 'Extreme Weather Tested',
    products: 6,
    desc: 'Salt-resistant Dacron laminate that has felt ocean gales and tacked through open water. Each piece carries a faint cartography of its voyages in its weave.',
    accentColor: 'rgba(216,255,62,0.06)',
  },
  {
    id: 'diving',
    name: 'Diving Suit',
    tagline: 'Depths Reimagined',
    origin: 'Diving Schools & Sports Centers',
    material: 'Neoprene & Stretch Fabric',
    weight: 'High-Performance Insulation',
    products: 5,
    desc: 'Thermal-regulating neoprene that once equalized pressure at depth. Dense, flexible, insulating—it translates perfectly into cushions, padding, and soft accessories.',
    accentColor: 'rgba(216,255,62,0.1)',
  },
];

export default function MaterialArchiveShowcaseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative w-full bg-bg-primary overflow-hidden py-24 md:py-32 lg:py-40">

      {/* Subtle grid bg */}
      <div className="absolute inset-0 -z-10 opacity-[0.025]">
        <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="archive-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#111111" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1440" height="900" fill="url(#archive-grid)" />
        </svg>
      </div>

      <div className="px-6 md:px-12 lg:px-16 xl:px-20 max-w-screen-2xl mx-auto">

        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-lime-primary" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">
                Archive Collections
              </span>
            </div>
            <h2
              className="font-display text-text-primary leading-none"
              style={{ fontSize: 'clamp(2.8rem, 7.5vw, 8rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              FOUR SOURCES.<br />
              <span className="text-lime-primary">ONE ARCHIVE.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="font-serif italic text-text-secondary text-base leading-relaxed">
              Each collection tells the story of its source—where it came from, how it was transformed, and what it became.
            </p>
          </div>
        </motion.div>

        {/* Materials — asymmetric editorial grid */}
        <div className="space-y-6 md:space-y-8">

          {/* Row 1: two equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {MATERIALS.slice(0, 2).map((mat, i) => (
              <MaterialCard key={mat.id} mat={mat} i={i} inView={inView} large />
            ))}
          </div>

          {/* Row 2: one wide + one narrow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2">
              <MaterialCard mat={MATERIALS[2]} i={2} inView={inView} large />
            </div>
            <div className="md:col-span-1">
              <MaterialCard mat={MATERIALS[3]} i={3} inView={inView} large={false} />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 md:mt-24 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div>
            <h3
              className="font-display text-text-primary mb-3"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', letterSpacing: '-0.025em', lineHeight: 1 }}
            >
              Explore the Full Archive
            </h3>
            <p className="font-serif italic text-text-secondary text-sm">
              31 products across 4 material categories. Each with traceable provenance.
            </p>
          </div>
          <Link href="/archive" className="btn-lime group inline-flex items-center gap-3 whitespace-nowrap flex-shrink-0">
            View Archive
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function MaterialCard({
  mat,
  i,
  inView,
  large,
}: {
  mat: (typeof MATERIALS)[0];
  i: number;
  inView: boolean;
  large: boolean;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden card-lift"
      style={{ height: large ? 'clamp(320px, 40vw, 520px)' : 'clamp(320px, 40vw, 520px)' }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 + i * 0.1, duration: 0.8 }}
    >
      <Link href={`/archive#${mat.id}`} className="block w-full h-full">
        {/* Placeholder background */}
        <div
          className="absolute inset-0 img-placeholder transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundColor: '#EFEDE7' }}
        />

        {/* Color wash */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 30% 30%, ${mat.accentColor}, transparent 60%)` }}
        />

        {/* Overlay gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(to top, rgba(17,17,17,0.85) 0%, rgba(17,17,17,0.2) 50%, transparent 100%)',
          }}
        />

        {/* Placeholder label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center opacity-20">
            <div
              className="font-display text-text-primary mb-2"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', letterSpacing: '-0.03em' }}
            >
              {mat.name.charAt(0)}
            </div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-widest">
              [Image Placeholder]
            </div>
          </div>
        </div>

        {/* Top: product count */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1.5"
            style={{
              backgroundColor: 'rgba(17,17,17,0.6)',
              color: '#D8FF3E',
              backdropFilter: 'blur(8px)',
            }}
          >
            {mat.products} Products
          </span>
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1.5"
            style={{
              backgroundColor: 'rgba(17,17,17,0.6)',
              color: 'rgba(245,245,239,0.7)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {mat.origin}
          </span>
        </div>

        {/* Bottom: content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="mb-3">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-lime-primary opacity-80">
              {mat.material}
            </span>
          </div>
          <h3
            className="font-display text-white mb-2 group-hover:text-lime-primary transition-colors duration-300"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
          >
            {mat.name}
          </h3>
          <p
            className="font-serif italic text-white/60 text-sm leading-relaxed mb-4 max-w-sm"
            style={{
              maxHeight: '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease',
            }}
          >
            {mat.tagline}
          </p>
          <div className="flex items-center gap-2 text-lime-primary group-hover:gap-3 transition-all duration-300">
            <span className="font-mono text-xs tracking-[0.2em] uppercase">Explore</span>
            <span>→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
