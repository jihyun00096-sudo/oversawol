'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/ui/Navigation';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 'nike-acg',
    year: '2024',
    title: 'Nike ACG Collaboration',
    category: 'Collaboration',
    desc: 'Co-designed outdoor gear collection merging Nike innovation with OVERLAB sustainability. A milestone in high-performance upcycled products.',
    impact: '25,000+ units sold globally',
    long: 'Working with Nike\'s ACG team, we developed a collection that brought paraglider and tent fabrics into performance outdoor gear. The collaboration challenged both teams to rethink what "technical" means when the material already carries a history.',
  },
  {
    id: 'seoul-design',
    year: '2024',
    title: 'Seoul Design Festival',
    category: 'Exhibition',
    desc: 'Featured as leading sustainable brand. Curated 50+ pieces showcasing archive transformation process.',
    impact: '12,000+ visitors',
    long: 'A curated exhibition at DDP that walked visitors through the complete OVERLAB transformation journey — from raw retired equipment to finished objects. The installation included original source materials alongside their reborn counterparts.',
  },
  {
    id: 'lg-electronics',
    year: '2023',
    title: 'LG Electronics Partnership',
    category: 'Partnership',
    desc: 'Material science collaboration exploring textile recycling and circular economy integration.',
    impact: '₩500M+ research grant',
    long: 'A joint research initiative investigating advanced material processing techniques for high-performance technical textiles. The partnership has led to new inspection methodologies and treatments now used across our entire archive.',
  },
  {
    id: 'volvo-residency',
    year: '2023',
    title: 'Volvo Design Residency',
    category: 'Residency',
    desc: 'Three-month immersion exploring material innovation and sustainable design principles with Volvo Design.',
    impact: '3 prototypes developed',
    long: 'The residency at Volvo\'s Gothenburg design studio challenged us to apply our archival thinking to automotive contexts — exploring how technical fabric could translate into cabin materials and accessories.',
  },
  {
    id: 'award-2023',
    year: '2023',
    title: 'Best Upcycling Brand Award',
    category: 'Award',
    desc: 'International recognition for environmental impact and design excellence. Awarded by Seoul Sustainable Fashion Alliance.',
    impact: 'Industry Leadership',
    long: 'Recognition from the Seoul Sustainable Fashion Alliance for our approach to upcycling as an aesthetic practice rather than a compromise. The award cited our archive methodology and material traceability as industry benchmarks.',
  },
  {
    id: 'snow-peak',
    year: '2022',
    title: 'Snow Peak Outdoor Series',
    category: 'Product Series',
    desc: 'Limited edition camping and hiking collection. 8 products designed for serious outdoor enthusiasts.',
    impact: '8,000+ sold',
    long: 'A collaboration with Snow Peak that merged Japanese outdoor philosophy with OVERLAB\'s archive sensibility. Each product in the series was made from a single-source material — one tent, one paraglider — making every piece genuinely limited.',
  },
];

export default function ProjectsPage() {
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
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(216,255,62,0.1) 0%, transparent 55%)' }} />
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
                Collaborations & Recognition
              </span>
            </div>
            <h1
              className="font-display text-white leading-none mb-8"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', letterSpacing: '-0.03em', lineHeight: 0.88 }}
            >
              PROJECTS
            </h1>
            <p className="font-serif italic leading-relaxed max-w-lg"
              style={{ color: 'rgba(245,245,239,0.6)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
              Strategic partnerships, exhibitions, and industry recognition that validate our mission to transform sustainable design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Projects list ── */}
      <section ref={ref} className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-primary">
        <div className="max-w-screen-2xl mx-auto">

          {/* Index header */}
          <div
            className="hidden md:grid grid-cols-12 gap-8 pb-4 mb-2"
            style={{ borderBottom: '1px solid rgba(17,17,17,0.12)' }}
          >
            <span className="col-span-1 font-mono text-xs text-text-muted uppercase tracking-[0.2em]">Year</span>
            <span className="col-span-2 font-mono text-xs text-text-muted uppercase tracking-[0.2em]">Type</span>
            <span className="col-span-5 font-mono text-xs text-text-muted uppercase tracking-[0.2em]">Project</span>
            <span className="col-span-3 font-mono text-xs text-text-muted uppercase tracking-[0.2em] text-right">Impact</span>
            <span className="col-span-1" />
          </div>

          <div>
            {PROJECTS.map((p, i) => (
              <ProjectRow key={p.id} project={p} i={i} inView={inView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration CTA ── */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-20 bg-bg-secondary"
        style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="font-display text-text-primary leading-none mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}>
              INTERESTED IN<br />
              <span className="text-lime-primary">COLLABORATION?</span>
            </h2>
            <p className="font-serif italic text-text-secondary text-base leading-relaxed max-w-md">
              OVERLAB is always open to partnerships that align with our mission of sustainable innovation and design excellence.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/about" className="btn-lime group w-full text-center inline-flex items-center justify-center gap-3">
              Get in Touch →
            </Link>
            <Link href="/products" className="btn-outline group w-full text-center inline-flex items-center justify-center gap-3">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProjectRow({
  project, i, inView
}: {
  project: (typeof PROJECTS)[0];
  i: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.07, duration: 0.7 }}
    >
      <div
        className="relative grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 overflow-hidden transition-colors duration-300"
        style={{ borderBottom: '1px solid rgba(17,17,17,0.08)' }}
        id={project.id}
      >
        {/* Hover wash */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ backgroundColor: 'rgba(216,255,62,0.03)' }} />

        {/* Year */}
        <div className="col-span-4 md:col-span-1 flex items-start">
          <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em] pt-1">{project.year}</span>
        </div>

        {/* Category */}
        <div className="hidden md:flex col-span-2 items-start pt-0.5">
          <span
            className="font-mono text-xs uppercase tracking-[0.15em] px-2.5 py-1"
            style={{ border: '1px solid rgba(216,255,62,0.35)', color: 'rgba(216,255,62,0.75)' }}
          >
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="col-span-7 md:col-span-5">
          <h3
            className="font-display text-text-primary mb-2 group-hover:text-lime-primary transition-colors duration-300"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
          >
            {project.title}
          </h3>
          <p className="font-serif italic text-text-secondary text-sm leading-relaxed">{project.desc}</p>
        </div>

        {/* Impact */}
        <div className="hidden md:flex col-span-3 items-start justify-end">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-lime-primary opacity-80 text-right pt-1">
            {project.impact}
          </span>
        </div>

        {/* Arrow */}
        <div className="col-span-1 flex items-center justify-end">
          <span className="text-lime-primary text-lg group-hover:translate-x-1.5 transition-transform duration-300">→</span>
        </div>
      </div>
    </motion.div>
  );
}
