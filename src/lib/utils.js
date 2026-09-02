// Format price in EUR
export function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

// Generate a URL-friendly slug
export function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Clamp a number between min and max
export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

// Truncate text with ellipsis
export function truncate(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '…';
}

// Get discount percentage
export function getDiscount(originalPrice, price) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// Debounce function
export function debounce(fn, ms = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// Generate star rating array
export function getStarArray(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push('full');
    } else if (i - rating < 1 && i - rating > 0) {
      stars.push('half');
    } else {
      stars.push('empty');
    }
  }
  return stars;
}

// Classname utility (simple version of clsx)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
