import React, { Suspense } from "react";
import { useTranslations } from 'next-intl';
import VideoComponent from "./VideoComponent";
import styles from '@/styles/AboutSection.module.css'

const AboutSection = () => {
    const t = useTranslations('AboutSection');
    return (
        <div className={styles.about}>
            <div className={styles.textdiv}>
                <h1>{t('textdiv.header')}</h1>
                <p>{t('textdiv.paragraph1')}</p>
                <p>{t('textdiv.paragraph2')}</p>
                <p>{t('textdiv.paragraph3')}</p>
            </div>
            <section>
                <Suspense fallback={<p>{t('VideoComponent.loader')}</p>}>
                    <VideoComponent />
                </Suspense>
                {/* Other content of the page */}
                <a href="/CV.pdf" download="CV" className={styles.downloadcv}>{t('downloadCV')}</a>
            </section>
        </div>
    )
}

export default AboutSection