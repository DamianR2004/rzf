<script>
  import { portret } from "$lib/index.js";
</script>

<section id="over-mij">
  <h2>Over mij</h2>
  <article class="wrapper">
    <img src="{portret}" alt="Portret Raimond Zoeter" />
    <p>Mijn werkstijl kenmerkt zich door <span>aandacht</span> voor de mens, voor <span>detail</span> en voor de techniek. Ik stel mensen moeiteloos op hun <span>gemak</span> en ben <span>ontspannen</span> in de omgang. Dat zie je terug op de foto’s die ik maak. Daarnaast let ik op details en zet ik graag net een stapje extra. Ik hou ervan te spelen met <span>licht</span> om de foto naar een <span>hoger niveau</span> te tillen. 
       Van interieur- en foodfotografie  tot bedrijfsmatige reportages en portretten; met ruim <span>20 jaar</span> ervaring in de studio en op locatie ben ik zeer breed inzetbaar.</p>
  </article>
</section>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 545px 1fr;
    gap: 3rem;
    padding: 0 5%;
  }

  img {
    width: 100%;
    background-color: #161616;
    border-radius: 10px;
    z-index: 11;
  }

  p {
    font-size: 2.1rem;
    margin: 0;
    color: black;
  }

  p span{
    font-family: "Playwrite", sans-serif;
    text-decoration: underline;
    font-weight: 600;
    font-style: italic;
    color: black;
  }

  @media (max-width: 1024px) {
    .wrapper {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    img{
      height: 100%;
      width: 100%;
    }
    p {
      font-size: 2vh;
    }
  }
</style>
