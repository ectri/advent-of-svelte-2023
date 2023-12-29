<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Progress } from "$lib/components/ui/progress";
  import cookie from "$lib/assets/cookie.png";
  import { Cookie } from "phosphor-svelte";

  let count = $state(0);
  const mood = $derived(getSantasMood());

  function getSantasMood() {
    if (count * 10 > 100) return 100;
    return count * 10;
  }
</script>

<div class="flex flex-col items-center gap-4">
  <button
    class="transition duration-300 ease-in-out hover:scale-110 active:scale-98"
    on:click={() => {
      if (count < 10) count++;
    }}
  >
    <img src={cookie} alt="cookie" class="h-56 w-56 lg:h-96 lg:w-96" />
  </button>
  <Card.Root class="mx-auto max-w-lg">
    <Card.Header>
      <Card.Title>Santa's Mood</Card.Title>
      <Card.Description>
        See how many cookies you need to leave out for the best gifts
      </Card.Description>
    </Card.Header>
    <Card.Content class="flex flex-col gap-4">
      <Progress value={mood} />
      <div class="flex flex-wrap items-center gap-0.5">
        {#each Array(count) as _}
          <Button size="icon" variant="ghost" onclick={() => count--}>
            <Cookie class="h-6 w-6" />
          </Button>
        {/each}
      </div>
      <div class="flex items-center gap-2">
        <Button
          onclick={() => {
            if (count > 0) count--;
          }}>Remove Cookie</Button
        >
        <Button onclick={() => (count = 0)}>Reset Cookies</Button>
      </div>
    </Card.Content>
  </Card.Root>
</div>
