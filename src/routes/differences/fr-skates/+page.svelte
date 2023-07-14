<!-- The page to display the differences between the various FR Skates -->
<script lang="ts">

  import { makeUrlFriendlyString } from "$lib/utils";
  import frDiffJson from "$lib/data/differences/fr-diff.json";

  // The title of the page
  const title = "Differences Between The Various FR Skates";

  // The heading for the similarites
  const similaritiesHeading = "Similarities";
  
  // The heading for the differences
  const differencesHeading = "Differences";

  // The heading for the references
  const referencesHeading = "References";
  
</script>

<!-- The styles for the page -->
<style>

  main {
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
  }

  .similarities {
    margin: 3em 0;
  }

  .differences {
    margin: 8em 0;
  }

  .skate {
    margin-bottom: 5em;
  }

  .references {
    margin-bottom: 5em;
  }

  .reference-list {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  
</style>

<!-- The headers for the page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
</svelte:head>

<!-- The HTML for the page -->
<main>

  <header>
    <h1 class="text" id={makeUrlFriendlyString(title)}>{title}</h1>
  </header>

  <section class="similarities">

    <header>
      <h2 class="text" id={makeUrlFriendlyString(similaritiesHeading)}>{similaritiesHeading}</h2>
    </header>

    <!-- Displays the similarities in an unordered list -->
    <ul class="text">
      
      <!-- Iterates over the similarities -->
      {#each frDiffJson.similarities as similarity}
        <li>{similarity}</li>
      {/each}
      
    </ul>

  </section>

  <section class="differences">

    <header>
      <h2 class="text" id={makeUrlFriendlyString(differencesHeading)}>{differencesHeading}</h2>
    </header>

    <!-- Iterates over all of the differences -->
    {#each Object.entries(frDiffJson.differences) as [skate, differences]}

      <section class="skate">

        <header>
          <h3 class="text" id={makeUrlFriendlyString(skate)}>{skate}</h3>
        </header>

        <!-- Display the differences in an unordered list -->
        <ul class="text">

          <!-- Iterates over all the differences -->
          {#each differences as difference}
            <li>{difference}</li>
          {/each}

        </ul>
        
      </section>

    {/each}
    
  </section>

  <section class="references">

    <header>
      <h2 class="text" id={makeUrlFriendlyString(referencesHeading)}>{referencesHeading}</h2>
    </header>

    <section class="reference-list">

      <!-- Iterates over all of the references -->
      {#each frDiffJson.references as reference}
        <a href={reference} target="_blank">{reference}</a>
      {/each}
      
    </section>
    
  </section>
  
</main>