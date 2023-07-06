<!-- The page for all the fundamental tricks -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/fundamentals.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the fundamental tricks page -->
<TrickPage title="Fundamental Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />