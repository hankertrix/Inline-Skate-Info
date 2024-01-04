<!-- The page for all the class E slalom tricks in the wheelings category -->
<script lang="ts" context="module">
  import tricksJson from '$lib/data/tricks/slalom/class-E/wheelings.json';
  export { tricksJson };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for the class E slalom tricks in the wheelings category -->
<TricksPage
  title="Wheelings, Class E Slalom Tricks"
  description="The list of class E slalom tricks in the wheelings category"
  {tricksJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
