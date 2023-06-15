import { sortedPosts } from 'lib/contentlayer';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import styles from './posts.module.scss';
import PostNavigator from 'components/post/PostNavigator';
import Utterances from 'components/comment/Utterances';
import Keywords from 'components/post/Keywords';

type PostsResult = {
  previousPost?: Post;
  nextPost?: Post;
  currentPost?: Post;
};

export const generateStaticParams = async () =>
  sortedPosts.map((post: Post) => {
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
  const currentPost = sortedPosts.find(
    (post: Post) => post.url === `/posts/${decodedSlug}`,
  );
  return {
    title: currentPost?.title,
    description: currentPost?.description,
    openGraph: {
      title: currentPost?.title,
      description: currentPost?.description,
      url: currentPost?.url,
      siteName: '기술 블로그',
      images: [
        {
          url: currentPost?.thumbnail,
          width: 800,
          height: 600,
        },
        {
          url: currentPost?.thumbnail,
          width: 1800,
          height: 1600,
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
  };
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

  const { currentPost, nextPost, previousPost } = sortedPosts.reduce(
    (acc: PostsResult, cur, idx, src) => {
      if (cur.url === `/posts/${decodedSlug}`) {
        acc.currentPost = cur;
        if (idx) acc.previousPost = src[idx - 1];
        if (src.length - 1 > idx) acc.nextPost = src[idx + 1];
      }
      return acc;
    },
    {},
  );

  if (!currentPost) {
    return notFound();
  }
  const MDXContent = getMDXComponent(currentPost.body.code);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <time dateTime={currentPost.date}>
            {format(parseISO(currentPost.date), 'LLLL d yyyy')}
          </time>
          <h1>{currentPost.title}</h1>
          <Keywords keywords={currentPost.keywords} />
        </div>
        <article>
          <MDXContent components={components} />
        </article>
        <PostNavigator nextPost={nextPost} previousPost={previousPost} />
        <Utterances />
      </div>
    </div>
  );
}
