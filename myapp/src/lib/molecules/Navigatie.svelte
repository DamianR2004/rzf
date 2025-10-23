<header>
    <nav>
        <ul>
            <li><a href="#home" aria-label="Home" class="link">Home</a></li>
            <li><a href="#portfolio" aria-label="Portfolio" class="link">Portfolio</a></li>
            <li><a href="#over-mij" aria-label="Over Mij" class="link">Over Mij</a></li>
            <li><a href="#contact" aria-label="Contact" class="link">Contact</a></li>
        </ul>
    </nav>
</header>

<style>
header {
    position: fixed;
    bottom: 5%;              
    width: 100%;       
    display: flex;
    justify-content: center; 
    align-items: center;   
    background: transparent;
    z-index: 1000;
    background: transparent;
    mix-blend-mode: difference; 
}

ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    list-style: none;
}

li{
    margin: 0;
    padding: 0;
}

a {
    color: white;      
    text-decoration: none;     
    margin: 5px;  
    padding: 1.25rem; 
}

a:hover {
    text-decoration: underline;
    transition: .25s ease-in-out; 
}
</style>