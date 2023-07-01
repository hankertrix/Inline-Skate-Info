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

  // The parent titles that are url friendly to create the ID
  export let parentUrlTitles: string = "";
  
  // Function to check if a title has any children
  function titleHasChildren(obj: any) {
    return (obj instanceof String || typeof obj !== "string") && Object.keys(obj).length > 0;
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

  .menu-toggler:hover > .icon {
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
  
</style>

<!-- The HTML for the collapsible menu -->
<!-- Iterates over all the titles in the pages object given -->
{#each Object.entries(pages) as [title, child]}
  {@const urlFriendlyTitle = makeUrlFriendlyString(title)}
  {@const currentUrl = `${urlStart}${urlFriendlyTitle}/`}
  {@const checkboxIdFragment = `${parentUrlTitles.trim() === "" ? parentUrlTitles : `${parentUrlTitles}-`}${urlFriendlyTitle}`}
  {@const checkboxId = `${checkboxIdFragment}-sidebar`}

  <!-- If the current title has any children -->
  {#if titleHasChildren(child)}
    
    <!-- The checkbox that controls the opening and the closing of the menu -->
    <input type="checkbox" id={checkboxId} />

    <!-- The label to open and close the collapsible menu -->
    <div class="menu">
      <a href={currentUrl} title={`Go to the page called '${title}'`}>{title}</a>
      <label class="menu-toggler" for={checkboxId} title={`Show or hide the pages under '${title}'`}>
        <div class="icon"></div>
      </label>
    </div>

    <!-- The collapsible menu to open and close -->
    <ul>
      <svelte:self pages={child} urlStart={currentUrl} parentUrlTitles={checkboxIdFragment} />
    </ul>

  <!-- If the cuurent title has no children -->
  {:else}

    <!-- Displays the current title as a list element -->
    <li>
      <a href={currentUrl} title={`Go to the page called '${title}'`}>{title}</a>
    </li>
    
  {/if}
{/each}