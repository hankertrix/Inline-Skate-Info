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

  input {
    display: none;
  }

  a {
    text-decoration: none;
    color: var(--text-colour);
    opacity: var(--text-opacity);
  }
  
  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
  }

  .table-of-contents {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .table-of-contents-title {
    color: var(--icon-colour);
  }
  
  .table-of-contents:hover .table-of-contents-title {
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

  .table-of-contents:hover .icon {
    border-right-color: var(--icon-hover-colour);
  }

  ul {
    max-height: 0;
    overflow: hidden;
    margin: 0 8px;
    padding: 0;
    list-style-type: var(--sidebar-list-style-type);
  }

  input:checked + .menu + ul {
    max-height: 100%;
  }

  input:checked + .menu .icon {
    rotate: -90deg;
    translate: 0 2px;
  }

  li > a {
    display: block;
    width: 100%;
  }
  
</style>

<!-- The HTML for the collapsible menu -->
<!-- Iterates over all the titles in the given table of contents -->
{#each [...tableOfContents.entries()] as [title, child]}
  {@const urlFriendlyTitle = makeUrlFriendlyString(title)}
  {@const checkboxId = `${urlFriendlyTitle}-table-of-contents`}

  <!-- If the current title has any children -->
  {#if titleHasChildren(child)}
    
    <!-- The checkbox that controls the opening and the closing of the menu -->
    <input type="checkbox" id={checkboxId} />

    <!-- The label to open and close the collapsible menu -->
    <!-- If the title is actually the table of contents -->
    {#if title === "Table Of Contents"}

      <label class="menu" for={checkboxId} title="Show or hide the table of contents">
        <div class="table-of-contents">
          <div class="table-of-contents-title">{title}</div>
          <div class="menu-toggler">
            <div class="icon"></div>
          </div>
        </div>
      </label>

    <!-- If the title is a regular heading in the page -->
    {:else}
      
      <div class="menu">
        <a href={`#${urlFriendlyTitle}`} title={`Go to the section called '${title}'`}>{title}</a>
        <label class="menu-toggler" for={checkboxId} title={`Show or hide the sections under '${title}'`}>
          <div class="icon"></div>
        </label>
      </div>

    {/if}

    <!-- The collapsible menu to open and close -->
    <ul>
      <svelte:self tableOfContents={child} />
    </ul>

  <!-- If the cuurent title has no children -->
  {:else}

    <!-- Displays the current title as a list element -->
    <li>
      <a href={`#${urlFriendlyTitle}`} title={`Go to the section called '${title}'`}>{title}</a>
    </li>
    
  {/if}
{/each}