<script>
  import { onMount, onDestroy } from "svelte"; 
  import { Cursor, Navigatie } from "$lib/index.js";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  let { data } = $props();
  gsap.registerPlugin(ScrollTrigger);

  let selected = $state(null);

  let observer;
  let refreshTimer;

  onMount(() => {
    const items = gsap.utils.toArray(".grid-item");

    items.forEach((item) => {
      const img = item.querySelector("img");
      
      gsap.to(img, {
        scale: 1.05, 
        scrollTrigger: {
          trigger: item, 
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });

    const gallery = document.querySelector("section:nth-of-type(2)");
    
    observer = new ResizeObserver(() => {
      if (refreshTimer) clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    });

    if (gallery) {
      observer.observe(gallery);
    }
  });

  onDestroy(() => {
    if (observer) observer.disconnect();
    if (refreshTimer) clearTimeout(refreshTimer);
    ScrollTrigger.getAll().forEach(t => t.kill());
  });
</script>

<Cursor />
<Navigatie />

<section>
  <nav aria-label="Breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/portfolio">Portfolio</a></li>
      <li><span aria-current="page">{data.title}</span></li>
    </ol>
  </nav>
  <h2>{data.title}</h2>
</section>

<section class="gallery">
  <h2 class="visually_hidden">Gallery</h2>
  
  {#each data.media as item}
    <button 
      class="grid-item" 
      onclick={() => selected = item} 
      aria-label="Open"
    >
      <picture>
        <source srcset={item.src} type="image/avif">
        <source srcset={item.src} type="image/webp">
        <img 
          src={item.src} 
          alt={item.alt} 
          loading="lazy" 
          data-cursor="Zoom!"
        >
      </picture>
    </button>
  {/each}
</section>

{#if selected}
  <button 
    class="lightbox" 
    onclick={() => selected = null} 
  >
    <img 
      src={selected.src} 
      alt={selected.alt} 
    >
  </button>
{/if}

<style>
  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 9999;
    width: 100dvw;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: zoom-out;
    background-color: white;
    border: none;
    overflow: hidden;
  }

  .lightbox img {
    max-width: 90vw;
    max-height: 90vh;
    width: auto;
    height: auto;
    object-fit: contain;
    overflow: hidden;
  }

  section:nth-of-type(2) {
    display: grid;
    grid-template-columns: repeat(12, 2fr);
    gap: 2rem; 
    padding: 0 5%;
    align-items: center; 
    justify-content: center;
  }

  .grid-item {
    background: none;
    border: none;
    padding: 0;
    grid-column: span 12; 
    width: 100%;
  }

  .grid-item picture img {
    width: 100%;
    height: auto;
    display: block;
    scale: .8; 
  }

  @media (min-width: 900px) {
    .grid-item:nth-child(5n + 1) { grid-column: 1 / span 5; }
    .grid-item:nth-child(5n + 2) { grid-column: 1 / span 4; }
    .grid-item:nth-child(5n + 3) { grid-column: 3 / span 3; }
    .grid-item:nth-child(5n + 4) { grid-column: 7 / span 5; }
    .grid-item:nth-child(5n + 5) { grid-column: 5 / span 4; }
  } 
  
  section:nth-of-type(1) h2 {
    font-size: 10vh;
    text-align: center;
  }
  
  nav {
     padding: 0 0.5rem; 
     font: 1.2em sans-serif #555; 
  }
  nav ol{ 
    display: flex; 
    list-style: none; 
    justify-content: start; 
    padding: 0; margin: 0; 
  }
  nav li:not(:last-child)::after {
  content: ">"; 
  margin: 0 0.5rem; 
  }
</style>