<script>
  import { records } from "../store/appstore";
</script>

<section id="records">
  <h1>Records</h1>
  <div class="type-panel">
    <div class="income"></div>
    <div class="expense"></div>
  </div>
  <div class="record-list">
    {#each $records as record}
      <div class="record">
        <div class="left-info">
          <div class="type">{record.type}</div>
        </div>
        <div class="right-info">
          <div class="amount">{record.amount}</div>
        </div>
      </div>
    {/each}
  </div>
</section>
