<script>
  import { createEventDispatcher } from "svelte";

  export let elementClass = "";

  const dispatch = createEventDispatcher();

  function click() {
    dispatch("click");
  }
</script>

<button class={`text-btn ${elementClass}`} on:click={click}>
  <slot />
</button>
