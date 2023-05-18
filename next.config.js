/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['images.velog.io'],
  },
};

const withMDX = require('@next/mdx')();
// module.exports = nextConfig;
module.exports = withMDX(nextConfig);
