<script lang="ts">
  import { Github } from "lucide-svelte";
  import logo from "$lib/assets/logo.webp";
</script>

<header class="sticky top-0 z-10 h-16 w-full border-b bg-white px-4 md:px-12">
  <ul class="mx-auto flex h-full max-w-screen-lg flex-nowrap items-center">
    <li class="h-full py-2">
      <img src={logo} class="max-h-full" alt="Advent Of Svelte 2023" />
    </li>

    <li>
      <h1 class="ml-2 text-2xl font-semibold">
        <a href="/"> Advent of Svelte 2023 </a>
      </h1>
    </li>

    <li class="flex-1"></li>

    <li>
      <a href="https://github.com/heygwangjin/advent-of-svelte-2023" target="_blank" rel="noopener">
        <Github
          class="h-8 w-8 rounded-full bg-black p-1.5 text-white transition-shadow hover:shadow-md hover:shadow-black"
        />
      </a>
    </li>
  </ul>
</header>
