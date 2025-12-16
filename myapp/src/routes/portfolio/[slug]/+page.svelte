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
    <li><a href="/portfolio">Portfolio</a></li>
    <li><span aria-current="page">{data.title}</span></li>
  </ol>
</nav>

<h2>{data.title}</h2>

</section>

<section>
  <h2 class="visually_hidden">{data.title}</h2>
  
  {#each data.media as item}
    <picture>
      <source srcset={item.src} type="image/avif">
      <source srcset={item.src} type="image/webp">
      <img src={item.src} alt={item.alt} loading="lazy" width="600" height="400">
    </picture>
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  h2{
    justify-content: center;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  .breadcrumb {
  padding: 0 0.5rem;
  font: 1.2em sans-serif #555;
}

.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: end;
}

.breadcrumb li:not(:last-child)::after {
  display: inline-block;
  margin: 0 0.25rem;
  content: ">";
}

</style>