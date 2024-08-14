'use client';

import { LinkProps, styles } from 'components/keyword/keyword-link-button';
import { useRouter } from 'next/navigation';

export default function KeywordButton({ children, keyword }: LinkProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        router.push(`/?keyword=${keyword}`);
      }}
      className={styles}
    >
      {children}
    </button>
  );
}
