<script>
    import { Instagram, LinkedIn, snel1, snel2, snel3, snel4, snel5, snel6, snel7, snel8, snel9, snel10, snel11, snel12, snel13, snel14, snel15, snel16, snel17, snel18 } from "$lib/index.js";

    // 1. Array of images for the loop
    const reelImages = [
        snel1, snel2, snel3, snel4, snel5, snel6, snel7, snel8, snel9, 
        snel10, snel11, snel12, snel13, snel14, snel15, snel16, snel17, snel18
    ];
    
    const duration = .2; 
    const totalTime = reelImages.length * duration; 
</script>

<footer id="contact">
    <h2 class="visually_hidden">Contact</h2>
    <section>
        <ul>
            <li><h3>Socials</h3></li>
            <li>
                <Instagram />
                <a href="https://www.instagram.com/raimondzoeterfotografie/" target="_blank" class="link" aria-label="Instagram">Instagram</a>
            </li>
            <li>
                <LinkedIn />
                <a href="https://www.linkedin.com/in/raimond-zoeter-8b016649/" target="_blank" class="link" aria-label="LinkedIn">LinkedIn</a>
            </li>
        </ul>

        <ul>
            <li><h3>Bedrijfsinfo</h3></li>
            <li><p><strong>BTW:</strong> NL003441168B12</p></li>
            <li><p><strong>KvK:</strong> 80418538</p></li>
        </ul>

        <ul>
            <li><h3>Navigatie</h3></li>
            <li><a href="#home" class="link" aria-label="Home">Home</a></li>
            <li><a href="#portfolio" class="link" aria-label="Portfolio">Portfolio</a></li>
            <li><a href="#over-mij" class="link" aria-label="Over mij">Over mij</a></li>
            <li><a href="#contact" class="link" aria-label="Contact">Contact</a></li>
        </ul>

        <ul class="slideshow">
            {#each reelImages as src, i}
                <li style="animation-delay: {i * duration}s; animation-duration: {totalTime}s;">
                    <img {src} alt="" />
                </li>
            {/each}
        </ul>
    </section>

    <div>
        <a href="mailto:info@raimondzoeterfotografie.nl">info@raimondzoeterfotografie.nl</a>
    </div>

    <div>
        <p>© 2025 Raimond Zoeter Fotografie</p>
        <p>Designed and developed <a href="https://www.bydr.studio" target="_blank">bydr.studio</a></p>
    </div>
</footer>

<style>
    footer {
        background-color: #221F20;
    }
    section {
        display: flex;
        justify-content: space-between;
        padding: 5% 5%;
    }   
    h3 {
        font-size: 2.5rem;
        padding: 0;
    }
    h2, h3, p, ul, li, a, strong {
        color: white;
    }

    ul {
        list-style: none;
        padding: 0;
    }
    p {
        margin: 0;
    }

    li {
        gap: .5rem;
    }
    ul:nth-of-type(1) li {
        display: flex;
        align-items: center;
    }

    ul.slideshow {
        position: relative;
        width: 250px; 
        height: 250px; 
        display: grid; 
        grid-template-areas: "stack"; 
        overflow: hidden;
    }

    ul.slideshow li {
        grid-area: stack; 
        width: 100%;
        height: 100%;
        opacity: 0; 
        z-index: 0;
        animation-name: fadeCycle;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    ul.slideshow img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        display: block;
        aspect-ratio: 1/1;
    }

    @keyframes fadeCycle {
        0% { opacity: 1; z-index: 1; }
        2% { opacity: 1; z-index: 2; }  
        5.5% { opacity: 1; z-index: 2; } 
        7.5% { opacity: 1; z-index: 1; } 
        100% { opacity: 1; z-index: 0; }
    }
    :global(svg) {
        width: 3rem;
        height: auto;
    }

    div:nth-of-type(1) {
       display: flex;
       justify-content: center;
       padding: 1rem 0; 
       margin: 0;
    }
    div:nth-of-type(1) a {
        color: lightgray;
        font-size: 5.5vw;
        transition: .4s ease-in-out;
    }
    div:nth-of-type(1) a:hover {
        text-decoration: underline;
        color: white;
        scale: 1.05;
    }

    div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5%;
        background-color: white;
    }
    div:last-child a {
        text-decoration: underline;
    }
    div:last-child a, div:last-child p {
        color: black;
        font-size: var(--font-size-paragraph);
    }

    @media (max-width: 968px) {
        section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        ul {
            margin-right: 0;
        }

        ul.slideshow {
            height: 150px;
            width: 150px;
            justify-self: start; 
        }

        li {
            line-height: 2rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        a, p, strong {
            font-size: 1.1rem;
        }

        :global(svg) {
            width: 2rem;
            height: auto;
        }

        div:last-child {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }
    }
</style>