import PostPreview from 'components/post/post-preview';
import { latestPost } from 'lib/contentlayer';

export default function Main() {
  return (
    <div className="flex flex-1 flex-col-reverse md:flex-row">
      <section className="flex flex-1 flex-col gap-4 md:gap-7">
        {latestPost.map((post) => (
          <PostPreview post={post} key={post._id} />
        ))}
      </section>
    </div>
  );
}
