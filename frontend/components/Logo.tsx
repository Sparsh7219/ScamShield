import Link from "next/link";

/**
 * Guard icon from 05-guard-icon.svg
 */
export function LogoMark({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ss-guard-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="1" stopColor="#2F6BFF" />
        </linearGradient>
      </defs>
      <g id="icon">
        <path
          d="M100 22L164 46V100C164 134 136 156 100 176C64 156 36 134 36 100V46Z"
          fill="none"
          stroke="#2F6BFF"
          strokeWidth="15"
          strokeLinejoin="round"
        />
        <path
          d="M76 70H124A12 12 0 0 1 136 82V104A12 12 0 0 1 124 116H98L82 130V116H76A12 12 0 0 1 64 104V82A12 12 0 0 1 76 70Z"
          fill="#22D3EE"
        />
        <circle cx="130" cy="76" r="9" fill="#34D399" stroke="#0B1226" strokeWidth="4" />
        <path d="M6 12L40 22L20 44Z" fill="#FF5A5F" />
      </g>
    </svg>
  );
}

/**
 * Full lockup from 05-guard-lockup.svg
 */
export function LogoLockup({
  height = 36,
  className = "",
  withBackground = false,
}: {
  height?: number;
  className?: string;
  withBackground?: boolean;
}) {
  const width = Math.round(height * (840 / 200));
  return (
    <svg
      viewBox="0 0 840 200"
      width={width}
      height={height}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ss-lockup-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="1" stopColor="#2F6BFF" />
        </linearGradient>
      </defs>
      {withBackground && (
        <rect id="background" width="840" height="200" rx="20" fill="#0B1226" />
      )}
      <g id="icon">
        <path
          d="M100 22L164 46V100C164 134 136 156 100 176C64 156 36 134 36 100V46Z"
          fill="none"
          stroke="#2F6BFF"
          strokeWidth="15"
          strokeLinejoin="round"
        />
        <path
          d="M76 70H124A12 12 0 0 1 136 82V104A12 12 0 0 1 124 116H98L82 130V116H76A12 12 0 0 1 64 104V82A12 12 0 0 1 76 70Z"
          fill="#22D3EE"
        />
        <circle cx="130" cy="76" r="9" fill="#34D399" stroke="#0B1226" strokeWidth="4" />
        <path d="M6 12L40 22L20 44Z" fill="#FF5A5F" />
      </g>
      <text
        id="wordmark"
        x="222"
        y="134"
        fontFamily="Outfit, sans-serif"
        fontWeight="700"
        fontSize="108"
        letterSpacing="-3"
        fill="currentColor"
      >
        Scam<tspan fill="#22D3EE">Shield</tspan>
      </text>
    </svg>
  );
}

export default function Logo({
  href = "/",
  size = 36,
  variant = "inline",
  className = "",
}: {
  href?: string;
  size?: number;
  variant?: "inline" | "lockup";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 font-bold tracking-tight transition-opacity hover:opacity-90 ${className}`}
      aria-label="ScamShield home"
    >
      {variant === "lockup" ? (
        <LogoLockup height={size} className="text-fg" />
      ) : (
        <>
          <LogoMark size={size} className="transition-transform duration-200 group-hover:scale-105" />
          <span className="text-xl font-bold tracking-tight text-fg">
            Scam<span className="text-[#22D3EE]">Shield</span>
          </span>
        </>
      )}
    </Link>
  );
}
