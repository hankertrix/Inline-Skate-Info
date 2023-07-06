<!-- The page for all the turns -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/turns.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the turns page -->
<TrickPage title="Turns" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />