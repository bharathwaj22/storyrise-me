import { useState, useEffect, useRef } from "react";
import CustomCursor from "../components/Custom_mouse";

import SplashCursor from "../components/splash_cursor";
import CircularGallery from "../components/circular_iamge";
import BounceCards from "../components/Bonce_Card";
import Video_scroll from "./Video_scroll";
import Marquee from "react-fast-marquee";
import ShinyText from "../components/shinky_text";
import PixelCard from "../components/Animation_content";
import Mobile_view from "../components/Mobile_view";
import Cards from "../components/Cards";
// import fluidCursor from "../components/splash_cursor";
import Magnet from "../components/Magnet";
// import Carousel from '../components/carosual';
import FlyingPosters from "../components/carosual";

import AOS from "aos";
import "aos/dist/aos.css";

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

import Image1 from "../assets/images/image 1.png";
import Image2 from "../assets/images/image 2.png";
import Image3 from "../assets/images/image 3.png";
import Image4 from "../assets/images/image 4.png";
import Image5 from "../assets/images/image 5.png";
import Image6 from "../assets/images/image 6.png";
import Image7 from "../assets/images/image 7.png";
import Image8 from "../assets/images/image 8.png";


import Ogimage from "../../public/storylise-logo.png";
import Footer from "../Pages/Footer";
import Bulb from "../Pages/Bulb";
import Story_how_image from "../assets/images/abouts/storyrise-how-image.svg";
import Header from "./header";

// headericon

import { AiFillHome } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { log } from "three/tsl";
import Silk from '../components/Silk';

// rotae

