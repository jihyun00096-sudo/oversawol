'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/ui/Navigation';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/ui/Footer';

const POPUPS = [
  {
    id: 1,
    title: 'OVERLAB × The Hyundai Seoul',
    date: 'May – June 2024',
    location: 'The Hyundai, Gangnam, Seoul',
    desc: 'A three-week immersive exhibition showcasing the complete transformation journey of sports equipment into everyday objects. Interactive archive stations, material samples, and exclusive products.',
    highlights: ['Interactive Archives', 'Live Talks', 'Exclusive Products'],
    status: 'Ongoing',
  },
  {
    id: 2,
    title: 'Archive Pop-Up at Candyland',
    date: 'March – April 2024',
    location: 'Hongdae, Seoul',
    desc: 'A collaborative pop-up with independent curator highlighting emerging sustainable brands. Featured a 50-piece curated collection with community events and product demonstrations.',
    highlights: ['Community Events', 'Product Demos', 'Artist Collaboration'],
    status: 'Completed',
  },
  {
    id: 3,
    title: 'OVERLAB Flagship Experience',
    date: 'Ongoing',
    location: '123 Design Street, Mapo-gu, Seoul',
    desc: 'Our permanent flagship store serves as archive, exhibition space, and workshop. Visit for guided tours of the archive, personal consultations, and exclusive in-store events.',
    highlights: ['Permanent Archive', 'Personal Fitting', 'Workshop Space'],
    status: 'Ongoing',
  },
  {
    id: 4,
    title: 'Seoul Design Festival Exhibition',
    date: 'October 2023',
    location: 'DDP, Jung-gu, Seoul',
    desc: 'Featured as leading sustainable brand with 60+ works on display at DDP. Panel discussions on circular design, material innovation, and the future of fashion archives.',
    highlights: ['60+ Works', 'Panel Discussion', 'Award Recognition'],
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Colette Paris Debut',
    date: 'February – March 2024',
    location: '213 Rue Saint-Honoré, Paris',
    desc: 'European debut at the iconic Parisian concept store. A limited edition European collection launched exclusively, with archive installations throughout the ground floor.',
    highlights: ['European Launch', 'Limited Edition', 'Luxury Retail'],
    status: 'Completed',
  },
  {
    id: 6,
    title: 'Browns Shoreditch Residency',
    date: 'January – February 2024',
    location: 'Redchurch Street, Shoreditch, London',
    desc: 'A month-long residency at the premium London boutique featuring in-store installations and weekly design talks on material archiving and sustainable craft.',
    highlights: ['Artist Residency', 'Design Talks', 'Installation Art'],
    status: 'Completed',
  },
];

const UPCOMING = [
  { title: 'OVERLAB × Dover Street Market Tokyo', date: 'July 2024', location: 'Tokyo, Japan' },
  { title: 'Seoul Design Week Installation', date: 'September 2024', location: 'Seoul, Korea' },
];

