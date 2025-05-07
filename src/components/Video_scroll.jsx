

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Import images
// import Rotate1 from "../assets/images/rotateimg1.svg";
// import Rotate2 from "../assets/images/rotateimg2.svg";
// import Rotate3 from "../assets/images/rotateimg3.svg";
// import Rotate4 from "../assets/images/rotateimg4.svg";
// import Rotate5 from "../assets/images/rotateimg5.svg";
// import MobileFrame from "../assets/images/iphone.png"; // Fixed Mobile Frame

// const images = [Rotate1, Rotate2, Rotate3, Rotate4, Rotate5];

// const VideoScroll = () => {
//   return (
//     <div className="video-scroll-container">
      

      
//       <div className="fixed-mobile-frame">
//         <img src={MobileFrame} alt="Mobile Frame" className="mobile-frame" />
//       </div>

//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={3}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[EffectCoverflow]}
//         className="swiper-container"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <img src={image} alt={`slide_${index}`} className="slide-image" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default VideoScroll;


// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Import images and videos
// import MobileFrame from "../assets/images/iphone.png"; // Fixed Mobile Frame
// import Video1 from "../assets/images/video1.mp4";
// import Video2 from "../assets/images/video2.mp4";
// import Video3 from "../assets/images/video3.mp4";
// import Video4 from "../assets/images/video4.mp4";


// const videos = [Video1, Video2, Video3, Video4];

// const VideoScroll = () => {
//   const videoRefs = useRef([]);

//   const handleSlideChange = (swiper) => {
//     videoRefs.current.forEach((video, index) => {
//       if (index === swiper.realIndex) {
//         video.play();
//       } else {
//         video.pause();
//         video.currentTime = 0;
//       }
//     });
//   };

//   return (
//     <div className="video-scroll-container">
//       <div className="fixed-mobile-frame">
//         <img src={MobileFrame} alt="Mobile Frame" className="mobile-frame" />
//       </div>

//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={3}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[EffectCoverflow]}
//         className="swiper-container"
//         onSlideChange={handleSlideChange}
//       >
//         {videos.map((video, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <video
//               ref={(el) => (videoRefs.current[index] = el)}
//               src={video}
//               className="slide-image"
//               muted
//               loop
//               playsInline
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default VideoScroll;
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Import images and videos
// import MobileFrame from "../assets/images/iphone.png";
// import Video1 from "../assets/images/video1.mp4";
// import Video2 from "../assets/images/video2.mp4";
// import Video3 from "../assets/images/video3.mp4";
// import Video4 from "../assets/images/video4.mp4";

// const videos = [Video1, Video2, Video3, Video4, Video2];

// const VideoScroll = () => {
//   const videoRefs = useRef([]);
//   const [isMuted, setIsMuted] = useState(true);

//   const handleSlideChange = (swiper) => {
//     videoRefs.current.forEach((video, index) => {
//       if (index === swiper.realIndex) {
//         video.muted = isMuted; // Ensure mute state is synced
//         video.play();
//       } else {
//         video.pause();
//         video.currentTime = 0;
//       }
//     });
//   };

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//     videoRefs.current.forEach((video) => {
//       if (video) video.muted = !isMuted;
//     });
//   };

//   return (
//     <div className="video-scroll-container">
//       <div className="fixed-mobile-frame">
//         <img src={MobileFrame} alt="Mobile Frame" className="mobile-frame" />
//       </div>

//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={3}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[EffectCoverflow]}
//         className="swiper-container"
//         onSlideChange={handleSlideChange}
//       >
//         {videos.map((video, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <video
//               ref={(el) => (videoRefs.current[index] = el)}
//               src={video}
//               className="slide-image"
//               loop
//               playsInline
//               muted={isMuted}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

     
//       <button className="mute-button" onClick={toggleMute}>
//         {isMuted ? "🔇 Unmute" : "🔊 Mute"}
//       </button>
//     </div>
//   );
// };

