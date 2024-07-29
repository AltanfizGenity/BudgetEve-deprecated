<script>
  export let record;
</script>

<div class="record">
  <div class="left-info">
    <div class="type">{record.category}</div>
  </div>
  <div class="right-info">
    <div class="amount">{record.amount}</div>
  </div>
</div>

<style>
  .record {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0.8rem 0;
  }

  .record:not(:last-child) {
    border-bottom: 1px solid rgba(200, 200, 200, 0.5);
  }
</style>
