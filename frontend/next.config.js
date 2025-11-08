/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // `remotePatterns` must be an array of pattern objects — not an object containing
    // another `remotePatterns` property. See: https://nextjs.org/docs/api-reference/next/image
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qtrypzzcjebvfcihiynt.supabase.co",
      }
    ]
  }
};

//export default nextConfig;
module.exports = nextConfig;
