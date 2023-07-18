import { sortedPosts, keywords } from 'lib/contentlayer';
import Keywords from 'components/post/Keywords';
import styles from './page.module.scss';
import PostPreview from 'components/post/PostPreview';

export default function Home({
  searchParams: { keyword },
}: {
  searchParams: { keyword: string };
}) {
  const getFilterPosts = () => {
    if (!keyword) return sortedPosts;
    return sortedPosts.filter((post) => post.keywords?.includes(keyword));
  };
  const filtedPosts = getFilterPosts();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>
          {keyword ? 'Filtered' : 'All'} Posts{' '}
          <small>({filtedPosts.length})</small>
        </h1>
      </div>
      <Keywords
        keywords={keywords}
        currentQuery={keyword || 'All'}
        isKeywordsPage
      />
      <div className={styles.postWarpper}>
        {filtedPosts.map((post) => (
          <PostPreview post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
