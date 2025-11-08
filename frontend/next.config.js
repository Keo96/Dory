/** @type {import('next').NextConfig} */
module.exports = {
  // Allow the Dory logo hosted on Supabase to be used with next/image
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qtrypzzcjebvfcihiynt.supabase.co',
      },
    ],
  },
};
