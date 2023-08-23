import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

import styles from './postPreview.module.scss';

import Keywords from './Keywords';

export default function PostPreview({ post }: { post: Post }) {
  return (
    <div className={styles.wrapper}>
      <Link href={post.url} className={styles.imgWrapper}>
        <Image src={post.thumbnail ?? ''} alt={post.title} fill sizes="600px" />
      </Link>
      <div className={styles.details}>
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'LLL d, yyyy')}
        </time>
        <div>
          <Link href={post.url} className={styles.title}>
            {post.title}
          </Link>
          <Link href={post.url} className={styles.desc}>
            {post.description}
          </Link>
          <Keywords keywords={post.keywords} />
        </div>
      </div>
    </div>
  );
}
