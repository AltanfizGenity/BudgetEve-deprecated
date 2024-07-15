<script>
  import AccountForm from "../components/forms/AccountForm.svelte";
  import { budgetAccounts } from "../store/appstore";
</script>

<section id="accounts">
  <h1>accounts</h1>
  <div class="account-list">
    {#each $budgetAccounts as account}
      <div class="account">
        <div class="name">{account.name}</div>
        <div class="amount">{account.amount}</div>
      </div>
    {/each}
  </div>
  <div class="actions">
    <button>new account</button>
    <button>manage account</button>
  </div>
</section>

<AccountForm />
