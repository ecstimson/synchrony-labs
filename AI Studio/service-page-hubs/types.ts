import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceSubpage {
  title: string;
  description: string;
  href: string;
}

export interface FeatureSectionData {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  reverse?: boolean; // If true, image is on left
}

export interface ValueProp {
  title: string;
  description: string;
}

export interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
}

export interface CoreStudyArea {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}