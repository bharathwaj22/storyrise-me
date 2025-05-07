// import { useRef, useEffect } from "react";
// import {
//   Renderer,
//   Camera,
//   Transform,
//   Plane,
//   Program,
//   Mesh,
//   Texture,
// } from "ogl";

// const vertexShader = `
// precision highp float;

// attribute vec3 position;
// attribute vec2 uv;
// attribute vec3 normal;

// uniform mat4 modelViewMatrix;
// uniform mat4 projectionMatrix;
// uniform mat3 normalMatrix;

// uniform float uPosition;
// uniform float uTime;
// uniform float uSpeed;
// uniform vec3 distortionAxis;
// uniform vec3 rotationAxis;
// uniform float uDistortion;

// varying vec2 vUv;
// varying vec3 vNormal;

// float PI = 3.141592653589793238;
// mat4 rotationMatrix(vec3 axis, float angle) {
//     axis = normalize(axis);
//     float s = sin(angle);
//     float c = cos(angle);
//     float oc = 1.0 - c;

//     return mat4(
//       oc * axis.x * axis.x + c,         oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
//       oc * axis.x * axis.y + axis.z * s,oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
//       oc * axis.z * axis.x - axis.y * s,oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
//       0.0,                              0.0,                                0.0,                                1.0
//     );
// }

// vec3 rotate(vec3 v, vec3 axis, float angle) {
//   mat4 m = rotationMatrix(axis, angle);
//   return (m * vec4(v, 1.0)).xyz;
// }

// float qinticInOut(float t) {
//   return t < 0.5
//     ? 16.0 * pow(t, 5.0)
//     : -0.5 * abs(pow(2.0 * t - 2.0, 5.0)) + 1.0;
// }

// void main() {
//   vUv = uv;

//   float norm = 0.5;
//   vec3 newpos = position;
//   float offset = (dot(distortionAxis, position) + norm / 2.) / norm;
//   float localprogress = clamp(
//     (fract(uPosition * 5.0 * 0.01) - 0.01 * uDistortion * offset) / (1. - 0.01 * uDistortion),
//     0.,
//     2.
//   );
//   localprogress = qinticInOut(localprogress) * PI;
//   newpos = rotate(newpos, rotationAxis, localprogress);

//   gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
// }
// `;

// const fragmentShader = `
// precision highp float;

// uniform vec2 uImageSize;
// uniform vec2 uPlaneSize;
// uniform sampler2D tMap;

// varying vec2 vUv;

// void main() {
//   vec2 imageSize = uImageSize;
//   vec2 planeSize = uPlaneSize;

//   float imageAspect = imageSize.x / imageSize.y;
//   float planeAspect = planeSize.x / planeSize.y;
//   vec2 scale = vec2(1.0, 1.0);

//   if (planeAspect > imageAspect) {
//       scale.x = imageAspect / planeAspect;
//   } else {
//       scale.y = planeAspect / imageAspect;
//   }

//   vec2 uv = vUv * scale + (1.0 - scale) * 0.5;

//   gl_FragColor = texture2D(tMap, uv);
// }
// `;

// function AutoBind(self, { include, exclude } = {}) {
//   const getAllProperties = (object) => {
//     const properties = new Set();
//     do {
//       for (const key of Reflect.ownKeys(object)) {
//         properties.add([object, key]);
//       }
//     } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
//     return properties;
//   };

//   const filter = (key) => {
//     const match = (pattern) =>
//       typeof pattern === "string" ? key === pattern : pattern.test(key);

//     if (include) return include.some(match);
//     if (exclude) return !exclude.some(match);
//     return true;
//   };

//   for (const [object, key] of getAllProperties(self.constructor.prototype)) {
//     if (key === "constructor" || !filter(key)) continue;
//     const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
//     if (descriptor && typeof descriptor.value === "function") {
//       self[key] = self[key].bind(self);
//     }
//   }
//   return self;
// }

// function lerp(p1, p2, t) {
//   return p1 + (p2 - p1) * t;
// }

// function map(num, min1, max1, min2, max2, round = false) {
//   const num1 = (num - min1) / (max1 - min1);
//   const num2 = num1 * (max2 - min2) + min2;
//   return round ? Math.round(num2) : num2;
// }

