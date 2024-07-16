<script>
  import IconButton from "./IconButton.svelte";
  export let isActive = false;
</script>

<IconButton className="add-btn" on:click {isActive}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg
  >
</IconButton>
