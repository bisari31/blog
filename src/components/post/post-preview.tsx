import KeywordButton from 'components/keyword/keyword-button';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default function PostPreview({ post }: { post: Post }) {
  return (
    <Link
      href={post.url}
      className="group flex w-full flex-col rounded-[20px] bg-white sm:flex-row sm:items-center sm:gap-5 sm:rounded-[28px] sm:py-6 sm:pl-[30px] sm:pr-5"
    >
      <div className="flex-1 px-4 pb-4 pt-5 sm:p-0">
        <time
          dateTime={post.date}
          className="text-xs font-medium text-gray-500 sm:text-[13px]"
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <div className="mt-5 flex flex-1 flex-col gap-4">
          <p className="line-clamp-2 text-lg font-semibold text-gray-800 sm:text-[22px]">
            {post.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.keywords?.map((keyword) => (
              <KeywordButton
                key={keyword}
                keyword={keyword}
                className="outline-none"
              >
                {keyword}
              </KeywordButton>
            ))}
          </div>
        </div>
      </div>
      <div className="relative h-[180px] w-full overflow-hidden rounded-[10px] rounded-t-none shadow sm:h-[100px] sm:w-[150px] sm:rounded-t-[10px] md:h-[150px] md:w-[210px]">
        <Image
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          src={post.thumbnail ?? ''}
          alt={post.title}
        />
      </div>
    </Link>
  );
}
