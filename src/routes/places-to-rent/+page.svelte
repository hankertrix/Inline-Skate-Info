<!-- The page to display all of the places where you can rent skates in Singapore -->
<script lang="ts">

  import placesJson from "$lib/data/places/places-to-rent.json";
  import PlacesPage from "$lib/components/pages/places/PlacesPage.svelte";
  
</script>

<!-- The HTML for the page -->
<PlacesPage title="Places to Rent" description="The list of places to rent skates" {placesJson} headingLevel={3} changeInHeadingLevel={1} />