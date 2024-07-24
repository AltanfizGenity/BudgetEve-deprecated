<script>
  import { beforeUpdate, onMount } from "svelte";
  import { records, totalBalance } from "../store/appstore";
  import { formatDateID, getDateOfFormattedDateID } from "../utils/date";

  let groupedRecords = new Map();

  onMount(() => {
    groupRecordsByDate();
  });

  beforeUpdate(() => {
    groupRecordsByDate();
  });

  function groupRecordsByDate() {
    let sortedGroupRecords = new Map();
    let unsorted = $records.reduce((total, record) => {
      let date = record.date;
      let groupID = formatDateID(date);

      if (!total[groupID]) {
        total[groupID] = [];
      }

      total[groupID].push(record);
      return total;
    }, {});

    let sortedKeys = Object.keys(unsorted).sort(
      (a, b) => Number(b) - Number(a),
    );

    sortedKeys.forEach((key) => {
      sortedGroupRecords.set(key, unsorted[key]);
    });
    groupedRecords = sortedGroupRecords;
  }
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
  <div class="record-panel">
    {#each groupedRecords as group}
      <div class="record-group">
        <div class="date">{getDateOfFormattedDateID(group[0])}</div>
        <div class="record-list">
          {#each group[1] as record}
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

  .record-panel {
    margin-top: var(--appSpacing);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .record-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .record-group .date {
    color: #aaa;
    font-size: 0.8rem;
  }

  .record-list {
    display: flex;
    flex-direction: column;
    gap: calc(var(--accentColor) / 2);
    background-color: #fff;
    box-shadow: 1px 2px 5px rgba(20, 20, 20, 0.1);
    border-radius: 5px;
  }

  .record {
    padding: 0.8rem var(--appSpacing);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
</style>
