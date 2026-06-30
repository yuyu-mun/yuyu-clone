const platformNodes = [
  { key: "tiktok", label: "TikTok", icon: "https://cdn.simpleicons.org/tiktok/000000" },
  { key: "instagram", label: "Instagram", icon: "https://cdn.simpleicons.org/instagram/E4405F" },
  { key: "youtube", label: "YouTube", icon: "https://cdn.simpleicons.org/youtube/FF0000" },
  { key: "facebook", label: "Facebook", icon: "https://cdn.simpleicons.org/facebook/1877F2" },
  { key: "xiaohongshu", label: "RED", icon: "https://cdn.simpleicons.org/xiaohongshu/FF2442" },
];

// Square canvas geometry for the radial / star layout
const SIZE = 600;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R_ICON = 232; // radius of the platform ring
const CHIP = 46; // platform chip radius
const R_START = 108; // where rays / packets begin (just outside the centre reel)

const angle = (i: number) => ((-90 + i * 72) * Math.PI) / 180;
const point = (r: number, i: number): [number, number] => [
  CX + r * Math.cos(angle(i)),
  CY + r * Math.sin(angle(i)),
];

export default function DistributionEngine() {
  const nodes = platformNodes.map((p, i) => ({
    ...p,
    i,
    center: point(R_ICON, i),
    rayStart: point(R_START, i),
    rayEnd: point(R_ICON - CHIP, i),
  }));

  // star outline: connect every-other point (pentagram order)
  const starOrder = [0, 2, 4, 1, 3];
  const starPath =
    starOrder
      .map((idx, n) => `${n === 0 ? "M" : "L"} ${nodes[idx].center[0].toFixed(1)} ${nodes[idx].center[1].toFixed(1)}`)
      .join(" ") + " Z";

  return (
    <div
      className="de2-stage"
      aria-label="One master Reel distributed outward to five social platforms at once"
    >
      <svg className="de2-svg" viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden>
        <defs>
          <radialGradient id="de2-packet" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#c5ffe2" />
            <stop offset="100%" stopColor="#c5ffe2" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="de2-wire" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4781ff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#c5ffe2" stopOpacity="0.85" />
          </linearGradient>
          <filter id="de2-glow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="3.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* orbit + star outline */}
        <circle className="de2-orbit" cx={CX} cy={CY} r={R_ICON} />
        <path className="de2-star" d={starPath} />

        {/* rays from centre to each platform */}
        {nodes.map((n) => {
          const d = `M ${n.rayStart[0].toFixed(1)} ${n.rayStart[1].toFixed(1)} L ${n.center[0].toFixed(1)} ${n.center[1].toFixed(1)}`;
          return <path id={`de2-ray-${n.i}`} key={`ray-${n.key}`} className="de2-ray" d={d} />;
        })}

        {/* content packets flowing to all five platforms in sync */}
        {nodes.map((n) =>
          [0, 1, 2].map((c) => {
            const d = `M ${n.rayStart[0].toFixed(1)} ${n.rayStart[1].toFixed(1)} L ${n.rayEnd[0].toFixed(1)} ${n.rayEnd[1].toFixed(1)}`;
            const begin = `${(c * 0.8).toFixed(2)}s`; // same across every ray -> simultaneous waves
            return (
              <circle key={`pk-${n.key}-${c}`} r="5" fill="url(#de2-packet)" filter="url(#de2-glow)" opacity="0">
                <animateMotion dur="2.4s" begin={begin} repeatCount="indefinite" calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines="0.4 0 0.2 1" path={d} />
                <animate attributeName="opacity" dur="2.4s" begin={begin} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.15;0.8;1" />
              </circle>
            );
          })
        )}

        {/* platform nodes — all active together */}
        {nodes.map((n) => (
          <g key={n.key} transform={`translate(${n.center[0].toFixed(1)} ${n.center[1].toFixed(1)})`}>
            <g className="de2-node">
              <circle className="de2-ring" r={CHIP + 7} />
              <circle className="de2-chip" r={CHIP} />
              <image href={n.icon} x={-22} y={-22} width={44} height={44} />
            </g>
          </g>
        ))}
      </svg>

      {/* Centre: the one master Reel.
          To use a real reel, replace the .de2-reel-fill div with:
          <video src="/videos/master-reel.mp4" autoPlay muted loop playsInline poster="/images/reel-poster.jpg" /> */}
      <div className="de2-reel">
        <div className="de2-reel-fill" />
        <span className="de2-reel-play" aria-hidden>
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </span>
        <em className="de2-reel-tag">Master Reel</em>
      </div>
    </div>
  );
}
