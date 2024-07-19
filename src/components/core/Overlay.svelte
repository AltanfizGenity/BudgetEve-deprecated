<script>
  import BackButton from "../buttons/icon-button/BackButton.svelte";

  export let zIndex = 200;
  export let useHeader = false;
  export let headerText = "title";
</script>

<div class="overlay" style:z-index={zIndex}>
  <div class="backlayer"></div>
  <div class="content">
    {#if useHeader}
      <div class="header">
        <BackButton />
        <div class="title">{headerText}</div>
      </div>
    {/if}
    <slot class="main-content"></slot>
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--backgroundColor);
    width: 100%;
    height: 100dvh;
    padding: var(--appSpacing);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: var(--appSpacing);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .title {
    position: absolute;
    left: 50%;
    translate: -50%;
  }
</style>
