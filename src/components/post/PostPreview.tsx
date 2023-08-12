'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';

import styles from './postPreview.module.scss';

import Keywords from './Keywords';

export default function PostPreview({ post }: { post: Post }) {
  const router = useRouter();
  return (
    <button
      type="button"
      className={styles.wrapper}
      onClick={() => router.push(`${post.url}`)}
    >
      <div className={styles.imgWrapper}>
        <Image
          src={post.thumbnail ?? `/imgs/nextjs.png`}
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
          <h2>{post.title}</h2>
          <span>{post.description}</span>
          <Keywords keywords={post.keywords} />
        </div>
      </div>
    </button>
  );
}
