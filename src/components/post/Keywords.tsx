'use client';

import { useRouter } from 'next/navigation';
import styles from './keywords.module.scss';

interface Props {
  isKeywordsPage?: boolean;
  keywords: Post['keywords'];
  slug?: string;
}

export default function Keywords({
  keywords,
  slug,
  isKeywordsPage = false,
}: Props) {
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    name: string,
  ) => {
    e.preventDefault();
    router.push(`/keywords/${name}`);
  };

  return (
    <div
      className={`${styles.keywords} ${
        isKeywordsPage ? styles.isKeywordsPage : ''
      }`}
    >
      {keywords?.map((keyword) => (
        <button
          key={keyword}
          className={`${slug && keyword === slug ? styles.isActive : ''} ${
            isKeywordsPage ? styles.isKeywordsPage : ''
          }`}
          type="button"
          onClick={(e) => handleClick(e, keyword)}
        >
          {keyword}
        </button>
      ))}
    </div>
  );
}
