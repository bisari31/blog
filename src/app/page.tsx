import PostPreview from 'components/post/PostPreview';
import styles from './page.module.scss';
import { allPosts } from 'contentlayer/generated';

export default function page() {
  const posts = [...allPosts].sort().reverse();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>
          All Posts <small>({posts.length})</small>
        </h1>
      </div>
      <div className={styles.postWarpper}>
        {posts.map((post) => (
          <PostPreview post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
