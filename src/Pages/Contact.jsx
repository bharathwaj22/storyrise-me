import { useState, useEffect, useRef } from "react";

import SplashCursor from "../components/splash_cursor";

// import fluidCursor from "../components/splash_cursor";
import Magnet from "../components/Magnet";
// import Carousel from '../components/carosual';

import ShinyText from "../components/shinky_text";

import AOS from "aos";
import "aos/dist/aos.css";

import "../assets/css/home.css";
import "../assets/css/carousel.css";
import Storylise_logo from "../assets/images/storylise-logo.svg";
import { useNavigate } from "react-router-dom";

// icon
import { GoArrowUpRight } from "react-icons/go";

import "../assets/css/about.css"

// images

// headericon

import { AiFillHome } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import ContactImg from "../assets/images/abouts/contact.svg";

import { API_URL } from "../Config.jsx";
import axios from "axios";
import Swal from "sweetalert2";
import { CAPCHA_URL } from "../Config.jsx";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
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

  // form api

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phn_no: "",

    description: "",
    // course:"Digital marketing",
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phn_no: false,
    description: false,
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formValues);
  console.log(formErrors);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {}; // Initialize an empty object to store errors

    // Validate each field
    if (!formValues.name.trim()) {
      errors.name = "Full name is required.";
    }
    if (!formValues.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formValues.phn_no.trim()) {
      errors.phn_no = "phn_no number is required.";
    }
    if (!formValues.description.trim()) {
      errors.description = "description is required.";
    }

    // Update the state with errors
    setFormErrors({
      name: !!errors.name,
      email: !!errors.email,
      phn_no: !!errors.phn_no,
      description: !!errors.description,
    });

    // If there are errors, prevent form submission
    if (Object.keys(errors).length > 0) {
      return;
    }
    const loader = document.getElementById("global-loader");
    if (loader) loader.style.display = "flex";

    const startTime = Date.now();
    try {
      console.log("hello", formValues);
      const response = await axios.post(
        `${API_URL}/api/v1/freeconslutaion
      `,
        formValues
      );

      console.log("Form submitted successfully:", response.data);
      // Optionally, reset form values here
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(500 - elapsedTime, 0);

      setTimeout(() => {
        if (loader) loader.style.display = "none";
      }, remainingTime);

      Swal.fire({
        title: "Success!",
        text: "Your form has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Close the popup after alert is dismissed
        onClose(); // <-- This will close the modal
      });

      setFormValues({
        name: "",
        email: "",
        phn_no: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      // SweetAlert2 ferror alert
      // Swal.fire({
      //   title: "Oops!",
      //   text: "There was an error submitting your form. Please try again.",
      //   icon: "error",
      //   confirmButtonText: "OK",
      // });
    }
  };

  const handleKeyUp = (e) => {
    const { name, value } = e.target;

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };

  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  return (
    <section className="pb-1">
      <SplashCursor />

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
                  <div onClick={gohome} className="custom-menu-item">
                    Home
                  </div>
                  <div className="custom-menu-item" onClick={goAboutus}>
                    About
                  </div>
                  <div className="custom-menu-item">Blog</div>
                  <div onClick={goTocasestudies} className="custom-menu-item">
                    Case Studies
                  </div>

                  <div onClick={goContactus} className="custom-menu-item">
                    Contact Us
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <section>
          <div className="text-center mt-5 ">
            <h1>
              <span className="influencer-color-start">Get</span>
              <span className="influencer-color-end"> in Started</span>{" "}
            </h1>

            <div className="head-text mt-3">
              Reach out, and let's create a universe of possibilities together!
            </div>
          </div>
        </section>
      </section>

      <section className="p-2 p-md-5 d-flex justify-content-center">
        <div className="contact-background">
          <div className="contact-form-outside">
            <div className="contact-let">Let’s connect constellations</div>
            <div className="contact-let-details mt-2">
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </div>
            <div>
              <form>
                <div
                  className={`floating-label-group ${
                    formErrors.name ? "border border-danger" : ""
                  }`}
                >
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder=" "
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyUp}
                    // autoComplete="off"
                  />

                  <label for="fullName">
                    Full Name<span class="required">*</span>
                  </label>
                </div>
                <div
                  className={`floating-label-group ${
                    formErrors.email ? "border border-danger" : ""
                  }`}
                >
                  <input
                    type="text"
                    id="email"
                    required
                    placeholder=" "
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyUp}
                    //  autoComplete="off"
                  />
                  <label for="email">
                    Email<span class="required">*</span>
                  </label>
                </div>
                <div
                  className={`floating-label-group ${
                    formErrors.phn_no ? "border border-danger" : ""
                  }`}
                >
                  <input
                    type="text"
                    id="mobile"
                    required
                    placeholder=" "
                    name="phn_no"
                    value={formValues.phn_no}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyUp}
                    // autoComplete="off"
                  />
                  <label for="mobile">
                    Phone Number<span class="required">*</span>
                  </label>
                </div>

                <div
                  className={`floating-label-group ${
                    formErrors.message ? " border-danger" : ""
                  }`}
                >
                  <textarea
                    type="text"
                    id="mobile"
                    required
                    placeholder=" "
                    name="message"
                    value={formValues.message}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyUp}
                    // autoComplete="off"
                  />
                  <label for="mobile">
                   Message<span class="required">*</span>
                  </label>
                </div>

                <div className="recaptacha-login ">
                <ReCAPTCHA
                  sitekey={CAPCHA_URL}
                  onChange={handleCaptchaChange}
                />
                {!captchaValue && (
                  <div className="text-danger mt-2">
                    Please complete the CAPTCHA.
                  </div>
                )}
              </div>

                
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    // className="apply-btn-courses mt-2"
                    className={`apply-btn-courses mt-2 ${
                      !captchaValue ? "disabled-btn" : ""
                    }`}
                    disabled={!captchaValue}
                  >
                    Send it to the moon
                  </button>
                
              </form>
            </div>
          </div>

          <div className="contact-img" >
            <img src={ContactImg} alt="contact" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
