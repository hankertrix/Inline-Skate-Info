<!-- The search page -->
<script lang="ts">

  import type { PagefindResult } from '$lib/types';
  import SearchResult from '$lib/components/pages/search/SearchResult.svelte';

  // Export the data variable
  export let data: {
    searchTerm: string;
    results: PagefindResult[];
  };

  // Gets the search term and the results from the data
  $: ({ searchTerm, results } = data);

  // Gets the number of results on the page
  $: numberOfResults = results.length;

</script>

<!-- The headers for the page -->
<svelte:head>
  <title>{searchTerm} - Inline Skate Info</title>
</svelte:head>

<!-- The HTML for the search page -->
<!-- If there are no results -->
{#if numberOfResults < 1}

  <!-- Show that there are no results found and ask the user to try a different search term -->
  <main class="no-results">
    <p class="text">
      Sorry, there are no results found for '{searchTerm}'.
      <br />
      Perhaps try searching again with something else?
    </p>
    <a href="/" title="Return to the home page"> Return to the home page. </a>
  </main>

  <!-- If there are results -->
{:else}

  <main class="results-wrapper">

    <!-- Show how many results were found -->
    <section class="number-of-results">
      {numberOfResults}
      {numberOfResults > 1 ? 'results' : 'result'} found for '{searchTerm}'.
    </section>

    <!-- The wrapper for the search results -->
    <section class="search-results">

      <!-- Display the results -->
      {#each results as result}
        <SearchResult {result} />
      {/each}

    </section>
  </main>

{/if}

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
    margin: var(--page-margin);
  }

  /* Styles for the page when there are results */
  .results-wrapper {
    margin: 50px var(--page-left-right-margin) 5em;
  }

  :global(.light) .number-of-results {
    --colour: #70757a;
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
    margin-bottom: 1.2em;
  }

  .search-results {
    display: flex;
    flex-direction: column;
    gap: 3em;
  }

  /* Styles for mobile devices */
  @media only screen and (max-width: 799px) {
    .results-wrapper {
      margin: 25px var(--page-left-right-margin) 5em;
    }

    .number-of-results {
      margin-bottom: 1em;
    }
  }
</style>
