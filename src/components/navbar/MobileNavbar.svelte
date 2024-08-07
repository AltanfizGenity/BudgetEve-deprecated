<script>
  import "../../styles/navbar.css";
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
    <AddButton
      on:click={() => {
        $isRecordFormOpen = true;
        console.log($isRecordFormOpen);
      }}
    />
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
