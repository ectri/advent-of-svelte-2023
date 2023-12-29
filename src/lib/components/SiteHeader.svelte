<script lang="ts">
  import logo from "$lib/assets/logo.webp";
  import GitHubIcon from "$lib/components/icons/github.svelte";
  import XIcon from "$lib/components/icons/x.svelte";
  import { buttonVariants } from "$lib/components/ui/button";
  import { cn } from "$lib/utils";
</script>

<header
  class="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
  <div class="mx-auto flex h-16 max-w-screen-lg flex-nowrap items-center px-4 lg:px-0">
    <a href="/" class="flex items-center">
      <img src={logo} class="max-h-full w-12" alt="Advent Of Svelte 2023" />
      <span class="text-[15px] font-bold sm:inline-block lg:text-base">
        Advent of Svelte 2023
      </span>
    </a>
    <div class="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
      <nav class="flex items-center">
        <a href="https://github.com/heygwangjin/advent-of-svelte-2023" target="_blank">
          <div
            class={cn(
              buttonVariants({
                size: "sm",
                variant: "ghost"
              }),
              "w-9 rounded-full px-0"
            )}
          >
            <GitHubIcon class="h-4 w-4" />
            <span class="sr-only">GitHub</span>
          </div>
        </a>
        <a href="https://x.com/heygwangjin" target="_blank">
          <div
            class={cn(
              buttonVariants({
                size: "sm",
                variant: "ghost"
              }),
              "w-9 rounded-full px-0"
            )}
          >
            <XIcon class="h-3 w-3 fill-current" />
            <span class="sr-only">X (formerly known as Twitter)</span>
          </div>
        </a>
      </nav>
    </div>
  </div>
</header>
