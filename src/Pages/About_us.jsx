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
import ImageTrail from "../Pages/ImageTrail";

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

import Image1 from "../assets/images/abouts/sample.svg";
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
import Ztrategize_banner from "../assets/images/ztrategize-banner.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Coffie_banner from "../assets/images/coffe-banner.svg";
import Aryu_banner from "../assets/images/aryu-banner.svg";
import ImageCarousel from "../Pages/ImageCarousel";
import { FaArrowRight } from "react-icons/fa6";

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

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  const aryuCase = () => {
    navigate("/aryuacademy-guy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //   const hoodieCase = () => {
  //     navigate("/hoodie-guy");
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   };

  const coffeeCase = () => {
    navigate("/coofee-guy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // const images_swipe = [
  //   { src: Aryu_banner, alt: "Hoodie Guy", onClick: () => console.log("Aryu Clicked") },
  //   { src: Coffie_banner, alt: "Coffee House", onClick: () => console.log("Coffee Clicked") },
  // ]
  return (
    <>
      <section className="">
        {/* <SplashCursor /> */}

        <section className="about-bg-iamge position-relative">
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

          <section>
            <div className="about-padding  ">
              <h1>
                <span className="influencer-color-start">About </span>
                <span className="influencer-color-end"> Us</span>{" "}
              </h1>

              <div className="about-text">
                At Storyrise, we prioritize real results over chasing followers,
                focusing on driving success and creating lasting value for our
                clients.
              </div>

              {/*  */}
            </div>
          </section>
        </section>

        <section className="all-padding-about">
          <div>
            <div className="about-agency">About Our Story</div>
            <div className="content-about">
              Storyrise began in 2024 with a simple idea. To help brands grow by
              building real connections, not just numbers.
            </div>
            <div className="content-about-small">
              We saw too many businesses focusing on followers and reach but
              struggling to see results. While others spent on ads and
              influencers, we took a different path. No big budgets. No paid
              faces. Just bold storytelling, creative thinking, and content that
              people trust. We create reels and stories that speak to the right
              people. The ones who care, engage, and buy. It’s not about being
              everywhere. It’s about being meaningful where it matters.
            </div>
          </div>
        </section>
        {/* trail images */}

        {/* <section>
        <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
        <h2>
                <span className="influencer-color-start">The Rise</span>
                <span className="influencer-color-end"> Behind</span>{" "}
              </h2>
              <div className="story-about">the Story</div>
    
  <ImageTrail
    // key={key}
    
    items={[
      'https://picsum.photos/id/287/300/300',
      'https://picsum.photos/id/1001/300/300',
      'https://picsum.photos/id/1025/300/300',
      'https://picsum.photos/id/1026/300/300',
      'https://picsum.photos/id/1027/300/300',
      'https://picsum.photos/id/1028/300/300',
      'https://picsum.photos/id/1029/300/300',
      'https://picsum.photos/id/1030/300/300',
      // ...
    ]}
    variant={1}
  />
</div>
        </section> */}

        <section className="story-section">
          <div className="story-container">
            <div className="story-text">
              <h2>
                <span className="influencer-color-start">WHAT WE</span>
                <span className="influencer-color-end"> DO</span>{" "}
              </h2>
            </div>

            <ImageTrail
              items={[
                "https://picsum.photos/id/287/300/300",
                "https://picsum.photos/id/1001/300/300",
                "https://picsum.photos/id/1025/300/300",
                "https://picsum.photos/id/1026/300/300",
                "https://picsum.photos/id/1027/300/300",
                "https://picsum.photos/id/1028/300/300",
                "https://picsum.photos/id/1029/300/300",
                "https://picsum.photos/id/1030/300/300",
              ]}
              variant={1}
            />
          </div>
        </section>

        <section>
          <div className="about-small-div">
            <div>
              <div className="card-about">Content</div>
            </div>
            <div className="card-width">
              <div className="about-card-content">Content Strategy</div>
              <div className="card-about-small">
                We start by knowing your business goals and the people you're
                trying to reach. From there, we develop a customized content
                strategy focused on creating meaningful, platform-relevant
                content. With ongoing performance tracking and insights, we
                continuously optimize to align with your objectives and drive
                growth.
              </div>
            </div>
          </div>
        </section>
        <section className="card-bg-color">
          <div className="about-small-div-video ">
            <div className="card-width">
              <div className="about-card-content">Video Creation</div>
              <div className="card-about-small">
                Our video creation process covers every step—from concept
                ideation and scripting to filming, editing, and final
                distribution. We produce high-quality videos that capture your
                attention, tell your story, and clearly communicate your brand’s
                message.
              </div>
            </div>
            <div>
              <div className="card-about1">Video </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="about-small-div ">
            <div>
              <div className="card-about2">Social Media </div>
            </div>
            <div className="card-width">
              <div className="about-card-content">Social Media Management</div>
              <div className="card-about-small">
                We build a content calendar, manage scheduling, and engage
                consistently with your community. By monitoring performance and
                refining strategies, we help your brand stay relevant, build
                trust, and grow relationships online.
              </div>
            </div>
          </div>
        </section>
        <section className="all-padding-about">
          <div>
            <div className="about-agency">Meet Our Fantastic Team!</div>
            <div className="d-flex justify-content-center flex-wrap gap-5 pt-3">
              <div className="ceo-image">
                <img src={Image1} alt="" />
                <div className="ceo-info">
                  <div className="ceo-name">Vignesh</div>
                  <div className="ceo-name-position">CEO</div>
                </div>
              </div>
              <div className="ceo-image">
                <img src={Image1} alt="" />
                <div className="ceo-info">
                  <div className="ceo-name">Name</div>
                  <div className="ceo-name-position">CEO</div>
                </div>
              </div>
              <div className="ceo-image">
                <img src={Image1} alt="" />
                <div className="ceo-info">
                  <div className="ceo-name">Name</div>
                  <div className="ceo-name-position">CEO</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="about-agency text-center">Clients Portfolio</div>

          {/* <div className="carousel-container-about mt-3">
          <Carousel
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            responsive={responsive}
          >
            <div className="carousel-item-about" >
              <img src={Aryu_banner} alt="Hoodie Guy"onClick={aryuCase} />
            </div>
            <div className="carousel-item-about" >
              <img src={Coffie_banner} alt="Coffee House"onClick={coffeeCase} />
            </div>
            <div className="carousel-item-about">
              <img src={Ztrategize_banner} alt="Coca Cola" />
            </div>
          </Carousel>
        </div> */}
          <ImageCarousel />
        </section>

        <section className="header-about-iamge">
          <div>
            <div className="d-flex justify-content-center">
              <div className="about-foot-iamge">
                <div className="">
                  <div className="rise-about">
                    <div>The Rise Behind the</div>
                    <div>Story</div>
                  </div>
                  <a
                    href="https://calendly.com/yuvaraj/freeassesment?month=2025-03"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="d-flex justify-content-center">
                      <div className="connect-about">
                        Let’s Connect{" "}
                        <span className="px-3">
                          -<FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </section>
    </>
  );
}

export default About_us;
