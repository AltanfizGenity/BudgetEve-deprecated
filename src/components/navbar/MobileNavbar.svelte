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
  <div class="hover-btn-wrapper">
    <AddButton on:click={() => ($isRecordFormOpen = true)} />
  </div>
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
    height: calc(48px + 0.5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--appSpacing);
    z-index: 100;
    background-color: #fff;
  }

  .hover-btn-wrapper {
    position: relative;
    top: -25%;
  }
</style>
