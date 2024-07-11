<script>
  import MobileNavbar from "./components/navbar/MobileNavbar.svelte";
  import Navbar from "./components/navbar/Navbar.svelte";
  import Home from "./pages/Home.svelte";
  import RecordForm from "./components/forms/RecordForm.svelte";
  import { isRecordFormOpen } from "./store/appstate";
</script>

<Navbar />
<main></main>
{#if $isRecordFormOpen}
  <RecordForm />
{/if}
<MobileNavbar />

<style>
  main {
    margin-top: calc(48px);
  }
</style>
