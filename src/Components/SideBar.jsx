import React, { useState } from "react";
import menuClose from "../assets/menu_close.svg";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function SideBar({ setSideBar }) {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const navigate = useNavigate();

  function navigateCv() {
    navigate("/CV");
  }

  return (
    <div className="sidebarbgcolor min-h-screen w-72 bg-gradient-to-b from-gray-800 via-gray-900 to-black visible md:invisible relative transition-all ease-in-out duration-300 shadow-lg">
      {/* Close button */}
      <div onClick={() => setSideBar(false)} className="p-4">
        <img
          src={menuClose}
          className="headerBtn h-8 w-8 cursor-pointer text-white transition-transform transform hover:rotate-180"
          alt="Close Menu"
        />
      </div>

      {/* Sidebar Links - Aligning to the left */}
      <div className="flex flex-col pt-16 pl-4 space-y-8">
        {/* Home */}
        <Link
          to="home"
          smooth={true}
          offset={-60}
          duration={500}
          className="text-white text-2xl font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(19,118,175)] hover:scale-105"
        >
          Home
        </Link>

        {/* About Me */}
        <Link
          to="aboutus"
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white text-2xl font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(19,118,175)] hover:scale-105"
        >
          About Me
        </Link>

        {/* Skills Section */}
        <div
          className="relative text-left"
          onClick={() => setIsSkillsOpen(!isSkillsOpen)} // Toggle Skills open/close
        >
          <div className="flex items-center space-x-2">
            <Link
              to="skills"
              smooth={true}
              offset={-80}
              duration={500}
              className="text-white text-2xl font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(19,118,175)] hover:scale-105"
            >
              Skills
            </Link>
            {/* Chevron Icon */}
            {isSkillsOpen ? (
              <FiChevronUp className="text-white text-xl transition-transform transform" />
            ) : (
              <FiChevronDown className="text-white text-xl transition-transform transform" />
            )}
          </div>

          {/* Skills Breadcrumb - Appears when Skills is open */}
          {isSkillsOpen && (
            <div className="mt-2 pl-4 space-y-2">
              <Link
                to="webskills"
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white text-xl cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(19,118,175)] hover:scale-105 bullet-link"
              >
                Web Development
              </Link>
              <br></br>
              <Link
                to="androidskills"
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white text-xl cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(19,118,175)] hover:scale-105 bullet-link"
              >
                Android Development
              </Link>
              <br></br>
              <Link
                to="tools"
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white text-xl cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(19,118,175)] hover:scale-105 bullet-link"
              >
                Tools & Technologies
              </Link>
            </div>
          )}
        </div>

        {/* Projects */}
        <Link
          to="latestwork"
          smooth={true}
          offset={-30}
          duration={500}
          className="text-white text-2xl font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(19,118,175)] hover:scale-105"
        >
          Projects
        </Link>

        {/* Contact */}
        <Link
          to="contact"
          smooth={true}
          offset={-30}
          duration={500}
          className="text-white text-2xl font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(19,118,175)] hover:scale-105"
        >
          Contact
        </Link>

        {/* CV Button */}
        <div className="pt-4">
          <button
            onClick={navigateCv}
            className="w-full py-2 px-4 bg-[rgb(19,118,175)] text-white rounded-full font-bold text-lg hover:bg-[rgb(15,90,135)] transition-all duration-300 ease-in-out"
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Footer - Aligned to the left */}
      <div className="absolute bottom-4 left-4 w-full text-left text-sm text-white">
        <p>© 2025 Your Portfolio</p>
      </div>
    </div>
  );
}

export default SideBar;
