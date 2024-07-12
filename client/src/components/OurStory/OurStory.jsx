import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function OurStory() {
  return (
    <>
      <div className="container-section-ourstory w-full h-[80dvh]">
        <div className="container-slider-ourstory h-full w-full p-20">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-full w-full rounded-[3rem] custom-swiper">
            <SwiperSlide className="bg-secondary rounded-[3rem] swiper-button-prev swiper-button-white">Slide 1</SwiperSlide>
            <SwiperSlide className="bg-secondary rounded-[3rem]">Slide 2</SwiperSlide>
            <SwiperSlide className="bg-secondary rounded-[3rem]">Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default OurStory;
