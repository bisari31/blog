import { sortedPosts } from 'lib/contentlayer';
import PostList from 'components/post/PostList';

export default function page() {
  return (
    <PostList posts={sortedPosts} isMainPage>
      {null}
    </PostList>
  );
}
