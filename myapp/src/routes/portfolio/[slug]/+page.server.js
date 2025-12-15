import { error } from '@sveltejs/kit';
import { WP_API_URL } from '$env/static/private'; 

export const load = async ({ params, fetch }) => {
  const { slug } = params;

  // We halen de content op (waar de foto's in zitten) en de featured image
  const query = `
    query GetAlbumImages($slug: ID!) {
      album(id: $slug, idType: SLUG) {
        title
        content(format: RENDERED)
        featuredImage {
          node {
            sourceUrl
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

  // 1. Voeg eerst de uitgelichte afbeelding toe
  if (featuredImage?.node) {
    media.push({
      src: featuredImage.node.sourceUrl,
      alt: featuredImage.node.altText || title
    });
  }

  // 2. Vis alle andere afbeeldingen uit de HTML-tekst
  if (content) {
    const matches = [...content.matchAll(/src="([^"]+)"/g)];
    
    matches.forEach(match => {
      const url = match[1];
      // Voeg toe als hij nog niet in de lijst staat
      if (!media.some(item => item.src === url)) {
        media.push({ src: url, alt: title });
      }
    });
  }

  return { title, media };
};