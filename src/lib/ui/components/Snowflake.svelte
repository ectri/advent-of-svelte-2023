<script lang="ts">
  export let animationDuration: string;
  export let style: string;

  const flakes = ["❄️", "⛄️", "🎄"];
  const sizes = ["lg", "xl", "2xl"];
</script>

<div
  class={`snowflake text-${sizes[Math.floor(Math.random() * sizes.length)]} opacity-80`}
  style={`animation-duration: ${animationDuration}; ${style}`}
>
  {flakes[Math.floor(Math.random() * flakes.length)]}
</div>

<style>
  .snowflake {
    position: absolute;
    top: 4rem;
    color: white;
    animation-name: fallsway;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes fallsway {
    0% {
      transform: translateY(0) translateX(-60px);
    }
    50% {
      transform: translateY(50vh) translateX(10px); /* 중간 지점에서의 좌우 움직임 */
    }
    100% {
      transform: translateY(100vh) translateX(0); /* 최종 지점에서의 위치 */
    }
  }
</style>
