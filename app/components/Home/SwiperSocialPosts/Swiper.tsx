"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../../../public/hero-img-placeholders.svg";
import img2 from "../../../../public/testLogo.jpg";
import img3 from "../../../../public/hero-img-placeholders.svg";
import Image from "next/image";

const PostShowcase = (): JSX.Element => {
  const testArr = [img1, img2, img3];
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      allowTouchMove
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      style={{
        height: "25rem",
        minHeight: "200",
        width: "50vw",
      }}
    >
      {testArr.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            src={item}
            alt="hdydj jcj"
            fill
            style={{ color: "black" }}
          ></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PostShowcase;
