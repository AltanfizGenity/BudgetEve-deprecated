<script>
  import ManageAccount from "../components/edit/ManageAccount.svelte";
  import AccountForm from "../components/forms/AccountForm.svelte";
  import { isAccountFormOpen, isManageAccountOpen } from "../store/appstate";
  import { budgetAccounts } from "../store/appstore";
</script>

<section id="accounts" class="app-section">
  <h1>Accounts</h1>
  <div class="account-list">
    {#each $budgetAccounts as account}
      <div class="account">
        <div class="name">{account.name}</div>
        <div class="amount">{account.amount}</div>
      </div>
    {/each}
  </div>
  <div class="actions">
    <button
      class="btn text-btn primary"
      on:click={() => ($isAccountFormOpen = true)}>new account</button
    >
    <button
      class="btn text-btn primary-outline"
      on:click={() => ($isManageAccountOpen = true)}>manage account</button
    >
  </div>
</section>

{#if $isAccountFormOpen}
  <AccountForm />
{/if}

{#if $isManageAccountOpen}
  <ManageAccount />
{/if}
