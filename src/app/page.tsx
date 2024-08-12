'use client';
import Keywords from 'components/post/keywords';
import PostPreview from 'components/post/post-preview';
import { useAppSelector } from 'hooks';
import { sortedPosts, sortedUniqueKeywords } from 'lib/contentlayer';

export default function Home() {
  const { selectedKeyword } = useAppSelector((state) => state.keyword);
  const getFilterPosts = (keyword: string) => {
    if (keyword === 'all') return sortedPosts;
    return sortedPosts.filter((post) => post.keywords?.includes(keyword));
  };
  const filtedPosts = getFilterPosts(selectedKeyword);

  return (
    <div>
      <Keywords keywords={sortedUniqueKeywords} isKeywordsPage />
      <div>
        {filtedPosts.map((post) => (
          <PostPreview post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
