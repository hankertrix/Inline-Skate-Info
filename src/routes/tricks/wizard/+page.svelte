<!-- The page for all the wizard tricks -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/wizard.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the wizard tricks page -->
<TrickPage title="Wizard Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />