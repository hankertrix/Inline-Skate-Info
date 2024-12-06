<!-- The page for all of the class E aggressive tricks -->
<script lang="ts" module>
  import { tricksJson as stallsTricksJson } from './stalls/+page.svelte';
  import { tricksJson as grindsTricksJson } from './grinds/+page.svelte';
  import { tricksJson as airsTricksJson } from './airs/+page.svelte';
  import { tricksJson as grabsTricksJson } from './grabs/+page.svelte';
  import { tricksJson as spinsTricksJson } from './spins/+page.svelte';
  import { tricksJson as othersTricksJson } from './others/+page.svelte';

  // The tricks JSON to pass to the trick page
  export const tricksJson = {
    Stalls: stallsTricksJson,
    Grinds: grindsTricksJson,
    Airs: airsTricksJson,
    Grabs: grabsTricksJson,
    Spins: spinsTricksJson,
    Others: othersTricksJson,
  };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for all of the class E aggressive tricks -->
<!-- <TricksPage title="Class E Aggressive Tricks" description="The list of all class E aggressive tricks" {tricksJson} headingLevel={2} changeInHeadingLevel={1} /> -->
