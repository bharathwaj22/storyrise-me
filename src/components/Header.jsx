import { useState, useEffect } from "react";
import Storylise_logo from "../assets/images/storylise-logo.svg";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

import AOS from "aos";
import "aos/dist/aos.css";


function Header() {
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

  const navigate = useNavigate();

  const goTocasestudies = () => {
    navigate("/case-studies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goAboutus = () => {
    navigate("/about-us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div
        className={`d-flex justify-content-center  ${
          isScrolled ? "blur-bg" : ""
        }`}
      >
        <div
          className={`story-H  d-flex justify-content-between ${
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
            <a href="/" className="all-head-color">
              <AiFillHome />
            </a>
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
            onClick={goTocasestudies}
          >
            Contact us
            <GoArrowUpRight className="arrow-head-icon" />
          </div>

          <div className="menu-mobile-home"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
