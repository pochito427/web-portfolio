"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/styles/ProjectSection.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './ProjectSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ProjectSection = () => {
    return (
        <div className={styles.projectdiv}>
            <h1>My Projects</h1>
            <div className='projectswipercontainer'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1>Random Fox Generator</h1>
                    <a href="https://react-with-typescript-tan.vercel.app/" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/react-with-typescript" target="_blank">Code</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1>Async Landing</h1>
                    <a href="https://pochito427.github.io/async-landing/" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/async-landing" target="_blank">Code</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1>Next.js Blog</h1>
                    <a href="https://nextjs-blog-seven-dusky-93.vercel.app/" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/nextjs-blog" target="_blank">Code</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1>React.js Tutorial</h1>
                    <a href="https://pochito427.github.io/react-tutorial/" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/react-tutorial" target="_blank">Code</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1>React Router and Redux challenge</h1>
                    <a href="https://github.com/pochito427/react-challenge-02" target="_blank">Code</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1>JavaScript Standard Calculator</h1>
                    <a href="https://pochito427.github.io/calculadora.html" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/pochito427.github.io/blob/master/calculadora.html" target="_blank">Code</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1>Avengers Infinity War</h1>
                    <a href="https://pochito427.github.io/00-HTML-CSS-basics/layout_grid_system.html" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/pochito427.github.io/blob/master/00-HTML-CSS-basics/layout_grid_system.html" target="_blank">Code</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1>Loading Multimedia Sources</h1>
                    <a href="https://pochito427.github.io/00-HTML-CSS-basics/multimedia.html" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/pochito427.github.io/blob/master/00-HTML-CSS-basics/multimedia.html" target="_blank">Code</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1>CSS Box Model</h1>
                    <a href="https://pochito427.github.io/00-HTML-CSS-basics/boxmodel.html" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/pochito427.github.io/blob/master/00-HTML-CSS-basics/boxmodel.html" target="_blank">Code</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1>Platzi Datacademy</h1>
                    <a href="https://github.com/pochito427/proyecto-datacademy-platzi/blob/main/template_proyecto_datacademy.ipynb" target="_blank">Demo</a>
                </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default ProjectSection