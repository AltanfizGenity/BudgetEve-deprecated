<script>
  import { beforeUpdate, onMount } from "svelte";
  import { records, totalBalance } from "../store/appstore";
  import Panel from "../components/core/Panel.svelte";
  import Record from "../components/core/Record.svelte";

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

<section id="home" class="app-section">
  <h1>Hello, User!</h1>
  <div class="accounts-panel">
    <Panel
      name="balance"
      title="Balance"
      amount={$totalBalance.income - $totalBalance.expense}
    />
    <!-- Future feature -->
    <Panel title="Savings" type="primary" />
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
        <Record {record} />
      {/each}
    </div>
  </div>
</section>