// class Media {
//   constructor({
//     gl,
//     geometry,
//     scene,
//     screen,
//     viewport,
//     image,
//     length,
//     index,
//     planeWidth,
//     planeHeight,
//     distortion,
//   }) {
//     this.extra = 0;
//     this.gl = gl;
//     this.geometry = geometry;
//     this.scene = scene;
//     this.screen = screen;
//     this.viewport = viewport;
//     this.image = image;
//     this.length = length;
//     this.index = index;
//     this.planeWidth = planeWidth;
//     this.planeHeight = planeHeight;
//     this.distortion = distortion;

//     this.createShader();
//     this.createMesh();
//     this.onResize();
//   }

//   createShader() {
//     const texture = new Texture(this.gl, {
//       generateMipmaps: false,
//     });

//     this.program = new Program(this.gl, {
//       depthTest: false,
//       depthWrite: false,
//       fragment: fragmentShader,
//       vertex: vertexShader,
//       uniforms: {
//         tMap: { value: texture },
//         uPosition: { value: 0 },
//         uPlaneSize: { value: [0, 0] },
//         uImageSize: { value: [0, 0] },
//         uSpeed: { value: 0 },
//         rotationAxis: { value: [0, 1, 0] },
//         distortionAxis: { value: [1, 1, 0] },
//         uDistortion: { value: this.distortion },
//         uViewportSize: { value: [this.viewport.width, this.viewport.height] },
//         uTime: { value: 0 },
//       },
//       cullFace: false,
//     });

//     const img = new Image();
//     img.crossOrigin = "anonymous";
//     img.src = this.image;
//     img.onload = () => {
//       texture.image = img;
//       this.program.uniforms.uImageSize.value = [
//         img.naturalWidth,
//         img.naturalHeight,
//       ];
//     };
//   }

//   createMesh() {
//     this.plane = new Mesh(this.gl, {
//       geometry: this.geometry,
//       program: this.program,
//     });
//     this.plane.setParent(this.scene);
//   }

//   setScale() {
//     this.plane.scale.x =
//       (this.viewport.width * this.planeWidth) / this.screen.width;
//     this.plane.scale.y =
//       (this.viewport.height * this.planeHeight) / this.screen.height;

//     this.plane.position.x = 0;
//     this.plane.program.uniforms.uPlaneSize.value = [
//       this.plane.scale.x,
//       this.plane.scale.y,
//     ];
//   }

//   onResize({ screen, viewport } = {}) {
//     if (screen) this.screen = screen;
//     if (viewport) {
//       this.viewport = viewport;
//       this.plane.program.uniforms.uViewportSize.value = [
//         this.viewport.width,
//         this.viewport.height,
//       ];
//     }
//     this.setScale();

//     this.padding = 5;
//     this.height = this.plane.scale.y + this.padding;
//     this.heightTotal = this.height * this.length;

//     this.y = -this.heightTotal / 2 + (this.index + 0.5) * this.height;
//   }

//   update(scroll) {
//     this.plane.position.y = this.y - scroll.current - this.extra;

//     const position = map(
//       this.plane.position.y,
//       -this.viewport.height,
//       this.viewport.height,
//       5,
//       15
//     );

//     this.program.uniforms.uPosition.value = position;
//     this.program.uniforms.uTime.value += 0.04;
//     this.program.uniforms.uSpeed.value = scroll.current;

//     const planeHeight = this.plane.scale.y;
//     const viewportHeight = this.viewport.height;

//     const topEdge = this.plane.position.y + planeHeight / 2;
//     const bottomEdge = this.plane.position.y - planeHeight / 2;

//     if (topEdge < -viewportHeight / 2) {
//       this.extra -= this.heightTotal;
//     } else if (bottomEdge > viewportHeight / 2) {
//       this.extra += this.heightTotal;
//     }
//   }
// }

