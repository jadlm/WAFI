import { cn } from '../../lib/utils';

const variants = {
  primary:
    'bg-terracotta-500 text-white hover:bg-terracotta-600 hover:shadow-lg hover:shadow-terracotta-500/20 hover:-translate-y-0.5 active:translate-y-0 focus:ring-terracotta-400',
  secondary:
    'bg-transparent text-charcoal border-2 border-charcoal/20 hover:border-terracotta-500 hover:text-terracotta-600 hover:-translate-y-0.5 active:translate-y-0 focus:ring-terracotta-400',
  ghost:
    'bg-transparent text-charcoal-light hover:text-terracotta-500 hover:bg-sand-200/50 focus:ring-terracotta-300',
  sage:
    'bg-sage-400 text-white hover:bg-sage-500 hover:shadow-lg hover:shadow-sage-400/20 hover:-translate-y-0.5 active:translate-y-0 focus:ring-sage-400',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-7 py-3.5',
  lg: 'px-9 py-4 text-lg',
};

const radiusMap = {
  organic: 'rounded-organic',
  'organic-alt': 'rounded-organic-alt',
  full: 'rounded-full',
  md: 'rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  radius = 'organic',
  className = '',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  as: Component = 'button',
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-body font-semibold',
    'transition-all duration-300 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sand-100',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
    variants[variant],
    sizes[size],
    radiusMap[radius],
    className
  );

  return (
    <Component className={classes} disabled={disabled || loading} {...props}>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </Component>
  );
}
