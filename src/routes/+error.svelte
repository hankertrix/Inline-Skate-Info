<!-- The error page to display -->
<script lang="ts">

  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';

  // The variable to store if the error is a 404 error
  const is404 = $page.status === 404;

  // If the environment is the browser and the error code is 404, redirect the user to the main page
  if (browser && is404) goto('/');
</script>

<!-- The headers for the page -->
<svelte:head>
  <title>{$page.status}{$page.error ? ` ${$page.error.message}` : ''}</title>
</svelte:head>

<!-- The HTML for the page -->
<div class="error-page">
  <h1 class="text">{$page.status}</h1>
  <div class="text">{$page.error ? $page.error.message : ''}</div>
  <p class="text">
    {is404
      ? 'Redirecting you to the landing page...'
      : 'Please tell the developer about this error.'}
  </p>
</div>

<!-- The styles for the error page -->
<style>
  .error-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: var(--page-margin);
  }

  .error-page > div:empty {
    display: none;
  }
</style>
