<!-- The page for all of the class A aggressive tricks -->
<script lang="ts" context="module">

  import { tricksJson as spinsTricksJson } from "./spins/+page.svelte";
  import { tricksJson as othersTricksJson } from "./others/+page.svelte";

  // The tricks JSON to pass to the trick page
  export const tricksJson = {
    "Spins": spinsTricksJson,
    "Others": othersTricksJson,
  };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for all of the class A aggressive tricks -->
<!-- <TrickPage title="Class A Aggressive Tricks" {tricksJson} headingLevel={2} changeInHeadingLevel={1} /> -->