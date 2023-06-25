<!-- The search page -->
<script lang="ts">

  import type { PagefindResult } from "$lib/types";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  // Export the data variable
  export let data: {
    searchTerm: string,
    results: PagefindResult[]
  };

  // Gets the search term and the results from the data
  const { searchTerm, results } = data;

  // The regular expression to convert the URL given by pagefind to the actual website link
  const convertUrlRegex = /.*pages/;

  // Function to convert the URL given by pagefind to the actual website link
  function convertPagefindUrl(url: string) {
    return url.replace(convertUrlRegex, "");
  }

</script>

<!-- The styles for the search page -->
<style>

  .no-results {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  
</style>

<!-- The HTML for the search page -->
<!-- If there are no results -->
{#if results.length < 1}

  <!-- Show that there are no results found and ask the user to try a different search term -->
  <div class="no-results">
    <p class="text">
      Sorry, there are no results found for '{searchTerm}'.
      <br>
      Perhaps try searching again with something else?
    </p>
    <a href="/" title="Return to the home page">
      Return to the home page.
    </a>
  </div>
  
{:else}

  <!-- Otherwise, display the results -->
  {#each results as result}
  {/each}
  
{/if}