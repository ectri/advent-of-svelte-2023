<script lang="ts">
  import { browser } from "$app/environment";
  import ChallengeNav from "$lib/components/ChallengeNav.svelte";

  let { children } = $props();
</script>

{#if browser}
  <ChallengeNav path={window.location.pathname} />
{/if}

<div>
  {@render children()}
</div>
