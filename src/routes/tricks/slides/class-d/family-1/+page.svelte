<!-- The page for all the class D family 1 slides -->
<script lang="ts" module>
  import tricksJson from '$lib/data/tricks/slides/class-D/family-1.json';
  export { tricksJson };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for the class D family 1 slides -->
<TricksPage
  title="Class D, Family 1 Slides"
  description="The list of class D slides in family 1"
  {tricksJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
