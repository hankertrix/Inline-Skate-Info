<!-- The page for all of the class E slides -->
<script lang="ts" context="module">

  import { tricksJson as family1TricksJson } from "./family-1/+page.svelte";
  import { tricksJson as family2TricksJson } from "./family-2/+page.svelte";
  import { tricksJson as family4TricksJson } from "./family-4/+page.svelte";

  // The tricks JSON to pass to the trick page
  export const tricksJson = {
    "Family 1": family1TricksJson,
    "Family 2": family2TricksJson,
    "Family 4": family4TricksJson,
  };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for all of the class E slides -->
<TrickPage title="Class E Slides" {tricksJson} headingLevel={2} changeInHeadingLevel={1} />