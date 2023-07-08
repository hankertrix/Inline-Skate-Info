<!-- The page for all the class C slalom tricks in the wheelings category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slalom/class-C/wheelings.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the class C slalom tricks in the wheelings category -->
<TricksPage title="Wheelings, Class C Slalom Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />