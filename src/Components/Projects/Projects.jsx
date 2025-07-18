import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BiChevronLeft,
  BiCircle,
  BiStar,
  BiVideo,
  BiCode,
  BiChevronDown,
  BiChevronUp
} from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import {
  FaReact,
  FaJava,
  FaAndroid,
  FaDatabase,
  FaNodeJs,
  FaPhp
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiExpo, SiOpenai, SiLaravel, SiTypescript } from "react-icons/si";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/msis.png";
import project3 from "../../assets/ordering-system.jpg";
import project4 from "../../assets/bean-byte.png";
import balaga from "../../assets/balaga.jpg";
import project5 from "../../assets/herizon-ai.png";
import project6 from "../../assets/yofit-app.png";
import project7 from "../../assets/marketmate.png";
import comingSoon from "../../assets/coming-soon.gif";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const [modalVisible, setModalVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [showFeatures, setShowFeatures] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: false,
      offset: 100,
    });
  }, []);

  const projects = {
    web: [
      {
        id: 1,
        title: "Yokoks Gym",
        description: "Gym inventory and membership management system.",
        img: project1,
        liveLink: "https://lemonchiffon-ape-979463.hostingersite.com/p/L.php",
        repoLink: "#",
        features: [
          "Membership management system",
          "Equipment inventory tracking",
          "Responsive dashboard",
          "Payment processing",
          "Admin and Staff roles",
          "Expenses Tracking"
        ],
        techStack: [
          { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
          { name: "MySQL", icon: <FaDatabase className="text-blue-500" /> },
          { name: "JavaScript", icon: <FaDatabase className="text-yellow-400" /> },
          { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
        ]
      },
      {
        id: 2,
        title: "MSIS - Management",
        description: "Student requirements management system.",
        img: project2,
        liveLink: "https://msis-demo.scarlet2.io/login",
        repoLink: "#",
        features: [
          "File upload and organization",
          "Grade sheet management",
          "Announcement system",
          "Role-based access control",
          "Responsive design",
          "Academic Calendar",
          "Curriculum Management",
          "Accouncements", 
          "Real Time Notifications", 
          "AI Powered Assesment",
          "Alumni Archives",
          "Authentication and Authorization"
        ],
        techStack: [
          { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
          { name: "MySQL", icon: <FaDatabase className="text-blue-500" /> },
          { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
          { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
        ]
      },
      {
        id: 4,
        title: "Balaga Unit",
        description: "Apartment Management System.",
        img: balaga,
        liveLink: "https://balaga-unit-iof9.vercel.app",
        repoLink: "#",
        features: [
          "Apartment listings",
          "Booking system",
          "Room CMS",
          "Integrated chat (Tenant and Landlord) ",
          "User authentication",
          "Maintenace Requests",
          "Realtime Reminder Notifications (Via Email)",
          "Image gallery"
        ],
        techStack: [
          { name: "React", icon: <FaReact className="text-blue-400" /> },
          { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
          { name: "MySQL", icon: <FaDatabase className="text-blue-500" /> },
          { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
        ]
      },
      {
        id: 5,
        title: "Bean & Co.",
        description: "Coffee shop website. Online ordering and COD payment.",
        img: project4,
        liveLink: "https://bean-byte-sn7v.vercel.app/",
        repoLink: "#",
        features: [
          "Product listings & Inventory",
          "Online ordering",
          "Realtime Order Tracking",
          "COD payment",
          "Realtime Notifications (Via Email)"
        
        ],
            techStack: [
          { name: "React", icon: <FaReact className="text-blue-400" /> },
          { name: "OpenAI", icon: <SiOpenai className="text-green-500" /> },
          { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
          { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
        ]
      },
      {
        id: 5,
        title: "Herizon AI",
        description: "AI content generation platform.",
        img: project5,
        liveLink: "https://herizon-six.vercel.app/",
        repoLink: "#",
        features: [
          "OpenAI API integration",
          "Content generation tools (Business)",
          "Response history",
          ""
        ],
        techStack: [
          { name: "React", icon: <FaReact className="text-blue-400" /> },
          { name: "OpenAI", icon: <SiOpenai className="text-green-500" /> },
          { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
          { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
        ]
      }
    ],
    mobile: [
      {
        id: 6,
        title: "Yofit App",
        description: "Android fitness tracking application.",
        img: project6,
        liveLink: "#",
        repoLink: "#",
        features: [
          "Workout plans",
          "Exercise tracking",
          "Progress charts",
          "User profiles",
          "Firebase backend"
        ],
        techStack: [
          { name: "Android", icon: <FaAndroid className="text-green-500" /> },
          { name: "Java", icon: <FaJava className="text-red-500" /> },
          { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> }
        ]
      },
      {
        id: 7,
        title: "Market Mate",
        description: "E-commerce mobile app.",
        img: project7,
        liveLink: "#",
        repoLink: "#",
        features: [
          "Product listings",
          "Shopping cart",
          "Inventory management",
          "Order tracking",
          "Push notifications"
        ],
        techStack: [
          { name: "React Native", icon: <FaReact className="text-blue-400" /> },
          { name: "Expo", icon: <SiExpo className="text-gray-500" /> },
          { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> }
        ]
      }
    ],
    desktop: [
      {
        id: 3,
        title: "Ordering System",
        description: "Java-based ordering system.",
        img: project3,
        liveLink: "",
        repoLink: "#",
        features: [
          "Product catalog",
          "Order management",
          "Sales reporting",
          "Customer database",
          "Receipt generation"
        ],
        techStack: [
          { name: "Java", icon: <FaJava className="text-red-500" /> },
          { name: "Swing", icon: <BiCode className="text-gray-400" /> }
        ]
      }
    ]
  };

  const toggleFeatures = (projectId) => {
    setShowFeatures(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const handleOpenModal = (projectId) => {
    setExpandedProject(projectId);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setExpandedProject(null);
  };

  const renderProjectCard = (project) => (
    <div
      key={project.id}
      className={`h-auto w-96 sm:w-[48%] lg:h-auto m-auto rounded-sm flex flex-col lg:flex-row lg:pt-2 mb-8 ${
        project.techStack.some(tech => tech.name === "Android" || tech.name === "React Native") 
          ? "border-2 border-green-500" 
          : ""
      }`}
      data-aos="fade-up"
    >
      <a
        href={project.liveLink || "#"}
        className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={`h-[92%] w-full m-auto duration-300 rounded-sm ${
            project.techStack.some(tech => tech.name === "Android" || tech.name === "React Native") 
              ? "p-2" 
              : ""
          }`}
          src={project.img}
          alt={project.title}
        />
      </a>
      <div className="h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2 text-white">
        <h1 className="text-base font-semibold pb-1">{project.title}</h1>
        <p className="text-sm mb-2">{project.description}</p>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-200"
            >
              {tech.icon}
              <span className="ml-1">{tech.name}</span>
            </span>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-2">
          <button
            onClick={() => toggleFeatures(project.id)}
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
          >
            {showFeatures[project.id] ? "Hide Features" : "Show Features"}
            {showFeatures[project.id] ? (
              <BiChevronUp className="ml-1" />
            ) : (
              <BiChevronDown className="ml-1" />
            )}
          </button>
          {showFeatures[project.id] && (
            <ul className="mt-2 space-y-1 pl-4">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex justify-start items-center my-2">
          <button
            onClick={() => handleOpenModal(project.id)}
            className="btn h-8 w-24 flex items-center justify-center text-sm text-center border-2 hover:bg-black border-[rgb(19,118,175)] rounded-[6px] cursor-pointer mr-2"
          >
            <BiVideo className="w-5 h-5" />
          </button>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn h-8 w-24 flex items-center justify-center text-sm text-center border-2 hover:bg-black border-[rgb(19,118,175)] rounded-[6px] cursor-pointer mr-2"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn h-8 w-24 flex items-center justify-center text-sm text-center border-2 hover:bg-black border-[rgb(19,118,175)] rounded-[6px] cursor-pointer mr-2"
            >
              <BiCode className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div id="projects" className="relative m-auto mt-[-30px] mb-2 ">
      <div className="text-center relative mb-6">
        <h1 className="text-3xl md:text-5xl font-semibold py-7 text-white">
          My Projects
        </h1>
        <BiStar className="animate-spin text-2xl absolute top-0 left-1/2 transform -translate-x-1/2 text-white" />
      </div>

      {/* Back Button */}
      <div className="absolute top-[100px] left-5">
        <Link
          to="/"
          className="bg-blue-500 mt-70 text-white px-4 p-[40px] py-2 rounded-lg shadow-md hover:bg-blue-600 flex items-center"
        >
          <BiChevronLeft className="mr-2 text-lg" />
          Back
        </Link>
      </div>

      {/* Web Projects Section */}
      <div className="min-h-96 mt-[50px] w-full xl:w-11/12 m-auto">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-cyan-500 pb-2">
          Web Applications
        </h2>
        <div className="flex flex-wrap justify-between items-start">
          {projects.web.map(renderProjectCard)}
        </div>
      </div>

      {/* Mobile Apps Section */}
      <div className="min-h-96 mt-12 w-full xl:w-11/12 m-auto">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-green-500 pb-2">
          Mobile Applications
        </h2>
        <div className="flex flex-wrap justify-between items-start">
          {projects.mobile.map(renderProjectCard)}
        </div>
      </div>

      {/* Desktop Applications Section */}
      <div className="min-h-96 mt-12 w-full xl:w-11/12 m-auto">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-blue-500 pb-2">
          Desktop Applications
        </h2>
        <div className="flex flex-wrap justify-between items-start">
          {projects.desktop.map(renderProjectCard)}
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
          <div className="bg-white text-black text-center p-6 sm:p-8 rounded-lg shadow-2xl max-w-xs sm:max-w-md w-full mx-4 sm:mx-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              {projects.web.concat(projects.mobile, projects.desktop).find(p => p.id === expandedProject)?.techStack.some(tech => tech.name === "Android" || tech.name === "React Native")
                ? "Mobile app demo will be available soon!"
                : "Project demo will be available soon!"}
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

      {/* Decorative Circles */}
      <BiCircle className="text-5xl animate-pulse absolute bottom-0 right-10 text-white" />
      <BiCircle className="text-4xl animate-pulse absolute bottom-6 right-10 text-white" />
    </div>
  );
}

export default Projects;