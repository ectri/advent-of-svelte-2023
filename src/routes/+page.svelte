<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { CHALLENGES, type Challenge } from "$lib/data/levels";
  import Clock from "phosphor-svelte/lib/Clock";
  import Gift from "phosphor-svelte/lib/Gift";
  import TreeEvergreen from "phosphor-svelte/lib/TreeEvergreen";
  import { fade } from "svelte/transition";

  const emojis = ["🎅", "🎄", "⭐", "🧑‍🎄", "🎁", "❄️", "☃️", "🧦", "🤶"];
  const emojisLength = emojis.length;
  const totalChallenges = CHALLENGES.length;
  const completedChallenges = CHALLENGES.filter((challenge) => challenge.isDone).length;
  const uncompletedChallenges = totalChallenges - completedChallenges;
  let areChallengesVisible = $state(false);

  $effect(() => {
    areChallengesVisible = true;
  });

  function showChallenge({ id }: Challenge) {
    return id <= totalChallenges;
  }
</script>

<main class="my-4">
  <div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
    <div class="flex items-center justify-between rounded-lg border px-4 py-2 md:p-4">
      <h1><Gift class="mr-2 inline text-xl text-green-500" />Completed</h1>
      <span class="text-3xl text-green-500">{completedChallenges}</span>
    </div>

    <div class="flex items-center justify-between rounded-lg border px-4 py-2 md:p-4">
      <h1><Clock class="mr-2 inline text-xl text-red-500" />Uncompleted</h1>
      <span class="text-3xl text-red-500">{uncompletedChallenges}</span>
    </div>

    <div class="flex items-center justify-between rounded-lg border px-4 py-2 md:p-4">
      <h1><TreeEvergreen class="mr-2 inline text-xl text-blue-500" />Total</h1>
      <span class="text-3xl text-blue-500">{totalChallenges}</span>
    </div>
  </div>

  <h2 class="mb-4 text-xl font-semibold">Challenges</h2>

  <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
    {#each CHALLENGES as challenge, index}
      {#if areChallengesVisible && showChallenge(challenge)}
        {@const isEven = index % 2 === 0}
        <a
          href={challenge.isDone ? `/challenges/${challenge.id.toString().padStart(2, "0")}` : "#"}
          transition:fade={{ delay: index * 100 }}
        >
          <Card.Root
            class={challenge.isDone
              ? "h-full transition-transform ease-linear hover:scale-[1.03] hover:bg-muted/40"
              : "cursor-default blur-sm"}
          >
            <Card.Header class="flex flex-row items-center justify-between py-2">
              <span class="text-xl">{emojis[index % emojisLength]}</span>
              <span class="text-4xl {isEven ? 'text-green-500' : 'text-red-500'}">
                {challenge.id.toString().padStart(2, "0")}
              </span>
            </Card.Header>
            <Card.Content class="space-y-4">
              <img
                class="h-[280px] w-full rounded-full object-cover p-4"
                src={challenge.image}
                alt={challenge.title}
              />
              <Card.Title>{challenge.title}</Card.Title>
              <Card.Description>{challenge.description}</Card.Description>
            </Card.Content>
          </Card.Root>
        </a>
      {/if}
    {/each}
  </div>
</main>
