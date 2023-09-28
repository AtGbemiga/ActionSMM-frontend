"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const PostShowcase = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      style={{
        height: "100%",
        minHeight: 300,
      }}
    >
      <SwiperSlide>
        <div style={{ width: 700, height: 200, backgroundColor: "#237845" }}>
          slide 4
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ width: 700, height: 200, backgroundColor: "#947300" }}>
          slide 5
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PostShowcase;
