import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import menuopen from "../assets/menu_open.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function Header({ setSideBar }) {
  const [headervalue, setHeaderValue] = useState("home");
  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const navigate = useNavigate();

  function navigateCv() {
    navigate("/CV");
  }
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-out-back",
      once: false,
      offset: 100,
    });

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderValue(entry.target.id);
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
      <Link to="home" smooth={true} offset={-60} duration={500}>
        <div
          className="textanimation flex h-full text-xl md:text-lg lg:text-3xl font-semibold cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Portfolio
        </div>
      </Link>

      {/* All Header Buttons */}
      <div
        className="h-0 w-0 md:h-auto mt-[4px] md:w-auto invisible md:visible flex"
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

        {/* Skills Dropdown with Chevron */}
        <li
          className="headerBtn flex text-base list-none relative md:ml-5 lg:ml-12"
          onMouseEnter={() => setIsSkillsHovered(true)}
          onMouseLeave={() => setIsSkillsHovered(false)}
        >
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

          {/* Chevron Icon for Skills */}
          {isSkillsHovered ? (
            <ChevronUpIcon
              className="w-4 h-4 mt-[5px] text-white ml-[2.5px] cursor-pointer"
              onClick={() => setIsSkillsHovered(false)}
            />
          ) : (
            <ChevronDownIcon
              className="w-4 h-4 mt-[5px] text-white ml-[2.5px] cursor-pointer"
              onClick={() => setIsSkillsHovered(true)}
            />
          )}

          {/* Dropdown Menu */}
          {isSkillsHovered && (
            <div
              className="absolute bg-gray-800 text-white py-2 px-4 rounded-[10px] shadow-lg mt-2 w-[250px] z-50"
              style={{
                position: "absolute",
                top: "50%",
                left: "80%", // Position dropdown to the right
              }}
            >
              <Link
                to="webskills"
                onClick={() => setHeaderValue("webskills")}
                smooth={true}
                offset={-80}
                duration={500}
                className="block py-2 px-4 rounded-[10px] hover:bg-gray-600 cursor-pointer"
              >
                Web Development
              </Link>
              <Link
                to="tools"
                onClick={() => setHeaderValue("tools")}
                smooth={true}
                offset={-80}
                duration={500}
                className="block py-2 px-4 rounded-[10px] hover:bg-gray-600 cursor-pointer"
              >
                Android Development
              </Link>
              <Link
                to="tools"
                onClick={() => setHeaderValue("tools")}
                smooth={true}
                offset={-80}
                duration={500}
                className="block py-2 px-4 rounded-[10px] hover:bg-gray-600 cursor-pointer"
              >
                Tools & Technologies
              </Link>
            </div>
          )}
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
        className="h-6 w-12 md:h-0 md:w-0 absolute right-4 visible md:invisible cursor-pointer"
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
          <button
            onClick={navigateCv}
            className="btn h-0 w-0 md:h-8 md:w-20 lg:h-10 lg:w-28 md:mr-2 md:text-sm lg:text-base font-bold invisible md:visible border-2 border-[rgb(19,118,175)] rounded-full"
          >
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
