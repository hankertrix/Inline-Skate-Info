<!-- The page for all the class A aggressive tricks in the spins category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/aggressive/class-A/spins.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class A aggressive tricks in the spins category -->
<!-- <TrickPage title="Spins, Class A Aggressive Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} /> -->