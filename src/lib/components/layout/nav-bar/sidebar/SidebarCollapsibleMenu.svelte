<!-- The collapsible menu that is to be created as part of the sidebar -->
<script lang="ts">

  import { makeUrlFriendlyString } from "$lib/utils";

  // The pages type for the pages variable
  type Pages = {
    [title: string]: string | Pages
  };

  // The pages variable to be passed to the collapsible menu
  export let pages: Pages;

  // The start of the url to add on to, defaults to the main page
  export let urlStart: string = "/";

  
  // Function to check if a title has any children
  function titleHasChildren(obj: any) {
    return (obj instanceof String || typeof obj !== "string") && Object.keys(obj).length > 0;
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
    margin: 0 0.5em;
    transition: rotate var(--animation-timing), translate var(--animation-timing);
  }

  .menu-toggler:hover > .icon {
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
<!-- Iterates over all the titles in the pages object given -->
{#each Object.entries(pages) as [title, child]}
  {@const urlFriendlyTitle = makeUrlFriendlyString(title)}
  {@const currentUrl = `${urlStart}${urlFriendlyTitle}/`}

  <!-- If the current title has any children -->
  {#if titleHasChildren(child)}
    
    <li>
      <details>
        
        <!-- The summary element to open and close the collapsible menu -->
        <summary>
          <a href={currentUrl} title={`Go to the page called '${title}'`}>{title}</a>
          <div class="menu-toggler" title={`Show or hide the pages under '${title}'`}>
            <div class="icon"></div>
          </div>
        </summary>

        <!-- The collapsible menu to open and close -->
        <ul>
          <svelte:self pages={child} urlStart={currentUrl} />
        </ul>

      </details>
    </li>

  <!-- If the cuurent title has no children -->
  {:else}

    <!-- Displays the current title as a list element -->
    <li>
      <a href={currentUrl} title={`Go to the page called '${title}'`}>{title}</a>
    </li>
    
  {/if}
{/each}