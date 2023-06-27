<!-- The component to display a single search result on the search page -->
<script lang="ts">

  import type { PagefindResult } from "$lib/types";

  // The search result passed in by the search page
  export let result: PagefindResult;

  // The regular expression to convert the URL given by pagefind to the actual website link
  const convertUrlRegex = /.*pages/;

  // Function to convert the URL given by pagefind to the actual website link
  function convertPagefindUrl(url: string) {
    return url.replace(convertUrlRegex, "");
  }
  
</script>

<!-- The styles for the search result -->
<style>
  
</style>

<!-- The HTML for the search result -->