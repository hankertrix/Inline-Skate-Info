<!-- The page to display the terms used in inline skating -->
<script lang="ts">

  import { makeUrlFriendlyString } from "$lib/utils";

  // Import the terminology JSON from the data folder
  import terminologyJson from "$lib/data/terminology/terminology.json";

  // The title of the page
  const title = "Terminology";
  
</script>

<!-- The styles for the terminology page -->
<style>

  .terminology-page {
    margin: 10px var(--page-left-right-margin);
  }

  .category-wrapper {
    margin-bottom: 5em;
  }

  .page-title {
    font-family: Oleo Script;
  }

  @media only screen and (max-width: 700px) {

    .terminology-page {
      margin: 0 var(--page-left-right-margin);
    }
  }
  
</style>

<!-- The headers for the terminology page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
</svelte:head>

<!-- The HTML for the terminology page -->
<main class="terminology-page">

  <h1 class="page-title text" id={makeUrlFriendlyString(title)}>{title}</h1>

  <!-- Iterates over all the categories inside the JSON file -->
  {#each Object.entries(terminologyJson) as [categoryName, categoryItems]}

    <section class="category-wrapper">

      <!-- Display the category title -->
      <h3 class="category-title text" id={makeUrlFriendlyString(categoryName)}>{categoryName}</h3>

      <!-- Iterates over all the terms and definitions in the category -->
      {#each Object.entries(categoryItems) as [term, definition]}

        <!-- Display the term and its definition -->
        <p class="text">
          <strong>{term}: </strong>
          {@html definition}
        </p>
      {/each}
    </section>
  {/each}
  
</main>