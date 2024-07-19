import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./OurStoryStyle.css";
import { imageFaceOurStory } from "../../assets";
import styles from "../../style";

function OurStory() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="container-section-ourstory w-full h-[90dvh]">
        <div className={`container-slider-ourstory ${styles.containerStyle}`}>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper size-full rounded-[3rem] custom-swiper"
          >
            <SwiperSlide>
              <h2 className={`title-card-sections ${styles.heading2Card}`}>
                Our Story
              </h2>
              <div className="container-content-our-story bg-secondary rounded-[3rem] flex w-full h-[100%] px-10 my-0 items-center">
                <div className="container-image-face-story w-1/2">
                  <img
                    src={imageFaceOurStory}
                    className="relative bottom-[-3rem]"
                    alt="face story"
                  />
                </div>

                <div className="container-content-text w-1/2 overflow-visible">
                  <p className="text-justify font-Leiko font-light mb-5 mt-[-6rem] leading-loose text-sm">
                    {expanded
                      ? "Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!"
                      : "Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers..."}
                  </p>
                  <p
                    className="font-Leiko underline text-right cursor-pointer"
                    onClick={handleToggle}
                  >
                    {expanded ? "Less" : "More"}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h2 className={`title-card-sections ${styles.heading2Card}`}>
                Our Story
              </h2>
              <div className="container-content-our-story bg-secondary rounded-[3rem] flex w-full h-[100%] px-10 my-0 items-center">
                <div className="container-image-face-story w-1/2">
                  <img
                    src={imageFaceOurStory}
                    className="relative bottom-[-3rem]"
                    alt="face story"
                  />
                </div>

                <div className="container-content-text w-1/2 overflow-visible">
                  <p className="text-justify font-Leiko font-light mb-5 mt-[-6rem] leading-loose text-sm">
                    {expanded
                      ? "Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!"
                      : "Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers..."}
                  </p>
                  <p
                    className="font-Leiko underline text-right cursor-pointer"
                    onClick={handleToggle}
                  >
                    {expanded ? "Less" : "More"}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h2 className={`title-card-sections ${styles.heading2Card}`}>
                Our Story
              </h2>
              <div className="container-content-our-story bg-secondary rounded-[3rem] flex w-full h-[100%] px-10 my-0 items-center">
                <div className="container-image-face-story w-1/2">
                  <img
                    src={imageFaceOurStory}
                    className="relative bottom-[-3rem]"
                    alt="face story"
                  />
                </div>

                <div className="container-content-text w-1/2 overflow-visible">
                  <p className="text-justify font-Leiko font-light mb-5 mt-[-6rem] leading-loose text-sm">
                    {expanded
                      ? "Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!"
                      : "Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers..."}
                  </p>
                  <p
                    className="font-Leiko underline text-right cursor-pointer"
                    onClick={handleToggle}
                  >
                    {expanded ? "Less" : "More"}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default OurStory;
