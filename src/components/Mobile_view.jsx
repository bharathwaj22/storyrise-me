// import { useRef, useEffect } from 'react'
// import Rotate1 from "../assets/images/rotateimg1.svg";
// import Rotate2 from "../assets/images/rotateimg2.svg";
// import Rotate3 from "../assets/images/rotateimg3.svg";
// import Rotate4 from "../assets/images/rotateimg4.svg";
// import Rotate5 from "../assets/images/rotateimg5.svg";
// import Rotate6 from "../assets/images/rotateimg6.svg";
// import {
//   Renderer,
//   Camera,
//   Transform,
//   Plane,
//   Mesh,
//   Program,
//   Texture,
// } from 'ogl'


// function debounce(func, wait) {
//   let timeout
//   return function (...args) {
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func.apply(this, args), wait)
//   }
// }

// function lerp(p1, p2, t) {
//   return p1 + (p2 - p1) * t
// }

// function autoBind(instance) {
//   const proto = Object.getPrototypeOf(instance)
//   Object.getOwnPropertyNames(proto).forEach((key) => {
//     if (key !== 'constructor' && typeof instance[key] === 'function') {
//       instance[key] = instance[key].bind(instance)
//     }
//   })
// }

// function createTextTexture(gl, text, font = "bold 30px monospace", color = "black") {
//   const canvas = document.createElement("canvas")
//   const context = canvas.getContext("2d")
//   context.font = font
//   const metrics = context.measureText(text)
//   const textWidth = Math.ceil(metrics.width)
//   const textHeight = Math.ceil(parseInt(font, 10) * 1.2)
//   canvas.width = textWidth + 20
//   canvas.height = textHeight + 20
//   context.font = font
//   context.fillStyle = color
//   context.textBaseline = "middle"
//   context.textAlign = "center"
//   context.clearRect(0, 0, canvas.width, canvas.height)
//   context.fillText(text, canvas.width / 2, canvas.height / 2)
//   const texture = new Texture(gl, { generateMipmaps: false })
//   texture.image = canvas
//   return { texture, width: canvas.width, height: canvas.height }
// }

// class Title {
//   constructor({ gl, plane, renderer, text, textColor = "#545050", font = "30px sans-serif" }) {
//     autoBind(this)
//     this.gl = gl
//     this.plane = plane
//     this.renderer = renderer
//     // this.text = text
//     this.textColor = textColor
//     this.font = font
//     this.createMesh()
//   }
//   createMesh() {
//     const { texture, width, height } = createTextTexture(
//       this.gl,
//     //   this.text,
//       this.font,
//       this.textColor
//     )
//     const geometry = new Plane(this.gl)
//     const program = new Program(this.gl, {
//       vertex: `
//         attribute vec3 position;
//         attribute vec2 uv;
//         uniform mat4 modelViewMatrix;
//         uniform mat4 projectionMatrix;
//         varying vec2 vUv;
//         void main() {
//           vUv = uv;
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//       `,
//       fragment: `
//         precision highp float;
//         uniform sampler2D tMap;
//         varying vec2 vUv;
//         void main() {
//           vec4 color = texture2D(tMap, vUv);
//           if (color.a < 0.1) discard;
//           gl_FragColor = color;
//         }
//       `,
//       uniforms: { tMap: { value: texture } },
//       transparent: true
//     })
//     this.mesh = new Mesh(this.gl, { geometry, program })
//     const aspect = width / height
//     const textHeight = this.plane.scale.y * 0.15
//     const textWidth = textHeight * aspect
//     this.mesh.scale.set(textWidth, textHeight, 1)
//     this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.05
//     this.mesh.setParent(this.plane)
//   }
// }

