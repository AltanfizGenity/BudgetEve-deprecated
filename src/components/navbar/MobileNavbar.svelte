<script>
  import {
    AccountsButton,
    AddButton,
    AnalyticsButton,
    HomeButton,
    RecordsButton,
  } from "../buttons/icon-button/";
  import { isRecordFormOpen, currentPage } from "../../store/appstate";
</script>

<nav id="mobile-navbar">
  <!-- use class  -->
  <HomeButton
    on:click={() => ($currentPage = "home")}
    isActive={$currentPage === "home"}
  />
  <RecordsButton
    on:click={() => ($currentPage = "records")}
    isActive={$currentPage === "records"}
  />
  <AddButton on:click={() => ($isRecordFormOpen = true)} />
  <AnalyticsButton
    on:click={() => ($currentPage = "statistics")}
    isActive={$currentPage === "statistics"}
  />
  <AccountsButton
    on:click={() => ($currentPage = "accounts")}
    isActive={$currentPage === "accounts"}
  />
</nav>

<style>
  #mobile-navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--appSpacing);
    z-index: 100;
  }
</style>
