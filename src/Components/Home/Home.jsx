import React, { useEffect } from "react";
import Footer from "../Footer";
import Hero from "./Hero";
import LatestWork from "./LatestWork";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
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
    <div className="fullbackgroundcolor px-4 xl:px-12 relative">
      <section id="home">
        <Hero />
      </section>
      <section id="aboutus">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="latestwork">
        <LatestWork />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
