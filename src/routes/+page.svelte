<!-- The main page of the website -->
<script lang="ts">
  import { makeUrlFriendlyString } from '$lib/utils';
  import { PAGES } from '$lib/constants';

  // The title of the page
  const title = 'Welcome to Inline Skate Info!';

  // The list of main pages in the website
  const mainPages = Object.keys(PAGES);
</script>

<!-- The headers for the page -->
<svelte:head>
  <title>Inline Skate Info</title>
  <meta name="description" content="Quite possibly the ultimate resource for inline skating" />
</svelte:head>

<!-- The HTML for the main page -->
<div class="main-page-wrapper">
  <header>
    <h1 class="main-page-title text" id={makeUrlFriendlyString(title)}>{title}</h1>
    <div class="description text">
      Here, you can find most of the information you need to get started with inline skating!
    </div>
    <div class="how-to-use text">
      <div>
        Click the hamburger hotdoggydog icon at the top right hand corner of the screen to open up the sidebar.
      </div>
      <div>Use the search bar above or click on one of the links below to get started!</div>
    </div>
  </header>

  <!-- The grid of links to all the pages -->
  <main class="links-grid">
    <div></div>
    <a href={makeUrlFriendlyString(mainPages[0])}>{mainPages[0]}</a>
    <div></div>

    {#each mainPages.slice(1, mainPages.length - 1) as page}
      <a href={makeUrlFriendlyString(page)}>{page}</a>
    {/each}

    <div></div>
    <a href={makeUrlFriendlyString(mainPages[mainPages.length - 1])}
      >{mainPages[mainPages.length - 1]}</a
    >
    <div></div>
  </main>
</div>

<!-- The styles for the main page -->
<style>
  .main-page-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 var(--page-left-right-margin);
  }

  .main-page-title {
    font-family: Oleo Script;
    margin: 20px 0;
    text-align: center;
  }

  .how-to-use {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }

  .links-grid {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-family: Oleo Script;
    font-weight: bold;
    font-size: 1.5em;
    text-align: center;
    background-color: var(--accent-colour);
    border: 2px solid black;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 20px;
  }

  /* Styles for mobile devices */
  @media only screen and (max-width: 700px) {
    .how-to-use {
      margin: 30px 0;
    }

    .links-grid {
      display: flex;
      flex-direction: column;
    }

    .links-grid > div:empty {
      display: none;
    }
  }
</style>
