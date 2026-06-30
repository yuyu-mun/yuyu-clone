import Image from "next/image";
import Reveal from "@/components/Reveal";

type Member = {
  name: string;
  role: string;
  img: string;
};

export default function AboutTeamShowcase({
  members,
  label,
  compact = false,
}: {
  members: Member[];
  label: string;
  compact?: boolean;
}) {
  return (
    <div className={`about-team-roster${compact ? " compact" : ""}`} aria-label={label}>
      {members.map((member, index) => (
        <Reveal
          className="about-team-card"
          delay={((index % 3) + 1) as 1 | 2 | 3}
          key={member.name}
        >
          <div className="about-team-card-photo">
            <Image src={member.img} alt={member.name} width={640} height={760} />
          </div>
          <div className="about-team-card-caption">
            <span>{member.role}</span>
            <h3>{member.name}</h3>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
