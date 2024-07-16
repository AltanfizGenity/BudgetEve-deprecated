<script>
  import { createEventDispatcher } from "svelte";

  export let elementClass = "";

  const dispatch = createEventDispatcher();

  function click() {
    dispatch("click");
  }
</script>

<button class={`btn btn-text ${elementClass}`} on:click={click}>
  <slot />
</button>

<style>
  .btn-text {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: var(--backgroundColor);
  }
  .primary-btn {
    background-color: var(--primaryColor);
  }
  .secondary-btn {
    background-color: var(--secondaryColor);
  }
  .danger-btn {
    background-color: var(--dangerColor);
  }
</style>
