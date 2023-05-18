import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';

const postsDirectory = path.join(process.cwd(), 'src/app/posts');
const files = fs
  .readdirSync(postsDirectory)
  .filter((file) => file.includes('.mdx'));

export default function getMdxMataData(): MdxMataData[] {
  return files.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const filePath = path.join(postsDirectory, fileName);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);
    return {
      id,
      post: {
        title: data.title,
        img: 'https://images.velog.io/images/jay/post/3a497590-d1b6-414c-9f3f-7b6c7eb18f6d/img.png',
        description: data.description,
        date: {
          long: dayjs(data.date).format('MMM DD. YYYY'),
          iso: dayjs(data.date).format('YYYY-M-D'),
        },
      },
    };
  });
}
