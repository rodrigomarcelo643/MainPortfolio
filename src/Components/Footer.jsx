import React from "react";
import usericon from "../assets/user_icon.svg";
import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoFacebook, // Added Facebook icon
} from "react-icons/bi";
import { Link } from "react-scroll";
import "aos/dist/aos.css";

function Footer() {
  return (
    <>
      <div
        className="w-full m-auto my-10 md:my-0 md:px-8"
        data-aos="fade-up" // Fade up animation for the top section
        data-aos-delay="200"
      >
        {/* Upper Side */}
        <div className="w-full m-auto flex flex-col md:flex-row justify-between items-center pb-4 md:pb-0  border-2 border-transparent border-b-white ">
          <div className="w-full md:w-1/2">
            <p className="pb-4 text-base">
              "Get in touch for web development insights and projects. Connect
              with me through social media for updates."
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-start md:justify-end ">
            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/marcelo-rodrigo-205100295/"
                className="text-xl"
              >
                <BiLogoLinkedin />
              </a>
              <a
                href="https://github.com/rodrigomarcelo643"
                className="text-xl"
              >
                <BiLogoGithub />
              </a>
              <a
                href="https://www.instagram.com/yourusername"
                className="text-xl"
              >
                <BiLogoInstagram />
              </a>
              <a
                href="https://www.instagram.com/rodrigomarcelo643/#"
                className="text-xl"
              >
                <BiLogoFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Lower Side */}
        <div className="w-full sm:text-base flex flex-col md:flex-row mt-4">
          <div className="w-full md:w-1/4 pb-2 sm:pb-0 m-auto md:ml-0 mt-0 flex md:justify-start items-start">
            {/* Social Links in footer */}
          </div>
          <div className="w-full md:w-3/4 flex flex-row justify-start md:justify-between lg:justify-end text-start pt-2 md:pt-0 md:pl-4 lg:pl-10 ">
            <li className="list-none text-gray-300 pb-3 md:pb-5 md:pl-7">
              Terms of Services
            </li>
            <li className="list-none text-gray-300 pb-3 md:pb-5 pl-7">
              Privacy Policy
            </li>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="list-none text-gray-300 pb-3 md:pb-5 pl-7 cursor-pointer"
            >
              Contact With me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
