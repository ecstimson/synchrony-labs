import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataDir = join(__dirname, '../src/data');
const rawDir = join(dataDir, 'raw');
const outputDir = join(dataDir);

// Helper functions
function parseSubPage(row, prefix, index) {
  const heading = row[`${prefix}_${index}_heading`] || row[`${prefix}_${index}_title`];
  const text = row[`${prefix}_${index}_text`] || row[`${prefix}_${index}_description`];
  const url = row[`${prefix}_${index}_url`] || row[`${prefix}_${index}_link`];
  const icon = row[`${prefix}_${index}_icon`];

  if (!heading || !text || !url) return null;

  return {
    icon: icon || undefined,
    heading,
    text,
    url: url.startsWith('http') ? url.replace(/^https?:\/\/[^\/]+/, '') : url,
  };
}

function parseWhyChooseCard(row, index) {
  const heading = row[`why_choose_${index}_title`] || row[`why_choose_${index}_heading`];
  const text = row[`why_choose_${index}_description`] || row[`why_choose_${index}_text`];
  const icon = row[`why_choose_${index}_icon`];

  if (!heading || !text) return null;

  return { icon: icon || undefined, heading, text };
}

function parseFeaturedService(row, index) {
  const heading = row[`featured_${index}_heading`];
  const text = row[`featured_${index}_text`];
  const ctaText = row[`featured_${index}_cta_text`];
  const ctaUrl = row[`featured_${index}_cta_url`];
  const image = row[`featured_${index}_image`];

  if (!heading || !text || !ctaText || !ctaUrl) return null;

  return {
    heading,
    text,
    ctaText,
    ctaUrl: ctaUrl.startsWith('http') ? ctaUrl.replace(/^https?:\/\/[^\/]+/, '') : ctaUrl,
    image: image || undefined,
  };
}

function parseRelatedService(row, index) {
  const heading = row[`related_${index}_heading`];
  const text = row[`related_${index}_text`];
  const ctaText = row[`related_${index}_cta_text`];
  const ctaUrl = row[`related_${index}_cta_url`];

  if (!heading || !text || !ctaText || !ctaUrl) return null;

  return {
    heading,
    text,
    ctaText,
    ctaUrl: ctaUrl.startsWith('http') ? ctaUrl.replace(/^https?:\/\/[^\/]+/, '') : ctaUrl,
  };
}

function parseCapability(row, index) {
  const title = row[`capability_${index}_title`];
  const description = row[`capability_${index}_description`];

  if (!title || !description) return null;

  return { title, description };
}

function parseCTA(row) {
  return {
    title: row.cta_title || '',
    description: row.cta_description || '',
    primaryButtonText: row.cta_primary_button_text || '',
    primaryButtonLink: (row.cta_primary_button_link || '').replace(/^https?:\/\/[^\/]+/, ''),
    secondaryButtonText: row.cta_secondary_button_text || undefined,
    secondaryButtonLink: row.cta_secondary_button_link ? row.cta_secondary_button_link.replace(/^https?:\/\/[^\/]+/, '') : undefined,
    tertiaryButtonText: row.cta_tertiary_button_text || undefined,
    tertiaryButtonLink: row.cta_tertiary_button_link ? row.cta_tertiary_button_link.replace(/^https?:\/\/[^\/]+/, '') : undefined,
  };
}

function parseHubPage(row) {
  const subpages = [];
  for (let i = 1; i <= 10; i++) {
    const subpage = parseSubPage(row, 'subpage', i);
    if (subpage) subpages.push(subpage);
  }

  const whyChooseCards = [];
  for (let i = 1; i <= 5; i++) {
    const card = parseWhyChooseCard(row, i);
    if (card) whyChooseCards.push(card);
  }

  const featuredServices = [];
  for (let i = 1; i <= 5; i++) {
    const service = parseFeaturedService(row, i);
    if (service) featuredServices.push(service);
  }

  const relatedServices = [];
  for (let i = 1; i <= 5; i++) {
    const service = parseRelatedService(row, i);
    if (service) relatedServices.push(service);
  }

  return {
    slug: row.page_slug,
    title: row.page_title,
    heroHeadline: row.hero_headline,
    heroDescription: row.hero_description,
    subpagesSectionTitle: row.subpages_section_title,
    subpagesSectionDescription: row.subpages_section_description,
    subpages,
    whyChooseSectionTitle: row.why_choose_section_title,
    whyChooseDescription: row.why_choose_description,
    whyChooseCards,
    featuredServicesTitle: row.featured_services_title,
    featuredServices,
    relatedSectionTitle: row.related_section_title,
    relatedSectionDescription: row.related_section_description,
    relatedServices,
    cta: parseCTA(row),
  };
}

