import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import NavList from '../components/NavList';
import { FreeMode } from 'swiper/modules';
import { routeMap } from '../config/routeConfig';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

export default function Header() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const location = useLocation();
  const activeIdx = routeMap.findIndex(el => el.path === location.pathname);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    const activeSlide = swiper.slides[activeIdx];

    if (activeSlide && swiper.wrapperEl) {
      activeSlide.scrollIntoView({
        behavior: 'smooth',
        inline: 'nearest',
      });
    }
  }, [activeIdx]);

  return (
    <header className="h-[45px] bg-[#FFB1B2]">
      <nav className="h-full">
        <Swiper
          className="h-full content-center !px-[15px]"
          freeMode={true}
          modules={[FreeMode]}
          slidesPerView={'auto'}
          watchSlidesProgress
          onSwiper={swiper => (swiperRef.current = swiper)}
        >
          {routeMap.map(({ path, name }, i) => (
            <SwiperSlide
              key={`${name} ${i}`}
              className="!w-auto content-center px-[15px]"
            >
              <NavList path={path} name={name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>
    </header>
  );
}
