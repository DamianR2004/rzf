<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let cursor;
  let cursorText = "";

  onMount(() => {
    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.6 });
    };
    window.addEventListener("mousemove", moveCursor);

    const interactiveSelector = "img, a, .link, article";
    const interactives = document.querySelectorAll(interactiveSelector);

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursorText = el.dataset.cursor || "";
        gsap.to(cursor, { scale: 2, duration: 0.6 });
      });

      el.addEventListener("mouseleave", () => {
        cursorText = "";
        gsap.to(cursor, { scale: 1, duration: 0.6 });
      });
    });
  });
</script>

<div bind:this={cursor} class="cursor">
  {#if cursorText}
    <span class="cursor-text">{cursorText}</span>
  {/if}
</div>

<style>
  .cursor {
    background: black;
    width: 2.5rem;
    height: 2.5rem;
    z-index: 100;
    position: fixed;
    pointer-events: none;
    border-radius: 50%;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
  }

  :global(a):hover {
    z-index: 1600;
  }
</style>
