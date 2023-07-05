<!-- The page for all the aggressive basic tricks -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/aggressive/basics.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the aggressive basics page -->
<!-- <TrickPage title="Aggressive Basics" {tricksJson} headingLevel={3} changeInHeadingLevel={1} /> -->