// class Canvas {
//   constructor({
//     container,
//     canvas,
//     items,
//     planeWidth,
//     planeHeight,
//     distortion,
//     scrollEase,
//     cameraFov,
//     cameraZ,
//   }) {
//     this.container = container;
//     this.canvas = canvas;
//     this.items = items;
//     this.planeWidth = planeWidth;
//     this.planeHeight = planeHeight;
//     this.distortion = distortion;
//     this.scroll = {
//       ease: scrollEase,
//       current: 0,
//       target: 0,
//       last: 0,
//     };
//     this.cameraFov = cameraFov;
//     this.cameraZ = cameraZ;

//     AutoBind(this);

//     this.createRenderer();
//     this.createCamera();
//     this.createScene();
//     this.onResize();

//     this.createGeometry();
//     this.createMedias();
//     this.update();
//     this.addEventListeners();
//     this.createPreloader();
//   }

//   createRenderer() {
//     this.renderer = new Renderer({
//       canvas: this.canvas,
//       alpha: true,
//       antialias: true,
//       dpr: Math.min(window.devicePixelRatio, 2),
//     });
//     this.gl = this.renderer.gl;
//   }

//   createCamera() {
//     this.camera = new Camera(this.gl);
//     this.camera.fov = this.cameraFov;
//     this.camera.position.z = this.cameraZ;
//   }

//   createScene() {
//     this.scene = new Transform();
//   }

//   createGeometry() {
//     this.planeGeometry = new Plane(this.gl, {
//       heightSegments: 1,
//       widthSegments: 100,
//     });
//   }

//   createMedias() {
//     this.medias = this.items.map((image, index) => {
//       return new Media({
//         gl: this.gl,
//         geometry: this.planeGeometry,
//         scene: this.scene,
//         screen: this.screen,
//         viewport: this.viewport,
//         image,
//         length: this.items.length,
//         index,
//         planeWidth: this.planeWidth,
//         planeHeight: this.planeHeight,
//         distortion: this.distortion,
//       });
//     });
//   }

//   createPreloader() {
//     this.loaded = 0;
//     if (!this.items.length) return;

//     this.items.forEach((src) => {
//       const image = new Image();
//       image.crossOrigin = "anonymous";
//       image.src = src;
//       image.onload = () => {
//         this.loaded += 1;
//         if (this.loaded === this.items.length) {
//           document.documentElement.classList.remove("loading");
//           document.documentElement.classList.add("loaded");
//         }
//       };
//     });
//   }

//   onResize() {
//     const rect = this.container.getBoundingClientRect();
//     this.screen = {
//       width: rect.width,
//       height: rect.height,
//     };

//     this.renderer.setSize(this.screen.width, this.screen.height);

//     this.camera.perspective({
//       aspect: this.gl.canvas.width / this.gl.canvas.height,
//     });

//     const fov = (this.camera.fov * Math.PI) / 180;
//     const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
//     const width = height * this.camera.aspect;

//     this.viewport = { height, width };

//     if (this.medias) {
//       this.medias.forEach((media) =>
//         media.onResize({ screen: this.screen, viewport: this.viewport })
//       );
//     }
//   }

//   onTouchDown(e) {
//     this.isDown = true;
//     this.scroll.position = this.scroll.current;
//     this.start = e.touches ? e.touches[0].clientY : e.clientY;
//   }

//   onTouchMove(e) {
//     if (!this.isDown) return;
//     const y = e.touches ? e.touches[0].clientY : e.clientY;
//     const distance = (this.start - y) * 0.1;
//     this.scroll.target = this.scroll.position + distance;
//   }

//   onTouchUp() {
//     this.isDown = false;
//   }

//   onWheel(e) {
//     const speed = e.deltaY;
//     this.scroll.target += speed * 0.005;
//   }

//   update() {
//     this.scroll.current = lerp(
//       this.scroll.current,
//       this.scroll.target,
//       this.scroll.ease
//     );

//     if (this.medias) {
//       this.medias.forEach((media) => media.update(this.scroll));
//     }
//     this.renderer.render({ scene: this.scene, camera: this.camera });
//     this.scroll.last = this.scroll.current;
//     requestAnimationFrame(this.update);
//   }

//   addEventListeners() {
//     window.addEventListener("resize", this.onResize);
//     window.addEventListener("wheel", this.onWheel);
//     window.addEventListener("mousewheel", this.onWheel);

