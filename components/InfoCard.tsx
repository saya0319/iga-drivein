import type { Feature } from "@/data/site";

type InfoCardProps = Feature & {
  tone?: "light" | "dark";
};

export function InfoCard({ title, body, tone = "light" }: InfoCardProps) {
  return (
    <article className={`info-card info-card--${tone}`}>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}
