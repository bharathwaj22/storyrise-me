import { useState, useEffect } from "react";
import CustomCursor from "../components/Custom_mouse";

import SplashCursor from "../components/splash_cursor";
// import CircularGallery from "../components/circular_iamge";
// import BounceCards from "../components/Bonce_Card";
// import Video_scroll from "./Video_scroll";
// import Marquee from "react-fast-marquee";
import ShinyText from "../components/shinky_text";
// import PixelCard from "../components/Animation_content";
// import Mobile_view from "../components/Mobile_view";
// import Cards from "../components/Cards";
// import fluidCursor from "../components/splash_cursor";
import Magnet from "../components/Magnet";
// import Carousel from '../components/carosual';
import FlyingPosters from "../components/carosual";

import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/about.css";
import "../assets/css/home.css";
import "../assets/css/carousel.css";
import Storylise_logo from "../assets/images/storylise-logo.svg";
import Aryu_logo from "../assets/images/aryutechnologies.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// icon
import { GoArrowUpRight } from "react-icons/go";
import { IoCloudDoneOutline } from "react-icons/io5";
import { GrAddCircle } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

// images

import Image1 from "../assets/images/image 1.svg";
import Image2 from "../assets/images/image 2.svg";
import Image3 from "../assets/images/image 3.svg";
import Image4 from "../assets/images/image 4.svg";
import Image5 from "../assets/images/image 5.svg";
import Image6 from "../assets/images/image 6.svg";
import Image7 from "../assets/images/image 7.svg";
import Image8 from "../assets/images/image 8.svg";
import Ogimage from "../../public/storylise-logo.png";
import Footer from "../Pages/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function About_us() {
  //start meta data
  useEffect(() => {
    // Set page title
    document.title = "Influencer Marketing Hub";
    // Function to dynamically update meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      let metaTag = document.querySelector(
        `${
          isProperty
            ? 'meta[property="' + name + '"]'
            : 'meta[name="' + name + '"]'
        }`
      );
      if (metaTag) {
        metaTag.setAttribute("content", content);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.setAttribute(isProperty ? "property" : "name", name);
        newMeta.setAttribute("content", content);
        document.head.appendChild(newMeta);
      }
    };
    // Set meta tags
    setMetaTag(
      "description",
      "StoryRise is your ultimate Influencer Marketing Hub, connecting brands with top influencers to boost engagement, trust, & sales through the power of influence"
    );
    setMetaTag(
      "keywords",
      "influencer marketing hub, influencer marketing agency, best influencer marketing agency in india,  best influencer marketing platform, influencer marketing services, influencer marketing services in india,"
    );
    // Set Open Graph meta tags

    setMetaTag("og:title", "Influencer Marketing Hub", true);
    setMetaTag(
      "og:description",
      "StoryRise is your ultimate Influencer Marketing Hub, connecting brands with top influencers to boost engagement, trust, & sales through the power of influence",
      true
    );
    setMetaTag("og:image", "../storylise-logo.png", true);
    setMetaTag("og:url", window.location.href, true);
    setMetaTag("twitter:card", "summary_large_image", true);
    setMetaTag("twitter:title", "Influencer Marketing Hub", true);
    setMetaTag(
      "twitter:description",
      "StoryRise is your ultimate Influencer Marketing Hub, connecting brands with top influencers to boost engagement, trust, & sales through the power of influence",
      true
    );
    setMetaTag("twitter:image", "../storylise-logo.png", true);
  }, []);
  //end meta data
  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale",
  ];
  const transformStyles = [
    "rotate(5deg)",
    "rotate(0deg)",
    "rotate(-5deg)",
    "rotate(5deg)",
    "rotate(-5deg)",
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // box
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  // useEffect(() => {
  //   fluidCursor();
  // }, []);
  // const items = [Rotate1, Rotate2, Rotate3, Rotate4, Rotate5, Rotate6];

  const navigate = useNavigate();

  const goTocasestudies = () => {
    navigate("/case-studies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

//   useEffect(() => {
//     // Apply animations only on larger screens
//     if (window.innerWidth >= 768) {
//       const triggers = document.querySelectorAll(".service-item");
//       triggers.forEach((trigger, index) => {
//         gsap
//           .timeline({
//             scrollTrigger: {
//               trigger: trigger,
//               start: "top top", // Trigger when the element's top hits the viewport top
//               end: "+=300", // Adjust this value to match the desired pin duration in pixels
//               scrub: 1, // Smooth scrubbing for the pin duration
//               pin: true, // Pin all elements
//             },
//           })
//           .to(trigger, {
//             opacity: 10, // Fade out the element
//             y: 100, // Move element downward
//             scale: 0.9, // Shrink the element's size while scrolling
//             duration: 1,
//           });
//       });
//       return () => {
//         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       };
//     }
//   }, []);
  
useEffect(() => {
    // Apply animations only on larger screens
    if (window.innerWidth >= 768) {
      const triggers = document.querySelectorAll(".service-item");
      triggers.forEach((trigger, index) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: trigger,
              start: "top 20%", // Trigger when the element's top hits the viewport top
              end: "+200", // Adjust this value to match the desired pin duration in pixels
              scrub: 2, // Smooth scrubbing for the pin duration
              pin: true, // Pin all elements
            },
          })
          .to(trigger, {
            opacity: 0, // Fade out the element
            y: 100, // Move element downward
            scale: 0.9, // Shrink the element's size while scrolling
            duration: 0.5,
          });
      });
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);
  

return (
    <>
      <section className="pb-1">
        {/* <SplashCursor /> */}

        <section className="header-iamge position-relative">
          {/* <canvas
            id="fluid"
            className="w-100 h-100 position-absolute top-0 start-0"
          ></canvas> */}
          {/* <CustomCursor /> */}

          {/* <SplashCursor /> */}

          <div
            className={`d-flex justify-content-center  ${
              isScrolled ? "blur-bg" : ""
            }`}
          >
            <div
              className={`story-header  d-flex justify-content-between ${
                isScrolled ? "fixed" : ""
              }`}
            >
              <div>
                <a href="/">
                  <img
                    src={Storylise_logo}
                    alt="Storylise logo"
                    className="storyrise"
                  />
                </a>
              </div>
              <div
                className="case-studies d-flex justify-content-evenly"
                onClick={goTocasestudies}
              >
                CASE STUDIES
                <GoArrowUpRight className="arrow-head-icon" />
              </div>
            </div>
          </div>
          {/* <div className="sticky-top d-md-none ">
          <div className=" story-header-mobile d-flex justify-content-between ">
              <div>
                <a href="/">
                  <img
                    src={Storylise_logo}
                    alt="Storylise logo"
                    className="storyrise-mobile-view"
                  />
                </a>
              </div>
              <div className="case-studies d-flex justify-content-evenly">
                CASE STUDIES
                <GoArrowUpRight className="arrow-head-icon" />
              </div>
            </div>
          </div> */}
          <section>
            <div className="text-center mt-5 ">
              <h1>
                <span className="influencer-color-start">The Rise</span>
                <span className="influencer-color-end"> Behind the</span>{" "}
              </h1>
              <div className="story-about">Story</div>

              <div className="head-text mt-5">
                With the rise of online threats, it's crucial to take proactive
                steps to protect your identity from{" "}
              </div>
              <div className="head-text">
                hackers, phishing scams, and unauthorized access. hackers,
                phishing scams, and unauthorized access
              </div>

              {/*  */}
            </div>
          </section>
        </section>

        <section className="text-align-top p-5">
          <section className=" service-item  about-section p-5 ">
            <div>
              <div className="about-title">ABOUT US</div>
            </div>
            <div className="about-para">
              Lorem ipsum dolor sit amet consectetur. Leo ac faucibus dignissim
              mauris in. Blandit non duis non egestas gravida mi interdum. Id
              orci ac in aliquet nam aliquet. Tortor urna aliquet et tortor
              fames viverra neque arcu. Enim faucibus pellentesque sed a enim
              mauris id aliquam lacus.
            </div>
            <div className="about-para">
              Congue justo sed nibh velit scelerisque ut. Nec duis odio amet
              purus amet faucibus. Malesuada cursus mollis mauris ac egestas
              montes tristique est. Semper mauris suspendisse risus molestie. In
              ac lacus tincidunt morbi. Curabitur pharetra erat malesuada nulla
              aliquam feugiat.
            </div>
            <div className="about-para">
              Elit tincidunt tincidunt purus auctor. Lectus parturient pulvinar
              nibh nunc sed suscipit tincidunt orci. Donec risus dignissim
              luctus quisque tempor. Eget eget eros malesuada nunc adipiscing
              semper lectus lectus gravida. In tellus pretium ut tincidunt.
              Tellus morbi pellentesque quis sed diam auctor aliquam varius
              vulputate. Pellentesque at sit.
            </div>
            <div className="about-para">
                Lorem ipsum dolor sit amet consectetur. Leo ac faucibus
                dignissim mauris in. Blandit non duis non egestas gravida mi
                interdum. Id orci ac in aliquet nam aliquet. Tortor urna aliquet
                et tortor fames viverra neque arcu. Enim faucibus pellentesque
                sed a enim mauris id aliquam lacus.
              </div>
              <div className="about-para">
                Congue justo sed nibh velit scelerisque ut. Nec duis odio amet
                purus amet faucibus. Malesuada cursus mollis mauris ac egestas
                montes tristique est. Semper mauris suspendisse risus molestie.
                In ac lacus tincidunt morbi. Curabitur pharetra erat malesuada
                nulla aliquam feugiat.
              </div>
          </section>

         
            <section className="service-item about-story p-5 ">
              <div>
                <div className="about-title">ABOUT US</div>
              </div>
              <div className="about-para">
                Lorem ipsum dolor sit amet consectetur. Leo ac faucibus
                dignissim mauris in. Blandit non duis non egestas gravida mi
                interdum. Id orci ac in aliquet nam aliquet. Tortor urna aliquet
                et tortor fames viverra neque arcu. Enim faucibus pellentesque
                sed a enim mauris id aliquam lacus.
              </div>
              <div className="about-para">
                Congue justo sed nibh velit scelerisque ut. Nec duis odio amet
                purus amet faucibus. Malesuada cursus mollis mauris ac egestas
                montes tristique est. Semper mauris suspendisse risus molestie.
                In ac lacus tincidunt morbi. Curabitur pharetra erat malesuada
                nulla aliquam feugiat.
              </div>
              <div className="about-para">
                Elit tincidunt tincidunt purus auctor. Lectus parturient
                pulvinar nibh nunc sed suscipit tincidunt orci. Donec risus
                dignissim luctus quisque tempor. Eget eget eros malesuada nunc
                adipiscing semper lectus lectus gravida. In tellus pretium ut
                tincidunt. Tellus morbi pellentesque quis sed diam auctor
                aliquam varius vulputate. Pellentesque at sit.
              </div>
              <div className="about-para">
                Lorem ipsum dolor sit amet consectetur. Leo ac faucibus
                dignissim mauris in. Blandit non duis non egestas gravida mi
                interdum. Id orci ac in aliquet nam aliquet. Tortor urna aliquet
                et tortor fames viverra neque arcu. Enim faucibus pellentesque
                sed a enim mauris id aliquam lacus.
              </div>
              <div className="about-para">
                Congue justo sed nibh velit scelerisque ut. Nec duis odio amet
                purus amet faucibus. Malesuada cursus mollis mauris ac egestas
                montes tristique est. Semper mauris suspendisse risus molestie.
                In ac lacus tincidunt morbi. Curabitur pharetra erat malesuada
                nulla aliquam feugiat.
              </div>
            </section>
        
         
            <section className=" service-item about-section p-5 ">
              <div>
                <div className="about-title">ABOUT US</div>
              </div>
              <div className="about-para">
                Lorem ipsum dolor sit amet consectetur. Leo ac faucibus
                dignissim mauris in. Blandit non duis non egestas gravida mi
                interdum. Id orci ac in aliquet nam aliquet. Tortor urna aliquet
                et tortor fames viverra neque arcu. Enim faucibus pellentesque
                sed a enim mauris id aliquam lacus.
              </div>
              <div className="about-para">
                Congue justo sed nibh velit scelerisque ut. Nec duis odio amet
                purus amet faucibus. Malesuada cursus mollis mauris ac egestas
                montes tristique est. Semper mauris suspendisse risus molestie.
                In ac lacus tincidunt morbi. Curabitur pharetra erat malesuada
                nulla aliquam feugiat.
              </div>
              <div className="about-para">
                Elit tincidunt tincidunt purus auctor. Lectus parturient
                pulvinar nibh nunc sed suscipit tincidunt orci. Donec risus
                dignissim luctus quisque tempor. Eget eget eros malesuada nunc
                adipiscing semper lectus lectus gravida. In tellus pretium ut
                tincidunt. Tellus morbi pellentesque quis sed diam auctor
                aliquam varius vulputate. Pellentesque at sit.
              </div>
            </section>
         
        </section>

        <Footer></Footer>
      </section>
    </>
  );
}

export default About_us;
