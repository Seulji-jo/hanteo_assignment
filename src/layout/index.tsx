import { Outlet, useLocation, useNavigate } from 'react-router';
import Header from './Header';
import Banner from '../components/Banner';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import { routeMap } from '../config/routeConfig';

export default function Layout() {
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
    <div className="flex h-[900px] w-[425px] flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Banner />
        <section className="flex-1 bg-neutral-200">
          <Swiper
            className="h-full"
            onSwiper={swiper => (swiperRef.current = swiper)}
            onSlideChange={swiper => setCurrSlideIdx(swiper.activeIndex)}
            initialSlide={currPathIdx}
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove
          >
            {routeMap.map(({ path }, index) => {
              return (
                <SwiperSlide key={index} className="h-full">
                  {location.pathname === path && <Outlet />}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
