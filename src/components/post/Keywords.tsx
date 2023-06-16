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
  const handleClick = (keyword: string) => {
    router.push(`/keywords/${keyword}`);
  };
  return (
    <div
      className={`${styles.keywords} ${
        isKeywordsPage ? styles.isKeywordsPage : ''
      }`}
    >
      {keywords?.map((keyword) => (
        <button
          onClick={() => handleClick(keyword)}
          type="button"
          key={keyword}
          className={`${slug && keyword === slug ? styles.isActive : ''} ${
            isKeywordsPage ? styles.isKeywordsPage : ''
          }`}
          // href={`/keywords/${keyword}`}
        >
          {keyword}
        </button>
      ))}
    </div>
  );
}
