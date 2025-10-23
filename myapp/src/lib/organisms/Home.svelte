<script>
    import {logo, vrijWerkMelleAvif, vrijWerkMelleJpg, vrijWerkModelAvif, vrijWerkModelJpg, vrijWerkFoodAvif, vrijWerkFoodJpg, beach7Avif, beach7Jpg, troubadourAAVif, troubadourAJpg, troubadourBAVif, troubadourBJpg } from "$lib/index.js";
</script>

<div class="home-container">
    <img src="{logo}" alt="Logo Raimond Zoeter Fotografie" class="logo" />
    <h1>Raimond Zoeter Fotografie</h1>
<section id="home">
        <article data-name="Vrij werk">
                <a href="/">
                    <picture>
                        <source srcset={vrijWerkMelleAvif} type="image/avif" />
                        <img src={vrijWerkMelleJpg} data-cursor="Klik!" alt="Vrij werk van Melle" />
                    </picture>
                </a>
        </article>

        <article data-name="Beach7">
                <a href="/">
                    <picture>
                        <source srcset={beach7Avif} type="image/avif" />
                        <img src={beach7Jpg} data-cursor="Klik!" alt="Commercieel werk voor Beach 7" />
                    </picture>
                </a>
        </article>

        <article data-name="Troubadour">
            <a href="/">
                    <picture>
                        <source srcset={troubadourBAVif} type="image/avif" />
                        <img src={troubadourBJpg} data-cursor="Klik!" alt="Commercieel werk voor Troubadour" />
                    </picture>
                </a>
        </article>

        <article data-name="Troubadour">
                <a href="/">
                    <picture>
                        <source srcset={troubadourAAVif} type="image/avif" />
                        <img src={troubadourAJpg} data-cursor="Klik!" alt="Commercieel werk voor Troubadour" />
                    </picture>
                </a>
        </article>

        <article data-name="Vrij werk">
                <a href="/">
                    <picture>
                        <source srcset={vrijWerkModelAvif} type="image/avif" />
                        <img src={vrijWerkModelJpg} data-cursor="Klik!" alt="Vrij werk voor Model fotografie" />
                    </picture>
                </a>
        </article>

        <article data-name="Vrij werk">
                <a href="/">
                    <picture>
                        <source srcset={vrijWerkFoodAvif} type="image/avif" />
                        <img src={vrijWerkFoodJpg} data-cursor="Klik!" alt="Vrij werk voor Food fotografie" />
                    </picture>
                </a>
        </article>
</section>
</div>

<div>
    <a href="#portfolio">Scroll</a>
    <svg></svg>
</div>

<style>
h1{
    visibility: hidden;
}
.logo{
    position: absolute;
    height: auto;
    max-width: 75dvh;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
}
.home-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 2rem;
}

section {
    display: grid;
    grid-template-columns: repeat(2, 50vh);
    grid-template-rows: repeat(3, 30vh);
    position: relative;
}

article {
    transition: transform 0.3s ease;
    max-width: 60%;
}

article img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
}
</style>