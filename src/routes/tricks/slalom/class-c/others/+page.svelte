<!-- The page for all the class C slalom tricks in the others category -->
<script lang="ts" module>
  import tricksJson from '$lib/data/tricks/slalom/class-C/others.json';
  export { tricksJson };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for the class C slalom tricks in the others category -->
<TricksPage
  title="Others, Class C Slalom Tricks"
  description="The list of class C slalom tricks in the others category"
  {tricksJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
