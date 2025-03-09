"use client";
import { TopBanner } from "./Header/TopBanner";
import { NavBar } from "./Header/NavBar";
import { MainCarousel } from "./MainCarousel";
import { CategorySection } from "./CategorySection/CategorySection";
import { ProductSection } from "./ProductSection/ProductSection";
import { OfferBanner } from "./OfferBanner";
import { LaunchBanners } from "./LaunchBanners/LaunchBanners";
import { EditorSection } from "./EditorSection/EditorSection";
import { ExperienceSection } from "./ExperienceSection/ExperienceSection";

export function HomePage() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="mx-auto my-0 w-full bg-white max-w-[390px] max-sm:w-full">
        <header className="w-full">
          <TopBanner />
          <NavBar />
        </header>
        <MainCarousel />
        <CategorySection />
        <ProductSection title="Perfeitos para Casamento" />
        <OfferBanner />
        <ProductSection title="Inspirado nos Últimos Vistos" />
        <LaunchBanners />
        <EditorSection />
        <ExperienceSection />
      </main>
    </div>
  );
}
