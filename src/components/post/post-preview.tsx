import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import Keywords from './keywords';

export default function PostPreview({ post }: { post: Post }) {
  return (
    <Link
      href={post.url}
      className="group flex w-full items-center gap-5 rounded-[28px] bg-white py-6 pl-[30px] pr-5"
    >
      <div className="flex-1">
        <time
          dateTime={post.date}
          className="text-[13px] font-medium text-gray-500"
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <div className="mt-5 flex flex-1 flex-col gap-4">
          <p className="line-clamp-2 min-h-16 text-[22px] font-semibold text-gray-800">
            {post.title}
          </p>
          <div className="flex gap-2">
            {post.keywords?.map((keyword) => (
              <button
                key={keyword}
                className="bg-bg rounded-lg px-2 py-2 text-xs font-medium text-gray-600"
              >
                {keyword}
              </button>
            ))}
          </div>
          {/* <Link href={post.url}>{post.description}</Link> */}
          {/* <Keywords keywords={post.keywords} /> */}
        </div>
      </div>
      <div className="relative h-[150px] w-[210px] overflow-hidden rounded-[10px] shadow">
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
