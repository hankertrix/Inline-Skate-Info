<!-- The page to display all of the places to skate in Singapore -->
<script lang="ts">

  import { placesJson as skatingRinksJson } from "./skating-rinks/+page.svelte";
  import { placesJson as skateParksJson } from "./skate-parks/+page.svelte";
  import PlacesPage from "$lib/components/pages/places/PlacesPage.svelte";


  // The places JSON to pass to the page
  const placesJson = {
    "Skating Rinks": skatingRinksJson,
    "Skate Parks": skateParksJson,
  };
  
</script>

<!-- The HTML for the page -->
<PlacesPage title="Places to Skate" {placesJson} headingLevel={2} changeInHeadingLevel={1} />