<!-- The component to display a page of tricks -->
<script lang="ts">
  import type { JsonData } from "$lib/types";
  import TricksSection from "./TricksSection.svelte";
  import { makeUrlFriendlyString } from "$lib/utils";

  // The interface for the props passed to the component
  interface Props {
    //

    // The variable which takes in the title of the page
    title: string;

    // The variable which takes in the description of the page
    description: string;

    // The variable which takes in the JSON data for the tricks
    tricksJson: JsonData;

    // The variable to take in the heading level
    headingLevel?: number;

    // The variable to take in the change in the heading level
    changeInHeadingLevel?: number;
  }

  // Get the variables from the props
  let {
    title,
    description,
    tricksJson,
    headingLevel = 2,
    changeInHeadingLevel = 1,
  }: Props = $props();
</script>

<!-- The headers for the trick page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
  <meta name="description" content={description} />
</svelte:head>

<!-- The HTML for the tricks page -->
<main>
  <header>
    <h1 class="text" id={makeUrlFriendlyString(title)}>{title}</h1>
  </header>

  <div>
    <TricksSection {tricksJson} {headingLevel} {changeInHeadingLevel} />
  </div>
</main>

<!-- The styles for the trick page -->
<style>
  main {
    margin: var(--page-margin);
    width: 100%;
  }

  h1 {
    font-family: Oleo Script;
  }
</style>
