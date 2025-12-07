<script>
  export let data;
</script>

<h2>{data.title}</h2>

<section class="gallery">
  <h2 class="visually_hidden">{data.title}</h2>
  {#each data.media as item}
    <picture>
        <source srcset={item.src} type="image/avif">
        <source srcset={item.src} type="image/webp">
      <img src={item.src} alt={item.alt} loading="lazy">
    </picture>
  {/each}
</section>

<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  picture{
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    mask-image: linear-gradient(black, transparent);
  }
</style>
