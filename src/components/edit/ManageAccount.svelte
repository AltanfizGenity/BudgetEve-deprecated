<script>
  import { budgetAccounts } from "../../store/appstore";
  import { isManageAccountOpen } from "../../store/appstate";
  import Overlay from "../core/Overlay.svelte";
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
          <button class="btn text-btn danger-text-btn">remove</button>
        </div>
      </div>
    {/each}
  </div>
</Overlay>
