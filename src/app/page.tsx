import Image from "next/image";
import styles from "./page.module.css";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import SocialSection from "@/components/SocialSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <PortfolioSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <Footer />
      <SocialSection />
    </div>
  );
}
