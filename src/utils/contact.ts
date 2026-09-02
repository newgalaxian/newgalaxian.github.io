import { SITE } from '@/data/site';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Opens the visitor's email client with a pre-filled message addressed
 * directly to Anwar. Deliberately simple and dependency-free: no
 * third-party form service, no build-time environment variable — so it
 * behaves identically in local dev and production, with nothing to
 * misconfigure in CI.
 */
export function sendContactMessage(data: ContactMessage): void {
  const subject = encodeURIComponent(`[Portfolio] ${data.subject}`);
  const body = encodeURIComponent(
    `${data.message}\n\n— ${data.name}\n${data.email}`,
  );
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}
