<!-- The component to display a category of brands, or single brand -->
<script lang="ts">

  import type { JsonData } from "$lib/types";
  import { makeUrlFriendlyString } from "$lib/utils";

  // The type representing a brand
  type Brand = {
    link: string,
    description: string
  };

  // The variable to take in the JSON data for the brands
  export let brandsJson: JsonData;

  // The variable to take in the heading level
  export let headingLevel: number = 2;

  // The variable to take in the change in heading level
  export let changeInHeadingLevel: number = 1;

  // The variable to take in the ID of the parent category
  export let parentId: string = "";


  // Function to check if an object is a brand object
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  function isBrandObject(obj: any) {
    return Object.prototype.hasOwnProperty.call(obj, "link") &&
    Object.prototype.hasOwnProperty.call(obj, "description");
  }


  // Function to cast an object as a brand object
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  function castAsBrandObject(obj: any): Brand {
    return obj as Brand;
  }
  
</script>

<!-- The styles for the brands section -->
<style>

  .brand {
    margin-bottom: 5em;
  }

  .brand-category {
    margin: 3em 0;
  }

  .brand-category + .brand-category {
    margin: 10em 0;
  }
  
</style>

<!-- The HTML for the brands section -->
<!-- Iterates over the brands JSON data -->
{#each Object.entries(brandsJson) as [name, obj]}

  <!-- Gets the URL friendly string of the brands or category name -->
  {@const urlFriendlyName = makeUrlFriendlyString(name)}
  
  <!-- Creates the heading ID -->
  {@const headingId = `${parentId ? `${parentId}-` : ""}${urlFriendlyName}`}

  <!-- Gets the heading -->
  {@const heading = `h${headingLevel}`}

  <!-- If the object is a brand object -->
  {#if isBrandObject(obj)}

    <!-- Cast the object as a brand object -->
    {@const brandObj = castAsBrandObject(obj)}

    <article class="brand">

      <svelte:element this={heading} id={urlFriendlyName} class="text"><a href={brandObj.link} target="_blank" title="Visit the website">{name}</a></svelte:element>

      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      <p class="text">{@html brandObj.description}</p>

    </article>

  <!-- Otherwise, the object is a category of brands -->
  {:else}

    <section class="brand-category">
      
      <!-- Adds the category title -->
      <svelte:element this={heading} id={urlFriendlyName} class="text">{name}</svelte:element>
      <svelte:self brandsJson={obj} headingLevel={headingLevel + changeInHeadingLevel} {changeInHeadingLevel} parentId={headingId} />
      
    </section>

  {/if}

{/each}
