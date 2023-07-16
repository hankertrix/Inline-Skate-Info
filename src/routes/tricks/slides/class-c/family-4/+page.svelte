<!-- The page for all the class C family 4 slides -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slides/class-C/family-4.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the class C family 4 slides -->
<TricksPage title="Class C, Family 4 Slides" description="The list of class C slides in family 4" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />