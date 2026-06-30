/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yuyu-creative.tw",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
