<!-- The page for all of the class A aggressive tricks -->
<script lang="ts" context="module">
  import { tricksJson as spinsTricksJson } from './spins/+page.svelte';
  import { tricksJson as othersTricksJson } from './others/+page.svelte';

  // The tricks JSON to pass to the trick page
  export const tricksJson = {
    Spins: spinsTricksJson,
    Others: othersTricksJson,
  };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for all of the class A aggressive tricks -->
<!-- <TricksPage title="Class A Aggressive Tricks" description="The list of all class A aggressive tricks" {tricksJson} headingLevel={2} changeInHeadingLevel={1} /> -->
