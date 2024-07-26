<script>
  import AccountForm from "../components/forms/AccountForm.svelte";
  import { isAccountFormOpen } from "../store/appstate";
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
      class="btn text-btn primary-btn"
      on:click={() => ($isAccountFormOpen = true)}>new account</button
    >
    <button class="btn text-btn primary-text-btn">manage account</button>
  </div>
</section>

{#if $isAccountFormOpen}
  <AccountForm />
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
    gap: calc(var(--appSpacing) / 2);
  }

  .account {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #fff;
    border-radius: 10px;
  }
</style>
