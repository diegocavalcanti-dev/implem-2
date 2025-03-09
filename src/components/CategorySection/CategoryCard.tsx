interface CategoryCardProps {
  image: string;
  name: string;
}

export function CategoryCard({ image, name }: CategoryCardProps) {
  return (
    <article className="flex flex-col gap-3 items-center w-[100px]">
      <img
        src={image}
        alt={name}
        className="object-cover w-full rounded-xl h-[100px]"
      />
      <h3 className="text-xs font-semibold text-center text-zinc-900">
        {name}
      </h3>
    </article>
  );
}
