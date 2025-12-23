<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let activeSection = '';

    onMount(() => {
        const sections = document.querySelectorAll('section[id], #contact');

        if (sections.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target.id) {
                        activeSection = '#' + entry.target.id;
                    }
                });
            }, { 
                threshold: 0.1 
            });

            sections.forEach(section => {
                observer.observe(section);
            });
        }
    });
</script>

<header class:hidden={activeSection === '#contact'}>
    <nav>
        <ul>
            <li>
                <a href={$page.url.pathname === '/' ? '#home' : '/'} 
                   class="link" 
                   class:active={$page.url.pathname === '/' && activeSection === '#home'} 
                   aria-label="Home">Home</a>
            </li>
            <li>
                <a href="/portfolio" 
                   class="link" 
                   class:active={$page.url.pathname === '/portfolio' || activeSection === '#portfolio'} 
                   aria-label="Portfolio">Portfolio</a>
            </li>
            <li>
                <a href={$page.url.pathname === '/' ? '#over-mij' : '/#over-mij'} 
                   class="link" 
                   class:active={$page.url.pathname === '/' && activeSection === '#over-mij'} 
                   aria-label="Over Mij">Over Mij</a>
            </li>
            <li>
                <a href={$page.url.pathname === '/' ? '#contact' : '/#contact'} 
                   class="link" 
                   class:active={$page.url.pathname === '/' && activeSection === '#contact'} 
                   aria-label="Contact">Contact</a>
            </li>
        </ul>
    </nav>
</header>

<style>
header {
    position: fixed;
    bottom: 3%;              
    width: 100%;       
    display: flex;
    justify-content: center; 
    align-items: center;   
    background: transparent;
    z-index: 12;
    mix-blend-mode: difference; 
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.5s ease;
}
header.hidden {
    transform: translateY(200%); 
    opacity: 0;
    pointer-events: none;
}  
ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4em;
    list-style: none;
    padding: 0; 
    margin: 0;  
}

li {
    margin: 0;
    padding: 0;
}

a {
    color: white;      
    text-decoration: none;     
    font-size: 2.5rem;
    white-space: nowrap;
}

a.active {
    text-decoration: underline;
}

@media (max-width: 768px) {
    header {
        bottom: 3%; 
    }

    ul{
        gap: 1em;
    }
    a {
        padding: 0;
        margin: 0; 
        font-size: 1.3rem;
    }
}
</style>