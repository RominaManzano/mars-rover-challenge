/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['mars.jpl.nasa.gov'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'mars.nasa.gov',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'mars.jpl.nasa.gov',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
