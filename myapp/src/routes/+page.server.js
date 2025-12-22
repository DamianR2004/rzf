import { WP_API_URL } from '$env/static/private'; 

export const load = async ({ fetch }) => {
  const query = `
    query GetRecentPortfolio {
      albums(first: 6) { 
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl(size: MEDIUM)
              altText
            }
          }
        }
      }
    }
  `;

  const response = await fetch(WP_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  const albumsRaw = result.data?.albums?.nodes || [];

  const albums = albumsRaw.map(album => ({
    title: album.title,
    slug: album.slug,
    cover: album.featuredImage?.node?.sourceUrl,
    alt: album.featuredImage?.node?.altText || album.title
  }));

  return { albums };
};