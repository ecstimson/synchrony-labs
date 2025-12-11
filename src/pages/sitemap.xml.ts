import type { APIRoute } from 'astro';
import { getAllHubPages, getAllParentPages, getAllServicePages } from '../utils/dataLoader';

const siteUrl = import.meta.env.SITE_URL || 'https://synchronylabs.com';

export const GET: APIRoute = () => {
  const hubPages = getAllHubPages();
  const parentPages = getAllParentPages();
  const servicePages = getAllServicePages();

  // Static pages
  const staticPages = [
    { url: `${siteUrl}/`, priority: '1.0', changefreq: 'weekly' },
    { url: `${siteUrl}/contact`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/preclinical-facility`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/preclinical-services`, priority: '0.9', changefreq: 'weekly' },
  ];

  // Hub pages
  const hubUrls = hubPages.map(page => ({
    url: `${siteUrl}${page.slug}`,
    priority: '0.9',
    changefreq: 'weekly' as const,
  }));

  // Parent pages
  const parentUrls = parentPages.map(page => {
    const fullPath = page.parentHubUrl.replace('/preclinical-services/', '') + '/' + page.slug;
    return {
      url: `${siteUrl}/preclinical-services/${fullPath}`,
      priority: '0.8',
      changefreq: 'weekly' as const,
    };
  });

  // Service pages
  const serviceUrls = servicePages.map(page => {
    const parentPath = page.parentHubUrl.replace('/preclinical-services/', '');
    const fullPath = `${parentPath}/${page.slug}`;
    return {
      url: `${siteUrl}/preclinical-services/${fullPath}`,
      priority: '0.7',
      changefreq: 'monthly' as const,
    };
  });

  const allUrls = [...staticPages, ...hubUrls, ...parentUrls, ...serviceUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};




