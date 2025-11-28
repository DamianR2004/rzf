<script>
    import { Instagram, LinkedIn } from "$lib/index.js";
</script>


<footer id="contact">
    <h2>Contact</h2>
        <section>
                <ul>
                    <li><h3>Socials</h3></li>
                    <li>
                        <Instagram />
                        <a href="https://www.instagram.com/raimondzoeterfotografie/" target="_blank" class="link" aria-label="Instagram van Raimond Zoeter Fotografie">Instagram</a>
                    </li>
                    <li>
                        <LinkedIn />
                        <a href="https://www.linkedin.com/in/raimond-zoeter-8b016649/" target="_blank" class="link" aria-label="LinkedIn van Raimond Zoeter">LinkedIn</a>
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

                <ul>
                    <li><img src="" alt=""></li>
                </ul>
    </section>

    <div>
        <a href="mailto:info@raimondzoeterfotografie.nl">info@raimondzoeterfotografie.nl</a>
    </div>

    <div>
        <p>© 2025 Raimond Zoeter Fotografie</p>
        <p>Designed and developed <a href="https://www.bydr.studio" target="_blank" aria-label="Link naar de website van de ontwikkelaar">bydr.studio</a></p>
    </div>

</footer>

<style>
    footer{
        background-color: #221F20;
    }
    section {
		display: flex;
        justify-content: space-between;
        padding: 5% 5%;
    }   
    h3{
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
    p{
        margin: 0;
    }

    li{
        gap: .5rem;
    }
    ul:nth-of-type(1) li{
        display: flex;
        align-items: center;
    }

    ul:nth-of-type(4){
        background-color: aliceblue;
        height: 250px;
        width: 250px;
        align-self: center; 
    }
    :global(svg){
        width: 3rem;
        height: auto;
    }

    div:nth-of-type(1){
       display: flex;
       justify-content: center;
       padding: 1rem 0; 
       margin: 0;
        & a{
            color: lightgray;
            font-size: 5.5vw;
            transition: .4s ease-in-out;
        }
        & a:hover{
            text-decoration: underline;
            color: white;
            scale: 1.05;
        }
    }
    div:last-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5%;
        background-color: white;

        & a{
            text-decoration: underline;
        }
        & a, p{
            color: black;
              font-size: var(--font-size-paragraph);
        }
    }

    @media (max-width: 968px) {
        section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        ul{
            margin-right: 0;
        }

        ul:nth-of-type(4){
            height: 150px;
            width: 150px;
        }

        li{
            line-height: 2rem;
        }

        h3{
            font-size: 1.5rem;
        }

        a, p, strong{
            font-size: 1.1rem;
        }

        :global(svg){
            width: 2rem;
            height: auto;
        }

        div:last-child{
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }
    }

</style>