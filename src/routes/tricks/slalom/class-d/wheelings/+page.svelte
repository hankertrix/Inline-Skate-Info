<!-- The page for all the class D slalom tricks in the wheelings category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slalom/class-D/wheelings.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the class D slalom tricks in the wheelings category -->
<TricksPage title="Wheelings, Class D Slalom Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />