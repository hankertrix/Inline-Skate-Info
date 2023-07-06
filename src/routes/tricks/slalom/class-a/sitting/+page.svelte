<!-- The page for all the class A slalom tricks in the sitting category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slalom/class-A/sitting.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class A slalom tricks in the sitting category -->
<TrickPage title="Sitting, Class A Slalom Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />