'use client';
import { sortedPosts, sortedUniqueKeywords } from 'lib/contentlayer';
import styles from './page.module.scss';

import Keywords from 'components/post/Keywords';
import PostPreview from 'components/post/PostPreview';
import { useAppSelector } from 'hooks';

export default function Home() {
  const { selectedKeyword } = useAppSelector((state) => state.keyword);
  const getFilterPosts = (keyword: string) => {
    if (keyword === 'all') return sortedPosts;
    return sortedPosts.filter((post) => post.keywords?.includes(keyword));
  };
  const filtedPosts = getFilterPosts(selectedKeyword);

  return (
    <div className={styles.wrapper}>
      <Keywords keywords={sortedUniqueKeywords} isKeywordsPage />
      <div className={styles.postWarpper}>
        {filtedPosts.map((post) => (
          <PostPreview post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
