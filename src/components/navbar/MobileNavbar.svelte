<script>
    import {
  AccountsButton,
  AddButton,
  AnalyticsButton,
  HomeButton,
  RecordsButton,
} from '../buttons/icon-button/';


</script>
<nav id="mobile-navbar">
    <HomeButton/>
    <RecordsButton/>
    <AddButton/>
    <AnalyticsButton/>
    <AccountsButton/>
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
    }
</style>