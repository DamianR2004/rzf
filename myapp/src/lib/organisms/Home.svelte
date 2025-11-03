<script>
    import {logo, vrijWerkMelleAvif, vrijWerkMelleJpg, vrijWerkModelAvif, vrijWerkModelJpg, vrijWerkFoodAvif, vrijWerkFoodJpg, beach7Avif, beach7Jpg, troubadourAAVif, troubadourAJpg, troubadourBAVif, troubadourBJpg } from "$lib/index.js";
</script>

<img src="{logo}" alt="Logo Raimond Zoeter Fotografie" class="logo" />

<section>
        <article data-name="Vrij werk">
                <a href="/">
                    <picture>
                        <source srcset={vrijWerkMelleAvif} type="image/avif" />
                        <img src={vrijWerkMelleJpg} data-cursor="Klik!" alt="Vrij werk van Melle" />
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

        <article data-name="Beach7">
                <a href="/">
                    <picture>
                        <source srcset={beach7Avif} type="image/avif" />
                        <img src={beach7Jpg} data-cursor="Klik!" alt="Commercieel werk voor Beach7" />
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
                        <source srcset={vrijWerkFoodAvif} type="image/avif" />
                        <img src={vrijWerkFoodJpg} data-cursor="Klik!" alt="Vrij werk voor Food fotografie" />
                    </picture>
                </a>
        </article>
</section>

<style>
.logo{
    position: absolute;
    height: auto;
    max-width: 75dvh;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
}

section {
  display: grid;
  grid-template-columns: 1fr 30% 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "a . b"
    "c . f"
    "e . d";
  position: relative;
  padding: 3rem;
  height: 100dvh;       
  overflow: hidden;
  align-items: center; 
  justify-items: center;
}

article {
  transition: 0.2s ease-in-out;
  max-width: 60%; 
  overflow: hidden;
  border-radius: 10px;
}

article img {
  max-width: 100%;
  height: auto;
  object-fit: contain; 
  border-radius: 10px;
}

article:nth-of-type(1){
    grid-area: a;
    transform: translateX(-20%);
    max-width: 50%;
}

article:nth-of-type(2){
    grid-area: b;
    transform: translateX(20%);
    max-width: 65%;
}

article:nth-of-type(3){
    grid-area: c;
    transform: translateX(20%);
}

article:nth-of-type(4){
    grid-area: d;
    transform: translateY(-15%) translateX(40%);
    max-width: 35%;
}

article:nth-of-type(5){
    grid-area: e;
    transform: translateX(-20%);
    height: 300px;
}

article:nth-of-type(6){
    grid-area: f;
    transform: translateX(-50%);
    max-width: 35%;
}

article:hover {
  scale: 1.05;
  z-index: 10;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

</style>