import Utterances from 'components/comment/utterances';
import KeywordLinkButton from 'components/keyword/keyword-link-button';
import AnChorComponent from 'components/mdx-components/anchor-component';
import Heading4Component from 'components/mdx-components/heading4-component';
import ImageComponent from 'components/mdx-components/image-component';
import PostNavigator from 'components/post/post-navigator';
import { title } from 'constants/metadata';
import { format, parseISO } from 'date-fns';
import { latestPost } from 'lib/contentlayer';
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer/hooks';
import MorePost from 'components/post/more-post';

type PostsResult = {
  previousPost?: Post;
  nextPost?: Post;
  currentPost?: Post;
};

export const generateStaticParams = async () =>
  latestPost.map((post: Post) => {
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
  const currentPost = latestPost.find((post: Post) => post.url === decodedSlug);
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
    // img: ImageComponent,
    // a: AnChorComponent,
    // h4: Heading4Component,
  };

  const decodedSlug = decodeURIComponent(slug);

  const { currentPost, nextPost, previousPost } = latestPost.reduce(
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
    <article className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-5 pb-20 pt-5">
        <h1 className="text-6xl font-bold leading-tight text-gray-800">
          {currentPost.title}
        </h1>
        <time
          dateTime={currentPost.date}
          className="text-sm font-semibold text-gray-600"
        >
          {format(parseISO(currentPost.date), 'LLLL d, yyyy')}
        </time>
        <ul className="flex gap-[10px]">
          {currentPost.keywords?.map((keyword) => (
            <li key={keyword}>
              <KeywordLinkButton
                keyword={keyword}
                className="bg-white outline outline-1 outline-gray-200 hover:outline-none"
              >
                {keyword}
              </KeywordLinkButton>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <MDXContent components={components} />
      </div>
      <MorePost />
      {/* <PostNavigator nextPost={nextPost} previousPost={previousPost} />
      <Utterances /> */}
    </article>
  );
}
