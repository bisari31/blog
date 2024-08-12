import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import Keywords from './keywords';

export default function PostPreview({ post }: { post: Post }) {
  return (
    <div>
      <Link href={post.url}>
        <Image
          src={post.thumbnail ?? ''}
          alt={post.title}
          width={300}
          height={150}
        />
      </Link>
      <div>
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'LLL d, yyyy')}
        </time>
        <div>
          <Link href={post.url}>{post.title}</Link>
          <Link href={post.url}>{post.description}</Link>
          <Keywords keywords={post.keywords} />
        </div>
      </div>
    </div>
  );
}
