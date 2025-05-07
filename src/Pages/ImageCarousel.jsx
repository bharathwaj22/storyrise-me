// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   EffectCoverflow,
//   Navigation,
//   Pagination,
//   Autoplay
// } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const ImageCarousel = ({ images }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.realIndex);
//   };

//   return (
//     <div className="carousel-container-about mt-3">
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={1.2}
//         spaceBetween={20}
//         speed={800}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 1.2,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
//         className="swiper-container"
//         onSlideChange={handleSlideChange}
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <div
//               style={{
//                 pointerEvents: activeIndex === index ? "auto" : "none",
//                 opacity: activeIndex === index ? 1 : 0.5,
//                 transition: "opacity 0.4s ease-in-out",
//               }}
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt || `Slide ${index + 1}`}
//                 onClick={img.onClick}
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   maxHeight: "600px",
//                   borderRadius: "12px",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageCarousel;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Coffie_banner from "../assets/images/abouts/coffe-about.png";
import Aryu_banner from "../assets/images/abouts/aryu-about.png";

const partners = [
  {
    src: Aryu_banner,
    alt: "ARYU Academy",
    name: "Talenmagnet",
    sub: "Teach Company",
    onClick: () => console.log("ARYU Clicked")
  },
  {
    src: Coffie_banner,
    alt: "Coffee House",
    name: "CocaCola",
    sub: "Food Company",
    onClick: () => console.log("Coffee Clicked")
  },
  {
    src: Aryu_banner,
    alt: "ARYU Academy",
    name: "Talenmagnet",
    sub: "Teach Company",
    onClick: () => console.log("ARYU Clicked")
  },
  {
    src: Coffie_banner,
    alt: "Coffee House",
    name: "CocaCola",
    sub: "Food Company",
    onClick: () => console.log("Coffee Clicked")
  },
  {
    src: Aryu_banner,
    alt: "ARYU Academy",
    name: "Talenmagnet",
    sub: "Teach Company",
    onClick: () => console.log("ARYU Clicked")
  },
  {
    src: Coffie_banner,
    alt: "Coffee House",
    name: "CocaCola",
    sub: "Food Company",
    onClick: () => console.log("Coffee Clicked")
  },
  // Add more slides as needed
];

export default function PartnerSwiper() {
  return (
    <div className="partner-swiper-container mt-3">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={40}
        centeredSlides={true}
        loop={true}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="partner-swiper"
        breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
              },
            1024: {
              slidesPerView: 3,
            },
          }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="partner-card" onClick={partner.onClick}>
              <img src={partner.src} alt={partner.alt} />
              {/* <h4>{partner.name}</h4>
              <p>{partner.sub}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
