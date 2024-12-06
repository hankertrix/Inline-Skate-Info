<!-- The component to display a category of tricks, or a single trick -->
<script lang="ts">
  import type { JsonData } from "$lib/types";
  import TricksSection from "./TricksSection.svelte";
  import VideoCollapsible from "$lib/components/general/VideoCollapsible.svelte";
  import { makeUrlFriendlyString } from "$lib/utils";

  // The type representing a single trick
  type Trick = {
    description: string;
    videos: [string, string][];
  };

  // The interface for the props passed to the component
  interface Props {
    //

    // The variable to take in the tricks JSON file
    tricksJson: JsonData;

    // The variable to take in the initial heading level
    headingLevel?: number;

    // The variable to take in the change in the heading level
    changeInHeadingLevel?: number;

    // The variable to take in the ID of the parent category
    parentId?: string;
  }

  // Get the variables from the props
  let {
    tricksJson,
    headingLevel = 2,
    changeInHeadingLevel = 1,
    parentId = "",
  }: Props = $props();

  // The function to check if the object is a trick object
  function isTrickObject(obj: unknown) {
    return (
      Object.prototype.hasOwnProperty.call(obj, "description") &&
      Object.prototype.hasOwnProperty.call(obj, "videos")
    );
  }

  // The function to cast an object to a trick object
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  function castAsTrickObj(obj: any): Trick {
    return obj as Trick;
  }
</script>

<!-- The HTML for the tricks section -->
<!-- Iterates over each of the items in the tricks JSON given -->
{#each Object.entries(tricksJson) as [name, obj]}
  <!-->

  <!-- Gets the URL friendly string of the trick or category name -->
  {@const urlFriendlyName = makeUrlFriendlyString(name)}

  <!-- Creates the heading ID -->
  {@const headingId = `${parentId ? `${parentId}-` : ""}${urlFriendlyName}`}

  <!-- Gets the heading -->
  {@const heading = `h${headingLevel}`}

  <!-- If the object is a trick object -->
  {#if isTrickObject(obj)}
    <!-->

    <!-- Gets the description and the list of videos for the trick -->
    {@const { description, videos } = castAsTrickObj(obj)}

    <article class="trick">
      <!-->

      <!-- Adds the trick title -->
      <svelte:element this={heading} id={headingId} class="text"
        >{name}</svelte:element
      >

      <!-- Adds the description for the trick -->
      <!-- Also convert all newline characters to <br> tags -->
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      <p class="text">{@html description.replace(/\n/g, "<br>")}</p>

      <!-- The collapsible containing all of the videos -->
      <VideoCollapsible {videos} title="View the videos for the trick" />
    </article>

  <!-- Otherwise, the object is a category of tricks -->
  {:else}
    <section class="trick-category">
      <!-->

      <!-- Adds the category title -->
      <svelte:element this={heading} id={headingId} class="text"
        >{name}</svelte:element
      >
      <TricksSection
        tricksJson={obj}
        headingLevel={headingLevel + changeInHeadingLevel}
        {changeInHeadingLevel}
        parentId={headingId}
      />
    </section>
  {/if}
{/each}

<!-- The styles for the tricks section -->
<style>
  .trick {
    margin-bottom: 5em;
  }

  .trick-category {
    margin: 3em 0;
  }

  /* Make the spacing between two trick categories quite large */
  .trick-category + .trick-category {
    margin: 10em 0;
  }
</style>
