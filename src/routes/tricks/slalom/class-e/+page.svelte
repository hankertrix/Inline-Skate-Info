<!-- The page for all of the class E slalom tricks -->
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

<!-- The HTML for all of the class E slalom tricks -->
<TricksPage title="Class E Slalom Tricks" description="The list of all class E slalom tricks" {tricksJson} headingLevel={2} changeInHeadingLevel={1} />