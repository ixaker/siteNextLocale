/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://site.qpart.com.ua/',
    generateRobotsTxt: false,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
};
