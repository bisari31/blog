import { latestPost } from 'lib/contentlayer';

export const GET = async () => {
  const SITE_URL = process.env.SITE_URL;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	  <url>
	    <loc>${SITE_URL}</loc>
	  </url>
    ${latestPost
      .map(({ url }) => {
        return `
      <url>
          <loc>${SITE_URL}/${encodeURI(url)}</loc>
      </url>
    `;
      })
      .join('')}
  </urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });
};
