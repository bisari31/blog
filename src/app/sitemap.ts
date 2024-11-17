import { latestPost } from 'lib/contentlayer';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = process.env.SITE_URL;
  const posts = latestPost.map((post) => ({
    url: `${SITE_URL}/${encodeURI(post.url)}`,
    lastModified: new Date(),
  }));
  return [{ url: `${SITE_URL}`, lastModified: new Date() }, ...posts];
}
