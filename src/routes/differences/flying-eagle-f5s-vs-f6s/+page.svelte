<!-- The page to display the differences between the Flying Eagle F5S and F6S -->
<script lang="ts">
  import { makeUrlFriendlyString } from '$lib/utils';
  import flyingEagleDiffJson from '$lib/data/differences/f5s-vs-f6s.json';

  // The title of the page
  const title = 'Differences Between The Flying Eagle F5S & F6S';

  // The heading for the similarites
  const similaritiesHeading = 'Similarities';

  // The heading for the differences
  const differencesHeading = 'Differences';

  // The heading for the references
  const referencesHeading = 'References';
</script>

<!-- The headers for the page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
  <meta
    name="description"
    content="Learn about the differences between the Flying Eagle F5S & F6S"
  />
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
      {#each flyingEagleDiffJson.similarities as similarity}
        <li>{similarity}</li>
      {/each}
    </ul>
  </section>

  <section class="differences">
    <header>
      <h2 class="text" id={makeUrlFriendlyString(differencesHeading)}>{differencesHeading}</h2>
    </header>

    <!-- Display the differences in an unordered list -->
    <ul class="text">
      <!-- Iterates over all of the differences -->
      {#each flyingEagleDiffJson.differences as difference}
        <li>{difference}</li>
      {/each}
    </ul>
  </section>

  <section class="references">
    <header>
      <h2 class="text" id={makeUrlFriendlyString(referencesHeading)}>{referencesHeading}</h2>
    </header>

    <section class="reference-list">
      <!-- Iterates over all of the references -->
      {#each flyingEagleDiffJson.references as reference}
        <a href={reference} target="_blank">{reference}</a>
      {/each}
    </section>
  </section>
</main>

<!-- The styles for the page -->
<style>
  main {
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
  }

  .similarities,
  .differences {
    margin: 5em 0;
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
