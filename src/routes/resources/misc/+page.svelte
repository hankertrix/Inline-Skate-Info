<!-- The page to display the list of miscellaneous resources -->
<script lang="ts">
  import listsJson from '$lib/data/lists/misc-resources.json';
  import ListsPage from '$lib/components/pages/lists/ListsPage.svelte';
</script>

<!-- The HTML for the page -->
<ListsPage
  title="Miscellaneous Resources"
  description="The list of miscellaneous resources for you to peruse"
  {listsJson}
/>
