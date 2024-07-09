<script>
  import MobileNavbar from "./components/navbar/MobileNavbar.svelte";
  import Navbar from "./components/navbar/Navbar.svelte";
  import Home from "./pages/Home.svelte";
</script>

<Navbar />
<main>
  <Home />
</main>
<MobileNavbar />

<style>
  main {
    margin-top: calc(48px);
  }
</style>
