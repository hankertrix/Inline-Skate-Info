<!-- The page for all the jumps -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/jumps.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the jumps page -->
<TricksPage title="Jumps" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />