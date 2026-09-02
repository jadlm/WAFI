import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Badge from '../ui/Badge';
import PawIcon from '../ui/PawIcon';
import { formatPrice, getDiscount, getStarArray } from '../../lib/utils';

export default function ProductCard({ product, index = 0 }) {
  const discount = getDiscount(product.originalPrice, product.price);
  const stars = getStarArray(product.rating);

  // Determine badge variant
  const getBadgeVariant = () => {
    if (product.badge?.includes('%') || product.badge?.includes('Pack')) return 'promo';
    if (product.isNew || product.badge === 'Nouveau') return 'new';
    return 'terracotta';
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <Link to={`/produit/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[4/5] bg-sand-200 rounded-2xl overflow-hidden mb-3">
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <Badge variant={getBadgeVariant()} size="sm">
                {product.badge}
              </Badge>
            </div>
          )}

          {/* Wishlist button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // TODO: wishlist logic
            }}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-charcoal-light hover:text-terracotta-500 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Ajouter aux favoris"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>

          {/* Product image */}
          {product.images?.[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <PawIcon size={48} className="text-sand-300 transition-all duration-500 group-hover:scale-110 group-hover:text-sand-400" />
            </div>
          )}

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="block w-full py-2.5 bg-charcoal/90 backdrop-blur-sm text-sand-100 font-body font-semibold text-sm text-center rounded-xl">
              Voir le produit
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="px-0.5">
          {/* Category */}
          <p className="text-xs text-charcoal-light font-medium uppercase tracking-wider mb-1">
            {product.subtitle}
          </p>

          {/* Name */}
          <h3 className="font-heading text-card-title text-charcoal group-hover:text-terracotta-500 transition-colors duration-200">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="flex items-center gap-0.5">
              {stars.map((star, i) => (
                <svg
                  key={i}
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill={star === 'full' ? '#C4653A' : star === 'half' ? 'url(#half)' : 'none'}
                  stroke={star === 'empty' ? '#D1C4AA' : 'none'}
                  strokeWidth="1.5"
                >
                  {star === 'half' && (
                    <defs>
                      <linearGradient id="half">
                        <stop offset="50%" stopColor="#C4653A" />
                        <stop offset="50%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  )}
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-charcoal-lighter">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
            <span className="font-body font-bold text-charcoal">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-charcoal-lighter line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <Badge variant="promo" size="sm">
                  -{discount}%
                </Badge>
              </>
            )}
          </div>

          {/* Color swatches */}
          {product.colors?.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2.5">
              {product.colors.slice(0, 4).map((color) => (
                <span
                  key={color.name}
                  className="w-4 h-4 rounded-full border-2 border-sand-100 shadow-sm ring-1 ring-charcoal/10"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-charcoal-lighter">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
