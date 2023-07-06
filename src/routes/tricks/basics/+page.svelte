<!-- The page for all the basic tricks -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/basics.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the basic tricks page -->
<TrickPage title="Basic Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />