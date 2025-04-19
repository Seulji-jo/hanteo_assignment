import { Outlet, useLocation, useNavigate } from 'react-router';
import Header from './Header';
import Banner from '../components/Banner';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

const routeMap = [
  '/chart',
  '/whook',
  '/events',
  '/news',
  '/store',
  '/charging',
];

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = routeMap.indexOf(location.pathname);

  const changePath = (swiper: SwiperClass) => {
    const nextPath = routeMap[swiper.activeIndex];
    if (nextPath) navigate(nextPath);
  };

  return (
    <div className="flex h-[900px] w-[425px] flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Banner />
        <section className="flex-1 bg-neutral-200">
          <Swiper
            className="h-full"
            onSlideChange={changePath}
            initialSlide={currentIndex}
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove
          >
            {routeMap.map((path, index) => {
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
