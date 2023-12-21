<script lang="ts">
  const sizes = ["xs", "sm", "lg"];
  const durations = ["8s", "12s", "15s"];
  const randomDuration = durations[Math.floor(Math.random() * durations.length)];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  const randomPosition = Math.random() * 100;
</script>

<div
  class={`snowflake text-${randomSize}`}
  style={`animation-duration: ${randomDuration}; left: ${randomPosition}%;`}
>
  ❄️
</div>

<style>
  .snowflake {
    position: absolute;
    opacity: 0.8;
    animation-name: fallsway;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes fallsway {
    0% {
      transform: translateY(0) translateX(0);
    }
    100% {
      transform: translateY(100vh) translateX(-100px);
    }
  }
</style>
