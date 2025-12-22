<script>
    let { data } = $props();
</script>

<section id="home">
    <h2>Recent Werk</h2>
    <ul>
        {#each data.albums as album}
            {#if album.cover} <li>
                <article>
                    <a href={`/portfolio/${album.slug}`}>
                        <picture>
                            <source srcset="{album.cover}" type="image/avif">
                            <source srcset="{album.cover}" type="image/webp">   
                            <img src="{album.cover}" alt={album.alt} loading="lazy" />
                        </picture>  
                    </a>
                    <h4>{album.title}</h4>
                </article>
            </li>
            {/if}
        {/each}
        <li>
                <a href="/portfolio" aria-label="Zie meer">
                    Zie meer
                <svg></svg>  
            </a>
        </li>
    </ul>

</section>

<style>
    section {
        width: 100%;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr; 
        grid-auto-rows: auto; 
        list-style: none;
        padding: 0 5%;
        gap: 5rem;
        justify-items: center;
    }

    article {
        height: 500px;
        width: 500px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1 / 1; 
    }

    li:last-of-type {
        background-color: black;
        border-radius: 20px;
        grid-column: 2 / 3;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 200px;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1.5rem; 
        display: flex;
    }
</style>