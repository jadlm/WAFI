import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import PawIcon from '../ui/PawIcon';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background decorative paws */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <PawIcon
          size={180}
          className="absolute -top-10 -right-10 text-terracotta-200/10 rotate-12"
        />
        <PawIcon
          size={120}
          className="absolute bottom-20 -left-8 text-sage-300/10 -rotate-20"
        />
        <PawIcon
          size={80}
          className="absolute top-1/3 right-1/4 text-terracotta-200/8 rotate-45"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full pt-24 md:pt-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left — Text content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-terracotta-100/60 text-terracotta-600 text-sm font-body font-medium rounded-full mb-6">
                <PawIcon size={14} />
                Accessoires personnalisés
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-hero font-heading text-charcoal text-balance"
            >
              Parce que votre{' '}
              <span className="relative inline-block">
                <span className="relative z-10">boule de poils</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-terracotta-200/40 -z-0 origin-left rounded-sm"
                />
              </span>{' '}
              mérite mieux qu'un collier sans âme.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-charcoal-light text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Colliers gravés, médailles, gamelles personnalisées — des
              accessoires avec du caractère, fabriqués pour les animaux qu'on
              aime un peu trop.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/boutique">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<PawIcon size={16} />}
                  iconPosition="right"
                >
                  Explorer la boutique
                </Button>
              </Link>
              <Link to="/a-propos">
                <Button variant="secondary" size="lg">
                  Notre histoire
                </Button>
              </Link>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {['🐕', '🐈', '🐕‍🦺', '🐩'].map((emoji, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 rounded-full bg-sand-200 flex items-center justify-center text-sm ring-2 ring-sand-100"
                  >
                    {emoji}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C4653A">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-charcoal-light mt-0.5">
                  <strong className="text-charcoal">460+</strong> animaux heureux
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-organic overflow-hidden bg-sand-200">
              {/* Placeholder visual — will be replaced with real product photography */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-sand-400 p-8">
                <PawIcon size={80} className="mb-4 opacity-30" />
                <p className="text-center text-sm font-body opacity-60">
                  Photo de votre animal<br />avec un collier Wafi
                </p>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg"
              >
                <p className="font-heading text-sm text-charcoal">Le Classique</p>
                <p className="text-xs text-charcoal-light">Collier cuir gravé</p>
                <p className="font-body font-bold text-terracotta-500 mt-1">34,90 €</p>
              </motion.div>
            </div>

            {/* Decorative dot */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sage-200/40 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-terracotta-200/30 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
