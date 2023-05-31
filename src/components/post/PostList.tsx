import React from 'react';

import PostPreview from './PostPreview';
import styles from './postForm.module.scss';

interface Props {
  posts: Post[];
  children: React.ReactNode;
  isMainPage?: boolean;
}

export default function PostList({
  children,
  posts,
  isMainPage = false,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>
          {isMainPage ? 'All' : 'Filtered'} Posts{' '}
          <small>({posts.length})</small>
        </h1>
      </div>
      {children}
      <div className={styles.postWarpper}>
        {posts.map((post) => (
          <PostPreview post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
