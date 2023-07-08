<!-- The page for all the class B family 4 slides -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slides/class-B/family-4.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the class B family 4 slides -->
<TricksPage title="Class B, Family 4 Slides" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />