import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,

  webpack: (config) => {
    // 👇 ADD THIS ALIAS FIX
    config.resolve.alias['@'] = resolve(__dirname, 'src');
    return config;
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wrybshvalgqtaodlqmol.supabase.co',
        pathname: '/**',
      },
    ],
  },

  env: {
    NEXT_PUBLIC_SUPABASE_URL:
      'https://wrybshvalgqtaodlqmol.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyeWJzaHZhbGdxdGFvZGxxbW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMzMyNzcsImV4cCI6MjAzMzcwOTI3N30.i-2n2Y3fXbFw2U21F0D4w32yUv4vGjV2G0i6pB1U3TU',
  },
};

export default nextConfig;
