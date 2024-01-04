<!-- The page for all the basic tricks -->
<script lang="ts" context="module">
  import tricksJson from '$lib/data/tricks/basics.json';
  export { tricksJson };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for the basic tricks page -->
<TricksPage
  title="Basic Tricks"
  description="The list of basic tricks in inline skating"
  {tricksJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
