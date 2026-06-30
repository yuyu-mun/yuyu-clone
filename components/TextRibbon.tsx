export default function TextRibbon({
  items,
  variant = "accent",
  tilt = false,
}: {
  items: string[];
  variant?: "accent" | "ink";
  tilt?: boolean;
}) {
  const set = (
    <>
      {items.map((t, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 40 }}>
          {t}
          <span className="star">✦</span>
        </span>
      ))}
    </>
  );
  return (
    <div className={`ribbon ${variant === "ink" ? "ink" : ""} ${tilt ? "tilt" : ""}`.trim()}>
      <div className="ribbon-track">
        {set}
        {set}
      </div>
    </div>
  );
}
