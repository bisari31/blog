'use client';

import { useRouter } from 'next/navigation';

import styles from './notFound.module.scss';
import { useScrollHidden } from 'hooks';

export default function NotFound() {
  const router = useRouter();
  useScrollHidden();

  return (
    <div className={styles.wrapper}>
      <p>404</p>
      <p>Page Not Found</p>
      <button type="button" onClick={() => router.back()}>
        돌아가기
      </button>
    </div>
  );
}
