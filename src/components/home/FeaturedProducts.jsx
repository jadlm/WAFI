import { Link } from 'react-router-dom';
import { products } from '../../data/mockProducts';
import ProductCard from '../shop/ProductCard';
import ScrollReveal from '../ui/ScrollReveal';
import PawIcon from '../ui/PawIcon';

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.isFeatured);

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header — intentionally asymmetric */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-px bg-terracotta-400" />
                <span className="text-xs font-body font-semibold uppercase tracking-widest text-terracotta-500">
                  Nos pépites
                </span>
              </div>
              <h2 className="font-heading text-section text-charcoal text-balance">
                Les préférés de la meute
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Link
              to="/boutique"
              className="inline-flex items-center gap-2 text-sm font-body font-semibold text-charcoal-light hover:text-terracotta-500 transition-colors group"
            >
              Voir toute la collection
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* Product grid — intentionally NOT perfectly symmetric */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {featured.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <ProductCard product={product} index={index} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-charcoal-light text-sm mb-1">
              Et ce n'est qu'un aperçu…
            </p>
            <PawIcon size={16} className="text-terracotta-300 mx-auto" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
