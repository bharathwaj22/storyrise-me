// import { useState, useEffect, useRef } from "react";

// const Magnet = ({
//   children,
//   padding = 100,
//   disabled = false,
//   magnetStrength = 2,
//   activeTransition = "transform 0.3s ease-out",
//   inactiveTransition = "transform 0.5s ease-in-out",
//   wrapperClassName = "",
//   innerClassName = "",
//   ...props
// }) => {
//   const [isActive, setIsActive] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const magnetRef = useRef(null);

//   useEffect(() => {
//     if (disabled) {
//       setPosition({ x: 0, y: 0 });
//       return;
//     }

//     const handleMouseMove = (e) => {
//       if (!magnetRef.current) return;

//       const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
//       const centerX = left + width / 2;
//       const centerY = top + height / 2;

//       const distX = Math.abs(centerX - e.clientX);
//       const distY = Math.abs(centerY - e.clientY);

//       if (distX < width / 2 + padding && distY < height / 2 + padding) {
//         setIsActive(true);

//         const offsetX = (e.clientX - centerX) / magnetStrength;
//         const offsetY = (e.clientY - centerY) / magnetStrength;
//         setPosition({ x: offsetX, y: offsetY });
//       } else {
//         setIsActive(false);
//         setPosition({ x: 0, y: 0 });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [padding, disabled, magnetStrength]);

//   const transitionStyle = isActive ? activeTransition : inactiveTransition;

//   return (
//     <div
//       ref={magnetRef}
//       className={wrapperClassName}
//       style={{ position: "relative", display: "inline-block" }}
//       {...props}
//     >
//       <div
//         className={innerClassName}
//         style={{
//           transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
//           transition: transitionStyle,
//           willChange: "transform",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Magnet;


import { useState, useEffect, useRef } from "react";

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 5,
  scaleStrength = 1.1,
  rotateStrength = 10,
  friction = 0.1, // Controls smooth motion
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const magnetRef = useRef(null);
  const animationRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
      return;
    }

    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        const rotateX = ((e.clientY - centerY) / height) * rotateStrength;
        const rotateY = ((centerX - e.clientX) / width) * rotateStrength;

        targetPosition.current = { x: offsetX, y: offsetY, rotateX, rotateY };
      } else {
        targetPosition.current = { x: 0, y: 0, rotateX: 0, rotateY: 0 };
      }
    };

    const updatePosition = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.current.x - prev.x) * friction,
        y: prev.y + (targetPosition.current.y - prev.y) * friction,
        rotateX: prev.rotateX + (targetPosition.current.rotateX - prev.rotateX) * friction,
        rotateY: prev.rotateY + (targetPosition.current.rotateY - prev.rotateY) * friction,
      }));
      animationRef.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [padding, disabled, magnetStrength, rotateStrength, friction]);

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) rotateX(${position.rotateX}deg) rotateY(${position.rotateY}deg) scale(${1 + Math.abs(position.x) / 50})`,
          willChange: "transform",
          transition: "none", // Remove transition for smooth frame updates
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;

