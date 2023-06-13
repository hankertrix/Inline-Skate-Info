<!-- The side bar that the hamburger menu opens up -->
<script lang="ts">
  import TableOfContents from "$lib/components/nav-bar/sidebar/table-of-contents/TableOfContents.svelte";
</script>

<!-- The styles for the side bar -->
<style>

  ul {
    --sidebar-list-style-type: none;

    margin: 0 8px;
    padding: 0 0 8px 0;
    list-style-type: var(--sidebar-list-style-type);
  }
  
</style>

<!-- The HTML for the side bar -->
<nav>
  <ul>
    <TableOfContents />
    <li>A</li>
    <li>Side</li>
    <li>Bar</li>
  </ul>
</nav>