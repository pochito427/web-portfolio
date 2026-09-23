"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import styles from '@/styles/PortfolioSection.module.css';
import mainImg from '@/assets/alfonso_jimenez.png';

const PortfolioSection = () => {
    const t = useTranslations('PortfolioSection');
    return (
        <section className={styles.section1outer} aria-label={t('intro')}>
            <div className={styles.subtextdiv}>
                <div className={styles.left}>
                    <div className={styles.about}>
                        <p><strong>{t('subtextdiv.about1')}</strong></p>
                        <p><strong>{t('subtextdiv.about2')}</strong></p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.stat}>
                        <p className={styles.statValue}>10+</p>
                        <p><strong>{t('subtextdiv.stat1')}<br />{t('subtextdiv.stat2')}</strong></p>
                    </div>
                    <div className={styles.stat}>
                        <p className={styles.statValue}>5+</p>
                        <p><strong>{t('subtextdiv.stat3')}<br />{t('subtextdiv.stat4')}</strong></p>
                    </div>
                </div>
            </div>
            <Image
                src={mainImg}
                className={styles.mainimg}
                alt={t('altText')}
                quality={100}
                priority
            />
            <div className={styles.maintextdiv}>
                <p>{t('maintextdiv.paragraph')}</p>
                <h1><span>&nbsp;</span>{t('maintextdiv.header1')}</h1>
                <h2>{t('maintextdiv.header2')}</h2>
            </div>
        </section>
    )
}

export default PortfolioSection