// export default VideoScroll;

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Import images and videos
// import MobileFrame from "../assets/images/iphone.png";


// const videos = [
//   "https://www.instagram.com/reel/DFC1bSLPnUL/embed",
//   "https://www.instagram.com/reel/DFC1bSLPnUL/embed",
//  "https://www.instagram.com/reel/DFC1bSLPnUL/embed",
//   "https://www.instagram.com/reel/CvKTqFLvM2V/embed",
//   "https://www.instagram.com/reel/CvKTqFLvM2V/embed",
//   "https://www.instagram.com/reel/CvKTqFLvM2V/embed",
// ];

// const VideoScroll = () => {
//   const videoRefs = useRef([]);
//   const [isMuted, setIsMuted] = useState(true);

//   const handleSlideChange = (swiper) => {
//     videoRefs.current.forEach((video, index) => {
//       if (index === swiper.realIndex) {
//         video.muted = isMuted;
//         video.play();
//       } else {
//         video.pause();
//         video.currentTime = 0;
//       }
//     });
//   };

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//     videoRefs.current.forEach((video) => {
//       if (video) video.muted = !isMuted;
//     });
//   };

//   return (
//     <div className="video-scroll-container">
//       <div className="fixed-mobile-frame">
//         <img src={MobileFrame} alt="Mobile Frame" className="mobile-frame" />
//       </div>

//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={3}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[EffectCoverflow]}
//         className="swiper-container"
//         onSlideChange={handleSlideChange}
//       >
//         {videos.map((video, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//              <iframe
//                     src={video}
//                     className="slide-image"
//                     frameBorder="0"
//                     allowFullScreen
//                   ></iframe>
//           </SwiperSlide>
//         ))}
//       </Swiper>

     
//       <button className="mute-button" onClick={toggleMute}>
//         {isMuted ? "🔇 Unmute" : "🔊 Mute"}
//       </button>
//     </div>
//   );
// };

// export default VideoScroll;


// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Import images
// import MobileFrame from "../assets/images/iphone.png";

// const videos = [
//   "https://www.instagram.com/reel/DFC1bSLPnUL/embed",
//   "https://www.instagram.com/reel/CvKTqFLvM2V/embed",
//   "https://www.instagram.com/reel/DFC1bSLPnUL/embed",
//   "https://www.instagram.com/reel/CvKTqFLvM2V/embed",
// ];

// const VideoScroll = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleVideoClick = (index) => {
//     setActiveIndex(index === activeIndex ? null : index); // Toggle play state
//   };

//   return (
//     <div className="video-scroll-container">
//       <div className="fixed-mobile-frame">
//         <img src={MobileFrame} alt="Mobile Frame" className="mobile-frame" />
//       </div>

//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={3}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper-container"
//       >
//         {videos.map((video, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <div 
//               className="video-container" 
//               onClick={() => handleVideoClick(index)}
//               style={{
//                 pointerEvents: activeIndex === index ? "auto" : "none",
//                 opacity: activeIndex === index ? 1 : 0.5,
//               }}
//             >
//               <iframe
//                 src={video}
//                 className="slide-image"
//                 frameBorder="0"
//                 allowFullScreen
//                 style={{
                
//                   pointerEvents: activeIndex === index ? "auto" : "none",
//                 }}
//               ></iframe>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default VideoScroll;


// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Import images
// import MobileFrame from "../assets/images/iphone.png";

// const videos = [
//   "https://www.instagram.com/reel/DGiHTs1Rbt2/embed/",
//   "https://www.instagram.com/reel/DGaZ_aRv5ZZ/embed/",
//   "https://www.instagram.com/reel/DGK92DDs7Wb/embed/",
//   "https://www.instagram.com/reel/DGFzndRvtXf/embed/",
//   "https://www.instagram.com/reel/DFz2Bpnvghp/embed/",
//   "https://www.instagram.com/reel/DFphI2jPkn-/embed/",
//   "https://www.instagram.com/reel/DErtRG_vJ-W/embed/",
// ];

