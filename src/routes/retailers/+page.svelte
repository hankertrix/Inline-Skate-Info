<!-- The page to display all of the retailers -->
<script lang="ts">

  import { placesJson as retailersInSingaporeJson } from "./retailers-in-singapore/+page.svelte";
  import { placesJson as onlineRetailersJson } from "./online-retailers/+page.svelte";
  import { placesJson as overseasRetailersJson } from "./overseas-retailers/+page.svelte";
  import PlacesPage from "$lib/components/pages/places/PlacesPage.svelte";


  // The places JSON to pass to the page
  const placesJson = {
    "Retailers In Singapore": retailersInSingaporeJson,
    "Online Retailers": onlineRetailersJson,
    "Overseas Retailers": overseasRetailersJson,
  };
  
</script>

<!-- The HTML for the page -->
<PlacesPage title="Retailers" {placesJson} headingLevel={2} changeInHeadingLevel={1} />