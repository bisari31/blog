import PostPreview from 'components/post/post-preview';
import { latestPost, sortedUniqueKeywords } from 'lib/contentlayer';
import Link from 'next/link';

interface MainPageProps {
  searchParams?: { [key: string]: string | undefined };
}

export default function Main({ searchParams }: MainPageProps) {
  const getFilterPosts = (keyword?: string) => {
    if (keyword === 'all' || !keyword) return latestPost;
    return latestPost.filter((post) => post.keywords?.includes(keyword));
  };
  const filtedPosts = getFilterPosts(searchParams?.keyword);

  return (
    <div className="flex">
      <section className="flex flex-1 flex-col gap-8">
        {filtedPosts.map((post) => (
          <PostPreview post={post} key={post._id} />
        ))}
      </section>
      <section className="ml-6 hidden border-l border-l-gray-300 pl-6 md:block">
        <h2 className="font-semibold">Keywords</h2>
        <ul className="mt-5 flex w-full max-w-72 flex-wrap gap-2">
          {sortedUniqueKeywords.map((i) => (
            <li key={i}>
              <Link
                className="inline-block rounded-lg border bg-white px-2 py-2 text-xs font-medium text-gray-600"
                href={{ query: { keyword: i } }}
              >
                {i}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* <Keywords keywords={sortedUniqueKeywords} isKeywordsPage /> */}
    </div>
  );
}
