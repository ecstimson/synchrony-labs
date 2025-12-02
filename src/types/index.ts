// Common types
export interface SubPage {
  icon?: string;
  heading: string;
  text: string;
  url: string;
}

export interface WhyChooseCard {
  icon?: string;
  heading: string;
  text: string;
}

export interface FeaturedService {
  heading: string;
  text: string;
  ctaText: string;
  ctaUrl: string;
  image?: string;
}

export interface RelatedService {
  heading: string;
  text: string;
  ctaText: string;
  ctaUrl: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface CTASection {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  tertiaryButtonText?: string;
  tertiaryButtonLink?: string;
}

// Hub Page (Template 1)
export interface HubPage {
  slug: string;
  title: string;
  heroHeadline: string;
  heroDescription: string;
  subpagesSectionTitle: string;
  subpagesSectionDescription: string;
  subpages: SubPage[];
  whyChooseSectionTitle: string;
  whyChooseDescription: string;
  whyChooseCards: WhyChooseCard[];
  featuredServicesTitle: string;
  featuredServices: FeaturedService[];
  relatedSectionTitle: string;
  relatedSectionDescription: string;
  relatedServices: RelatedService[];
  cta: CTASection;
}

// Parent Page (Template 2) - Cardiovascular Parent Pages
export interface ParentPage {
  slug: string;
  title: string;
  parentHubName: string;
  parentHubUrl: string;
  heroHeadline: string;
  heroDescription: string;
  subServicesTitle: string;
  subServicesDescription: string;
  subServices: SubPage[];
  primaryContentTitle: string;
  primaryContentDescription: string;
  keyCapabilitiesTitle: string;
  capabilities: Capability[];
  whyChooseTitle: string;
  whyChooseCards: WhyChooseCard[];
  cta: CTASection;
}

// Service Detail Page (Template 3)
export interface ServicePage {
  slug: string;
  title: string;
  parentHubName: string;
  parentHubUrl: string;
  heroHeadline: string;
  heroDescription: string;
  primaryContentTitle: string;
  primaryContentDescription: string;
  keyCapabilitiesTitle: string;
  capabilities: Capability[];
  whyChooseTitle: string;
  whyChooseCards: WhyChooseCard[];
  cta: CTASection;
}

// Union type for all page types
export type PageData = HubPage | ParentPage | ServicePage;



