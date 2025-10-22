<script>
    import {logoPng, vrijWerkMelleAvif, vrijWerkMelleJpg, vrijWerkModelAvif, vrijWerkModelJpg, vrijWerkFoodAvif, vrijWerkFoodJpg, beach7Avif, beach7Jpg, troubadourAAVif, troubadourAJpg, troubadourBAVif, troubadourBJpg } from "$lib/index.js";
</script>

<div class="home-container">
<section id="home">
    <img src="{logoPng}" class="logo" alt="Raimond Zoeter Fotografie">
    <h1>Raimond Zoeter Fotografie</h1>
    <h2>Data bedrijfsnaam</h2>
        <article>
                <a href="/">
                    <picture>
                        <source srcset="{vrijWerkMelleAvif}" type="image/avif" />
                        <img src="{vrijWerkMelleJpg}" data-cursor="Klik!" alt="Vrij werk van Melle" />
                    </picture>
                </a>
        </article>

        <article>
                <a href="/">
                    <picture>
                        <source srcset="{beach7Avif}" type="image/avif" />
                        <img src="{beach7Jpg}" data-cursor="Klik!" alt="Commercieel werk voor Beach 7" />
                    </picture>
                </a>
        </article>

        <article>
                <a href="/">
                    <picture>
                        <source srcset="{troubadourAAVif}" type="image/avif" />
                        <img src="{troubadourAJpg}" data-cursor="Klik!" alt="Commercieel werk voor Troubadour" />
                    </picture>
                </a>
        </article>

        <article>
                <a href="/">
                    <picture>
                        <source srcset="{vrijWerkModelAvif}" type="image/avif" />
                        <img src="{vrijWerkModelJpg}" data-cursor="Klik!" alt="Vrij werk voor Model fotografie" />
                    </picture>
                </a>
        </article>

        <article>
                <a href="/">
                    <picture>
                        <source srcset="{vrijWerkFoodAvif}" type="image/avif" />
                        <img src="{vrijWerkFoodJpg}" data-cursor="Klik!" alt="Vrij werk voor Food fotografie" />
                    </picture>
                </a>
        </article>

        <article>
                <a href="/">
                    <picture>
                        <source srcset="{troubadourBAVif}" type="image/avif" />
                        <img src="{troubadourBJpg}" data-cursor="Klik!" alt="Commercieel werk voor Troubadour" />
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
</style>