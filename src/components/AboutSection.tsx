import React, { Suspense } from "react";
import VideoComponent from "./VideoComponent";
import styles from '@/styles/AboutSection.module.css'

const AboutSection = () => {
    return (
        <div className={styles.about}>
            <div className={styles.textdiv}>
                <h1>About me</h1>
                <p>I am a specialized full-stack developer, your go-to solution for crafting full-stack websites, dynamic web and Single Page applications. With a passion for problem-solving and innovation, I excel in creating seamless digital experiences tailored to your business needs.</p>
                <p>Specializing in development with React.js, TypeScript, Next.js and Node.js, I leverage the power of the front-end and back-end stacks to deliver robust and dynamic solutions that exceed expectations. Whether you need a sleek website or a responsive web app, I have the skills to bring your vision to life.</p>
                <p>My commitment to clean, maintainable and accessible code ensures better usability and scalability, while my understanding of business challenges enables me to develop custom solutions that address your specific needs.</p>
            </div>
            <section>
                <Suspense fallback={<p>Loading video...</p>}>
                    <VideoComponent />
                </Suspense>
                {/* Other content of the page */}
            </section>
        </div>
    )
}

export default AboutSection