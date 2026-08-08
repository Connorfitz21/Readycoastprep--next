import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.readycoastprep.com" }],
        destination: "https://readycoastprep.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