//     window.addEventListener("mousedown", this.onTouchDown);
//     window.addEventListener("mousemove", this.onTouchMove);
//     window.addEventListener("mouseup", this.onTouchUp);

//     window.addEventListener("touchstart", this.onTouchDown);
//     window.addEventListener("touchmove", this.onTouchMove);
//     window.addEventListener("touchend", this.onTouchUp);
//   }

//   destroy() {
//     window.removeEventListener("resize", this.onResize);
//     window.removeEventListener("wheel", this.onWheel);
//     window.removeEventListener("mousewheel", this.onWheel);

//     window.removeEventListener("mousedown", this.onTouchDown);
//     window.removeEventListener("mousemove", this.onTouchMove);
//     window.removeEventListener("mouseup", this.onTouchUp);

//     window.removeEventListener("touchstart", this.onTouchDown);
//     window.removeEventListener("touchmove", this.onTouchMove);
//     window.removeEventListener("touchend", this.onTouchUp);
//   }
// }

// export default function FlyingPosters({
//   items = [],
//   planeWidth = 320,
//   planeHeight = 320,
//   distortion = 3,
//   scrollEase = 0.01,
//   cameraFov = 45,
//   cameraZ = 20,
//   className,
//   ...props
// }) {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const instanceRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     instanceRef.current = new Canvas({
//       container: containerRef.current,
//       canvas: canvasRef.current,
//       items,
//       planeWidth,
//       planeHeight,
//       distortion,
//       scrollEase,
//       cameraFov,
//       cameraZ,
//     });

//     return () => {
//       if (instanceRef.current) {
//         instanceRef.current.destroy();
//         instanceRef.current = null;
//       }
//     };
//   }, [items, planeWidth, planeHeight, distortion, scrollEase, cameraFov, cameraZ]);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const canvasEl = canvasRef.current;

//     const handleWheel = (e) => {
//       e.preventDefault();
//       if (instanceRef.current) {
//         instanceRef.current.onWheel(e);
//       }
//     };

//     const handleTouchMove = (e) => {
//       e.preventDefault(); // Prevents touch-based scrolling
//     };

//     canvasEl.addEventListener("wheel", handleWheel, { passive: false });
//     canvasEl.addEventListener("touchmove", handleTouchMove, { passive: false });

//     return () => {
//       canvasEl.removeEventListener("wheel", handleWheel);
//       canvasEl.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className={`posters-container ${className}`}
//       {...props}
//     >
//       <canvas
//         ref={canvasRef}
//         className="posters-canvas"
//       />
//     </div>
//   );
// }

import { useRef, useEffect } from "react";
import Rotate1 from "../assets/images/rotateimg1.svg";
import Rotate2 from "../assets/images/rotateimg2.svg";
import Rotate3 from "../assets/images/rotateimg3.svg";
import Rotate4 from "../assets/images/rotateimg4.svg";
import Rotate5 from "../assets/images/rotateimg5.svg";
import Rotate6 from "../assets/images/rotateimg6.svg";
import {
  Renderer,
  Camera,
  Transform,
  Plane,
  Mesh,
  Program,
  Texture,
} from "ogl";

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance) {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key !== "constructor" && typeof instance[key] === "function") {
      instance[key] = instance[key].bind(instance);
    }
  });
}

function createTextTexture(
  gl,
  text,
  font = "bold 30px monospace",
  color = "black"
) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const textHeight = Math.ceil(parseInt(font, 10) * 1.2);
  canvas.width = textWidth + 20;
  canvas.height = textHeight + 20;
  context.font = font;
  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
}

class Title {
  constructor({
    gl,
    plane,
    renderer,
    text,
    textColor = "#545050",
    font = "30px sans-serif",
  }) {
    autoBind(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    // this.text = text
    this.textColor = textColor;
    this.font = font;
    this.createMesh();
  }
  createMesh() {
    const { texture, width, height } = createTextTexture(
      this.gl,
      // this.text,
      this.font,
      this.textColor
    );
    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true,
    });
    this.mesh = new Mesh(this.gl, { geometry, program });
    const aspect = width / height;
    const textHeight = this.plane.scale.y * 0.15;
    const textWidth = textHeight * aspect;
    this.mesh.scale.set(textWidth, textHeight, 1);
    this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.05;
    this.mesh.setParent(this.plane);
  }
}

