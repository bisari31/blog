'use client';

import PostPreview from 'components/post/post-preview';
import { latestPost } from 'lib/contentlayer';
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
    </div>
  );
}
