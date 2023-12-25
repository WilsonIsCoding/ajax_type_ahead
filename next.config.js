/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export", // 用這行替換原來的 export
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

export default nextConfig;