// const VideoScroll = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.realIndex); 
//   };

//   return (
//     <div className="video-scroll-container">
//       <div className="fixed-mobile-frame">
//         <img src={MobileFrame} alt="Mobile Frame" className="mobile-frame" />
//       </div>

//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={3}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         // autoplay={{
//         //   delay: 3000, // 3 seconds delay
//         //   disableOnInteraction: false, // Keep autoplay running even if user interacts
//         // }}

//         modules={[EffectCoverflow]}
//         className="swiper-container"
//         onSlideChange={handleSlideChange}
//       >
//         {videos.map((video, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <div
             
//               style={{
//                 pointerEvents: activeIndex === index ? "auto" : "none",
//                 opacity: activeIndex === index ? 1 : 0.5,

//               }}
//             >
//               <iframe
//                 src={video}
//                 className="slide-image"
//                 frameBorder="0"
//                 allowFullScreen
//                 // style={{
//                 //   width: "100%",
//                 //   height: "100%",
//                 // }}

//               ></iframe>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default VideoScroll;


// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import MobileFrame from "../assets/images/iphone.png";

// const videos = [
//   "https://www.instagram.com/reel/DGiHTs1Rbt2/embed/",
//   "https://www.instagram.com/reel/DGaZ_aRv5ZZ/embed/",
//   "https://www.instagram.com/reel/DGK92DDs7Wb/embed/",
//   "https://www.instagram.com/reel/DGFzndRvtXf/embed/",
//   "https://www.instagram.com/reel/DFz2Bpnvghp/embed/",
//   "https://www.instagram.com/reel/DFphI2jPkn-/embed/",
//   "https://www.instagram.com/reel/DErtRG_vJ-W/embed/",
// ];

// const VideoScroll = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [iframes, setIframes] = useState(videos);

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.realIndex);
    
//     // Stop all videos by resetting the iframe source
//     setIframes(videos.map((video, index) => 
//       index === swiper.realIndex ? video + "?autoplay=1" : video
//     ));
//   };

//   return (
//     <div className="video-scroll-container">
//       <div className="fixed-mobile-frame">
//         <img src={MobileFrame} alt="Mobile Frame" className="mobile-frame" />
//       </div>

//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={3}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper-container"
//         onSlideChange={handleSlideChange}
//       >
//         {iframes.map((video, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <div
//               style={{
//                 pointerEvents: activeIndex === index ? "auto" : "none",
//                 opacity: activeIndex === index ? 1 : 0.5,
//               }}
//             >
//               <iframe
//                 src={video} 
//                 className="slide-image"
//                 frameBorder="0"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default VideoScroll;

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import MobileFrame from "../assets/images/iphone.png";

// const videos = [
//   "https://www.instagram.com/reel/DGiHTs1Rbt2/embed/",
//   "https://www.instagram.com/reel/DGaZ_aRv5ZZ/embed/",
//   "https://www.instagram.com/reel/DGK92DDs7Wb/embed/",
//   "https://www.instagram.com/reel/DGFzndRvtXf/embed/",
//   "https://www.instagram.com/reel/DFz2Bpnvghp/embed/",
//   "https://www.instagram.com/reel/DFphI2jPkn-/embed/",
//   "https://www.instagram.com/reel/DErtRG_vJ-W/embed/",
// ];

// const VideoScroll = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isFullyCentered, setIsFullyCentered] = useState(false);
//   const [iframes, setIframes] = useState(videos);

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.realIndex);
//     setIsFullyCentered(false); // Prevent clicking until animation is done

//     // Update iframe sources, autoplay only the center video
//     setIframes(videos.map((video, index) => 
//       index === swiper.realIndex ? video + "?autoplay=1" : video
//     ));
//   };

//   const handleTransitionEnd = () => {
//     setIsFullyCentered(true); // Enable clicking when fully centered
//   };

