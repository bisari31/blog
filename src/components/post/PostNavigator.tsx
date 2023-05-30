import Link from 'next/link';
import styles from './postNavigator.module.scss';

interface Props {
  nextPost?: Post;
  previousPost?: Post;
}

export default function PostNavigator({ nextPost, previousPost }: Props) {
  return (
    <div
      className={`${styles.wrapper} ${
        !previousPost ? styles.isOnlyNextPost : ''
      } ${!nextPost ? styles.isOnlyPreviousPost : ''}`}
    >
      {previousPost && (
        <Link className={styles.previous} href={previousPost?.url ?? ''}>
          <p>이전 글</p>
          {previousPost?.title}
        </Link>
      )}
      {nextPost && (
        <Link className={styles.next} href={nextPost?.url ?? ''}>
          <p>다음 글</p>
          {nextPost?.title}
        </Link>
      )}
    </div>
  );
}
