'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 'nike-acg',
    year: '2024',
    title: 'Nike ACG Collaboration',
    category: 'Collaboration',
    desc: 'Co-designed outdoor gear collection merging Nike innovation with OVERLAB sustainability.',
    impact: '25,000+ units',
  },
  {
    id: 'seoul-design',
    year: '2024',
    title: 'Seoul Design Festival',
    category: 'Exhibition',
    desc: 'Featured as leading sustainable brand. 50+ archive pieces on display.',
    impact: '12,000 visitors',
  },
  {
    id: 'lg-electronics',
    year: '2023',
    title: 'LG Electronics Partnership',
    category: 'Partnership',
    desc: 'Material science collaboration exploring textile recycling and circular economy.',
    impact: '₩500M+ grant',
  },
  {
    id: 'volvo-residency',
    year: '2023',
    title: 'Volvo Design Residency',
    category: 'Residency',
    desc: 'Three-month immersion exploring material innovation with Volvo Design team.',
    impact: '3 prototypes',
  },
  {
    id: 'award-2023',
    year: '2023',
    title: 'Best Upcycling Brand Award',
    category: 'Award',
    desc: 'International recognition from Seoul Sustainable Fashion Alliance.',
    impact: 'Industry Award',
  },
  {
    id: 'snow-peak',
    year: '2022',
    title: 'Snow Peak Outdoor Series',
    category: 'Product Series',
    desc: 'Limited edition camping and hiking collection for serious outdoor enthusiasts.',
    impact: '8,000+ sold',
  },
];

const PARTNER_LOGOS = ['Nike', 'LG', 'KT', 'Volvo', 'Snow Peak', 'Ader Error'];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative w-full bg-bg-primary overflow-hidden py-24 md:py-32 lg:py-40">

      <div className="px-6 md:px-12 lg:px-16 xl:px-20 max-w-screen-2xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-lime-primary" />
            <span className="font-mono text-xs text-text-muted uppercase tracking-[0.3em]">
              Recognition & Collaboration
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h2
                className="font-display text-text-primary leading-none"
                style={{ fontSize: 'clamp(2.8rem, 7.5vw, 8rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
              >
                WORKING WITH<br />
                <span className="text-lime-primary">PURPOSE.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <p className="font-serif italic text-text-secondary text-base leading-relaxed">
                Strategic partnerships and industry recognition that validate our approach to sustainable design excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Partner logos marquee */}
        <motion.div
          className="mb-16 md:mb-20 overflow-hidden py-6"
          style={{ borderTop: '1px solid rgba(17,17,17,0.08)', borderBottom: '1px solid rgba(17,17,17,0.08)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="animate-marquee-slow">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((name, i) => (
              <span
                key={i}
                className="font-display px-10 md:px-14 text-text-primary/20 hover:text-text-primary/60 transition-colors duration-300 whitespace-nowrap"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}
              >
                {name}
                <span className="text-lime-primary/40 mx-8 text-base" style={{ letterSpacing: 0 }}>·</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-0" style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.7 }}
            >
              <Link href={`/projects#${project.id}`}>
                <div
                  className="relative grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 px-0 overflow-hidden transition-all duration-300"
                  style={{ borderBottom: '1px solid rgba(17,17,17,0.08)' }}
                >
                  {/* Hover wash */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ backgroundColor: 'rgba(216,255,62,0.03)' }} />

                  {/* Year */}
                  <div className="col-span-2 md:col-span-1 flex items-center">
                    <span
                      className="font-mono text-xs text-text-muted uppercase tracking-[0.15em]"
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="hidden md:flex col-span-2 items-center">
                    <span
                      className="font-mono text-xs uppercase tracking-[0.15em] px-2.5 py-1"
                      style={{ border: '1px solid rgba(216,255,62,0.3)', color: 'rgba(216,255,62,0.7)' }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <div className="col-span-8 md:col-span-6 flex flex-col justify-center">
                    <h3
                      className="font-display text-text-primary mb-1 group-hover:text-lime-primary transition-colors duration-300"
                      style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
                    >
                      {project.title}
                    </h3>
                    <p className="font-serif italic text-text-secondary text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="hidden md:flex col-span-2 items-center justify-end">
                    <span
                      className="font-mono text-xs uppercase tracking-[0.15em] text-lime-primary opacity-80 text-right"
                    >
                      {project.impact}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-2 md:col-span-1 flex items-center justify-end">
                    <span
                      className="text-lime-primary text-lg group-hover:translate-x-1.5 transition-transform duration-300"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div>
            <p className="font-serif italic text-text-secondary text-base leading-relaxed max-w-md">
              Interested in collaborating? OVERLAB is always open to partnerships that align with our mission of sustainable innovation.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/projects" className="btn-outline group inline-flex items-center gap-2 whitespace-nowrap">
              All Projects →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
