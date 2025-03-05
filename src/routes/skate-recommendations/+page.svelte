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

  // Function to cast the video object to a suitable type for the videos collapsible
  // Typescript somehow doesn't recognise the type of the video object for some reason
  function castAsVideoObject(obj: object) {
    return obj as { [title: string]: string };
  }
</script>

<!-- The headers for the page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
  <meta
    name="description"
    content="The list of skates recommended for beginners who intend to become serious about inline skating"
  />
</svelte:head>

<!-- The HTML for the page -->
<main>
  <header>
    <h1 class="text" id={makeUrlFriendlyString(title)}>
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html addSoftHyphen(title, 16)}
    </h1>
  </header>

  <article>
    <section class="preface">
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      <p class="text">{@html skateRecsJson.preface}</p>
    </section>

    <section class="recommendations">
      <!-->

      <!-- Iterates over the category of recommended skates -->
      {#each Object.entries(skateRecsJson.recommendations) as [category, [recommendedSkates, listOfVideos]] (category)}
        <!-->

        <!-- The heading for the videos -->
        {@const videoHeading = "Video Recommendations"}

        <!-- Gets the list of videos casted as a video object -->
        {@const videos = castAsVideoObject(listOfVideos)}

        <section class="recommendation-category">
          <!-->

          <!-- Displays the category -->
          <h3 class="text" id={makeUrlFriendlyString(category)}>{category}</h3>

          <section class="recommended-skates">
            <!-->

            <!-- Iterates over the recommended skates -->
            {#each Object.entries(recommendedSkates) as [name, skateObj], index (index)}
              <section class="skate-recommendation">
                <header>
                  <h4 id={makeUrlFriendlyString(name)}>
                    {index + 1}.
                    <a
                      href={skateObj.link}
                      target="_blank"
                      title="View the product page for this skate">{name}</a
                    >
                  </h4>
                </header>

                <div class="details text">
                  <div>
                    <strong>Price: </strong>
                    {skateObj.price}
                  </div>

                  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                  <div>{@html skateObj.reason}</div>
                </div>
              </section>
            {/each}
          </section>

          <section class="videos">
            <header>
              <h4 class="text" id={makeUrlFriendlyString(videoHeading)}>
                {videoHeading}
              </h4>
            </header>

            <VideoCollapsible {videos} />
          </section>
        </section>
      {/each}
    </section>
  </article>
</main>

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
