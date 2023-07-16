<!-- The page for all the miscellaneous tricks -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/misc.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the miscellaneous tricks page -->
<TricksPage title="Miscellaneous Tricks" description="The list of miscellaneous tricks in inline skating" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />