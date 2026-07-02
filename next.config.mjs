/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats from next/image (AVIF first, WebP fallback) so team
    // photos, avatars, process art, and remote WP images ship at the smallest
    // size the browser supports.
    formats: ["image/avif", "image/webp"],
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
