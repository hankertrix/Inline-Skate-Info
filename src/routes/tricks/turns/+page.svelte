<!-- The page for all the turns -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/turns.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the turns page -->
<TricksPage title="Turns" description="The list of inline skating turns" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />