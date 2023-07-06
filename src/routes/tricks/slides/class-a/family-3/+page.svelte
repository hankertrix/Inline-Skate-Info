<!-- The page for all the class A family 3 slides -->
<script lang="ts" context="module">

  import tricksJson from "$lib/data/tricks/slides/class-A/family-3.json";
  export { tricksJson };

</script>

<script lang="ts">

  // Import the trick page component
  import TrickPage from "$lib/components/pages/tricks/TrickPage.svelte";
  
</script>

<!-- The HTML for the class A family 3 slides -->
<TrickPage title="Class A, Family 3 Slides" {tricksJson} headingLevel={3} changeInHeadingLevel={1} />