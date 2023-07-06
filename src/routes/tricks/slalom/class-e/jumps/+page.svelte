<!-- The page for all the class E slalom tricks in the jumps category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slalom/class-E/jumps.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class E slalom tricks in the jumps category -->
<TrickPage title="Jumps, Class E Slalom Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />