<!-- The page containing all of the slalom tricks -->
<script lang="ts" context="module">
  // Import all of the tricks
  import { tricksJson as classATricksJson } from './class-a/+page.svelte';
  import { tricksJson as classBTricksJson } from './class-b/+page.svelte';
  import { tricksJson as classCTricksJson } from './class-c/+page.svelte';
  import { tricksJson as classDTricksJson } from './class-d/+page.svelte';
  import { tricksJson as classETricksJson } from './class-e/+page.svelte';

  // The tricks JSON to pass to the trick page
  export const tricksJson = {
    'Class A': classATricksJson,
    'Class B': classBTricksJson,
    'Class C': classCTricksJson,
    'Class D': classDTricksJson,
    'Class E': classETricksJson,
  };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for all slalom tricks -->
<TricksPage
  title="Slalom Tricks"
  description="The list of all slalom tricks"
  {tricksJson}
  headingLevel={2}
  changeInHeadingLevel={1}
/>
