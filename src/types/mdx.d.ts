interface Post {
  title: string;
  date: date;
  description: string;
  thumbnail?: string;
  keywords?: string[];
  body: { code: string };

  _id: string;
  _raw: {
    sourceFilePath: string;
    sourceFileName: string;
    sourceFileDir: string;
    contentType: string;
    flattenedPath: string;
  };
  type: string;
  url: string;
}

type PostsResult = {
  previousPost?: Post;
  nextPost?: Post;
  currentPost?: Post;
};
