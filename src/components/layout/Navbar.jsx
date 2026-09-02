import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useCartStore from '../../store/cartStore';
import PawIcon from '../ui/PawIcon';

const navLinks = [
  { name: 'Boutique', path: '/boutique' },
  { name: 'Notre histoire', path: '/a-propos' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const openCart = useCartStore((s) => s.openCart);
  const itemCount = useCartStore((s) => s.getItemCount());

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-sand-100/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-10 group flex items-center gap-1"
          >
            <span className="font-logo text-3xl md:text-4xl italic text-charcoal tracking-tight transition-colors group-hover:text-terracotta-500">
              Wafi
            </span>
            <PawIcon
              size={14}
              className="text-terracotta-400 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                  location.pathname === link.path
                    ? 'text-terracotta-500'
                    : 'text-charcoal-light hover:text-charcoal'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-terracotta-400 transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-charcoal-light hover:text-charcoal hover:bg-sand-200/60 transition-all duration-200"
              aria-label="Rechercher"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative flex items-center justify-center w-10 h-10 rounded-full text-charcoal-light hover:text-charcoal hover:bg-sand-200/60 transition-all duration-200"
              aria-label={`Panier (${itemCount} articles)`}
              id="cart-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-terracotta-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-sand-200/60 transition-all duration-200 relative z-50"
              aria-label="Menu"
              aria-expanded={isMobileOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-charcoal transition-all duration-300 ${
                  isMobileOpen ? 'rotate-45 translate-y-[3px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-charcoal mt-1.5 transition-all duration-300 ${
                  isMobileOpen ? '-rotate-45 -translate-y-[3px]' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-sand-100/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className={`font-heading text-3xl transition-colors ${
                      location.pathname === link.path
                        ? 'text-terracotta-500'
                        : 'text-charcoal hover:text-terracotta-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <PawIcon size={28} className="text-terracotta-300" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
