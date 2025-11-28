<script>
    let data = $props(); 
</script>

<section id="portfolio">
    <h2>Recent Werk</h2>
    <ul>
        {#each data.albums as album}
            <li>
            <article>
                <a href={`/portfolio/${album.slug}`}>
                    <picture>
                        <source srcset="{album.cover}" type="image/avif">
                         <source srcset="{album.cover}" type="image/webp">   
                        <img src="{album.cover}" alt="foto album van {album.title}" loading="lazy" />
                    </picture>  
                </a>
                <h4>{album.title}</h4>
            </article>
            </li>
        {/each}
    </ul>
    <div>
        <a href="/portfolio" aria-label="Zie meer">
            Zie meer
            <svg></svg>  
        </a>
    </div>
</section>

<style>

    section{
        height: 100svh;
        width: 100%;
    }
    
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 1.5em;
        padding: 0 5%;
        justify-items: center;
        align-items: center;
        list-style: none;
    }

    li{
        margin: 0;
    }

    img{
        max-width: 100%;
        height: 50%;
        background-color: #161616;
        object-fit: cover;
        transition: 0.3s ease;
    }

    img:hover{
        scale: 1.05;
    }
</style>