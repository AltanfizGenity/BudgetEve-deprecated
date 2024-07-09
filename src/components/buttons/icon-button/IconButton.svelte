<script>
  export let className = "";
  export let size = 24;
</script>

<button
  class={`icon-btn ${className}`}
  style:width={`${size}px`}
  style:height={`${size}px`}
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
</style>
