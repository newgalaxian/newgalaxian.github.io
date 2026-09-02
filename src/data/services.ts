import type { Service } from './types';

/**
 * Services offered. Narrowed to the 5 strongest, most CV-aligned offerings
 * for Dubai developer roles — each maps directly to Anwar's AKI work.
 */
export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    title: 'Website Development',
    description:
      'Fast, responsive, SEO-ready websites built with modern stacks — from marketing sites to full-stack web apps.',
    icon: 'Code2',
  },
  {
    slug: 'wordpress-development',
    title: 'WordPress Development',
    description:
      'Bespoke WordPress and WooCommerce builds with Elementor — easy to manage, quick to load.',
    icon: 'Layout',
  },
  {
    slug: 'shopify-development',
    title: 'Shopify Development',
    description:
      'Custom Shopify stores and theme work focused on conversion, speed, and a frictionless checkout.',
    icon: 'ShoppingBag',
  },
  {
    slug: 'seo',
    title: 'SEO',
    description:
      'Technical and on-page SEO, plus Google Business Profile setup and optimization, to improve rankings, indexing, and local visibility.',
    icon: 'Search',
  },
  {
    slug: 'speed-optimization',
    title: 'Website Speed Optimization',
    description:
      'Core Web Vitals and performance tuning to make existing sites noticeably faster.',
    icon: 'Gauge',
  },
];
