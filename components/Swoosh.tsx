// Concentric arc "swoosh" decoration (brand image motif) for blue sections.
export default function Swoosh() {
  return (
    <svg className="swoosh" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <g fill="none" strokeLinecap="round">
        <path d="M-220 780 A 780 780 0 0 1 780 -220" stroke="rgba(255,255,255,0.12)" strokeWidth="130" />
        <path d="M-380 920 A 1000 1000 0 0 1 940 -320" stroke="rgba(255,255,255,0.09)" strokeWidth="150" />
        <path d="M-560 1080 A 1240 1240 0 0 1 1120 -460" stroke="rgba(255,255,255,0.06)" strokeWidth="170" />
      </g>
    </svg>
  );
}
