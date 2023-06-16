import styles from './keywords.module.scss';
import Link from 'next/link';

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
  return (
    <div
      className={`${styles.keywords} ${
        isKeywordsPage ? styles.isKeywordsPage : ''
      }`}
    >
      {keywords?.map((keyword) => (
        <Link
          href={`/keywords/${keyword}`}
          key={keyword}
          className={`${slug && keyword === slug ? styles.isActive : ''} ${
            isKeywordsPage ? styles.isKeywordsPage : ''
          }`}
        >
          {keyword}
        </Link>
      ))}
    </div>
  );
}
