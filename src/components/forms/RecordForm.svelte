<script>
  import { generateID } from "../../utils/forms";
  import { budgetAccounts } from "../../store/appstore";
  import { isRecordFormOpen } from "../../store/appstate";
  import { syncAfterNewRecord } from "../../utils/data";
  import Overlay from "../core/Overlay.svelte";

  function submit(event) {
    const formData = new FormData(event.target);
    const data = {};

    // extracting data
    for (let entry of formData) {
      let [key, value] = entry;
      data[key] = value;
    }

    data.id = generateID();
    syncAfterNewRecord(data);
    $isRecordFormOpen = false;
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
      <select name="type" id="type" required>
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

<style>
  form {
    position: relative;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--appSpacing);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: calc(var(--appSpacing) / 2);
  }

  label {
    text-transform: capitalize;
  }

  input,
  textarea,
  select {
    padding: 1rem;
    border-radius: 5px; /* consider using theme */
    border: 1px solid var(--secondaryColor);
    background-color: var(--foregroundColor);
  }

  textarea {
    resize: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    appearance: textfield;
  }

  .submit-btn {
    padding: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: var(--backgroundColor);
    background-color: var(--primaryColor);
    margin-top: auto;
    font-weight: bold;
  }
</style>
