'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import styles from '@/styles/LocalSwitcher.module.css'

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const t = useTranslations('LocalSwitcher');

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className={styles.labeldiv}>
      <span className={styles.visuallyHidden}>{t('selectLanguage')}</span>
      <select
        defaultValue={localActive}
        className={styles.selectdiv}
        onChange={onSelectChange}
        disabled={isPending}
        aria-label={t('selectLanguage')}
      >
        <option value='en'>English</option>
        <option value='es'>Español</option>
      </select>
    </label>
  );
}
