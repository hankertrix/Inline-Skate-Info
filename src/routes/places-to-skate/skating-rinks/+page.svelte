<!-- The page to display all of the skating rinks in Singapore -->
<script lang="ts" context="module">
  import placesJson from '$lib/data/places/skating-rinks.json';
  export { placesJson };
</script>

<script lang="ts">
  import PlacesPage from '$lib/components/pages/places/PlacesPage.svelte';
</script>

<!-- The HTML for the page -->
<PlacesPage
  title="Skating Rinks"
  description="The list of inline skating rinks in Singapore"
  {placesJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
