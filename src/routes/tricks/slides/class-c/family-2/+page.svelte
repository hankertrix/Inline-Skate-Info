<!-- The page for all the class C family 2 slides -->
<script lang="ts" module>
  import tricksJson from '$lib/data/tricks/slides/class-C/family-2.json';
  export { tricksJson };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for the class C family 2 slides -->
<TricksPage
  title="Class C, Family 2 Slides"
  description="The list of class C slides in family 2"
  {tricksJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
