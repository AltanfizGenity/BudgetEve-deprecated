<script>
  import { beforeUpdate, onMount } from "svelte";
  import { records, totalBalance } from "../store/appstore";
  import { formatDateID, getDateOfFormattedDateID } from "../utils/date";
  import Panel from "../components/core/Panel.svelte";
  import Record from "../components/core/Record.svelte";
  import { tweened } from "svelte/motion";

  let groupedRecords = new Map();
  let totalIncome = tweened(0, {
    duration: 100,
  });
  let totalExpense = tweened(0, {
    duration: 100,
  });

  onMount(() => {
    groupRecordsByDate();
    totalIncome.set($totalBalance.income);
    totalExpense.set($totalBalance.expense);
  });

  beforeUpdate(() => {
    groupRecordsByDate();
    totalIncome.set($totalBalance.income);
    totalExpense.set($totalBalance.expense);
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

<section id="records" class="app-section">
  <h1>Records</h1>
  <div class="type-panels">
    <Panel
      title="income"
      name="income"
      type="primary"
      amount={Math.round($totalIncome)}
    />
    <Panel title="expense" name="expense" amount={Math.round($totalExpense)} />
  </div>
  <div class="record-panel">
    {#each groupedRecords as group}
      <div class="record-group">
        <div class="date">{getDateOfFormattedDateID(group[0])}</div>
        <div class="record-list">
          {#each group[1] as record}
            <Record {record} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
</style>
