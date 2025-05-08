

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MobileFrame from "../assets/images/iphone.png";

const videos = [
  "https://www.instagram.com/reel/DGiHTs1Rbt2/embed/",
  "https://www.instagram.com/reel/DFC1bSLPnUL/embed/",
  "https://www.instagram.com/reel/DGK92DDs7Wb/embed/",
  "https://www.instagram.com/reel/DGp6PVfPxP5/embed",
  "https://www.instagram.com/reel/DFz2Bpnvghp/embed/",
  "https://www.instagram.com/reel/DGnOLZAonrY/embed",
  "https://www.instagram.com/reel/DErtRG_vJ-W/embed/",
  "https://www.instagram.com/reel/DEUluqJv1lK/embed/",
];

const VideoScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullyCentered, setIsFullyCentered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframes, setIframes] = useState(videos);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsFullyCentered(false);
    setIsLoading(true);

    // Update iframe sources, autoplay only the center video
    setIframes(videos.map((video, index) => 
      index === swiper.realIndex ? video + "?autoplay=0" : video
    ));
  };

  const handleTransitionEnd = () => {
    setIsFullyCentered(true);
  };

  // const handleIframeLoad = () => {
  //   setIsLoading(false); // Hide loader when video is fully loaded
  // };
  const handleIframeLoad = () => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 1500); 
  };

  return (
    <div className="video-scroll-container">
      {/* Fixed Mobile Frame with Loader */}
      <div className="fixed-mobile-frame">
        <img src={MobileFrame} alt="Mobile Frame" className="mobile-frame" />

        {/* Loader Inside the Mobile Frame */}
        {isLoading && (
          <div className="mobile-frame-loader">
            <div className="loader"></div>
          </div>
        )}
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
        onSlideChange={handleSlideChange}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* {iframes.map((video, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div
               style={{
                pointerEvents: (activeIndex === index && isFullyCentered && !isLoading) || index === 0 ? "auto" : "none",
                opacity: activeIndex === index ? 1 : 0.5,
                transform: activeIndex === index ? "scale(1)" : "scale(0.9)",
                transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
              }}
            >
              <iframe
                src={video}
                className="slide-image"
                frameBorder="0"
                allowFullScreen
                onLoad={handleIframeLoad}
                // style={{
                //   pointerEvents: isFullyCentered && activeIndex === index && !isLoading ? "auto" : "none",
                //   visibility: isLoading ? "hidden" : "visible",
                // }}
              ></iframe>
            </div>
          </SwiperSlide>
        ))} */}

{iframes.map((video, index) => (
  <SwiperSlide key={index} className="swiper-slide">
    <div
      style={{
        pointerEvents: (activeIndex === index && isFullyCentered && !isLoading) || index === 0 ? "auto" : "none",
        opacity: activeIndex === index ? 1 : 0.5,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <iframe
        src={video}
        className="slide-image"
        frameBorder="0"
        allowFullScreen
        onLoad={handleIframeLoad}
        style={{
          visibility: isLoading && activeIndex === index ? "hidden" : "visible", // Only hide the iframe while loading
        }}
      ></iframe>
    </div>
  </SwiperSlide>
))}

      </Swiper>
    </div>
  );
};

export default VideoScroll;





