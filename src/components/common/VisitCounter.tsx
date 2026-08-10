import { useState } from 'react';

const PAGE_ID = 'iamanwaralam-portfolio-site';
const BADGE_SRC = `https://visitor-badge.laobi.icu/badge?page_id=${PAGE_ID}&left_text=Visited&left_color=0f172a&right_color=2563eb`;

/**
 * Sitewide "opened N times" counter, shown quietly in the footer, via
 * visitor-badge.laobi.icu — a purpose-built, no-signup hit-counter image
 * service with a long track record (widely embedded across GitHub profile
 * READMEs for years). Plain <img>, so there's no fetch/CORS failure mode;
 * hides itself entirely if the image ever fails to load.
 *
 * Chose this over JSON-based counter APIs after two in a row went dead
 * within this project's lifetime (countapi.xyz stopped resolving;
 * counterapi.dev deprecated its v1 API weeks after integration) — an image
 * badge from a service built specifically for this use case is the more
 * durable bet.
 */
export function VisitCounter() {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <img
      src={BADGE_SRC}
      alt="Visitor count"
      className="h-5 rounded"
      onError={() => setFailed(true)}
    />
  );
}
