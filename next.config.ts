import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const withVanillaExtract = createVanillaExtractPlugin({
  externals: ["node_modules"],
});

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Handled by the CI
  },
  typescript: {
    ignoreBuildErrors: true, // Handled by the CI
  },
  compress: true,
};

export default withVanillaExtract(nextConfig);
