<script>
  import {
    AccountsButton,
    AddButton,
    AnalyticsButton,
    HomeButton,
    RecordsButton,
  } from "../buttons/icon-button/";
  import { isRecordFormOpen } from "../../store/appstate";
</script>

<nav id="mobile-navbar">
  <HomeButton />
  <RecordsButton />
  <AddButton on:click={() => ($isRecordFormOpen = true)} />
  <AnalyticsButton />
  <AccountsButton />
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
