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
  // Handle full path slugs (e.g., "cardiovascular-disease-testing/heart-valve-testing/tavr-testing")
  const slugParts = slug.split('/');
  const lastSlug = slugParts[slugParts.length - 1];
  
  // Try to find page by last slug first, then try full path
  let page = getPageBySlug(lastSlug) || getPageBySlug(slug);
  
  // If still not found, try searching all pages
  if (!page) {
    page = hubPages.find(p => p.slug === lastSlug || p.slug === slug) ||
           parentPages.find(p => p.slug === lastSlug || p.slug === slug) ||
           servicePages.find(p => p.slug === lastSlug || p.slug === slug);
  }
  
  if (!page) return [];

  const breadcrumbs: Array<{ label: string; url: string }> = [
    { label: 'Home', url: '/' },
  ];

  // Always add Preclinical Services for service pages
  if ('parentHubName' in page || slug.includes('preclinical-services') || slugParts.length > 0) {
    breadcrumbs.push({
      label: 'Preclinical Services',
      url: '/preclinical-services',
    });
  }

  // Add hub if it's a parent or service page
  if ('parentHubName' in page) {
    // Extract hub slug from parentHubUrl
    // e.g., "/preclinical-services/cardiovascular-disease-testing" -> "cardiovascular-disease-testing"
    const hubPath = page.parentHubUrl.replace('/preclinical-services/', '');
    const hubSlug = hubPath.split('/')[0];
    const hubPage = getHubPage(hubSlug);
    
    if (hubPage) {
      breadcrumbs.push({
        label: hubPage.heroHeadline || hubPage.title.replace(' | Synchrony Labs', ''),
        url: `/preclinical-services/${hubSlug}`,
      });
    }

    // Add parent if it's a service page
    if ('subServices' in page) {
      // This is a parent page, already added hub
    } else {
      // This is a service page, find parent from the URL path
      // e.g., "/preclinical-services/cardiovascular-disease-testing/heart-valve-testing" -> "heart-valve-testing"
      const parentPath = page.parentHubUrl.replace('/preclinical-services/', '');
      const pathParts = parentPath.split('/');
      if (pathParts.length > 1) {
        const parentSlug = pathParts[pathParts.length - 1];
        const parentPage = getParentPage(parentSlug);
        
        if (parentPage) {
          breadcrumbs.push({
            label: parentPage.heroHeadline || parentPage.title.replace(' | Synchrony Labs', ''),
            url: `/preclinical-services/${parentPath}`,
          });
        }
      }
    }
  }

  // Add current page
  const currentLabel = ('heroHeadline' in page) ? page.heroHeadline : page.title.replace(' | Synchrony Labs', '');
  breadcrumbs.push({
    label: currentLabel,
    url: `/preclinical-services/${slug}`,
  });

  return breadcrumbs;
}

export { hubPages, parentPages, servicePages };

