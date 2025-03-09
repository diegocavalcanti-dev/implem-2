import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"; // Importar o CSS do autoplay

export function MainCarousel() {
  return (
    <section className="relative m-3.5">
      <Swiper
        modules={[Autoplay]} // Registrando o módulo do Autoplay
        spaceBetween={10} // Espaçamento entre os slides
        slidesPerView={1} // Quantos slides serão exibidos de uma vez
        loop={true} // Habilita loop infinito
        grabCursor={true} // Habilita a funcionalidade de arrastar
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Configuração do autoplay
        className="rounded-xl"
      >
        <SwiperSlide>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff69e8d3ec2f1ba0c1c21b00be5430834250551"
            alt="Banner"
            className="object-cover w-full h-[200px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff69e8d3ec2f1ba0c1c21b00be5430834250551"
            alt="Banner"
            className="object-cover w-full h-[200px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff69e8d3ec2f1ba0c1c21b00be5430834250551"
            alt="Banner"
            className="object-cover w-full h-[200px]"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center mt-3">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="I324:745;324:715" layer-name="indicador carrossel" width="56" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="carousel-dots"> <rect x="0.5" y="0.568848" width="26.3967" height="4.86256" rx="2.43128" fill="#494949"></rect> <circle cx="33.8092" cy="2.9999" r="2.62197" fill="#D9D9D9"></circle> <circle cx="43.3436" cy="2.9999" r="2.62197" fill="#D9D9D9"></circle> <circle cx="52.8781" cy="2.9999" r="2.62197" fill="#D9D9D9"></circle> </svg>',
          }}
        />
      </div>
    </section>
  );
}