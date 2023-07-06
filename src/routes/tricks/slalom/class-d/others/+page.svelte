<!-- The page for all the class D slalom tricks in the others category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slalom/class-D/others.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class D slalom tricks in the others category -->
<TrickPage title="Others, Class D Slalom Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />