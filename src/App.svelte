<script>
  // pages
  import Home from "./pages/Home.svelte";
  import Accounts from "./pages/Accounts.svelte";
  import Records from "./pages/Records.svelte";
  import Statistics from "./pages/Statistics.svelte";

  // component
  import MobileNavbar from "./components/navbar/MobileNavbar.svelte";
  import Navbar from "./components/navbar/Navbar.svelte";
  import RecordForm from "./components/forms/RecordForm.svelte";

  // store
  import { isRecordFormOpen } from "./store/appstate";
</script>

<Navbar />
<main>
  <!-- <Home /> -->
  <Records />
</main>
{#if $isRecordFormOpen}
  <RecordForm />
{/if}
<MobileNavbar />

<style>
  main {
    margin-top: calc(48px);
  }
</style>
