/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: "",
  basePath: "",
  output: "export",
};

export default nextConfig;
