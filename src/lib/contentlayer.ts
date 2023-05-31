import { allPosts } from 'contentlayer/generated';

export const sortedPosts = allPosts.sort((a, b) => {
  const pathA = Number(a._raw.flattenedPath.split('-')[1]);
  const pathB = Number(b._raw.flattenedPath.split('-')[1]);
  return pathB - pathA;
});

export const keywords = sortedPosts.reduce(
  (acc: string[], cur) => {
    cur.keywords?.forEach((keyword) => {
      if (!acc.includes(keyword)) acc.push(keyword);
    });
    return acc;
  },
  ['All'],
);
