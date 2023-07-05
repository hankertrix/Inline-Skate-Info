<!-- The page for all of the class E aggressive tricks -->
<script lang="ts" context="module">

  import stallsTricksJson from "$lib/data/tricks/aggressive/class-E/stalls.json";
  import grindsTricksJson from "$lib/data/tricks/aggressive/class-E/grinds.json";
  import airsTricksJson from "$lib/data/tricks/aggressive/class-E/airs.json";
  import grabsTricksJson from "$lib/data/tricks/aggressive/class-E/grabs.json";
  import spinsTricksJson from "$lib/data/tricks/aggressive/class-E/spins.json";
  import othersTricksJson from "$lib/data/tricks/aggressive/class-E/others.json";

  // The tricks JSON to pass to the trick page
  export const tricksJson = {
    "Stalls": stallsTricksJson,
    "Grinds": grindsTricksJson,
    "Airs": airsTricksJson,
    "Grabs": grabsTricksJson,
    "Spins": spinsTricksJson,
    "Others": othersTricksJson,
  };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for all of the class E aggressive tricks -->
<!-- <TrickPage title="Class E Aggressive Tricks" {tricksJson} headingLevel={2} changeInHeadingLevel={1} /> -->