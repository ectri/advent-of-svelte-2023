<script lang="ts">
  import SiteHeader from "$lib/components/SiteHeader.svelte";
  import Snowflake from "$lib/components/Snowflake.svelte";
  import "../app.css";

  let snowflakes: number[] = $state([]);
  let { children } = $props();

  $effect(() => {
    const maxSnowflakes = window.innerWidth < 768 ? 10 : 50;
    const interval = setInterval(() => {
      snowflakes.push(snowflakes.length + 1);
      if (snowflakes.length >= maxSnowflakes) {
        clearInterval(interval);
      }
    }, 200);
  });
</script>

<SiteHeader />
<div class="mx-auto max-w-screen-lg px-4 py-4 lg:px-0">
  {@render children()}
</div>
<div class="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full">
  {#each snowflakes as _}
    <Snowflake />
  {/each}
</div>
