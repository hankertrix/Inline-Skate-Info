<!-- The page for all the class C aggressive tricks in the spins category -->
<script lang="ts">

  import tricksJson from "$lib/data/tricks/aggressive/class-C/spins.json";
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";

</script>

<!-- The HTML for the class C aggressive tricks in the spins category -->
<TrickPage title="Spins, Class C Aggressive Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />