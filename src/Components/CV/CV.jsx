import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import { HiChevronLeft } from "react-icons/hi";

const CVTop = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="CV-content py-[0.5cm] px-[1.5cm] w-[210mm] min-h-[297mm] max-w-4xl mx-auto font-sans text-[12px] leading-tight bg-white text-gray-800"
  >
    <h1 className="text-center text-2xl font-bold mb-2 text-gray-900">
      MARCELO G. RODRIGO
    </h1>
    <p className="text-center text-xs mb-4 text-gray-600">
      <span>Email:</span> <strong>rodrigomarcelo643@gmail.com</strong> |{" "}
      <span>Phone:</span> <strong>09533341454</strong>
      <br />
      <span>LinkedIn:</span>{" "}
      <a
        href="https://www.linkedin.com/in/marcelo-rodrigo-205100295/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600"
      >
        linkedin.com/in/marcelo-rodrigo
      </a>{" "}
      | <span>GitHub:</span>{" "}
      <a
        href="https://github.com/rodrigomarcelo643"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600"
      >
        github.com/rodrigomarcelo643
      </a>
    </p>

    <h2 className="text-lg font-semibold my-4 pb-2 text-gray-800 border-b-2 border-gray-300 uppercase">
      Professional Summary
    </h2>
<p className="mb-4 text-[13px] text-justify text-gray-700">
  Third-year BSIT student at Southwestern University PHINMA with 1+ years of freelance full-stack experience. 
  Skilled in React, Node.js, PHP/Laravel for web development and Java/Kotlin for Android apps. Passionate about 
  building user-centric applications and continuous learning. Team player with both academic and client project experience.
</p>

    <h2 className="text-lg font-semibold my-4 pb-2 text-gray-800 border-b-2 border-gray-300 uppercase">
      Technical Skills
    </h2>
    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-3">
      <div>
        <p><strong>Frontend:</strong> React, TypeScript, Tailwind CSS</p>
      </div>
      <div>
        <p><strong>Backend:</strong> Node.js, Express, PHP, Laravel</p>
      </div>
      <div>
        <p><strong>Mobile:</strong> Android (Java/Kotlin), React Native</p>
      </div>
      <div>
        <p><strong>Database:</strong> MySQL, Firebase, MongoDB</p>
      </div>
      <div>
        <p><strong>Tools:</strong> Git, VS Code, Postman</p>
      </div>
      <div>
        <p><strong>Methodologies:</strong> Agile, REST APIs</p>
      </div>
    </div>

    <h2 className="text-lg font-semibold my-4 pb-2 text-gray-800 border-b-2 border-gray-300 uppercase">
      Professional Experience
    </h2>

    {/* Freelance Developer */}
    <div className="mb-4">
      <div className="flex justify-between">
        <p><strong>Freelance Full-Stack Developer</strong></p>
        <p className="text-gray-600">Dec 2023 – Present</p>
      </div>
      <ul className="list-disc pl-5 mt-1 space-y-1">
        <li>Designed and developed 3+ full-stack applications using modern web technologies</li>
        <li>Improved user experience by creating responsive UIs that increased client conversion rates by 30%</li>
        <li>Collaborated with clients to translate business requirements into technical solutions</li>
      </ul>
    </div>

    {/* Working Scholar */}
    <div className="mb-4">
      <div className="flex justify-between">
        <p><strong>Working Scholar – Southwestern University PHINMA</strong></p>
        <p className="text-gray-600">July 2023 – Present</p>
      </div>
      <ul className="list-disc pl-5 mt-1 space-y-1">
        <li>Streamlined document processing and student service coordination for administrative offices</li>
        <li>Demonstrated strong time management and professionalism in fast-paced academic environment</li>
      </ul>
    </div>

    <h2 className="text-lg font-semibold my-4 pb-2 text-gray-800 border-b-2 border-gray-300 uppercase">
      Education
    </h2>
    <div className="mb-4">
      <div className="flex justify-between">
        <p>
          <strong>BS in Information Technology (BSIT)</strong>
          <br />
          Southwestern University PHINMA | Expected Graduation: 2027
        </p>
      </div>
    </div>

    <h2 className="text-lg font-semibold my-4 pb-2 text-gray-800 border-b-2 border-gray-300 uppercase">
      Projects
    </h2>
    <ul className="list-disc pl-5 mb-3 space-y-3">
      <li>
        <strong>Balaga Unit:</strong> Designed and implemented an apartment management system with React, 
        Node.js, and MySQL featuring booking system, payment processing, and real-time chat (2024)
      </li>
      <li>
        <strong>MSIS:</strong> Developed comprehensive student records system using Laravel, TypeScript, 
        and MySQL with secure admin/student portals (2025)
      </li>
      <li>
        <strong>Yokoks Gym:</strong> Built gym management system with PHP and Tailwind CSS featuring 
        member tracking and inventory management modules (2024)
      </li>
    </ul>

    <h2 className="text-lg font-semibold my-4 pb-2 text-gray-800 border-b-2 border-gray-300 uppercase">
      Hackathons & Achievements
    </h2>
    <ul className="list-disc pl-5 mb-3 space-y-1">
      <li><strong>SWU Mini-Hackathon 2024:</strong> Designed and prototyped a school learning management system</li>
      <li><strong>Can You HackIT 2025:</strong> Created Herizon AI, an business educational AI assistant platform</li>
      <li><strong>Dean's Lister:</strong> Achieved academic honors </li>
    </ul>

    <h2 className="text-lg font-semibold my-4 pb-2 text-gray-800 border-b-2 border-gray-300 uppercase">
      Languages
    </h2>
    <ul className="list-disc pl-5 space-y-1">
      <li><strong>English:</strong> Professional working proficiency</li>
      <li><strong>Bisaya:</strong> Native proficiency</li>
      <li><strong>Tagalog:</strong> Basic communication</li>
    </ul>
  </div>
));

const CV = () => {
  const componentRef = useRef();

  const handleDownloadPDF = () => {
    const element = componentRef.current;
    const options = {
      filename: "Marcelo_Rodrigo_CV.pdf",
      html2canvas: { 
        scale: 2,
        letterRendering: true,
        useCORS: true
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        margin: [10, 10, 10, 10]
      }
    };
    html2pdf().from(element).set(options).save();
  };

  const goBackToPortfolio = () => {
    window.location.href = "/";
  };

  return (
    <div className="m-4">
      <div className="flex justify-between mb-4">
        <button
          onClick={goBackToPortfolio}
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md flex items-center gap-1 hover:bg-blue-50 transition-colors"
        >
          <HiChevronLeft /> Back
        </button>
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Download PDF CV
        </button>
      </div>
      <CVTop ref={componentRef} />
    </div>
  );
};

export default CV;