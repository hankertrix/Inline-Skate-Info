<!-- The component to display the page for the places -->
<script lang="ts">
  import type { JsonData } from "$lib/types";
  import PlacesSection from "./PlacesSection.svelte";
  import { makeUrlFriendlyString } from "$lib/utils";

  // The interface for the props passed to the component
  interface Props {
    //

    // The variable to take in the title of the page
    title: string;

    // The variable which takes in the description of the page
    description: string;

    // The variable to take in the JSON data of the places
    placesJson: JsonData;

    // The variable to take in the heading level
    headingLevel?: number;

    // The variable to take in the change in the heading level
    changeInHeadingLevel?: number;
  }

  // Get the variables from the props
  let {
    title,
    description,
    placesJson,
    headingLevel = 2,
    changeInHeadingLevel = 1,
  }: Props = $props();
</script>

<!-- The headers for the places page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
  <meta name="description" content={description} />
</svelte:head>

<!-- The HTML for the places page -->
<main>
  <header>
    <h1 class="text" id={makeUrlFriendlyString(title)}>{title}</h1>
  </header>

  <div>
    <PlacesSection {placesJson} {headingLevel} {changeInHeadingLevel} />
  </div>
</main>

<!-- The styles for the places page -->
<style>
  main {
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
  }
</style>
