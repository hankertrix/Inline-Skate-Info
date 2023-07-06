<!-- The page for all the class B slalom tricks in the wheelings category -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slalom/class-B/wheelings.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class B slalom tricks in the wheelings category -->
<TrickPage title="Wheelings, Class B Slalom Tricks" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />