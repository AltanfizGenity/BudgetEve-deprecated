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

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--backgroundColor);
    width: 100%;
    height: 100dvh;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--appSpacing);
    padding: var(--appSpacing) 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--appSpacing);
  }

  .title {
    position: absolute;
    left: 50%;
    translate: -50%;
  }

  .main-content {
    width: 100%;
    height: 100%;
    margin-top: var(--appSpacing);
    overflow-y: auto;
    padding: 0 var(--appSpacing);
  }
</style>
