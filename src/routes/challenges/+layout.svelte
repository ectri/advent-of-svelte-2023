<script lang="ts">
  import { page } from "$app/stores";
  import ChallengeNav from "$lib/components/ChallengeNav.svelte";

  let { children } = $props();
</script>

<ChallengeNav path={$page.url.pathname} />

<div>
  {@render children()}
</div>
