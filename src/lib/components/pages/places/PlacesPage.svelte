<!-- The component to display the page for the places -->
<script lang="ts">

  import { makeUrlFriendlyString } from "$lib/utils";
  import PlacesSection from "./PlacesSection.svelte";

  // The variable to take in the title of the page
  export let title: string;

  // The variable to take in the JSON data of the places
  export let placesJson: any;
  
  // The variable to take in the heading level
  export let headingLevel: number = 2;

  // The variable to take in the change in the heading level
  export let changeInHeadingLevel: number = 1;
  
</script>

<!-- The styles for the places page -->
<style>

  div {
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
  }
  
</style>

<!-- The headers for the places page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
</svelte:head>

<!-- The HTML for the places page -->
<div>
  <h1 id={makeUrlFriendlyString(title)} class="text">{title}</h1>
  <main>
    <PlacesSection {placesJson} {headingLevel} {changeInHeadingLevel} />
  </main>
</div>