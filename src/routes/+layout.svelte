<script lang="ts">
  import Header from "$lib/ui/components/Header.svelte";
  import "../app.css";
</script>

<Header />
<div class="mx-auto max-w-screen-lg px-12 py-4">
  <slot />
</div>