// class Media {
//   constructor({
//     geometry,
//     gl,
//     image,
//     index,
//     length,
//     renderer,
//     scene,
//     screen,
//     // text,
//     viewport,
//     bend,
//     textColor,
//     borderRadius = 0.17,
//     font
//   }) {
//     this.extra = 0
//     this.geometry = geometry
//     this.gl = gl
//     this.image = image
//     this.index = index
//     this.length = length
//     this.renderer = renderer
//     this.scene = scene
//     this.screen = screen
//     // this.text = text
//     this.viewport = viewport
//     this.bend = bend
//     this.textColor = textColor
//     this.borderRadius = borderRadius
//     this.font = font
//     this.createShader()
//     this.createMesh()
//     this.createTitle()
//     this.onResize()
//   }
//   createShader() {
//     const texture = new Texture(this.gl, { generateMipmaps: false})
//     this.program = new Program(this.gl, {
//       depthTest: false,
//       depthWrite: false,
//       vertex: `
//         precision highp float;
//         attribute vec3 position;
//         attribute vec2 uv;
//         uniform mat4 modelViewMatrix;
//         uniform mat4 projectionMatrix;
//         uniform float uTime;
//         uniform float uSpeed;
//         varying vec2 vUv;
//         void main() {
//           vUv = uv;
//           vec3 p = position;
//         //   p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.0);
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
//         }
//       `,
//       fragment: `
//         precision highp float;
//         uniform vec2 uImageSizes;
//         uniform vec2 uPlaneSizes;
//         uniform sampler2D tMap;
//         uniform float uBorderRadius;
//         varying vec2 vUv;
        
//         // Rounded box SDF for UV space
//         float roundedBoxSDF(vec2 p, vec2 b, float r) {
//           vec2 d = abs(p) - b;
//           return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
//         }
        
//         void main() {
//           vec2 ratio = vec2(
//             min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
//             min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
//           );
//           vec2 uv = vec2(
//             vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
//             vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
//           );
//           vec4 color = texture2D(tMap, uv);
          
//           // Apply rounded corners (assumes vUv in [0,1])
//           float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
//           if(d > 0.0) {
//             discard;
//           }
          
//           gl_FragColor = vec4(color.rgb, 1.0);
//         }
//       `,
//       uniforms: {
//         tMap: { value: texture },
//         uPlaneSizes: { value: [0, 0] },
//         uImageSizes: { value: [0, 0] },
//         uSpeed: { value: 0 },
//         uTime: { value: 0 * Math.random() },
//         uBorderRadius: { value: this.borderRadius }
//       },
//       transparent: true
//     })
//     const img = new Image()
//     img.crossOrigin = "anonymous"
//     img.src = this.image
//     img.onload = () => {
//       texture.image = img
//       this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight]
//     }
//   }
//   createMesh() {
//     this.plane = new Mesh(this.gl, {
//       geometry: this.geometry,
//       program: this.program
//     })
//     this.plane.setParent(this.scene)
//   }
//   createTitle() {
//     this.title = new Title({
//       gl: this.gl,
//       plane: this.plane,
//       renderer: this.renderer,
//     //   text: this.text,
//       textColor: this.textColor,
//       fontFamily: this.font
//     })
//   }
//   update(scroll, direction) {
//     this.plane.position.x = this.x - scroll.current - this.extra

//     const x = this.plane.position.x
//     const H = this.viewport.width / 2

//     if (this.bend === 0) {
//       this.plane.position.y = 0
//       this.plane.rotation.z = 0
//     } else {
//       const B_abs = Math.abs(this.bend)
//       const R = (H * H + B_abs * B_abs) / (2 * B_abs)
//       const effectiveX = Math.min(Math.abs(x), H)

//       const arc = R - Math.sqrt(R * R - effectiveX * effectiveX)
//       if (this.bend > 0) {
//         this.plane.position.y = -arc
//         this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R)
//       } else {
//         this.plane.position.y = arc
//         this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R)
//       }
//     }

//     this.speed = scroll.current - scroll.last
//     this.program.uniforms.uTime.value += 0.04
//     this.program.uniforms.uSpeed.value = this.speed

//     const planeOffset = this.plane.scale.x / 2
//     const viewportOffset = this.viewport.width / 2
//     this.isBefore = this.plane.position.x + planeOffset < -viewportOffset
//     this.isAfter = this.plane.position.x - planeOffset > viewportOffset
//     if (direction === 'right' && this.isBefore) {
//       this.extra -= this.widthTotal
//       this.isBefore = this.isAfter = false
//     }
//     if (direction === 'left' && this.isAfter) {
//       this.extra += this.widthTotal
//       this.isBefore = this.isAfter = false
//     }
//   }
//   onResize({ screen, viewport } = {}) {
//     if (screen) this.screen = screen
//     if (viewport) {
//       this.viewport = viewport
//       if (this.plane.program.uniforms.uViewportSizes) {
//         this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height]
//       }
//     }
//     this.scale = this.screen.height / 1500
//     this.plane.scale.y = (this.viewport.height * (900 * this.scale)) / this.screen.height
//     this.plane.scale.x = (this.viewport.width * (500 * this.scale)) / this.screen.width
//     this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y]
//     this.padding = 4;
//     this.width = this.plane.scale.x + this.padding
//     this.widthTotal = this.width * this.length
//     this.x = this.width * this.index
//   }
// }

