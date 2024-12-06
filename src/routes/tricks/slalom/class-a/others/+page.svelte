<!-- The page for all the class A slalom tricks in the others category -->
<script lang="ts" module>
  import tricksJson from '$lib/data/tricks/slalom/class-A/others.json';
  export { tricksJson };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for the class A slalom tricks in the others category -->
<TricksPage
  title="Others, Class A Slalom Tricks"
  description="The list of class A slalom tricks in the others category"
  {tricksJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
