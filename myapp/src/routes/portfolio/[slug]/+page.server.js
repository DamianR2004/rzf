import { error } from '@sveltejs/kit';
import { WP_API_URL } from '$env/static/private'; 

export const load = async ({ params, fetch, setHeaders }) => {
  setHeaders({
    'cache-control': 'public, max-age=300, s-maxage=300'
  }
);
  
  const { slug } = params;

  const query = `
    query GetAlbumImages($slug: ID!) {
      album(id: $slug, idType: SLUG) {
        title
        content(format: RENDERED)
        featuredImage {
          node {
            sourceUrl(size: LARGE)
            altText
          }
        }
      }
    }
  `;

  const response = await fetch(WP_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { slug } }),
  });

  const result = await response.json();
  
  // If the query fails, result.data is null, causing this 404.
  // We log the error so you can see it in your terminal if it happens again.
  if (result.errors) {
    console.error("GraphQL Errors:", result.errors);
  }
  
  if (!result.data?.album) throw error(404, 'Album niet gevonden');

  const { title, content, featuredImage } = result.data.album;
  let media = [];

  const getBaseName = (url) => {
    if (!url) return '';
    return url.replace(/-\d+x\d+(?=\.[a-z]{3,4}$)/i, '');
  };

  // 1. Add Featured Image (Optimized 'LARGE' size)
  if (featuredImage?.node) {
    media.push({
      type: 'image',
      src: featuredImage.node.sourceUrl,
      alt: featuredImage.node.altText || title
    });
  }

  // 2. Add Content Images (Scraping HTML)
  if (content) {
    const matches = [...content.matchAll(/src="([^"]+)"/g)];
    
    matches.forEach(match => {
      const originalUrl = match[1];
      const urlBase = getBaseName(originalUrl);
      
      // Check for duplicates
      const isDuplicate = media.some(item => getBaseName(item.src) === urlBase);

      if (!isDuplicate) {
        // TRICK: Since you regenerated thumbnails, the -1280x... version exists.
        // If the HTML still points to the huge file, we just use it as is for now
        // to get the site working. 
        media.push({ type: 'image', src: originalUrl, alt: title });
      }
    });
  }

  return { title, media };
};