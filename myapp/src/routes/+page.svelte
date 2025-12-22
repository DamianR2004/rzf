<script> 
    import {Cursor, Navigatie, Home, Footer, Recent, Over, Opdrachtgevers, Ervaringen, Albums } from "$lib/index.js"; 
    
    let { data } = $props(); 
</script> 

<main>
    <Cursor />
    <Navigatie />
    <Home /> 
    <Recent {data} />
    


    <Over />
    <!-- <Ervaringen data={data.ervaringen} /> -->
    <Opdrachtgevers />
    <Footer />
</main>