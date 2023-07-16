<!-- The page for all the class B aggressive tricks in the grinds category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/aggressive/class-B/grinds.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the class B aggressive tricks in the grinds category -->
<!-- <TricksPage title="Grinds, Class B Aggressive Tricks" description="The list of class B aggressive tricks in the grinds category" {tricksJson} headingLevel={3} changeInHeadingLevel={1} /> -->