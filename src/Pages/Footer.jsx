import { useState, useEffect } from "react";
import Storylise_logo from "../assets/images/storylise-logo.svg";
import Aryu_logo from "../assets/images/aryutechnologies.svg";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



function Footer() {
    const navigate = useNavigate();

const goAboutus = () => {
  navigate("/about-us");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const goTocasestudies = () => {
    navigate("/case-studies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section>
              <div className="text-center  ">
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
    
                  <div  className="hiring-footer"  >
                   <a
                      href="/about-us"
                      target="_blank"
                      rel="noopener noreferrer"
                    >About US
                    </a></div>
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
            </section>
    </>
  )
}

export default Footer