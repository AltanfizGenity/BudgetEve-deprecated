<script>
  export let name = "";
  export let title = "panel";
  export let amount = 0;
  export let type = "default";
</script>

<div class={`panel ${name ? `${name}` : ""} ${type}`}>
  <div class="title">{title}</div>
  <div class="amount">{amount}</div>
</div>
