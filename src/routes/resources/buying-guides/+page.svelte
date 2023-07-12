<!-- The page to display the list of buying guides -->
<script lang="ts">

  import listsJson from "$lib/data/lists/buying-guides.json";
  import ListsPage from "$lib/components/pages/lists/ListsPage.svelte";
  
</script>

<!-- The HTML for the page -->
<ListsPage title="Buying Guides" {listsJson} />