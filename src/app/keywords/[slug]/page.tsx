'use client';
import { sortedPosts, keywords } from 'lib/contentlayer';

import PostForm from 'components/post/PostForm';
import Keywords from 'components/post/Keywords';

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const getFilteredPosts = () => {
    if (slug === 'All') return sortedPosts;
    return sortedPosts.filter(({ keywords }) => keywords?.includes(slug));
  };
  const filteredPosts = getFilteredPosts();

  return (
    <PostForm posts={filteredPosts}>
      <Keywords isKeywordsPage keywords={keywords} slug={slug} />
    </PostForm>
  );
}
