"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiHtml5Multimedia } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";
import { DiRuby } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

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

type Project = {
    title: string;
    href: string;
    demo?: string;
    code?: string;
    icons: React.ElementType[];
}

const projects: Project[] = [
    {
        title: 'Random Fox Generator',
        href: 'https://react-with-typescript-tan.vercel.app/',
        demo: 'https://react-with-typescript-tan.vercel.app/',
        code: 'https://github.com/pochito427/react-with-typescript',
        icons: [DiReact, SiTypescript],
    },
    {
        title: 'Async Landing',
        href: 'https://pochito427.github.io/async-landing/',
        demo: 'https://pochito427.github.io/async-landing/',
        code: 'https://github.com/pochito427/async-landing',
        icons: [DiHtml5, DiJavascript1],
    },
    {
        title: 'Next.js Blog',
        href: 'https://nextjs-blog-seven-dusky-93.vercel.app/',
        demo: 'https://nextjs-blog-seven-dusky-93.vercel.app/',
        code: 'https://github.com/pochito427/nextjs-blog',
        icons: [DiReact, SiNextdotjs],
    },
    {
        title: 'React.js Tutorial',
        href: 'https://pochito427.github.io/react-tutorial/',
        demo: 'https://pochito427.github.io/react-tutorial/',
        code: 'https://github.com/pochito427/react-tutorial',
        icons: [DiReact],
    },
    {
        title: 'React Router and Redux challenge',
        href: 'https://github.com/pochito427/react-challenge-02',
        code: 'https://github.com/pochito427/react-challenge-02',
        icons: [DiReact, SiRedux],
    },
    {
        title: 'Heroes API integration app',
        href: 'https://github.com/pochito427/heroes-api-integration-app',
        code: 'https://github.com/pochito427/heroes-api-integration-app',
        icons: [DiAngularSimple],
    },
    {
        title: 'JavaScript Standard Calculator',
        href: 'https://pochito427.github.io/calculadora.html',
        demo: 'https://pochito427.github.io/calculadora.html',
        code: 'https://github.com/pochito427/pochito427.github.io/blob/master/calculadora.html',
        icons: [DiHtml5, DiJavascript1],
    },
    {
        title: 'App to render names of countries',
        href: 'https://codesandbox.io/s/github/pochito427/APIRestCountries',
        demo: 'https://codesandbox.io/s/github/pochito427/APIRestCountries',
        code: 'https://github.com/pochito427/APIRestCountries',
        icons: [FaVuejs],
    },
    {
        title: 'Loading Multimedia Sources',
        href: 'https://pochito427.github.io/00-HTML-CSS-basics/multimedia.html',
        demo: 'https://pochito427.github.io/00-HTML-CSS-basics/multimedia.html',
        code: 'https://github.com/pochito427/pochito427.github.io/blob/master/00-HTML-CSS-basics/multimedia.html',
        icons: [DiHtml5, DiHtml5Multimedia],
    },
    {
        title: 'Squid Game Grid',
        href: 'https://pochito427.github.io/squid-game-grid/',
        demo: 'https://pochito427.github.io/squid-game-grid/',
        code: 'https://github.com/pochito427/squid-game-grid',
        icons: [DiHtml5, DiCss3],
    },
    {
        title: 'Ruby Koans',
        href: 'https://github.com/pochito427/ruby_koans',
        code: 'https://github.com/pochito427/ruby_koans',
        icons: [DiRuby],
    },
    {
        title: 'Platzi Datacademy',
        href: 'https://github.com/pochito427/proyecto-datacademy-platzi/blob/main/template_proyecto_datacademy.ipynb',
        demo: 'https://github.com/pochito427/proyecto-datacademy-platzi/blob/main/template_proyecto_datacademy.ipynb',
        icons: [DiPython],
    },
];

const ProjectSection = () => {
    const t = useTranslations('ProjectSection');
    return (
        <section className={styles.projectdiv} aria-label={t('projectdiv.header')}>
            <h2>{t('projectdiv.header')}</h2>
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
                {projects.map((project) => (
                    <SwiperSlide key={project.title}>
                        <div className={styles.projectcard}>
                            <h3>
                                <a href={project.href} target="_blank" rel="noopener noreferrer">
                                    {project.title}
                                </a>
                            </h3>
                            {project.icons.map((Icon, index) => <Icon key={`${project.title}-${index}`} />)}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${t('projectcard.demo')} - ${project.title}`}
                                >
                                    {t('projectcard.demo')}
                                </a>
                            )}
                            {project.code && (
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${t('projectcard.code')} - ${project.title}`}
                                >
                                    {t('projectcard.code')}
                                </a>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </section>
    )
}

export default ProjectSection
