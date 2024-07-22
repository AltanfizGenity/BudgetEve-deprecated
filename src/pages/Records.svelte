<script>
  import { records, totalBalance } from "../store/appstore";
</script>

<section id="records">
  <h1>Records</h1>
  <div class="type-panel">
    <div class="income">
      <div class="info-type">income</div>
      <div class="amount">{$totalBalance.income}</div>
    </div>
    <div class="expense">
      <div class="info-type">expense</div>
      <div class="amount">{$totalBalance.expense}</div>
    </div>
  </div>
  <div class="record-list">
    {#each $records as record}
      <div class="record">
        <div class="left-info">
          <div class="type">{record.category}</div>
        </div>
        <div class="right-info">
          <div class="amount">{record.amount}</div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
</style>
