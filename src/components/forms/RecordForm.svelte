<script>
  import { generateID, getDate } from "../../utils/forms";
  import { budgetAccounts, categories } from "../../store/appstore";
  import { isRecordFormOpen } from "../../store/appstate";
  import { syncAfterNewRecord } from "../../utils/data";
  import Overlay from "../core/Overlay.svelte";

  let type = "income";

  function submit(event) {
    const formData = new FormData(event.target);
    const data = {};

    // extracting data
    for (let entry of formData) {
      let [key, value] = entry;
      data[key] = value;
    }

    data.id = generateID();
    data.amount = Number(data.amount);
    data.date = data.date ? getDate(data.date) : getDate(Date.now());
    syncAfterNewRecord(data);
    $isRecordFormOpen = false;
  }

  function changeType(event) {
    type = event.target.value;
  }
</script>

<Overlay
  headerText="New record"
  isOpen={$isRecordFormOpen}
  useHeader
  on:close={() => ($isRecordFormOpen = false)}
>
  <form on:submit|preventDefault={submit}>
    <!-- Type -->
    <div class="input-group">
      <label for="type">type</label>
      <select
        name="type"
        id="type"
        required
        on:change={changeType}
        value={type}
      >
        <option value="income">income</option>
        <option value="expense">expense</option>
      </select>
    </div>
    <!-- Target account -->
    <div class="input-group">
      <label for="account">account</label>
      <select name="account" id="account" required>
        {#each $budgetAccounts as account}
          <option value={account.name}>{account.name}</option>
        {/each}
      </select>
    </div>
    <!-- Category -->
    <div class="input-group">
      <label for="category">category</label>
      <select name="category" id="category" required>
        <!-- DRY Code, consider refactor -->
        {#if type === "income"}
          {#each $categories.income as category}
            <option value={category.categoryName}
              >{category.categoryName}</option
            >
          {/each}
        {:else if type === "expense"}
          {#each $categories.expenses as category}
            <option value={category.categoryName}
              >{category.categoryName}</option
            >
          {/each}
        {/if}
      </select>
    </div>
    <!-- Amount -->
    <div class="input-group">
      <label for="amount">amount</label>
      <input type="number" id="amount" name="amount" placeholder="0" required />
    </div>
    <!-- Date -->
    <div class="input-group">
      <label for="date">date</label>
      <input type="date" id="date" name="date" />
    </div>
    <!-- Note -->
    <div class="input-group">
      <label for="note">note</label>
      <textarea name="note" id="note" rows="10"></textarea>
    </div>
    <button type="submit" class="submit-btn">Add record</button>
  </form>
</Overlay>
