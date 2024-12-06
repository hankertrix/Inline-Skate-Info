<!-- The page for all the class D slalom tricks in the spins category -->
<script lang="ts" module>
  import tricksJson from '$lib/data/tricks/slalom/class-D/spins.json';
  export { tricksJson };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for the class D slalom tricks in the spins category -->
<TricksPage
  title="Spins, Class D Slalom Tricks"
  description="The list of class D slalom tricks in the spins category"
  {tricksJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
