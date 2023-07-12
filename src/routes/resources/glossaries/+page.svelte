<!-- The page to display the list of glossaries -->
<script lang="ts">

  import listsJson from "$lib/data/lists/glossaries.json";
  import ListsPage from "$lib/components/pages/lists/ListsPage.svelte";
  
</script>

<!-- The HTML for the page -->
<ListsPage title="Glossaries" {listsJson} />