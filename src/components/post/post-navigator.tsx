import Image from 'next/image';
import Link from 'next/link';

import styles from './post-navigator.module.scss';

interface Props {
  nextPost?: Post;
  previousPost?: Post;
}


export default function PostNavigator({ nextPost, previousPost }: Props) {
  return (
    <div
      // className={cx(
      //   'wrapper',
      //   !previousPost && 'noPrevPost',
      //   !nextPost && 'noNextPost',
      // )}
    >
      {previousPost && (
        <Link className={styles.previous} href={previousPost?.url}>
          <div className={styles.imgWrapper}>
            <Image
              src={previousPost.thumbnail ?? `/imgs/nextjs.png`}
              alt={previousPost.title}
              width={300}
              height={300}
            />
          </div>
          <div className={styles.preview}>
            <span className={styles.direction}>이전 글</span>
            <span className={styles.title}>{previousPost?.title}</span>
          </div>
        </Link>
      )}
      {nextPost && (
        <Link className={styles.next} href={nextPost?.url}>
          <div className={styles.imgWrapper}>
            <Image
              src={nextPost.thumbnail ?? `/imgs/nextjs.png`}
              alt={nextPost.title}
              width={300}
              height={300}
            />
          </div>
          <div className={styles.preview}>
            <span className={styles.direction}>다음 글</span>
            <span className={styles.title}>{nextPost?.title}</span>
          </div>
        </Link>
      )}
    </div>
  );
}
