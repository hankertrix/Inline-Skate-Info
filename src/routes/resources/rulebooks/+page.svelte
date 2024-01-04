<!-- The page to display the list of rulebooks -->
<script lang="ts">
  import listsJson from '$lib/data/lists/rulebooks.json';
  import ListsPage from '$lib/components/pages/lists/ListsPage.svelte';
</script>

<!-- The HTML for the page -->
<ListsPage title="Rulebooks" description="The list of rulebooks for you to peruse" {listsJson} />
