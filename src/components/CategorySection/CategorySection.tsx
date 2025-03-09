import { CategoryCard } from "./CategoryCard";

export function CategorySection() {
  const categories = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0a7c408734bb4a0de1415d80a2086bc14516563d",
      name: "Fotolivros",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3322d46c47817f4d3a4543639e179bffb2df4008",
      name: "Fotos",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb27cac4acbeb87812d9b200bd342ac57c4be58a",
      name: "Quadros",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4b354edfd0ee273ce85f5e1cff83833c604103b5",
      name: "Presentes",
    },
  ];

  return (
    <section className="flex overflow-x-auto gap-3.5 px-3.5 py-0 mt-5 max-sm:overflow-x-auto max-sm:flex-nowrap">
      {categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </section>
  );
}