class Media {
  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    renderer,
    scene,
    screen,
    // text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font,
  }) {
    this.extra = 0;
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.length = length;
    this.renderer = renderer;
    this.scene = scene;
    this.screen = screen;
    // this.text = text
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }
  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: false });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          // p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        // Rounded box SDF for UV space
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          // Apply rounded corners (assumes vUv in [0,1])
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          if(d > 0.0) {
            discard;
          }
          
          gl_FragColor = vec4(color.rgb, 1.0);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uTime: { value: 0 * Math.random() },
        uBorderRadius: { value: this.borderRadius },
      },
      transparent: true,
    });
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSizes.value = [
        img.naturalWidth,
        img.naturalHeight,
      ];
    };
  }
  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });
    this.plane.setParent(this.scene);
  }
  createTitle() {
    this.title = new Title({
      gl: this.gl,
      plane: this.plane,
      renderer: this.renderer,
      // text: this.text,
      textColor: this.textColor,
      fontFamily: this.font,
    });
  }
  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.speed = scroll.current - scroll.last;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = this.speed;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
    if (direction === "right" && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === "left" && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }
  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
      if (this.plane.program.uniforms.uViewportSizes) {
        this.plane.program.uniforms.uViewportSizes.value = [
          this.viewport.width,
          this.viewport.height,
        ];
      }
    }
    this.scale = this.screen.height / 1500;
    this.plane.scale.y =
      (this.viewport.height * (900 * this.scale)) / this.screen.height;
    this.plane.scale.x =
      (this.viewport.width * (700 * this.scale)) / this.screen.width;
    this.plane.program.uniforms.uPlaneSizes.value = [
      this.plane.scale.x,
      this.plane.scale.y,
    ];
    this.padding = 2;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

