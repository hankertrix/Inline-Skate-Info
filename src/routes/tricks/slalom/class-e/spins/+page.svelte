<!-- The page for all the class E slalom tricks in the spins category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slalom/class-E/spins.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the class E slalom tricks in the spins category -->
<TricksPage title="Spins, Class E Slalom Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />