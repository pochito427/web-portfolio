"use client";
import { useRef } from "react";

import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import SocialSection from "@/components/SocialSection";

export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <main id="main-content" tabIndex={-1}>
        <div id="home-section" ref={homeRef}>
          <PortfolioSection />
        </div>
        <div id="about-section" ref={aboutRef}>
          <AboutSection />
        </div>
        <div id="projects-section" ref={projectsRef}>
          <ProjectSection />
        </div>
        <div id="skills-section" ref={skillsRef}>
          <SkillSection />
        </div>
        <div id="contact-section" ref={contactRef}>
          <Footer />
          <SocialSection />
        </div>
      </main>
    </>
  );
}
