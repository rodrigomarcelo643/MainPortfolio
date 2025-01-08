import React, { useState, useEffect } from "react";
import menuopen from "../assets/menu_open.svg";

import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

function Header({ setSideBar }) {
  const [headervalue, setHeaderValue] = useState("home");

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-out-back", // Playful easing for bounce effect
      once: false, // Animation happens every time the element comes into view
      offset: 100, // Start animations a bit earlier to be more dynamic
    });

    // Intersection Observer to detect when sections come into view
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderValue(entry.target.id); // Set active section
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-14 w-full flex justify-between py-2 px-2 lg:px-10 xl:px-14 fixed z-30 bg-black text-white">
      {/* Logo */}
      <Link to="home" className="" smooth={true} offset={-60} duration={500}>
        <div
          className="textanimation  flex h-full text-xl md:text-lg lg:text-3xl font-semibold cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Portfolio
        </div>
      </Link>

      {/* All Header Buttons */}
      <div
        className="h-0 w-0 md:h-auto md:w-auto invisible md:visible flex"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <li className="headerBtn text-base list-none relative">
          <Link
            to="home"
            onClick={() => setHeaderValue("home")}
            smooth={true}
            offset={-60}
            duration={500}
            className={`underlinearrow ${
              headervalue === "home" ? "solidunderline" : ""
            } cursor-pointer`}
          >
            Home
          </Link>
        </li>
        <li className="headerBtn text-base list-none relative md:ml-5 lg:ml-12">
          <Link
            to="aboutus"
            onClick={() => setHeaderValue("aboutus")}
            smooth={true}
            offset={-80}
            duration={500}
            className={`underlinearrow ${
              headervalue === "aboutus" ? "solidunderline" : ""
            } cursor-pointer`}
          >
            About Me
          </Link>
        </li>
        <li className="headerBtn text-base list-none relative md:ml-5 lg:ml-12">
          <Link
            to="skills"
            onClick={() => setHeaderValue("skills")}
            smooth={true}
            offset={-80}
            duration={500}
            className={`underlinearrow ${
              headervalue === "skills" ? "solidunderline" : ""
            } cursor-pointer`}
          >
            Skills
          </Link>
        </li>
        <li className="headerBtn text-base list-none relative md:ml-5 lg:ml-12">
          <Link
            to="latestwork"
            onClick={() => setHeaderValue("latestwork")}
            smooth={true}
            offset={-60}
            duration={500}
            className={`underlinearrow ${
              headervalue === "latestwork" ? "solidunderline" : ""
            } cursor-pointer`}
          >
            Projects
          </Link>
        </li>
        <li className="headerBtn text-base list-none relative md:ml-5 lg:ml-12">
          <Link
            to="contact"
            onClick={() => setHeaderValue("contact")}
            smooth={true}
            offset={-80}
            duration={500}
            className={`underlinearrow ${
              headervalue === "contact" ? "solidunderline" : ""
            } cursor-pointer`}
          >
            Contact
          </Link>
        </li>
      </div>

      {/* Menu Icon */}
      <img
        onClick={() => setSideBar(true)}
        className="h-10 w-10 md:h-0 md:w-0 absolute right-4 visible md:invisible cursor-pointer"
        src={menuopen}
        alt="Menu"
        data-aos="flip-left"
        data-aos-delay="700"
      />

      {/* Resume & Contact me button */}
      <div
        className="h-0 w-0 md:h-10 md:w-auto"
        data-aos="zoom-in-up"
        data-aos-delay="800"
      >
        <a href="" className="h-0 w-0 md:h-auto md:w-auto invisible md:visible">
          <button className="btn h-0 w-0 md:h-8 md:w-20 lg:h-10 lg:w-28 md:mr-2 md:text-sm lg:text-base font-bold invisible md:visible border-2 border-[rgb(19,118,175)] rounded-full">
            CV
          </button>
        </a>
        <Link
          to="contact"
          smooth={true}
          offset={-80}
          duration={500}
          className="h-0 w-0 md:h-auto md:w-auto"
        >
          <button className="btn h-0 w-0 md:h-8 md:w-24 lg:h-10 lg:w-36 md:text-sm lg:text-base invisible md:visible bg-[rgb(19,118,175)] rounded-full">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
