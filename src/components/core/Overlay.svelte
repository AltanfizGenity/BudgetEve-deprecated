<script>
  export let zIndex = 200;
</script>

<div class="overlay" style:z-index={zIndex}>
  <div class="backlayer"></div>
  <div class="content">
    <slot></slot>
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
</style>
