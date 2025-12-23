<script>
	import '$lib/styles/global.css';
  import { dev } from '$app/environment';
  let { children } = $props();
</script>



<svelte:head>
	<title>Raimond Zoeter Fotografie</title>
</svelte:head>

<main>
  {@render children()}
</main>