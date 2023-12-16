<script lang="ts">
  export let size: string;
  export let animationDuration: string;
  export let style: string;
</script>

<div
  class={`snowflake text-${size} opacity-50`}
  style={`animation-duration: ${animationDuration}; ${style}`}
>
  ❄️
</div>

<style>
  .snowflake {
    position: absolute;
    top: 4rem;
    color: white;
    animation-name: fall;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh);
    }
  }
</style>
