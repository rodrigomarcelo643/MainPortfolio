import React, { useEffect } from "react";
import { BiArrowBack, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import arrowicon from "../../assets/arrow_icon.svg";
import mailicon from "../../assets/mail_icon.svg";
import { Link } from "react-scroll";
import profile from "../../assets/profileImage2.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animation happens only once when the element is visible
    });
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col-reverse lg:flex-row justify-around items-center pt-0 sm:pt-10 lg:py-36"
    >
      {/* Left side */}
      <div
        className="w-full lg:w-1/2 xl:w-2/5 text-center lg:text-start"
        data-aos="fade-up"
      >
        <h1 className="w-[95%] text-3xl sm:text-3xl md:text-4xl font-bold mb-6 ">
          I'm<span className="textcolor "> Marcelo Rodrigo,</span> <br />{" "}
          <span className="text-4xl mt-2 " style={{ whiteSpace: "nowrap" }}>
            Android and Web Developer
          </span>
        </h1>
        <p className="text-sm md:w-10/12 m-auto lg:w-auto text-gray-400">
          I am fueled by a deep passion for innovation and problem-solving,
          constantly seeking opportunities to grow and make a meaningful impact.
          With an unwavering commitment to excellence, I thrive on building
          creative solutions and embracing challenges that drive progress. My
          eagerness to learn, adapt, and contribute to success defines who I am
          and pushes me to exceed expectations in everything I do.
        </p>

        {/* LinkedIn & Github logo */}
        <div className="w-full flex justify-center lg:justify-start items-center mt-4">
          <a
            href="https://www.linkedin.com/in/marcelo-rodrigo-205100295/"
            target="_blank"
          >
            <BiLogoLinkedin className="text-2xl" />
          </a>
          <a href="https://github.com/rodrigomarcelo643" target="_blank">
            <BiLogoGithub className="text-2xl mx-2" />
          </a>
        </div>

        {/* Contact me button */}
        <div className="w-full">
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn h-10 w-36 mt-5 m-auto lg:ml-0 rounded-md flex justify-center items-center text-base font-semibold bg-[rgb(19,118,175)] text-white cursor-pointer"
          >
            Contact Me
            <BiArrowBack className="text-xl font-bold ml-2" />{" "}
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="h-full w-full sm:w-2/3 lg:w-1/2 flex justify-between sm:mb-4 lg:mb-0">
        <div
          className="h-0 w-0 sm:h-72 sm:w-20 lg:h-96 relative"
          data-aos="fade-left"
        >
          <img
            className="h-0 w-0 sm:h-10 sm:w-20 absolute top-0 "
            src={arrowicon}
            alt=""
          />
          <img
            className="h-0 w-0 sm:h-10 sm:w-20 absolute bottom-20 "
            src={mailicon}
            alt=""
          />
        </div>
        <div
          className="h-72 lg:h-96 w-[77%] relative flex justify-center items-center"
          data-aos="zoom-in"
        >
          <img
            className="h-64 w-64 sm:h-72 lg:h-80 sm:w-72 lg:w-80 absolute lg:bottom-16 rounded-full  bg-gray-400 border-none outline-none"
            src={profile}
            alt=""
          />
        </div>
        <div
          className="h-0 w-0 sm:h-72 sm:w-20 lg:h-96 relative"
          data-aos="fade-right"
        >
          <img
            className="h-0 w-0 sm:h-10 sm:w-20 absolute top-4 right-10 "
            src={mailicon}
            alt=""
          />
          <img
            className="h-0 w-0 sm:h-10 sm:w-20 absolute -bottom-4 right-20 "
            src={arrowicon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
