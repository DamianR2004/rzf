// src/routes/+page.server.js

const WP_BASE_URL = 'https://damianromeijn.nl'; 
const API_URL = `${WP_BASE_URL}/wp-json/wp/v2`;

export async function load({ fetch }) {

  // --- 1. Ervaringen Ophalen (met ACF) ---
  const ervaringenUrl = `${API_URL}/ervaringen?per_page=3&_embed`;
  
  const ervaringenResponse = await fetch(ervaringenUrl);

  if (!ervaringenResponse.ok) {
     return { ervaringen: [], recenteProjecten: [] }; 
  }
  
  const ervaringenList = await ervaringenResponse.json();

  const ervaringen = ervaringenList.map(ervaringen => ({
    naam: ervaringen.acf?.naam_klant || "",
    tekst: ervaringen.acf?.ervaring_tekst || ""
  }));


  const albumsUrl = `${API_URL}/album?per_page=6&orderby=date&order=desc&_embed`;
  const albumsResponse = await fetch(albumsUrl);

  if (!albumsResponse.ok) {
     return { ervaringen, recenteProjecten: [] };
  }

  const albumList = await albumsResponse.json();
  
  const recenteProjecten = albumList.map(album => {

    const acfGalleryCoverUrl = album.acf?.photo_gallery?.[0]?.full_image_url;
    
    const coverUrl = acfGalleryCoverUrl;

    return {
      title: album.title.rendered,
      slug: album.slug,
      cover: coverUrl
    };
  });

  return { 
    ervaringen,
    recenteProjecten
  };
}