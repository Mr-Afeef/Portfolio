import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: { domains: [] }, // remote images ho to yahan domains do
  experimental: { typedRoutes: true },
};

export default nextConfig;