<!-- The page for all of the class C aggressive tricks -->
<script lang="ts" context="module">

  import stallsTricksJson from "$lib/data/tricks/aggressive/class-C/stalls.json";
  import grindsTricksJson from "$lib/data/tricks/aggressive/class-C/grinds.json";
  import airsTricksJson from "$lib/data/tricks/aggressive/class-C/airs.json";
  import grabsTricksJson from "$lib/data/tricks/aggressive/class-C/grabs.json";
  import spinsTricksJson from "$lib/data/tricks/aggressive/class-C/spins.json";
  import othersTricksJson from "$lib/data/tricks/aggressive/class-C/others.json";

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

<!-- The HTML for all of the class C aggressive tricks -->
<!-- <TrickPage title="Class C Aggressive Tricks" {tricksJson} headingLevel={2} changeInHeadingLevel={1} /> -->