/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
      },
      experimental: {
        // ppr: true,
        // serverActions:true
      },
      images: { domains: ['daisyui.com'] },
      env: {
        // DOMAIN: 'http://localhost:3000'
        DOMAIN: 'https://english-training-web.vercel.app/'

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