<!-- The page for all the class C aggressive tricks in the airs category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/aggressive/class-C/airs.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class C aggressive tricks in the airs category -->
<!-- <TrickPage title="Airs, Class C Aggressive Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} /> -->