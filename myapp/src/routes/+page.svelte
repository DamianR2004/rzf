<script> 
    import {Cursor, Navigatie, Home, Footer, Recent, Over, Opdrachtgevers, Ervaringen } from "$lib/index.js"; 
    
    let { data } = $props(); 
</script> 

<main>
    <Cursor />
    <Navigatie />
    <Home /> 
    
    <!-- <Recent albums={data.recenteProjecten} /> -->
    


    <Over />
    <!-- <Ervaringen data={data.ervaringen} /> -->
    <Opdrachtgevers />
    <Footer />
</main>