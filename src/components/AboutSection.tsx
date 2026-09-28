"use client";
import React, { Suspense } from "react";
import { useTranslations } from 'next-intl';
import VideoComponent from "./VideoComponent";
import styles from '@/styles/AboutSection.module.css';

const AboutSection = () => {
    const t = useTranslations('AboutSection');
    return (
        <section className={styles.about} aria-labelledby="about-heading">
            <div className={styles.textdiv}>
                <h2 id="about-heading">{t('textdiv.header')}</h2>
                <p>{t('textdiv.paragraph1')}</p>
                <p>{t('textdiv.paragraph2')}</p>
                <p>{t('textdiv.paragraph3')}</p>
            </div>
            <section className={styles.mediaSection} aria-label={t('videoTitle')}>
                <Suspense fallback={<p>{t('VideoComponent.loader')}</p>}>
                    <VideoComponent title={t('videoTitle')} />
                </Suspense>
                {t.rich('downloadCVmessage', {
                    download: (chunks) => <a href={t('downloadCVHref')} download="CV" className={styles.downloadcv}>{chunks}</a>
                })}
            </section>
        </section>
    )
}

export default AboutSection
