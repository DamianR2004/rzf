<script>
  import { logo, vrijWerkMelleAvif, vrijWerkModelAvif, vrijWerkFoodAvif, troubadourAAVif, troubadourBAVif, vrijWerkMelleJpg, vrijWerkModelJpg, vrijWerkFoodJpg, beach7Avif, beach7Jpg, troubadourAJpg, troubadourBJpg } from "$lib/index.js";
  import { gsap } from "gsap";
  import CustomEase from "gsap/CustomEase";
  import { onMount, onDestroy } from "svelte"; 

  gsap.registerPlugin(CustomEase);

  let mouseMoveHandler; 

  onMount(() => {
    CustomEase.create("jump", "0.9, 0, 0.1, 1");
    
    const articles = document.querySelectorAll('section#home article');
    const xTo = [];
    const yTo = [];

    articles.forEach((article, i) => {
        if (i === 0 || i === 4) gsap.set(article, { xPercent: -20 });
        if (i === 1 || i === 5) gsap.set(article, { xPercent: 20 });

        // Prepare the parallax animations
        const speed = (i % 2 === 0) ? 30 : 15; 
        article.dataset.speed = speed;
        
        xTo.push(gsap.quickTo(article, "x", { duration: 0.8, ease: "power2" }));
        yTo.push(gsap.quickTo(article, "y", { duration: 0.8, ease: "power2" }));
    });

    mouseMoveHandler = (e) => {
        const mouseX = (e.clientX / window.innerWidth) - 0.5;
        const mouseY = (e.clientY / window.innerHeight) - 0.5;

        articles.forEach((article, i) => {
            const speed = parseFloat(article.dataset.speed);
            xTo[i](mouseX * speed);
            yTo[i](mouseY * speed);
        });
    };

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
        onComplete: () => {
           gsap.set(preloader, { display: "none" });
           window.addEventListener("mousemove", mouseMoveHandler);
        }
      },
      "+=0.5"
    );
  });

  onDestroy(() => {
      if (typeof window !== "undefined" && mouseMoveHandler) {
          window.removeEventListener("mousemove", mouseMoveHandler);
      }
  });
</script>

<div class="preloader">
  <div class="preloader-images">
    <div class="img"><img src={vrijWerkMelleJpg} alt="" /></div>
    <div class="img"><img src={vrijWerkModelJpg} alt="" /></div>
    <div class="img"><img src={vrijWerkFoodJpg} alt="" /></div>
    <div class="img"><img src={beach7Jpg} alt="" /></div>
    <div class="img"><img src={troubadourAJpg} alt="" /></div>
  </div>
</div>

  <img src={logo} class="logo" alt="Logo van Raimond Zoeter Fotografie" />

  <section id="home">
    <h1 class="visually-hidden">Raimond Zoeter Fotografie</h1>
    <article data-name="Vrij werk">
      <a href="/portfolio/studio-ww">
        <picture>
          <source srcset={vrijWerkMelleAvif} type="image/avif" />
          <img src={vrijWerkMelleJpg} width="800" 
          height="600" 
          decoding="async" 
          data-cursor="Klik!" 
          alt="Portretfoto van Melle" />
        </picture>
      </a>
    </article>

    <article data-name="Vrij werk">
      <a href="/">
        <picture>
          <source srcset={vrijWerkModelAvif} type="image/avif" />
          <img src={vrijWerkModelJpg} width="800" 
          height="600" 
          decoding="async" 
          data-cursor="Klik!" 
          alt="Vrij werk voor Model fotografie" />
        </picture>
      </a>
    </article>

    <article data-name="Beach7">
      <a href="/">
        <picture>
          <source srcset={beach7Avif} type="image/avif" />
          <img src={beach7Jpg} width="800" 
          height="600" 
          decoding="async" 
          data-cursor="Klik!" 
          alt="Commercieel werk voor Beach7" />
        </picture>
      </a>
    </article>

    <article data-name="Troubadour">
      <a href="/">
        <picture>
          <source srcset={troubadourBAVif} type="image/avif" />
          <img src={troubadourBJpg} width="800" 
          height="600" 
          decoding="async" 
          data-cursor="Klik!" 
          alt="Commercieel werk voor Troubadour" />
        </picture>
      </a>
    </article>

    <article data-name="Troubadour">
      <a href="/">
        <picture>
          <source srcset={troubadourAAVif} type="image/avif" />
          <img src={troubadourAJpg} width="800" 
          height="600" 
          decoding="async" 
          data-cursor="Klik!" 
          alt="Commercieel werk voor Troubadour" />
        </picture>
      </a>
    </article>

    <article data-name="Vrij werk">
      <a href="/">
        <picture>
          <source srcset={vrijWerkFoodAvif} type="image/avif" />
          <img src={vrijWerkFoodJpg} width="800" 
          height="600" 
          decoding="async" 
          data-cursor="Klik!" 
          alt="Vrij werk voor Food fotografie" />
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
  max-width: 25dvw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}
section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100svh;
  gap: 1.5em;
  padding: 1.5em;
  justify-items: center;
  align-items: center;
}
article { 
    width: 100%;
    max-width: 40%;
    height: 25vh;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    transform: translateZ(0);
}

article img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
  will-change: transform;
  backface-visibility: hidden;
}
article:hover img{
  transform: scale(1.1);
}
</style>