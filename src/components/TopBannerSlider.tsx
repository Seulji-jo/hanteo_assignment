import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function TopBannerSlider() {
  return (
    <section className="h-[240px] overflow-hidden bg-neutral-50">
      <Swiper
        className="banner h-full !py-[12px]"
        slidesPerView={'auto'}
        spaceBetween={8}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        <SwiperSlide className="!h-[200px] !w-[390px] rounded-xl bg-blue-400">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="!h-[200px] !w-[390px] rounded-xl bg-blue-400">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="!h-[200px] !w-[390px] rounded-xl bg-blue-400">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="!h-[200px] !w-[390px] rounded-xl bg-blue-400">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="!h-[200px] !w-[390px] rounded-xl bg-blue-400">
          Slide 5
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
