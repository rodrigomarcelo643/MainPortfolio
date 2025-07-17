import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaBootstrap,
  FaAndroid,
  FaServer,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";

const ToolsMarquee = () => {
  const tools = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaCode className="text-yellow-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-700" /> },
    { name: "Java", icon: <FaJava className="text-red-400" /> },
    { name: "Android", icon: <FaAndroid className="text-green-500" /> },
    { name: "MySQL", icon: <FaDatabase className="text-blue-700" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "REST APIs", icon: <FaServer className="text-indigo-500" /> },
    { name: "Agile", icon: <FaProjectDiagram className="text-green-600" /> },
  ];

  // Double the array for seamless looping
  const marqueeItems = [...tools, ...tools];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const reverseMarqueeVariants = {
    animate: {
      x: ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className=" py-7 overflow-hidden bg-transparent">
      <h2 className="text-center text-5xl font-bold mb-8 text-white">
        My <span className="text-blue-600">Tools & Technologies</span>
      </h2>

      {/* First Marquee */}
      <div className="relative mb-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {marqueeItems.map((tool, index) => (
            <motion.div
              key={`${tool.name}-${index}`}
              className="mx-4 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center space-x-2 shadow-sm hover:shadow-md transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl">{tool.icon}</span>
              <span className="text-sm font-medium text-gray-700">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second Marquee (Reverse) */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          variants={reverseMarqueeVariants}
          animate="animate"
        >
          {marqueeItems.reverse().map((tool, index) => (
            <motion.div
              key={`${tool.name}-${index}-reverse`}
              className="mx-4 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center space-x-2 shadow-sm hover:shadow-md transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl">{tool.icon}</span>
              <span className="text-sm font-medium text-gray-700">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsMarquee;