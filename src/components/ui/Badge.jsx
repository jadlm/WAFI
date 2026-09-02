import { cn } from '../../lib/utils';

const badgeVariants = {
  terracotta: 'bg-terracotta-100 text-terracotta-700',
  sage: 'bg-sage-100 text-sage-700',
  sand: 'bg-sand-300 text-charcoal',
  promo: 'bg-terracotta-500 text-white',
  new: 'bg-sage-400 text-white',
  outline: 'bg-transparent border border-charcoal/20 text-charcoal-light',
};

export default function Badge({
  children,
  variant = 'terracotta',
  size = 'sm',
  className = '',
  icon,
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-body font-semibold rounded-full',
        size === 'sm' && 'px-2.5 py-0.5 text-xs',
        size === 'md' && 'px-3 py-1 text-sm',
        badgeVariants[variant],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
