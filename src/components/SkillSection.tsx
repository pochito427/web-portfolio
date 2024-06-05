"use client";
import React from "react";

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
    return (
        <div className={styles.projectdiv}>
            <h1>My Skills</h1>
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
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>CSS</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>JavaScript</h1>
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
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>Python</h1>
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
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>Stylus</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.projectcard}>
                    <h1>Git</h1>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
    </div>
    )
}

export default SkillSection