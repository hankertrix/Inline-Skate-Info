<!-- The page for all the class D aggressive tricks in the airs category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/aggressive/class-D/airs.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class D aggressive tricks in the airs category -->
<!-- <TrickPage title="Airs, Class D Aggressive Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} /> -->