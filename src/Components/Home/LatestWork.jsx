import { SiTailwindcss, SiTypescript, SiLaravel, SiExpress, SiNodedotjs, SiOpenai, SiFirebase } from "react-icons/si";
import React, { useState, useEffect } from "react";
import { BiCircle, BiStar, BiVideo, BiCode, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { FaPhp, FaJava, FaReact, FaDatabase, FaJs, FaNodeJs } from "react-icons/fa";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/msis.png";
import project3 from "../../assets/ordering-system.jpg";
import project4 from "../../assets/balaga.jpg";
import project5 from "../../assets/herizon-ai.png";
import project6 from "../../assets/yofit-app.png";
import project7 from "../../assets/marketmate.png";
import comingSoon from "../../assets/coming-soon.gif";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function LatestWork() {
  const [modalVisible, setModalVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
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

  const handleOpenModal = (projectId) => {
    setExpandedProject(projectId);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setExpandedProject(null);
  };

  const toggleFeatures = (projectId) => {
    setExpandedProject((prev) => (prev === projectId ? null : projectId));
  };

  const projects = [
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
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
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
    },
    {
      id: 4,
      title: "Balaga Unit",
      description: "Apartment Management System.",
      img: project4,
      liveLink: "https://balaga-unit-iof9.vercel.app",
      repoLink: "#",
      features: [
        "Apartment listings",
        "Booking system",
        "Room CMS",
        "Integrated chat (Tenant and Landlord)",
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
      title: "Herizon AI",
      description: "AI content generation platform.",
      img: project5,
      liveLink: "https://herizon-six.vercel.app/",
      repoLink: "#",
      features: [
        "OpenAI API integration",
        "Content generation tools (Business)",
        "Response history"
      ],
      techStack: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "OpenAI", icon: <SiOpenai className="text-green-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
      ]
    },
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
        { name: "Android", icon: <FaJava className="text-green-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> }
      ]
    }
  ];

  return (
    <section id="latestwork" className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="text-center relative mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
            Latest Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works with modern technologies and clean designs
          </p>
          <BiStar className="animate-spin text-3xl absolute -top-7 right-1/2 text-cyan-400" />
        </div>

        <button
          onClick={navigateToProjects}
          className="absolute top-4 right-4 md:right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
        >
          View All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-gray-800 rounded-sm overflow-hidden shadow-2xl transition-all duration-300 ${
                project.techStack.some(tech => tech.name === "Android") 
                  ? "border-2 border-green-500 hover:shadow-green-500/20" 
                  : "hover:shadow-cyan-500/20"
              }`}
              data-aos="fade-up"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <div className="h-full w-full flex items-center justify-center p-4">
                  <img
                    className={`max-h-full max-w-full object-contain transition-transform duration-500 ${
                      hoveredProject === project.id ? "scale-105" : "scale-100"
                    }`}
                    src={project.img}
                    alt={project.title}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700 rounded-full hover:bg-cyan-600 transition-colors text-white"
                        title="Live Demo"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                    <button
                      onClick={() => handleOpenModal(project.id)}
                      className="p-2 bg-gray-700 rounded-full hover:bg-cyan-600 transition-colors text-white"
                      title="Video Demo"
                    >
                      <BiVideo />
                    </button>
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700 rounded-full hover:bg-cyan-600 transition-colors text-white"
                        title="Source Code"
                      >
                        <BiCode />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-200"
                      >
                        {tech.icon}
                        <span className="ml-1">{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => toggleFeatures(project.id)}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                  >
                    {expandedProject === project.id ? "Hide Features" : "Show Features"}
                    {expandedProject === project.id ? (
                      <BiChevronUp className="ml-1" />
                    ) : (
                      <BiChevronDown className="ml-1" />
                    )}
                  </button>

                  {expandedProject === project.id && (
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <BiCircle className="hidden md:block text-5xl animate-pulse absolute bottom-10 right-10 text-cyan-400/30" />
      <BiCircle className="hidden md:block text-4xl animate-pulse absolute bottom-16 right-10 text-cyan-400/20" />

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/90 z-50 backdrop-blur-sm">
          <div className="bg-gray-800 text-white text-center p-8 rounded-xl shadow-2xl max-w-md mx-4 border border-cyan-400/20">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
              Coming Soon!
            </h2>
            <p className="text-gray-300 mb-6">
              {projects.find(p => p.id === expandedProject)?.techStack.some(tech => tech.name === "Android")
                ? "Mobile app demo will be available soon!"
                : "Project demo will be available soon!"}
            </p>
            <img
              src={comingSoon}
              alt="Coming Soon"
              className="mx-auto w-48 h-48 object-contain mb-6"
            />
            <button
              onClick={closeModal}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default LatestWork;