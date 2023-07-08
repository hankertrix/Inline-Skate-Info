<!-- The page for all the class B aggressive tricks in the spins category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/aggressive/class-B/spins.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the class B aggressive tricks in the spins category -->
<!-- <TricksPage title="Spins, Class B Aggressive Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} /> -->