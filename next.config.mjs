/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? "/portfolio" : "";

const nextConfig = {
    basePath: basePath
};

export default nextConfig;
