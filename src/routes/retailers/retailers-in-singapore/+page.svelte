<!-- The page to display all of the retailers in Singapore -->
<script lang="ts" context="module">

  import placesJson from "$lib/data/places/retailers-in-singapore.json";
  export { placesJson };
  
</script>

<script lang="ts">

  import PlacesPage from "$lib/components/pages/places/PlacesPage.svelte";
  
</script>

<!-- The HTML for the page -->
<PlacesPage title="Retailers In Singapore" description="The list of retailers in Singapore where you can buy inline skating products" {placesJson} headingLevel={3} changeInHeadingLevel={1} />