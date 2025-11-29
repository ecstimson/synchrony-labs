import { parse } from 'csv-parse/sync';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { HubPage, ParentPage, ServicePage, SubPage, WhyChooseCard, FeaturedService, RelatedService, Capability, CTASection } from '../types/index.js';

function parseSubPage(row: Record<string, string>, prefix: string, index: number): SubPage | null {
  const heading = row[`${prefix}_${index}_heading`] || row[`${prefix}_${index}_title`];
  const text = row[`${prefix}_${index}_text`] || row[`${prefix}_${index}_description`];
  const url = row[`${prefix}_${index}_url`] || row[`${prefix}_${index}_link`];
  const icon = row[`${prefix}_${index}_icon`];

  if (!heading || !text || !url) return null;

  return {
    icon,
    heading,
    text,
    url: url.startsWith('http') ? url : url.replace(/^https?:\/\/[^\/]+/, ''),
  };
}

function parseWhyChooseCard(row: Record<string, string>, index: number): WhyChooseCard | null {
  const heading = row[`why_choose_${index}_title`] || row[`why_choose_${index}_heading`];
  const text = row[`why_choose_${index}_description`] || row[`why_choose_${index}_text`];
  const icon = row[`why_choose_${index}_icon`];

  if (!heading || !text) return null;

  return { icon, heading, text };
}

function parseFeaturedService(row: Record<string, string>, index: number): FeaturedService | null {
  const heading = row[`featured_${index}_heading`];
  const text = row[`featured_${index}_text`];
  const ctaText = row[`featured_${index}_cta_text`];
  const ctaUrl = row[`featured_${index}_cta_url`];
  // Ignore CSV image fields - images are determined by heading name
  const image = undefined;

  if (!heading || !text || !ctaText || !ctaUrl) return null;

  return {
    heading,
    text,
    ctaText,
    ctaUrl: ctaUrl.startsWith('http') ? ctaUrl : ctaUrl.replace(/^https?:\/\/[^\/]+/, ''),
    image,
  };
}

function parseRelatedService(row: Record<string, string>, index: number): RelatedService | null {
  const heading = row[`related_${index}_heading`];
  const text = row[`related_${index}_text`];
  const ctaText = row[`related_${index}_cta_text`];
  const ctaUrl = row[`related_${index}_cta_url`];

  if (!heading || !text || !ctaText || !ctaUrl) return null;

  return {
    heading,
    text,
    ctaText,
    ctaUrl: ctaUrl.startsWith('http') ? ctaUrl : ctaUrl.replace(/^https?:\/\/[^\/]+/, ''),
  };
}

function parseCapability(row: Record<string, string>, index: number): Capability | null {
  const title = row[`capability_${index}_title`];
  const description = row[`capability_${index}_description`];

  if (!title || !description) return null;

  return { title, description };
}

function parseCTA(row: Record<string, string>): CTASection {
  return {
    title: row.cta_title || '',
    description: row.cta_description || '',
    primaryButtonText: row.cta_primary_button_text || '',
    primaryButtonLink: (row.cta_primary_button_link || '').replace(/^https?:\/\/[^\/]+/, ''),
    secondaryButtonText: row.cta_secondary_button_text,
    secondaryButtonLink: row.cta_secondary_button_link ? row.cta_secondary_button_link.replace(/^https?:\/\/[^\/]+/, '') : undefined,
    tertiaryButtonText: row.cta_tertiary_button_text,
    tertiaryButtonLink: row.cta_tertiary_button_link ? row.cta_tertiary_button_link.replace(/^https?:\/\/[^\/]+/, '') : undefined,
  };
}

export function parseHubPage(row: Record<string, string>): HubPage {
  const subpages: SubPage[] = [];
  for (let i = 1; i <= 10; i++) {
    const subpage = parseSubPage(row, 'subpage', i);
    if (subpage) subpages.push(subpage);
  }

  const whyChooseCards: WhyChooseCard[] = [];
  for (let i = 1; i <= 5; i++) {
    const card = parseWhyChooseCard(row, i);
    if (card) whyChooseCards.push(card);
  }

  const featuredServices: FeaturedService[] = [];
  for (let i = 1; i <= 5; i++) {
    const service = parseFeaturedService(row, i);
    if (service) featuredServices.push(service);
  }

  const relatedServices: RelatedService[] = [];
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

export function parseParentPage(row: Record<string, string>): ParentPage {
  const subServices: SubPage[] = [];
  for (let i = 1; i <= 10; i++) {
    const subService = parseSubPage(row, 'sub_service', i);
    if (subService) subServices.push(subService);
  }

  const capabilities: Capability[] = [];
  for (let i = 1; i <= 10; i++) {
    const capability = parseCapability(row, i);
    if (capability) capabilities.push(capability);
  }

  const whyChooseCards: WhyChooseCard[] = [];
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

export function parseServicePage(row: Record<string, string>): ServicePage {
  const capabilities: Capability[] = [];
  for (let i = 1; i <= 10; i++) {
    const capability = parseCapability(row, i);
    if (capability) capabilities.push(capability);
  }

  const whyChooseCards: WhyChooseCard[] = [];
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

export function processCSVFile(filePath: string): any[] {
  const content = readFileSync(filePath, 'utf-8');
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as Record<string, string>[];

  return records;
}

