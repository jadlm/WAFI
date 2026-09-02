import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import { formatPrice } from '../../lib/utils';
import Button from '../ui/Button';
import PawIcon from '../ui/PawIcon';

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, getSubtotal, getItemCount } = useCartStore();
  const itemCount = getItemCount();
  const subtotal = getSubtotal();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-sand-100 z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/10">
              <div className="flex items-center gap-2">
                <h2 className="font-heading text-xl text-charcoal">Votre panier</h2>
                {itemCount > 0 && (
                  <span className="bg-terracotta-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="w-8 h-8 rounded-full hover:bg-sand-200 flex items-center justify-center transition-colors"
                aria-label="Fermer le panier"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <PawIcon size={48} className="text-sand-300 mb-4" />
                  <p className="font-heading text-xl text-charcoal mb-2">
                    C'est vide ici…
                  </p>
                  <p className="text-charcoal-light text-sm mb-6">
                    Votre boule de poils attend ses cadeaux !
                  </p>
                  <Button variant="primary" size="sm" onClick={closeCart}>
                    <Link to="/boutique">Explorer la boutique</Link>
                  </Button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <motion.li
                      key={item.cartItemId}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 p-3 bg-sand-50 rounded-2xl"
                    >
                      {/* Image placeholder */}
                      <div className="w-20 h-20 bg-sand-200 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                        {item.product.images?.[0] ? (
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <PawIcon size={24} className="text-sand-400" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-body font-semibold text-sm text-charcoal truncate">
                          {item.product.name}
                        </h4>
                        <div className="flex flex-wrap gap-x-2 text-xs text-charcoal-light mt-0.5">
                          {item.size && <span>Taille : {item.size.toUpperCase()}</span>}
                          {item.color && <span>Couleur : {item.color}</span>}
                        </div>
                        {item.personalization && (
                          <p className="text-xs text-terracotta-500 mt-0.5 italic">
                            « {item.personalization} »
                          </p>
                        )}

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity */}
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() =>
                                updateQuantity(item.cartItemId, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                              className="w-6 h-6 rounded-full bg-sand-200 text-charcoal-light hover:bg-sand-300 flex items-center justify-center text-sm disabled:opacity-30 transition-colors"
                            >
                              −
                            </button>
                            <span className="w-6 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.cartItemId, item.quantity + 1)
                              }
                              className="w-6 h-6 rounded-full bg-sand-200 text-charcoal-light hover:bg-sand-300 flex items-center justify-center text-sm transition-colors"
                            >
                              +
                            </button>
                          </div>

                          {/* Price + remove */}
                          <div className="flex items-center gap-2">
                            <span className="font-body font-semibold text-sm text-charcoal">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                            <button
                              onClick={() => removeItem(item.cartItemId)}
                              className="text-charcoal-lighter hover:text-terracotta-500 transition-colors"
                              aria-label={`Retirer ${item.product.name}`}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-charcoal/10 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-light text-sm">Sous-total</span>
                  <span className="font-body font-bold text-lg text-charcoal">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                {subtotal < 50 && (
                  <p className="text-xs text-sage-500 text-center">
                    Plus que {formatPrice(50 - subtotal)} pour la livraison gratuite ! 🎉
                  </p>
                )}
                <Link to="/panier" onClick={closeCart}>
                  <Button variant="primary" size="lg" className="w-full">
                    Voir le panier
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
