<script>
  import { onMount } from "svelte"; 
  import { Cursor } from "$lib/index.js";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  let { data } = $props();
  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.utils.toArray("picture").forEach((picture) => {
      
      gsap.to(picture, {
        scale: 1.2,
        scrollTrigger: {
          trigger: picture, 
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          pin: false
        }
      });
      
    });
  });
</script>

<Cursor />

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
  <h2 class="visually_hidden">Gallery</h2>
  
  {#each data.media as item}
    <picture>
      <source srcset={item.src} type="image/avif">
      <source srcset={item.src} type="image/webp">
      <img src={item.src} alt={item.alt} loading="lazy" data-cursor="Klik!">
    </picture>
  {/each}
</section>

<style>
  section:nth-of-type(2) {
     display: grid;
    grid-template-columns: repeat(12, 2fr);
    gap: 2rem; 
    padding: 0 5%;
    align-items: center; 
    justify-content: center;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    scale: .8;
  }

  picture {
    grid-column: span 12;
  }

  @media (min-width: 900px) {
    
    picture:nth-child(5n + 1) {
      grid-column: 1 / span 5; 
    }

    picture:nth-child(5n + 2) {
      grid-column: 1 / span 7;
    }

    picture:nth-child(5n + 3) {
      grid-column: 3 / span 3;
    }

    picture:nth-child(5n + 4) {
      grid-column: 7 / span 5;
    }

    picture:nth-child(5n + 5) {
      grid-column: 5 / span 4;
    }
  } 
  
  section:nth-of-type(1) h2 {
    font-size: 10vh;
    text-align: center;
    justify-content: center;
  }
  
  .breadcrumb {
    padding: 0 0.5rem;
    font: 1.2em sans-serif #555;
  }
  .breadcrumb ol {
    display: flex;
    list-style: none;
    justify-content: start;
  }
  .breadcrumb li:not(:last-child)::after {
    content: ">";
    margin: 0 0.5rem;
  }
</style>