<!-- The page for all the turns -->
<script lang="ts">

  import turnsJson from "$lib/data/tricks/turns.json";
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";

</script>

<!-- The HTML for the turns page -->
<TrickPage title="Turns" tricksJson={turnsJson} headingLevel={3} changeInHeadingLevel={1} />