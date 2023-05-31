'use client';
import { allPosts } from 'contentlayer/generated';
import styles from '../page.module.scss';
import Keyword from 'components/post/Keyword';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PostPreview from 'components/post/PostPreview';
import KeywordWrapper from 'components/post/KeywordWrapper';

const KEYWORDS = allPosts.reduce(
  (acc: string[], cur) => {
    cur.keywords?.forEach((keyword) => {
      if (!acc.includes(keyword)) acc.push(keyword);
    });
    return acc;
  },
  ['All'],
);
export default function Page() {
  const searchParams = useSearchParams();
  const [activeKeyword, setActiveKeyword] = useState<string>(
    searchParams.get('path') ?? 'All',
  );
  const hasAll = activeKeyword.includes('All');

  const getFilteredPosts = () => {
    const sortedPosts = [...allPosts].sort().reverse();
    if (hasAll) return sortedPosts;
    return sortedPosts.filter(({ keywords }) =>
      keywords?.includes(activeKeyword),
    );
  };
  const filteredPosts = getFilteredPosts();

  const handleKeywordClick = (name: string) => setActiveKeyword(name);

  useEffect(() => {
    setActiveKeyword(searchParams.get('path') ?? '');
  }, [searchParams]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>
          Filtered Posts <small>({filteredPosts.length})</small>
        </h1>
      </div>
      <KeywordWrapper isKeywordsPage>
        {KEYWORDS.map((keyword) => (
          <Keyword
            key={keyword}
            name={keyword}
            isKeywordsPage
            isActive={keyword === activeKeyword}
            onClick={handleKeywordClick}
          />
        ))}
      </KeywordWrapper>
      <div className={styles.postWarpper}>
        {filteredPosts.map((post) => (
          <PostPreview post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
