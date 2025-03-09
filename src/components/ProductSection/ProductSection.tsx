import { ProductCard } from "./ProductCard";

interface ProductSectionProps {
  title: string;
}

export function ProductSection({ title }: ProductSectionProps) {
  const products = [
    {
      image: title.includes("Casamento")
        ? "https://cdn.builder.io/api/v1/image/assets/TEMP/6e3525fe20f32d056fdbc2284604411ef3b5423b"
        : undefined,
      discount: "XX%Off",
      name: "Nome do Produto",
      originalPrice: "R$ XX,XX",
      salePrice: "R$ 19,90",
    },
    {
      image: title.includes("Casamento")
        ? "https://cdn.builder.io/api/v1/image/assets/TEMP/45d3ef759a87511f0bb386ef6c8256e4fe628593"
        : undefined,
      discount: "XX%Off",
      name: "Nome do Produto",
      originalPrice: "R$ XX,XX",
      salePrice: "R$ 19,90",
    },
    {
      image: title.includes("Casamento")
        ? "https://cdn.builder.io/api/v1/image/assets/TEMP/d45d37ed71bc1724be1a315a6804d8bcbfb4a8d6"
        : undefined,
      discount: "XX%Off",
      name: "Nome do Produto",
      originalPrice: "R$ XX,XX",
      salePrice: "R$ 19,90",
    },
  ];

  return (
    <section className="px-3.5 py-0 mt-10">
      <h2 className="mb-5 text-lg font-semibold text-center">{title}</h2>
      <div className="flex overflow-x-auto gap-3 max-sm:overflow-x-auto max-sm:flex-nowrap">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}
