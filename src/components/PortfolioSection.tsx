import React from "react";
import styles from '@/styles/PortfolioSection.module.css'
import mainImg from '@/assets/alfonso_jimenez.png'
import Image from 'next/image'

const PortfolioSection = () => {
    return (
        <div className={styles.section1outer}>
            <div className={styles.subtextdiv}>
                <div className={styles.left}>
                <div className={styles.about}>
                    <p><strong>Hi, I am Alfonso Jimenez</strong></p>
                    <p><strong>I build full-stack web applications. I am open to work currently.</strong></p>
                </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.stat}>
                        <h1>10+</h1>
                        <p><strong>Satisfied<br></br>clients</strong></p>
                    </div>
                    <div className={styles.stat}>
                        <h1>5+</h1>
                        <p><strong>Years of<br></br>experience</strong></p>
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