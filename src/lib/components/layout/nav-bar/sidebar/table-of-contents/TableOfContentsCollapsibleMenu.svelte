<!-- The collapsible menu that is to be created as part of the table of contents -->

<script lang="ts">

  import { makeUrlFriendlyString } from "$lib/utils";

  // The table of contents variable to be passed to the collapsible menu
  export let tableOfContents: Map<string, any>;
  
  // Function to check if a title has any children
  function titleHasChildren(obj: any) {
    return obj instanceof Map && obj.size > 0;
  }
  
</script>

<!-- The styles for the collapsible menu -->
<style>

  a {
    text-decoration: none;
    color: var(--text-colour);
    opacity: var(--text-opacity);
  }

  summary {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  .table-of-contents-title {
    color: var(--icon-colour);
  }
  
  summary:hover .table-of-contents-title {
    color: var(--icon-hover-colour);
  }

  .menu-toggler {
    flex: 1;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
  }

  .icon {
    --triangle-size: 6px;
    
    width: 0;
    height: 0;
    border-top: var(--triangle-size) solid transparent;
    border-bottom: var(--triangle-size) solid transparent;
    border-right: var(--triangle-size) solid var(--icon-colour);
    margin-right: 0.5em;
    transition: rotate var(--animation-timing), translate var(--animation-timing);
  }

  summary:hover .icon {
    border-right-color: var(--icon-hover-colour);
  }

  ul {
    margin: 0 8px;
    padding: 0;
    list-style-type: var(--sidebar-list-style-type);
  }

  li > a {
    display: block;
    width: 100%;
  }


  /* The styles when the collapsible is open */

  details[open] > summary > .menu-toggler > .icon {
    rotate: -90deg;
    translate: 0 2px;
  }
  
</style>

<!-- The HTML for the collapsible menu -->
<!-- Iterates over all the titles in the given table of contents -->
{#each [...tableOfContents.entries()] as [title, child]}
  {@const urlFriendlyTitle = makeUrlFriendlyString(title)}

  <!-- If the current title has any children -->
  {#if titleHasChildren(child)}

    <details>
      
      <!-- The label to open and close the collapsible menu -->
      <!-- If the title is actually the table of contents -->
      {#if title === "Table Of Contents"}

        <summary title="Show or hide the table of contents">
          <div class="table-of-contents-title">{title}</div>
          <div class="menu-toggler">
            <div class="icon"></div>
          </div>
        </summary>

      <!-- If the title is a regular heading in the page -->
      {:else}

        <summary>
          <a href={`#${urlFriendlyTitle}`} title={`Go to the section called '${title}'`}>{title}</a>
          <div class="menu-toggler" title={`Show or hide the sections under '${title}'`}>
            <div class="icon"></div>
          </div>
        </summary>
        
      {/if}

      <!-- The collapsible menu to open and close -->
      <ul>
        <svelte:self tableOfContents={child} />
      </ul>
        
    </details>

  <!-- If the cuurent title has no children -->
  {:else}

    <!-- Displays the current title as a list element -->
    <li>
      <a href={`#${urlFriendlyTitle}`} title={`Go to the section called '${title}'`}>{title}</a>
    </li>
    
  {/if}
  
{/each}