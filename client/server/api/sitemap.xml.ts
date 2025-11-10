// server/route/sitemap.xml.get.ts
export default defineEventHandler(() => {
  const siteUrl = 'https://iatta.or.id'
  const urls = ['/', '/home', '/about', '/membership', '/resource', '/contact']

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `
  <url>
    <loc>${siteUrl}${u}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`

  return new Response(xml, {
    headers: {
      'content-type': 'application/xml; charset=utf-8'
    }
  })
})