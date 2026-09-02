export default function PawIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Main pad */}
      <path d="M12 17.5c-2.5 0-4.5-1.2-5.5-3-0.6-1.1-0.2-2.5 1-3.2 0.8-0.5 1.8-0.5 2.6 0l1.9 1.2 1.9-1.2c0.8-0.5 1.8-0.5 2.6 0 1.2 0.7 1.6 2.1 1 3.2-1 1.8-3 3-5.5 3z" />
      {/* Toes */}
      <ellipse cx="7.5" cy="8" rx="2" ry="2.5" transform="rotate(-15 7.5 8)" />
      <ellipse cx="16.5" cy="8" rx="2" ry="2.5" transform="rotate(15 16.5 8)" />
      <ellipse cx="10" cy="5.5" rx="1.8" ry="2.3" transform="rotate(-5 10 5.5)" />
      <ellipse cx="14" cy="5.5" rx="1.8" ry="2.3" transform="rotate(5 14 5.5)" />
    </svg>
  );
}
