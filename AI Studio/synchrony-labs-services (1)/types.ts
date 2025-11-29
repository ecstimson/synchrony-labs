import { LucideIcon } from 'lucide-react';

export interface FeaturedService {
  name: string;
  link?: string;
}

export interface ServiceArea {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  featuredServices?: FeaturedService[];
  hasBackground?: boolean; // specialized gray background
  linkOnly?: boolean; // if it only has a "View All" link without list
}