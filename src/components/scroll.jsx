import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const Scroll_btn = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolled 100px down
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0, // Scroll to the top of the page
  //     behavior: "smooth", // Add smooth scrolling animation
  //   });
  // };

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0; // Fixes iOS scroll issue
    document.body.scrollTop = 0;
  };


  return (
    <>
      {showButton && (
       <div className="scroll-to-top">
       <button onClick={scrollToTop} className="scroll-btn">
       <MdKeyboardDoubleArrowUp  className='scroll-icon'/>
       </button>
     </div>
     
      )}
    </>
  );
}
export default Scroll_btn