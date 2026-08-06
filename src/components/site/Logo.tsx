import logoAsset from "@/assets/logo_sem_fundo.png";

export function Logo({ className = "" }: { className?: string }) {
  return <img src={logoAsset} alt="Nadya Tanan" className={className} />;
}

/**
 * Signature graphic — abstract echo of the logo's semicircle/petal geometry
 * used as decorative background accent throughout the site.
 */
export function SignatureMark({
  className = "",
  strokeWidth = 1,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    >
      <defs>
        <linearGradient id="sig-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d9c19a" />
          <stop offset="50%" stopColor="#c7a977" />
          <stop offset="100%" stopColor="#a88652" />
        </linearGradient>
      </defs>
      <g stroke="url(#sig-grad)">
        {/* Base semicircle */}
        <path d="M 80 240 A 120 120 0 0 1 320 240" />
        <line x1="80" y1="240" x2="320" y2="240" />
        {/* Petals */}
        <path d="M 200 240 L 130 150 A 90 90 0 0 1 200 120 Z" />
        <path d="M 200 240 L 200 100 A 90 90 0 0 1 270 150 Z" />
        <path d="M 200 240 L 270 150 A 90 90 0 0 1 290 200 L 200 240 Z" />
      </g>
    </svg>
  );
}
