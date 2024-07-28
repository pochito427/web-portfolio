"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiStylus } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiHtml5Multimedia } from "react-icons/di";

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
    const t = useTranslations('ProjectSection');
    return (
        <div className={styles.projectdiv}>
            <h1>{t('projectdiv.header')}</h1>
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
                    <h1><a href="https://react-with-typescript-tan.vercel.app/" target="_blank">Random Fox Generator</a></h1>
                    <DiReact />
                    <a href="https://react-with-typescript-tan.vercel.app/" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/react-with-typescript" target="_blank">{t('projectcard.code')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1><a href="https://pochito427.github.io/async-landing/" target="_blank">Async Landing</a></h1>
                    <DiHtml5 /> <DiJavascript1 />
                    <a href="https://pochito427.github.io/async-landing/" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/async-landing" target="_blank">{t('projectcard.code')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1><a href="https://nextjs-blog-seven-dusky-93.vercel.app/" target="_blank">Next.js Blog</a></h1>
                    <DiReact />
                    <a href="https://nextjs-blog-seven-dusky-93.vercel.app/" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/nextjs-blog" target="_blank">{t('projectcard.code')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1><a href="https://pochito427.github.io/react-tutorial/" target="_blank">React.js Tutorial</a></h1>
                    <DiReact /> 
                    <a href="https://pochito427.github.io/react-tutorial/" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/react-tutorial" target="_blank">{t('projectcard.code')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1><a href="https://github.com/pochito427/react-challenge-02" target="_blank">React Router and Redux challenge</a></h1>
                    <DiReact /> <DiStylus />
                    <a href="https://github.com/pochito427/react-challenge-02" target="_blank">{t('projectcard.code')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1><a href="https://pochito427.github.io/calculadora.html" target="_blank">JavaScript Standard Calculator</a></h1>
                    <DiHtml5 /> <DiJavascript1 />
                    <a href="https://pochito427.github.io/calculadora.html" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/pochito427.github.io/blob/master/calculadora.html" target="_blank">{t('projectcard.code')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1><a href="https://pochito427.github.io/00-HTML-CSS-basics/layout_grid_system.html" target="_blank">Avengers Infinity War</a></h1>
                    <DiHtml5 /> <DiCss3 />
                    <a href="https://pochito427.github.io/00-HTML-CSS-basics/layout_grid_system.html" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/pochito427.github.io/blob/master/00-HTML-CSS-basics/layout_grid_system.html" target="_blank">{t('projectcard.code')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1><a href="https://pochito427.github.io/00-HTML-CSS-basics/multimedia.html" target="_blank">Loading Multimedia Sources</a></h1>
                    <DiHtml5 /> <DiHtml5Multimedia />
                    <a href="https://pochito427.github.io/00-HTML-CSS-basics/multimedia.html" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/pochito427.github.io/blob/master/00-HTML-CSS-basics/multimedia.html" target="_blank">{t('projectcard.code')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1><a href="https://pochito427.github.io/00-HTML-CSS-basics/boxmodel.html" target="_blank">CSS Box Model</a></h1>
                    <DiHtml5 /> <DiCss3 />
                    <a href="https://pochito427.github.io/00-HTML-CSS-basics/boxmodel.html" target="_blank">Demo</a>
                    <a href="https://github.com/pochito427/pochito427.github.io/blob/master/00-HTML-CSS-basics/boxmodel.html" target="_blank">{t('projectcard.code')}</a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.projectcard}>
                    <h1><a href="https://github.com/pochito427/proyecto-datacademy-platzi/blob/main/template_proyecto_datacademy.ipynb" target="_blank">Platzi Datacademy</a></h1>
                    <DiPython />
                    <a href="https://github.com/pochito427/proyecto-datacademy-platzi/blob/main/template_proyecto_datacademy.ipynb" target="_blank">Demo</a>
                </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default ProjectSection