import ScrollReveal from '../ui/ScrollReveal';

const items = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polyline points="16 8 20 8 23 11 23 16 20 16" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Livraison soignée',
    text: 'En 3-5 jours, dans une boîte aussi jolie que le cadeau dedans. Gratuit dès 50 €.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: 'Paiement sécurisé',
    text: 'Stripe s\'occupe de tout. Votre CB est en sécurité, pas comme la chaussette de votre chien.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 12c0-4.4-3.6-8-8-8H9C4.6 4 1 7.6 1 12s3.6 8 8 8h6" />
        <polyline points="16 16 20 20 23 16" />
      </svg>
    ),
    title: '30 jours pour changer d\'avis',
    text: 'Retours gratuits, échanges sans prise de tête. On ne vous fera pas la morale.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Fait avec amour',
    text: 'Chaque gravure, chaque broderie est vérifiée à la main. On ne laisse rien passer.',
  },
];

export default function Reassurance() {
  return (
    <section className="py-16 md:py-24 bg-sand-200/50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center md:text-left group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sand-100 text-terracotta-500 mb-4 transition-all duration-300 group-hover:bg-terracotta-500 group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-terracotta-500/20">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg text-charcoal mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
