<!-- The page for all the miscellaneous tricks -->
<script lang="ts">

  import miscellaneousTricksJson from "$lib/data/tricks/misc.json";
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";

</script>

<!-- The HTML for the miscellaneous tricks page -->
<TrickPage title="Miscellaneous Tricks" tricksJson={miscellaneousTricksJson} headingLevel={3} changeInHeadingLevel={1} />