<!-- The page for all the class D slalom tricks in the jumps category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slalom/class-D/jumps.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the class D slalom tricks in the jumps category -->
<TricksPage title="Jumps, Class D Slalom Tricks" description="The list of class D slalom tricks in the jumps category" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />