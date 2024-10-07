'use client';

import KeywordButton from 'components/keyword-button';
import PostPreview from 'components/post/post-preview';
import {
  keywordCounts,
  latestPost,
  sortedUniqueKeywords,
} from 'lib/contentlayer';
import { useKeyword } from 'stores/keyword-store';

export default function Main() {
  const selectedKeyword = useKeyword();
  const getFilterPosts = (keyword: string) => {
    if (keyword === 'all') return latestPost;
    return latestPost.filter((post) => post.keywords?.includes(keyword));
  };
  const filtedPosts = getFilterPosts(selectedKeyword);
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
              <KeywordButton
                isActive={keyword === selectedKeyword}
                keyword={keyword}
              >
                {keyword} ({keywordCounts[keyword]})
              </KeywordButton>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
