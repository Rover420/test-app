/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: prod ? false : true,
})

const nextConfig = withPWA({
  productionBrowserSourceMaps: true,
  images: {
    domains: ['https://avatars.dicebear.com/', 'https://dicebear.com/', 'https://api.dicebear.com/', 'api.dicebear.com', 'https://cdn-images-1.medium.com/', 'cdn-images-1.medium.com', 'medium.com']
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push({ bufferutil: "bufferutil", "utf-8-validate": "utf-8-validate", "supports-color": "supports-color" }); 
    }

    return config;
  },
})

module.exports = nextConfig
