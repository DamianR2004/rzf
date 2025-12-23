<script>
    let { data } = $props();
</script>

<section id="home">
    <h2>Recent werk</h2>
    <ul>
        {#each data.albums as album}
            {#if album.cover} 
            <li>
                <a href={`/portfolio/${album.slug}`}>
                    <article>
                        <picture>
                            <source srcset="{album.cover}" type="image/avif">
                            <source srcset="{album.cover}" type="image/webp">   
                            <img src="{album.cover}" alt={album.alt} loading="lazy" data-cursor="Klik!" />
                        </picture>  
                    
                </article>
                <h3>{album.title}</h3>
                </a>
            </li>
            {/if}
        {/each}
        <li>
                <a href="/portfolio" aria-label="Zie meer">
                    Zie meer 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -6.5 38 38"><path fill="#fff" fill-rule="nonzero" d="m26.812.58 10.513 10.424.088.082c.352.349.557.809.587 1.352l-.002.183c-.025.43-.19.842-.514 1.21l-.123.127L26.812 24.42a2.005 2.005 0 0 1-2.822 0 1.985 1.985 0 0 1 0-2.822l7.284-7.224H2C.897 14.375 0 13.486 0 12.385c0-1.102.897-1.992 2-1.992h29.04l-7.05-6.99a1.985 1.985 0 0 1 0-2.822 2.005 2.005 0 0 1 2.822 0Z"/></svg>
            </a>
        </li>
    </ul>

</section>

<style>
 ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(30vw, 1fr));
    gap: 2em;
    padding: 0 2em;
    list-style: none;
  }

  article:hover img {
    scale: 1.05;
    z-index: 1;
  }

  article {
    max-width: 100%;
    aspect-ratio: 4 / 4;
    overflow: hidden;
  }

  picture, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.25s;
    z-index: 1;
  }

  h3{
    font-size: 1.5rem;
  }

  li a{
    text-decoration: none;
    color: #6e6e6e;
    transition: 0.25s;
  }

  li a:hover{
    color: black;
  }

  li:last-of-type{
    display: flex;
    align-items: end;
    justify-content: end;
    grid-column: span 2;
  }

  li:last-of-type a{
    display: flex;
    align-items: center;
    gap: .5em;
    text-decoration: none;
    color: white;
    font-size: 2.5rem;
    padding:.5em 1em; 
	  border-radius: 2em;
    background-color: black;  
  }

 li:last-of-type svg{
      transition: 0.25s;
 }

  li:last-of-type a:hover{
    background-color: #161616;
    scale: 1.05;

    & svg{
        transform: translateX(20%);
    }
  }

  @media (max-width: 1023px) {
    li:last-of-type{
      justify-content: center;
    }
    li:last-of-type a{
      font-size: 5vw;
    }
  }

  
</style>