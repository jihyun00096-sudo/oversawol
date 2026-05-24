'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ARCHIVE', href: '/archive' },
    { label: 'PRODUCTS', href: '/products' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'ABOUT', href: '/about' },
    { label: 'STOCKIST', href: '/stockist' },
    { label: 'POP-UP', href: '/pop-up' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(245, 245, 239, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(17, 17, 17, 0.08)' : 'none',
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-8 lg:px-12 py-4 md:py-5 max-w-full">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl md:text-3xl tracking-tighter text-text-primary hover:text-lime-primary transition-colors duration-300"
            style={{ letterSpacing: '-0.04em' }}
          >
            OVERLAB
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-lime-primary'
                    : 'text-text-primary hover:text-lime-primary'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-px bg-lime-primary"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href="/shop"
              className="hidden sm:inline-flex font-mono text-xs tracking-widest uppercase px-4 py-2 border border-text-primary text-text-primary hover:border-lime-primary hover:text-lime-primary hover:bg-lime-primary/5 transition-all duration-300"
            >
              SHOP
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 relative"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <motion.span
                className="block w-5 h-px bg-text-primary transition-colors duration-300"
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-5 h-px bg-text-primary transition-colors duration-300"
                animate={{
                  opacity: menuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-px bg-text-primary transition-colors duration-300"
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-bg-primary/98 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-screen gap-6 pt-20">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`font-display text-3xl tracking-tighter transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-lime-primary'
                        : 'text-text-primary hover:text-lime-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-6 pt-6 border-t border-lime-primary/30 w-32"
              >
                <Link
                  href="/shop"
                  className="block font-mono text-xs tracking-widest uppercase px-4 py-3 border border-lime-primary text-lime-primary text-center hover:bg-lime-primary hover:text-text-primary transition-all duration-300"
                >
                  SHOP NOW
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
