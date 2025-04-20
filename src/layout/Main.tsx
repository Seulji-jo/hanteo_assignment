import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import TopBannerSlider from '../components/TopBannerSlider';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { routeMap } from '../config/routeConfig';

export default function Main() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currPathIdx = routeMap.findIndex(el => el.path === location.pathname);
  const [currSlideIdx, setCurrSlideIdx] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== currPathIdx)
      swiperRef.current.slideTo(currPathIdx);
  }, [currPathIdx]);

  useEffect(() => {
    const nextPath = routeMap[currSlideIdx];
    if (nextPath) navigate(nextPath.path);
  }, [currSlideIdx]);

  return (
    <main className="flex-1 overflow-auto">
      <TopBannerSlider />
      <section className="bg-neutral-200 pb-[40px]">
        <Swiper
          className="h-full"
          onSwiper={swiper => (swiperRef.current = swiper)}
          onSlideChange={swiper => setCurrSlideIdx(swiper.activeIndex)}
          initialSlide={currPathIdx}
          slidesPerView={1}
          allowTouchMove
        >
          {routeMap.map(({ path }, i) => {
            return (
              <SwiperSlide key={`${path}${i}`} className="h-full">
                <Outlet />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
}
