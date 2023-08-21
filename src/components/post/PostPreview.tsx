import Image from 'next/image';
import { format, parseISO } from 'date-fns';

import styles from './postPreview.module.scss';

import Keywords from './Keywords';
import Link from 'next/link';

const KEYWORDS = ['javascript', 'react', 'nextjs'];

export default function PostPreview({ post }: { post: Post }) {
  const getThumbnailSrc = (keywords?: string[]) => {
    const keyword = KEYWORDS.find((key) => keywords?.includes(key));
    return `/imgs/${keyword}.png`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <Image
          src={post.thumbnail ?? getThumbnailSrc(post.keywords)}
          alt={post.title}
          fill
          sizes="600px"
        />
      </div>
      <div className={styles.details}>
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'LLL d, yyyy')}
        </time>
        <div>
          <Link className={styles.title} href={post.url}>
            {post.title}
          </Link>
          <Link className={styles.desc} href={post.url}>
            {post.description}
          </Link>
          <Keywords keywords={post.keywords} />
        </div>
      </div>
    </div>
  );
}
