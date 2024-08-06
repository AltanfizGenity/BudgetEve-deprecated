<script>
  import { budgetAccounts, records } from "../../store/appstore";
  import { isManageAccountOpen } from "../../store/appstate";
  import Overlay from "../core/Overlay.svelte";

  function removeAccount(selectedAccount) {
    $budgetAccounts = $budgetAccounts.filter(
      (account) => account.id !== selectedAccount.id,
    );

    $records = $records.filter(
      (record) => record.account !== selectedAccount.name,
    );
  }
</script>

<Overlay
  headerText="Manage accounts"
  useHeader
  isOpen={$isManageAccountOpen}
  on:close={() => ($isManageAccountOpen = false)}
>
  <div class="account-list">
    {#each $budgetAccounts as account}
      <div class="account">
        <div class="info">
          <div class="name">{account.name}</div>
        </div>
        <div class="option">
          {#if $budgetAccounts.length > 1}
            <button
              class="text-btn danger-outline"
              on:click={() => removeAccount(account)}>remove</button
            >
          {/if}
        </div>
      </div>
    {/each}
  </div>
</Overlay>

<style>
  .account-list {
    display: flex;
    flex-direction: column;
    gap: calc(var(--appSpacing) / 2);
  }

  .account {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
