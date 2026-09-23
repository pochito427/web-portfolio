"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import styles from '@/styles/Navbar.module.css';
import LocalSwitcher from "./LocalSwitcher";

const sectionIds = {
    home: 'home-section',
    about: 'about-section',
    projects: 'projects-section',
    skills: 'skills-section',
    contact: 'contact-section',
} as const;

type SectionKey = keyof typeof sectionIds;

const Navbar = ({
    homeRef,
    aboutRef,
    projectsRef,
    contactRef,
    skillsRef
}: {
    homeRef: React.RefObject<HTMLDivElement | null>
    aboutRef: React.RefObject<HTMLDivElement | null>
    projectsRef: React.RefObject<HTMLDivElement | null>
    contactRef: React.RefObject<HTMLDivElement | null>
    skillsRef: React.RefObject<HTMLDivElement | null>
}) => {

    const [navEnabled, setNavEnabled] = useState(false);
    const t = useTranslations('Navbar');

    const refs: Record<SectionKey, React.RefObject<HTMLDivElement | null>> = {
        home: homeRef,
        about: aboutRef,
        projects: projectsRef,
        skills: skillsRef,
        contact: contactRef,
    };

    const handleNavBarClick = () => {
        setNavEnabled((prev) => !prev)
    }

    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, section: SectionKey) => {
        event.preventDefault();
        const ref = refs[section].current;
        if (ref) {
            ref.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `#${sectionIds[section]}`;
        }
        setNavEnabled(false);
    }

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && navEnabled) {
                setNavEnabled(false);
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [navEnabled]);

    const NavLinks = () => (
        <>
            <a href="#home-section" onClick={(e) => handleNavClick(e, 'home')}>{t('home')}</a>
            <a href="#about-section" onClick={(e) => handleNavClick(e, 'about')}>{t('about')}</a>
            <a href="#projects-section" onClick={(e) => handleNavClick(e, 'projects')}>{t('projects')}</a>
            <a href="#skills-section" onClick={(e) => handleNavClick(e, 'skills')}>{t('skills')}</a>
            <a href="#contact-section" onClick={(e) => handleNavClick(e, 'contact')}>{t('contact')}</a>
        </>
    );

    return (
        <header className={styles.navouter}>
            <a href="#main-content" className={styles.skipLink}>{t('skipToContent')}</a>

            <button
                type="button"
                className={navEnabled ? `${styles.navtoggler} ${styles.navenabled}` : `${styles.navtoggler}`}
                onClick={handleNavBarClick}
                aria-label={navEnabled ? t('closeMenu') : t('openMenu')}
                aria-expanded={navEnabled}
                aria-controls="mobile-navigation"
            >
                <span></span>
            </button>

            <nav className={styles.right} aria-label={t('mainNavLabel')}>
                <NavLinks />
            </nav>

            {navEnabled && <nav id="mobile-navigation" className={styles.right1} aria-label={t('mobileNavLabel')}>
                <NavLinks />
            </nav>}

            <LocalSwitcher />
        </header>
    )
}

export default Navbar
