'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

const FILTERS = ['All', 'Paraglider', 'Sail', 'Tent', 'Diving'];

const PRODUCTS = [
  { id: 1, name: 'Archive Tote', collection: 'Paraglider Series', price: '₩280,000', tags: ['Ultralight', 'Daily Carry'], filter: 'Paraglider', desc: 'Crafted from decommissioned high-altitude paraglider canopy. Impossibly light, built to last a lifetime.' },
  { id: 2, name: 'Sailor Jacket', collection: 'Sail Reborn', price: '₩420,000', tags: ['Weather-proof', 'Technical'], filter: 'Sail', desc: 'Marine-grade technical jacket. Every stitch tells a story of ocean voyages transformed into wearable art.' },
  { id: 3, name: 'Altitude Backpack', collection: 'Paraglider Series', price: '₩350,000', tags: ['Structured', 'Alpine'], filter: 'Paraglider', desc: 'Engineered from vintage paraglider canopies. Minimalist design with functional capacity.' },
  { id: 4, name: 'Deep Cushion', collection: 'Diving Series', price: '₩180,000', tags: ['Thermal', 'Home'], filter: 'Diving', desc: 'Comfort meets sustainability. Reclaimed diving suit neoprene for ultimate support.' },
  { id: 5, name: 'Shelter Pouch', collection: 'Tent Revival', price: '₩95,000', tags: ['Compact', 'Travel'], filter: 'Tent', desc: 'From expedition tent to everyday carry. Water-resistant, built to endure.' },
  { id: 6, name: 'Ocean Basin', collection: 'Sail Reborn', price: '₩220,000', tags: ['Sculptural', 'Decor'], filter: 'Sail', desc: 'A sculptural accent piece. Marine-grade fabric transformed into functional home design.' },
  { id: 7, name: 'Flight Accessories', collection: 'Paraglider Series', price: '₩60,000–', price2: '₩145,000', tags: ['Collection', 'Accessory'], filter: 'Paraglider', desc: 'Headbands, pouches, straps — all made from premium paraglider fabric.' },
  { id: 8, name: 'Expedition Coat', collection: 'Tent Revival', price: '₩385,000', tags: ['Weatherproof', 'Adventure'], filter: 'Tent', desc: 'Engineered from technical tent fabric. Weatherproof, breathable, built for adventure.' },
];

export default function ProductsPage() {
  const [active, setActive] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.filter === active);

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
          style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(216,255,62,0.1) 0%, transparent 55%)' }} />
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
                Shop the Collection
              </span>
            </div>
            <h1
              className="font-display text-white leading-none mb-8"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', letterSpacing: '-0.03em', lineHeight: 0.88 }}
            >
              PRODUCTS
            </h1>
            <p className="font-serif italic leading-relaxed max-w-lg"
              style={{ color: 'rgba(245,245,239,0.6)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              Contemporary objects reimagined from sports equipment. Each piece tells a story of transformation and carries the memory of its previous life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <div
        className="sticky top-0 z-30 px-6 md:px-12 lg:px-16 xl:px-20 py-4 backdrop-blur-xl"
        style={{ backgroundColor: 'rgba(245,245,239,0.92)', borderBottom: '1px solid rgba(17,17,17,0.08)' }}
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-xs text-text-muted uppercase tracking-[0.2em]">
            {filtered.length} Products
          </span>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300"
                style={{
                  border: `1px solid ${active === f ? '#D8FF3E' : 'rgba(17,17,17,0.2)'}`,
                  color: active === f ? '#111111' : '#6B6B6B',
                  backgroundColor: active === f ? '#D8FF3E' : 'transparent',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Products grid ── */}
      <section
        ref={ref}
        className="relative w-full py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary"
      >
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                className="group flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.7 }}
              >
                {/* Image */}
                <div className="relative img-placeholder overflow-hidden mb-5"
                  style={{ aspectRatio: '3/4' }}>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                    style={{ backgroundColor: 'rgba(17,17,17,0.4)' }}
                  >
                    <button
                      className="font-mono text-xs tracking-[0.2em] uppercase px-5 py-2.5"
                      style={{ backgroundColor: '#D8FF3E', color: '#111111' }}
                    >
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Info */}
                <span className="font-mono text-xs text-text-muted uppercase tracking-[0.2em] block mb-1.5">
                  {product.collection}
                </span>
                <h3
                  className="font-display text-text-primary mb-2 group-hover:text-lime-primary transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                >
                  {product.name}
                </h3>
                <p className="font-serif italic text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {product.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2 py-1"
                      style={{ border: '1px solid rgba(17,17,17,0.15)', color: '#6B6B6B' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3"
                  style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
                  <span className="font-display text-text-primary"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', letterSpacing: '-0.02em' }}>
                    {product.price}
                  </span>
                  <button className="font-mono text-xs text-lime-primary uppercase tracking-[0.2em] hover:text-lime-secondary transition-colors duration-300">
                    Add to Cart →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-secondary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="font-display text-text-primary leading-none mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}>
              STILL LOOKING?
            </h2>
            <p className="font-serif italic text-text-secondary text-base leading-relaxed mb-8 max-w-md">
              Explore the archive to learn more about the materials behind our products, or discover ongoing projects and collaborations.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/archive" className="btn-lime group w-full text-center inline-flex items-center justify-center gap-3">
              Explore Archive →
            </Link>
            <Link href="/projects" className="btn-outline group w-full text-center inline-flex items-center justify-center gap-3">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
