<!-- The page for all the class C aggressive tricks in the others category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/aggressive/class-C/others.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the class C aggressive tricks in the others category -->
<!-- <TricksPage title="Others, Class C Aggressive Tricks" description="The list of class C aggressive tricks in the others category" {tricksJson} headingLevel={3} changeInHeadingLevel={1} /> -->