class App {
  constructor(
    container,
    {
      items,
      bend,
      textColor = "#ffffff",
      borderRadius = 0,
      font = "bold 30px DM Sans",
    } = {}
  ) {
    document.documentElement.classList.remove("no-js");
    this.container = container;
    this.scroll = { ease: 0.05, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck, 200);
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.update();
    this.addEventListeners();
  }
  createRenderer() {
    this.renderer = new Renderer({ alpha: true });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }
  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }
  createScene() {
    this.scene = new Transform();
  }
  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 50,
      widthSegments: 100,
    });
  }
  createMedias(items, bend = 1, textColor, borderRadius, font) {
    const defaultItems = [
      { image: Rotate1 },
      { image: Rotate2 },
      { image: Rotate3 },
      { image: Rotate4 },
      { image: Rotate5 },
      { image: Rotate6 },
    ];
    const galleryItems = items && items.length ? items : defaultItems;
    this.mediasImages = galleryItems.concat(galleryItems);
    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        // text: data.text,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font,
      });
    });
  }
  onTouchDown(e) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientX : e.clientX;
  }
  onTouchMove(e) {
    if (!this.isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * 0.05;
    this.scroll.target = this.scroll.position + distance;
  }
  onTouchUp() {
    this.isDown = false;
    this.onCheck();
  }
  onWheel() {
    this.scroll.target += 2;
    this.onCheckDebounce();
  }
  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }
  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height,
    });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    if (this.medias) {
      this.medias.forEach((media) =>
        media.onResize({ screen: this.screen, viewport: this.viewport })
      );
    }
  }
  // update() {
  //   this.scroll.current = lerp(
  //     this.scroll.current,
  //     this.scroll.target,
  //     this.scroll.ease
  //   )
  //   const direction = this.scroll.current > this.scroll.last ? 'right' : 'left'
  //   if (this.medias) {
  //     this.medias.forEach((media) => media.update(this.scroll, direction))
  //   }
  //   this.renderer.render({ scene: this.scene, camera: this.camera })
  //   this.scroll.last = this.scroll.current
  //   this.raf = window.requestAnimationFrame(this.update.bind(this))
  // // }
  // addEventListeners() {
  //   this.boundOnResize = this.onResize.bind(this)
  //   this.boundOnWheel = this.onWheel.bind(this)
  //   this.boundOnTouchDown = this.onTouchDown.bind(this)
  //   this.boundOnTouchMove = this.onTouchMove.bind(this)
  //   this.boundOnTouchUp = this.onTouchUp.bind(this)
  //   window.addEventListener('resize', this.boundOnResize)
  //   window.addEventListener('mousewheel', this.boundOnWheel)
  //   window.addEventListener('wheel', this.boundOnWheel)
  //   window.addEventListener('mousedown', this.boundOnTouchDown)
  //   window.addEventListener('mousemove', this.boundOnTouchMove)
  //   window.addEventListener('mouseup', this.boundOnTouchUp)
  //   window.addEventListener('touchstart', this.boundOnTouchDown)
  //   window.addEventListener('touchmove', this.boundOnTouchMove)
  //   window.addEventListener('touchend', this.boundOnTouchUp)
  // }
  // destroy() {
  //   window.cancelAnimationFrame(this.raf)
  //   window.removeEventListener('resize', this.boundOnResize)
  //   window.removeEventListener('mousewheel', this.boundOnWheel)
  //   window.removeEventListener('wheel', this.boundOnWheel)
  //   window.removeEventListener('mousedown', this.boundOnTouchDown)
  //   window.removeEventListener('mousemove', this.boundOnTouchMove)
  //   window.removeEventListener('mouseup', this.boundOnTouchUp)
  //   window.removeEventListener('touchstart', this.boundOnTouchDown)
  //   window.removeEventListener('touchmove', this.boundOnTouchMove)
  //   window.removeEventListener('touchend', this.boundOnTouchUp)
  //   if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
  //     this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas)
  //   }
  // }
  update() {
    // this.scroll.target += 0.03; // Adjust speed as needed
    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease
    );

    const direction = this.scroll.current > this.scroll.last ? "right" : "left";

    if (this.medias) {
      this.medias.forEach((media) => media.update(this.scroll, direction));
    }

    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }
  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);

    this.container.addEventListener("resize", this.boundOnResize);
    // this.container.addEventListener('mousewheel', this.boundOnWheel)
    // this.container.addEventListener('wheel', this.boundOnWheel)
    this.container.addEventListener("mousedown", this.boundOnTouchDown);
    this.container.addEventListener("mousemove", this.boundOnTouchMove);
    this.container.addEventListener("mouseup", this.boundOnTouchUp);
    this.container.addEventListener("touchstart", this.boundOnTouchDown);
    this.container.addEventListener("touchmove", this.boundOnTouchMove);
    this.container.addEventListener("touchend", this.boundOnTouchUp);
    this.container.addEventListener("mouseenter", () => {
      this.isPaused = true;
    });
    this.container.addEventListener("mouseleave", () => {
      this.isPaused = false;
    });
  }
  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener("resize", this.boundOnResize);
    // window.removeEventListener('mousewheel', this.boundOnWheel)
    // window.removeEventListener('wheel', this.boundOnWheel)
    window.removeEventListener("mousedown", this.boundOnTouchDown);
    window.removeEventListener("mousemove", this.boundOnTouchMove);
    window.removeEventListener("mouseup", this.boundOnTouchUp);
    window.removeEventListener("touchstart", this.boundOnTouchDown);
    window.removeEventListener("touchmove", this.boundOnTouchMove);
    window.removeEventListener("touchend", this.boundOnTouchUp);
    if (
      this.renderer &&
      this.renderer.gl &&
      this.renderer.gl.canvas.parentNode
    ) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
    }
  }
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = "#ffffff",
  borderRadius = 0.05,
  font = "bold 30px DM Sans",
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    const app = new App(containerRef.current, {
      items,
      bend,
      textColor,
      borderRadius,
      font,
    });
    return () => {
      app.destroy();
    };
  }, [items, bend, textColor, borderRadius, font]);
  return <div className="circular-gallery" ref={containerRef} />;
}
