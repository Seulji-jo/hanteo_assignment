import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner from './Banner';
import bannerDatas from '../data/bannerDummyData.json';

export default function TopBannerSlider() {
  return (
    <section className="h-[240px] overflow-hidden drop-shadow-md">
      <Swiper
        className="banner h-full !py-[12px]"
        slidesPerView={'auto'}
        spaceBetween={8}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {bannerDatas.map((data, i) => (
          <SwiperSlide
            key={i}
            className="!h-[200px] !w-[390px] overflow-hidden rounded-xl bg-white"
          >
            <Banner bannerData={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
