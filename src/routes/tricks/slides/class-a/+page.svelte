<!-- The page for all of the class A slides -->
<script lang="ts" module>
  import { tricksJson as family1TricksJson } from './family-1/+page.svelte';
  import { tricksJson as family2TricksJson } from './family-2/+page.svelte';
  import { tricksJson as family3TricksJson } from './family-3/+page.svelte';
  import { tricksJson as family4TricksJson } from './family-4/+page.svelte';
  import { tricksJson as family5TricksJson } from './family-5/+page.svelte';

  // The tricks JSON to pass to the trick page
  export const tricksJson = {
    'Family 1': family1TricksJson,
    'Family 2': family2TricksJson,
    'Family 3': family3TricksJson,
    'Family 4': family4TricksJson,
    'Family 5': family5TricksJson,
  };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for all of the class A slides -->
<TricksPage
  title="Class A Slides"
  description="The list of all class A slides"
  {tricksJson}
  headingLevel={2}
  changeInHeadingLevel={1}
/>
