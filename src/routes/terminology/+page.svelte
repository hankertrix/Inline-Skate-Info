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
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
  }

  .category {
    margin: 3em 0;
  }

  .category+ .category {
    margin: 10em 0;
  }

  .term {
    margin-bottom: 5em;
  }
  
</style>

<!-- The headers for the terminology page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
  <meta name="description" content="The list of definitions for the commonly used terms in inline skating">
</svelte:head>

<!-- The HTML for the terminology page -->
<main class="terminology-page">

  <h1 class="text" id={makeUrlFriendlyString(title)}>{title}</h1>

  <!-- Iterates over all the categories inside the JSON file -->
  {#each Object.entries(terminologyJson) as [categoryName, categoryItems]}

    <section class="category">

      <!-- Display the category title -->
      <h2 class="category-title text" id={makeUrlFriendlyString(categoryName)}>{categoryName}</h2>

      <!-- Iterates over all the terms and definitions in the category -->
      {#each Object.entries(categoryItems) as [term, definition]}

        <section class="term">
          
          <!-- Display the term and its definition -->
          <h3 class="text" id={makeUrlFriendlyString(term)}>{term}</h3>
          <p class="text">{@html definition}</p>
          
        </section>
        
      {/each}
      
    </section>
    
  {/each}
  
</main>