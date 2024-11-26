/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  output: 'export', // Включение статической генерации
  images: {
    unoptimized: true, // Отключает API оптимизации изображений
  },
};

export default nextConfig;
