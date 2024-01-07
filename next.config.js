/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
      },
      experimental: {
        // ppr: true,
        // serverActions:true
      },
      env: {
        DOMAIN: 'http://localhost:3000'
      }

}

module.exports = nextConfig





// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//       appDir: true,
//     //   topLevelAwait: true,
//     }
     
//   }
  
//   module.exports = nextConfig