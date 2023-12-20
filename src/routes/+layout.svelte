<script lang="ts">
  import Header from "$lib/ui/components/Header.svelte";
  import Snowflake from "$lib/ui/components/Snowflake.svelte";
  import { onMount } from "svelte";
  import "../app.css";

  let snowflakes: number[] = [];

  onMount(() => {
    const maxSnowflakes = window.innerWidth < 768 ? 10 : 50;
    const interval = setInterval(() => {
      snowflakes = [...snowflakes, snowflakes.length + 1];
      if (snowflakes.length >= maxSnowflakes) {
        clearInterval(interval);
      }
    }, 200);
  });
</script>

<Header />
<div class="mx-auto max-w-screen-lg px-4 py-4 md:px-12">
  <slot />
</div>
<div class="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full">
  {#each snowflakes as _}
    <Snowflake />
  {/each}
</div>
