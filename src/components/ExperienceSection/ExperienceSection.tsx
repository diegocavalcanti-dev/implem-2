import { StatCard } from "./StatCard";

export function ExperienceSection() {
  return (
    <section className="px-16 py-14 text-center">
      <h2 className="mb-3.5 text-lg font-bold text-white">
        A Melhor Experiência
      </h2>
      <div className="flex gap-3.5 justify-center max-sm:flex-col max-sm:items-center">
        <StatCard number="5x" text="Campeã do Prêmio Reclame Aqui" />
        <StatCard number="4,8" text="No Google + de 15.000 Notas 5" />
      </div>
    </section>
  );
}
