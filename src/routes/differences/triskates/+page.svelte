<!-- The page to display the differences between regular 4-wheeled skates and triskates -->
<script lang="ts">

  import { makeUrlFriendlyString } from "$lib/utils";
  import triskateDiffJson from "$lib/data/differences/triskate-diff.json";
  import VideoCollapsible from "$lib/components/general/VideoCollapsible.svelte";

  // The title for the page
  const title = "Comparing Triskates With Regular 4-Wheeled Skates";

  // The heading for the characteristics
  const characteristicsTitle = "Characteristics";
  
  // The heading for the advantages
  const advantagesTitle = "Advantages";
  
  // The heading for the disadvantages
  const disadvantagesTitle = "Disadvantages";
  
  // The heading for the articles
  const articlesTitle = "Articles";
  
  // The heading for the videos
  const videosTitle = "Videos";
  
</script>

<!-- The styles for the page -->
<style>

  main {
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
  }

  .characteristics {
    margin: 3em 0;
  }

  .advantages, .disadvantages {
    margin: 5em 0;
  }

  .articles {
    margin-top: 8em;
    margin-bottom: 5em;
  }

  .article-links {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .videos {
    margin: 5em 0;
  }
  
</style>

<!-- The headers for the page -->
<svelte:head>
  <title>{title}</title>
  <meta name="description" content="Learn about the differences between regular 4-wheeled inline skates and triskates">
</svelte:head>

<!-- The HTML for the page -->
<main>

  <header>
    <h1 class="text" id={makeUrlFriendlyString(title)}>{title}</h1>
  </header>

  <section class="characteristics">

    <header>
      <h2 class="text" id={makeUrlFriendlyString(characteristicsTitle)}>{characteristicsTitle}</h2>
    </header>

    <!-- Display the characteristics in an unordered list -->
    <ul class="text">

      <!-- Iterates over all of the characteristics of a triskate -->
      {#each triskateDiffJson.characteristics as characteristic}
        <li>{characteristic}</li>
      {/each}
    </ul>
    
  </section>
  
  <section class="advantages">

    <header>
      <h2 class="text" id={makeUrlFriendlyString(advantagesTitle)}>{advantagesTitle}</h2>
    </header>

    <!-- Display the advantages in an unordered list -->
    <ul class="text">

      <!-- Iterates over all of the advantages of a triskate -->
      {#each triskateDiffJson.advantages as advantage}
        <li>{advantage}</li>
      {/each}
    </ul>
    
  </section>
  
  <section class="disadvantages">

    <header>
      <h2 class="text" id={makeUrlFriendlyString(disadvantagesTitle)}>{disadvantagesTitle}</h2>
    </header>

    <!-- Display the disadvantages in an unordered list -->
    <ul class="text">

      <!-- Iterates over all of the disadvantages of a triskate -->
      {#each triskateDiffJson.disadvantages as disadvantage}
        <li>{@html disadvantage}</li>
      {/each}
    </ul>
    
  </section>

  <section class="articles">

    <header>
      <h2 class="text" id={makeUrlFriendlyString(articlesTitle)}>{articlesTitle}</h2>
    </header>

    <section class="article-links">
      
      <!-- Iterates over all of the articles -->
      {#each Object.entries(triskateDiffJson.articles) as [title, url]}
        <a href={url} target="_blank">{title}</a>
      {/each}

    </section>
    
  </section>

  <section class="videos">
    
    <header>
      <h2 class="text" id={makeUrlFriendlyString(videosTitle)}>{videosTitle}</h2>
    </header>

    <VideoCollapsible videos={triskateDiffJson.videos} />
    
  </section>
  
</main>