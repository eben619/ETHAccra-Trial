import React, { useState } from "react";
import Image from "next/image";
import styles from "./slideshow.module.scss";

/* swiper core and modules */
import { type Swiper as SwiperRef } from "swiper";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import clsx from "clsx";
import { motion } from "framer-motion";

import {
  hackathonImages,
  slideshowImages,
} from "@/components/2024/hackathon-images-and-sponsors/data/imageData";

// Import Swiper styles
import "swiper/css";

import { swiperBreakpoints } from "@/utils";








const HackathonImagesSlide = () => {
  const [swiper, setSwiper] = useState<SwiperRef>();
  const [trackSwipe, setTrackSwipe] = useState({
    index: 0,
    slideLength: Number.MAX_VALUE,
  });

  const slideNext = () => {
    swiper?.slideNext();
  };

  const slidePrev = () => {
    swiper?.slidePrev();
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-4 mb-3.5">
          {swiper?.slides?.length &&
            swiper?.slides?.length > 0 &&
            swiper?.slides?.map((slide, index) => {
              return (
                <div
                  onClick={() => {
                    swiper?.slideTo(index);
                  }}
                  key={index}
                  className={clsx(
                    styles.slidePagination,
                    trackSwipe?.index === index && styles.active
                  )}
                >
                  {index + 1}
                </div>
              );
            })}
        </div>

        <div className="relative">
          <div
            className={clsx(
              "absolute left-0 md:-left-[60px] top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-[#FFA500] md:bg-transparent rounded-full",
              { "opacity-50": trackSwipe.index === 0 }
            )}
            onClick={() => slidePrev()}
          >
            <Image
              alt={`caret-left`}
              src={"/assets/svgs/caret-left.svg"}
              height={50}
              width={50}
              priority
            />
          </div>
          <div
            className={clsx(
              "absolute top-1/2 right-0 md:-right-[60px] -translate-y-1/2 z-10 cursor-pointer bg-[#FFA500] md:bg-transparent rounded-full",
              { "opacity-50": trackSwipe.index === trackSwipe.slideLength - 1 }
            )}
            onClick={() => slideNext()}
          >
            <Image
              alt={`caret-right`}
              src={"/assets/svgs/caret-right.svg"}
              height={50}
              width={50}
              priority
            />
          </div>

          <div className="">
            <Swiper
              modules={[Autoplay, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              onSwiper={(swiper) => {
                setSwiper(swiper);
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,  
              }}
              onSlideChange={(swiper) => {
                let slideLength = swiper?.slides.length;
                slideLength = swiperBreakpoints(
                  swiper.currentBreakpoint,
                  slideLength
                );
                setTrackSwipe({
                  ...trackSwipe,
                  index: swiper?.activeIndex,
                  slideLength,
                });
              }}
              className=""
            >
              {slideshowImages &&
                Object.entries(slideshowImages).map(([key, value], index) => {
                  return (
                    <SwiperSlide key={key}>
                      <div className={styles.hackathonImagesRow}>
                        {value &&
                          value.map((curr, idx) => {
                            return (
                              <motion.div
                                // className="md:w-1/3 lg:w-1/4 px-7 md:p-3"
                                className="w-1/2 md:w-1/3 lg:w-1/4 p-1.5 md:p-3"
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 100 }}
                                transition={{
                                  duration: 0.1,
                                  delay: 0,
                                  ease: "easeInOut",
                                }}
                                viewport={{ once: true }}
                              >
                                <div className="relative">
                                  <Image
                                    alt={`hackathon_image-${idx}`}
                                    src={curr.imageUrl}
                                    height={240}
                                    width={768}
                                    className="w-full h-auto"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority
                                  />
                                </div>
                              </motion.div>
                            );
                          })}
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default HackathonImagesSlide;
