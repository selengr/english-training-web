/** @type {import('next').NextConfig} */
const nextConfig = {
   output : "standalone",
    images: { remotePatterns: [ {
        protocol: 'https',
        hostname: 'wtgtkec1ncke0twm.public.blob.vercel-storage.com'
      },
    ]}
  };

export default nextConfig;
