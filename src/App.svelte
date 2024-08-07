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
  import { currentPage } from "./store/appstate";
</script>

<Navbar />
<!-- this code need refactored in future due using hard-coded if statement for routing -->
<!-- use Svelte routing or external libraries for routing instead -->
<main>
  {#if $currentPage === "home"}
    <Home />
  {:else if $currentPage === "records"}
    <Records />
  {:else if $currentPage === "statistics"}
    <Statistics />
  {:else if $currentPage === "accounts"}
    <Accounts />
  {/if}
</main>
<RecordForm />
<MobileNavbar />
