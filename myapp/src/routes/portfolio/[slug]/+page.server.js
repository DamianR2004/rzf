import { error } from '@sveltejs/kit';
import { WP_API_URL } from '$env/static/private'; 

export const load = async ({ params, fetch }) => {
  
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

  if (!result.data?.album) throw error(404, 'Album niet gevonden');

  const { title, content, featuredImage } = result.data.album;
  let media = [];

  const getBaseName = (url) => {
    if (!url) return '';
    return url.replace(/-\d+x\d+(?=\.[a-z]{3,4}$)/i, '');
  };

  // 1. Add Featured Image
  if (featuredImage?.node) {
    media.push({
      type: 'image',
      src: featuredImage.node.sourceUrl,
      alt: featuredImage.node.altText || title
    });
  }

  if (content) {
    const matches = [...content.matchAll(/src="([^"]+)"/g)];
    matches.forEach(match => {
      const originalUrl = match[1];
      const urlBase = getBaseName(originalUrl);
      const isDuplicate = media.some(item => getBaseName(item.src) === urlBase);

      if (!isDuplicate) {
        media.push({ type: 'image', src: originalUrl, alt: title });
      }
    });
  }

  return { title, media };
};