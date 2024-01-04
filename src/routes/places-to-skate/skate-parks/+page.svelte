<!-- The page to display all of the skate parks in Singapore -->
<script lang="ts" context="module">
  import placesJson from '$lib/data/places/skate-parks.json';
  export { placesJson };
</script>

<script lang="ts">
  import PlacesPage from '$lib/components/pages/places/PlacesPage.svelte';
</script>

<!-- The HTML for the page -->
<PlacesPage
  title="Skate Parks"
  description="The list of skate parks in Singapore"
  {placesJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
