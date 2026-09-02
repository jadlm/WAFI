import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import PawIcon from '../ui/PawIcon';
import { categories } from '../../data/mockProducts';

export default function CategoriesSection() {
  const categoryImages = {
    colliers: { emoji: '🏷️', bg: 'bg-terracotta-100/60' },
    medailles: { emoji: '🥇', bg: 'bg-sage-100/60' },
    gamelles: { emoji: '🥣', bg: 'bg-terracotta-100/40' },
    laisses: { emoji: '🦮', bg: 'bg-sage-100/40' },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-px bg-sage-400" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-sage-500">
                Catégories
              </span>
              <div className="w-8 h-px bg-sage-400" />
            </div>
            <h2 className="font-heading text-section text-charcoal">
              Trouvez le truc parfait
            </h2>
            <p className="text-charcoal-light mt-2">
              Pour votre bête préférée (oui, celle qui dort sur le canapé en ce moment).
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => {
            const style = categoryImages[cat.id];
            return (
              <ScrollReveal key={cat.id} delay={i * 0.1}>
                <Link
                  to={`/boutique?cat=${cat.id}`}
                  className="group block"
                >
                  <div
                    className={`relative aspect-square ${style.bg} rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg`}
                  >
                    <span className="text-5xl md:text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
                      {style.emoji}
                    </span>
                    <h3 className="font-heading text-lg text-charcoal text-center">
                      {cat.name}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-body font-semibold text-terracotta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explorer
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>

                    {/* Subtle paw decoration */}
                    <PawIcon
                      size={60}
                      className="absolute -bottom-3 -right-3 text-charcoal/[0.04] rotate-12"
                    />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
