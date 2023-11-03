"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./swiper.module.css";

import img1 from "../../../../public/heroImgO.svg";
import img2 from "../../../../public/testLogo.jpg";
import img3 from "../../../../public/heroImgO.svg";
import Image from "next/image";

const PostShowcase = (): JSX.Element => {
  const testArr = [img1, img2, img3];
  return (
    <>
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
        className={`${styles.swiper}`}
      >
        {testArr.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt="hdydj jcj"
              fill
              sizes="(max-width: 768px) 100vw"
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PostShowcase;
