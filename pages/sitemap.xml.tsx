import { GetServerSideProps } from "next"

const Sitemap = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
 const sitemap = 
    `<urlset 
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      <url>
        <loc>https://happypc.pro/</loc>
        <priority>1</priority>
        <changefreq>always</changefreq>
      </url>
      <url>
        <loc>https://happypc.pro/o-nas</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://happypc.pro/uslugi</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://happypc.pro/portfolio</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://happypc.pro/faq</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://happypc.pro/contact</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://happypc.pro/zakazat-sborku</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://happypc.pro/uslugi/apgreid-kompyutera</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>http://happypc.pro/uslugi/podborka-komplektuyushih</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://happypc.pro/uslugi/remont-kompyutera</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://happypc.pro/uslugi/sborka-kompyutera</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
    </urlset>
  `
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap