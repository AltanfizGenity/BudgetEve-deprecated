<script>
  export let className= "";
</script>

<button class={`icon-btn ${className}`}>
  <slot class="icon"/>
</button>

<style>
    .icon-btn {
      border: none;
      /* consider this using variable or dynamic approach */
      width: 24px;
      height: 24px;
      background-color: transparent;
    }
    
    .icon {
      width: inherit;
      height: inherit;
    }
</style>