// class App {
//   constructor(container, { items, bend, textColor = "#ffffff", borderRadius = 0.17, font = "bold 30px DM Sans" } = {}) {
//     document.documentElement.classList.remove('no-js')
//     this.container = container
//     this.scroll = { ease: 0.05, current: 0, target: 0, last: 0 }
//     this.onCheckDebounce = debounce(this.onCheck, 200)
//     this.createRenderer()
//     this.createCamera()
//     this.createScene()
//     this.onResize()
//     this.createGeometry()
//     this.createMedias(items, bend, textColor, borderRadius, font)
//     this.update()
//     this.addEventListeners()
//   }
//   createRenderer() {
//     this.renderer = new Renderer({ alpha: true })
//     this.gl = this.renderer.gl
//     this.gl.clearColor(0, 0, 0, 0)
//     this.container.appendChild(this.gl.canvas)
//   }
//   createCamera() {
//     this.camera = new Camera(this.gl)
//     this.camera.fov = 45
//     this.camera.position.z = 20
//   }
//   createScene() {
//     this.scene = new Transform()
//   }
//   createGeometry() {
//     this.planeGeometry = new Plane(this.gl, {
//       heightSegments: 50,
//       widthSegments: 100
//     })
//   }
//   createMedias(items, bend = 10, textColor, borderRadius, font) {
  
//     const defaultItems = [
        
//         {image:Rotate1},
//         {image:Rotate2},
//         {image:Rotate3},
//         {image:Rotate4},
//         {image:Rotate5},
//         {image:Rotate6},
//       ]
//     const galleryItems = items && items.length ? items : defaultItems
//     this.mediasImages = galleryItems.concat(galleryItems)
//     this.medias = this.mediasImages.map((data, index) => {
//       return new Media({
//         geometry: this.planeGeometry,
//         gl: this.gl,
//         image: data.image,
//         index,
//         length: this.mediasImages.length,
//         renderer: this.renderer,
//         scene: this.scene,
//         screen: this.screen,
//         // text: data.text,
//         viewport: this.viewport,
//         bend,
//         textColor,
//         borderRadius,
//         font
//       })
//     })
//   }
  
//   onTouchDown(e) {
//     this.isDown = true
//     this.scroll.position = this.scroll.current
//     this.start = e.touches ? e.touches[0].clientX : e.clientX
//   }
//   onTouchMove(e) {
//     if (!this.isDown) return
//     const x = e.touches ? e.touches[0].clientX : e.clientX
//     const distance = (this.start - x) * 0.05
//     this.scroll.target = this.scroll.position + distance
//   }
//   onTouchUp() {
//     this.isDown = false
//     this.onCheck()
//   }
//   onWheel() {
//     this.scroll.target += 2
//     this.onCheckDebounce()
//   }
//   onCheck() {
//     if (!this.medias || !this.medias[0]) return
//     const width = this.medias[0].width
//     const itemIndex = Math.round(Math.abs(this.scroll.target) / width)
//     const item = width * itemIndex
//     this.scroll.target = this.scroll.target < 0 ? -item : item
//   }
//   onResize() {
//     this.screen = {
//       width: this.container.clientWidth,
//       height: this.container.clientHeight
//     }
//     this.renderer.setSize(this.screen.width, this.screen.height)
//     this.camera.perspective({
//       aspect: this.screen.width / this.screen.height
//     })
//     const fov = (this.camera.fov * Math.PI) / 180
//     const height = 2 * Math.tan(fov / 2) * this.camera.position.z
//     const width = height * this.camera.aspect
//     this.viewport = { width, height }
//     if (this.medias) {
//       this.medias.forEach((media) =>
//         media.onResize({ screen: this.screen, viewport: this.viewport })
//       )
//     }
//   }
// //   update() {
// //     this.scroll.current = lerp(
// //       this.scroll.current,
// //       this.scroll.target,
// //       this.scroll.ease
// //     )
// //     const direction = this.scroll.current > this.scroll.last ? 'right' : 'left'
// //     if (this.medias) {
// //       this.medias.forEach((media) => media.update(this.scroll, direction))
// //     }
// //     this.renderer.render({ scene: this.scene, camera: this.camera })
// //     this.scroll.last = this.scroll.current
// //     this.raf = window.requestAnimationFrame(this.update.bind(this))
// //   }

