import React from "react";
import { useTranslations } from 'next-intl';
import styles from '@/styles/PortfolioSection.module.css'
import mainImg from '@/assets/alfonso_jimenez.png'
import Image from 'next/image'

const PortfolioSection = () => {
    const t = useTranslations('PortfolioSection');
    return (
        <div className={styles.section1outer}>
            <div className={styles.subtextdiv}>
                <div className={styles.left}>
                <div className={styles.about}>
                    <p><strong>{t('subtextdiv.about1')}</strong></p>
                    <p><strong>{t('subtextdiv.about2')}</strong></p>
                </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.stat}>
                        <h1>10+</h1>
                        <p><strong>{t('subtextdiv.stat1')}<br></br>{t('subtextdiv.stat2')}</strong></p>
                    </div>
                    <div className={styles.stat}>
                        <h1>5+</h1>
                        <p><strong>{t('subtextdiv.stat3')}<br></br>{t('subtextdiv.stat4')}</strong></p>
                    </div>
                </div>
            </div>
            <Image src={mainImg} className={styles.mainimg} alt="Alfonso Jimenez" quality={100} />
            <div className={styles.maintextdiv}>
                <p>{t('maintextdiv.paragraph')}</p>
                <h1><span>&nbsp;</span>{t('maintextdiv.header1')}</h1>
                <h2>{t('maintextdiv.header2')}</h2>
            </div>
        </div>
    )
}

export default PortfolioSection