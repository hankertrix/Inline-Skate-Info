<!-- The page for all of the class D aggressive tricks -->
<script lang="ts" context="module">

  import stallsTricksJson from "$lib/data/tricks/aggressive/class-D/stalls.json";
  import grindsTricksJson from "$lib/data/tricks/aggressive/class-D/grinds.json";
  import airsTricksJson from "$lib/data/tricks/aggressive/class-D/airs.json";
  import grabsTricksJson from "$lib/data/tricks/aggressive/class-D/grabs.json";
  import spinsTricksJson from "$lib/data/tricks/aggressive/class-D/spins.json";
  import othersTricksJson from "$lib/data/tricks/aggressive/class-D/others.json";

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

<!-- The HTML for all of the class D aggressive tricks -->
<!-- <TrickPage title="Class D Aggressive Tricks" {tricksJson} headingLevel={2} changeInHeadingLevel={1} /> -->