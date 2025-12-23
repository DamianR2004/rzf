<script>
  import { logo, vrijWerkMellewebp, vrijWerkModelwebp, vrijWerkFoodwebp, troubadourAAwebp, troubadourBAwebp, vrijWerkMelleJpg, vrijWerkModelJpg, vrijWerkFoodJpg, beach7webp, beach7Jpg, troubadourAJpg, troubadourBJpg } from "$lib/index.js";
  import { gsap } from "gsap";
  import CustomEase from "gsap/CustomEase";
  import { onMount, onDestroy } from "svelte"; 

  gsap.registerPlugin(CustomEase);

  let mouseMoveHandler; 

  onMount(() => {
    CustomEase.create("jump", "0.9, 0, 0.1, 1");
    
    // --- 1. SETUP PARALLAX (Always runs) ---
    const articles = document.querySelectorAll('section#home article');
    const xTo = [];
    const yTo = [];

    articles.forEach((article, i) => {
        if (i === 0 || i === 4) gsap.set(article, { xPercent: -20 });
        if (i === 1 || i === 5) gsap.set(article, { xPercent: 20 });

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

    const preloader = document.querySelector(".preloader");
    
    // Check Local Storage
    const lastSeen = localStorage.getItem("preloaderSeen");
    const now = Date.now();
    const timeLimit = 30 * 60 * 1000; 

    if (lastSeen && (now - lastSeen < timeLimit)) {
        
        gsap.set(preloader, { display: "none" });
        window.addEventListener("mousemove", mouseMoveHandler);

    } else {
        const preloaderImages = document.querySelectorAll(".preloader-images .img");
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
                    
                    // SAVE TIMESTAMP: Reset the 30-minute timer now
                    localStorage.setItem("preloaderSeen", Date.now());
                }
            },
            "+=0.5"
        );
    }
  });

  onDestroy(() => {
      if (typeof window !== "undefined" && mouseMoveHandler) {
          window.removeEventListener("mousemove", mouseMoveHandler);
      }
  });
</script>

<div class="preloader">
  <div class="preloader-images">
    <div class="img"><img src={vrijWerkMellewebp} alt="" /></div>
    <div class="img"><img src={vrijWerkModelwebp} alt="" /></div>
    <div class="img"><img src={vrijWerkFoodwebp} alt="" /></div>
    <div class="img"><img src={beach7webp} alt="" /></div>
    <div class="img"><img src={troubadourAAwebp} alt="" /></div>
  </div>
</div>

  <img src={logo} class="logo" alt="Logo van Raimond Zoeter Fotografie" />

  <section id="home">
    <h1 class="visually_hidden">Raimond Zoeter Fotografie</h1>
    <article>
      <a href="/portfolio/studio-ww">
        <picture>
          <source srcset={vrijWerkMellewebp} type="image/webp" />
          <img src={vrijWerkMelleJpg} 
          width="800" 
          height="600"
          data-cursor="Klik!" 
          alt="Portretfoto van Melle" />
        </picture>
      </a>
    </article>

    <article>
      <a href="/portfolio/diversen">
        <picture>
          <source srcset={vrijWerkModelwebp} type="image/webp" />
          <img src={vrijWerkModelJpg} 
          width="800" 
          height="600" 
          data-cursor="Klik!" 
          alt="Vrij werk voor Model fotografie" />
        </picture>
      </a>
    </article>

    <article>
      <a href="/portfolio/diversen">
        <picture>
          <source srcset={beach7webp} type="image/webp" />
          <img src={beach7Jpg} 
          width="800" 
          height="600"
          loading="lazy"
          data-cursor="Klik!" 
          alt="Commercieel werk voor Beach7" />
        </picture>
      </a>
    </article>

    <article>
      <a href="/portfolio/de-troubadour-interieurs">
        <picture>
          <source srcset={troubadourBAwebp} type="image/webp" />
          <img src={troubadourBJpg} 
          width="800" 
          height="600" 
          data-cursor="Klik!" 
          alt="Commercieel werk voor Troubadour" />
        </picture>
      </a>
    </article>

    <article>
      <a href="/portfolio/de-troubadour-interieurs">
        <picture>
          <source srcset={troubadourAAwebp} type="image/webp" />
          <img src={troubadourAJpg} 
          width="800" 
          height="600" 
          data-cursor="Klik!" 
          alt="Commercieel werk voor Troubadour" />
        </picture>
      </a>
    </article>

    <article>
      <a href="/portfolio/food">
        <picture>
          <source srcset={vrijWerkFoodwebp} type="image/webp" />
          <img src={vrijWerkFoodJpg} 
          width="800" 
          height="600" 
          data-cursor="Klik!" 
          alt="Eten" />
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
}

article img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
}
article:hover img{
  transform: scale(1.1);
}

@media (max-width: 768px) {
  section {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
  }

  article:nth-of-type(3), article:nth-of-type(4) {
    visibility: hidden;
  }

  article {
    max-width: 70%;
    height: 20vh;
  }

  .logo {
    max-width: 60dvw;
  }
} 
</style>