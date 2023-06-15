'use client';
import styles from './notFound.module.scss';
import { useScrollHidden } from 'hooks';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  useScrollHidden();

  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <button type="button" onClick={() => router.back()}>
        돌아가기
      </button>
    </div>
  );
}
