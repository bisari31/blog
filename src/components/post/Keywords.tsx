import styles from './keywords.module.scss';
import Link from 'next/link';

interface Props {
  isKeywordsPage?: boolean;
  keywords: Post['keywords'];
  currentQuery?: string;
}

export default function Keywords({
  keywords,
  currentQuery,
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
          href={keyword === 'All' ? '/' : { query: { keyword } }}
          key={keyword}
          className={`${keyword === currentQuery ? styles.isActive : ''}`}
        >
          {keyword}
        </Link>
      ))}
    </div>
  );
}
