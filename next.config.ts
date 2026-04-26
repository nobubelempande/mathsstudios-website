import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output as static site for easy deployment to Cloudflare Pages
  // output: "export",  // Uncomment when ready to deploy statically

  images: {
    // Allow SVG and other image formats
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
