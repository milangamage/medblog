/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "medfuturebucket.s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: "/blog", // Add this line
  assetPrefix: "/blog/", // Add this line
  trailingSlash: true, // Optional: ensures all paths have a trailing slash
};

export default nextConfig;
