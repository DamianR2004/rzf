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
                    <h3>{ervaring.title}</h3>
                </li>
            {/each}
            </ul>
        </article>
</section>

<style>
    article {
        display: flex;
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

    h3 {
        font-size: 2rem;
        text-align: center;
    }

    p {
        font-family: "Playwrite", sans-serif;
        font-size: 1rem;
        text-align: center;
    }
</style>