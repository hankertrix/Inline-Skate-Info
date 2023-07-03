<!-- The page for all the jumps -->
<script lang="ts">

  import tricksJson from "$lib/data/tricks/jumps.json";
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";

</script>

<!-- The HTML for the jumps page -->
<TrickPage title="Jumps" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />