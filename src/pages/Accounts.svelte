<script>
  import ManageAccount from "../components/edit/ManageAccount.svelte";
  import AccountForm from "../components/forms/AccountForm.svelte";
  import { isAccountFormOpen, isManageAccountOpen } from "../store/appstate";
  import { budgetAccounts } from "../store/appstore";
</script>

<section id="accounts">
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

<style>
  #accounts {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--appSpacing);
  }

  .account-list {
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }

  .account {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 1rem;
  }

  .account-list .account:not(:nth-child(1)) {
    border-top: 1px solid #ddd;
  }
</style>
