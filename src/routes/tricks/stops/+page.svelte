<!-- The page for all the stops -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/stops.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the stops page -->
<TricksPage title="Stops" description="The list of inline skating stops" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />