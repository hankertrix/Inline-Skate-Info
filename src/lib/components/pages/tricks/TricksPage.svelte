<!-- The component to display a page of tricks -->
<script lang="ts">

  import { makeUrlFriendlyString } from "$lib/utils";
  import TricksSection from "./TricksSection.svelte";

  // The variable which takes in the title of the page
  export let title: string;

  // The variable which takes in the JSON data for the tricks
  export let tricksJson: any;
  
  // The variable to take in the heading level
  export let headingLevel: number = 2;

  // The variable to take in the change in the heading level
  export let changeInHeadingLevel: number = 1;
  
</script>

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

<!-- The headers for the trick page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
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