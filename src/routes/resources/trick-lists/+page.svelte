<!-- The page to display the list of trick lists -->
<script lang="ts">

  import listsJson from "$lib/data/lists/trick-lists.json";
  import ListsPage from "$lib/components/pages/lists/ListsPage.svelte";
  
</script>

<!-- The HTML for the page -->
<ListsPage title="Trick Lists" {listsJson} />