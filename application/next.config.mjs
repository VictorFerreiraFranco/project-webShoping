import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: 'utfs.io'},
            {hostname: 'www.google.com'},
            {hostname: 'scontent.fcpq5-1.fna.fbcdn.net'},
            {hostname: 'provinciamarcas.com.br'},
            {hostname: 'www.designtagebuch.de'},
            {hostname: 'i.pinimg.com'},
            {hostname: 'cdn.worldvectorlogo.com'},
            {hostname: 'upload.wikimedia.org'},
        ]
    }
};

export default nextConfig;
