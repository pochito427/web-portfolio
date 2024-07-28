"use client";
import { useRef } from "react";

import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import SocialSection from "@/components/SocialSection";

import styles from "./page.module.css";

export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null); 
  const aboutRef = useRef<HTMLDivElement | null>(null); 
  const projectsRef = useRef<HTMLDivElement | null>(null); 
  const skillsRef = useRef<HTMLDivElement | null>(null); 
  const contactRef = useRef<HTMLDivElement | null>(null); 
  return (
    <div>
      <Navbar 
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef} id="home-section">
        <PortfolioSection />
      </div>
      <div ref={aboutRef} id="about-section">
        <AboutSection />
      </div>
      <div ref={projectsRef} id="projects-section">
        <ProjectSection />
      </div>
      <div ref={skillsRef} id="skills-section">
        <SkillSection />
      </div>
      <div ref={contactRef} id="contact-section">
        <Footer />
      </div>
      <SocialSection />
    </div>
  );
}
