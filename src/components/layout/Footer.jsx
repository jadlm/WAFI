import { Link } from 'react-router-dom';
import PawIcon from '../ui/PawIcon';

const footerLinks = {
  boutique: [
    { name: 'Tous les produits', path: '/boutique' },
    { name: 'Colliers gravés', path: '/boutique?cat=colliers' },
    { name: 'Médailles', path: '/boutique?cat=medailles' },
    { name: 'Gamelles', path: '/boutique?cat=gamelles' },
    { name: 'Laisses & Harnais', path: '/boutique?cat=laisses' },
  ],
  info: [
    { name: 'Notre histoire', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/contact#faq' },
    { name: 'Guide des tailles', path: '/boutique#guide-tailles' },
  ],
  legal: [
    { name: 'CGV', path: '/cgv' },
    { name: 'Mentions légales', path: '/mentions-legales' },
    { name: 'Politique de confidentialité', path: '/politique-confidentialite' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-sand-200 mt-auto">
      {/* Newsletter band */}
      <div className="bg-terracotta-500 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="text-center md:text-left flex-1">
            <h3 className="font-heading text-2xl md:text-3xl text-white mb-1">
              Restez dans la meute
            </h3>
            <p className="text-terracotta-100 text-sm md:text-base">
              Nouveautés, promos exclusives, et photos d'animaux beaucoup trop
              mignons. Pas de spam, promis sur la tête de notre mascotte.
            </p>
          </div>
          <form
            className="flex w-full md:w-auto gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 md:w-72 px-5 py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-organic text-white placeholder:text-white/60 font-body text-sm focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              aria-label="Adresse email"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-charcoal text-sand-100 font-body font-semibold text-sm rounded-organic-alt hover:bg-charcoal/80 transition-all duration-300 whitespace-nowrap"
            >
              Je m'inscris
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-logo text-3xl italic text-sand-100">
                Wafi
              </span>
            </Link>
            <p className="text-sand-400 text-sm leading-relaxed mb-4">
              Des accessoires personnalisés pour les animaux qu'on aime trop.
              Chaque produit est pensé avec amour, fabriqué avec soin.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-sand-100/10 flex items-center justify-center text-sand-300 hover:bg-terracotta-500 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-sand-100/10 flex items-center justify-center text-sand-300 hover:bg-terracotta-500 hover:text-white transition-all duration-300"
                aria-label="TikTok"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.15V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z" />
                </svg>
              </a>
              <a
                href="mailto:hello@wafi.fr"
                className="w-9 h-9 rounded-full bg-sand-100/10 flex items-center justify-center text-sand-300 hover:bg-terracotta-500 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="font-body font-semibold text-sand-100 text-sm uppercase tracking-wider mb-4">
              Boutique
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.boutique.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sand-400 text-sm hover:text-terracotta-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sand-100 text-sm uppercase tracking-wider mb-4">
              Infos
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.info.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sand-400 text-sm hover:text-terracotta-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sand-100 text-sm uppercase tracking-wider mb-4">
              Légal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sand-400 text-sm hover:text-terracotta-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-sand-100/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sand-500 text-xs">
            © {new Date().getFullYear()} Wafi. Fait avec{' '}
            <PawIcon size={12} className="inline -mt-0.5 text-terracotta-400" />{' '}
            pour vos boules de poils.
          </p>
          <div className="flex items-center gap-4">
            <img src="/images/payment/visa.svg" alt="Visa" className="h-6 opacity-40 hover:opacity-70 transition-opacity" />
            <img src="/images/payment/mastercard.svg" alt="Mastercard" className="h-6 opacity-40 hover:opacity-70 transition-opacity" />
            <img src="/images/payment/stripe.svg" alt="Stripe" className="h-6 opacity-40 hover:opacity-70 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
}
