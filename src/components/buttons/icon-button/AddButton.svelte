<script>
  import { createEventDispatcher } from "svelte";
  export let className = "";

  const dispatch = createEventDispatcher();

  function click() {
    dispatch("click");
  }
</script>

<button class="btn add-btn primary-btn {className}" on:click={click}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg
  >
</button>

<style>
  .add-btn {
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .primary-btn {
    background-color: var(--primaryColor);
    color: var(--backgroundColor);
  }

  svg {
    width: 24px;
  }
</style>
