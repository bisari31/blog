interface Post {
  title: string;
  img: string;
  description: string;
  date: {
    long: string;
    iso: string;
  };
}

interface MdxMataData {
  id: string;
  post: Post;
}
