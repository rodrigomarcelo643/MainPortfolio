import React, { useEffect } from "react";
import Footer from "../Footer";
import Hero from "./Hero";
import LatestWork from "./LatestWork";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
import Tools from "./Tools"
import { useState } from "react";

function Home({ setHeaderValue }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    // Create an IntersectionObserver to track section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update the active section when the section is visible
            setActiveSection(entry.target.id);
            setHeaderValue(entry.target.id); // Update the header state as well
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section)); // Start observing each section

    return () => observer.disconnect(); // Cleanup observer when component unmounts
  }, [setHeaderValue]);

  return (
    <div className="fullbackgroundcolor  relative">
      <section className="px-4 xl:px-12" id="home">
        <Hero />
      </section>
      <section className="px-4 xl:px-12"  id="aboutus">
        <About />
      </section>
        <section className="px-0 xl:px-0"  id="tools">
        <Tools />
      </section>
      <section className="px-4 xl:px-12" id="skills">
        <Skills />
      </section>
      <section className="px-4 xl:px-12"  id="latestwork">
        <LatestWork />
      </section>

      <section  className="px-4 xl:px-12" id="contact">
        <Contact />
      </section>
      <Footer className="px-4 xl:px-12"  />
    </div>
  );
}

export default Home;
