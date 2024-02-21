/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
    swcMinify: false, // it should be false by default
  },
};

module.exports = nextConfig;
