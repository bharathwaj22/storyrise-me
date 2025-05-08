import { useState, useEffect, useRef } from "react";
import Hyperspeed from "../components/Hyperspeed";
import { motion } from "framer-motion";

import "../assets/css/herocase.css";

// import AOS from "aos";
// import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

// images
import Aryu_logo from "../assets/images/aryutechnologies.svg";

import Coffeowner from "../assets/images/coffee.jpg";
import Coffee_main_logo from "../assets/images/coffe-main-logo.svg";

import Storylise_logo from "../assets/images/storylise-logo.svg";
import Insta_aryu_rate from "../assets/images/insta-aryu-rate.svg";
import CountUp from "react-countup";

// social
import Face_aryu_rate from "../assets/images/soicalimages/face-aryu-rate.svg";

import Face_aryu_rate1 from "../assets/images/soicalimages/face-aryu-rate1.svg";
import Face_aryu_rate2 from "../assets/images/soicalimages/face-aryu-rate2.svg";

import Youtube_aryu_rate from "../assets/images/soicalimages/youtube-aryu-rate.svg";
import Youtube_aryu_rate1 from "../assets/images/soicalimages/youtube-aryu-rate1.svg";
import Youtube_aryu_rate2 from "../assets/images/soicalimages/youtube-aryu-rate2.svg";
import Hoodie_banner from "../assets/images/hoodie-banner.svg";
import Coffie_banner from "../assets/images/coffe-banner.svg";
import Aryu_banner from "../assets/images/aryu-banner.svg";
import Ztrategize_banner from "../assets/images/ztrategize-banner.svg";


// videos'

import Video1 from "../assets/images/videos/covideo1.mp4";
import Video2 from "../assets/images/videos/covideo2.mp4";
import Video3 from "../assets/images/videos/covideo3.mp4";


