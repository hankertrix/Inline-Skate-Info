<!-- The page for all the aggressive basic tricks -->
<script lang="ts" context="module">
  import tricksJson from '$lib/data/tricks/aggressive/basics.json';
  export { tricksJson };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for the aggressive basics page -->
<!-- <TricksPage title="Aggressive Basics" description="The list of basic tricks in aggressive skating" {tricksJson} headingLevel={3} changeInHeadingLevel={1} /> -->
