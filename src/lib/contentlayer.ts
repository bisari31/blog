import { allPosts } from 'contentlayer/generated';

export const latestPost = allPosts.sort((a, b) => {
  return b._raw.flattenedPath
    .split('-')[1]
    .localeCompare(a._raw.flattenedPath.split('-')[1]);
});
