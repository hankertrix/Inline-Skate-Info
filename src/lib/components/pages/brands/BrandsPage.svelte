<!-- The page to display the brands in inline skating -->
<script lang="ts">
  import type { JsonData } from "$lib/types";
  import BrandsSection from "./BrandsSection.svelte";
  import { makeUrlFriendlyString } from "$lib/utils";

  // The interface for the props passed to the component
  interface Props {
    //

    // The variable to take in the title of the page
    title: string;

    // The variable which takes in the description of the page
    description: string;

    // The variable to take in the JSON data of the brands
    brandsJson: JsonData;

    // The variable to take in the heading level
    headingLevel?: number;

    // The variable to take in the change in the heading level
    changeInHeadingLevel?: number;
  }

  // Get the variables from the props
  let {
    title,
    description,
    brandsJson,
    headingLevel = 2,
    changeInHeadingLevel = 1,
  }: Props = $props();
</script>

<!-- The headers for the page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
  <meta name="description" content={description} />
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

<!-- The styles for the page -->
<style>
  main {
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
  }
</style>
