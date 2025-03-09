interface PreviewCardProps {
  icon: string;
  title: string;
  image: string;
}

export function PreviewCard({ icon, title, image }: PreviewCardProps) {
  return (
    <article className="relative p-4 bg-white rounded-xl w-[175px]">
      <i className={`ti ti-${icon}`} />
      <h3 className="ml-2.5 text-sm font-semibold">{title}</h3>
      <img src={image} alt={title} className="mt-5 w-full" />
    </article>
  );
}
