const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap (){
  const smStream = new SitemapStream({ hostname: 'https://sneekshop.netlify.app/' });

  smStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  // Add more URLs if needed
  smStream.end();

  try {
        const sitemap = await streamToPromise(smStream);
        createWriteStream('./public/sitemap.xml').write(sitemap);
        console.log('Sitemap generated successfully');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();

module.exports = generateSitemap;
