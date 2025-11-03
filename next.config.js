/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.DEPLOY_TARGET === 'github-pages' ? 'export' : undefined,
  basePath: process.env.DEPLOY_TARGET === 'github-pages' ? '/marcus2v2-fyniq-processor-dashboard' : '',
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
