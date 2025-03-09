interface LaunchBannerCardProps {
  image: string;
}

export function LaunchBannerCard({ image }: LaunchBannerCardProps) {
  return (
    <article className="overflow-hidden relative rounded-xl h-[107px] w-[177px]">
      <div className="flex absolute left-2.5 top-3.5 flex-col gap-1.5">
        <h3 className="text-sm font-bold leading-5 text-white">
          Lançamento de Hoje!
        </h3>
        <button className="flex justify-center items-center rounded-3xl border-white border-solid border-[0.672px] h-[41px] w-[41px]">
          <i className="ti ti-arrow-right" />
        </button>
      </div>
      <img
        src={image}
        alt="Launch product"
        className="absolute right-0 h-[83px] w-[118px]"
      />
    </article>
  );
}