// import Rotate1 from "../assets/images/rotateimg1.svg";
// import Rotate2 from "../assets/images/rotateimg2.svg";
// import Rotate3 from "../assets/images/rotateimg3.svg";
// import Rotate4 from "../assets/images/rotateimg4.svg";
// import Rotate5 from "../assets/images/rotateimg5.svg";
// import Rotate6 from "../assets/images/rotateimg6.svg";
function home() {
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

  const contentArray = [
    { image: Image1, alttag: "google" },
    { image: Image2, alttag: "google" },
    { image: Image3, alttag: "google" },
    { image: Image4, alttag: "google" },
    { image: Image5, alttag: "google" },
    { image: Image6, alttag: "google" },
    { image: Image7, alttag: "google" },
    { image: Image8, alttag: "google" },
  ];

  // const transformStyles = [
  //   "rotate(5deg) translate(-150px)",
  //   "rotate(0deg) translate(-70px)",
  //   "rotate(-5deg)",
  //   "rotate(5deg) translate(70px)",
  //   "rotate(-5deg) translate(150px)"
  // ];

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

  const goAboutus = () => {
    navigate("/about-us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
   const gohome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
   const goContactus = () => {
    navigate("/contact-us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //   if (isOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   // Cleanup on unmount
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isOpen]);

  return (
    <>
      <section className="pb-1">
        {/* <SplashCursor /> */}

        <section className="header-iamge position-relative">
          <SplashCursor />

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
              <div className="header-middle">
                <div onClick={gohome} className="all-head-color">
                  <AiFillHome />
                </div>
                <div className="header-abouts-name" onClick={goAboutus}>
                  About us
                </div>
                <div className="header-abouts-name">Blog</div>
                <div className="header-abouts-name" onClick={goTocasestudies}>
                  Case Studies{" "}
                </div>
              </div>
              <div
                className="case-studies d-flex justify-content-evenly"
                onClick={goContactus}
              >
                Contact us
                <GoArrowUpRight className="arrow-head-icon" />
              </div>

              <div className="menu-mobile-home">
                <div
                  className="menu-mobile-home p-2"
                  style={{ cursor: "pointer" }}
                  onClick={toggleMenu}
                  ref={menuRef}
                >
                  <HiMenuAlt3 size={30} />
                </div>

                {isOpen && (
                  <div className="custom-menu ">
                    <div
                      onClick={gohome}
                      className="custom-menu-item"
                      
                    >
                      Home
                    </div>
                    <div className="custom-menu-item" onClick={goAboutus}>
                      About
                    </div>
                   <div  className="custom-menu-item">Blog</div>
                    <div onClick={goTocasestudies} className="custom-menu-item">Case Studies</div>


                    <div onClick={goContactus} className="custom-menu-item">Contact Us</div>

                  </div>
                )}
              </div>
            </div>
          </div>

          <section>
            <div className="text-center mt-5 ">
              <h1 className="your-title ">
                Your Ultimate
                <div>
                  <span className="influencer-color-start">
                    Influencer Marketing
                  </span>
                  <span className="influencer-color-end">Hub</span>{" "}
                </div>
              </h1>
              <div className="head-text mt-5">
                With the rise of online threats, it's crucial to take proactive
                steps to protect your identity from{" "}
              </div>
              <div className="head-text">
                hackers, phishing scams, and unauthorized access.
              </div>

              <div className="d-flex justify-content-center mt-5">
                {/* <div className="case-studies-lagre  pt-1 d-flex justify-content-evenly">
                  CASE STUDIES
                  <GoArrowUpRight className="arrow-head-icon" />
                </div> */}

                <div onClick={goContactus}>
                  {" "}
                  <Magnet padding={50} disabled={false} magnetStrength={50}>
                    <div className="case-studies-large pt-1 d-flex justify-content-evenly align-items-center">
                      <ShinyText
                        text="Get Started"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                      />
                      {/* <GoArrowUpRight className="arrow-head-icon-arrow" /> */}
                    </div>
                  </Magnet>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* circle image */}
        <section className="mt-5 ">
          {/* <div className="d-flex justify-content-center mt-5">
            <div className="rotate-container">
              <img src={Roatate} alt="" />
              <img src={Roatate} alt="" />
              <img src={Roatate} alt="" />
            </div>
          </div> */}
          <div className="image-animation-all-div d-none d-md-block">
            <CircularGallery
              bend={12}
              textColor="#ffffff"
              borderRadius={0.2}
              gap={20}
            />
          </div>

          <div
            className="d-md-none"
            style={{ height: "500px", position: "relative" }}
          >
            <FlyingPosters bend={1} textColor="#ffffff" borderRadius={0.05} />
          </div>
        </section>
        {/* card  */}
        <section>
          <div className="d-flex justify-content-center mt-5">
            <img
              src={Story_how_image}
              alt="storyrisew"
              className="story-how-image"
            />
          </div>
        </section>

        {/* <section>
          <div className="text-center text-align-top ">
            <h2>
              <span className="smart-name">A Smarter</span>
              <span className="market-text"> Influencer Marketing</span>
              <span className="smart-name"> Approach</span>
            </h2>
            <div className="head-text mt-3">
              With the rise of online threats, it's crucial to take proactive
              steps to protect your identity from{" "}
            </div>
            <div className="head-text">
              hackers, phishing scams, and unauthorized access.
            </div>
          </div>
        </section> */}

        {/* <Bulb></Bulb> */}

        {/* <section>
          <div className="d-flex justify-content-center text-align-top">
            <div className="d-flex flex-wrap justify-content-evenly gap-5">
              <div className="years-exp pt-3">
                <div className="text-exp-num">
                  10<span className="plus-sign">+</span>
                </div>
                <div className="text-exp-name">Years Experience</div>
              </div>
              <div className="years-exp pt-3">
                <div className="text-exp-num">
                  120<span className="plus-sign1">+</span>
                </div>
                <div className="text-exp-name">Expert Team</div>
              </div>
              <div className="years-exp pt-3">
                <div className="text-exp-num">
                  15.K<span className="plus-sign2">+</span>
                </div>
                <div className="text-exp-name">Network Sensors</div>
              </div>
              <div className="years-exp pt-3">
                <div className="text-exp-num">
                  2K<span className="plus-sign3">+</span>
                </div>
                <div className="text-exp-name">Clients Protect</div>
              </div>
            </div>
          </div>
        </section> */}
        {/* video */}
        <section className="text-align-top">
          <div className="video-all-box">
            <div className="videos-text">VIDEOS</div>
            <div className="video-container d-none d-lg-block">
              <Video_scroll></Video_scroll>
            </div>

            <div className="video-container-1">
              <div className="image-animation-mobile  d-lg-none">
                <Mobile_view
                  bend={0}
                  textColor="#ffffff"
                  borderRadius={0.05}
                  gap={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* image direction */}

        <section>
          <div className="mt-5">
            <Marquee
              className="flex justify-between gap-5 [--duration:5s]"
              speed={30}
              gradient={false}
              pauseOnHover={false}
            >
              {contentArray.map((content, index) => (
                <div key={index} className="flex items-center space-x-5">
                  <img
                    src={content.image}
                    alt={content.alttag}
                    className="w-16 h-16 mx-3 marquee-image transition-all duration-300 group-hover:grayscale group-hover:brightness-50"
                    loading="lazy"
                  />
                  <span>{content.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* content */}

        <section>
          <div className="text-center text-align-top ">
            <h2 className="smart-name">Choose Right Plan for Your</h2>
            <div className="head-text mt-3">
              Whether you're an individual, small business, or large enterprise,
            </div>
            <div className="head-text">
              our flexible plans offer the perfect balance of protection,
              performance.
            </div>
          </div>
        </section>

        <section>
          <div className="p-4 mt-2">
            <div className="d-flex flex-wrap justify-content-around gap-3 ">
              {/* <div className="base-plan "data-aos="zoom-in-right">
                <div className="d-flex justify-content-between">
                  <div className="basic-text">Basic Plan</div>
                  <div className="basic-month">$9.99/month</div>
                </div>
                <div className="basic-inside-text mt-3">
                  Perfect for individuals and small businesses just starting to
                  secure their digital environment.
                </div>
                <div className="basic-inside-text mt-5">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Real-time Threat Protection</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Basic Firewall and VPN Access</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Email and Phishing Protection</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">
                    Basic Device Protection (1 Device)
                  </span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">24/7 Customer Support</span>
                </div>
                <div>
                  <div className="book-call mt-4">
                    Book a call
                    <GoArrowUpRight className="arrow-book-icon mx-2" />
                  </div>
                </div>
              </div>

              <div className="base-medium"data-aos="fade-up"
     >
                <div className="d-flex justify-content-between">
                  <div className="basic-text-medium">Medium </div>
                  <div className="basic-month-medium">$29.99/month</div>
                </div>
                <div className="basic-inside-text-medium mt-3">
                  Ideal for growing businesses and teams that require more
                  advanced security measures.{" "}
                </div>
                <div className="basic-inside-text-medium mt-5">
                  <IoCloudDoneOutline className="cloud-icon-medium" />
                  <span className="mx-2  ">Everything in Basic Plan</span>
                </div>
                <div className="basic-inside-text-medium mt-3">
                  <IoCloudDoneOutline className="cloud-icon-medium" />
                  <span className="mx-2  ">Advanced Threat Detection</span>
                </div>
                <div className="basic-inside-text-medium mt-3">
                  <IoCloudDoneOutline className="cloud-icon-medium" />
                  <span className="mx-2  ">
                    Multiple Device Protection (Up to 5 Devices)
                  </span>
                </div>
                <div className="basic-inside-text-medium mt-3">
                  <IoCloudDoneOutline className="cloud-icon-medium" />
                  <span className="mx-2  ">Cloud Backup (5GB)</span>
                </div>
                <div className="basic-inside-text-medium mt-3">
                  <IoCloudDoneOutline className="cloud-icon-medium" />
                  <span className="mx-2  ">
                    Advanced Firewall and VPN Features
                  </span>
                </div>
                <div>
                  <div className="book-call-medium mt-4">
                    Book a call
                    <GoArrowUpRight className="arrow-book-icon-medium mx-2" />
                  </div>
                </div>
              </div>
              <div className="base-advance"data-aos="zoom-in-left">
                <div className="d-flex justify-content-between">
                  <div className="basic-text">Advance </div>
                  <div className="basic-month">$9.99/month</div>
                </div>
                <div className="basic-inside-text mt-3">
                  Perfect for individuals and small businesses just starting to
                  secure their digital environment.
                </div>
                <div className="basic-inside-text mt-5">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Real-time Threat Protection</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Basic Firewall and VPN Access</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Email and Phishing Protection</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">
                    Basic Device Protection (1 Device)
                  </span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">24/7 Customer Support</span>
                </div>
                <div>
                  <div className="book-call-advance mt-4">
                    Book a call
                    <GoArrowUpRight className="arrow-book-icon-advance mx-2" />
                  </div>
                </div>
              </div> */}

              <div className="base-plan ">
                <div className="d-flex justify-content-center">
                  <div className="basic-text">Basic Plan</div>
                  {/* <div className="basic-month">$9.99/month</div> */}
                </div>
                <div className="basic-inside-text mt-3">
                  Perfect for individuals and small businesses just starting to
                  secure their digital environment.
                </div>
                <div className="basic-inside-text mt-5">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Real-time Threat Protection</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Basic Firewall and VPN Access</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Email and Phishing Protection</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">
                    Basic Device Protection (1 Device)
                  </span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">24/7 Customer Support</span>
                </div>
                <div>
                  
                    <div className="book-call mt-4" onClick={goContactus}>
                      Get Started
                      <GoArrowUpRight className="arrow-book-icon mx-2" />
                    </div>
                  
                </div>
              </div>

              <div className="base-medium">
                <div className="d-flex justify-content-center">
                  <div className="basic-text-medium">Medium </div>
                  {/* <div className="basic-month-medium">$29.99/month</div> */}
                </div>
                <div className="basic-inside-text-medium mt-3">
                  Ideal for growing businesses and teams that require more
                  advanced security measures.{" "}
                </div>
                <div className="basic-inside-text-medium mt-5">
                  <IoCloudDoneOutline className="cloud-icon-medium" />
                  <span className="mx-2  ">Everything in Basic Plan</span>
                </div>
                <div className="basic-inside-text-medium mt-3">
                  <IoCloudDoneOutline className="cloud-icon-medium" />
                  <span className="mx-2  ">Advanced Threat Detection</span>
                </div>
                <div className="basic-inside-text-medium mt-3">
                  <IoCloudDoneOutline className="cloud-icon-medium" />
                  <span className="mx-2  ">
                    Multiple Device Protection (Up to 5 Devices)
                  </span>
                </div>
                <div className="basic-inside-text-medium mt-3">
                  <IoCloudDoneOutline className="cloud-icon-medium" />
                  <span className="mx-2  ">Cloud Backup (5GB)</span>
                </div>
                <div className="basic-inside-text-medium mt-3">
                  <IoCloudDoneOutline className="cloud-icon-medium" />
                  <span className="mx-2  ">
                    Advanced Firewall and VPN Features
                  </span>
                </div>
                <div>
                 
                    <div className="book-call-medium mt-4" onClick={goContactus}>
                     Get Started
                      <GoArrowUpRight className="arrow-book-icon-medium mx-2" />
                    </div>
                  
                </div>
              </div>
              <div className="base-advance">
                <div className="d-flex justify-content-center">
                  <div className="basic-text">Advance </div>
                  {/* <div className="basic-month">$9.99/month</div> */}
                </div>
                <div className="basic-inside-text mt-3">
                  Perfect for individuals and small businesses just starting to
                  secure their digital environment.
                </div>
                <div className="basic-inside-text mt-5">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Real-time Threat Protection</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Basic Firewall and VPN Access</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">Email and Phishing Protection</span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">
                    Basic Device Protection (1 Device)
                  </span>
                </div>
                <div className="basic-inside-text mt-3">
                  <IoCloudDoneOutline className="cloud-icon" />
                  <span className="mx-2  ">24/7 Customer Support</span>
                </div>
                <div>
                  
                    <div className="book-call-advance mt-4" onClick={goContactus}>
                      Get Started
                      <GoArrowUpRight className="arrow-book-icon-advance mx-2" />
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center text-align-top ">
            <h2 className="answer-name">FAQS</h2>
          </div>

          <div className="d-flex justify-content-center mt-5 quest-algin">
            <div>
              <div className="d-flex flex-wrap gap-3 mt-3 mt-md-5">
                <div className="quest-box">
                  <div className="quest-flex">
                    <div>What is Influencer Marketing? </div>
                    
                  </div>

                  <div className={`hover-text-quest `}>
                    Influencer marketing is a tactic in which brands partner
                    with people who have a large online following to market
                    products or services. These influencers possess loyal
                    followers who believe their recommendations, so it is an
                    effective means of creating brand awareness and generating
                    sales.
                  </div>
                </div>
                <div className="quest-box">
                  <div className="quest-flex">
                    <div>Who is an Influencer?</div>
                    {/* <div className="quest-icon">
                      <GrAddCircle />
                    </div> */}
                  </div>

                  <div className="hover-text-quest">
                    An influencer is someone who can shape opinions and
                    influence buying decisions through trust and niche
                    expertise. At StoryRise, we connect brands with impactful
                    influencers who drive real engagement
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-3 mt-md-5">
                <div className="quest-box">
                  <div className="quest-flex">
                    <div className="text-left">
                      What Do Influencer Marketing Agencies Do?{" "}
                    </div>
                    {/* <div className="quest-icon">
                      <GrAddCircle />
                    </div> */}
                  </div>

                  <div className="hover-text-quest">
                    Influencer marketing agencies pair brands with appropriate
                    influencers and take campaigns from launch to execution.
                    They work on strategy, outreach, content, execution, and
                    tracking to drive effective results. StoryRise assists
                    brands in establishing real relationships and influencing
                    positive engagement through influencer partnerships.
                  </div>
                </div>
                <div className="quest-box">
                  <div className="quest-flex">
                    <div>
                      How does influencer marketing build real brand trust?
                    </div>
                    {/* <div className="quest-icon">
                      <GrAddCircle />
                    </div> */}
                  </div>

                  <div className="hover-text-quest">
                    Influencer marketing fosters trust through authenticity.
                    Shoppers trust influencers they follow, embracing their
                    suggestions over traditional advertising. This interpersonal
                    relationship results in increased engagement, improved
                    conversions, and better brand credibility.
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-3 mt-md-5">
                <div className="quest-box">
                  <div className="quest-flex">
                    <div>How Do I Find the Right Influencers?</div>
                    {/* <div className="quest-icon">
                      <GrAddCircle />
                    </div> */}
                  </div>

                  <div className="hover-text-quest">
                    At StoryRise, we connect brands with the right influencers
                    using our strong network and industry know-how. By
                    understanding your audience, platform, and brand values, we
                    ensure authentic collaborations that drive real results.
                  </div>
                </div>
                <div
                  className="quest-box"
                  onMouseEnter={() => setShowText7(true)}
                >
                  <div className="quest-flex">
                    <div>
                      How Can I Measure the Success of an Influencer Campaign?{" "}
                    </div>
                    {/* <div className="quest-icon">
                      <GrAddCircle />
                    </div> */}
                  </div>

                  <div className="hover-text-quest">
                    Success is gauged by such Key Performance Indicators (KPIs)
                    as engagement rate, reach, conversions, website traffic, and
                    Return On Investment (ROI). High-end analytics solutions
                    enable monitoring these metrics and tailoring future
                    campaigns.
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-3 mt-md-5">
                <div className="quest-box">
                  <div className="quest-flex">
                    <div>
                      Which Social Media Platforms Are Best for Influencer
                      Marketing?{" "}
                    </div>
                    {/* <div className="quest-icon">
                      <GrAddCircle />
                    </div> */}
                  </div>

                  <div className="hover-text-quest">
                    The most widely used sites are Instagram and YouTube with
                    high engagement rates and visual story-telling features.
                    TikTok is also being increasingly used because of its
                    virality potential, especially among younger audiences.
                  </div>
                </div>
                <div className="quest-box">
                  <div className="quest-flex">
                    <div>What Are the Benefits of Influencer Marketing? </div>
                    {/* <div className="quest-icon">
                      <GrAddCircle />
                    </div> */}
                  </div>

                  <div className="hover-text-quest">
                    Influencer marketing fosters brand awareness, trust
                    building, and more engagement. It also delivers targeted
                    exposure so that companies can reach niche groups more
                    easily than through traditional advertising.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* silk desgin */}
{/* 
<section className="d-flex justify-content-center">
  <div className="silk-width" >
            <Silk
  speed={5}
  scale={1}
  color="#FFC927"
  noiseIntensity={1.5}
  rotation={0}
/>
  </div>
</section> */}

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

              <div className="hiring-footer">About US</div>
              <div className="hiring-footer">
                <a
                  href="/case-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
    </>
  );
}

export default home;
