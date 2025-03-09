export function OfferBanner() {
  return (
    <section className="overflow-hidden relative mx-auto my-5 bg-amber-500 rounded-xl h-[107px] w-[368px]">
      <div className="flex absolute justify-between items-center left-[37px] top-[17px] w-[305px]">
        <h2 className="text-lg font-bold leading-6 text-white w-[153px]">
          Confira as Ofertas de Hoje!
        </h2>
        <button className="flex justify-center items-center rounded-2xl border-white border-solid border-[0.623px] h-[38px] w-[38px]">
          <i className="ti ti-arrow-right" />
        </button>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ff7a10968fe946320cbd28cc5f49c8cf25071e8"
        alt="Capa dura"
        className="absolute top-0 right-0 h-[88px] w-[132px]"
      />
    </section>
  );
}
