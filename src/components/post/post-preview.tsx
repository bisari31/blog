import KeywordButton from 'components/keyword/keyword-button';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
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
          <p className="group-hover:text-primary line-clamp-2 text-lg font-semibold text-gray-700 sm:text-[22px]">
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
      {/* <div className="relative h-[180px] w-full overflow-hidden rounded-[10px] rounded-t-none shadow sm:h-[100px] sm:w-[150px] sm:rounded-t-[10px]">
        <Image
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          src={post.thumbnail ?? ''}
          alt={post.title}
        />
      </div>  */}
    </Link>
  );
}
