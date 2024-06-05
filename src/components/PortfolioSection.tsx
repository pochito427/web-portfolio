import React from "react";
import styles from '@/styles/PortfolioSection.module.css'
import mainImg from '@/assets/alfonso_jimenez.jpg'
import Image from 'next/image'

const PortfolioSection = () => {
    return (
        <div className={styles.section1outer}>
            <div className={styles.subtextdiv}>
                <div className={styles.left}>
                <div className={styles.about}>
                    <p>Hi, I am <span>Alfonso Jimenez</span></p>
                    <p>I build full-stack web applications. I am open to work currently.</p>
                </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.stat}>
                        <h1>10+</h1>
                        <p>Satisfied<br></br>clients</p>
                    </div>
                    <div className={styles.stat}>
                        <h1>5+</h1>
                        <p>Years of<br></br>experience</p>
                    </div>
                </div>
            </div>
            <Image src={mainImg} className={styles.mainimg} alt="Alfonso Jimenez" quality={100} />
            <div className={styles.maintextdiv}>
                <p>I am a </p>
                <h1><span>&nbsp;</span>FULL-STACK</h1>
                <h2>Developer</h2>
            </div>
        </div>
    )
}

export default PortfolioSection