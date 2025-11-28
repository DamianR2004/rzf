const WP_BASE_URL = 'https://damianromeijn.nl';
const API_URL = `${WP_BASE_URL}/wp-json/wp/v2`;

export async function load({ fetch, params }) {
  const albumSlug = params.slug;

  const response = await fetch(`${API_URL}/album?slug=${albumSlug}`);
  const albumList = await response.json();
  console.log('albumList:', albumList);

  if (!albumList || albumList.length === 0) {
    return { status: 404, error: 'Album niet gevonden' };
  }

  const album = albumList[0];
  const albumId = album.id;

  const contentResponse = await fetch(`${API_URL}/album/${albumId}?_embed&acf`);
  const albumData = await contentResponse.json();
  console.log('albumData:', albumData);

  let photoGallery = albumData?.acf?.photo_gallery?.photo_gallery?.[0] || [];
  console.log('PhotoGallery array:', photoGallery);

  const mediaItems = photoGallery.map(img => ({
    type: 'image',
    src: img.full_image_url,         // gebruik full_image_url
    alt: img.alt_text || albumData.title.rendered
  }));

  console.log('Processed mediaItems:', mediaItems);

  return {
    title: albumData.title.rendered,
    media: mediaItems
  };
}
