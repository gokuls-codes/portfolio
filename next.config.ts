import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  turbo: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  redirects: async () => {
    return [
      {
        source: "/resume",
        destination: "/GokulKannan-Resume.pdf",
        permanent: true,
      },
      {
        source: "/resume.pdf",
        destination: "/GokulKannan-Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
