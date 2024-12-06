<!-- The page for all the fundamental tricks -->
<script lang="ts" module>
  import tricksJson from '$lib/data/tricks/fundamentals.json';
  export { tricksJson };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for the fundamental tricks page -->
<TricksPage
  title="Fundamental Tricks"
  description="The list of fundamental tricks in inline skating"
  {tricksJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