export default function PopUpPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

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
          style={{ background: 'radial-gradient(ellipse at 60% 20%, rgba(216,255,62,0.1) 0%, transparent 55%)' }} />
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
                Experience Spaces
              </span>
            </div>
            <h1
              className="font-display text-white leading-none mb-8"
              style={{ fontSize: 'clamp(3rem, 9vw, 9rem)', letterSpacing: '-0.03em', lineHeight: 0.88 }}
            >
              POP-UPS &amp;<br />
              <span style={{ color: '#D8FF3E' }}>EXHIBITIONS</span>
            </h1>
            <p className="font-serif italic leading-relaxed max-w-lg"
              style={{ color: 'rgba(245,245,239,0.6)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              Temporary and permanent spaces where OVERLAB&apos;s archive comes alive. Exhibitions, workshops, and immersive experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter tabs ── */}
      <div
        className="sticky top-0 z-30 px-6 md:px-12 lg:px-16 xl:px-20 py-4 backdrop-blur-xl"
        style={{ backgroundColor: 'rgba(245,245,239,0.92)', borderBottom: '1px solid rgba(17,17,17,0.08)' }}
      >
        <div className="max-w-screen-2xl mx-auto flex gap-2">
          {['All', 'Ongoing', 'Completed'].map((f, i) => (
            <button key={f} className="font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300"
              style={{
                border: `1px solid ${i === 0 ? '#D8FF3E' : 'rgba(17,17,17,0.2)'}`,
                color: i === 0 ? '#111111' : '#6B6B6B',
                backgroundColor: i === 0 ? '#D8FF3E' : 'transparent',
              }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Events list ── */}
      <section ref={ref} className="relative w-full py-16 md:py-20 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary">
        <div className="max-w-screen-2xl mx-auto space-y-6 md:space-y-8">
          {POPUPS.map((popup, i) => (
            <motion.div
              key={popup.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.8 }}
            >
              <div
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 p-8 md:p-10 lg:p-12 overflow-hidden transition-colors duration-300"
                style={{ border: '1px solid rgba(17,17,17,0.1)' }}
              >
                {/* Hover wash */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ backgroundColor: 'rgba(216,255,62,0.03)' }} />

                {/* Image placeholder */}
                <div className="lg:col-span-4 relative img-placeholder overflow-hidden"
                  style={{ aspectRatio: '4/3', minHeight: '200px' }}>
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="font-mono text-xs tracking-[0.2em] uppercase px-2.5 py-1"
                      style={{
                        backgroundColor: popup.status === 'Ongoing' ? '#D8FF3E' : 'rgba(17,17,17,0.6)',
                        color: popup.status === 'Ongoing' ? '#111111' : 'rgba(245,245,239,0.8)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {popup.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8 relative z-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: popup.status === 'Ongoing' ? '#D8FF3E' : '#6B6B6B' }}
                    />
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.2em]">
                      {popup.status}
                    </span>
                  </div>

                  <h3
                    className="font-display text-text-primary mb-3 group-hover:text-lime-primary transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.3rem, 3vw, 2.5rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
                  >
                    {popup.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-5">
                    <span className="font-serif italic text-text-secondary text-sm">
                      <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mr-2">When:</span>
                      {popup.date}
                    </span>
                    <span className="font-serif italic text-text-secondary text-sm">
                      <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mr-2">Where:</span>
                      {popup.location}
                    </span>
                  </div>

                  <p className="font-serif italic text-text-secondary text-sm leading-relaxed mb-6 max-w-xl">
                    {popup.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {popup.highlights.map((h) => (
                      <span key={h} className="font-mono text-xs uppercase tracking-[0.15em] px-3 py-1"
                        style={{ backgroundColor: 'rgba(216,255,62,0.1)', color: 'rgba(216,255,62,0.8)' }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Upcoming ── */}
      <section className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-secondary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-lime-primary" />
            <h2 className="font-display text-text-primary"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}>
              COMING SOON
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {UPCOMING.map((event, i) => (
              <motion.div
                key={i}
                className="group p-8 md:p-10 hover:border-lime-primary/40 transition-all duration-300"
                style={{ border: '1px solid rgba(17,17,17,0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] px-2.5 py-1 mb-5 inline-block"
                  style={{ backgroundColor: 'rgba(216,255,62,0.1)', color: 'rgba(216,255,62,0.8)' }}>
                  Coming Soon
                </span>
                <h3 className="font-display text-text-primary mb-4 group-hover:text-lime-primary transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}>
                  {event.title}
                </h3>
                <div className="flex gap-6">
                  <span className="font-serif italic text-text-secondary text-sm">
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mr-2">When:</span>
                    {event.date}
                  </span>
                  <span className="font-serif italic text-text-secondary text-sm">
                    <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] mr-2">Where:</span>
                    {event.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="relative w-full py-20 md:py-24 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="font-display text-text-primary leading-none mb-3"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}>
              STAY CONNECTED
            </h2>
            <p className="font-serif italic text-text-secondary text-base max-w-md">
              Subscribe for early access to upcoming events, exclusive collections, and archive releases.
            </p>
          </div>
          <div className="flex w-full md:w-auto max-w-sm">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 font-serif text-sm focus:outline-none"
              style={{
                border: '1px solid rgba(17,17,17,0.15)',
                borderRight: 'none',
                backgroundColor: 'transparent',
                color: '#111111',
              }}
            />
            <button
              className="px-6 font-mono text-xs tracking-widest uppercase whitespace-nowrap"
              style={{ backgroundColor: '#D8FF3E', color: '#111111', border: '1px solid #D8FF3E' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
