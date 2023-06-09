<!-- The side bar that the hamburger menu opens up -->
<script lang="ts">
  
  import type { JsonPageData } from "$lib/types";
  
  // The page data in JSON to pass to the table of contents element
  export let jsonPageData: JsonPageData = {};
  
</script>

<!-- The styles for the side bar -->
<style>

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
</style>

<!-- The HTML for the side bar -->
<nav>
  <ul class="text">
    <li>A</li>
    <li>Side</li>
    <li>Bar</li>
  </ul>
</nav>