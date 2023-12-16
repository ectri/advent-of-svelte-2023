<script lang="ts">
  import Header from "$lib/ui/components/Header.svelte";
  import "../app.css";
</script>

<Header />
<div class="mx-auto max-w-screen-lg px-4 py-4 md:px-12">
  <slot />
</div>
