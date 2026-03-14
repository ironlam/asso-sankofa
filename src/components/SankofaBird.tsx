export default function SankofaBird({
  className = "",
  size = 64,
  color = "currentColor",
  animated = false,
}: {
  className?: string;
  size?: number;
  color?: string;
  animated?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? "hover:scale-110 transition-transform duration-500" : ""} ${className}`}
      aria-label="Sankofa - oiseau regardant en arrière"
    >
      {/* Body - elegant curved form */}
      <path
        d="M55 70 C55 70, 70 65, 72 50 C74 35, 65 25, 55 28 C45 31, 40 40, 42 50 C44 60, 50 68, 55 70Z"
        fill={color}
        opacity="0.9"
      />
      {/* Head turning backward */}
      <path
        d="M55 28 C55 28, 48 18, 38 16 C33 15, 28 18, 28 23 C28 28, 33 30, 38 28 C43 26, 48 22, 55 28Z"
        fill={color}
      />
      {/* Eye */}
      <circle cx="33" cy="22" r="2" fill="var(--color-cream, #FAF7F0)" />
      {/* Beak */}
      <path d="M28 20 L22 19 L28 23Z" fill={color} />
      {/* Egg on the back - the knowledge retrieved */}
      <ellipse
        cx="62"
        cy="42"
        rx="6"
        ry="8"
        fill="var(--color-gold, #D4A843)"
        opacity="0.9"
      >
        {animated && (
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="3s"
            repeatCount="indefinite"
          />
        )}
      </ellipse>
      {/* Tail feathers - flowing lines */}
      <path
        d="M55 70 C55 70, 45 80, 35 85 C30 87, 28 85, 30 82 C32 79, 42 75, 55 70Z"
        fill={color}
        opacity="0.8"
      />
      <path
        d="M55 70 C55 70, 50 82, 42 88 C37 91, 34 89, 37 86 C40 83, 48 78, 55 70Z"
        fill={color}
        opacity="0.6"
      />
      {/* Feet */}
      <path
        d="M50 70 L48 78 L45 78 M50 70 L52 78 L49 78"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
