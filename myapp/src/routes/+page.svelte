<script> 
    import {Cursor, Navigatie, Home, Footer, Recent, Over, Opdrachtgevers, Ervaringen } from "$lib/index.js"; 
    
    let { data } = $props(); 
</script> 
    <Navigatie />
    <main>
    <Cursor />
    <Home /> 
    <Recent {data} />
    <Over />
    <Ervaringen {data} />
    <Opdrachtgevers />
    </main>
    <Footer />