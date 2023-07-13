<!-- The page to display the skate recommendations -->
<script lang="ts">

  import { makeUrlFriendlyString } from "$lib/utils";
  import skateRecsJson from "$lib/data/misc/skate-recs.json";
  import VideoCollapsible from "$lib/components/general/VideoCollapsible.svelte";

  // The title for the page
  const title = "Skate Recommendations";

  // Function to add a soft hyphen (&shy;) to a string at a specified position
  function addSoftHyphen(str: string, position: number) {
    return `${title.slice(0, position)}&shy;${title.slice(position)}`;
  }
  
</script>

<!-- The styles for the page -->
<style>

  main {
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
    hyphens: manual;
  }

  .preface {
    margin-bottom: 3em;
  }

  .recommendation-category {
    margin-bottom: 10em;
  }

  .skate-recommendation {
    margin-bottom: 5em;
  }
  
</style>

<!-- The headers for the page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
</svelte:head>

<!-- The HTML for the page -->
<main>
  
  <header>
    <h1 class="text" id={makeUrlFriendlyString(title)}>{@html addSoftHyphen(title, 16)}</h1>
  </header>

  <article>

    <section class="preface">

      <p class="text">{@html skateRecsJson.preface}</p>
      
    </section>

    <section class="recommendations">

      <!-- Iterates over the category of recommended skates -->
      {#each Object.entries(skateRecsJson.recommendations) as [category, [recommendedSkates, videos]]}

        <!-- The heading for the videos -->
        {@const videoHeading = "Video Recommendations"}

        <section class="recommendation-category">
          
          <!-- Displays the category -->
          <h3 class="text" id={makeUrlFriendlyString(category)}>{category}</h3>

          <section class="recommended-skates">

            <!-- Iterates over the recommended skates -->
            {#each Object.entries(recommendedSkates) as [name, skateObj], index}

              <section class="skate-recommendation">

                <header>
                  <h4 id={makeUrlFriendlyString(name)}>{index + 1}. <a href={skateObj.link} target="_blank" title="View the product page for this skate">{name}</a></h4>
                </header>

                <div class="details text">
                  <div><strong>Price: </strong>{skateObj.price}</div>
                  <div>{@html skateObj.reason}</div>
                </div>

              </section>

            {/each}

          </section>

          <section class="videos">

            <header>
              <h4 class="text" id={makeUrlFriendlyString(videoHeading)}>{videoHeading}</h4>
            </header>

            <VideoCollapsible {videos} />

          </section>

        </section>

      {/each}
      
    </section>
    
  </article>
  
</main>