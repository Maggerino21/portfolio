"use client";
import Navbar from "@/components/Navbar";"../components/Navbar";
import '../styles/globals.css'
import React from "react";
import { ReactTyped }  from "react-typed";
import Link from 'next/link';
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";



const TypewriterEffect = () => {
  return (
    <div>
      <h2>
        <ReactTyped
          strings={[
            "Full stack developer",
            "Machine Learning noob",
            "Design enthusiast",
            "Tech Enthusiast",
          ]}
          typeSpeed={100}
          backSpeed={50}
          backDelay={1000}
          startDelay={1000}
          loop={true}
          className="typed-text"
          style={{
            color: 'lightgray',
          }}
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

        <div className="el"></div>
        
          <h4>
            Hello! I'm Magne. I am a...
          </h4>

        <TypewriterEffect />

        <div className="link-container">
          <Link href="#about" className="font-mono text-gray-400 hover:text-gray-200 transition-colors duration-300">
          learn more about me
          </Link>
        </div>

        
        </section>
      <section id="about">
        <AboutSection />
        </section>

      <section id="projects" className="section">
        <h1>Projects</h1>
        <p>Details about the services offered</p>
      </section>

      <section id="contact" className="section">
        <ContactSection />
      </section>
    </div>
  );
}



