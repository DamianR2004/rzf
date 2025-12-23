<script>
    let { data } = $props();
</script>

<section>
    <h2>Ervaringen</h2>
        <article>
            <ul>
            {#each data.ervaringen as ervaring}
                <li>
                    <p>{@html ervaring.content}</p>
                    <h4>{ervaring.title}</h4>
                </li>
            {/each}
            </ul>
        </article>
</section>

<style>
    ul {
        display: flex;
        flex-direction: r;
        padding: 0 5%;
        gap: 4em;
    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 72ch;
        gap: 1em;
    }

    h4 {
        font-size: 1.5rem;
        text-align: center;
    }

    p {
        font-family: "Playwrite", sans-serif;
        font-size: 1rem;
        text-align: center;
    }


    @media (max-width: 1024px) {
        ul {
            flex-direction: column;
            padding: 0 5%;
            gap: 2em;
        }
    }

</style>