"use client";
import Navbar from "@/components/Navbar";"../components/Navbar";
import "../styles/styles.css";
import React from "react";
import { ReactTyped }  from "react-typed";


const TypewriterEffect = () => {
  return (
    <div>
      <h2>
        <ReactTyped
          strings={[
            "Fullstack Developer",
            "crazy fuck",
            "Web Developer",
            "Tech Enthusiast",
          ]}
          typeSpeed={100}
          backSpeed={50}
          backDelay={1000}
          startDelay={1000}
          loop={true}
        />
      </h2>
    </div>
  );
}



export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home" className="section">
        <h1>Hello! I'm Magne.</h1>
        <h2>I am a...</h2>

        <TypewriterEffect />
        
        </section>
      <section id="about" className="section">
        <h1>About Me</h1>
        <p>Information about the portfolio or yourself</p>
      </section>

      <section id="projects" className="section">
        <h1>Projects</h1>
        <p>Details about the services offered</p>
      </section>

      <section id="contact" className="section">
        <h1>Contact Section</h1>
        <p>Contact details or form</p>
      </section>
    </div>
  );
}

