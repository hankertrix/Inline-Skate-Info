<!-- The side bar that the hamburger menu opens up -->
<script lang="ts">
  import TableOfContents from "$lib/components/layout/nav-bar/sidebar/table-of-contents/TableOfContents.svelte";
  import SidebarCollapsibleMenu from "$lib/components/layout/nav-bar/sidebar/SidebarCollapsibleMenu.svelte";
  import { PAGES } from "$lib/constants";
  
</script>

<!-- The styles for the side bar -->
<style>

  ul {
    --sidebar-list-style-type: none;

    margin: 0 0 0 15px;
    padding: 0 10px 10px 0;
    list-style-type: var(--sidebar-list-style-type);
    max-height: calc(100svh - var(--nav-bar-height));
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-gutter: stable;
  }
  
</style>

<!-- The HTML for the side bar -->
<nav>
  <ul>
    <TableOfContents />
    <SidebarCollapsibleMenu pages={PAGES} />
  </ul>
</nav>