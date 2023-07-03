<!-- The page for all the wizard tricks -->
<script lang="ts">

  import wizardTricksJson from "$lib/data/tricks/wizard.json";
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";

</script>

<!-- The HTML for the wizard tricks page -->
<TrickPage title="Wizard Tricks" tricksJson={wizardTricksJson} headingLevel={3} changeInHeadingLevel={1} />