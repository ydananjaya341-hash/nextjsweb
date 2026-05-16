/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export mode – generates HTML files for all pages
  output: 'export',
  
  // Disable image optimization since we're exporting static files
  // (Netlify handles serving images as-is)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Optional: trailing slashes for cleaner URLs (can be true or false)
  trailingSlash: false,
  
  // Optional: skip trailing slash redirect (avoids 308 redirects)
  skipTrailingSlashRedirect: true,
  
  // Optional: domain for asset prefix (leave empty unless using CDN)
  // assetPrefix: '',
  
  // Ensure dynamic routes are properly exported
  // (all brand/[slug] pages will be generated at build time)
};

module.exports = nextConfig;
