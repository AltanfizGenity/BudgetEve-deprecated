<script>
  import { records, totalBalance } from "../store/appstore";
</script>

<section id="records">
  <h1>Records</h1>
  <div class="type-panel">
    <div class="panel panel-income">
      <div class="panel-type">income</div>
      <div class="panel-amount">{$totalBalance.income}</div>
    </div>
    <div class="panel panel-expense">
      <div class="panel-type">expense</div>
      <div class="panel-amount">{$totalBalance.expense}</div>
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
  #records {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--appSpacing);
  }

  .type-panel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--appSpacing);
  }

  .panel {
    background-color: #fff;
    padding: 1rem;
    box-shadow: 1px 2px 5px rgba(20, 20, 20, 0.1);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 5px;
  }

  .panel-type {
    font-size: 0.8rem;
    color: #aaa;
    text-transform: capitalize;
  }

  .panel-income {
    background-color: var(--accentColor);
  }

  .panel-income .panel-type {
    color: #ddd;
  }

  .panel-income .panel-amount {
    color: #fff;
  }

  .panel-amount {
    font-size: 1.2rem;
    font-weight: bold;
    color: #505050;
    margin-left: auto;
  }

  /* consider using theme */
  .record-list {
    display: flex;
    flex-direction: column;
    gap: calc(var(--appSpacing) / 2);
    background-color: #fff;
    box-shadow: 1px 2px 5px rgba(20, 20, 20, 0.1);
    padding: var(--appSpacing);
    border-radius: 5px;
  }

  .record {
    padding: 0.8rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
</style>
