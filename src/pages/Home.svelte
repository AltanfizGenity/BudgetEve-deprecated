<script>
  import { records, totalBalance } from "../store/appstore";
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
    <h2>records</h2>
    {#each $records as record}
      record #{record.id}
    {/each}
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
</style>
