"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiStylus } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";
import { DiRuby } from "react-icons/di";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/styles/SkillSection.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './ProjectSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SkillSection = () => {
    const t = useTranslations('SkillSection');
    return (
        <div className={styles.projectdiv}>
            <h1>{t('header')}</h1>
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
                    <h1>HTML</h1>
                    <DiHtml5 />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>CSS</h1>
                    <DiCss3 />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>JavaScript</h1>
                    <DiJavascript1 />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>TypeScript</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>React.js</h1>
                    <DiReact />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>Angular</h1>
                    <DiAngularSimple />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>Ruby</h1>
                    <DiRuby />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>Python</h1>
                    <DiPython />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>Redux</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>Node.js</h1>
                    <DiNodejs />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>Stylus</h1>
                    <DiStylus />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>Git</h1>
                    <DiGit />
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
    </div>
    )
}

export default SkillSection