<!-- The page to display all of the resources -->
<script lang="ts">

  import { makeUrlFriendlyString } from "$lib/utils";
  import { PAGES } from "$lib/constants";

  // The page title
  const title = "Resources";

  // The url friendly title
  const urlFriendlyTitle = makeUrlFriendlyString(title);

  // The pages containing resources
  const pagesWithResources = Object.keys(PAGES["Resources"]);
  
</script>

<!-- The styles for the resources page -->
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
  }

  h1 {
    font-family: Oleo Script;
    font-size: 3em;
  }

  .links-grid {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: Oleo Script;
    font-weight: bold;
    font-size: 1.7em;
    text-align: center;
    background-color: var(--accent-colour);
    border: 2px solid black;
    border-radius: 20px;
    padding: 20px;
    margin: 25px 0;
  }
  
  /* Styles for mobile devices */
  @media only screen and (max-width: 700px) {

    .links-grid {
      display: flex;
      flex-direction: column;
    }
    
  }
  
</style>

<!-- The headers for the resources page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
</svelte:head>

<!-- The HTML for the resources page -->
<div class="page-wrapper">

  <header>
    
    <h1 class="text" id={urlFriendlyTitle}>{title}</h1>
    <div class="text">Click on one of the links below to view the respective resource!</div>
    
  </header>

  <main class="links-grid">

    <!-- Iterates over all of the pages with resources -->
    {#each pagesWithResources as page}

      <a href={`${urlFriendlyTitle}/${makeUrlFriendlyString(page)}`} target="_blank">{page}</a>
      
    {/each}
    
  </main>
  
</div>