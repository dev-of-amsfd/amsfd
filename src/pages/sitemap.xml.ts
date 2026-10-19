import { routes } from '../i18n/routes';
import { site } from '../config';

export function GET() {
  const urls = Object.values(routes).flatMap((path) => {
    const ar = new URL('/' + path, site.domain).href;
    const en = new URL('/en/' + path, site.domain).href;
    const alts = `<xhtml:link rel="alternate" hreflang="ar" href="${ar}"/><xhtml:link rel="alternate" hreflang="en" href="${en}"/>`;
    return [ar, en].map((loc) => `<url><loc>${loc}</loc>${alts}</url>`);
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
