import KeywordButton from 'components/keyword/keyword-button';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function PostPreview({ post }: { post: Post }) {
  return (
    <Link href={post.url} className="group flex w-full flex-col">
      <div className="flex flex-1 flex-col gap-2 py-3">
        <time
          dateTime={post.date}
          className="text-xs text-gray-600 sm:text-[13px]"
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <div className="flex flex-1 flex-col gap-3">
          <p className="line-clamp-2 text-lg font-semibold text-gray-700 group-hover:text-primary sm:text-[22px]">
            {post.title}
          </p>
          <p className="text-sm text-gray-600 sm:text-base">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.keywords?.map((keyword) => (
              <KeywordButton key={keyword} keyword={keyword}>
                {keyword}
              </KeywordButton>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
