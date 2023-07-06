<!-- The page for all the class B slalom tricks in the spins category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slalom/class-B/spins.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class B slalom tricks in the spins category -->
<TrickPage title="Spins, Class B Slalom Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />