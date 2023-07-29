import Link from 'next/link';
import cn from 'classnames/bind';

import styles from './keywords.module.scss';

interface Props {
  isKeywordsPage?: boolean;
  keywords: Post['keywords'];
  currentQuery?: string;
}

const cx = cn.bind(styles);

export default function Keywords({
  keywords,
  currentQuery,
  isKeywordsPage = false,
}: Props) {
  return (
    <div
      className={cx('keywords', {
        isKeywordsPage,
      })}
    >
      {keywords?.map((keyword) => (
        <Link
          href={keyword === 'All' ? '/' : { query: { keyword } }}
          key={keyword}
          className={cx(keyword === currentQuery && 'isActive')}
        >
          {keyword}
        </Link>
      ))}
    </div>
  );
}
