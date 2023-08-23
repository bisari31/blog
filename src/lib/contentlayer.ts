import { allPosts } from 'contentlayer/generated';

export const sortedPosts = allPosts.sort((a, b) => {
  return b._raw.flattenedPath
    .split('-')[1]
    .localeCompare(a._raw.flattenedPath.split('-')[1]);
});

const getSortedUniqueKeywords = (posts: Post[]) => {
  const allKeywords: string[] = [];
  posts.forEach((post) => allKeywords.push(...(post.keywords ?? '')));
  const uniqueKeywords = [...new Set(allKeywords)];

  const keywordCounts: { [key: string]: number } = {};

  allKeywords.forEach(
    (keyword) => (keywordCounts[keyword] = (keywordCounts[keyword] ?? 0) + 1),
  );

  const sortedKeywords = uniqueKeywords.sort(
    (a, b) => keywordCounts[b] - keywordCounts[a],
  );
  sortedKeywords.unshift('all');
  return sortedKeywords;
};

export const sortedUniqueKeywords = getSortedUniqueKeywords(allPosts);