//   return (
//     <div className="video-scroll-container">
//       <div className="fixed-mobile-frame">
//         <img src={MobileFrame} alt="Mobile Frame" className="mobile-frame" />
//       </div>

//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={3}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper-container"
//         onSlideChange={handleSlideChange}
//         onTransitionEnd={handleTransitionEnd} // Detect when the animation is done
//       >
//         {iframes.map((video, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <div
//               style={{
//                 pointerEvents: isFullyCentered && activeIndex === index ? "auto" : "none",
//                 opacity: activeIndex === index ? 1 : 0.5,
//                 transform: activeIndex === index ? "scale(1)" : "scale(0.9)",
//                 transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
//               }}
//             >
//               <iframe
//                 src={video} 
//                 className="slide-image"
//                 frameBorder="0"
//                 allowFullScreen
//                 style={{
//                   pointerEvents: isFullyCentered && activeIndex === index ? "auto" : "none",
//                 }}
//               ></iframe>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default VideoScroll;

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import MobileFrame from "../assets/images/iphone.png";

// const videos = [
//   "https://www.instagram.com/reel/DGiHTs1Rbt2/embed/",
//   "https://www.instagram.com/reel/DGaZ_aRv5ZZ/embed/",
//   "https://www.instagram.com/reel/DGK92DDs7Wb/embed/",
//   "https://www.instagram.com/reel/DGFzndRvtXf/embed/",
//   "https://www.instagram.com/reel/DFz2Bpnvghp/embed/",
//   "https://www.instagram.com/reel/DFphI2jPkn-/embed/",
//   "https://www.instagram.com/reel/DErtRG_vJ-W/embed/",
// ];

// const VideoScroll = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isFullyCentered, setIsFullyCentered] = useState(false);
//   const [isLoading, setIsLoading] = useState(true); // Track loading state for iframe
//   const [iframes, setIframes] = useState(videos);

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.realIndex);
//     setIsFullyCentered(false);
//     setIsLoading(true); // Show loader when changing slides

//     // Update iframe sources, autoplay only the center video
//     setIframes(videos.map((video, index) => 
//       index === swiper.realIndex ? video + "?autoplay=1" : video
//     ));
//   };

//   const handleTransitionEnd = () => {
//     setIsFullyCentered(true);
//   };

//   const handleIframeLoad = () => {
//     setIsLoading(false); // Hide loader when iframe is loaded
//   };

//   return (
//     <div className="video-scroll-container">
//       <div className="fixed-mobile-frame">
//         <img src={MobileFrame} alt="Mobile Frame" className="mobile-frame" />
//       </div>

//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={3}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper-container"
//         onSlideChange={handleSlideChange}
//         onTransitionEnd={handleTransitionEnd}
//       >
//         {iframes.map((video, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <div
//               style={{
//                 pointerEvents: isFullyCentered && activeIndex === index && !isLoading ? "auto" : "none",
//                 opacity: activeIndex === index ? 1 : 0.5,
//                 transform: activeIndex === index ? "scale(1)" : "scale(0.9)",
//                 transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
//                 position: "relative",
//               }}
//             >
//               {/* Loader */}
//               {isLoading && activeIndex === index && (
//                 <div className="loader-container">
//                   <div className="loader"></div>
//                 </div>
//               )}

//               <iframe
//                 src={video}
//                 className="slide-image"
//                 frameBorder="0"
//                 allowFullScreen
//                 onLoad={handleIframeLoad} // Hide loader when video is fully loaded
//                 style={{
//                   pointerEvents: isFullyCentered && activeIndex === index && !isLoading ? "auto" : "none",
//                   visibility: isLoading ? "hidden" : "visible",
//                 }}
//               ></iframe>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default VideoScroll;

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
        {iframes.map((video, index) => (
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
        ))}
      </Swiper>
    </div>
  );
};

export default VideoScroll;





