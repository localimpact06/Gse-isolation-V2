/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
}
module.exports = nextConfig
