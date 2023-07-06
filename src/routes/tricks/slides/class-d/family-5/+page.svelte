<!-- The page for all the class D family 5 slides -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slides/class-D/family-5.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class D family 5 slides -->
<TrickPage title="Class D, Family 5 Slides" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />