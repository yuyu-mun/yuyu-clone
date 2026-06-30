import Image from "next/image";

export default function Marquee({ items }: { items: { name: string; img: string }[] }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((c, i) => (
          <Image key={`${c.name}-${i}`} src={c.img} alt={c.name} width={130} height={40} />
        ))}
      </div>
    </div>
  );
}
