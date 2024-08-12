import { allPosts } from 'contentlayer/generated';

export const latestPost = allPosts.sort((a, b) => {
  return b._raw.flattenedPath
    .split('-')[1]
    .localeCompare(a._raw.flattenedPath.split('-')[1]);
});

export const keywordCounts: { [key: string]: number } = {};
const getSortedUniqueKeywords = (posts: Post[]) => {
  const allKeywords: string[] = [];
  posts.forEach((post) => allKeywords.push(...(post.keywords ?? '')));
  const uniqueKeywords = [...new Set(allKeywords)];

  allKeywords.forEach((keyword, idx) => {
    keywordCounts[keyword] = (keywordCounts[keyword] ?? 0) + 1;
    if (idx === allKeywords.length - 1) keywordCounts['all'] = allPosts.length;
  });

  const sortedKeywords = uniqueKeywords.sort(
    (a, b) => keywordCounts[b] - keywordCounts[a],
  );
  sortedKeywords.unshift('all');
  return sortedKeywords;
};

export const sortedUniqueKeywords = getSortedUniqueKeywords(allPosts);
