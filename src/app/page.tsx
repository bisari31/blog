'use client';
import Keywords from 'components/post/keywords';
import PostPreview from 'components/post/post-preview';
import { useAppSelector } from 'hooks';
import { sortedPosts, sortedUniqueKeywords } from 'lib/contentlayer';

import styles from './page.module.scss';

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
