/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: isProd ? prefix : "",
  basePath: isProd ? prefix : "",
  output: "export",
};

export default nextConfig;
