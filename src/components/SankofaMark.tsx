export default function SankofaMark({
  size = 32,
  color = "#1B1464",
  egg = "#E0A831",
  eye,
  className = "",
}: {
  size?: number;
  color?: string;
  egg?: string;
  /** Couleur du fond. A omettre en dessous de 32px : l'oeil devient illisible. */
  eye?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Sankofa"
    >
      <g transform="translate(-2 -1.2)">
        <path
          d="M27.4 73.2 A 30 30 0 1 0 52 26 A 13 13 0 0 1 39.4 16.4"
          stroke={color}
          strokeWidth="13"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M36.7 11.6 L26 24 L42.1 21.2 Z" fill={color} />
        {eye ? <circle cx="41.5" cy="15.2" r="2.3" fill={eye} /> : null}
        <circle cx="47" cy="51" r="8.5" fill={egg} />
      </g>
    </svg>
  );
}
