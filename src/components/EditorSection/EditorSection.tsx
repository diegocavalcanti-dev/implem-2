import { FeatureCard } from "./FeatureCard";
import { PreviewCard } from "./PreviewCard";

export function EditorSection() {
  return (
    <section className="px-0 py-14 bg-neutral-100">
      <h2 className="mb-5 text-lg font-semibold text-center">
        O Melhor Editor, Rápido e Fácil!
      </h2>
      <div className="flex gap-2.5 justify-center mb-5 max-sm:flex-col max-sm:items-center">
        <FeatureCard
          icon="photo"
          title="Temas e Layouts Incríveis"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <FeatureCard
          icon="brain"
          title="Inteligência Artificial"
          description="Que faz o livro para você."
        />
      </div>
      <div className="flex gap-5 justify-center">
        <PreviewCard
          icon="qrcode"
          title="Suba Suas Fotos pelo QR Code"
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/8bcd8f10f834f9e955c92dc7dbcb86fb7f877bcd"
        />
        <PreviewCard
          icon="device-desktop"
          title="Por onde Preferir!"
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/df893c045fe170a59dd0a281b08c74de76090b3a"
        />
      </div>
    </section>
  );
}
