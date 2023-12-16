<script lang="ts">
  import Header from "$lib/ui/components/Header.svelte";
  import Snowflake from "$lib/ui/components/Snowflake.svelte";
  import { onMount } from "svelte";
  import "../app.css";

  // 눈송이를 생성하기 위한 배열
  let snowflakes: number[] = [];

  // 랜덤한 스타일 값을 생성하는 함수
  const randomSize = () => `${Math.floor(Math.random() * 3) + 1}x`;
  const randomDuration = () => `${Math.floor(Math.random() * 5) + 5}s`;
  const randomPosition = () => `${Math.floor(Math.random() * 100)}%`;

  onMount(() => {
    let maxSnowflakes = 50;
    const interval = setInterval(() => {
      snowflakes = [...snowflakes, snowflakes.length + 1];
      if (snowflakes.length >= maxSnowflakes) {
        clearInterval(interval);
      }
    }, 200);
  });
</script>

<Header />
<div class="mx-auto max-w-screen-lg px-4 py-4 md:px-12">
  <slot />
</div>
<div class="snow-container">
  {#each snowflakes as _}
    <Snowflake
      size={randomSize()}
      animationDuration={randomDuration()}
      style={`left: ${randomPosition()};`}
    />
  {/each}
</div>

<style>
  .snow-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10; /* 눈송이가 다른 요소들 위에 나타나도록 z-index를 설정 */
    pointer-events: none; /* 눈송이가 클릭 이벤트를 방해하지 않도록 설정 */
  }
</style>
