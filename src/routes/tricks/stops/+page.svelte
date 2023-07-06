<!-- The page for all the stops -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/stops.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the stops page -->
<TrickPage title="Stops" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />