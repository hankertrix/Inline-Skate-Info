<!-- The page for all the stops -->
<script lang="ts">

  import stopsJson from "$lib/data/tricks/stops.json";
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";

</script>

<!-- The HTML for the stops page -->
<TrickPage title="Stops" tricksJson={stopsJson} headingLevel={3} changeInHeadingLevel={1} />