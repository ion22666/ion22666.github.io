module.exports = {
    plugins: [
        'postcss-flexbugs-fixes',
        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                    'custom-properties': false,
                },
            },
        ],
        [
            '@fullhuman/postcss-purgecss',
            {
                content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                safelist: ['html', 'body'],
            },
        ],
    ],
    webpack: config => {
        // Add your custom Webpack configurations here

        // Return the updated config
        return config;
    },
    optimize: true, // disable if you want to export
    reactStrictMode: true,
    env: {
        dir: '/',
    },
    swcMinify: true,
    /*
Don't remove these this uses the protocol that are need to function properly
* https://nextjs.org/docs/pages/building-your-application/optimizing/images#adding-structured-data

 */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.vercel.app',
                pathname: '/api/**',
            },
            {
                protocol: 'https',
                hostname: '**.vercel.app',
                pathname: '?app=ionmocanu-com-git-main-ionmocanu.vercel.app',
            },
            {
                protocol: 'https',
                hostname: '**.shields.io',
                pathname: '/badge/**',
            },
            {
                protocol: 'https',
                hostname: '**.shields.io',
                pathname: '/github/**',
            },
            {
                protocol: 'https',
                hostname: '**.githubusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '**.medium.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                pathname: '/ion-mocanu/portfolio/**',
            },
        ],
    },
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
        };
    },
    output: {
        // Configure your export settings here,
        // For example, if you want to export to the "out" directory:
        directory: 'out',
    },

    // https://nextjs.org/docs/messages/swc-disabled
    experimental: {
        forceSwcTransforms: true,
    },
};
