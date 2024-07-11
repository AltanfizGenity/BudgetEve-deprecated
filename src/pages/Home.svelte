<script>
  import { records } from "../store/appstore";
</script>

<main id="home">
  <h1>Hello, User!</h1>
  <div class="accounts-panel">accounts</div>
  <div class="records-panel">
    <h2>records</h2>
    {#each $records as record}
      record #{record.id}
    {/each}
  </div>
  <div class="analytics-panel">analytics</div>
</main>
