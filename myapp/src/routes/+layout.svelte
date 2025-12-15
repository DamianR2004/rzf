<script>
	import '$lib/styles/global.css';
  import { dev } from '$app/environment';
  let { children } = $props();
	import { logo } from "$lib/index.js";

  // --- INSTELLINGEN ---
  // Zet deze op TRUE zolang je nog aan het bouwen bent.
  // Zet deze op FALSE als je live wilt gaan.
  const ONDER_CONSTRUCTIE = true;
  // --------------------

  // De check: Is de site 'under construction' EN zijn we niet lokaal aan het testen?
  const isHidden = ONDER_CONSTRUCTIE && !dev;
</script>

<svelte:head>
	<title>Raimond Zoeter Fotografie</title>
</svelte:head>


{#if isHidden}
  <main class="blackout">
    <div class="content">
      <h1 class="logo">
				<img src="{logo}" alt="Raimond Zoeter Fotografie">
			</h1>
      <p>Aan deze website wordt momenteel gewerkt.</p>
      <div class="spinner"></div>
    </div>
  </main>

{:else}
  {@render children()}

  {/if}

<style>
  /* De normale stijlen voor je site */
  :global(body) {
    margin: 0;
    font-family: sans-serif;
  }

  /* De stijlen voor het "Under Construction" scherm */
  .blackout {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .content {
    text-align: center;
    padding: 20px;
  }

  .logo {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  p {
    color: #888;
    font-size: 0.9rem;
  }

  /* Een simpel laad-icoontje voor het effect */
  .spinner {
    margin: 20px auto;
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>