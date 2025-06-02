import { useState, useEffect } from "react";
import "../assets/css/casestudies.css";
import Rotate1 from "../assets/images/rotateimg1.svg";
import { useNavigate } from "react-router-dom";
import Storylise_logo from "../assets/images/storylise-logo.svg";
import Aryu_logo from "../assets/images/aryutechnologies.svg";

import SplashCursor from "../components/splash_cursor";

// images
import Hoodie from "../assets/images/hoodie.jpg";
import Aryu from "../assets/images/aryu.jpg";
import Coffee from "../assets/images/coffee.jpg";
import TiltedCard from "../components/Title_card";

// banner
import Hoodie_banner from "../assets/images/hoodie-banner.svg";
import Coffie_banner from "../assets/images/coffe-banner.svg";
import Aryu_banner from "../assets/images/aryu-banner.svg";
import Ztrategize_banner from "../assets/images/ztrategize-banner.svg";

// icon
import { GoArrowUpRight } from "react-icons/go";

import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from "../Pages/Footer";

function Case_studies() {
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

  const navigate = useNavigate();

  const aryuCase = () => {
    navigate("/aryuacademy-guy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const hoodieCase = () => {
    navigate("/hoodie-guy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const coffeeCase = () => {
    navigate("/coofee-guy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const imageWidth = windowWidth <= 481 ? "100%" : windowWidth <= 768 ? "100%"  : "600px";
  const imageHeight = windowWidth <= 481 ? "400px" : windowWidth <= 768 ? "400px"  : "400px";
  const containerWidth = windowWidth <= 481 ? "350px" : windowWidth <= 768 ? "500px" : "700px";
  const containerHeight = windowWidth <= 481 ? "auto" : windowWidth <= 768 ? "400px" : "400px";


  return (
    <>
      <section>
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
            <a
              href="https://calendly.com/yuvaraj/freeassesment?month=2025-03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="case-studies d-flex justify-content-evenly">
                BOOK A CALL
              </div>
            </a>
          </div>
        </div>
        <section className="mt-5 d-flex justify-content-center">
          <div className="d-flex justify-content-around flex-wrap ">
            <div>
              <TiltedCard
                imageSrc={Hoodie_banner}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight={containerHeight}
                containerWidth={containerWidth}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={{
                  top: (
                    <div
                      className="insta-views-case d-flex justify-content-evenly"
                      onClick={hoodieCase}
                    >
                      VIEW MORE
                      <GoArrowUpRight className="arrow-head-icon" />
                    </div>
                  ),
                  bottom: (
                    <div className="insta-views-case1 d-flex justify-content-around">
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
                        <div className="insta-views-num-down">
                          INCRESE IN AWARENESS
                        </div>
                      </div>
                      <div>
                        <div className="insta-views-num">+23PT</div>
                        <div className="insta-views-num-down">
                          INCRESE IN GEN Z
                        </div>
                      </div>
                    </div>
                  ),
                }}
              />
            </div>
            <div>
              <TiltedCard
                imageSrc={Coffie_banner}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight={containerHeight}
                containerWidth={containerWidth}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={{
                  top: (
                    <div
                      className="insta-views-case d-flex justify-content-evenly"
                      onClick={coffeeCase}
                    >
                      VIEW MORE
                      <GoArrowUpRight className="arrow-head-icon" />
                    </div>
                  ),
                  bottom: (
                    <div className="insta-views-case1 d-flex justify-content-around">
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
                        <div className="insta-views-num-down">
                          INCRESE IN AWARENESS
                        </div>
                      </div>
                      <div>
                        <div className="insta-views-num">+23PT</div>
                        <div className="insta-views-num-down">
                          INCRESE IN GEN Z
                        </div>
                      </div>
                    </div>
                  ),
                }}
              />
            </div>
          </div>
        </section>
        <section className="mt-0 mt-md-5 d-flex justify-content-center">
          <div className="d-flex  justify-content-around flex-wrap">
            <div>
              <TiltedCard
                imageSrc={Aryu_banner}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight={containerHeight}
                containerWidth={containerWidth}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={{
                  top: (
                    <div
                      className="insta-views-case d-flex justify-content-evenly"
                      onClick={aryuCase}
                    >
                      VIEW MORE
                      <GoArrowUpRight className="arrow-head-icon" />
                    </div>
                  ),
                  bottom: (
                    <div className="insta-views-case1 d-flex justify-content-around">
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
                        <div className="insta-views-num-down">
                          INCRESE IN AWARENESS
                        </div>
                      </div>
                      <div>
                        <div className="insta-views-num">+23PT</div>
                        <div className="insta-views-num-down">
                          INCRESE IN GEN Z
                        </div>
                      </div>
                    </div>
                  ),
                }}
              />
            </div>
            {/* ashwin desgin will hide */}
            {/* <div>
              <TiltedCard
                imageSrc={Ztrategize_banner}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight={containerHeight}
                containerWidth={containerWidth}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={{
                  top: (
                    <div className="insta-views-case d-flex justify-content-evenly">
                      VIEW MORE
                      <GoArrowUpRight className="arrow-head-icon" />
                    </div>
                  ),
                  bottom: (
                    <div className="insta-views-case1 d-flex justify-content-around">
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
                        <div className="insta-views-num-down">
                          INCRESE IN AWARENESS
                        </div>
                      </div>
                      <div>
                        <div className="insta-views-num">+23PT</div>
                        <div className="insta-views-num-down">
                          INCRESE IN GEN Z
                        </div>
                      </div>
                    </div>
                  ),
                }}
              />
            </div> */}
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
              <div className="hiring-footer">Case studies</div>
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

export default Case_studies;
