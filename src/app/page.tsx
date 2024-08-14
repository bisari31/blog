import KeywordLinkButton from 'components/keyword/keyword-link-button';
import PostPreview from 'components/post/post-preview';
import {
  keywordCounts,
  latestPost,
  sortedUniqueKeywords,
} from 'lib/contentlayer';

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
    <div className="flex flex-1 flex-col-reverse md:flex-row">
      <section className="flex flex-1 flex-col gap-4 md:gap-7">
        {filtedPosts.map((post) => (
          <PostPreview post={post} key={post._id} />
        ))}
      </section>
      <section className="mb-6 border-b border-l-0 pb-6 md:mb-0 md:ml-6 md:border-b-0 md:border-l md:pb-0 md:pl-6">
        <h2 className="font-semibold text-gray-600">Keywords</h2>
        <ul className="mt-5 flex w-full flex-wrap gap-x-2 gap-y-4 md:w-72">
          {sortedUniqueKeywords.map((keyword) => (
            <li key={keyword}>
              <KeywordLinkButton
                isActive={keyword === (searchParams?.keyword || 'all')}
                keyword={keyword}
              >
                {keyword} ({keywordCounts[keyword]})
              </KeywordLinkButton>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
