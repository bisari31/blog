import Link from 'next/dist/client/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';

import styles from './postPreview.module.scss';
import Keywords from './Keywords';

export default function PostPreview({ post }: { post: Post }) {
  return (
    <Link className={styles.article} href={{ pathname: post.url }}>
      <div className={styles.contentWrapper}>
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'LLL d, yyyy')}
        </time>
        <h2>{post.title}</h2>
        <span>{post.description}</span>
        <Keywords keywords={post.keywords} />
      </div>
      {post.thumbnail && (
        <div className={styles.imgWrapper}>
          <Image src={post.thumbnail} alt={post.title} fill />
        </div>
      )}
    </Link>
  );
}