function parseParentPage(row) {
  const subServices = [];
  for (let i = 1; i <= 10; i++) {
    const subService = parseSubPage(row, 'sub_service', i);
    if (subService) subServices.push(subService);
  }

  const capabilities = [];
  for (let i = 1; i <= 10; i++) {
    const capability = parseCapability(row, i);
    if (capability) capabilities.push(capability);
  }

  const whyChooseCards = [];
  for (let i = 1; i <= 5; i++) {
    const card = parseWhyChooseCard(row, i);
    if (card) whyChooseCards.push(card);
  }

  return {
    slug: row.page_slug,
    title: row.page_title,
    parentHubName: row.parent_hub_name,
    parentHubUrl: row.parent_hub_url.replace(/^https?:\/\/[^\/]+/, ''),
    heroHeadline: row.hero_headline,
    heroDescription: row.hero_description,
    subServicesTitle: row.sub_services_title,
    subServicesDescription: row.sub_services_description,
    subServices,
    primaryContentTitle: row.primary_content_title,
    primaryContentDescription: row.primary_content_description,
    keyCapabilitiesTitle: row.key_capabilities_title,
    capabilities,
    whyChooseTitle: row.why_choose_title,
    whyChooseCards,
    cta: parseCTA(row),
  };
}

function parseServicePage(row) {
  const capabilities = [];
  for (let i = 1; i <= 10; i++) {
    const capability = parseCapability(row, i);
    if (capability) capabilities.push(capability);
  }

  const whyChooseCards = [];
  for (let i = 1; i <= 5; i++) {
    const card = parseWhyChooseCard(row, i);
    if (card) whyChooseCards.push(card);
  }

  return {
    slug: row.page_slug,
    title: row.page_title,
    parentHubName: row.parent_hub_name,
    parentHubUrl: row.parent_hub_url.replace(/^https?:\/\/[^\/]+/, ''),
    heroHeadline: row.hero_headline,
    heroDescription: row.hero_description,
    primaryContentTitle: row.primary_content_title,
    primaryContentDescription: row.primary_content_description,
    keyCapabilitiesTitle: row.key_capabilities_title,
    capabilities,
    whyChooseTitle: row.why_choose_title,
    whyChooseCards,
    cta: parseCTA(row),
  };
}

// Main processing function
function processCSVFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

  return records;
}

// Determine file type and process accordingly
function processFile(filename) {
  const filePath = join(rawDir, filename);
  const records = processCSVFile(filePath);

  // Determine file type based on structure
  const firstRow = records[0];
  let pages = [];

  if (firstRow.subpages_section_title) {
    // Hub page
    pages = records.map(parseHubPage);
  } else if (firstRow.sub_services_title || firstRow.subservices_section_title) {
    // Parent page
    pages = records.map(parseParentPage);
  } else {
    // Service detail page
    pages = records.map(parseServicePage);
  }

  return pages;
}

// Main execution
console.log('Processing CSV files...');

const files = readdirSync(rawDir).filter(f => f.endsWith('.csv'));
const hubPages = [];
const parentPages = [];
const servicePages = [];

files.forEach(filename => {
  console.log(`Processing ${filename}...`);
  const pages = processFile(filename);

  pages.forEach(page => {
    // Determine type based on structure
    if ('subpages' in page) {
      hubPages.push(page);
    } else if ('subServices' in page) {
      parentPages.push(page);
    } else {
      servicePages.push(page);
    }
  });
});

// Write output files
writeFileSync(
  join(outputDir, 'hub-pages.json'),
  JSON.stringify(hubPages, null, 2)
);

writeFileSync(
  join(outputDir, 'parent-pages.json'),
  JSON.stringify(parentPages, null, 2)
);

writeFileSync(
  join(outputDir, 'service-pages.json'),
  JSON.stringify(servicePages, null, 2)
);

// Create index for quick lookup
const allPages = {
  hubs: hubPages.reduce((acc, page) => {
    acc[page.slug] = page;
    return acc;
  }, {}),
  parents: parentPages.reduce((acc, page) => {
    acc[page.slug] = page;
    return acc;
  }, {}),
  services: servicePages.reduce((acc, page) => {
    acc[page.slug] = page;
    return acc;
  }, {}),
};

writeFileSync(
  join(outputDir, 'index.json'),
  JSON.stringify(allPages, null, 2)
);

console.log(`\n✓ Processed ${hubPages.length} hub pages`);
console.log(`✓ Processed ${parentPages.length} parent pages`);
console.log(`✓ Processed ${servicePages.length} service pages`);
console.log('✓ Content processing complete!');



