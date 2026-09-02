/**
 * Certifications — from Anwar's CV. Years remain unconfirmed
 * (see docs/TODO.md).
 */
export interface Certification {
  title: string;
  /** Issuing organisation, when known. */
  issuer?: string;
  /** Year earned, when known. */
  year?: string;
  icon: string;
}

export const CERTIFICATIONS: Certification[] = [
  { title: 'Android Developer', issuer: 'Udemy', icon: 'Smartphone' },
  { title: 'Flutter Developer', issuer: 'Udemy', icon: 'Smartphone' },
  { title: 'Digital Marketing & SEO', issuer: 'Udemy', icon: 'TrendingUp' },
];
