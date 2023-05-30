import { allPosts } from 'contentlayer/generated';
import styles from './posts.module.scss';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import PostNavigator from 'components/post/PostNavigator';
import Keyword from 'components/post/Keyword';
import KeywordWrapper from 'components/post/KeywordWrapper';

export const generateStaticParams = async () =>
  allPosts.map((post: Post) => {
    return {
      slug: post.url,
    };
  });

export const generateMetadata = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const decodedSlug = decodeURIComponent(slug);
  const post = allPosts.find(
    (post: Post) => post.url === `/posts/${decodedSlug}`,
  );
  return { title: post?.title, description: post?.description };
};

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const ResponsiveImage = (props: any) => (
    <Image
      src={props.src}
      alt={props.alt}
      width={900}
      height={500}
      style={{ width: '100%', height: 'auto' }}
    />
  );
  const components = {
    img: ResponsiveImage,
  };

  const decodedSlug = decodeURIComponent(slug);

  const { currentPost, nextPost, previousPost } = [...allPosts]
    .sort()
    .reverse()
    .reduce((acc: PostsResult, cur, idx, src) => {
      if (cur.url === `/posts/${decodedSlug}`) {
        acc.currentPost = cur;
        if (idx) acc.previousPost = src[idx - 1];
        if (src.length - 1 > idx) acc.nextPost = src[idx + 1];
      }
      return acc;
    }, {});

  let MDXContent;

  if (!currentPost) {
    return <div>404</div>;
  } else {
    MDXContent = getMDXComponent(currentPost.body.code);
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <time dateTime={currentPost.date}>
            {format(parseISO(currentPost.date), 'LLLL d yyyy')}
          </time>
          <h1>{currentPost.title}</h1>
          <KeywordWrapper>
            {currentPost.keywords?.map((tag) => (
              <Keyword name={tag} key={tag} />
            ))}
          </KeywordWrapper>
        </div>
        <article>
          <MDXContent components={components} />
        </article>
        <PostNavigator nextPost={nextPost} previousPost={previousPost} />
      </div>
    </div>
  );
}
