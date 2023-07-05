<!-- The page for all of the class B aggressive tricks -->
<script lang="ts" context="module">

  import stallsTricksJson from "$lib/data/tricks/aggressive/class-B/stalls.json";
  import grindsTricksJson from "$lib/data/tricks/aggressive/class-B/grinds.json";
  import airsTricksJson from "$lib/data/tricks/aggressive/class-B/airs.json";
  import spinsTricksJson from "$lib/data/tricks/aggressive/class-B/spins.json";
  import othersTricksJson from "$lib/data/tricks/aggressive/class-B/others.json";

  // The tricks JSON to pass to the trick page
  export const tricksJson = {
    "Stalls": stallsTricksJson,
    "Grinds": grindsTricksJson,
    "Airs": airsTricksJson,
    "Spins": spinsTricksJson,
    "Others": othersTricksJson,
  };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for all of the class B aggressive tricks -->
<!-- <TrickPage title="Class B Aggressive Tricks" {tricksJson} headingLevel={2} changeInHeadingLevel={1} /> -->