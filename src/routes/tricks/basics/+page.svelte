<!-- The page for all the basic tricks -->
<script lang="ts">

  import tricksJson from "$lib/data/tricks/basics.json";
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";

</script>

<!-- The HTML for the basic tricks page -->
<TrickPage title="Basic Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />