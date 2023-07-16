<!-- The landing page for all of the differences -->
<script lang="ts">

  import { makeUrlFriendlyString } from "$lib/utils";
  import { PAGES } from "$lib/constants";

  // The page title
  const title = "Differences";

  // The url friendly title
  const urlFriendlyTitle = makeUrlFriendlyString(title);

  // The pages containing the differences
  const pagesWithDifferences = Object.keys(PAGES[title]);
  
</script>

<!-- The styles for the differences page -->
<style>

  .page-wrapper {
    margin: var(--page-margin);
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-family: Oleo Script;
    font-size: 3em;
  }

  .links-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 2em;
    font-family: Oleo Script;
    font-weight: bold;
    font-size: 1.7em;
    text-align: center;
    background-color: var(--accent-colour);
    border: 2px solid black;
    border-radius: 20px;
    padding: 25px 1.5em;
    margin: 25px 0;
  }
  
  /* Styles for mobile devices */
  @media only screen and (max-width: 700px) {

    .links-grid {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
    }
    
  }
  
</style>

<!-- The headers for the differences page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
  <meta name="description" content="The landing page for all of the pages talking about differences">
</svelte:head>

<!-- The HTML for the differences page -->
<div class="page-wrapper">

  <header>
    
    <h1 class="text" id={urlFriendlyTitle}>{title}</h1>
    <div class="text">Click on one of the links below to view the page talking about the respective differences!</div>
    
  </header>

  <main class="links-grid">

    <!-- Iterates over all of the pages with differences -->
    {#each pagesWithDifferences as page}

      <a href={`${urlFriendlyTitle}/${makeUrlFriendlyString(page)}`}>{page}</a>
      
    {/each}
    
  </main>
  
</div>