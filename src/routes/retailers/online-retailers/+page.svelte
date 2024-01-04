<!-- The page to display all of the exclusively online retailers -->
<script lang="ts" context="module">
  import placesJson from '$lib/data/places/online-retailers.json';
  export { placesJson };
</script>

<script lang="ts">
  import PlacesPage from '$lib/components/pages/places/PlacesPage.svelte';
</script>

<!-- The HTML for the page -->
<PlacesPage
  title="Online Retailers"
  description="The list of online retailers where you can buy inline skating products"
  {placesJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
