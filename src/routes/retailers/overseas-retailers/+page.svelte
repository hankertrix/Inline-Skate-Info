<!-- The page to display all of the overseas retailers -->
<script lang="ts" context="module">

  import placesJson from "$lib/data/places/overseas-retailers.json";
  export { placesJson };
  
</script>

<script lang="ts">

  import PlacesPage from "$lib/components/pages/places/PlacesPage.svelte";
  
</script>

<!-- The HTML for the page -->
<PlacesPage title="Overseas Retailers" {placesJson} headingLevel={3} changeInHeadingLevel={1} />