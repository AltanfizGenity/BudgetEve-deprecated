<script>
  import { isAccountFormOpen } from "../../store/appstate";
  import { budgetAccounts } from "../../store/appstore";
  import { generateID } from "../../utils/forms";
  import Overlay from "../core/Overlay.svelte";

  function submit(event) {
    const formData = new FormData(event.target);
    const data = {};

    // extracting data
    for (let entry of formData) {
      let [key, value] = entry;
      data[key] = value;
    }

    data.id = generateID(); // using current user data or default data length (length approach) instead
    data.amount = Number(data.amount) || 0;
    // @ts-ignore
    $budgetAccounts = [...$budgetAccounts, data]; // use jsdoc to solve this warning
    $isAccountFormOpen = false;
  }
</script>

<Overlay
  headerText="Add account"
  useHeader
  isOpen={$isAccountFormOpen}
  on:close={() => ($isAccountFormOpen = false)}
>
  <form on:submit|preventDefault={submit} class="form">
    <!-- Type -->
    <div class="input-group">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="account name"
      />
    </div>
    <!-- Type -->
    <div class="input-group">
      <label for="type">Type</label>
      <select name="type" id="type" required>
        <option value="cash">cash</option>
        <option value="virtual-account">virtual account</option>
        <option value="debit-card">debit card</option>
        <option value="credit card">credit card</option>
        <option value="investment">investment</option>
      </select>
    </div>
    <!-- Amount -->
    <div class="input-group">
      <label for="amount">Amount</label>
      <input type="number" id="amount" name="amount" placeholder="0" />
    </div>
    <!-- Note -->
    <div class="input-group">
      <label for="note">Note</label>
      <textarea name="note" id="note"></textarea>
    </div>
    <button type="submit" class="submit-btn">add account</button>
  </form>
</Overlay>
