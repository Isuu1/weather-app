/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
        pathname: "**",
      },
    ],
  },
  logging: { fetches: { fullUrl: true } },
};

export default nextConfig;
