import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  ctaText: string;
  ctaHref: string;
}

export interface FeatureItem {
  text: string;
}