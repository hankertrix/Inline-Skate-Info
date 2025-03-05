<!-- The component to create the video collapsible -->
<script lang="ts">
  //

  // The interface for the props passed to the component
  interface Props {
    //

    // The variable to take in the list of videos
    videos:
      | [string, string][]
      | {
          [key: string]: string;
        };

    // The variable to take in the title for the video collapsible
    title?: string;
  }

  // The on click event
  type OnClickEvent = MouseEvent & { currentTarget: HTMLElement };

  // Get the video and the title from the props
  let { videos, title = "View the videos" }: Props = $props();

  // Initialise the list of videos
  const listOfVideos: [string, string][] = Array.isArray(videos)
    ? videos
    : Object.entries(videos);

  // The regex to remove everything but the YouTube ID
  const youtubeIdRegex = /^.*\/(?:watch\?v=)?|[?&].+$/g;

  // The regex to remove everything but the YouTube timestamp
  const youtubeTimestampRegex = /^.*t=|\s+$/g;

  // The function to run a function once
  function once(fn: ((event: OnClickEvent) => void) | null) {
    return function (this: typeof fn, event: OnClickEvent) {
      if (fn) fn.call(this, event);
      fn = null;
    };
  }

  // Function to get the ID of a YouTube video
  function getYoutubeId(youtubeVideoUrl: string) {
    return youtubeVideoUrl.replace(youtubeIdRegex, "").trim();
  }

  // Function to get the timestamp of a YouTube video
  function getYoutubeTimestamp(youtubeVideoUrl: string): number {
    //

    // Get the timestamp string of the YouTube video
    const timestampString = youtubeVideoUrl.replace(youtubeTimestampRegex, "");

    // Parse the timestamp string to an integer
    const timestamp = parseInt(timestampString);

    // Return 0 if the timestamp is not a number,
    // and the timestamp if it is a number
    return isNaN(timestamp) ? 0 : timestamp;
  }

  // Function to load all the embeds inside the video collapsible
  // when the collapsible is opened
  function loadEmbeds(e: OnClickEvent) {
    //

    // Gets the parent element
    const parentElement = e.currentTarget.parentElement;

    // Exits the function if the parent element is not defined
    if (parentElement == null) return;

    // Gets all the iframe elements in the parent element
    const iframeElements = parentElement.getElementsByTagName("iframe");

    // Iterates over all the iframe elements and set their src attribute
    for (const iframeElement of iframeElements)
      iframeElement.src = iframeElement.dataset.src!;
  }
</script>

<!-- The HTML for the video collapsible -->
<details>
  <summary {title} onclick={once(loadEmbeds)}>
    <div class="text">{listOfVideos.length} videos</div>
    <div class="icon-wrapper">
      <div class="plus-icon">
        <div class="vertical-bar"></div>
        <div class="horizontal-bar"></div>
      </div>
    </div>
  </summary>

  <section class="video-collapsible">
    <!-->

    <!-- Iterates over the list of videos -->
    {#each listOfVideos as [videoInfo, url] (url)}
      {@const youtubeId = getYoutubeId(url)}
      {@const youtubeTimestamp = getYoutubeTimestamp(url)}

      <!-- Display the YouTube embed -->
      <iframe
        data-src={`https://www.youtube-nocookie.com/embed/${youtubeId}?start=${youtubeTimestamp}`}
        src=""
        title={videoInfo}
        loading="lazy"
        allowfullscreen
      >
      </iframe>
    {/each}
  </section>
</details>

<!-- The styles for the video collapsible -->
<style>
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

  .vertical-bar,
  .horizontal-bar {
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
    border: none;
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
