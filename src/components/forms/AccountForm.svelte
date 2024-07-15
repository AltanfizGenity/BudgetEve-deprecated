<script>
  import { isAccountFormOpen } from "../../store/appstate";
  import { budgetAccounts } from "../../store/appstore";
  import { generateID } from "../../utils/forms";

  function submit(event) {
    const formData = new FormData(event.target);
    const data = {};

    // extracting data
    for (let entry of formData) {
      let [key, value] = entry;
      data[key] = value;
    }

    data.id = generateID(); // using current user data or default data length (length approach) instead
    data.amount = Number(data.amount);
    // @ts-ignore
    $budgetAccounts = [...$budgetAccounts, data]; // use jsdoc to solve this warning
    $isAccountFormOpen = false;
  }
</script>

<form on:submit|preventDefault={submit}>
  <!-- Type -->
  <div class="input-group">
    <label for="name">name</label>
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
    <label for="account">account</label>
    <select name="account" id="account" required>
      <option value="cash">cash</option>
      <option value="virtual-account">virtual account</option>
      <option value="debit-card">debit card</option>
      <option value="credit card">credit card</option>
      <option value="investment">investment</option>
    </select>
  </div>
  <!-- Amount -->
  <div class="input-group">
    <label for="amount">amount</label>
    <input
      type="number"
      id="amount"
      name="amount"
      placeholder="0"
      value="0"
      required
    />
  </div>
  <!-- Note -->
  <div class="input-group">
    <label for="note">note</label>
    <textarea name="note" id="note"></textarea>
  </div>
  <button type="submit">add account</button>
</form>
