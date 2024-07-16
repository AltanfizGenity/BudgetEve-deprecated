<script>
  import { createEventDispatcher } from "svelte";
  export let className = "";
  export let size = 24;
  export let isActive;

  const dispatch = createEventDispatcher();

  function click() {
    dispatch("click");
  }
</script>

<button
  class={`icon-btn ${className}`}
  class:active={isActive}
  style:width={`${size}px`}
  style:height={`${size}px`}
  on:click={click}
>
  <slot class="icon" />
</button>

<style>
  .icon-btn {
    border: none;
    /* consider this using variable or dynamic approach */
    background-color: transparent;
  }

  .icon {
    width: inherit;
    height: inherit;
  }

  .icon-btn:is(.active) {
    color: var(--primaryColor);
  }
</style>
