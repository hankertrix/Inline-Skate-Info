<!-- The page for all the class C slalom tricks in the spins category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slalom/class-C/spins.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the class C slalom tricks in the spins category -->
<TricksPage title="Spins, Class C Slalom Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />