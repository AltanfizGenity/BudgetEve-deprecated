<script>
  import Signup from "../buttons/text-buttons/Signup.svelte";
</script>

<nav id="navbar">
  <div class="logo">BudgetEve</div>
  <Signup />
</nav>

<style>
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--navbarHeight);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--appSpacing);
    z-index: 100;
  }
</style>
