<script>
    export let data;
</script>

<section>
    <h2>Ervaringen</h2>
        <article>
            {#each data.ervaringen as ervaring}
                <li>
                    <p>"{ervaring.tekst}"</p>
                    <p class="naam">{ervaring.naam}</p>
                </li>
            {/each}
        </article>
</section>