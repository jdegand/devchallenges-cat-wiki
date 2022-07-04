/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  }, 
  images: {
    domains: ['cdn2.thecatapi.com'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
  },
}

module.exports = nextConfig
