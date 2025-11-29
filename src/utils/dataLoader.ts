import type { HubPage, ParentPage, ServicePage } from '../types/index.js';

// Import JSON data (Astro will handle this at build time)
import hubPagesData from '../data/hub-pages.json';
import parentPagesData from '../data/parent-pages.json';
import servicePagesData from '../data/service-pages.json';
import indexData from '../data/index.json';

// Type assertions
const hubPages = hubPagesData as HubPage[];
const parentPages = parentPagesData as ParentPage[];
const servicePages = servicePagesData as ServicePage[];

export function getHubPage(slug: string): HubPage | undefined {
  return hubPages.find(page => page.slug === slug);
}

export function getAllHubPages(): HubPage[] {
  return hubPages;
}

export function getParentPage(slug: string): ParentPage | undefined {
  return parentPages.find(page => page.slug === slug);
}

export function getAllParentPages(): ParentPage[] {
  return parentPages;
}

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find(page => page.slug === slug);
}

export function getAllServicePages(): ServicePage[] {
  return servicePages;
}

export function getPageBySlug(slug: string): HubPage | ParentPage | ServicePage | undefined {
  return getHubPage(slug) || getParentPage(slug) || getServicePage(slug);
}

// Get all pages for a specific hub
export function getPagesByHub(hubSlug: string): (ParentPage | ServicePage)[] {
  return [
    ...parentPages.filter(page => page.parentHubUrl.includes(hubSlug)),
    ...servicePages.filter(page => page.parentHubUrl.includes(hubSlug)),
  ];
}

// Get child pages for a parent
export function getChildPages(parentSlug: string): ServicePage[] {
  return servicePages.filter(page => 
    page.parentHubUrl.includes(parentSlug)
  );
}

// Navigation helpers
export function getBreadcrumbs(slug: string): Array<{ label: string; url: string }> {
  const page = getPageBySlug(slug);
  if (!page) return [];

  const breadcrumbs: Array<{ label: string; url: string }> = [
    { label: 'Home', url: '/' },
  ];

  // Add hub if it's a parent or service page
  if ('parentHubName' in page) {
    // Find the hub page
    const hubSlug = page.parentHubUrl.split('/').pop() || '';
    const hubPage = getHubPage(hubSlug);
    
    if (hubPage) {
      breadcrumbs.push({
        label: hubPage.title.replace(' | Synchrony Labs', ''),
        url: `/preclinical-services/${hubSlug}`,
      });
    }

    // Add parent if it's a service page
    if ('subServices' in page) {
      // This is a parent page, already added hub
    } else {
      // This is a service page, find parent
      const parentSlug = page.parentHubUrl.split('/').slice(-2, -1)[0];
      const parentPage = getParentPage(parentSlug);
      
      if (parentPage) {
        breadcrumbs.push({
          label: parentPage.title.replace(' | Synchrony Labs', ''),
          url: `/preclinical-services/${parentPage.slug}`,
        });
      }
    }
  }

  // Add current page
  breadcrumbs.push({
    label: page.title.replace(' | Synchrony Labs', ''),
    url: `/preclinical-services/${slug}`,
  });

  return breadcrumbs;
}

export { hubPages, parentPages, servicePages };

