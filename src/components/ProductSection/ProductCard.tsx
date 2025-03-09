interface ProductCardProps {
  image?: string;
  discount: string;
  name: string;
  originalPrice: string;
  salePrice: string;
}

export function ProductCard({
  image,
  discount,
  name,
  originalPrice,
  salePrice,
}: ProductCardProps) {
  return (
    <article className="w-[127px]">
      <div className="overflow-hidden relative rounded-xl h-[118px]">
        {image ? (
          <img src={image} alt={name} className="object-cover size-full" />
        ) : (
          <div className="object-cover size-full" />
        )}
        <div className="absolute right-0 px-2 py-1 text-xs font-semibold text-lime-800 bg-lime-300 rounded-2xl top-[9px]">
          {discount}
        </div>
      </div>
      <div className="mt-1.5">
        <h3 className="h-7 text-xs leading-3 text-zinc-900">{name}</h3>
        <div className="mt-1.5">
          <p className="text-xs line-through text-zinc-500">{originalPrice}</p>
          <p className="text-base font-semibold text-lime-600">{salePrice}</p>
        </div>
      </div>
    </article>
  );
}
