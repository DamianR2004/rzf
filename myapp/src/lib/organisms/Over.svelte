<script>
  import { portret } from "$lib/index.js";
</script>

<section id="over-mij">
  <h2>Over mij</h2>
  <div class="wrapper">
    <img src="{portret}" alt="Portret Raimond Zoeter" />
    <p>Mijn werkstijl kenmerkt zich door <i>aandacht</i> voor de mens, voor <i>detail</i> en voor de techniek. Ik stel mensen moeiteloos op hun gemak en ben ontspannen in de omgang. Dat zie je terug op de foto’s die ik maak. Daarnaast let ik op details en zet ik graag net een stapje extra. Ik hou ervan te spelen met licht om de foto naar een hoger niveau te tillen. 
       Van interieur- en foodfotografie  tot bedrijfsmatige reportages en portretten; met ruim 20 jaar ervaring in de studio en op locatie ben ik zeer breed inzetbaar.</p>
  </div>
</section>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 545px 1fr;
    gap: 3rem;
    padding: 5% 5rem;
  }

  img {
    width: 100%;
    height: 545px;
    background-color: #161616;
    border-radius: 10px;
  }

  p {
    font-size: 2.1rem;
    margin: 0;
    mix-blend-mode: difference;
    color: #f0f0f0;
    z-index: 101;
  }

  p i{
    text-decoration: underline;
    font-weight: 600;
  }

  /* responsive: stack on small screens */
  @media (max-width: 700px) {
    .wrapper {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    img{
      height: 300px;
      width: 100%;
    }
    p {
      font-size: 1rem;
    }
  }
</style>
