import React, { useState, useEffect } from "react";
import { BiCircle, BiStar, BiVideo } from "react-icons/bi";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/som.jpg";
import project3 from "../../assets/ordering-system.jpg";
import project4 from "../../assets/balaga.jpg";
import comingSoon from "../../assets/coming-soon.gif";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function LatestWork() {
  const [modalVisible, setModalVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate("/my-projects");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: false,
      offset: 100,
    });
  }, []);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleFeatures = (projectId) => {
    setExpandedProject((prev) => (prev === projectId ? null : projectId));
  };

  const projects = [
    {
      id: 1,
      title: "Yokoks Gym ",
      description:
        "Gym inventory and membership management system built with PHP, Tailwind CSS, and Context API, featuring an intuitive interface for managing equipment, memberships, and administrative tasks.",
      img: project1,
      liveLink: "https://lemonchiffon-ape-979463.hostingersite.com/p/L.php",
      features: [
        "Responsive design with Tailwind CSS.",
        "Member and equipment management using PHP.",
        "Real-time updates and search with JavaScript.",
        "Membership plans and payment tracking.",
        "Dark mode toggle for usability.",
      ],
    },
    {
      id: 2,
      title: "MSIS",
      description:
        "A responsive system for managing student requirements, including file uploads, folder organization for administrators, grade sheets, and announcement settings.",
      img: project2,
      liveLink: "",
      features: [
        "Real-time file upload and organization.",
        "Administrator tools for managing folders and grades.",
        "Student grade sheet integration.",
        "Announcement creation and management.",
        "Dark mode support.",
      ],
    },
    {
      id: 3,
      title: "Ordering System",
      description:
        "This project is a Java-based ordering system with a user-friendly GUI, enabling users to place orders and administrators to manage sales and customer information efficiently.",
      img: project3,
      liveLink: "",
      features: [
        "Responsive design with Tailwind CSS.",
        "API integration for fetching video content.",
        "Dynamic search functionality.",
        "Dark mode toggle.",
      ],
    },
    {
      id: 4,
      title: "Balaga Unit",
      description:
        "This is a responsive apartment booking application built with React.js and Tailwind CSS, featuring seamless apartment reservations and integrated chat functionality for communication between tenants and landlords.",
      img: project4,
      liveLink: "https://balaga-unit-iof9.vercel.app",
      features: [
        "Real-time data updates.",
        "Category-based expense tracking.",
        "Interactive charts for insights.",
        "Dark mode support.",
      ],
    },
  ];

  return (
    <div id="latestwork" className="relative m-auto mt-10 mb-2 rounded-lg">
      <div className="m-auto text-center relative">
        <h1 className="text-3xl md:text-5xl font-semibold py-7 text-white">
          Latest Projects
        </h1>
        <BiStar className="animate-spin text-2xl absolute bottom-0 text-white" />
      </div>

      <button
        onClick={navigateToProjects}
        className="absolute top-15 right-5 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 flex items-center"
      >
        View All Projects
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <BiCircle className="text-5xl animate-pulse absolute bottom-0 right-10 text-white" />
      <BiCircle className="text-4xl animate-pulse absolute bottom-6 right-10 text-white" />

      <div className="min-h-96 w-full xl:w-11/12 m-auto flex  mt-[56px] flex-wrap justify-between items-start">
        {projects.map((project) => (
          <div
            key={project.id}
            className="h-auto w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-16 sm:mb-4"
            data-aos="fade-up"
          >
            <a
              href={project.liveLink}
              className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project h-[92%] w-full m-auto duration-300 rounded-lg"
                src={project.img}
                alt={project.title}
              />
            </a>
            <div className="h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2 text-white">
              <h1 className="text-base font-semibold pb-1">{project.title}</h1>
              <p>{project.description}</p>
              <div className="flex justify-start items-center my-2">
                <button
                  onClick={handleOpenModal}
                  className="btn h-8 w-24 text-sm text-center border-2  border-[rgb(19,118,175)] hover:bg-black rounded-[6px] cursor-pointer mr-2 flex items-center justify-center"
                >
                  <BiVideo className="mr-2 w-5 h-5" />
                </button>
                <button className="btn h-8 w-32  text-sm text-center bg-[rgb(19,118,175)] rounded-[6px] cursor-pointer">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
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