// update() {
//     this.scroll.target += 0.00; // Adjust speed as needed
//     this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    
//     const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
    
//     if (this.medias) {
//       this.medias.forEach(media => media.update(this.scroll, direction));
//     }
  
//     this.renderer.render({ scene: this.scene, camera: this.camera });
//     this.scroll.last = this.scroll.current;
//     this.raf = window.requestAnimationFrame(this.update.bind(this));
//   }
//   addEventListeners() {
//     this.boundOnResize = this.onResize.bind(this)
//     this.boundOnWheel = this.onWheel.bind(this)
//     this.boundOnTouchDown = this.onTouchDown.bind(this)
//     this.boundOnTouchMove = this.onTouchMove.bind(this)
//     this.boundOnTouchUp = this.onTouchUp.bind(this)
   

//     this.container.addEventListener('resize', this.boundOnResize)
//     // this.container.addEventListener('mousewheel', this.boundOnWheel)
//     // this.container.addEventListener('wheel', this.boundOnWheel)
//     this.container.addEventListener('mousedown', this.boundOnTouchDown)
//     this.container.addEventListener('mousemove', this.boundOnTouchMove)
//     this.container.addEventListener('mouseup', this.boundOnTouchUp)
//     this.container.addEventListener('touchstart', this.boundOnTouchDown)
//     this.container.addEventListener('touchmove', this.boundOnTouchMove)
//     this.container.addEventListener('touchend', this.boundOnTouchUp)
//     this.container.addEventListener('mouseenter', () => {
//         this.isPaused = true;
//       });
//       this.container.addEventListener('mouseleave', () => {
//         this.isPaused = false;
//       });
//   }
//   destroy() {
//     window.cancelAnimationFrame(this.raf)
//     window.removeEventListener('resize', this.boundOnResize)
//     // window.removeEventListener('mousewheel', this.boundOnWheel)
//     // window.removeEventListener('wheel', this.boundOnWheel)
//     window.removeEventListener('mousedown', this.boundOnTouchDown)
//     window.removeEventListener('mousemove', this.boundOnTouchMove)
//     window.removeEventListener('mouseup', this.boundOnTouchUp)
//     window.removeEventListener('touchstart', this.boundOnTouchDown)
//     window.removeEventListener('touchmove', this.boundOnTouchMove)
//     window.removeEventListener('touchend', this.boundOnTouchUp)
//     if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
//       this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas)
//     }
//   }
// }


// export default function Mobile_view({
//   items,
//   bend =10,
//   textColor = "#ffffff",
//   borderRadius = 0.17,
//   font = "bold 30px DM Sans"
// }) {
//   const containerRef = useRef(null)
//   useEffect(() => {
//     const app = new App(containerRef.current, { items, bend, textColor, borderRadius, font })
//     return () => {
//       app.destroy()
//     }
//   }, [items, bend, textColor, borderRadius, font])
//   return (
//     <div className='circular-gallery' ref={containerRef} />
//   )
// }




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
//       {/*  */}

//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={1}
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

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="video-scroll-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.2} // Slightly larger view for smoother feel
        spaceBetween={20} // Reduce space for a compact look
        speed={800} // Adjust transition speed for smoothness
        watchSlidesProgress={true} // Improves rendering performance
        allowTouchMove={true}
        touchEventsTarget="container"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100, // Reduce depth for a softer effect
          modifier: 1.2, // Adjust for a more natural transition
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]} // Include missing modules
        className="swiper-container"
        onSlideChange={handleSlideChange}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div
              style={{
                pointerEvents: activeIndex === index ? "auto" : "none",
                opacity: activeIndex === index ? 1 : 0.5,
                transition: "opacity 0.4s ease-in-out", // Smooth opacity transition
              }}
            >
              <iframe
                src={video}
                className="slide-image"
                frameBorder="0"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "800px", 
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


