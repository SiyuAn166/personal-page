/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? "/personal-page" : "";

const nextConfig = {
    basePath: basePath
};

export default nextConfig;
