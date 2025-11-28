<script> 
    import {Cursor, Navigatie, Home, Footer, Recent, Over, Opdrachtgevers, Ervaringen } from "$lib/index.js"; 
    
    let { data } = $props(); 
</script> 

<main>
    <Cursor />
    <Navigatie />
    <Home /> 
    
    <Recent albums={data.recenteProjecten} />
    
    <Ervaringen data={data.ervaringen} />

    <Over />
    <Opdrachtgevers />
    <Footer />
</main>