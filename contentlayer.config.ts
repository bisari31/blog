import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
    },
    keywords: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) =>
        `/posts/${post.title
          .replace(/[^a-zA-Z0-9가-힣]+/g, '-')
          .toLowerCase()}`,
    },
  },
}));

const rehypeoptions = {
  // Use one of Shiki's packaged themes
  theme: 'dark-plus',
  // Set to true to keep the background color
  keepBackground: true,
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node: any, id: any) {
    node.properties.className = ['word'];
  },
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypeoptions]],
  },
});
