<!-- The component to display a page of tricks -->
<script lang="ts">

  import { makeUrlFriendlyString } from "$lib/utils";
  import TrickSection from "$lib/components/pages/tricks/TrickSection.svelte";

  // The variable which takes in the title of the page
  export let title: string;

  // The variable which takes in the JSON data for the tricks
  export let tricksJson: any;
  
  // The variable to take in the initial heading level
  export let headingLevel: number = 2;

  // The variable to take in the change in the heading level
  export let changeInHeadingLevel: number = 1;
  
</script>

<!-- The styles for the trick page -->
<style>

  div {
    margin: 10px var(--page-left-right-margin);
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
<div>
  <h1 id={makeUrlFriendlyString(title)} class="text">{title}</h1>
  <main>
    <TrickSection {tricksJson} {headingLevel} {changeInHeadingLevel} />
  </main>
</div>