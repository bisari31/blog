import clsx from 'clsx';
import Link from 'next/link';

interface MorePostProps {
  nextPost?: Post;
  previousPost?: Post;
}

interface MorePostItemProps {
  post?: Post;
  type: '이전' | '다음';
}

function MorePostItem({ post, type }: MorePostItemProps) {
  return (
    <Link
      className={clsx(
        { 'pointer-events-none': !post },
        { 'text-right': type === '다음' },
        'flex flex-1 flex-col gap-1 rounded-lg bg-[#ebedf1] p-4 text-gray-500',
      )}
      href={post?.url ?? '#'}
    >
      <span className={clsx({ 'text-[#a9a9a9]': !post }, 'text-sm')}>
        {type} 글
      </span>
      <span
        className={clsx(
          { 'text-[#a9a9a9]': !post },
          'line-clamp-2 text-gray-800',
        )}
      >
        {post?.title ?? `${type} 글이 존재하지 않습니다.`}
      </span>
    </Link>
  );
}

export default function MorePost({ nextPost, previousPost }: MorePostProps) {
  return (
    <div className="mt-20 flex flex-col gap-5 sm:flex-row sm:gap-10">
      <MorePostItem type="이전" post={previousPost} />
      <MorePostItem type="다음" post={nextPost} />
    </div>
  );
}
