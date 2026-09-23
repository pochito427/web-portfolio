"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";
import { DiRuby } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";

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

type Skill = {
    name: string;
    Icon: React.ElementType;
}

const skills: Skill[] = [
    { name: 'HTML', Icon: DiHtml5 },
    { name: 'CSS', Icon: DiCss3 },
    { name: 'JavaScript', Icon: DiJavascript1 },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'React.js', Icon: DiReact },
    { name: 'Angular', Icon: DiAngularSimple },
    { name: 'Ruby', Icon: DiRuby },
    { name: 'Python', Icon: DiPython },
    { name: 'Redux', Icon: SiRedux },
    { name: 'Node.js', Icon: DiNodejs },
    { name: 'Vue.js', Icon: FaVuejs },
    { name: 'Git', Icon: DiGit },
];

const SkillSection = () => {
    const t = useTranslations('SkillSection');
    return (
        <section className={styles.projectdiv} aria-label={t('header')}>
            <h2>{t('header')}</h2>
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
                {skills.map((skill) => (
                    <SwiperSlide key={skill.name}>
                        <div className={styles.projectcard}>
                            <h3>{skill.name}</h3>
                            <skill.Icon />
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
    </section>
    )
}

export default SkillSection
