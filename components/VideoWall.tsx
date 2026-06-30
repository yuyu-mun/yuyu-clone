import Image from "next/image";

type Reel = { img: string; tag?: string };

export default function VideoWall({ items, columns = 3 }: { items: Reel[]; columns?: number }) {
  // distribute round-robin into N columns
  const cols: Reel[][] = Array.from({ length: columns }, () => []);
  items.forEach((it, i) => cols[i % columns].push(it));

  return (
    <div className="vwall" aria-hidden>
      {cols.map((col, ci) => {
        const loop = [...col, ...col]; // duplicate for seamless scroll
        return (
          <div className="vcol" key={ci}>
            {loop.map((r, i) => (
              <div className="v" key={`${ci}-${i}`}>
                <Image src={r.img} alt="" width={220} height={391} />
                <div className="vp">
                  <span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#0e0e10"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </div>
                {r.tag && <div className="vtag">{r.tag}</div>}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
