import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import { reviews } from '../../data/mockProducts';
import { getStarArray } from '../../lib/utils';

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayedReviews = reviews.slice(0, 4);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background paw */}
      <div className="absolute top-10 right-0 text-[12rem] opacity-[0.03] pointer-events-none select-none rotate-12">
        🐾
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-px bg-terracotta-400" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-terracotta-500">
                Témoignages
              </span>
              <div className="w-8 h-px bg-terracotta-400" />
            </div>
            <h2 className="font-heading text-section text-charcoal">
              Ce que dit la meute
            </h2>
            <p className="text-charcoal-light mt-2 max-w-md mx-auto">
              De vrais avis de vrais humains (et leurs vrais animaux).
            </p>
          </div>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-12 py-6 border-y border-charcoal/10">
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl text-terracotta-500">
                460+
              </p>
              <p className="text-xs text-charcoal-light mt-1">Animaux heureux</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl text-terracotta-500">
                4.8/5
              </p>
              <p className="text-xs text-charcoal-light mt-1">Note moyenne</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl text-terracotta-500">
                98%
              </p>
              <p className="text-xs text-charcoal-light mt-1">Recommandent Wafi</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Reviews carousel - mobile */}
        <div className="md:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="bg-sand-50 rounded-2xl p-6"
              >
                <ReviewCard review={displayedReviews[activeIndex]} />
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {displayedReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-6 bg-terracotta-500'
                      : 'bg-sand-400 hover:bg-sand-500'
                  }`}
                  aria-label={`Avis ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Reviews grid - desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedReviews.map((review, i) => (
            <ScrollReveal key={review.id} delay={i * 0.1}>
              <div className="bg-sand-50 rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <ReviewCard review={review} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  const stars = getStarArray(review.rating);

  return (
    <>
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-3">
        {stars.map((star, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={star === 'full' ? '#C4653A' : 'none'}
            stroke={star === 'empty' ? '#D1C4AA' : 'none'}
            strokeWidth="1.5"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="text-sm text-charcoal leading-relaxed flex-1">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="mt-4 pt-4 border-t border-charcoal/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-terracotta-100 flex items-center justify-center font-body font-bold text-sm text-terracotta-600">
            {review.author.charAt(0)}
          </div>
          <div>
            <p className="font-body font-semibold text-sm text-charcoal">
              {review.author}
            </p>
            <p className="text-xs text-charcoal-light">
              {review.animalName} — {review.animalType}
            </p>
          </div>
          {review.verified && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#8B9E7E"
              className="ml-auto flex-shrink-0"
              title="Achat vérifié"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="#8B9E7E" strokeWidth="2" />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
