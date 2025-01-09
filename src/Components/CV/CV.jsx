import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import { HiChevronLeft } from "react-icons/hi"; // Importing Chevron icon

const CVTop = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="CV-content p-6 font-sans leading-relaxed max-w-4xl mx-auto bg-white text-black shadow-lg border border-gray-200 rounded-lg"
  >
    <h1 className="text-center text-4xl font-bold mb-4 text-gray-900">
      Marcelo G. Rodrigo
    </h1>
    <p className="text-center text-sm mb-8 text-gray-600">
      <span>Email:</span> <strong>rodrigomarcelo643@gmail.com</strong> |{" "}
      <span>Phone:</span> <strong>09533341454</strong>
      <br />
      <span>LinkedIn:</span>{" "}
      <a
        href="https://www.linkedin.com/in/marcelo-rodrigo-205100295/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        https://www.linkedin.com/in/marcelo-rodrigo-205100295/
      </a>{" "}
      | <span>GitHub:</span>{" "}
      <a
        href="https://github.com/rodrigomarcelo643"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        https://github.com/rodrigomarcelo643
      </a>
    </p>

    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
      Professional Summary
    </h2>
    <hr className="border-t-1 border-gray-500 mb-2" />
    <p className="mb-4 text-sm text-gray-700">
      Motivated second-year BSIT student at Southwestern University Phinma,
      skilled in React.js, PHP, Node.js, and Android development with Java and
      Kotlin. Passionate about creating dynamic, responsive web and mobile apps,
      with a focus on continuous learning and team collaboration.
    </p>

    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h2>
    <hr className="border-t-1 border-gray-500 mb-2" />
    <ul className="list-disc pl-5 mb-4 text-sm text-gray-700">
      <li>
        <strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js
      </li>
      <li>
        <strong>Backend:</strong> PHP, Node.js, RESTful APIs
      </li>
      <li>
        <strong>Database:</strong> MySQL, Firebase
      </li>
      <li>
        <strong>Tools:</strong> Git, Github, VS Code, Postman
      </li>
      <li>
        <strong>Android Development:</strong> Java, Kotlin, Android Studio
      </li>
      <li>
        <strong>Other:</strong> Problem-solving, Agile Methodology
      </li>
    </ul>

    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Education</h2>
    <hr className="border-t-1 border-gray-500 mb-2" />
    <div className="mb-4 text-sm text-gray-700">
      <p>
        <strong>BS in Information Technology (BSIT)</strong>
        <br />
        Southwestern University –Phinma
        <br />
      </p>
      <p className="mt-4">
        <strong>High School Diploma</strong>
        <br />
        Caliongan National High School - Cebu, Philippines
        <br />
        <em>Graduation: SY 2023-2024</em>
      </p>
    </div>

    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Projects</h2>
    <hr className="border-t-1 border-gray-500 mb-2" />
    <ul className="list-disc pl-5 mb-6 text-sm text-gray-700">
      <li>
        <strong>Balaga Unit (Ongoing):</strong> A responsive app built with
        React.js and Tailwind CSS for apartment booking and tenant-landlord
        chat.
      </li>
      <li>
        <strong>Yokoks Gym:</strong> Gym management system using PHP, Tailwind
        CSS, and Context API for inventory and membership management.
      </li>
      <li>
        <strong>MSIS:</strong> System for managing student records, with file
        uploads, grade sheets, and announcements.
      </li>
      <li>
        <strong>Ordering System:</strong> Java-based system for order placements
        and admin management with a user-friendly GUI.
      </li>
    </ul>

    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Languages</h2>
    <hr className="border-t-1 border-gray-500 mb-2" />
    <ul className="list-disc pl-5 mb-4 text-sm text-gray-700">
      <li>
        <strong>Bisaya:</strong> Fluent
      </li>
      <li>
        <strong>English:</strong> Proficient
      </li>
      <li>
        <strong>Tagalog:</strong> Basic
      </li>
    </ul>
  </div>
));

const CV = () => {
  const componentRef = useRef();

  const handleDownloadPDF = () => {
    const element = componentRef.current;
    const options = {
      filename: "Marcelo_G_Rodrigo_CV.pdf",
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "in",
        format: "letter",
        orientation: "portrait",
        margin: [0.5, 0.5, 0.5, 0.5],
      },
    };
    html2pdf().from(element).set(options).save();
  };

  const goBackToPortfolio = () => {
    window.location.href = "/";
  };

  return (
    <div className="m-4 mt-[-40px]">
      <div className="flex justify-between mb-4">
        <button
          onClick={goBackToPortfolio}
          className="px-5 py-2  border-2  border-[rgb(19,118,175)] hover:bg-gray-200  hover:text-black text-md font-medium rounded-full flex items-center gap-2 text-white  transition-all"
        >
          <HiChevronLeft className="text-xl" /> Back
        </button>
        <button
          onClick={handleDownloadPDF}
          className="px-5 py-2 bg-blue-600 text-white text-md font-medium rounded-full hover:bg-blue-700 transition-all"
        >
          Download CV as PDF
        </button>
      </div>
      <CVTop ref={componentRef} />
    </div>
  );
};

export default CV;
