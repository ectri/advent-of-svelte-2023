<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Progress from "$lib/components/ui/progress/progress.svelte";
  import { Gift } from "phosphor-svelte";
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

<div class="mb-8">
  <div class="mb-2 flex justify-between">
    <span class="font-bold">Sleigh Load </span>
    <span class="font-bold {currentLoad > MAX_LOAD - 5 && 'text-red-500'}"
      >{currentLoad.toFixed(2)}%</span
    >
  </div>
  <Progress max={MAX_LOAD} value={currentLoad} class="mb-2" />
  <span class="text-sm text-muted-foreground">Santa's sleigh can only support 100kg </span>
</div>
<div class="flex flex-col-reverse items-start gap-4 lg:flex-row">
  <div class="flex w-full flex-col gap-4 rounded-md border p-4">
    <h2 class="text-lg font-bold">Backlog</h2>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {#each backlogPresents as present, i (`${present.name}-${present.weight}`)}
        {#if currentLoad + present.weight <= MAX_LOAD}
          <Button
            variant="ghost"
            class="justify-start border border-green-400 hover:bg-green-900"
            on:click={() => sleighPresents.push(backlogPresents.splice(i, 1)[0]!)}
          >
            <Gift class="mr-2 h-4 w-4" />
            <span class="sr-only">Gift</span>
            <p>
              {present.name} - {present.weight}
            </p>
          </Button>
        {/if}
      {/each}
    </div>
  </div>
  <div class="flex w-full flex-col gap-4 rounded-md border p-4">
    <h2 class="text-lg font-bold">Sleigh</h2>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {#each sleighPresents as present, i (`${present.name}-${present.weight}`)}
        <Button
          variant="ghost"
          class="justify-start border border-red-400 hover:bg-red-900"
          on:click={() => backlogPresents.push(sleighPresents.splice(i, 1)[0]!)}
        >
          <Gift class="mr-2 h-4 w-4" size={16} />
          <span class="sr-only">Gift</span>
          {present.name} - {present.weight}
        </Button>
      {/each}
    </div>
  </div>
</div>