// icon
import { GoArrowUpRight } from "react-icons/go";
import { rotate } from "three/tsl";
import { BiSolidVolumeMute } from "react-icons/bi";
import { IoVolumeHighSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import Footer from "../Pages/Footer";


function Coffee_case() {
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
  // useEffect(() => {
  //   AOS.init({ duration: 1000, easing: "ease-in-out" });
  // }, []);

  const navigate = useNavigate();

  const goTocasestudies = () => {
    navigate("/case-studies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: -0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const viewmorecase = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 100,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  // insta rate

  // const instarate = {
  //   hidden: { opacity: 0, x: -300 },
  //   visible: {
  //     opacity: 1,
  //     x: 300,
  //     transition: { duration: 0.8, ease: "easeOut" },
  //   },
  // };

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isSmalldesktop = useMediaQuery({ minWidth:1024 , maxWidth: 1300 });
  


  const instarate = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? -10 : isTablet ? -100 : -30, 
      y: isMobile ? -100 : -300, 
      rotate: isMobile ? -30 : -90 
    },
    visible: {
      opacity: 1,
      x: isMobile ? 50 : isTablet ? 200 : 300,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


  //  facebook

  const facebookside = {
    hidden: { opacity: 0, x: isMobile ? -100 : isTablet ? -100 :isSmalldesktop ?-200: -300, y: isMobile ? -100 :isTablet ? -100 :isSmalldesktop ?100: -300, rotate: -90 },
    visible: {
      opacity: 1,
      x: isMobile ? 0 : isTablet ? -65 :isSmalldesktop ?-100:250,
      y: isMobile ? 50 : isTablet ? 100 :isSmalldesktop ?80:200,
      rotate: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  const facebookside1 = {
    hidden: { opacity: 0, x: isMobile ? 300 :isTablet ?200:isSmalldesktop ?-200: 600, y: isMobile ? 10 :isTablet ?-100: -0, rotate: 90 },
    visible: {
      opacity: 1,
      x: isMobile ? 10 :isTablet ?300:isSmalldesktop ?500: 700,
      y: isMobile ? 250 :isTablet ?0: 0,
      rotate: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  const facebookside2 = {
    hidden: { opacity: 0, x: isMobile ? 300 : isTablet ? 500:isSmalldesktop ?-200: 600, y: isMobile ? 300 :isTablet ?200:  500, rotate: 90 },
    visible: {
      opacity: 1,
      x: isMobile ? 30 :isTablet ?300: isSmalldesktop ?500: 700,
      y: isMobile ? 350 :isTablet ?200:  250,
      rotate: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  

  // Youtube

  const youtubeside = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? -150 :isTablet ? 200:isSmalldesktop ?200: -300, 
      y: isMobile ? -250 :isTablet ? -250:isSmalldesktop ?-500: -500, 
      rotate: -90 
    },
    visible: {
      opacity: 1,
      x: isMobile ? 10 : isTablet ? 10:isSmalldesktop ?50:300,
      y: isMobile ? 0 : isTablet ? 0:isSmalldesktop ?50:0,
      rotate: 0,
      transition: {
        delay: 0.8,
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };
  
  const youtubeside1 = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? -150 :isTablet ? -300:isSmalldesktop ?-300: -300, 
      y: isMobile ? 250 :isTablet ? 500: 500, 
      rotate: -90 
    },
    visible: {
      opacity: 1,
      x: isMobile ? 0 :isTablet ? -50:isSmalldesktop ?-80: 250,
      y: isMobile ? 250 :isTablet ? 350:500,
      rotate: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  const youtubeside2 = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? "60%" :isTablet ? "70%":isSmalldesktop ?"90%": "90%", 
      y: isMobile ? 250 :isTablet ? 500: 500, 
      rotate: -90 
    },
    visible: {
      opacity: 1,
      x: isMobile ? 0 :isTablet ? 330:isSmalldesktop ?400: 600,
      y: isMobile ? 450 :isTablet ? 200: 500,
      rotate: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


  // cards motion animation

  const cardside = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? -50 : -100, 
      y: isMobile ? -100 : -200, 
      rotate: -90 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.3,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  const cardside1 = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? -150 : -300, 
      y: isMobile ? 50 : 100, 
      rotate: -180 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const cardside2 = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? 150 : 300, 
      y: isMobile ? 50 : 100, 
      rotate: -180 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const cardside3 = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? "10%" : "20%", 
      y: isMobile ? -100 : -200, 
      rotate: -180 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  // insta
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);
  // facebook

  const [isVisiblefacb, setIsVisiblefacb] = useState(false);
  const imgReffacb = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisiblefacb(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (imgReffacb.current) {
      observer.observe(imgReffacb.current);
    }

    return () => {
      if (imgReffacb.current) {
        observer.unobserve(imgReffacb.current);
      }
    };
  }, []);

  // facebook

  const [isVisibleyoutube, setIsVisibleyoutube] = useState(false);
  const imgRefyoutube = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisibleyoutube(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (imgRefyoutube.current) {
      observer.observe(imgRefyoutube.current);
    }

    return () => {
      if (imgRefyoutube.current) {
        observer.unobserve(imgRefyoutube.current);
      }
    };
  }, []);

  // card

  // videos

  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const [isMuted1, setIsMuted1] = useState(true);
  const videoRef1 = useRef(null);

  const toggleMute1 = () => {
    if (videoRef1.current) {
      videoRef1.current.muted = !isMuted1;
      setIsMuted1(!isMuted1);
    }
  };
  const [isMuted2, setIsMuted2] = useState(true);
  const videoRef2 = useRef(null);

  const toggleMute2 = () => {
    if (videoRef2.current) {
      videoRef2.current.muted = !isMuted2;
      setIsMuted2(!isMuted2);
    }
  };
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

    const aryuCase = () => {
    navigate("/aryuacademy-guy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const hoodieCase = () => {
    navigate("/hoodie-guy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

//   const coffeeCase = () => {
//     navigate("/coofee-guy");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
  return (
    <section className="pb-1">
      <section className="header-iamge position-relative">
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

        <section className="pt-4">
          <div className="text-center mt-5">
            <img
              src={Coffee_main_logo}
              alt="Aryu logo"
              className="caseinside-img-aryu"
            />
          </div>
        </section>

        <section>
          <div className="text-center mt-5 ">
            <h1>
              <span className="coffee-color-start">The South
              Indian</span>
              <span className="coffee-color-end mx-1">Coffee House</span>
            </h1>
          </div>
        </section>
      </section>

      {/* hero section */}

      <section>
        <div className="d-flex justify-content-center">
          <div className="hero-section">
            <div className="hero-img">
              <div className="hero-img-inside">
                <img src={Coffeowner} alt="aryu" className="aryu-profile" />
              </div>
              <div className=" text-center founder-box">
                <div className="aryu-names pt-2">Amarnath</div>
                <div className="coffee-names-found ">
                  Founder of The South
                  Indian Coffee House
                </div>
              </div>
            </div>
            <div className="hero-content p-2 p-md-5">
              <div className="company-view">Company Overview</div>

              <div className="company-view-details mt-2">
                Aryu Enterprises Private Limited, established on February 10,
                2017, is a dynamic holding company based in Chennai, Tamil Nadu,
                India. The company focuses on driving success through strategic
                investments and partnerships, delivering forward-thinking
                solutions across various industries.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insta */}

      <section className=" overflow-hidden">
        <div className="insta-scroll ">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="instagram-stats text-center ">Instagram Stats</div>
          </motion.div>

          <div className="d-flex   position-relative">
            {/* Background Image */}
            <div
              className={`insta-back-img ${isVisible ? "zoom-out" : ""}`}
              ref={imgRef}
            ></div>

            {/* Foreground Image */}
            <div className="insta-rate-box">
              <motion.div
                variants={instarate}
                initial="hidden"
                whileInView="visible"
                className="position-absolute top-0 start-0"
              >
                <img src={Insta_aryu_rate} alt="insta" className="insta-rate" />
              </motion.div>
            </div>
          </div>
          <div className="insta-views-hero d-flex justify-content-around">
            <div>
              <div className="insta-views-num">3.5M</div>
              <div className="insta-views-num-down">VIEWS</div>
            </div>
            <div>
              <div className="insta-views-num">2.11M</div>
              <div className="insta-views-num-down">ENGAGEMENTS</div>
            </div>
            <div>
              <div className="insta-views-num">+23PT</div>
              <div className="insta-views-num-down">INCRESE IN AWARENESS</div>
            </div>
            <div>
              <div className="insta-views-num">+23PT</div>
              <div className="insta-views-num-down">INCRESE IN GEN Z</div>
            </div>
          </div>
        </div>
      </section>

      {/* facebook */}

      <section className=" overflow-hidden">
        <div className="face-scroll ">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="instagram-stats text-center ">Facebook Stats</div>
          </motion.div>

          <div className="d-flex   position-relative">
            {/* Background Image */}
            <div
              className={`facebook-back-img ${isVisiblefacb ? "zoom-out" : ""}`}
              ref={imgReffacb}
            ></div>

            {/* Foreground Image */}
            <div className="insta-rate-box">
              <motion.div
                variants={facebookside}
                initial="hidden"
                whileInView="visible"
                className="position-absolute top-0 start-0"
              >
                <img src={Face_aryu_rate} alt="insta" className="face-rate" />
              </motion.div>

              {/* image 2*/}
              <motion.div
                variants={facebookside1}
                initial="hidden"
                whileInView="visible"
                className="position-absolute top-0 start-0"
              >
                <img src={Face_aryu_rate2} alt="insta" className="face-rate1" />
              </motion.div>

              {/* image 3 */}
              <motion.div
                variants={facebookside2}
                initial="hidden"
                whileInView="visible"
                className="position-absolute top-0 start-0"
              >
                <img src={Face_aryu_rate1} alt="insta" className="face-rate2" />
              </motion.div>
            </div>
          </div>
          <div className="insta-views-hero-facebook d-flex justify-content-around">
          <div>
              <div className="insta-views-num">3.5M</div>
              <div className="insta-views-num-down">VIEWS</div>
            </div>
            <div>
              <div className="insta-views-num">2.11M</div>
              <div className="insta-views-num-down">ENGAGEMENTS</div>
            </div>
            <div>
              <div className="insta-views-num">+23PT</div>
              <div className="insta-views-num-down">INCRESE IN AWARENESS</div>
            </div>
            <div>
              <div className="insta-views-num">+23PT</div>
              <div className="insta-views-num-down">INCRESE IN GEN Z</div>
            </div>
          </div>
        </div>
      </section>

      {/* youtube */}

      <section className=" overflow-hidden">
        <div className="youtube-scroll ">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="instagram-stats text-center ">YouTube Stats</div>
          </motion.div>

          <div className="d-flex   position-relative">
            {/* Background Image */}
            <div
              className={`youtube-back-img ${
                isVisibleyoutube ? "zoom-out" : ""
              }`}
              ref={imgRefyoutube}
            ></div>

            {/* Foreground Image */}
            <div className="insta-rate-box">
              <motion.div
                variants={youtubeside}
                initial="hidden"
                whileInView="visible"
                className="position-absolute top-0 start-0"
              >
                <img
                  src={Youtube_aryu_rate}
                  alt="insta"
                  className="youtube-rate"
                />
              </motion.div>

              {/* image 2*/}
              <motion.div
                variants={youtubeside1}
                initial="hidden"
                whileInView="visible"
                className="position-absolute top-0 start-0"
              >
                <img
                  src={Youtube_aryu_rate1}
                  alt="insta"
                  className="youtube-rate1"
                />
              </motion.div>

              {/* image 3 */}
              <motion.div
                variants={youtubeside2}
                initial="hidden"
                whileInView="visible"
                className="position-absolute top-0 start-0"
              >
                <img
                  src={Youtube_aryu_rate2}
                  alt="insta"
                  className="youtube-rate2"
                />
              </motion.div>
            </div>
          </div>
          <div className="insta-views-hero-youtube d-flex justify-content-around">
            <div>
              <div className="insta-views-num">3.5M</div>
              <div className="insta-views-num-down">VIEWS</div>
            </div>
            <div>
              <div className="insta-views-num">2.11M</div>
              <div className="insta-views-num-down">ENGAGEMENTS</div>
            </div>
            <div>
              <div className="insta-views-num">+23PT</div>
              <div className="insta-views-num-down">INCRESE IN AWARENESS</div>
            </div>
            <div>
              <div className="insta-views-num">+23PT</div>
              <div className="insta-views-num-down">INCRESE IN GEN Z</div>
            </div>
          </div>
        </div>
      </section>

      {/* cards */}

      <section className="overflow-hidden  mb-3">
        <div className=" pt-5">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="instagram-stats text-center ">Strategies</div>
          </motion.div>
        </div>

        <div class="d-flex justify-content-center">
          <div class="card-flip-case">
            <motion.div
              variants={cardside}
              initial="hidden"
              whileInView="visible"
            >
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front case-blue">one</div>
                  <div class="flip-card-back case-yellow">Back 1</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardside1}
              initial="hidden"
              whileInView="visible"
            >
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front case-red">one</div>
                  <div class="flip-card-back case-green">Back 2</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardside2}
              initial="hidden"
              whileInView="visible"
            >
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front case-green">one</div>
                  <div class="flip-card-back case-red">Back 3</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={cardside3}
              initial="hidden"
              whileInView="visible"
            >
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front case-yellow">one</div>
                  <div class="flip-card-back case-blue">Back 4</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* videos */}

      <section className="text-align-top overflow-hidden">
        <div className=" pt-5 mt-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="instagram-stats text-center ">Videos </div>
          </motion.div>
        </div>

        <section>
          <div className="pt-5 ">
            <div className="all-video-flex">
              <div className="videos-case-box">
                <video
                  ref={videoRef}
                  src={Video2}
                  autoPlay
                  loop
                  muted={isMuted}
                  className="video-element-case"
                />
                <button className="mute-toggle-case" onClick={toggleMute}>
                  {isMuted ? <BiSolidVolumeMute /> : <IoVolumeHighSharp />}
                </button>
              </div>
              <div className="videos-case-box1 mt-4 mt-md-5 ">
                <video
                  ref={videoRef2}
                  src={Video1}
                  autoPlay
                  loop
                  muted={isMuted2}
                  className="video-element-case"
                />
                <button className="mute-toggle-case" onClick={toggleMute2}>
                  {isMuted2 ? <BiSolidVolumeMute /> : <IoVolumeHighSharp />}
                </button>
              </div>
              <div className="videos-case-box2">
                <video
                  ref={videoRef1}
                  src={Video3}
                  autoPlay
                  loop
                  muted={isMuted1}
                  className="video-element-case"
                />
                <button className="mute-toggle-case" onClick={toggleMute1}>
                  {isMuted1 ? <BiSolidVolumeMute /> : <IoVolumeHighSharp />}
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="d-flex justify-content-center ">
          {/* <motion.div
            variants={viewmorecase}
            initial="hidden"
            whileInView="visible"
          > */}
          <div
            className="insta-views-case d-flex justify-content-evenly "
            onClick={() =>
              window.open(
                "https://www.instagram.com/aryuacademyofficial/ ",
                "_blank"
              )
            }
          >
            VIEW MORE
            <GoArrowUpRight className="arrow-head-icon" />
          </div>
          {/* </motion.div> */}
        </div>
      </section>

      {/* more case sudies */}

      <section className="text-align-top"> 
      <div className=" pt-5 mt-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="instagram-stats text-center ">More Case Studies </div>
          </motion.div>
        </div>
        <div className="carousel-container mt-3">
          <Carousel
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            responsive={responsive}
          >
            <div className="carousel-item" onClick={hoodieCase}>
              <img src={Hoodie_banner} alt="Hoodie Guy" />
            </div>
            <div className="carousel-item" onClick={aryuCase}>
              <img src={Aryu_banner} alt="Coffee House" />
            </div>
            <div className="carousel-item">
              <img src={Ztrategize_banner} alt="Coca Cola" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* footer */}
      {/* <section>
        <div className="text-center text-align-top ">
          <div className="foot-back ">
            <div>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img
                  src={Storylise_logo}
                  alt="Storylise logo"
                  className="foot-img"
                />
              </a>
            </div>

            <div className="hiring-footer">Hiring</div>
            <div className="hiring-footer">
              <a href="/case-studies" target="_blank" rel="noopener noreferrer">
                Case studies
              </a>
            </div>
            <div className="hiring-footer">
              Follow us on
              <a
                href="https://www.instagram.com/hoodieguy98?igsh=dWhyamgxZnNtazB6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="insta-icon mx-3" />
              </a>
            </div>
            <div className="p-md-3">
              <div className="footer-head pt-2">
                Crafting Excellence with 💙
              </div>

              <a
                href="https://aryutechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Aryu_logo}
                  alt="Aryu logo"
                  className="foot-img-aryu"
                />
              </a>
              <div className="d-flex justify-content-start mx-4 gap-2 ">
                <a
                  className="icon-container-footer-aryu-tech"
                  href="https://x.com/aryu_technology?s=21&t=tNxnphk60k8Oj1slXlxJQg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="insta-footer-aryu-tech" />
                </a>

                <a
                  className="icon-container-footer-aryu-tech"
                  href="https://www.instagram.com/aryutechnologiesofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="insta-footer-aryu-tech" />
                </a>

                <a
                  className="icon-container-footer-aryu-tech"
                  href="https://www.linkedin.com/company/aryutechnologyofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="insta-footer-aryu-tech" />
                </a>

                <a
                  className="icon-container-footer-aryu-tech"
                  href="https://www.facebook.com/aryutechnologiesofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="insta-footer-aryu-tech" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="all-rights mt-4">
          Copyrights <FaRegCopyright size={20} /> 2025 All Rights Reserved by
          Storyrise
        </div>
      </section> */}
      <div className="text-align-top">
        <Footer></Footer>
        </div>
    </section>
  );
}

export default Coffee_case;
