import Image from 'next/image';
import Link from 'next/link';

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
        <Link href={previousPost?.url}>
          <div>
            <Image
              src={previousPost.thumbnail ?? `/imgs/nextjs.png`}
              alt={previousPost.title}
              width={300}
              height={300}
            />
          </div>
          <div>
            <span>이전 글</span>
            <span>{previousPost?.title}</span>
          </div>
        </Link>
      )}
      {nextPost && (
        <Link href={nextPost?.url}>
          <div>
            <Image
              src={nextPost.thumbnail ?? `/imgs/nextjs.png`}
              alt={nextPost.title}
              width={300}
              height={300}
            />
          </div>
          <div>
            <span>다음 글</span>
            <span>{nextPost?.title}</span>
          </div>
        </Link>
      )}
    </div>
  );
}
