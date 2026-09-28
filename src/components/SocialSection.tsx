"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import styles from '@/styles/SocialSection.module.css';
import { SocialIcon } from 'react-social-icons'

type SocialLinkProps = {
    href: string;
    network: string;
    label: string;
}

const SocialLink = ({ href, network, label }: SocialLinkProps) => (
    <a
        className={styles.socialcard}
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        aria-label={label}
    >
        <SocialIcon as="span" network={network} style={{ height: 40, width: 40 }} aria-hidden="true" />
        <span className={styles.socialcardtext}>{label}</span>
    </a>
);

const SocialSection = () => {
    const t = useTranslations('SocialSection');
    return (
        <div className={styles.social} role="list" aria-label="Social links">
            <SocialLink
                href="https://github.com/pochito427"
                network="github"
                label={t('socialcard.github')}
            />
            <SocialLink
                href="mailto:djalfo18@gmail.com"
                network="mailto"
                label={t('socialcard.email')}
            />
            <SocialLink
                href="https://www.linkedin.com/in/AlfonsoNeilJimenezCasallas/"
                network="linkedin"
                label={t('socialcard.linkedin')}
            />
        </div>
    )
}

export default SocialSection
