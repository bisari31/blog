'use client';

import { LinkProps, styles } from 'components/keyword/keyword-link-button';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export default function KeywordButton({
  children,
  className,
  keyword,
}: LinkProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        router.push(`/?keyword=${keyword}`);
      }}
      className={twMerge(styles, className)}
    >
      {children}
    </button>
  );
}
