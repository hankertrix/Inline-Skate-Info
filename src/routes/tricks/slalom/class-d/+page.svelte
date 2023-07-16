<!-- The page for all of the class D slalom tricks -->
<script lang="ts" context="module">

  import { tricksJson as othersTricksJson } from "./others/+page.svelte";
  import { tricksJson as sittingTricksJson } from "./sitting/+page.svelte";
  import { tricksJson as jumpsTricksJson } from "./jumps/+page.svelte";
  import { tricksJson as wheelingsTricksJson } from "./wheelings/+page.svelte";
  import { tricksJson as spinsTricksJson } from "./spins/+page.svelte";

  // The tricks JSON to pass to the trick page
  export const tricksJson = {
    "Others": othersTricksJson,
    "Sitting": sittingTricksJson,
    "Jumps": jumpsTricksJson,
    "Wheelings": wheelingsTricksJson,
    "Spins": spinsTricksJson,
  };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for all of the class D slalom tricks -->
<TricksPage title="Class D Slalom Tricks" description="The list of all class D slalom tricks" {tricksJson} headingLevel={2} changeInHeadingLevel={1} />