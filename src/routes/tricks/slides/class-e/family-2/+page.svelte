<!-- The page for all the class E family 2 slides -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slides/class-E/family-2.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class E family 2 slides -->
<TrickPage title="Class E, Family 2 Slides" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />