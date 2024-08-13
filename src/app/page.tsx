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
    <div className="flex flex-col-reverse sm:flex-row">
      <section className="flex flex-1 flex-col gap-4 sm:gap-7">
        {filtedPosts.map((post) => (
          <PostPreview post={post} key={post._id} />
        ))}
      </section>
      <section className="mb-6 border-b border-l-0 border-l-gray-300 pb-6 sm:mb-0 sm:ml-6 sm:border-b-0 sm:border-l sm:pb-0 sm:pl-6">
        <h2 className="font-semibold">Keywords</h2>
        <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-3 sm:max-w-72">
          {sortedUniqueKeywords.map((keyword) => (
            <li key={keyword}>
              <KeywordLinkButton
                isActive={keyword === (searchParams?.keyword || 'all')}
                keyword={keyword}
                className="bg-white outline outline-1 outline-gray-200 hover:outline-none"
              >
                {keyword} ({keywordCounts[keyword]})
              </KeywordLinkButton>
            </li>
          ))}
        </ul>
      </section>
      {/* <Keywords keywords={sortedUniqueKeywords} isKeywordsPage /> */}
    </div>
  );
}
