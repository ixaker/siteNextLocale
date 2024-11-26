/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://site.qpart.com.ua/', // Ваш домен
    generateRobotsTxt: true, // Генерация robots.txt
    sitemapSize: 5000, // Максимум страниц в одном sitemap файле
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }, // Разрешение для всех страниц
      ],
    },
  };
  