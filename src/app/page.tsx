import { sortedPosts } from 'lib/contentlayer';
import PostForm from 'components/post/PostForm';

export default function page() {
  return (
    <PostForm posts={sortedPosts} isMainPage>
      {null}
    </PostForm>
  );
}
