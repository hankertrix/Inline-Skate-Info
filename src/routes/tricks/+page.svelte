<!-- The page containing all of the tricks -->
<script lang="ts">

  import { tricksJson as basicsTricksJson } from "./basics/+page.svelte";
  import { tricksJson as fundamentalsTricksJson } from "./fundamentals/+page.svelte";
  import { tricksJson as turnsTricksJson } from "./turns/+page.svelte";
  import { tricksJson as stopsTricksJson } from "./stops/+page.svelte";
  import { tricksJson as jumpsTricksJson } from "./jumps/+page.svelte";
  import { tricksJson as slalomTricksJson } from "./slalom/+page.svelte";
  import { tricksJson as slidesTricksJson } from "./slides/+page.svelte";
  import { tricksJson as aggressiveTricksJson } from "./aggressive/+page.svelte";
  import { tricksJson as wizardTricksJson } from "./wizard/+page.svelte";
  import { tricksJson as miscTricksJson } from "./misc/+page.svelte";
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";

  // The tricks JSON to pass to the page
  const tricksJson = {
    "Basics": basicsTricksJson,
    "Fundamentals": fundamentalsTricksJson,
    "Turns": turnsTricksJson,
    "Stops": stopsTricksJson,
    "Jumps": jumpsTricksJson,
    "Slalom": slalomTricksJson,
    "Slides": slidesTricksJson,

    // Re-enable the aggressive tricks once the data for it is done
    // "Aggressive": aggressiveTricksJson,
    "Wizard": wizardTricksJson,
    "Misc": miscTricksJson,
  };
  
</script>

<!-- The HTML for the page containing all of the tricks -->
<TricksPage title="Tricks" {tricksJson} headingLevel={2} changeInHeadingLevel={1} />