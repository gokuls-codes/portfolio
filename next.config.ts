import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
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
  headers: async () => {
    return [
      {
        source: "/GokulKannan-Resume.pdf",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
