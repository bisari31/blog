import { allPosts } from 'contentlayer/generated';

export const sortedPosts = allPosts.sort((a, b) => {
  const pathA = +a._raw.flattenedPath.split('-')[1];
  const pathB = +b._raw.flattenedPath.split('-')[1];
  return pathB - pathA;
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
  sortedKeywords.unshift('All');
  return sortedKeywords;
};

export const sortedUniqueKeywords = getSortedUniqueKeywords(allPosts);
