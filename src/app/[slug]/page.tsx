import { format, parseISO } from 'date-fns';
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer/hooks';

import { sortedPosts } from 'lib/contentlayer';
import styles from './posts.module.scss';

import PostNavigator from 'components/post/post-navigator';
import Utterances from 'components/comment/utterances';
import Keywords from 'components/post/keywords';
import AnChorComponent from 'components/mdx-components/anchor-component';
import Heading4Component from 'components/mdx-components/heading4-component';
import ImageComponent from 'components/mdx-components/image-component';
import { title } from 'app/metadata';

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
    (post: Post) => post.url === decodedSlug,
  );
  return {
    title: `${currentPost?.title} - ${title}`,
    description: currentPost?.description,
    openGraph: {
      title: `${currentPost?.title} - ${title}`,
      description: currentPost?.description,
      url: currentPost?.url,
      locale: 'ko_KR',
      type: 'website',
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
    },
  };
};

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const components = {
    img: ImageComponent,
    a: AnChorComponent,
    h4: Heading4Component,
  };

  const decodedSlug = decodeURIComponent(slug);

  const { currentPost, nextPost, previousPost } = sortedPosts.reduce(
    (acc: PostsResult, cur, idx, src) => {
      if (cur.url === decodedSlug) {
        acc.currentPost = cur;
        if (idx) acc.nextPost = src[idx - 1];
        if (src.length - 1 > idx) acc.previousPost = src[idx + 1];
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
    <div className={styles.postWrapper}>
      <div className={styles.postInner}>
        <div className={styles.header}>
          <time dateTime={currentPost.date}>
            {format(parseISO(currentPost.date), 'LLLL d, yyyy')}
          </time>
          <h1>{currentPost.title}</h1>
          <Keywords isDetailPage keywords={currentPost.keywords} />
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
