<!-- The page for all the class B aggressive tricks in the stalls category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/aggressive/class-B/stalls.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class B aggressive tricks in the stalls category -->
<!-- <TrickPage title="Stalls, Class B Aggressive Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} /> -->