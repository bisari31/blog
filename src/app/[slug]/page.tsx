import Utterances from 'components/comment/utterances';
import MorePost from 'components/post/more-post';
import { title } from 'constants/metadata';
import { format, parseISO } from 'date-fns';
import { latestPost } from 'lib/contentlayer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer/hooks';

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

  if (!currentPost) return notFound();

  const MDXContent = getMDXComponent(currentPost.body.code);

  return (
    <article className="mx-auto w-full max-w-3xl break-all">
      <div className="flex flex-col gap-5 pb-20 pt-5">
        <h1 className="text-4xl font-bold leading-tight">
          {currentPost.title}
        </h1>
        <time
          dateTime={currentPost.date}
          className="text-sm font-medium text-gray-500"
        >
          {format(parseISO(currentPost.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <div className="prose text-gray-300">
        <MDXContent
          components={{
            img: (props) => (
              <Image
                src={props.src ?? ''}
                alt={props.alt ?? 'image'}
                width={props.width ? +props.width : 900}
                height={props.height ? +props.height : 300}
              />
            ),
            h1: (props) => <h1 className="text-gray-400">{props.children}</h1>,
            h2: (props) => <h2 className="text-gray-400">{props.children}</h2>,
            h3: (props) => <h3 className="text-gray-400">{props.children}</h3>,
            h4: (props) => <h4 className="text-gray-400">{props.children}</h4>,
            h5: (props) => <h5 className="text-gray-400">{props.children}</h5>,
            strong: (props) => (
              <strong className="text-gray-500">{props.children}</strong>
            ),
            blockquote: (props) => (
              <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
                {props.children}
              </blockquote>
            ),
            a: (props) => (
              <Link
                className="text-gray-400"
                target="_blank"
                href={props.href || ''}
              >
                {props.children}
              </Link>
            ),
          }}
        />
      </div>
      {/* <MorePost nextPost={nextPost} previousPost={previousPost} /> */}
      <Utterances />
    </article>
  );
}
