// Decorative wave divider between sections. `color` = fill of the wave (the
// color of the section the wave is "pouring" into). `flip` mirrors vertically.
export default function Wave({
  color = "#ffffff",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`wave ${className}`.trim()}
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden
    >
      <path
        fill={color}
        d="M0,40 C240,110 480,0 720,40 C960,80 1200,10 1440,50 L1440,110 L0,110 Z"
      />
    </svg>
  );
}
