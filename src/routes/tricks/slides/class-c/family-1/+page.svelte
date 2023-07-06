<!-- The page for all the class C family 1 slides -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slides/class-C/family-1.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class C family 1 slides -->
<TrickPage title="Class C, Family 1 Slides" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />