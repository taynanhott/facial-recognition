/** @type {import('next').NextConfig} */

export default {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/reconhecimento',
                permanent: false,
            },
        ];
    },
};