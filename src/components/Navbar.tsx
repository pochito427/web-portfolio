"use client";
import React, { useState } from "react";
import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';
import signature from '@/assets/signature.png';

const Navbar = () => {

    const [navEnabled, setNavEnabled] = useState(false);

    const handleButtonClick = (section: any) => {
        console.log(section);
    }

    return (
        <div className={styles.navouter}>

            <div className={styles.left}>
                <Image alt="" src={signature} width={500} height={500}
                    quality={100} className={styles.sign} />
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