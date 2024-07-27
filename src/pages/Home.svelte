<script>
  import { beforeUpdate, onMount } from "svelte";
  import { records, totalBalance } from "../store/appstore";

  let activeTypePanel = "income";
  let filteredRecord = [];

  onMount(() => updateFilteredRecord());
  beforeUpdate(() => updateFilteredRecord());

  function updateFilteredRecord() {
    filteredRecord = $records
      .filter((record) => record.type === activeTypePanel)
      .reverse();
  }
</script>

<section id="home">
  <h1>Hello, User!</h1>
  <div class="accounts-panel">
    <div class="panel balance-panel">
      <div class="panel-type">Balance</div>
      <div class="panel-amount">
        {$totalBalance.income - $totalBalance.expense}
      </div>
    </div>
    <!-- Future feature -->
    <div class="panel saving-panel">
      <div class="panel-type">Saving</div>
      <div class="panel-amount">0</div>
    </div>
  </div>
  <div class="records-panel">
    <div class="type-selector">
      <button
        class="btn text-btn"
        class:active={activeTypePanel === "income"}
        on:click={() => (activeTypePanel = "income")}>income</button
      >
      <button
        class="btn text-btn"
        class:active={activeTypePanel === "expense"}
        on:click={() => (activeTypePanel = "expense")}>expense</button
      >
    </div>
    <div class="record-list">
      {#each filteredRecord as record}
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
  </div>
</section>

<style>
  #home {
    display: flex;
    flex-direction: column;
    gap: var(--appSpacing);
  }

  .accounts-panel {
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    gap: 2rem;
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
  .panel-amount {
    font-size: 1.2rem;
    font-weight: bold;
    color: #505050;
    margin-left: auto;
  }

  .saving-panel {
    background-color: var(--accentColor);
  }

  .saving-panel .panel-type {
    color: #ccc;
  }

  .saving-panel .panel-amount {
    color: #fff;
  }

  .records-panel {
    display: flex;
    flex-direction: column;
    gap: var(--appSpacing);
    background-color: #fff;
    padding: var(--appSpacing);
    border-radius: 8px;
  }

  .record-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .record {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    justify-content: space-between;
    cursor: pointer;
  }

  .type-selector {
    display: flex;
    gap: 1rem;
  }

  .text-btn {
    font-weight: bold;
    padding: 0;
    color: #ccc;
  }

  .text-btn:is(.active) {
    color: #202020;
  }
</style>
