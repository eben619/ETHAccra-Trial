import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./slideshow.module.scss";

/* swiper core and modules */
import { type Swiper as SwiperRef } from "swiper";
import { A11y, Autoplay, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import clsx from "clsx";
import { motion } from "framer-motion";

import {
  hackathonImages,
  slideshowImages,
} from "@/components/2024/hackathon-images-and-sponsors/data/imageData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/thumbs";

const HackathonImagesSlide = () => {
  const [mainSwiper, setMainSwiper] = useState<SwiperRef | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperRef | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  // Flatten all images into a single array for the main slider
  const allImages = Object.values(slideshowImages).flat();

  const slideNext = () => {
    mainSwiper?.slideNext();
  };

  const slidePrev = () => {
    mainSwiper?.slidePrev();
  };

  useEffect(() => {
    if (allImages) {
      setTotalSlides(allImages.length);
    }
  }, [allImages]);

  return (
    <div className="px-4 md:px-0 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <div className="relative mb-4">
          {/* Main Swiper */}
          <Swiper
            modules={[Autoplay, A11y, Thumbs]}
            spaceBetween={20}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            onSwiper={setMainSwiper}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,  
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.activeIndex);
            }}
            className="rounded-md overflow-hidden"
          >
            {allImages && allImages.map((image, idx) => (
              <SwiperSlide key={`main-${idx}`} className="aspect-[16/9]">
                <div className="relative w-full h-full">
                  <Image
                    alt={`hackathon_image-${idx}`}
                    src={image.imageUrl}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 90vw"
                    priority
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left arrow - positioned within the image boundaries */}
          <div
            className={clsx(
              "absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-pink-500 md:bg-pink-500 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center shadow-lg",
              { "opacity-50": currentIndex === 0 }
            )}
            onClick={() => slidePrev()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>

          {/* Right arrow - positioned within the image boundaries */}
          <div
            className={clsx(
              "absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer bg-pink-500 md:bg-pink-500 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center shadow-lg",
              { "opacity-50": currentIndex === totalSlides - 1 }
            )}
            onClick={() => slideNext()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        {/* Thumbs Swiper */}
        <Swiper
          modules={[A11y, Thumbs]}
          spaceBetween={8}
          slidesPerView={4}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
          className="mt-2"
        >
          {allImages && allImages.slice(0, 4).map((image, idx) => (
            <SwiperSlide key={`thumb-${idx}`} className="cursor-pointer">
              <div className="relative aspect-[16/9]">
                <Image
                  alt={`thumbnail-${idx}`}
                  src={image.imageUrl}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 25vw, 20vw"
                  className={clsx(
                    "rounded-sm w-full h-full",
                    currentIndex === idx && "ring-2 ring-pink-500"
                  )}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default HackathonImagesSlide;