/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3.amazonaws.com'], // Adiciona o domínio de onde as imagens estão sendo carregadas
}};

export default nextConfig;
