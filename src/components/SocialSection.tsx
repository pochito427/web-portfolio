"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import styles from '@/styles/SocialSection.module.css';
import { SocialIcon } from 'react-social-icons'

const SocialSection = () => {
    const t = useTranslations('SocialSection');
    return (
        <div className={styles.social}>
            <div className={styles.socialcard}
                onClick={() => window.open('https://github.com/pochito427', '_blank')}
            >
                <SocialIcon url="https://github.com" style={{ height: 40, width: 40 }} />
                <p>@pochito427</p>
            </div>

            <div className={styles.socialcard}
                onClick={() => window.open('https://mail.google.com/mail/u/1/#inbox?compose=new', '_blank')}
            >
                <SocialIcon url="https://mail.google.com" style={{ height: 40, width: 40 }} />
                <p>djalfo18@gmail.com</p>
            </div>

            <div className={styles.socialcard}
                onClick={() => window.open('https://www.linkedin.com/in/AlfonsoNeilJimenezCasallas/', '_blank')}
            >
                <SocialIcon url="https://linkedin.com" style={{ height: 40, width: 40 }} />
                <p>{t('socialcard.linkedin')}</p>
            </div>
        </div>
    )
}

export default SocialSection