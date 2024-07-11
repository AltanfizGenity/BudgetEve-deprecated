<script>
  import { generateID } from "../../utils/forms";
  import { records } from "../../store/appstore";
  import { isRecordFormOpen } from "../../store/appstate";

  function submit(event) {
    const formData = new FormData(event.target);
    const data = {};

    // extracting data
    for (let entry of formData) {
      let [key, value] = entry;
      data[key] = value;
    }

    data.id = generateID();

    $records = [...$records, data]; // deploy to store
    $isRecordFormOpen = false;
  }
</script>

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
      <option value="cash">cash</option>
      <option value="bank">bank</option>
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
    <textarea name="note" id="note"></textarea>
  </div>
  <button type="submit">add record</button>
</form>
