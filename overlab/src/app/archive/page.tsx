'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/ui/Navigation';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

const MATERIALS = [
  {
    id: 'paraglider',
    num: '01',
    name: 'Paraglider',
    tagline: 'Wings to Wonder',
    origin: 'Alpine Sports Centers',
    material: 'High-Performance Nylon',
    weight: 'Ultra-light · 80–150g/m²',
    properties: 'Water-resistant · Durable · UV-stable',
    products: 8,
    desc: 'Ultra-lightweight nylon with exceptional durability, once designed to catch alpine winds and carry human weight through the sky. Now woven into everyday objects that are impossibly light yet built to last.',
    process: [
      'Collection from retired paragliders worldwide',
      'Detailed analysis of material integrity',
      'Careful disassembly and seam removal',
      'Color preservation and quality control',
      'Re-cutting and pattern design',
      'Manufacturing into new products',
    ],
  },
  {
    id: 'tent',
    num: '02',
    name: 'Tent',
    tagline: 'Shelter Transformed',
    origin: 'Outdoor Equipment Depots',
    material: 'Technical Polyester Blend',
    weight: 'Professional-Grade',
    properties: 'Waterproof · Windproof · Breathable',
    products: 12,
    desc: 'Weather-resistant layered fabric with structural memory, built to withstand extreme conditions. These materials carry stories of journeys and adventures across the globe — mountain ridges, desert plateaus, arctic tundras.',
    process: [
      'Systematic collection of end-of-life tents',
      'Material classification and assessment',
      'Seam removal and careful disassembly',
      'Industrial washing and treatment',
      'Panel cutting and sorting by grade',
      'Assembly into structured products',
    ],
  },
  {
    id: 'sail',
    num: '03',
    name: 'Sail',
    tagline: 'Ocean Poetry',
    origin: 'Sailing Clubs & Marine Centers',
    material: 'Dacron & Laminate Blend',
    weight: 'Extreme Weather Tested',
    properties: 'Salt-resistant · Elastic · Durable',
    products: 6,
    desc: 'Marine-grade Dacron laminate with salt-resistant woven construction and natural elasticity. Each piece carries the cartography of its voyages — the faint map of ropes, sun, and ocean gales pressed into the fabric.',
    process: [
      'Partnership with maritime clubs for collection',
      'Visual inspection for integrity and UV damage',
      'Stitching removal and layering separation',
      'Salt and mineral removal treatment',
      'Color enhancement and conditioning',
      'Precision cutting and crafting into new forms',
    ],
  },
  {
    id: 'diving',
    num: '04',
    name: 'Diving Suit',
    tagline: 'Depths Reimagined',
    origin: 'Diving Schools & Sports Centers',
    material: 'Neoprene & Stretch Fabric',
    weight: 'High-Performance Insulation',
    properties: 'Flexible · Insulating · Pressure-tested',
    products: 5,
    desc: 'Thermal-regulating neoprene that once equalized pressure at depth and kept divers warm in cold ocean water. Dense, flexible, and insulating — it translates naturally into cushions, padding, and soft home accessories.',
    process: [
      'Acquisition from diving equipment suppliers',
      'Thickness and elasticity testing',
      'Careful deconstructing of seams and zippers',
      'Specialized neoprene cleaning process',
      'Stretching and conditioning',
      'Precision cutting and assembly into new forms',
    ],
  },
];

export default function ArchivePage() {
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
          style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(216,255,62,0.1) 0%, transparent 55%)' }} />
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
                Complete Material Archives
              </span>
            </div>
            <h1
              className="font-display text-white leading-none mb-8"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', letterSpacing: '-0.03em', lineHeight: 0.88 }}
            >
              THE<br />
              <span style={{ color: '#D8FF3E' }}>ARCHIVE</span>
            </h1>
            <p className="font-serif italic leading-relaxed max-w-lg"
              style={{ color: 'rgba(245,245,239,0.6)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              Every material has a story. Explore the source, the process, and the transformation that brings new life to forgotten objects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Material sections ── */}
      <div className="relative">
        {MATERIALS.map((mat, idx) => (
          <MaterialSection key={mat.id} mat={mat} idx={idx} />
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <section
        className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <h2
              className="font-display text-text-primary leading-none mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              READY TO OWN<br />
              <span className="text-lime-primary">A PIECE OF HISTORY?</span>
            </h2>
            <p className="font-serif italic text-text-secondary text-base">
              Each product carries the story of its material source and the artistry of its reconstruction.
            </p>
          </div>
          <Link href="/products" className="btn-lime group inline-flex items-center gap-3 whitespace-nowrap flex-shrink-0">
            Shop Products →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function MaterialSection({ mat, idx }: { mat: (typeof MATERIALS)[0]; idx: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const isEven = idx % 2 === 0;

  return (
    <section
      ref={ref}
      id={mat.id}
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 xl:px-20 overflow-hidden"
      style={{ backgroundColor: idx % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)' }}
    >
      <div className="max-w-screen-2xl mx-auto">

        {/* Main grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 md:mb-28`}>

          {/* Image */}
          <motion.div
            className={`lg:col-span-5 ${isEven ? '' : 'lg:order-2'}`}
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="relative img-placeholder overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-15">
                <div className="font-display text-text-primary text-center"
                  style={{ fontSize: '10rem', letterSpacing: '-0.04em' }}>
                  {mat.num}
                </div>
              </div>
              <div className="absolute top-6 left-6">
                <span
                  className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1.5"
                  style={{ backgroundColor: '#D8FF3E', color: '#111111' }}
                >
                  {mat.products} Products
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-lime-primary" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className={`lg:col-span-7 ${isEven ? '' : 'lg:order-1'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-lime-primary">
                Material {mat.num}
              </span>
              <div className="flex-1 h-px bg-lime-primary/20" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-muted">
                {mat.origin}
              </span>
            </div>

            <h2
              className="font-display text-text-primary leading-none mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              {mat.name.toUpperCase()}
            </h2>
            <p className="font-serif italic text-text-secondary mb-8"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
              {mat.tagline}
            </p>
            <p className="font-serif italic text-text-secondary text-base leading-relaxed mb-10 max-w-lg">
              {mat.desc}
            </p>

            {/* Specs */}
            <div className="space-y-4 py-8" style={{ borderTop: '1px solid rgba(17,17,17,0.1)', borderBottom: '1px solid rgba(17,17,17,0.1)' }}>
              {[
                ['Material', mat.material],
                ['Weight / Grade', mat.weight],
                ['Properties', mat.properties],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-start gap-8">
                  <span className="font-mono text-xs text-text-muted uppercase tracking-[0.2em]">{k}</span>
                  <span className="font-sans text-sm text-text-primary text-right">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/products" className="btn-lime group inline-flex items-center gap-3">
                View {mat.products} Products →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Process grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-lime-primary" />
            <h3 className="font-display text-text-primary"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.025em' }}>
              The Process
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {mat.process.map((step, i) => (
              <div
                key={i}
                className="relative p-6 group hover:border-lime-primary/40 transition-all duration-300"
                style={{ border: '1px solid rgba(17,17,17,0.1)' }}
              >
                <div className="absolute -top-3 left-4 w-6 h-6 flex items-center justify-center font-mono text-xs"
                  style={{ backgroundColor: '#D8FF3E', color: '#111111' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-serif italic text-text-secondary text-sm leading-relaxed pt-3">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
