import { sortedPosts, keywords } from 'lib/contentlayer';
import Keywords from 'components/post/Keywords';
import styles from './page.module.scss';
import PostPreview from 'components/post/PostPreview';

export default function Home({
  searchParams: { keyword },
}: {
  searchParams: { keyword: string };
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>
          {keyword ? 'Filtered' : 'All'} Posts{' '}
          <small>({sortedPosts.length})</small>
        </h1>
      </div>
      <Keywords
        keywords={keywords}
        currentQuery={keyword || 'All'}
        isKeywordsPage
      />
      <div className={styles.postWarpper}>
        {sortedPosts.map((post) => (
          <PostPreview post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
