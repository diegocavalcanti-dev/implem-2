interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="px-5 py-2 bg-white rounded-xl w-[184px]">
      <i className={`ti ti-${icon}`} />
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xs text-zinc-900">{description}</p>
    </article>
  );
}
