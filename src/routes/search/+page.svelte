<!-- The search page -->
<script lang="ts">

  import type { PagefindResult } from "$lib/types";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import SearchResult from "$lib/components/pages/search/SearchResult.svelte";

  // Export the data variable
  export let data: {
    searchTerm: string,
    results: PagefindResult[]
  };

  // Gets the search term and the results from the data
  $: ({ searchTerm, results } = data);

  // Gets the number of results on the page
  $: numberOfResults = results.length;

</script>

<!-- The styles for the search page -->
<style>

  /* Styles for the page when there are no results */
  .no-results {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
  }

  /* Styles for the page when there are results */
  .results-wrapper {
    margin: 50px var(--page-left-right-margin);
  }

  :global(.light) .number-of-results {
    --colour: #70757A;
    --opacity: 1;
  }
  
  :global(.dark) .number-of-results {
    --colour: white;
    --opacity: calc(var(--text-opacity) - 0.2);
  }

  .number-of-results {
    font-size: 14px;
    color: var(--colour);
    opacity: var(--opacity);
    margin-bottom: 15px;
  }

  .search-results {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: left;
    gap: 20px;
  }

  @media only screen and (max-width: 700px) {

    .results-wrapper {
      margin: 15px var(--page-left-right-margin);
    }
  }
  
</style>

<!-- The HTML for the search page -->
<!-- If there are no results -->
{#if numberOfResults < 1}

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

<!-- If there are results -->
{:else}

  <div class="results-wrapper">
    
    <!-- Show how many results were found -->
    <div class="number-of-results">{numberOfResults} {numberOfResults > 1 ? "results" : "result"} found for '{searchTerm}'.</div>

    <!-- The wrapper for the search results -->
    <div class="search-results">
      
      <!-- Display the results -->
      {#each results as result}
        <SearchResult {result} />
      {/each}
      
    </div>

  </div>
  
{/if}