<script>
  import { beforeUpdate, onMount } from "svelte";
  import { records, totalBalance } from "../store/appstore";
  import { formatDateID, getDateOfFormattedDateID } from "../utils/date";
  import Panel from "../components/core/Panel.svelte";

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
  <div class="type-panels">
    <Panel
      title="income"
      name="income"
      type="primary"
      amount={$totalBalance.income}
    />
    <Panel title="expense" name="expense" amount={$totalBalance.expense} />
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

  .type-panels {
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    gap: 2rem;
  }

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
