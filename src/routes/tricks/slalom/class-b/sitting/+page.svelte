<!-- The page for all the class B slalom tricks in the sitting category -->
<script lang="ts" context="module">
  import tricksJson from '$lib/data/tricks/slalom/class-B/sitting.json';
  export { tricksJson };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for the class B slalom tricks in the sitting category -->
<TricksPage
  title="Sitting, Class B Slalom Tricks"
  description="The list of class B slalom tricks in the sitting category"
  {tricksJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
