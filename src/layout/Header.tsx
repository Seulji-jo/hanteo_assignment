import { Swiper, SwiperSlide } from 'swiper/react';
import NavList from '../components/NavList';
import { FreeMode } from 'swiper/modules';
import { routeMap } from '../config/routeConfig';

export default function Header() {
  return (
    <header className="h-[45px] bg-[#FFB1B2]">
      <nav className="h-full">
        <Swiper
          className="h-full content-center !px-[15px]"
          freeMode={true}
          modules={[FreeMode]}
          slidesPerView={'auto'}
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
