import React from "react";
import { useTranslations } from 'next-intl';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
    const t = useTranslations('Footer');
    return (
        <div className={styles.section4outermost}>
            <div className={styles.left}>
                <p>{t('left.paragraph')}
                <span>&nbsp;<a href="mailto: djalfo18@gmail.com">djalfo18@gmail.com</a></span>
                </p>
            </div>
            <div className={styles.right}>
                <h1>
                {t('right.header1')}<br />
                {t('right.header2')}<br />
                {t('right.header3')}
                </h1>
            </div>
        </div>
    )
}

export default Footer