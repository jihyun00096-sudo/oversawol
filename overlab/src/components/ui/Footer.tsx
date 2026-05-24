import Link from 'next/link';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Archive', href: '/archive' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Stockist', href: '/stockist' },
  { label: 'Pop-Up', href: '/pop-up' },
];

const SOCIAL = [
  { label: 'Instagram', href: '#' },
  { label: 'Newsletter', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#111110', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="px-6 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20 max-w-screen-2xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-20"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '4rem' }}>

          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="font-display text-white block mb-5 hover:text-lime-primary transition-colors duration-300"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
            >
              OVERLAB
            </Link>
            <p
              className="font-serif italic leading-relaxed mb-6 max-w-xs"
              style={{ color: 'rgba(245,245,239,0.4)', fontSize: '0.875rem' }}
            >
              Future Archive. Upcycled leisure sports equipment reimagined as daily design objects.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-breathe" style={{ backgroundColor: '#D8FF3E' }} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: 'rgba(245,245,239,0.3)' }}>
                Open for Collaboration
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <p
              className="font-mono text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: 'rgba(245,245,239,0.25)' }}
            >
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.2em] hover-underline w-fit transition-colors duration-300"
                  style={{ color: 'rgba(245,245,239,0.5)' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-3 md:col-start-10">
            <p
              className="font-mono text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: 'rgba(245,245,239,0.25)' }}
            >
              Connect
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {SOCIAL.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.2em] hover-underline w-fit transition-colors duration-300"
                  style={{ color: 'rgba(245,245,239,0.5)' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {/* Email subscribe */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] mb-3"
                style={{ color: 'rgba(245,245,239,0.3)' }}>
                Newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 font-serif text-sm focus:outline-none"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(245,245,239,0.8)',
                    borderRight: 'none',
                  }}
                />
                <button
                  className="px-4 font-mono text-xs tracking-widest uppercase transition-colors duration-300"
                  style={{ backgroundColor: '#D8FF3E', color: '#111111', border: '1px solid #D8FF3E' }}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: 'rgba(245,245,239,0.2)' }}
          >
            © 2024 OVERLAB. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-mono text-xs uppercase tracking-[0.15em]"
              style={{ color: 'rgba(245,245,239,0.2)' }}>
              Privacy
            </Link>
            <Link href="#" className="font-mono text-xs uppercase tracking-[0.15em]"
              style={{ color: 'rgba(245,245,239,0.2)' }}>
              Terms
            </Link>
            <span
              className="font-mono text-xs uppercase tracking-[0.15em]"
              style={{ color: 'rgba(216,255,62,0.4)' }}
            >
              Future Archive
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
