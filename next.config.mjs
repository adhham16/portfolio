import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

// /** @type {import('next').NextConfig} */
// const nextConfig = {
// };

// export default withMDX(nextConfig);

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  assetPrefix: isProd ? '/your-repository-name/' : '',
  basePath: isProd ? '/your-repository-name' : '',
  output: 'export'
};

export default withMDX(nextConfig);