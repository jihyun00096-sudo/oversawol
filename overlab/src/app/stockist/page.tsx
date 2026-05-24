'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/ui/Navigation';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/ui/Footer';

const ONLINE = [
  { name: 'OVERLAB Official', url: 'overlab.co.kr', region: 'Global', type: 'Direct' },
  { name: 'Musinsa', url: 'musinsa.com', region: 'Korea', type: 'Multi-brand' },
  { name: '29CM', url: '29cm.co.kr', region: 'Korea', type: 'Multi-brand' },
  { name: 'Farfetch', url: 'farfetch.com', region: 'Global', type: 'Luxury Marketplace' },
  { name: 'Dover Street Market', url: 'doverstreetmarket.com', region: 'Global', type: 'Curated Multi-brand' },
  { name: 'Browns Fashion', url: 'brownsfashion.com', region: 'Europe', type: 'Multi-brand' },
];

const PHYSICAL = [
  { name: 'OVERLAB Flagship', location: 'Mapo-gu, Seoul', address: '123 Design Street, Seoul', hours: '11:00–20:00 Daily', type: 'Flagship' },
  { name: 'The Hyundai Seoul', location: 'Jung-gu, Seoul', address: 'The Hyundai, Yeouido, Seoul', hours: '10:30–20:00 Daily', type: 'Department Store' },
  { name: 'Amorepacific Building', location: 'Gangnam-gu, Seoul', address: 'Amorepacific HQ, Seoul', hours: '11:00–21:00 Daily', type: 'Luxury Complex' },
  { name: 'Dover Street Market London', location: 'Mayfair, London', address: 'Dover Street, London W1S', hours: '11:00–19:00 Daily', type: 'Multi-brand' },
  { name: 'Browns East London', location: 'Shoreditch, London', address: 'Redchurch Street, E2', hours: '11:00–18:00 Daily', type: 'Boutique' },
  { name: 'Colette Paris', location: '1st arr., Paris', address: 'Rue Saint-Honoré, Paris', hours: '11:00–19:30 Mon–Sat', type: 'Concept Store' },
];

export default function StockistPage() {
  const onlineRef = useRef(null);
  const onlineInView = useInView(onlineRef, { once: true, amount: 0.1 });
  const physicalRef = useRef(null);
  const physicalInView = useInView(physicalRef, { once: true, amount: 0.1 });

  return (
    <main className="relative w-full overflow-x-hidden bg-bg-primary">
      <Cursor />
      <Navigation />

      {/* ── Hero ── */}
      <section
        className="relative w-full min-h-[65vh] flex items-end overflow-hidden"
        style={{ backgroundColor: '#181A16' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(216,255,62,0.1) 0%, transparent 55%)' }} />
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
                Find Us
              </span>
            </div>
            <h1
              className="font-display text-white leading-none mb-8"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', letterSpacing: '-0.03em', lineHeight: 0.88 }}
            >
              STOCKIST
            </h1>
            <p className="font-serif italic leading-relaxed max-w-lg"
              style={{ color: 'rgba(245,245,239,0.6)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              OVERLAB products are available through carefully curated retail partners worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Online ── */}
      <section
        ref={onlineRef}
        className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary"
      >
        <div className="max-w-screen-2xl mx-auto">
          <motion.div className="mb-14 md:mb-18"
            initial={{ opacity: 0, y: 20 }}
            animate={onlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-lime-primary" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">Online Retailers</span>
            </div>
            <h2 className="font-display text-text-primary leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}>
              SHOP ONLINE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ backgroundColor: 'rgba(17,17,17,0.08)' }}>
            {ONLINE.map((store, i) => (
              <motion.div
                key={store.name}
                className="group relative p-8 md:p-10 bg-bg-primary hover:bg-bg-secondary transition-colors duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={onlineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-lime-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono text-xs uppercase tracking-[0.2em] px-2.5 py-1"
                      style={{ backgroundColor: 'rgba(216,255,62,0.1)', color: 'rgba(216,255,62,0.8)' }}
                    >
                      {store.type}
                    </span>
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em]">{store.region}</span>
                  </div>
                  <h3
                    className="font-display text-text-primary mb-6 group-hover:text-lime-primary transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
                  >
                    {store.name}
                  </h3>
                  <a
                    href={`https://${store.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime-primary hover:text-lime-secondary transition-colors duration-300"
                  >
                    Visit Store
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Physical ── */}
      <section
        ref={physicalRef}
        className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-secondary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <motion.div className="mb-14 md:mb-18"
            initial={{ opacity: 0, y: 20 }}
            animate={physicalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-lime-primary" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">Physical Locations</span>
            </div>
            <h2 className="font-display text-text-primary leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}>
              VISIT IN PERSON
            </h2>
          </motion.div>

          <div className="space-y-0" style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
            {PHYSICAL.map((store, i) => (
              <motion.div
                key={store.name}
                className="group"
                initial={{ opacity: 0, x: -20 }}
                animate={physicalInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.7 }}
              >
                <div
                  className="relative grid grid-cols-12 gap-4 md:gap-8 py-8 overflow-hidden transition-colors duration-300"
                  style={{ borderBottom: '1px solid rgba(17,17,17,0.08)' }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ backgroundColor: 'rgba(216,255,62,0.03)' }} />

                  {/* Type badge */}
                  <div className="col-span-12 md:col-span-2 flex items-center md:items-start md:pt-1">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] px-2.5 py-1"
                      style={{ border: '1px solid rgba(216,255,62,0.35)', color: 'rgba(216,255,62,0.75)' }}>
                      {store.type}
                    </span>
                  </div>

                  {/* Name + location */}
                  <div className="col-span-12 md:col-span-4">
                    <h3
                      className="font-display text-text-primary mb-1 group-hover:text-lime-primary transition-colors duration-300"
                      style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
                    >
                      {store.name}
                    </h3>
                    <p className="font-serif italic text-text-secondary text-sm">{store.location}</p>
                  </div>

                  {/* Address */}
                  <div className="col-span-6 md:col-span-4">
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] block mb-1">Address</span>
                    <p className="font-sans text-sm text-text-secondary">{store.address}</p>
                  </div>

                  {/* Hours */}
                  <div className="col-span-6 md:col-span-2">
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] block mb-1">Hours</span>
                    <p className="font-sans text-sm text-text-secondary">{store.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Presence ── */}
      <section className="relative w-full py-20 md:py-24 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-lime-primary" />
            <h2 className="font-display text-text-primary"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)', letterSpacing: '-0.025em' }}>
              Global Presence
            </h2>
          </div>
          <div
            className="relative img-placeholder flex items-center justify-center"
            style={{ aspectRatio: '21/9' }}
          >
            <div className="text-center opacity-20">
              <div className="font-display text-text-primary mb-2"
                style={{ fontSize: '4rem', letterSpacing: '-0.04em' }}>
                WORLD
              </div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-widest">[Interactive Map — 180+ Countries]</div>
            </div>
            {/* Lime accent corner */}
            <div className="absolute bottom-0 left-0 w-16 h-1" style={{ backgroundColor: '#D8FF3E' }} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
