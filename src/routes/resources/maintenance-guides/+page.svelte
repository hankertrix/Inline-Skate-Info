<!-- The page to display the list of maintenance guides -->
<script lang="ts">

  import listsJson from "$lib/data/lists/maintenance-guides.json";
  import ListsPage from "$lib/components/pages/lists/ListsPage.svelte";
  
</script>

<!-- The HTML for the page -->
<ListsPage title="Maintenance Guides" description="The list of maintenance guides for you to peruse" {listsJson} />