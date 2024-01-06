<!-- The page to display the brands in inline skating -->
<script lang="ts">

  import type { JsonData } from "$lib/types";
  import { makeUrlFriendlyString } from "$lib/utils";
  import BrandsSection from "./BrandsSection.svelte";

  // The variable to take in the title of the page
  export let title: string;
  
  // The variable which takes in the description of the page
  export let description: string;

  // The variable to take in the JSON data of the brands
  export let brandsJson: JsonData;
  
  // The variable to take in the heading level
  export let headingLevel: number = 2;

  // The variable to take in the change in the heading level
  export let changeInHeadingLevel: number = 1;
  
</script>

<!-- The styles for the page -->
<style>

  main {
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
  }
  
</style>

<!-- The headers for the page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
  <meta name="description" content={description}>
</svelte:head>

<!-- The HTML for the page -->
<main>
  
  <header>
    <h1 class="text" id={makeUrlFriendlyString(title)}>{title}</h1>
  </header>
  
  <div>
    <BrandsSection {brandsJson} {headingLevel} {changeInHeadingLevel} />
  </div>
  
</main>
