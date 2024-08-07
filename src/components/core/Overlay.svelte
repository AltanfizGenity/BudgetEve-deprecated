<script>
  import { createEventDispatcher } from "svelte";
  import BackButton from "../buttons/icon-button/BackButton.svelte";

  export let zIndex = 200;
  export let useHeader = false;
  export let headerText = "title";
  export let isOpen = false;

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close");
  }
</script>

{#if isOpen}
  <div class="overlay" style:z-index={zIndex}>
    <div class="backlayer"></div>
    <div class="content">
      {#if useHeader}
        <div class="header" style:z-index={zIndex + 1}>
          <BackButton on:click={close} />
          <div class="title">{headerText}</div>
        </div>
      {/if}
      <div class="main-content">
        <slot></slot>
      </div>
    </div>
  </div>
{/if}
