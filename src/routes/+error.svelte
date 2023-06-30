<!-- The error page to display -->
<script lang="ts">

  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";

  // If the environment is the browser, redirect the user to the main page
  if (browser) goto("/");
  
</script>

<!-- The styles for the error page -->
<style>

  .error-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .error-page > div:empty {
    display: none;
  }
  
</style>

<!-- The HTML for the page -->
<div class="error-page">
  <h1 class="text">{$page.status}</h1>
  <div class="text">{$page.error ? $page.error.message : ""}</div>
  <p class="text">Redirecting you to the landing page...</p>
</div>