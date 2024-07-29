<script>
  export let name = "";
  export let title = "panel";
  export let amount = 0;
  export let type = "default";
</script>

<div class={`panel ${name ? `${name}-panel` : ""} ${type}-panel`}>
  <div class="title">{title}</div>
  <div class="amount">{amount}</div>
</div>

<style>
  .panel {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 10px;
  }

  .title {
    font-size: 0.8rem;
    color: #aaa;
    text-transform: capitalize;
  }

  .amount {
    font-size: 1.2rem;
    font-weight: bold;
    color: #202020;
    margin-left: auto;
  }

  .panel:is(.default-panel) {
    background-color: #fff;
    box-shadow: 5px 5px 15px rgba(20, 20, 20, 0.1);
  }

  .panel:is(.primary-panel) {
    background-color: var(--primaryColor);
    box-shadow: 5px 5px 15px rgba(49, 109, 218, 0.1);
  }

  .panel:is(.primary-panel) .amount {
    color: #fff;
  }

  .panel:is(.primary-panel) .title {
    color: #eee;
  }
</style>
