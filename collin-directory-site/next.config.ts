const nextConfig = {
  output: 'export',            // Enables static HTML export (required for GitHub Pages)
  images: {
    unoptimized: true,         // Ensures Next.js doesn’t try to optimize images (which it can’t do statically)
  },
  trailingSlash: true          // Helps GitHub Pages route properly to folder-style paths
};

export default nextConfig;
