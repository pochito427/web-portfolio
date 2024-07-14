"use client";
import React, { useState } from "react";
import styles from '@/styles/Navbar.module.css';


const Navbar = ({
    homeRef,
    aboutRef,
    projectsRef,
    contactRef,
    skillsRef
}: {
    homeRef: React.RefObject<HTMLDivElement>
    aboutRef: React.RefObject<HTMLDivElement>
    projectsRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
    skillsRef: React.RefObject<HTMLDivElement>
}) => {

    const [navEnabled, setNavEnabled] = useState(false);

    const handleNavBarClick = () => {
        setNavEnabled(!navEnabled)
    }

    const handleButtonClick = (section: any) => {
        console.log(section);
        if (section === 'home' && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (section === 'about' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'projects' && projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        } 
        else if (section === 'skills' && skillsRef.current) {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (section === 'contact' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Provide clear error message for missing section
            console.warn(`Section "${section}" not found. Please ensure it exists.`);
        }
    }

    return (
        <div className={styles.navouter}>


            <div className={navEnabled ? `${styles.navtoggler} ${styles.navenabled}` : `${styles.navtoggler}`} onClick={handleNavBarClick}>
                <span></span>
            </div>

            <div className={styles.right}>
                <button onClick={() => handleButtonClick('home')}>Home</button>
                <button onClick={() => handleButtonClick('about')}>About</button>
                <button onClick={() => handleButtonClick('projects')}>Projects</button>
                <button onClick={() => handleButtonClick('skills')}>Skills</button>
                <button onClick={() => handleButtonClick('contact')}>Contact</button>
            </div>

            { navEnabled && <div className={styles.right1}>
                    <button onClick={() => handleButtonClick('home')}>Home</button>
                    <button onClick={() => handleButtonClick('about')}>About</button>
                    <button onClick={() => handleButtonClick('projects')}>Projects</button>
                    <button onClick={() => handleButtonClick('skills')}>Skills</button>
                    <button onClick={() => handleButtonClick('contact')}>Contact</button>
                </div> 
            }

        </div>
    )
}

export default Navbar