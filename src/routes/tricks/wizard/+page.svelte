<!-- The page for all the wizard tricks -->
<script lang="ts" module>
  import tricksJson from '$lib/data/tricks/wizard.json';
  export { tricksJson };
</script>

<script lang="ts">
  // Import the trick page component
  import TricksPage from '$lib/components/pages/tricks/TricksPage.svelte';
</script>

<!-- The HTML for the wizard tricks page -->
<TricksPage
  title="Wizard Tricks"
  description="The list of wizard tricks"
  {tricksJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
