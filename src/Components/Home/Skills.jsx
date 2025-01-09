import React, { useState, useEffect } from "react";
import {
  BiCodeAlt,
  BiServer,
  BiAtom,
  BiLayer,
  BiGitBranch,
  BiLaptop,
} from "react-icons/bi";
import PrevIcon from "../../assets/prev.png";
import NextIcon from "../../assets/next.png";

function Skills() {
  const skills = [
    {
      Icon: BiCodeAlt,
      title: "Frontend Development",
      description:
        "Expert in building responsive, user-friendly interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
    },
    {
      Icon: BiServer,
      title: "Backend Development",
      description:
        "Proficient in server-side technologies like Node.js, Express.js, and database management with MongoDB and Firebase.",
    },
    {
      Icon: BiAtom,
      title: "State Management",
      description:
        "Experienced in managing complex states using Redux Toolkit, Context API, and React Query.",
    },
    {
      Icon: BiGitBranch,
      title: "Version Control",
      description:
        "Skilled in version control systems like Git and GitHub for efficient collaboration and code management.",
    },
    {
      Icon: BiLaptop,
      title: "Deployment",
      description:
        "Proficient in deploying web applications on platforms like Netlify, Vercel, and Firebase Hosting.",
    },
    {
      Icon: BiLayer,
      title: "UI/UX Design",
      description:
        "Focus on creating clean, modern, and intuitive user interfaces for a seamless user experience.",
    },
    {
      Icon: BiCodeAlt,
      title: "Testing & Debugging",
      description:
        "Experienced in testing frameworks like Jest, Mocha, and Cypress to ensure high-quality code and functionality.",
    },
    {
      Icon: BiServer,
      title: "API Development",
      description:
        "Proficient in RESTful API design and development, integrating third-party services for enhanced functionality.",
    },
    {
      Icon: BiGitBranch,
      title: "Continuous Integration",
      description:
        "Familiar with CI/CD pipelines using tools like Jenkins, GitHub Actions, and Docker for streamlined deployments.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(1);

  const updateCardsToShow = () => {
    if (window.innerWidth >= 1024) {
      setCardsToShow(3); // For larger screens, show 3 cards
    } else if (window.innerWidth >= 768) {
      setCardsToShow(2); // For medium screens, show 2 cards
    } else {
      setCardsToShow(1); // For smaller screens, show 1 card
    }
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const nextSkill = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === skills.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSkill = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - cardsToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isUserInteracting) {
      const interval = setInterval(() => {
        nextSkill();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isUserInteracting, currentIndex]);

  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    const timer = setTimeout(() => {
      setIsUserInteracting(false);
    }, 5000);
    return () => clearTimeout(timer);
  };

  return (
    <div
      id="skills"
      className="h-full w-full mt-20 md:mt-6 lg:mt-2 text-white"
      onMouseMove={handleUserInteraction}
      onTouchStart={handleUserInteraction}
    >
      <div className="relative">
        <h1 className="text-4xl md:text-6xl text-center mt-20 font-bold">
          Skills
        </h1>
      </div>

      <div className="relative w-full flex justify-center items-center my-10 overflow-hidden h-[400px]">
        {/* Previous Button */}
        <button
          onClick={prevSkill}
          className="absolute z-10 left-8 md:left-12 lg:left-16 text-lg md:text-2xl bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition flex items-center justify-center"
        >
          <img src={PrevIcon} className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Skills Container */}
        <div
          className="w-full max-w-screen-lg flex justify-center items-center space-x-6 h-full p-2 overflow-hidden rounded-2xl bg-gradient-to-r "
          style={{ scrollBehavior: "smooth" }}
        >
          {skills
            .slice(currentIndex, currentIndex + cardsToShow)
            .concat(
              skills.slice(
                0,
                Math.max(0, currentIndex + cardsToShow - skills.length)
              )
            )
            .map((skill, index) => (
              <SkillCard
                key={index}
                Icon={skill.Icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSkill}
          className="absolute right-8 md:right-12 lg:right-16 text-lg md:text-2xl bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition flex items-center justify-center"
        >
          <img src={NextIcon} className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {skills.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

const SkillCard = ({ Icon, title, description }) => (
  <div className="w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-96 cursor-pointer duration-300 rounded-xl shadow-xl shadow-gray-900 bg-gray-800 p-4 text-center flex flex-col justify-center items-center hover:bg-gray-700 hover:scale-105 transition-all">
    <Icon className="text-4xl md:text-5xl mb-4 text-blue-400" />
    <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
    <p className="text-xs sm:text-sm text-gray-400 mt-2">{description}</p>
  </div>
);

export default Skills;
