<script>
  import { page } from '$app/stores';
  import {Cursor, Navigatie } from "$lib/index.js";
  let { data } = $props();
</script>

<Cursor />
<Navigatie />

<section> 
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      <li><span aria-current="page">Portfolio</span></li>
    </ol>
  </nav>

  <h2>Portfolio</h2>
</section>

<section class="portfolio-grid">
  {#each data.albums as album}
    {#if album.src}
      <a href="/portfolio/{album.slug}" class="album-card">
        <article>
        <picture>
        <source srcset={album.src} type="image/avif">
        <source srcset={album.src} type="image/webp">
      <img src={album.src} alt={album.alt} loading="lazy" data-cursor="Klik!">
    </picture>
  </article>
        <h3>{album.title}</h3>
      </a>
    {/if}
  {/each}
</section>

<style>
  .breadcrumb {
    padding: 0 0.5rem;
    font: 1.2em sans-serif #555;
  }
  ol {
    display: flex;
    list-style: none;
    justify-content: start;
  }

  ol li:not(:last-child)::after {
    display: inline-block;
    margin: 0 0.5rem;
    content: ">";
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 2em;
    padding: 0 2em;
  }

  article:hover img {
    scale: 1.05;
    z-index: 1;
  }

  article {
    width: 100%;
    aspect-ratio: 4 / 4;
    overflow: hidden;
  }

  picture, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.25s;
    z-index: 0;
  }

  h3{
    font-size: 1.5rem;
  }

  section h2{
    font-size: 10vh;
    text-align: center;
  }

  a{
    text-decoration: none;
    color: #6e6e6e;
    transition: 0.25s;
  }

  a:hover{
    color: black;
  }
</style>