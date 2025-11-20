<script>
  import {
    logo,
    vrijWerkMelleAvif,
    vrijWerkModelAvif,
    vrijWerkFoodAvif,
    troubadourAAVif,
    troubadourBAVif,
    vrijWerkMelleJpg,
    vrijWerkModelJpg,
    vrijWerkFoodJpg,
    beach7Avif,
    beach7Jpg,
    troubadourAJpg,
    troubadourBJpg
  } from "$lib/index.js";

  import { gsap } from "gsap";
  import CustomEase from "gsap/CustomEase";
  import { onMount } from "svelte";

  gsap.registerPlugin(CustomEase);

  onMount(() => {
  CustomEase.create("jump", "0.9, 0, 0.1, 1");
  
  const preloaderImages = document.querySelectorAll(".preloader-images .img");
  const preloader = document.querySelector(".preloader");

  const tl = gsap.timeline({ delay: 0.25 });

  preloaderImages.forEach((img, index) => {
    tl.to(
      img,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: .75,
        ease: "jump"
      },
      index * 1
    );
  });

  tl.to(
    preloader,
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.5,
      ease: "jump",
    },
    "+=0.5"
  );
});
</script>

<div class="preloader">
  <div class="preloader-images">
    <div class="img"><img src={vrijWerkMelleJpg} alt="Preload vrij werk Melle" /></div>
    <div class="img"><img src={vrijWerkModelJpg} alt="Preload vrij werk Model" /></div>
    <div class="img"><img src={vrijWerkFoodJpg} alt="Preload vrij werk Food" /></div>
    <div class="img"><img src={beach7Jpg} alt="Preload Beach7" /></div>
    <div class="img"><img src={troubadourAJpg} alt="Preload Troubadour A" /></div>
  </div>
</div>

  <img src={logo} alt="Logo Raimond Zoeter Fotografie" class="logo" />

  <section id="home">
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

div img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  background-color: black;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  will-change: clip-path;
  overflow: hidden;
  z-index: 2000;
  opacity: 1;
  transition: height .8s ease;
}

.preloader-images {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 20rem;
  height: 20rem;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  will-change: clip-path;
  overflow: hidden;
  & .img {
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    will-change: clip-path;
    overflow: hidden;

    & img{
      position: relative;
      object-fit: cover;
      will-change: transform;
      scale: (1);
    }
  }
}

.logo {
  position: absolute;
  height: auto;
  max-width: 30dvw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}
section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100svh;
  align-items: center;
  justify-items: center;
}
article { 
    width: 30%;
    overflow: hidden;
    border-radius: 10px;
    transition: .3s ease;
  }

article img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

article:hover {
  transform: scale(1.05);
}
</style>
