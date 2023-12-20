<script lang="ts">
  import { CHALLENGES, type Challenge } from "$lib/data/levels";
  import { getDate } from "date-fns";
  import { Clock, Gift, TreePine } from "lucide-svelte";
  import { fade } from "svelte/transition";

  const emojis = ["🎅", "🎄", "⭐", "🧑‍🎄", "🎁", "❄️", "☃️", "🧦", "🤶"];
  const emojisLength = emojis.length;
  const today = getDate(new Date());
  const completedChallenges = CHALLENGES.filter((challenge) => challenge.isDone).length;
  const totalChallenges = today;
  const uncompletedChallenges = totalChallenges - completedChallenges;
  let areChallengesVisible = $state(false);

  $effect(() => {
    areChallengesVisible = true;
  });

  function showChallenge({ id }: Challenge) {
    return id <= today;
  }
</script>

<main class="my-4">
  <div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
    <div
      class="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 px-4 py-2 transition-shadow hover:shadow-md hover:shadow-green-200 md:p-4"
    >
      <h1><Gift class="mr-2 inline text-green-500" />Completed</h1>
      <span class="text-3xl">{completedChallenges}</span>
    </div>

    <div
      class="flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-2 transition-shadow hover:shadow-md hover:shadow-red-200 md:p-4"
    >
      <h1><Clock class="mr-2 inline text-red-500" />Uncompleted</h1>
      <span class="text-3xl">{uncompletedChallenges}</span>
    </div>

    <div
      class="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 transition-shadow hover:shadow-md hover:shadow-blue-200 md:p-4"
    >
      <h1><TreePine class="mr-2 inline text-blue-500 " />Total</h1>
      <span class="text-3xl">{totalChallenges}</span>
    </div>
  </div>

  <h2 class="mb-4 text-xl font-semibold text-gray-600">Challenges</h2>

  <ul class="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
    {#each CHALLENGES as challenge, index}
      {#if areChallengesVisible && showChallenge(challenge)}
        {@const isEven = index % 2 === 0}
        <li
          class="bg-white transition-transform hover:scale-[1.03]"
          transition:fade={{ delay: index * 100 }}
        >
          <a
            href={challenge.slug}
            class="relative block rounded-lg border px-4 py-2 shadow-md {!challenge.isDone &&
              'pointer-events-none blur-sm'}"
          >
            <span class="absolute left-4 top-2">
              <span class="text-xl">{emojis[index % emojisLength]}</span>
            </span>

            <span
              class="absolute right-4 top-2 text-4xl {isEven ? 'text-green-500' : 'text-red-500'}"
            >
              {challenge.id.toString().padStart(2, "0")}
            </span>

            <img
              class="mt-8 h-[280px] w-full object-cover p-4"
              src={challenge.image}
              alt={challenge.title}
            />

            <div class="mt-4 h-[100px]">
              <h2 class="text-lg font-semibold text-gray-600">{challenge.title}</h2>
              <p class="text-sm text-gray-400">{challenge.description}</p>
            </div>
          </a>
        </li>
      {/if}
    {/each}
  </ul>
</main>
