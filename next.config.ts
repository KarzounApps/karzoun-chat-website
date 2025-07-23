import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper UTF-8 handling
  experimental: {
    esmExternals: true,
  },
  // Configure webpack to handle UTF-8 properly
  webpack: (config, { isServer }) => {
    // Ensure proper encoding for all file processing
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          // Ensure UTF-8 encoding is preserved
          compact: false,
        },
      },
    });

    return config;
  },
  // Set proper headers for UTF-8
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
        ],
      },
    ];
  },
};

export default nextConfig;