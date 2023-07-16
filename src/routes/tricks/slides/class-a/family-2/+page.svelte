<!-- The page for all the class A family 2 slides -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slides/class-A/family-2.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TricksPage from "$lib/components/pages/tricks/TricksPage.svelte";
  
</script>

<!-- The HTML for the class A family 2 slides -->
<TricksPage title="Class A, Family 2 Slides" description="The list of class A slides in family 2" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />