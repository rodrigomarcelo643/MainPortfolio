import React from "react";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { toast } from "react-toastify";
import { BiCircle, BiCross } from "react-icons/bi";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

// Initialize AOS
AOS.init();

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "08f8765f-73dd-4744-bbd5-6acfca14dee3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully", {
        pauseOnHover: false,
        theme: "dark",
      });
    }
  };

  return (
    <div id="contact" className="mt-20 relative overflow-hidden">
      <div className="h-full w-full text-center">
        <h1
          className="text-3xl md:text-5xl font-semibold py-7"
          data-aos="fade-up" // Fade in animation for the title
          data-aos-delay="200"
        >
          Get in Touch
        </h1>
      </div>

      {/* Animated Circles */}
      <BiCircle
        className="text-5xl animate-pulse absolute bottom-1 left-0 sm:bottom-24 sm:left-10"
        data-aos="fade-up" // Animation for circles
        data-aos-delay="400"
      />
      <BiCircle
        className="text-4xl animate-pulse absolute bottom-0 left-6 sm:bottom-20 sm:left-14"
        data-aos="fade-up" // Animation for circles
        data-aos-delay="500"
      />
      <BiCross
        className="text-xl animate-spin absolute right-10"
        data-aos="fade-left" // Animation for crosses
        data-aos-delay="600"
      />
      <BiCross
        className="text-4xl animate-spin absolute right-10 bottom-2"
        data-aos="fade-left" // Animation for crosses
        data-aos-delay="700"
      />

      <div className="flex flex-col sm:flex-row justify-between md:px-10">
        {/* Left Section */}
        <div
          className="sm:w-3/5 lg:w-1/2 sm:pt-8 text-center sm:text-start"
          data-aos="fade-right" // Right animation for the left section
          data-aos-delay="600"
        >
          <p className="text-sm sm:text-base sm:w-11/12 lg:w-3/4 pb-10 sm:py-4">
            <span className="font-bold text-lg">Greetings,</span>
            <br />
            Thank you for taking the time to visit my portfolio. I appreciate
            your interest, and I welcome the opportunity to hear your thoughts.
            Please feel free to reach out with any inquiries or feedback you may
            have.
            <br />
            <span className="text-lg sm:text-xl font-bold">
              I look forward to connecting with you.
            </span>
          </p>

          {/* Contact Info */}
          <div className="flex justify-start mb-4 sm:my-4">
            <img
              src={mail_icon}
              alt="mail"
              className="h-3 w-10 mt-1 cursor-pointer"
              data-aos="fade-left" // Animation for mail icon
              data-aos-delay="400"
            />
            <p
              className="sm:px-2 text-sm cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              rodrigomarcelo643@gmail.com
            </p>
          </div>
          <div className="flex justify-start my-2 sm:my-4">
            <img
              src={call_icon}
              alt="call"
              className="h-4 w-10 mt-1 cursor-pointer"
              data-aos="fade-left" // Animation for call icon
              data-aos-delay="600"
            />
            <p
              className="sm:px-2 text-sm cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              09533341454
            </p>
          </div>
          <div className="flex justify-start sm:my-4">
            <img
              src={location_icon}
              alt="location"
              className="h-4 w-10 mt-1 cursor-pointer"
              data-aos="fade-left" // Animation for location icon
              data-aos-delay="600"
            />
            <p
              className="sm:px-2 text-sm cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Caliongan, Dalaguete , Cebu
            </p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form
          onSubmit={onSubmit}
          className="sm:w-2/5 lg:w-1/2 mt-10 sm:mt-0"
          data-aos="fade-left" // Left animation for the form section
          data-aos-delay="600"
        >
          <div className="flex flex-col">
            <label htmlFor="" className="sm:py-4 text-base">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="h-10 w-full lg:w-4/5 bg-gray-900 pl-3 text-sm border-none outline-none text-white rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="pt-4 text-base sm:pb-2">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="h-10 w-full lg:w-4/5 bg-gray-900 pl-3 text-sm border-none outline-none text-white rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="pt-4 text-base sm:pb-2">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="h-48 md:h-52 w-full lg:w-4/5 pt-4 bg-gray-900 pl-3 text-sm border-none outline-none text-white rounded overflow-hidden"
            />
          </div>
          <div className="my-4 sm:my-8">
            <button
              className="btn h-10 w-36 bg-[rgb(19,118,175)] rounded-md font-semibold mb-10 text-base"
              type="submit"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
