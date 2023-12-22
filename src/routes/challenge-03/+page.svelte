<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Progress from "$lib/components/ui/progress/progress.svelte";
  import type { Present } from "./+page.js";

  let { data } = $props();

  let backlogPresents = $state([...data.presents]);
  let sleighPresents = $state<Present[]>([]);

  const MAX_LOAD = 100;
  const currentLoad = $derived(sleighPresents.reduce((acc, item) => acc + item.weight, 0));

  $effect(() => {
    backlogPresents.sort((a, b) => b.weight - a.weight);
    sleighPresents.sort((a, b) => a.weight - b.weight);
  });
</script>

<div class="pb-4">
  <div class="mb-2">
    <span>Current load: </span>
    <span class="font-bold {currentLoad > MAX_LOAD - 5 && 'text-red-500'}"
      >{currentLoad.toFixed(2)}</span
    >
  </div>
  <Progress max={MAX_LOAD} value={currentLoad} />
</div>
<div class="flex flex-col-reverse items-start gap-4 lg:flex-row">
  <div class="flex w-full flex-col gap-2">
    <h2 class="text-lg font-bold">Backlog presents</h2>
    <div class="grid grid-cols-3 gap-2 rounded-md border p-4">
      {#each backlogPresents as present, i (`${present.name}-${present.weight}`)}
        {#if currentLoad + present.weight <= MAX_LOAD}
          <Button
            variant="ghost"
            on:click={() => sleighPresents.push(backlogPresents.splice(i, 1)[0]!)}
          >
            {present.name} - {present.weight}
          </Button>
        {/if}
      {/each}
    </div>
  </div>
  <div class="flex w-full flex-col gap-2">
    <h2 class="text-lg font-bold">Sleigh presents</h2>
    <div class="grid grid-cols-3 rounded-md border p-4">
      {#each sleighPresents as present, i (`${present.name}-${present.weight}`)}
        <Button
          variant="ghost"
          on:click={() => backlogPresents.push(sleighPresents.splice(i, 1)[0]!)}
        >
          {present.name} - {present.weight}
        </Button>
      {/each}
    </div>
  </div>
</div>
