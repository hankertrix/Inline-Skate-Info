<!-- The component to display a category of tricks, or a single trick -->
<script lang="ts">

  import type { Trick } from "$lib/types";
  import { makeUrlFriendlyString } from "$lib/utils";

  // The variable to take in the tricks JSON file
  export let tricksJson: any;

  // The variable to take in the initial heading level
  export let headingLevel: number = 2;

  // The variable to take in the change in the heading level
  export let changeInHeadingLevel: number = 1;

  // The regex to remove everything but the YouTube ID
  const youtubeIdRegex = /^.*\/(?:watch\?v=)?|[?&].+$/g;

  // The regex to remove everything but the YouTube timestamp
  const youtubeTimestampRegex = /^.*t=|s+$/g;

  
  // The function to check if the object is a trick object
  function isTrickObject(obj: any) {
    return obj.hasOwnProperty("description") && obj.hasOwnProperty("videos");
  }


  // The function to cast a trick object
  function castAsTrickObj(obj: any): Trick {
    return obj as Trick;
  }


  // Function to get the ID of a YouTube video
  function getYoutubeId(youtubeVideoUrl: string) {
    return youtubeVideoUrl.replace(youtubeIdRegex, "").trim();
  }


  // Function to get the timestamp of a YouTube video
  function getYoutubeTimestamp(youtubeVideoUrl: string): number {

    // Gets the string of the timestamp for the YouTube video
    const timestampString = youtubeVideoUrl.replace(youtubeTimestampRegex, "").trim();

    // Returns 0 if the timestamp string doesn't exist
    // Otherwise, returns the timestamp string converted to a number
    return timestampString === "" ? 0 : parseInt(timestampString);
  }


  // Function to load all the embeds inside the video collapsible when the collapsible is opened
  function loadEmbeds(e: MouseEvent & { currentTarget: HTMLElement }) {

    // Gets the parent element
    const parentElement = e.currentTarget.parentElement;

    // Exits the function if the parent element is not defined
    if (parentElement == null) return;

    // Gets all the iframe elements in the parent element
    const iframeElements = parentElement.getElementsByTagName("iframe");

    // Iterates over all the iframe elements and set their src attribute
    for (const iframeElement of iframeElements) iframeElement.src = iframeElement.dataset.src!;
  }
  
</script>

<!-- The styles for the trick section -->
<style>

  .trick {
    margin-bottom: 5rem;
  }

  details {
    --collapsible-label-padding: 1em;
  }

  summary {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: var(--collapsible-label-padding);
    cursor: pointer;
    background-color: var(--accent-colour);
  }

  summary:hover {
    background-color: var(--accent-hover-colour);
  }

  .icon-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  /* The "+" icon at the end of the video collapsible */
  /* Reference: https://jsfiddle.net/psullivan6/0eL3jezk/ */
  .plus-icon {
    --icon-size: 1.2em;
    --icon-margin: 0.25em;
    --bar-width: 0.25em;
    
    position: relative;
    width: var(--icon-size);
    height: var(--icon-size);
    justify-self: end;
    margin-right: var(--icon-margin);
    margin-bottom: var(--icon-margin);
  }

  /* Vertical line of the "+" symbol */
  .vertical-bar {
    top: 0;
    left: 50%;
    width: var(--bar-width);
    height: 100%;
    margin-top: 2px;
  }
  
  /* Horizontal line of the "+" symbol */
  .horizontal-bar {
    top: 50%;
    left: 0;
    height: var(--bar-width);
    width: 100%;
    margin-left: 2px;
  }

  .vertical-bar, .horizontal-bar {
    position: absolute;
    background-color: var(--icon-colour);
    transition: rotate var(--animation-timing);
  }

  .video-collapsible {
    padding: 0 var(--collapsible-label-padding);
    background-color: var(--collapsible-background-colour);
  }

  iframe {
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
    margin: 2em 0;
  }

  
  /* Styles for when the collapsible is open */

  details[open] > summary {
    background-color: var(--accent-active-colour);
  }

  details[open] .vertical-bar {
    rotate: 90deg;
  }

  details[open] .horizontal-bar {
    rotate: 180deg;
  }


  /* The styles for mobile devices */
  @media only screen and (max-width: 700px) {

    iframe {
      margin: 1.25em 0;
    }
  }
  
</style>

<!-- The HTML for the trick section -->
<!-- Iterates over each of the items in the tricks JSON given -->
{#each Object.entries(tricksJson) as [name, obj]}

  <!-- Gets the URL friendly string of the trick or category name -->
  {@const urlFriendlyName = makeUrlFriendlyString(name)}

  <!-- Gets the heading -->
  {@const heading = `h${headingLevel}`}

  <!-- If the object is a trick object -->
  {#if isTrickObject(obj)}

    <!-- Gets the description and the list of videos for the trick -->
    {@const { description, videos } = castAsTrickObj(obj)}

    <article class="trick">

      <!-- Adds the trick title -->
      <svelte:element this={heading} id={urlFriendlyName} class="text">{name}</svelte:element>

      <!-- Adds the description for the trick -->
      <p class="text">{@html description}</p>

      <!-- The collapsible containing all of the videos -->
      <details>
        <summary title="View the videos for the trick" on:click|once={loadEmbeds}>
          <div class="text">{videos.length} videos</div>
          <div class="icon-wrapper">
            <div class="plus-icon">
              <div class="vertical-bar"></div>
              <div class="horizontal-bar"></div>
            </div>
          </div>
        </summary>

        <section class="video-collapsible">

          <!-- Iterates over all the videos -->
          {#each videos as [channelName, url]}
            {@const youtubeId = getYoutubeId(url)}
            {@const youtubeTimestamp = getYoutubeTimestamp(url)}

            <!-- Display the YouTube embed -->
            <iframe data-src={`https:\/\/www.youtube-nocookie.com/embed/${youtubeId}?start=${youtubeTimestamp}`} src="" title={channelName} frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen>
              <a href={url} target="_blank" title={`View ${channelName}'s video`}>{channelName}</a>
            </iframe>

          {/each}

        </section>

      </details>
      
    </article>

  <!-- Otherwise, the object is a category of tricks -->
  {:else}

    <section class="trick-category">

      <!-- Adds the category title -->
      <svelte:element this={heading} id={urlFriendlyName}>{urlFriendlyName}</svelte:element>
      <svelte:self tricksJson={obj} headingLevel={headingLevel + changeInHeadingLevel} {changeInHeadingLevel} />
      
    </section>
    
  {/if}

{/each}