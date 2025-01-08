import React, { useState, useEffect } from "react";
import { BiCircle, BiStar } from "react-icons/bi";
import project1 from "../../assets/youtubeClone.png";
import project2 from "../../assets/Expense-Tracker.png";
import project3 from "../../assets/currencyConvertor.png";
import project4 from "../../assets/Portfolio.png";
import comingSoon from "../../assets/coming-soon.gif";
import AOS from "aos";
import "aos/dist/aos.css";

function LatestWork() {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-out", // Easing for smooth animation
      once: false, // Trigger animation every time the element comes into view
      offset: 100, // Offset to start animation a bit earlier
    });
  }, []);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div id="latestwork" className="relative m-auto mt-10 mb-2  rounded-lg">
      <div className="m-auto text-center relative">
        <h1 className="text-3xl md:text-5xl font-semibold py-7 text-white">
          Latest Work
        </h1>
        <BiStar className="animate-spin text-2xl absolute bottom-0 text-white" />
      </div>
      <BiCircle className="text-5xl animate-pulse absolute bottom-0 right-10 text-white" />
      <BiCircle className="text-4xl animate-pulse absolute bottom-6 right-10 text-white" />

      <div className="min-h-96 w-full xl:w-11/12 m-auto flex flex-wrap justify-between items-start">
        {/* First box */}
        <div
          className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-16 sm:mb-4"
          data-aos="fade-up" // Animation effect: fade-up
        >
          <a
            href="https://lucky-you-tube-clone.netlify.app/"
            className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto"
          >
            <img
              className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg"
              src={project1}
              alt="YouTube Clone"
            />
          </a>
          <div className="h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2 text-white">
            <h1 className="text-base font-semibold pb-1">You Tube Clone</h1>
            <p>
              This project is a YouTube clone built using React.js, Tailwind
              CSS, and Context API for efficient state management. It features a
              sleek, user-friendly, and fully responsive design.
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                onClick={handleOpenModal}
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-[rgb(19,118,175)]  rounded-full cursor-pointer"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Second box */}
        <div
          className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4"
          data-aos="fade-up" // Animation effect: fade-up
        >
          <a
            href="https://expense-tracker-inreact.netlify.app/"
            className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto"
          >
            <img
              className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg"
              src={project2}
              alt="Expense Tracker"
            />
          </a>
          <div className="h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2 text-white">
            <h1 className="text-base font-semibold pb-1">Expense Tracker</h1>
            <p>
              This is a responsive Expense Tracker built with React.js and
              Tailwind CSS for easy expense management.
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                onClick={handleOpenModal}
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-[rgb(19,118,175)]  rounded-full cursor-pointer"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Third box */}
        <div
          className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4"
          data-aos="fade-up" // Animation effect: fade-up
        >
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img
              className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg"
              src={project4}
              alt="Portfolio Website"
            />
          </a>
          <div className="h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2 text-white">
            <h1 className="text-base font-semibold pb-1">Portfolio Website</h1>
            <p>
              A fully responsive portfolio built with React.js and Tailwind CSS.
              Showcases my latest projects and includes a section highlighting
              my skills.
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                onClick={handleOpenModal}
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-[rgb(19,118,175)] rounded-full cursor-pointer"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Fourth box */}
        <div
          className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4"
          data-aos="fade-up" // Animation effect: fade-up
        >
          <a
            href="https://currencyconvertorrapp.netlify.app/"
            className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto"
          >
            <img
              className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg"
              src={project3}
              alt="Currency Converter"
            />
          </a>
          <div className="h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2 text-white">
            <h1 className="text-base font-semibold pb-1">Currency Convertor</h1>
            <p>
              This Currency Converter app is built using React.js and Tailwind
              CSS. It allows users to easily convert between different
              currencies with a responsive design.
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                onClick={handleOpenModal}
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-[rgb(19,118,175)]  rounded-full cursor-pointer"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
          <div className="bg-white text-black text-center p-6 sm:p-8 rounded-lg shadow-2xl max-w-xs sm:max-w-md w-full mx-4 sm:mx-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              Stay tuned for something amazing.
            </p>
            <img
              src={comingSoon}
              alt="Coming Soon"
              className="mx-auto w-24 h-24 sm:w-36 sm:h-36 object-contain mb-6"
            />
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-red-600 text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LatestWork;
