<script>
  import MobileNavbar from "./components/navbar/MobileNavbar.svelte";
  import Navbar from "./components/navbar/Navbar.svelte";
  import Home from "./pages/Home.svelte";
  import RecordForm from "./components/forms/RecordForm.svelte";
</script>

<Navbar />
<main>
  <RecordForm />
</main>
<MobileNavbar />

<style>
  main {
    margin-top: calc(48px);
  }
</style>
